
import './App.css'

// Component gioi thieu ban than
function App() {
  // Du lieu cua sinh vien
  const student = {
    name: 'Nguyễn Thanh Nhàn',
    className: '242101TH001',
    hobbies: ['Lap trinh', 'Nghe nhac', 'Du lich'],
    github: 'https://github.com/nhan100306'
  }

  return (
    <div className="container">
      <div
  className="profile-card"
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    e.currentTarget.style.setProperty(
      '--mouse-x',
      `${e.clientX - rect.left}px`
    )

    e.currentTarget.style.setProperty(
      '--mouse-y',
      `${e.clientY - rect.top}px`
    )
  }}
>
        <h1>
  <span className="greeting-text">Xin chào!</span>
  <span className="greeting-emoji">👋</span>
</h1>

        <h2>{student.name}</h2>

        <p>
          <strong>Lop:</strong> {student.className}
        </p>

        <p>
          <strong>So thich:</strong> {student.hobbies.join(', ')}
        </p>

        <a
          href={student.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Xem GitHub cua toi
        </a>
      </div>
    </div>
  )
}

export default App
