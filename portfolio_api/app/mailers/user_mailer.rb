class UserMailer < ApplicationMailer
    default from: "notifications@example.com"

    def incoming_contact_email
        @contact = params[:contact]
        mail(to: "cjilbert504@gmail.com", subject: "New contact email from portfolio site")
    end
end
