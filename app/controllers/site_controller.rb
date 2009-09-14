class SiteController < ApplicationController
  def html_emails
    render :layout => "facebox"
  end
  def smhklaw
    render :layout => "facebox"
  end
  def coyne
    render :layout => "facebox"
  end
  def protegus
    render :layout => "facebox"
  end

  def sag_minis
    render :layout => "facebox"
  end
  def send_mail_to_partners
    if request.post?
      # note the deliver_ prefix, this is IMPORTANT
      AutoMailer.deliver_partner_mailer(params[:name], params[:contact], params[:message_body])
      flash[:notice] = "You've successfuly sent your email. We'll be in touch with your shortly!"
      redirect_to("/") 
    else
      render :layout => "facebox"
    end
  end
  def send_mail_to_friend
    if request.post?
      # note the deliver_ prefix, this is IMPORTANT
      AutoMailer.deliver_friend_mailer(params[:name], params[:contact], params[:message_body])
      flash[:notice] = "You've successfuly sent your email. Thanks for sharing our website!"
      redirect_to("/") 
    else
      render :layout => "facebox"
    end
  end

  
end
