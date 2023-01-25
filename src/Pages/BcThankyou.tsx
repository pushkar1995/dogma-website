import React from 'react'
import TopBackgroundImg from '../assets/resources/thankyou-bc-bg.png'
import BCEbook from '../assets/resources/Business-Central-e-book.png'
import FooterBackgroundImg from '../assets/resources/getintouch.png'

const BcThankyou = () => {

  const topBackgroundImageStyle = {
    backgroundImage: `url("${TopBackgroundImg}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const footerBackgroundImageStyle = {
    backgroundImage: `url("${FooterBackgroundImg}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div>
        {/* Top Banner */}
        <div 
          className='flex bg-black text-primary justify-center align-middle p-16 h-80'
          style={topBackgroundImageStyle}
        >
          {/* <div className='bg-gradient-to-r from-black'> */}
            <div className='pt-12' >
              <h1 className='text-3xl font-bold'>Thankyou for downloading our Business Central ebook</h1>
            </div>
          {/* </div> */}
        </div>

        {/* Middle Banner */}
        <div className='p-12 md:grid grid-cols-2 gap-8'>
          <div className='flex justify-center'>
            <img src={BCEbook} alt="" className="h-96" /> 
          </div>
          <div className='p-7'>
            <h3 className='text-2xl py-2 max-w-md'>We have sent you an email with the PDF version so that you can access it anytime!</h3>
            <p className='py-8 text-grey max-w-md'>If you have further questions about the products, our experts are happy to help you out.Schedule a call here.</p>
            <button className='bg-primary w-44 h-12 p-3 py-2 text-white rounded'>TALK TO EXPERTS</button>
          </div>
        </div>

        {/* Footer */}
        <div className='md:grid grid-rows-2'>
          <div
            className='flex bg-black text-primary p-16 py-18 h-96'
            style={footerBackgroundImageStyle}
          > 
            <div className='flex flex-col bg-gradient-to-r from-black'>
              <div className='pl-8 h-96'>
                <h1 className='text-white text-4xl pt-4'>Get in Touch!</h1>
                <p className='py-4 text-grey max-w-md'>Refer us leads and start earning massive commissions already! Or find honest solutions to all your queries</p>
                  <button className='bg-primary p-3 py-2 w-40 h-12 text-white rounded'>CONTACT US</button>
              </div> 
            </div>
          </div>

          <div className='bg-footerbg text-white md:h-72'>
            <div className='p-16 md:grid grid-cols-2'>
              <div className='sm:pb-3'>
                <div>DogmaGroup</div>
                <p className='py-4 text-grey sm:max-w-sm'>A group of companies helping you understand the fuller picture of cutting edge technology and implement it effectively.</p>
                <div className='flex flex-row gap-6'>
                  <div>SeeLogic Logo</div>
                  <div>Sirus App Logo</div>
                  <div>DynamicAI Logo</div>
                </div>
              </div>

              <div className='flex flex-row gap-6'>
                <div>Gold Microsoft Partner</div>
                <div>
                  Salesforce Consulting Partner
                </div>
                </div>
              </div>
            </div>
        </div>   
    </div>
  )
}

export default BcThankyou