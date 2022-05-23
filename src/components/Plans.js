import React from 'react'
import OtherPlans from './OtherPlans'

const Plans = () => {
    const plans = [
        {
            title: 'Workflow',
            price: '19',
            popular: false,
            features: [
                'Unlimimited Clients & Projects',
                'Proposals', 'Contracts',
                'Invoicing & Payments', 'Client CRM',
                'Project Management',
                'Task & Time Tracking',
                'iOS, Android, Chrome, & Mac Apps'
            ]
        },
        {
            title: 'Workflow Plus',
            price: '29',
            popular: true,
            features: [
                'Everything in Workflow, plus ...',
                'White-labelled client experience',
                'Client forms and questionnaires',
                'Workflow automations',
                'Calendly integration',
                'Client portal', 'Priority support'
            ]
        },
        {
            title: 'Workflow Business',
            price: '39',
            popular: false,
            features: [
                'Unlimimited Clients & Projects',
                'Proposals', 'Contracts',
                'Invoicing & Payments', 'Client CRM',
                'Project Management',
                'Task & Time Tracking',
                'iOS, Android, Chrome, & Mac Apps'
            ]
        },
    ]

  return (
    <>
        <div className='plans'>
            {/* {plans.map(plan => (
                <Plan {...plan} />
            ))} */}
        </div>
        <OtherPlans />
    </>
  )
}

const Plan = ({ title, price, popular, features }) => {
    return (
        <div className='plans__card'>
            <h1 className='card__title'>{title}</h1>
            <h2 className='card__price'>
                <sup>$</sup>
                <span>{price}</span>
                /MONTH
            </h2>
            <ul className='card__features'>
                {features.map(feature => (
                    <li>{feature}</li>
                ))}
            </ul>
            <button className='card__btn'>Start free</button>
        </div>
    )
}

export default Plans