class ContactsController < ApplicationController

    def create
        @contact = Contact.new(full_name: params[:full_name], email: params[:email], message: params[:message])
        if @contact.save
            UserMailer.with(contact: @contact).incoming_contact_email.deliver_later
        end
    end
end