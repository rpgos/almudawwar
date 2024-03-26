import './pageHeader.scss'

interface PageHeaderProps {
  title: string
  subtitle?: string
}

function PageHeader({ title, subtitle }: PageHeaderProps) {

  return (
    <div className="page-header hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered is-flex is-flex-direction-column is-gap-3">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
