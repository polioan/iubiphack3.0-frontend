const User: React.FC<{ className?: string | undefined }> = ({ className }) => {
  return (
    <svg
      className={className}
      role='img'
      aria-label='Иконка - пользователь'
      width='64'
      height='64'
      viewBox='0 0 64 64'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='32' cy='32' r='30.5' stroke='#0186D1' strokeWidth='3' />
      <circle cx='32.1422' cy='25.6' r='11.3778' fill='#0186D1' />
      <ellipse
        cx='31.7155'
        cy='51.7689'
        rx='18.9156'
        ry='11.3778'
        fill='#0186D1'
      />
    </svg>
  )
}

export default User
