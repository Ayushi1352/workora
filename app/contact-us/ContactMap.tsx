export default function ContactMap() {
  return (
    <div className="w-full h-[260px] sm:h-[280px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 relative">
      <iframe
        title="Google Map New York"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280016462!2d-74.11976373077755!3d40.69766374859258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1711100000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
