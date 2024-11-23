import { Footprints, CheckCircle, DollarSign, Link } from 'lucide-react'

export function TaxExemptions() {
  return (
    <section 
      className="relative py-16 md:py-24 bg-gray-50 bg-cover bg-center" 
      style={{ backgroundImage: 'url("https://dakshinvrindavan.org/wp-content/uploads/2021/02/Whitened-Calf.jpg")' }}
    >
      
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <Footprints className="h-6 w-6 flex-shrink-0 text-[#eaaf00]" />
              <div>
                <h3 className="text-lg font-semibold mb-2">80(G) Tax Exemptions</h3>
                <p className="text-gray-600">
                  Shree Radha Mohan Seva Trust is a registered Charitable Institution under Indian Trust Act. Donations made to the trust are eligible for exemptions u/s 80(G) of Income Tax Act 1961
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-[#eaaf00]" />
              <div>
                <h3 className="text-lg font-semibold mb-2">FCRA Permit</h3>
                <p className="text-gray-600">
                  Shree Radha Mohan Seva Trust is registered under Section 11 (1) of Foreign Contribution (Regulation) Act, 2010 by Ministry of Home Affairs. As such eligible to receive donations from Non Indian Bank Accounts. The donation has to be made to our Exclusive FCRA account and NOT to regular current account. This donation is also eligible for exemptions u/s 80(G) of Income Tax Act 1961.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <DollarSign className="h-6 w-6 flex-shrink-0 text-[#eaaf00]" />
              <div>
                <h3 className="text-lg font-semibold mb-2">501 (C) (3) Exemptions</h3>
                <p className="text-gray-600">
                  Shree Radha Mohan Seva Trust US Inc. is registered in Florida as Not for profit Corporation. Donations to Shree Radha Mohan Seva Trust is exempted from federal income tax under IRC section 501 (C) (3)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Link className="h-6 w-6 flex-shrink-0 text-[#eaaf00]" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Matching Donations by your company</h3>
                <p className="text-gray-600">
                  Many companies in USA have matching programs for registered charities. As a registered 501(c)(3) organization, Shree Radha Mohan Seva Trust is eligible to receive matching contributions. If you are making a donation with us, please kindly check with your employer if matching donations are supported. This would be of great help as it would facilitate rescue of more cows from slaughter.
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
