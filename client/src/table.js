import React from 'react'

const Table = ({matchData, defaultValue, loader, colorBgContainer}) => {
  return (
    <div style={{ padding: 24, minHeight: 430, background: colorBgContainer}}>
            <p style={{fontSize: 16}}>Showing results for <strong>{defaultValue}</strong></p>
            {matchData ? 
            <table>
              <tr style={{fontSize: 15}}>
                <th>Date</th>
                <th colSpan="2">{matchData.date}</th>
              </tr>
              <tr>
                <td></td>
                <td>Team 1</td>
                <td>Team 2</td>
              </tr>
              <tr>
                <td id='title'>Goals</td>
                <td>{matchData.stats.teamA.goals}</td>
                <td>{matchData.stats.teamB.goals}</td>
              </tr>
              <tr>
                <td id='title'>Possession</td>
                <td>{matchData.stats.teamA.possession}</td>
                <td>{matchData.stats.teamB.possession}</td>
              </tr>
              <tr>
                <td id='title'>Total Passes</td>
                <td>{matchData.stats.teamA.passes}</td>
                <td>{matchData.stats.teamB.passes}</td>
              </tr>
              <tr>
                <td id='title'>Shots</td>
                <td>{matchData.stats.teamA.shots}</td>
                <td>{matchData.stats.teamB.shots}</td>
              </tr>
              <tr>
                <td id='title'>Shots on target</td>
                <td>{matchData.stats.teamA.shotsOnTarget}</td>
                <td>{matchData.stats.teamB.shotsOnTarget}</td>
              </tr>
              <tr>
                <td id='title'>Corners</td>
                <td>{matchData.stats.teamA.corners}</td>
                <td>{matchData.stats.teamB.corners}</td>
              </tr>
            </table>
            : <img src={loader} alt="loading..." style={{display: 'block', height: 220, margin: 'auto'}}/>
          }
          </div>
  )
}

export default Table;