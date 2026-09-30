import { useState } from 'react'
import { Link } from 'react-router-dom'

function MyTrip({ tripList, removeFromTrip, clearTrip }) {
  const [filter, setFilter] = useState('all')
  const [copied, setCopied] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const attractionsCount = tripList.filter((i) => i.category === 'Attraction').length
  const restaurantsCount = tripList.filter((i) => i.category === 'Restaurant').length
  const staysCount = tripList.filter((i) => i.category === 'Stay').length

  const filteredList = tripList.filter((item) => {
    if (filter === 'all') return true
    return item.category === filter
  })

  function showToast(msg) {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 2800)
  }

  function getCategoryBadge(category) {
    switch (category) {
      case 'Attraction':
        return { label: '🏛️ Attraction', className: 'badge-attraction' }
      case 'Restaurant':
        return { label: '🍛 Restaurant', className: 'badge-restaurant' }
      case 'Stay':
        return { label: '🏨 Stay', className: 'badge-stay' }
      default:
        return { label: '📍 Place', className: 'badge-default' }
    }
  }

  function generateItineraryText() {
    const attractions = tripList.filter((i) => i.category === 'Attraction')
    const restaurants = tripList.filter((i) => i.category === 'Restaurant')
    const stays = tripList.filter((i) => i.category === 'Stay')

    const dateStr = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })

    let text = `🧭 MY PRAYAGRAJ TRIP ITINERARY\n`
    text += `Generated on: ${dateStr}\n`
    text += `Total Saved: ${tripList.length} Places (${attractions.length} Attractions • ${restaurants.length} Food Spots • ${stays.length} Stays)\n`
    text += `-----------------------------------------\n\n`

    if (attractions.length > 0) {
      text += `🏛️ ATTRACTIONS TO VISIT (${attractions.length}):\n`
      attractions.forEach((item, index) => {
        text += `${index + 1}. ${item.title}\n`
        if (item.subtitle) text += `   📍 ${item.subtitle}\n`
        if (item.description) text += `   ℹ️ ${item.description}\n`
      })
      text += `\n`
    }

    if (restaurants.length > 0) {
      text += `🍛 WHERE TO EAT & DRINK (${restaurants.length}):\n`
      restaurants.forEach((item, index) => {
        text += `${index + 1}. ${item.title}\n`
        if (item.subtitle) text += `   📍 ${item.subtitle}\n`
        if (item.description) text += `   ℹ️ ${item.description}\n`
      })
      text += `\n`
    }

    if (stays.length > 0) {
      text += `🏨 WHERE TO STAY (${stays.length}):\n`
      stays.forEach((item, index) => {
        text += `${index + 1}. ${item.title}\n`
        if (item.subtitle) text += `   📍 ${item.subtitle}\n`
        if (item.description) text += `   ℹ️ ${item.description}\n`
      })
      text += `\n`
    }

    text += `-----------------------------------------\n`
    text += `✨ Discover Prayagraj — City of Sanctity & Heritage!\n`
    return text
  }

  async function handleCopy() {
    const text = generateItineraryText()
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = text
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      showToast('✓ Itinerary copied to clipboard!')
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      console.error('Failed to copy itinerary:', err)
      showToast('✕ Could not copy to clipboard')
    }
  }

  function handleWhatsAppShare() {
    const text = generateItineraryText()
    const encoded = encodeURIComponent(text)
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank')
  }

  function handleDownloadTxt() {
    const text = generateItineraryText()
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `prayagraj-trip-itinerary-${new Date().toISOString().slice(0, 10)}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    showToast('✓ Downloaded text itinerary!')
  }

  function handlePrint() {
    window.print()
  }

  async function handleNativeShare() {
    const text = generateItineraryText()
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Prayagraj Trip Itinerary',
          text: text
        })
        showToast('✓ Itinerary shared!')
      } catch (e) {
        if (e.name !== 'AbortError') {
          console.error(e)
        }
      }
    } else {
      handleCopy()
    }
  }

  return (
    <div className="my-trip">
      {/* Printable Header for PDF & Paper prints */}
      <div className="print-header">
        <h1>📍 Discover Prayagraj — Trip Itinerary</h1>
        <p>
          Generated on {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} • {tripList.length} Places Planned
        </p>
      </div>

      <div className="my-trip-header">
        <h2>My Trip <span className="underline">Itiner</span>ary</h2>
        <p>Review, organize, and export your saved spots for your Prayagraj journey</p>
      </div>

      {tripList.length === 0 ? (
        <div className="trip-empty-state">
          <div className="empty-icon">🗺️</div>
          <h3>Your itinerary is empty</h3>
          <p>Start building your Prayagraj adventure by saving attractions, local culinary spots, and comfortable stays.</p>
          <div className="empty-actions">
            <Link to="/attractions" className="empty-cta-btn">Explore Attractions</Link>
            <Link to="/restaurants" className="empty-cta-btn">Browse Food Spots</Link>
            <Link to="/stay" className="empty-cta-btn">Find Stays</Link>
          </div>
        </div>
      ) : (
        <div className="trip-content">
          {/* Share & Export Banner */}
          <div className="trip-share-bar">
            <div className="trip-summary-stats">
              <span className="summary-pill total">
                <strong>{tripList.length}</strong> Saved Places
              </span>
              {attractionsCount > 0 && (
                <span className="summary-pill">
                  🏛️ <strong>{attractionsCount}</strong> Attractions
                </span>
              )}
              {restaurantsCount > 0 && (
                <span className="summary-pill">
                  🍛 <strong>{restaurantsCount}</strong> Food Spots
                </span>
              )}
              {staysCount > 0 && (
                <span className="summary-pill">
                  🏨 <strong>{staysCount}</strong> Stays
                </span>
              )}
            </div>

            <div className="trip-export-actions">
              <button
                className={`share-btn copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                title="Copy formatted itinerary to clipboard"
              >
                {copied ? '✓ Copied!' : '📋 Copy Text'}
              </button>

              <button
                className="share-btn whatsapp-btn"
                onClick={handleWhatsAppShare}
                title="Share via WhatsApp"
              >
                💬 WhatsApp
              </button>

              {typeof navigator !== 'undefined' && navigator.share && (
                <button
                  className="share-btn native-share-btn"
                  onClick={handleNativeShare}
                  title="Share to apps"
                >
                  📤 Share
                </button>
              )}

              <button
                className="share-btn txt-btn"
                onClick={handleDownloadTxt}
                title="Download itinerary as a text file"
              >
                📥 Download .txt
              </button>

              <button
                className="share-btn print-btn"
                onClick={handlePrint}
                title="Print or save as PDF"
              >
                🖨️ Print / PDF
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="trip-toast">
              {toastMessage}
            </div>
          )}

          {/* Filter tabs & Clear All */}
          <div className="trip-toolbar">
            <div className="trip-filter-tabs">
              <button
                className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({tripList.length})
              </button>
              {attractionsCount > 0 && (
                <button
                  className={`filter-tab ${filter === 'Attraction' ? 'active' : ''}`}
                  onClick={() => setFilter('Attraction')}
                >
                  Attractions ({attractionsCount})
                </button>
              )}
              {restaurantsCount > 0 && (
                <button
                  className={`filter-tab ${filter === 'Restaurant' ? 'active' : ''}`}
                  onClick={() => setFilter('Restaurant')}
                >
                  Restaurants ({restaurantsCount})
                </button>
              )}
              {staysCount > 0 && (
                <button
                  className={`filter-tab ${filter === 'Stay' ? 'active' : ''}`}
                  onClick={() => setFilter('Stay')}
                >
                  Stays ({staysCount})
                </button>
              )}
            </div>

            <button className="clear-trip-btn" onClick={clearTrip} title="Remove all items from your trip">
              🗑️ Clear All
            </button>
          </div>

          <div className="trip-grid">
            {filteredList.map((item) => {
              const badge = getCategoryBadge(item.category)
              return (
                <div className="trip-card" key={item.id}>
                  {item.image && (
                    <div className="trip-card-image">
                      <img src={item.image} alt={item.title} />
                      <span className={`category-badge ${badge.className}`}>{badge.label}</span>
                    </div>
                  )}
                  <div className="trip-card-content">
                    <h3>{item.title}</h3>
                    {item.subtitle && <p className="tag">{item.subtitle}</p>}
                    {item.description && <p className="trip-card-desc">{item.description}</p>}
                    <button
                      className="btn-remove"
                      onClick={() => removeFromTrip(item.id)}
                      title="Remove from your plan"
                    >
                      ✕ Remove
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="trip-footer-cta">
            <Link to="/attractions" className="btn">+ Explore More Places</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyTrip