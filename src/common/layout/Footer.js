import intl from 'react-intl-universal'

const Footer = () => {
  return (
    <footer className="p-4 fixed bottom-0 left-0 bg-white w-full">
      <div className="flex-col">
        <div className="text-lg">Contact us</div>
        <div className="text-base">
          {intl.getHTML('footer_contactus', {
            cs_channel: intl.get('footer_cs'),
            link: intl.get('footer_link'),
          })}
        </div>
      </div>
    </footer>
  )
}
export default Footer
