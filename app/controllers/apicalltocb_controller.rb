require 'cgi'


class ApicalltocbController < ApplicationController


	def find
		session[:callType] = params[:calltype] 

	end

	def home
		
	end

	########
	##### This is a direct apicall to api.careerbuilder.com
	########
	def show
		
	
		if session[:callType] == "ID"
			 @returnValue = Apicalltocb.getJob(params[:value1],params[:value4])
			 # @returnValue = Apicalltocb.getJob(params)
		else
			# @returnValue = Apicalltocb.getByKeyword(params[:value2],params[:value3],params[:value4])
			@returnValue = Apicalltocb.getByKeyword(params)
		end
		
	end
end
