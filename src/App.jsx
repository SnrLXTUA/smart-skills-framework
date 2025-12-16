import { useState } from 'react'
import './App.css'

function App() {
  const [view, setView] = useState('conceptual')
  const [selectedPhase, setSelectedPhase] = useState(null)
  const [hoveredElement, setHoveredElement] = useState(null)

  const phases = [
    {
      id: 1,
      title: 'Phase 1',
      subtitle: 'Framework Review & Skill ID',
      description: 'Systematic review of existing frameworks and identification of skills gaps',
      operational: {
        title: 'Framing and Empathising with the Educational Problem',
        details: [
          'Reviewed institutional frameworks, accreditation requirements, and employability literature',
          'Mapped existing assessments against desired behavioural outcomes',
          'Identified skills that were implicitly expected but not explicitly taught or assessed'
        ]
      }
    },
    {
      id: 2,
      title: 'Phase 2',
      subtitle: 'Categorisation & Descriptors',
      description: 'Organizing skills into coherent domains with behavioral indicators',
      operational: {
        title: 'Defining Transferable Skills',
        details: [
          'Clustered skills into Smart Skill domains',
          'Developed behavioural indicators linked to assessment artefacts',
          'Tested descriptors against real student submissions for clarity and applicability'
        ]
      }
    },
    {
      id: 3,
      title: 'Phase 3',
      subtitle: 'Competency Levels',
      description: 'Defining progression pathways and proficiency standards',
      operational: {
        title: 'Designing and Prototyping Pedagogical Interventions',
        details: [
          'Redesigned assessments to explicitly surface targeted competencies',
          'Embedded reflective prompts and coaching questions in learning activities',
          'Integrated industry briefs to create real-world performance contexts'
        ]
      }
    },
    {
      id: 4,
      title: 'Phase 4',
      subtitle: 'Curriculum Design',
      description: 'Embedding competencies into authentic learning experiences',
      operational: {
        title: 'Implementing and Observing in Live Teaching Contexts',
        details: [
          'Delivered redesigned subjects across multiple trimesters',
          'Collected curriculum artefacts, student reflections, and assessment evidence',
          'Captured facilitator reflective notes during and after delivery'
        ]
      }
    },
    {
      id: 5,
      title: 'Phase 5',
      subtitle: 'Continuous Improvement',
      description: 'Iterative refinement based on evidence and feedback',
      operational: {
        title: 'Reflecting, Evaluating, and Iterating',
        details: [
          'Conducted thematic analysis across multiple data sources',
          'Identified misalignment between intended and enacted competencies',
          'Refined framework language, levels, and pedagogical supports'
        ]
      }
    }
  ]

  const outcomes = [
    'Transferable Competencies',
    'Theory-Practice Translation',
    'Industry Validation',
    'Replicability',
    'Program Integration',
    'Embedded Capabilities'
  ]

  const pedagogicalElements = [
    'Scaffolded Smart Skills',
    'Authentic Assessment',
    'Industry Engagement',
    'Coaching & Heuristics',
    'Applied Tasks'
  ]

  const reflectiveElements = [
    'Double-Loop Learning',
    'Gibbs Reflective Cycle',
    'Immunity to Change',
    'Meta-Learning',
    'Sense-Making'
  ]

  const foundationElements = [
    'Competency-Based Learning',
    'Experiential Learning (Schön, Gibbs)',
    'Business Education Context',
    'Constructive Alignment'
  ]

  const evidenceElements = [
    'Curriculum Artefacts',
    'Student Reflections',
    'Assessment Outputs',
    'Industry Feedback'
  ]

  return (
    <div className="app">
      <header className="header">
        <h1>Smart Skills Framework</h1>
        <p className="subtitle">A Design Thinking Approach to Employability Competencies</p>
        
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${view === 'conceptual' ? 'active' : ''}`}
            onClick={() => setView('conceptual')}
          >
            Conceptual View
          </button>
          <button 
            className={`toggle-btn ${view === 'operational' ? 'active' : ''}`}
            onClick={() => setView('operational')}
          >
            Operational View
          </button>
        </div>
      </header>

      {view === 'conceptual' && (
        <div className="framework-container">
          <svg className="framework-svg" viewBox="0 0 1000 1000">
            {/* Outer Ring - Outcomes */}
            <circle 
              cx="500" 
              cy="500" 
              r="450" 
              fill="none" 
              stroke="#3498db" 
              strokeWidth="3" 
              strokeDasharray="10,10"
              opacity="0.3"
            />
            
            {/* Outcome Labels */}
            {outcomes.map((outcome, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180)
              const x = 500 + 420 * Math.cos(angle)
              const y = 500 + 420 * Math.sin(angle)
              return (
                <g key={index}>
                  <rect
                    x={x - 80}
                    y={y - 15}
                    width="160"
                    height="30"
                    fill="#3498db"
                    rx="15"
                    className="outcome-badge"
                    onMouseEnter={() => setHoveredElement(`outcome-${index}`)}
                    onMouseLeave={() => setHoveredElement(null)}
                  />
                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="600"
                  >
                    {outcome}
                  </text>
                </g>
              )
            })}

            {/* Foundation Layer */}
            <rect
              x="150"
              y="850"
              width="700"
              height="120"
              fill="url(#foundationGradient)"
              rx="15"
              className="foundation-layer"
              onMouseEnter={() => setHoveredElement('foundation')}
              onMouseLeave={() => setHoveredElement(null)}
            />
            <text x="500" y="885" textAnchor="middle" fill="white" fontSize="18" fontWeight="600">
              Foundation: Problem Space Definition
            </text>
            {foundationElements.map((elem, i) => (
              <text 
                key={i}
                x={230 + (i % 2) * 350} 
                y={910 + Math.floor(i / 2) * 25} 
                fill="white" 
                fontSize="12"
              >
                • {elem}
              </text>
            ))}

            {/* Central Loop */}
            <circle 
              cx="500" 
              cy="450" 
              r="150" 
              fill="url(#centralGradient)"
              className="central-loop"
              onMouseEnter={() => setHoveredElement('central')}
              onMouseLeave={() => setHoveredElement(null)}
            />
            <text x="500" y="400" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">
              Reflective Design
            </text>
            <text x="500" y="425" textAnchor="middle" fill="white" fontSize="20" fontWeight="600">
              Cycle
            </text>
            <text x="500" y="465" textAnchor="middle" fill="white" fontSize="14">Design</text>
            <text x="500" y="485" textAnchor="middle" fill="white" fontSize="16">↓</text>
            <text x="500" y="505" textAnchor="middle" fill="white" fontSize="14">Implementation</text>
            <text x="500" y="525" textAnchor="middle" fill="white" fontSize="16">↓</text>
            <text x="500" y="545" textAnchor="middle" fill="white" fontSize="14">Evaluation</text>
            <text x="500" y="565" textAnchor="middle" fill="white" fontSize="16">↻</text>

            {/* Phase Nodes */}
            {phases.map((phase, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180)
              const x = 500 + 300 * Math.cos(angle)
              const y = 450 + 300 * Math.sin(angle)
              const colors = ['#9b59b6', '#3498db', '#1abc9c', '#f39c12', '#e74c3c']
              
              return (
                <g 
                  key={phase.id}
                  className="phase-node"
                  onClick={() => setSelectedPhase(phase)}
                  onMouseEnter={() => setHoveredElement(`phase-${phase.id}`)}
                  onMouseLeave={() => setHoveredElement(null)}
                >
                  <rect
                    x={x - 60}
                    y={y - 40}
                    width="120"
                    height="80"
                    fill="white"
                    stroke={colors[index]}
                    strokeWidth="3"
                    rx="10"
                    className="phase-box"
                  />
                  <text 
                    x={x} 
                    y={y - 15} 
                    textAnchor="middle" 
                    fontSize="12" 
                    fontWeight="600"
                    fill="#2c3e50"
                  >
                    {phase.title}
                  </text>
                  <text 
                    x={x} 
                    y={y + 5} 
                    textAnchor="middle" 
                    fontSize="10" 
                    fill="#7f8c8d"
                  >
                    {phase.subtitle.split(' ').slice(0, 2).join(' ')}
                  </text>
                  <text 
                    x={x} 
                    y={y + 20} 
                    textAnchor="middle" 
                    fontSize="10" 
                    fill="#7f8c8d"
                  >
                    {phase.subtitle.split(' ').slice(2).join(' ')}
                  </text>
                </g>
              )
            })}

            {/* Pedagogical Stream */}
            <rect
              x="50"
              y="350"
              width="220"
              height="180"
              fill="url(#pedagogicalGradient)"
              rx="15"
              className="stream"
              onMouseEnter={() => setHoveredElement('pedagogical')}
              onMouseLeave={() => setHoveredElement(null)}
            />
            <text x="160" y="375" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
              Pedagogical Design
            </text>
            {pedagogicalElements.map((elem, i) => (
              <text key={i} x="70" y={400 + i * 22} fill="white" fontSize="11">
                → {elem}
              </text>
            ))}

            {/* Reflective Stream */}
            <rect
              x="730"
              y="350"
              width="220"
              height="180"
              fill="url(#reflectiveGradient)"
              rx="15"
              className="stream"
              onMouseEnter={() => setHoveredElement('reflective')}
              onMouseLeave={() => setHoveredElement(null)}
            />
            <text x="840" y="375" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
              Reflective Practice
            </text>
            {reflectiveElements.map((elem, i) => (
              <text key={i} x="750" y={400 + i * 22} fill="white" fontSize="11">
                → {elem}
              </text>
            ))}

            {/* Evidence Layer */}
            <rect
              x="250"
              y="700"
              width="500"
              height="100"
              fill="url(#evidenceGradient)"
              rx="15"
              className="evidence-layer"
              onMouseEnter={() => setHoveredElement('evidence')}
              onMouseLeave={() => setHoveredElement(null)}
            />
            <text x="500" y="725" textAnchor="middle" fill="white" fontSize="14" fontWeight="600">
              Evidence & Data Collection
            </text>
            {evidenceElements.map((elem, i) => (
              <rect
                key={i}
                x={280 + i * 115}
                y="740"
                width="100"
                height="40"
                fill="rgba(255,255,255,0.2)"
                rx="8"
              />
            ))}
            {evidenceElements.map((elem, i) => (
              <text 
                key={i}
                x={330 + i * 115} 
                y={765} 
                textAnchor="middle" 
                fill="white" 
                fontSize="10"
              >
                {elem}
              </text>
            ))}

            {/* Gradients */}
            <defs>
              <linearGradient id="foundationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8e44ad" />
                <stop offset="100%" stopColor="#9b59b6" />
              </linearGradient>
              <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e74c3c" />
                <stop offset="100%" stopColor="#c0392b" />
              </linearGradient>
              <linearGradient id="pedagogicalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16a085" />
                <stop offset="100%" stopColor="#1abc9c" />
              </linearGradient>
              <linearGradient id="reflectiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2980b9" />
                <stop offset="100%" stopColor="#3498db" />
              </linearGradient>
              <linearGradient id="evidenceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f39c12" />
                <stop offset="100%" stopColor="#e67e22" />
              </linearGradient>
            </defs>
          </svg>

          {hoveredElement && (
            <div className="info-tooltip">
              {hoveredElement === 'central' && 'Core iterative cycle: Design → Implementation → Evaluation'}
              {hoveredElement === 'foundation' && 'Theoretical grounding in competency-based and experiential learning'}
              {hoveredElement === 'pedagogical' && 'Scaffolded activities and authentic assessment design'}
              {hoveredElement === 'reflective' && 'Meta-learning and double-loop reflection processes'}
              {hoveredElement === 'evidence' && 'Multi-source data collection for evidence-informed decisions'}
              {hoveredElement.startsWith('phase-') && phases[parseInt(hoveredElement.split('-')[1]) - 1]?.description}
              {hoveredElement.startsWith('outcome-') && 'Framework outcomes and impact areas'}
            </div>
          )}

          {selectedPhase && (
            <div className="phase-modal" onClick={() => setSelectedPhase(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setSelectedPhase(null)}>×</button>
                <h3>{selectedPhase.title}</h3>
                <h4>{selectedPhase.subtitle}</h4>
                <p className="description">{selectedPhase.description}</p>
                <div className="operational-detail">
                  <h5>Operational Implementation:</h5>
                  <p><strong>{selectedPhase.operational.title}</strong></p>
                  <ul>
                    {selectedPhase.operational.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {view === 'operational' && (
        <div className="operational-view">
          <h2>Operationalising the Framework</h2>
          <p className="intro">
            The framework was enacted through a structured, iterative design process embedded within 
            live business subjects, using authentic curriculum delivery as the primary site of inquiry.
          </p>

          {phases.map((phase, index) => (
            <div 
              key={phase.id} 
              className={`operational-phase phase-${phase.id}`}
              onMouseEnter={() => setHoveredElement(`op-${phase.id}`)}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <div className="phase-header">
                <span className="phase-number">{phase.id}</span>
                <div>
                  <h3>{phase.operational.title}</h3>
                  <p className="phase-summary">{phase.description}</p>
                </div>
              </div>
              <ul className="operational-list">
                {phase.operational.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="operational-summary">
            <h3>Continuous Reflective Design Cycle</h3>
            <p>
              The framework operates as a continuous loop where experiential learning occurs through 
              authentic tasks, while reflective learning is operationalised through structured student 
              reflection and facilitator double-loop reflection, ensuring ongoing refinement rather than 
              one-off implementation.
            </p>
          </div>
        </div>
      )}

      <div className="legend">
        <h3>Framework Components</h3>
        <div className="legend-grid">
          <div className="legend-item">
            <div className="legend-color foundation-color"></div>
            <div>
              <h4>Foundation Layer</h4>
              <p>Theoretical grounding and context</p>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color central-color"></div>
            <div>
              <h4>Central Loop</h4>
              <p>Iterative design-implementation-evaluation</p>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color pedagogical-color"></div>
            <div>
              <h4>Pedagogical Design</h4>
              <p>Scaffolding and authentic assessment</p>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color reflective-color"></div>
            <div>
              <h4>Reflective Practice</h4>
              <p>Meta-learning and sense-making</p>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color evidence-color"></div>
            <div>
              <h4>Evidence Layer</h4>
              <p>Data collection and insight synthesis</p>
            </div>
          </div>
          <div className="legend-item">
            <div className="legend-color phase-color"></div>
            <div>
              <h4>Five-Phase Path</h4>
              <p>Structured progression within iteration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
