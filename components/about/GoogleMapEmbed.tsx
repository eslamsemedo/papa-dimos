export function GoogleMapEmbed() {
  return (
    <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.8920940483276!2d33.81338590000001!3d27.253913400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145287e44ad37ea9%3A0xf7e296306cba68e8!2sPapa%20Dimos%20Restaurant!5e0!3m2!1sen!2seg!4v1753331949456!5m2!1sen!2seg" 
        // src="https://www.google.com/maps/place/Orange+Beach/@27.2099468,33.8293522,15z/data=!4m6!3m5!1s0x145286ffca47461f:0x568cb04d6a673196!8m2!3d27.2130287!4d33.8424034!16s%2Fg%2F11csq25nx8?entry=ttu&g_ep=EgoyMDI1MDcyMS4wIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Papa Dimos Location"
      />
    </div>
  )
}
