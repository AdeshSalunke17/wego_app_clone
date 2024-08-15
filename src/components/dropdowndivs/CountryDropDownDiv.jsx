import React from 'react'
import { useState } from 'react'
import style from '../dropdowndivs/CountryDropDownDiv.module.css'
function CountryDropDownDiv({onClickFunction}) 
{
    const refCountryList=[
        {name: 'Algeria', code: 'DZ'}, 
        {name: 'Angola', code: 'AO'}, 
        {name: 'Argentina', code: 'AR'}, 
        {name: 'Australia', code: 'AU'}, 
        {name: 'Bahrain', code: 'BH'}, 
        {name: 'Bangladesh', code: 'BD'},  
        {name: 'Botswana', code: 'BW'}, 
        {name: 'Brazil', code: 'BR'}, 
        {name: 'Cameroon', code: 'CM'}, 
        {name: 'Canada', code: 'CA'}, 
        {name: 'Chile', code: 'CL'}, 
        {name: 'China', code: 'CN'}, 
        {name: 'Colombia', code: 'CO'}, 
        {name: 'Congo, The Democratic Republic of the', code: 'CD'},  
        {name: 'Cote D\'Ivoire', code: 'CI'}, 
        {name: 'Denmark', code: 'DK'}, 
        {name: 'Djibouti', code: 'DJ'}, 
        {name: 'Dominica', code: 'DM'}, 
        {name: 'Dominican Republic', code: 'DO'}, 
        {name: 'Egypt', code: 'EG'}, 
        {name: 'Ethiopia', code: 'ET'}, 
        {name: 'France', code: 'FR'}, 
        {name: 'Gabon', code: 'GA'},        
        {name: 'Germany', code: 'DE'}, 
        {name: 'Ghana', code: 'GH'}, 
        {name: 'Hong Kong', code: 'HK'},  
        {name: 'India', code: 'IN'}, 
        {name: 'Indonesia', code: 'ID'}, 
        {name: 'Iraq', code: 'IQ'}, 
        {name: 'Ireland', code: 'IE'}, 
        {name: 'Italy', code: 'IT'}, 
        {name: 'Japan', code: 'JP'},  
        {name: 'Jordan', code: 'JO'}, 
        {name: 'Kenya', code: 'KE'}, 
        {name: 'Kuwait', code: 'KW'}, 
        {name: 'Lebanon', code: 'LB'},  
        {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
        {name: 'Macao', code: 'MO'},        
        {name: 'Malaysia', code: 'MY'}, 
        {name: 'Mali', code: 'ML'},    
        {name: 'Mexico', code: 'MX'}, 
        {name: 'Mozambique', code: 'MZ'}, 
        {name: 'Namibia', code: 'NA'},        
        {name: 'Netherlands', code: 'NL'},        
        {name: 'New Zealand', code: 'NZ'}, 
        {name: 'Oman', code: 'OM'}, 
        {name: 'Pakistan', code: 'PK'}, 
        {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
        {name: 'Philippines', code: 'PH'}, 
        {name: 'Portugal', code: 'PT'}, 
        {name: 'Qatar', code: 'QA'}, 
        {name: 'RWANDA', code: 'RW'}, 
        {name: 'Saudi Arabia', code: 'SA'}, 
        {name: 'Senegal', code: 'SN'}, 
        {name: 'Singapore', code: 'SG'}, 
        {name: 'South Africa', code: 'ZA'}, 
        {name: 'Spain', code: 'ES'}, 
        {name: 'Sri Lanka', code: 'LK'}, 
        {name: 'Sudan', code: 'SD'}, 
        {name: 'Switzerland', code: 'CH'}, 
        {name: 'Taiwan, Province of China', code: 'TW'}, 
        {name: 'Tanzania, United Republic of', code: 'TZ'}, 
        {name: 'Thailand', code: 'TH'}, 
        {name: 'Tunisia', code: 'TN'}, 
        {name: 'Turkey', code: 'TR'}, 
        {name: 'Uganda', code: 'UG'}, 
        {name: 'United Arab Emirates', code: 'AE'}, 
        {name: 'United Kingdom', code: 'GB'}, 
        {name: 'United States', code: 'US'},  
        {name: 'Viet Nam', code: 'VN'}, 
        {name: 'Zambia', code: 'ZM'}, 
        {name: 'Zimbabwe', code: 'ZW'} 
    ]
    const [countryList,setCountryList]=useState(refCountryList)
    const reArrangeCountryList=(countryCode)=>{
        let ref1=refCountryList.filter((obj)=>obj.code!==countryCode)
        let ref2=countryList.filter((obj)=>obj.code===countryCode)
        ref1.unshift(ref2[0])
        setCountryList(ref1)
    }
  return (
    <div className={`${style.main}`}>
        <span style={{width:"100%",marginLeft:"20px",marginBottom:"5px",fontWeight:"500"}}>Country/Region</span>
        {countryList.map((obj)=>{
            return <button className={`${style.buttonStyle}`} onClick={()=>{onClickFunction(obj.code);reArrangeCountryList(obj.code)}}>{
                obj.name.length>10? obj.name.substring(0,9)+"...":obj.name
            }</button>
        })}
    </div>
  )
}

export default CountryDropDownDiv