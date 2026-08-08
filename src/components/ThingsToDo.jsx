const thingsToDoData = [
  {
    emoji: "🛶",
    title: "Boat rides",
    description: "Enjoy scenic boat rides on the holy rivers"
  },
  {
    emoji: "🍛",
    title: "Local Cuisine",
    description: "Savor authentic Allahabadi flavors and street food"
  },
  {
    emoji: "🎭",
    title: "Cultural Tours",
    description: "Explore ancient temples and historical sites"
  },
  {
    emoji: "📸",
    title: "Photography",
    description: "Capture stunning views of ghats and architecture"
  }
]

function ThingsToDo() {
  return (
    <div className="to-do">
      <h2>Thin<span className="underline">gs to</span> Do</h2>

      <div className="to-do-list">
        {thingsToDoData.map((item) => (
          <div className="to-do-column" key={item.title}>
            <h2>{item.emoji}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThingsToDo