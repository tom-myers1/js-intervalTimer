# escape=`

FROM mcr.microsoft.com/windows/servercore/iis
SHELL ["powershell"]

# initial setup
RUN Install-WindowsFeature NET-Framework-45-ASPNET ; `
    Install-WindowsFeature Web-Asp-Net45 ; `
    New-Item -ItemType Directory -Path 'c:\trainer' ; `
    if (!(get-module webadministration)) {Import-Module webadministration}


# copy site
COPY www/ 'c:\trainer'

# create set and set iis config
RUN Remove-WebSite -Name 'Default Web Site'
RUN New-Website -Name 'trainer' -Port 80 -PhysicalPath 'c:\trainer' -ApplicationPool '.NET v4.5'
RUN New-WebBinding -Name 'trainer' -Protocol 'http' -Port 80 -IPAddress '*' -HostHeader 'www.trainer.doc.zolv.com'
EXPOSE 443
