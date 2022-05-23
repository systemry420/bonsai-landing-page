import React from 'react'

const OtherPlans = () => {
  const plans = [
    {
      title: 'Collaborators',
      desc: 'Invite other users to specific projects for limited access and functionality',
      price: ''
    },
    {
      title: 'Partners',
      desc: 'Invite other users for full account access and company management',
      price: '$9'
    },
    {
      title: 'Bonsai Tax',
      desc: 'Track expenses, identify write-offs, and estimate taxes easily',
      price: '$10'
    }
  ]
  return (
    <div className='other'>
        <h1>Super charge your work with add-ons</h1>
        <div className='list'>
          {plans.map((item, idx) => {
            if (idx === 3) {
              return <Item {...item} learn='learn more' />
            }
            return <Item {...item} />
           })}
        </div>
    </div>
  )
}

const Item = ({ title, desc, price, learn }) => {
  return (
    <div className='item'>
      <div className='info'>
        <h2>{title}</h2>
        <h4>{desc}</h4>
        {learn && learn}
      </div>
      <div className='price'>
        <h1>{!price && 'Free'}</h1>
        <h1>{price && price} <span>/MONTH</span></h1>
      </div>
    </div>
  )
}

export default OtherPlans