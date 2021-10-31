import { useEffect, useState } from 'react'
import '../App.css'
function CircleUser(params) {
  return (
    <div class="circle-container">
      <img class="center profile-photo" src={params.profilePhoto} />

      {params.socialLinks.map((item, index) => {
        var rotateAvg = (360 / params.socialLinks.length) * index
        return (
          <a
            href={item.url}
            class="icon "
            style={{
              transform:
                'rotate(' +
                rotateAvg +
                'deg) translate(9em) rotate(-' +
                rotateAvg +
                'deg)'
             
            }}
          >
            <img src={item.icon} />
          </a>
        )
      })}
    </div>
  )
}
export default CircleUser
