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
  
  def friend_mailer(name, contact, message_body)
   @recipients   = "#{contact}"
   @from         = contact
   headers         "Reply-to" => "partners@smhklaw.com"
   @subject      = "#{name} has sent you a message!"
   @sent_on      = Time.now
   @content_type = "text/html"

   body[:name]  = name
   body[:contact] = contact       
   body[:message_body] = message_body       
  end  
  
end
