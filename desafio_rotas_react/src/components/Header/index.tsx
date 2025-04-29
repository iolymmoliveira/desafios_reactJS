import "./style.css"

type Props = {
  content_menu: {
    label: string;
    href: string;
  }[];
  icon: {
    src: string;
    alt: string;
    href: string;
  }
}

export default function Header({content_menu, icon} : Props) {

  return (
    <>
      <header id="ds-header">
        <div className="ds-container-header flex">
          <div className="ds-menu-left flex align-center">
            {content_menu.map((item, index) => {
              return (
                <nav key={index}>
                  <a href={`/${item.href}`}>{item.label}</a>
                </nav>
              )
            })}
          </div>
          <div className="ds-menu-right">
            <nav>
              <a href={icon.href}>
                <img src={icon.src} alt={icon.alt} className="ds-menu-right-img"/>
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}