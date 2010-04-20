class AutoMailer < ActionMailer::Base
  
  def partner_mailer(name, contact, message_body)
   @recipients   = "ken@kenderson.net"
   @from         = contact
   headers         "Reply-to" => "#{contact}"
   @subject      = "Online Message from a Client"
   @sent_on      = Time.now
   @content_type = "text/html"

   body[:name]  = name
   body[:contact] = contact       
   body[:message_body] = message_body       
  end  
  
  def rfq_mailer(name, contact, message_body)
   @recipients   = "#{contact}"
   @from         = contact
   headers         "Reply-to" => "partners@kenderson.net"
   @subject      = "#{name} submitted and RFQ"
   @sent_on      = Time.now
   @content_type = "text/html"

   body[:name]  = name
   body[:contact] = contact       
   body[:message_body] = message_body       
  end  
  
end
