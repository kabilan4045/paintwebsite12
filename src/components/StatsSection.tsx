import './StatsSection.css';

const StatsSection = () => {
    const stats = [
        {
            id: 1,
            icon: "🏭",
            number: "1725",
            label: "Project Complete"
        },
        {
            id: 2,
            icon: "🎨",
            number: "1404",
            label: "Satisfied Clients"
        },
        {
            id: 3,
            icon: "🏆",
            number: "8190",
            label: "Awards Winning"
        },
        {
            id: 4,
            icon: "🎨",
            number: "2209",
            label: "Multi Color System"
        }
    ];

    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-grid">
                    {/* Top Left */}
                    <div className="stat-card">
                        <div className="stat-icon">{stats[0].icon}</div>
                        <div className="stat-number">{stats[0].number}</div>
                        <div className="stat-label">{stats[0].label}</div>
                    </div>

                    {/* Top Right */}
                    <div className="stat-card">
                        <div className="stat-icon">{stats[1].icon}</div>
                        <div className="stat-number">{stats[1].number}</div>
                        <div className="stat-label">{stats[1].label}</div>
                    </div>

                    {/* Center Highlight */}
                    <div className="stats-highlight">
                        <h3>Professional<br />& Trusted</h3>
                    </div>

                    {/* Bottom Left - Experience */}
                    <div className="stat-card stat-card--experience">
                        <div className="stat-number">25</div>
                        <div className="stat-label">Year Of<br />Experience</div>
                    </div>

                    {/* Bottom Center */}
                    <div className="stat-card">
                        <div className="stat-icon">{stats[2].icon}</div>
                        <div className="stat-number">{stats[2].number}</div>
                        <div className="stat-label">{stats[2].label}</div>
                    </div>

                    {/* Bottom Right */}
                    <div className="stat-card">
                        <div className="stat-icon">{stats[3].icon}</div>
                        <div className="stat-number">{stats[3].number}</div>
                        <div className="stat-label">{stats[3].label}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
