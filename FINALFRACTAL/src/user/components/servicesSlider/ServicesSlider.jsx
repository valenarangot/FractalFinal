import React, { useState } from 'react'
import styles from './ServicesSlider.module.css'
import { NavLink } from 'react-router-dom'

export function ServicesSlider () {

  const items = [
    {
      id: 1,
      text: 'UX Design',
      // icon: 'assets/icons/IconUX.svg',
      icon: '/IconUX.svg',
      // iconWhite: 'assets/icons/IconWhiteUX.svg',
      iconWhite: '/IconWhiteUX.svg',
      path: '/Services/UX'
    },
    {
      id: 2,
      text: 'UI Design',
      // icon: './assets/icons/IconUI.svg',
      icon: '/IconUI.svg',
      // iconWhite: 'assets/icons/IconWhiteUI.svg',
      iconWhite: '/IconWhiteUI.svg',
      path: '/Services/UI'
    },
    {
      id: 3,
      text: 'Frontend',
      // icon: 'assets/icons/IconFrontend.svg',
      icon: '/IconFrontend.svg',
      // iconWhite: 'assets/icons/IconWhiteFrontend.svg',
      iconWhite: '/IconWhiteFrontend.svg',
      path: '/Services/Frontend'
    },
    {
      id: 4,
      text: 'Branding',
      // icon: 'assets/icons/IconBranding.svg',
      icon: '/IconBranding.svg',
      // iconWhite: 'assets/icons/IconWhiteBranding.svg',
      iconWhite: '/IconWhiteBranding.svg',
      path: '/Services/Branding'
    },
    {
      id: 5,
      text: 'Consultancy',
      // icon: 'assets/icons/IconConsultancy.svg',
      icon: '/IconConsultancy.svg',
      // iconWhite: 'assets/icons/IconWhiteConsultancy.svg',
      iconWhite: '/IconWhiteConsultancy.svg',
      path: '/Services/Consultancy'
    }
  ]

  return (
    <div>
      <Menu menu={items} />
    </div>
  )
}

export function Menu ({ menu }) {
  return (
    <nav>
      <ul className={styles.Menu}>
        {
            menu.map((item) => {
              return <Service key={item.id} item={item} />
            })
        }
      </ul>
    </nav>
  )
}

function Service ({ item }) {
  const [showList, setShowList] = useState(false)
  const { id, text, icon, iconWhite, path } = item

  const toggleShowList = () => setShowList(true)

  const toggleState = () => setShowList((prevState) => !prevState)

  const hoverStyle = {
    fontWeight: '600',
    fontFamily: 'Montserrat',
    textDecoration: 'none',

    color: 'white',
    backgroundColor: showList ? '#FF7D00' : '#5332D8',

    padding: '2vh',
    marginTop: showList ? '-4vw' : '0',

    width: '17vw',
    height: showList ? '21vw' : '17vw',

    borderRadius: '15px',

    cursor: 'pointer',

    transition: 'all 0.5s'
  }

  const hoverIconDiv = {
    backgroundColor: showList ? 'transparent' : 'white',

    width: '5.5vw',
    height: '5.5vw',
    margin: '6vh auto',

    borderRadius: '100px',
    display: 'flex',
    justifyContent: 'center',

    transition: 'all 0.5s'
  }

  const hoverIcon = {
    width: showList ? '4.5vw' : '3vw',

    transition: 'all 0.5s'
  }

  return (
    <li key={id} style={hoverStyle} onMouseLeave={toggleState} onMouseEnter={toggleShowList}>
        <NavLink to={path}>
        <div style={hoverIconDiv}>
          <img style={hoverIcon} src={showList ? iconWhite : icon} />
        </div>
        <p className={styles.linkStyle}> {text} </p>
      </NavLink>
    </li>
  )
}
