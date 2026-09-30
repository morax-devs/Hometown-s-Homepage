import { useState } from 'react'
import { Link } from 'react-router-dom'
import { generateAiTripPlan } from '../utils/aiTravelEngine'

function AiPlanner({ tripList, addToTrip }) {
  // Form State
  const [prompt, setPrompt] = useState('')
  const [destination, setDestination] = useState('any')
  const [travelers, setTravelers] = useState('Friends Group (3-5)')
  const [duration, setDuration] = useState('3-4 Days (Standard)')
  const [budget, setBudget] = useState('Comfortable / Mid-Range (₹₹)')
  const [selectedVibes, setSelectedVibes] = useState(['🏖️ Beaches', '🎉 Nightlife & Crowds'])
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('gemini_api_key') || '')
  const [showKeyInput, setShowKeyInput] = useState(false)

  // Output & Loading State
  const [loading, setLoading] = useState(false)
  const [loadingStep, setLoadingStep] = useState('')
  const [plan, setPlan] = useState(null)
  const [addedAll, setAddedAll] = useState(false)
  const [toastMsg, setToastMsg] = useState('')

  const samplePrompts = [
    { label: "🏖️ Crowded, fun & exciting beach getaway", text: "I want to go to a crowded place, fun, exciting but not dangerous, with beaches and beach shacks" },
    { label: "🍛 Delhi street food & Mughal heritage", text: "3 days in Delhi for college friends: crazy street food, cheap shopping, and historical monuments without getting scammed" },
    { label: "🕉️ Spiritual & peaceful Prayagraj Sangam", text: "Peaceful spiritual 2-day pilgrimage to holy Sangam with family and parents" },
    { label: "🏰 Royal palaces & bazaars in Jaipur", text: "Couple trip to see grand desert forts, royal palaces, Rajasthani thalis, and shopping" },
    { label: "🏔️ Manali mountains & snow adventure", text: "Weekend mountain escape with friends: river views, cozy cafes, and paragliding" }
  ]

  const availableVibes = [
    '🏖️ Beaches',
    '🎉 Nightlife & Crowds',
    '🍛 Street Food',
    '🏛️ Heritage & Forts',
    '🕉️ Spiritual',
    '🏔️ Mountains',
    '🛍️ Shopping & Bazaars'
  ]

  function toggleVibe(vibe) {
    if (selectedVibes.includes(vibe)) {
      setSelectedVibes(selectedVibes.filter(v => v !== vibe))
    } else {
      setSelectedVibes([...selectedVibes, vibe])
    }
  }

  function handleSelectSample(sample) {
    setPrompt(sample.text)
    if (sample.text.includes('beach')) {
      setDestination('any')
      setSelectedVibes(['🏖️ Beaches', '🎉 Nightlife & Crowds'])
    } else if (sample.text.includes('Delhi')) {
      setDestination('delhi')
      setSelectedVibes(['🍛 Street Food', '🏛️ Heritage & Forts'])
    } else if (sample.text.includes('Prayagraj')) {
      setDestination('prayagraj')
      setSelectedVibes(['🕉️ Spiritual', '🏛️ Heritage & Forts'])
    } else if (sample.text.includes('Jaipur')) {
      setDestination('jaipur')
      setSelectedVibes(['🏛️ Heritage & Forts', '🛍️ Shopping & Bazaars'])
    } else if (sample.text.includes('Manali')) {
      setDestination('manali')
      setSelectedVibes(['🏔️ Mountains'])
    }
  }

  function triggerToast(msg) {
    setToastMsg(msg)
    setTimeout(() => setToastMsg(''), 2600)
  }

  async function handleGenerate(e) {
    if (e) e.preventDefault()
    setLoading(true)
    setPlan(null)
    setAddedAll(false)

    setLoadingStep('🔍 Analyzing vibe & intent...')
    await new Promise(r => setTimeout(r, 400))

    setLoadingStep('🗺️ Filtering and arranging places across India...')
    await new Promise(r => setTimeout(r, 450))

    try {
      const result = await generateAiTripPlan({
        prompt,
        destination,
        travelers,
        duration,
        budget,
        vibes: selectedVibes,
        apiKey
      })
      setPlan(result)
      setLoading(false)
      // Smooth scroll down to plan
      setTimeout(() => {
        const el = document.getElementById('ai-plan-results')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } catch (err) {
      console.error(err)
      setLoading(false)
      triggerToast('✕ Error generating plan. Please try again.')
    }
  }

  function handleAddAllToTrip() {
    if (!plan) return
    let count = 0
    if (plan.recommendedAttractions) {
      plan.recommendedAttractions.forEach(item => {
        addToTrip(item)
        count++
      })
    }
    if (plan.recommendedFood) {
      plan.recommendedFood.forEach(item => {
        addToTrip(item)
        count++
      })
    }
    if (plan.recommendedStays) {
      plan.recommendedStays.forEach(item => {
        addToTrip(item)
        count++
      })
    }
    setAddedAll(true)
    triggerToast(`✓ Added ${count} places to My Trip!`)
  }

  function isItemInTrip(id) {
    return tripList.some(item => (item.id || item.title) === id)
  }

  return (
    <div className="ai-planner-page">
      {/* Hero Header */}
      <div className="planner-hero">
        <div className="planner-hero-badge">⚡ AI-Powered Indian Travel Agent</div>
        <h1>Plan Your Perfect Indian Journey</h1>
        <p>
          Don't get overwhelmed by thousands of unorganized internet reviews. Tell our AI your vibe, budget, and group — we'll arrange the ideal destination, daily itinerary, food, and stays.
        </p>
      </div>

      {toastMsg && <div className="trip-toast">{toastMsg}</div>}

      {/* Main Questionnaire Box */}
      <div className="planner-card">
        <form onSubmit={handleGenerate}>
          {/* Prompt Section */}
          <div className="form-group prompt-group">
            <label htmlFor="user-prompt">
              <strong>1. Describe your dream vibe in your own words:</strong>
            </label>
            <textarea
              id="user-prompt"
              rows={3}
              placeholder="e.g. I want to go to a crowded place, fun, exciting but not dangerous, with lively beaches and shacks... or 3 days in Delhi on a college budget with spicy street food"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            {/* Quick Sample Prompts */}
            <div className="sample-prompts">
              <span className="sample-label">💡 Try an example:</span>
              <div className="sample-chips">
                {samplePrompts.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="sample-chip"
                    onClick={() => handleSelectSample(s)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form Selectors Grid */}
          <div className="planner-grid">
            {/* Preferred Destination */}
            <div className="form-group">
              <label><strong>2. Destination Preference:</strong></label>
              <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option value="any">🤖 Let AI Suggest the Best City</option>
                <option value="delhi">Delhi (Heritage, Street Food & Metro)</option>
                <option value="goa">Goa (Beaches, Shacks & Nightlife)</option>
                <option value="prayagraj">Prayagraj (Sangam, Holy & Cultural)</option>
                <option value="jaipur">Jaipur (Pink City, Palaces & Forts)</option>
                <option value="manali">Manali (Snow Peaks & River Valley)</option>
                <option value="mumbai">Mumbai (Marine Drive & City Energy)</option>
              </select>
            </div>

            {/* Travelers */}
            <div className="form-group">
              <label><strong>3. Who is Traveling?</strong></label>
              <select value={travelers} onChange={(e) => setTravelers(e.target.value)}>
                <option value="Solo (1)">Solo Traveler (1)</option>
                <option value="Couple (2)">Couple (2)</option>
                <option value="Friends Group (3-5)">Friends Group (3-5)</option>
                <option value="Family with Kids">Family with Kids</option>
                <option value="Large Group (6+)">Large Group (6+)</option>
              </select>
            </div>

            {/* Duration */}
            <div className="form-group">
              <label><strong>4. Trip Duration:</strong></label>
              <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option value="1-2 Days (Weekend)">1-2 Days (Weekend Trip)</option>
                <option value="3-4 Days (Standard)">3-4 Days (Standard Trip)</option>
                <option value="5-7 Days (Extended)">5-7 Days (Extended Vacation)</option>
              </select>
            </div>

            {/* Budget */}
            <div className="form-group">
              <label><strong>5. Budget Level:</strong></label>
              <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option value="Budget / Backpacker (₹)">Budget / Backpacker (₹)</option>
                <option value="Comfortable / Mid-Range (₹₹)">Comfortable / Mid-Range (₹₹)</option>
                <option value="Luxury (₹₹₹)">Luxury & Heritage (₹₹₹)</option>
              </select>
            </div>
          </div>

          {/* Vibe Chips Multi-Select */}
          <div className="form-group vibes-group">
            <label><strong>6. Select Vibes & Interests:</strong></label>
            <div className="vibe-chips">
              {availableVibes.map((v) => (
                <button
                  type="button"
                  key={v}
                  className={`vibe-chip ${selectedVibes.includes(v) ? 'active' : ''}`}
                  onClick={() => toggleVibe(v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Optional Gemini API Key Drawer */}
          <div className="api-key-toggle-row">
            <button
              type="button"
              className="toggle-key-btn"
              onClick={() => setShowKeyInput(!showKeyInput)}
            >
              ⚙️ {showKeyInput ? 'Hide' : 'Custom'} Google Gemini API Key (Optional)
            </button>
            {showKeyInput && (
              <div className="api-key-box">
                <p className="key-hint">
                  <strong>Note:</strong> Not required! Our built-in Smart Travel Brain works 100% free with rich Indian destinations. If you provide a Google Gemini API key, it generates live open-ended LLM itineraries.
                </p>
                <input
                  type="password"
                  placeholder="Paste Google Gemini API Key (AIzaSy...)"
                  value={apiKey}
                  onChange={(e) => {
                    setApiKey(e.target.value)
                    localStorage.setItem('gemini_api_key', e.target.value)
                  }}
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="planner-submit-row">
            <button type="submit" className="planner-submit-btn" disabled={loading}>
              {loading ? '🧠 Planning Your Trip...' : '✨ Generate My Tailored Trip Plan'}
            </button>
          </div>
        </form>
      </div>

      {/* Loading State Animation */}
      {loading && (
        <div className="planner-loading-card">
          <div className="loading-spinner"></div>
          <h3>Curating your personalized itinerary...</h3>
          <p>{loadingStep}</p>
        </div>
      )}

      {/* Generated Results Showcase */}
      {plan && !loading && (
        <div className="ai-plan-results" id="ai-plan-results">
          {/* Destination Banner Card */}
          <div className="destination-banner">
            <div className="dest-meta-header">
              <span className="dest-tag">📍 Recommended Destination</span>
              {plan.source === 'gemini_ai' ? (
                <span className="ai-badge gemini">✨ Generated by Gemini AI</span>
              ) : (
                <span className="ai-badge smart">⚡ Arranged by Smart Agent</span>
              )}
            </div>

            <h2>{plan.destination}</h2>
            <h4 className="dest-tagline">{plan.tagline}</h4>

            <div className="dest-match-box">
              <strong>💡 Why this was chosen for you:</strong>
              <p>{plan.matchReason}</p>
            </div>

            <div className="dest-stats-grid">
              <div className="dest-stat">
                <span className="stat-label">👥 Travelers</span>
                <strong>{plan.travelers || travelers}</strong>
              </div>
              <div className="dest-stat">
                <span className="stat-label">⏱️ Duration</span>
                <strong>{plan.duration || duration}</strong>
              </div>
              <div className="dest-stat">
                <span className="stat-label">💰 Estimated Cost</span>
                <strong>{plan.estimatedCost || 'Budget-friendly'}</strong>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="dest-actions">
              <button
                className={`btn-add-all ${addedAll ? 'added' : ''}`}
                onClick={handleAddAllToTrip}
              >
                {addedAll ? '✓ All Places Saved to Trip!' : '✨ Add Entire Plan to My Trip'}
              </button>
              <Link to="/my-trip" className="btn-view-trip">
                View My Itinerary ({tripList.length}) →
              </Link>
            </div>
          </div>

          {/* Day-by-Day Schedule */}
          {plan.dayPlans && plan.dayPlans.length > 0 && (
            <div className="plan-section">
              <div className="section-title">
                <h3>📅 Day-by-Day Schedule</h3>
                <p>Arranged chronologically so you avoid unnecessary criss-crossing</p>
              </div>

              <div className="day-plans-container">
                {plan.dayPlans.map((dp, i) => (
                  <div className="day-plan-card" key={i}>
                    <div className="day-plan-badge">Day {dp.day || i + 1}</div>
                    <h4>{dp.title}</h4>
                    <div className="timeline-items">
                      <div className="timeline-item">
                        <span className="time-badge">🌅 Morning</span>
                        <p>{dp.morning}</p>
                      </div>
                      <div className="timeline-item">
                        <span className="time-badge">☀️ Afternoon</span>
                        <p>{dp.afternoon}</p>
                      </div>
                      <div className="timeline-item">
                        <span className="time-badge">🌙 Evening</span>
                        <p>{dp.evening}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curated Recommendations: Attractions */}
          {plan.recommendedAttractions && plan.recommendedAttractions.length > 0 && (
            <div className="plan-section">
              <div className="section-title">
                <h3>🏛️ Must-Visit Attractions</h3>
                <p>Iconic landmarks matching your group and safety preferences</p>
              </div>

              <div className="plan-cards-grid">
                {plan.recommendedAttractions.map((item, idx) => {
                  const saved = isItemInTrip(item.id || item.title)
                  return (
                    <div className="plan-item-card" key={idx}>
                      <div className="item-card-top">
                        <span className="item-category-tag">🏛️ Attraction</span>
                        <button
                          className={`btn-card-toggle ${saved ? 'saved' : ''}`}
                          onClick={() => addToTrip({ ...item, id: item.id || item.title, category: 'Attraction' })}
                        >
                          {saved ? '✓ Saved' : '+ Add to Trip'}
                        </button>
                      </div>
                      <h4>{item.title}</h4>
                      {item.subtitle && <p className="item-subtitle">{item.subtitle}</p>}
                      <p className="item-desc">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Curated Recommendations: Dining & Street Food */}
          {plan.recommendedFood && plan.recommendedFood.length > 0 && (
            <div className="plan-section">
              <div className="section-title">
                <h3>🍛 Where to Eat (Curated Food Spots)</h3>
                <p>Authentic local eateries and street food spots curated for your taste & budget</p>
              </div>

              <div className="plan-cards-grid">
                {plan.recommendedFood.map((item, idx) => {
                  const saved = isItemInTrip(item.id || item.title)
                  return (
                    <div className="plan-item-card" key={idx}>
                      <div className="item-card-top">
                        <span className="item-category-tag food">🍛 Dining</span>
                        <button
                          className={`btn-card-toggle ${saved ? 'saved' : ''}`}
                          onClick={() => addToTrip({ ...item, id: item.id || item.title, category: 'Restaurant' })}
                        >
                          {saved ? '✓ Saved' : '+ Add to Trip'}
                        </button>
                      </div>
                      <h4>{item.title}</h4>
                      {item.subtitle && <p className="item-subtitle">{item.subtitle}</p>}
                      <p className="item-desc">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Curated Recommendations: Stays */}
          {plan.recommendedStays && plan.recommendedStays.length > 0 && (
            <div className="plan-section">
              <div className="section-title">
                <h3>🏨 Where to Stay</h3>
                <p>Safe, well-located accommodations matching your budget tier</p>
              </div>

              <div className="plan-cards-grid">
                {plan.recommendedStays.map((item, idx) => {
                  const saved = isItemInTrip(item.id || item.title)
                  return (
                    <div className="plan-item-card" key={idx}>
                      <div className="item-card-top">
                        <span className="item-category-tag stay">🏨 Stay</span>
                        <button
                          className={`btn-card-toggle ${saved ? 'saved' : ''}`}
                          onClick={() => addToTrip({ ...item, id: item.id || item.title, category: 'Stay' })}
                        >
                          {saved ? '✓ Saved' : '+ Add to Trip'}
                        </button>
                      </div>
                      <h4>{item.title}</h4>
                      {item.subtitle && <p className="item-subtitle">{item.subtitle}</p>}
                      <p className="item-desc">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Safety & Local Wisdom Tips */}
          {plan.safetyTips && plan.safetyTips.length > 0 && (
            <div className="plan-section safety-tips-section">
              <div className="safety-card">
                <h4>🛡️ Local Travel Agent Tips & Safety Advice</h4>
                <ul>
                  {plan.safetyTips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Bottom Call to Action */}
          <div className="plan-footer-box">
            <h3>Ready to head out?</h3>
            <p>Your saved spots are stored in your itinerary. Export them to WhatsApp or print as a PDF checklist!</p>
            <Link to="/my-trip" className="btn">
              Open My Trip Planner & Export →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default AiPlanner
