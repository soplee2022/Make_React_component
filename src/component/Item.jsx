function Item({ title, icon, status }) {
  return(
    <div className='flex items-center space-x-2'>
      {icon}
      <p className={`text-l ${status}`}>{title}</p>
    </div>
  )
}

export default Item