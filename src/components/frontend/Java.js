import React from 'react'
import InnerNav from './InnerNav'
import '../../css/frontend/inner.css'

function Java() {
  return (
    <>
    <InnerNav />
    <div class="text-bg-warning p-3"  id='container12'>
      <a className='fa-home' href="/">Home</a>
      <a href="/java">Java</a>
    </div>
    <div>
        <div className='float-container'>
        <div class="sidebar">
            <h3 id='javah3'>Java Tutorial</h3>
            <ul>
            <li><a href="#subpoint1">Subpoint 1</a></li>
            <li><a href="#subpoint2">Subpoint 2</a></li>
            <li><a href="#subpoint3">Subpoint 3</a></li>
            </ul>
            <a href="#">Java Methods</a>
            <a href="#">Java Classes</a>
            <a href="#">Java File Handling</a>
        </div>

 
        <div class="content">
            <h1>Welcome to the Website</h1>
            <p>This is the main content area.</p>

        
            <h2 id="subpoint1">Home Subpoint 1</h2>
            <p>This is Subpoint 1 under Home.</p>

            <h2 id="subpoint2">Home Subpoint 2</h2>
            <p>This is Subpoint 2 under Home.</p>

            <h2 id="subpoint3">Home Subpoint 3</h2>
            <p>This is Subpoint 3 under Home.</p>
        </div>
    </div>
    </div>
    </>
)
  }
export default Java