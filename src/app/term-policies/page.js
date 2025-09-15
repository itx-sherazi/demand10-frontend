import { FileText, Gavel, Server, Shield } from "lucide-react";
import Link from 'next/link';


export const metadata = {
  title: "Terms & Policies – IntentWire User Agreements",
  description:
    "Review IntentWire's Terms & Policies to understand user agreements, data usage, and platform guidelines for managed IT services and cybersecurity solutions.",
  keywords: [
    "Terms and Conditions",
    "user agreements",
    "data usage policy",
    "platform guidelines",
    "IntentWire terms",
    "managed service provider",
    "managed IT services",
    "IT managed services",
    "managed security service provider",
    "MSP terms",
    "IT services managed services"
  ],
  metadataBase: new URL("https://intentwire.com"),
  alternates: {
    canonical: "/terms-policies",
  },
  openGraph: {
    title: "Terms & Policies –IntentWire User Agreements",
    description:
      "Review IntentWire's Terms & Policies to understand user agreements, data usage, and platform guidelines for managed IT services and cybersecurity solutions.",
    url: "https://intentwire.com/terms-policies",
    siteName: "IntentWire",
    images: [
      {
        url: "https://intentwire.com/og-images/terms-policies.jpg", // Replace with your actual Terms & Policies OG image URL
        width: 1200,
        height: 630,
        alt: "Terms & Policies IntentWire User Agreements",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Policies – IntentWire User Agreements",
    description:
      "Review IntentWire's Terms & Policies to understand user agreements, data usage, and platform guidelines for managed IT services and cybersecurity solutions.",
    images: ["https://intentwire.com/og-images/terms-policies.jpg"], // Replace with your actual Terms & Policies image URL
    site: "@intentwire", // Optional: add your Twitter handle
  },
};


const TermsOfUse = () => {
  return (
    <>
    <div>
       {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#314158] to-[#253347] overflow-hidden min-h-[50vh] flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Shapes */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
            
            {/* Floating Icons */}
            <div className="absolute top-20 right-20 text-white/10 animate-bounce">
              <Server className="w-12 h-12" />
            </div>
            <div className="absolute bottom-20 left-20 text-white/10 animate-bounce delay-500">
              <Shield className="w-10 h-10" />
            </div>
          </div>
          
          {/* Top Left Circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-20">
            <svg width="600" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="100" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="200" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="300" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="400" stroke="#8d9fbe" strokeWidth="1" />
            </svg>
          </div>

          {/* Bottom Right Circles */}
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20">
            <svg width="600" height="600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="300" cy="300" r="100" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="200" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="300" stroke="#8d9fbe" strokeWidth="1" />
              <circle cx="300" cy="300" r="400" stroke="#8d9fbe" strokeWidth="1" />
            </svg>
          </div>
          
          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-auto text-[#253347]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 30C840 20 960 10 1080 15C1200 20 1320 40 1380 50L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"/>
            </svg>
          </div>
        
          
          {/* Main Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                  {/* Main Heading */}
                  <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                      Terms <span className="text-white/90">Of Use</span>
                    </h1>
                    <div className="w-20 h-1 bg-white/80 mx-auto lg:mx-0 rounded-full mb-6"></div>
                    <div className="mt-6">
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                        Effective Date: August 4, 2025
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Right Content - Icons Grid */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">Terms & Conditions</h3>
                      </div>
                      <p className="text-white/80 text-sm">Comprehensive terms governing your use of our services</p>
                    </div>
                    
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                          <Gavel className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-white font-semibold">Legal Compliance</h3>
                      </div>
                      <p className="text-white/80 text-sm">Adherence to all applicable laws and regulations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         
        </section>
      
      {/* Main Content */}
      <div className="min-h-screen">
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 bg-white shadow-sm rounded-lg">
          <div className="p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-3">
              Terms of Service
            </h1>
            <p className="text-gray-500 text-sm mb-4">(Revised August, 2023)</p>

            <div className="space-y-8 text-sm">
              {/* Section 1 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Channel Company provides our Internet sites and the
                  content, products and services offered on or through those
                  sites (collectively, the &quot;Services&quot;), to you subject to the
                  following Terms of Service (&quot;TOS&quot;). Your use of the Services
                  in whole or in part constitutes your binding acceptance of
                  these TOS. If you do not agree to these TOS, you should not
                  use the Services. Some Services may be subject to additional
                  posted rules, policies and terms. When you use those Services,
                  you and The Channel Company shall be subject to those
                  additional conditions, which are incorporated by reference
                  into these TOS (and, consequently, form part of your agreement
                  with us). Other Services may be governed by different usage
                  terms. In the event of an inconsistency between these TOS and
                  any additional posted conditions or separate usage terms, the
                  provisions of the additional conditions and/or separate usage
                  terms shall control. Because we may modify all or any part of
                  these TOS from time to time without notice to you, you should
                  check back often so you are aware of your current rights and
                  responsibilities. Your continued use of a given Service after
                  changes to the TOS have been published on that Service
                  constitutes your binding acceptance of the updated TOS. If at
                  any time the TOS are no longer acceptable to you, you should
                  immediately cease all use of the Services.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. Description of Services
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Services include a combination of content that we create
                  and that other third party content suppliers create. In
                  addition, some Services provide you and other users with an
                  opportunity to submit, post, display, transmit and/or exchange
                  information, ideas, opinions, photographs, images, video,
                  creative works or other information, messages, transmissions
                  or material to us or others on or through that Service
                  (collectively, the &quot;Postings&quot;). We adhere to high journalistic
                  standards, and use every reasonable effort to provide
                  informative and relevant content as part of the Services.
                  However, in using the Services, you may be exposed to content
                  that you find offensive, indecent, objectionable or that is
                  inaccurate and you bear all risks associated with using that
                  content. You understand that the Services are provided by The
                  Channel Company &quot;AS IS&quot;, as further described in Section 15 of
                  these TOS, and that The Channel Company does not guarantee the
                  accuracy, integrity or quality of any content available on or
                  through the Services. In this regard, you acknowledge that you
                  may not rely on any of this content, whether created by or
                  submitted to The Channel Company, including, but not limited
                  to, product reviews, white papers, product descriptions, stock
                  quotes, or Postings on any bulletin board, chat, news group,
                  community, forum or other feedback section of the Services
                  (collectively, the &quot;Forums&quot;). You understand that from time to
                  time, you may communicate with, receive communications from,
                  or otherwise participate in or use the services or obtain
                  goods and services of or from, third parties (e.g.,
                  advertisers) as a result of your use of the Services. All such
                  communication, interaction and participation is strictly and
                  solely between you and such third party and The Channel
                  Company shall not be responsible or liable to you in any way
                  in connection with these activities or transactions
                  (including, but not limited to, any representations,
                  warranties, covenants, contracts or other terms or conditions
                  that may exist between you and the third party, or any goods
                  or services you may purchase or obtain from any third party).
                  In particular, the appearance or availability of links to
                  third party sites on or through the Services does not
                  constitute an endorsement by The Channel Company with respect
                  to the content, advertising, products, or other materials
                  available on or from such sites. You further understand and
                  agree that the Services may include certain communications
                  from The Channel Company (such as administrative messages and
                  certain newsletters), and that these communications are
                  considered part of the Service and you may not be able to opt
                  out of receiving them. Unless explicitly stated otherwise, any
                  new features that augment or enhance the current Services
                  shall be subject to the TOS. Finally, you are responsible for
                  obtaining access to the Services and that access may involve
                  third party fees (such as Internet service provider or airtime
                  charges). You are responsible for those fees, including those
                  fees associated with the display or delivery of
                  advertisements. In addition, you must provide and are
                  responsible for all equipment necessary to access the
                  Services.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. General Rules of Conduct
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Your use of the Services is subject to all applicable local,
                  state, national and international laws and regulations, and
                  you agree not to violate such laws and regulations. In
                  addition, you agree that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    You will not interfere with another member&apos;s use and
                    enjoyment of the Services; you will not interfere with or
                    disrupt the security measures of the Services; you will not
                    interfere with or disrupt networks connected to the
                    Services, and will comply with all regulations, policies and
                    procedures of such networks; and
                  </li>
                  <li>
                    You will comply with United States law regarding the
                    transmission of technical data exported from the United
                    States.
                  </li>
                  <li>
                    You will not use the Services to send or result in the
                    transmission of junk e-mail, chain letters, duplicative or
                    unsolicited messages, or so-called &quot;spamming&quot;; harm minors
                    in any way; promote or generate revenue for any business or
                    commercial purposes, whether or not for a charge or through
                    linking with any other web services or pages, unless
                    authorized by The Channel Company; impersonate any person or
                    entity; intentionally or unintentionally violate any
                    applicable local, state, national or international law;
                    &quot;stalk&quot; or otherwise harass another;
                  </li>
                  <li>
                    You will not collect or store personal data about other
                    users; and
                  </li>
                  <li>
                    You will not reproduce, modify, distribute or republish
                    materials contained on the Service (either directly or by
                    linking) without our prior written permission. You will not
                    alter or remove any trademark, copyright or other notice
                    from copies of content. You may, however, download material
                    from the site (one machine readable copy and one print copy
                    per page) for your personal, noncommercial use only. We
                    reserve all rights in and title to all material so
                    downloaded. All trademarks, service marks, trade names,
                    trade dress and logos appearing on the site are the property
                    of their respective owners, including in some instances The
                    Channel Company.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Postings
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Although we reserve the right to edit Postings prior to their
                  inclusion on the Services, as a general matter The Channel
                  Company does not screen or monitor such content. Therefore,
                  you understand that you are solely responsible for all
                  Postings and other materials, whether publicly posted or
                  privately transmitted, that are uploaded, posted, emailed,
                  transmitted or otherwise made available from your email
                  address on our through the Services. You further agree that
                  your Postings will not violate these TOS. Specifically, you
                  represent and warrant that your Postings will not contain any
                  material that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    is false, inaccurate, or misleading; infringes any third
                    party&apos;s copyright, patent, trademark, trade secret or other
                    proprietary rights, or rights of publicity or privacy;
                    violates a nondisclosure agreement, or violates any law or
                    regulation (including, without limitation, those governing
                    export control, unfair competition, or false advertising);
                    is defamatory, constitutes trade libel or product
                    disparagement, or is unlawfully threatening or harassing; is
                    obscene or contains child pornography; or
                  </li>
                  <li>
                    contains viruses, Trojan horses, time bombs, worms,
                    cancelbots, easter eggs or other computer programming
                    routines that may damage or interfere with the operation of
                    any system, or unlawfully intercept any data or personal
                    information.
                  </li>
                </ul>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  You also agree that you will not:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    reproduce, distribute, republish or retransmit material
                    posted by any other Services users without the permission of
                    that user and The Channel Company; take any action that
                    imposes an unreasonable or disproportionately large load on
                    our infrastructure; or
                  </li>
                  <li>
                    interfere or attempt to interfere with the proper working of
                    the Services, any activities conducted on or through the
                    Services, or any networks through which you access the
                    Services.
                  </li>
                </ul>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  You further represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    your Postings will be original and/or you will obtain all
                    third-party permission necessary for the use of the Postings
                    as set forth below; you are the sole and exclusive owner of
                    all rights herein conveyed to The Channel Company and its
                    affiliates; and
                  </li>
                  <li>
                    you have the full and restricted power to convey such rights
                    to The Channel Company and its affiliates free and clear of
                    the claims of any other person or entity.
                  </li>
                </ul>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Postings do not reflect the views of The Channel Company, and
                  The Channel Company does not verify, endorse, or vouch for any
                  such content. We do, however, enforce these TOS, and if we
                  determine in our sole discretion that any Posting is
                  inaccurate, was posted without authorization, is not
                  compatible with the primary purpose of the applicable Services
                  or Sites (e.g., marketing content posted within a Site that is
                  primarily dedicated to information sharing or networking), or
                  otherwise violates these TOS, we reserve the right, at any
                  time, without prior notice and without limiting any and all
                  other rights we may have, at law or in equity, to (a) modify,
                  refuse or remove the Posting; (b) revoke the applicable user&apos;s
                  right to use the Services; and/or (d) use any technological,
                  legal, operational or other means available to The Channel
                  Company to enforce the provisions of these TOS, including,
                  without limitation, blocking specific IP addresses or
                  deactivating the applicable user&apos;s registration.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Finally, you specifically grant to The Channel Company and its
                  affiliates and service providers (or warrant that the owner of
                  such content grants to The Channel Company and its affiliates
                  and service providers) a perpetual, worldwide, royalty-free,
                  irrevocable, nonexclusive right and license, sublicensable
                  through multiple tiers, to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    use, reproduce, modify, adapt, publish, translate, create
                    derivative works from, distribute, perform and display all
                    Postings submitted by you or through your account, in whole
                    or in part; use, in whole or in part, your name, likeness,
                    photograph, voice, company name, screen name, e-mail address
                    and/or other identifying information submitted by you as
                    part of or in connection with such Postings (&quot;Image&quot;), and
                    reproduce, publish, create derivative works from,
                    distribute, perform and display materials containing the
                    same; and
                  </li>
                  <li>
                    incorporate the Postings and the Image in other works in any
                    form, media or technology now known or later developed
                    throughout the universe, and reproduce, publish, display and
                    otherwise distribute the same.
                  </li>
                </ul>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  For sake of clarity, by virtue of the above grant, you also
                  give The Channel Company and its affiliates permission to copy
                  your Postings and the Image as part of the normal backup
                  process and/or to archive discussions containing your Postings
                  and/or the Image.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. The Channel Company&apos;s Proprietary Rights
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  All Services software, design, text, images, photographs,
                  illustrations, audio and video material, artwork, graphic
                  material, database, proprietary information and all
                  copyrightable or otherwise legally protectable elements of the
                  Services, including, but not limited to, the selection,
                  sequence and &apos;look and feel&apos; and arrangement of items, and all
                  trademarks, service marks and trade names, excluding any of
                  your Postings (individually and/or collectively, &quot;Material&quot;),
                  are the property of The Channel Company, its subsidiaries,
                  affiliates, licensors or suppliers and are legally protected,
                  without limitation, under U.S. Federal and State, as well as
                  applicable foreign, laws, regulations and treaties. The
                  compilation of all content on each site is the exclusive
                  property of The Channel Company. You may not reproduce,
                  modify, create derivative works from, display, perform,
                  publish, distribute, disseminate, broadcast or circulate to
                  any third party (including, without limitation, on or via a
                  third party web site), or otherwise use, any materials
                  contained on the Services (except for your Postings) without
                  the express prior written consent of The Channel Company or
                  its owner if The Channel Company is not the owner. In
                  particular, you may not frame any Material without the express
                  prior written consent of The Channel Company or the Material
                  owner. You must not alter, delete or conceal any copyright or
                  other notices contained on the Services, including notices on
                  any Material you download, transmit, print or reproduce from
                  the Services. Any unauthorized or prohibited use of any
                  Material, may subject you to civil liability or criminal
                  prosecution, or both, under applicable federal and state laws.
                  You further agree not to access the Service by any means other
                  than through the interface that is provided by The Channel
                  Company for use in accessing the Service.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Forums
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Some of our Services give users the opportunity to participate
                  in Forums operated by The Channel Company or by a third party.
                  We ask that our users exercise appropriate caution when
                  participating in any type of Forum. In particular, please
                  remember that if you publicly disclose personal identifying
                  information, such as your name or email address, in connection
                  with a Forum, the information may be collected and used by
                  others. You should also take reasonable precautions with
                  regard to any material you download from or through Forums
                  (for example, scanning for viruses or other damaging computer
                  programming routines). Finally, you agree to use the Forums
                  only to send and receive messages and material that are proper
                  and related to that particular Forum.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. Directories and Other Membership Listings
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Some of our Services allow users to make some of their
                  personal information (including, but not limited to, name,
                  company affiliation and job title) available to other visitors
                  as part of a membership directory or other listing for that
                  Service. Please remember: If you do not want certain
                  information to be available to other Service users, you should
                  not include it in any membership directory listing. As with
                  all other content on the Services, we reserve the right to
                  refuse (or remove) listings in our sole discretion, and
                  without prior notice, if we determine that they are
                  inaccurate, were posted without authorization, or otherwise
                  violate these TOS.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Promotions
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Some of our Services may from time to time conduct promotions,
                  including, but not limited to, auctions, contests and
                  sweepstakes (&quot;Promotions&quot;). Each Promotion will have
                  additional terms, conditions and rules which will be posted or
                  otherwise made available to you and, for purposes of each
                  Promotion in which you participate, will be deemed
                  incorporated by reference into these TOS (and therefore a part
                  of your agreement with The Channel Company).
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. Fee-Based Services
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Some of our Services require that you pay a fee to access or
                  use such Service, as described in the specific conditions
                  included where those Services are offered. You agree to pay
                  all fees and charges that you incur. Unless otherwise noted,
                  all currency references are in U.S. dollars. We may, upon
                  notice if required by applicable laws, at any time change the
                  amount of, or basis for determining, any fee or charge, or
                  institute new fees or charges. All fees and charges are
                  payable in accordance with payment terms in effect at the time
                  the fee or charge becomes payable.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Registration Obligations
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Some of our Services require that you register with that
                  Service in order to access or use it. If such registration is
                  required, you agree that you will provide accurate information
                  (such as your real name and a valid e-mail address) and will
                  update your relevant information if it becomes outdated. If
                  you provide any information that is, or that The Channel
                  Company in its reasonable discretion determines may be,
                  untrue, inaccurate, not current or incomplete, The Channel
                  Company has the right, without prior notice, to suspend or
                  terminate your account and refuse any and all current or
                  future use of the Services (or any portion thereof). For more
                  detailed information about how we treat the registration
                  information you provide to us, please see our Privacy Notice,
                  which is incorporated by reference into these TOS (and
                  therefore a part of your agreement with us).
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Passwords and Other Security Issues
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  If we issue you a password, you agree to help protect your
                  information by guarding that password, and by changing it as
                  soon as possible if you believe its security has been
                  compromised. If The Channel Company allows you to choose a
                  username and you select, in The Channel Company&apos;s sole
                  discretion, one that is obscene, indecent, abusive or which is
                  otherwise objectionable, The Channel Company has the right,
                  without prior notice to you, to automatically change your
                  username, delete your Postings under it, deny you access to
                  the Services, or any combination of these options. You may not
                  transfer your registration, password or user name to another
                  person or share it with anyone. We will not be responsible for
                  any loss or damage that may result if you fail to comply with
                  these requirements. If you believe your information has been
                  used without your authorization, you agree to notify The
                  Channel Company immediately.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. Privacy Policy
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Channel Company respects your privacy. Please see our
                  Privacy Notice for important information and disclosures
                  relating to the collection and use of your personally
                  identifiable information in connection with your use of the
                  Services.
                </p>
              </section>

              {/* Section 13 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  13. Service Deactivation or Termination
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We have the right, but not the obligation, to take any of the
                  following actions in our sole discretion at any time and for
                  any reason without giving you any prior notice:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    Restrict, suspend or terminate your access to all or any
                    part of our Services;
                  </li>
                  <li>
                    Refuse, move or remove for any reason any material that you
                    submit on or through the Services;
                  </li>
                  <li>
                    Refuse, move, or remove any content that is available on or
                    through the Services;
                  </li>
                  <li>
                    Deactivate or delete your accounts and all related
                    information and files in your account;
                  </li>
                  <li>
                    Establish general practices and limits concerning use of the
                    Services
                  </li>
                </ul>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We may take any of the above actions for any legitimate
                  business reason, as determined by The Channel Company in its
                  sole discretion, including, but not be limited to, (a)
                  breaches or violations of the TOS or other incorporated
                  agreements or guidelines, (b) requests by law enforcement or
                  other government agencies, (c) a request by you, (d)
                  discontinuance or material modification to the Services (or
                  any part thereof), and (e) unexpected technical or security
                  issues or problems. You agree that we will not be liable to
                  you or any third party for taking any of these actions.
                </p>
              </section>

              {/* Section 14 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  14. Indemnification
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  You hereby agree to indemnify, defend and hold The Channel
                  Company, its subsidiaries, affiliates, and all of their
                  respective officers, directors, owners, employees, agents,
                  licensors, representatives, licensors and suppliers
                  (collectively, the &quot;The Channel Company Parties&quot;), harmless
                  from and against any and all liability, losses, expenses,
                  damages and costs (including attorneys&apos; fees), incurred by any
                  The Channel Company Party in connection with any claim arising
                  out of your use of the Services, any use or alleged use of
                  your accounts or your passwords by any person, whether or not
                  authorized by you, the content you submit, post, transmit or
                  make available through the Services, your violation of these
                  TOS, your connection to the Services, or your violation of the
                  rights of any other person or entity.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Channel Company reserves the right to assume, at its sole
                  expense, the exclusive defense and control of any claim,
                  action or other matter for which you are required to indemnify
                  us, and all negotiations for settlement or compromise thereof,
                  and you agree to fully cooperate with The Channel Company in
                  the defense of any such claim, action, settlement or
                  compromise negotiations, as requested by The Channel Company.
                </p>
              </section>

              {/* Section 15 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  15. Disclaimers of Warranties
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  THE SERVICES, AND MATERIALS, PRODUCTS AND POSTINGS ARE MADE
                  AVAILABLE ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY
                  REPRESENTATION, PROMISE OR WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED, OR ANY GUARANTY OR ASSURANCE THE SERVICES WILL BE
                  AVAILABLE FOR USE, OR UNINTERRUPTED OR ERROR FREE, OR THAT ALL
                  PRODUCTS, FEATURES, FUNCTIONS OR OPERATIONS WILL BE AVAILABLE
                  OR PERFORM AS DESCRIBED OR THAT ANY ERRORS WILL BE CORRECTED.
                  IN ADDITION, ANY MATERIAL THAT YOU DOWNLOAD OR OTHERWISE
                  OBTAIN THROUGH OUR SERVICES IS DONE AT YOUR OWN DISCRETION AND
                  RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY POTENTIAL
                  DAMAGES TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS
                  FROM YOUR DOWNLOAD OF ANY SUCH MATERIAL. Without limiting the
                  foregoing, The Channel Company is not responsible or liable
                  for any malicious code, delays, inaccuracies, errors, or
                  omissions arising out of your use of the Services. As between
                  you and The Channel Company, you are assuming the entire risk
                  as to the quality, accuracy, performance, timeliness,
                  adequacy, completeness, correctness, authenticity, security
                  and validity of any and all features and functions of the
                  Services, including, without limitation, postings and
                  materials associated with your use of the Services. Under no
                  circumstances shall any The Channel Company Party be liable
                  for any loss or damage caused by your reliance on information
                  obtained through the Services. It is your responsibility to
                  evaluate the information, opinion, advice, or other content
                  available through the Services.
                </p>
              </section>

              {/* Section 16 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  16. Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  IN NO EVENT SHALL ANY The Channel Company PARTY BE LIABLE TO
                  YOU OR ANY OTHER PERSON OR ENTITY, UNDER ANY THEORY, INCLUDING
                  NEGLIGENCE, FOR DAMAGES OF ANY KIND ARISING FROM THE USE OF
                  THE SERVICES, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT,
                  ACTUAL, INCIDENTAL, PUNITIVE, SPECIAL OR CONSEQUENTIAL
                  DAMAGES, LOST INCOME, REVENUE OR PROFITS, LOST OR DAMAGED
                  DATA, OR OTHER COMMERCIAL OR ECONOMIC LOSS, THAT RESULT FROM
                  YOUR USE OF, OR INABILITY TO USE, THE SERVICES, EVEN IF SUCH
                  The Channel Company PARTY HAS BEEN ADVISED OF THE POSSIBILITY
                  OF SUCH DAMAGES OR SUCH DAMAGES ARE FORESEEABLE. BY USING THE
                  SERVICES, YOU AGREE THAT THIS LIMITATION WILL APPLY TO ANY
                  MERCHANDISE, SERVICES, AND CONTENT THAT MAY BE AVAILABLE
                  THROUGH SUCH SERVICES. IN THE EVENT THAT APPLICABLE LAW DOES
                  NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY OR DAMAGES,
                  YOU AGREE THAT IN NO EVENT SHALL THE TOTAL LIABILITY OF ANY
                  The Channel Company PARTY TO YOU FOR ALL DAMAGES, LOSSES AND
                  CAUSES OF ACTION OF ANY KIND EXCEED ONE HUNDRED DOLLARS
                  ($100.00). Notwithstanding any claim that a sole or exclusive
                  remedy which is provided in this agreement may or does fail of
                  its essential purpose, you specifically acknowledge and agree
                  that your sole and exclusive remedy for any loss or damage
                  shall be to have The Channel Company, upon written notice from
                  you to us, attempt to repair, correct or replace any deficient
                  Service and, if repair, correction or replacement is not
                  reasonably commercially practicable for The Channel Company,
                  in its sole discretion, to refund any monies actually paid by
                  you for the Service involved and to terminate and discontinue
                  your use of the Services.
                </p>
              </section>

              {/* Section 17 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  17. Claims of Infringement
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The Channel Company respects the intellectual property of
                  others and requires that you do the same. In accordance with
                  the Digital Millennium Copyright Act (&quot;DMCA&quot;), the text of
                  which may be found on the U.S. Copyright Office website at
                  http://www.copyright.gov/legislation/dmca.pdf, we will respond
                  expeditiously to notices of alleged copyright infringement
                  that are duly reported to our Designated Copyright Agent
                  identified in the notice below. We will disable and/or
                  terminate the accounts of users who are repeat infringers. If
                  you believe that your content has been copied in a way that
                  constitutes copyright infringement, or your intellectual
                  property rights have been otherwise violated, please provide
                  our Copyright Agent the following information:
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  DMCA Notice of Alleged Infringement (&quot;Notice&quot;)
                </h3>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-600">
                  <li>
                    Identify the copyrighted work that you claim has been
                    infringed, or if multiple works are covered by this Notice
                    you may provide a representative list of the copyrighted
                    works that you claim have been infringed.
                  </li>
                  <li>
                    Identify the material or link you claim is infringing and
                    provide a description of where the infringing work is
                    located on our Internet sites.
                  </li>
                  <li>
                    Provide your mailing address, telephone number and, if
                    available, email address.
                  </li>
                  <li>
                    Include both of the following statements in the body of the
                    Notice: &quot;I hereby state that I have a good-faith belief that
                    the disputed use of the copyrighted material is not
                    authorized by the copyright owner, its agent, or the law
                    (e.g., fair use).&quot;
                  </li>
                  <li>
                    &quot;I hereby state that the information in this Notice is
                    accurate and, under penalty of perjury, that I am the owner
                    or authorized to act on behalf of the owner, of the
                    copyright or of an exclusive right under the copyright that
                    is allegedly infringed.&quot;
                  </li>
                  <li>
                    Provide your full legal name and your electronic or physical
                    signature.
                  </li>
                </ul>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Deliver this Notice, with all items completed, to our
                  Designated Copyright Agent:
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed font-medium">
                  By mail:
                  <br />
                  Avita Delerme
                  <br />
                  The Channel Company
                  <br />
                  117 Kendrick St, Suite 300
                  <br />
                  Needham, MA 02494
                  <br />
                  United States of America
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  While we consider all such notices seriously, you may be
                  liable for damages (including costs and attorneys&apos; fees) if
                  you materially misrepresent that content or activity is
                  infringing. Accordingly, if you are uncertain whether material
                  infringes your copyrights (including whether use of
                  copyrighted material may constitute fair use) you may wish to
                  seek the advice of an attorney.
                </p>
              </section>

              {/* Section 18 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  18. Miscellaneous
                </h2>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  General
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  This site is created, controlled and operated by The Channel
                  Company in the USA, and is intended solely and exclusively for
                  residents of the United States, its territories and
                  possessions who are at least 13 years of age or older. If you
                  choose to access this site from another location, you are
                  responsible for complying with local laws, if and to the
                  extent that local laws apply.
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  Entire Agreement
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  These TOS, including the policies referred to in these TOS,
                  constitute the entire agreement between you and The Channel
                  Company and govern your use of the Services, superseding any
                  prior agreements between you and The Channel Company. As noted
                  above, you also may be subject to additional terms and
                  conditions that may apply when you use or purchase certain
                  other The Channel Company services, affiliate services,
                  third-party content or third-party software. These TOS cannot
                  be changed or terminated orally.
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  Notice
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We may be required by state or federal law to notify you of
                  certain events. You hereby acknowledge and consent that such
                  notices will be effective upon our posting them on or through
                  the Services or delivering them to you through email. You may
                  update your email address by visiting the Services where you
                  have provided contact information. If you do not provide us
                  with accurate information, we cannot be held liable if we fail
                  to notify you. You have the right to request that we provide
                  such notices to you in paper format, and may do so by
                  contacting the The Channel Company&apos;s Legal Department, The
                  Channel Company, 117 Kendrick Street, Suite 300, Needham, MA
                  02494; Tel. (508) 416-1142. If you are a California resident,
                  you may have this same information emailed to you by sending a
                  letter to the foregoing address with your email address and a
                  request for this information.
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  Assignment
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  You agree that the TOS may be automatically assigned, in whole
                  or in part, by The Channel Company or its affiliate to a third
                  party, in our sole discretion, in connection with a merger,
                  acquisition, reorganization or sale of substantially all of
                  our assets, in whole or in part.
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  Choice of Law and Forum
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The formation, construction and interpretation of this
                  agreement shall be controlled by the laws of the State of New
                  York, giving no effect to choice of law provisions. The U.N.
                  Convention of Contracts for the International Sale of Goods is
                  expressly excluded from any interpretation of this Agreement.
                  Any dispute relating to this agreement shall be subject to the
                  exclusive jurisdiction of the state and federal courts in
                  Worcester County, Massachusetts, U.S.A., and the parties agree
                  to submit to the personal and exclusive jurisdiction of these
                  courts.
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  No Third Party Beneficiaries
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  You agree that, except as otherwise expressly provided in this
                  TOS, there shall be no third party beneficiaries to this
                  Agreement.
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  Waiver and Severability of Terms
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  The failure of The Channel Company to exercise or enforce any
                  right or provision of the TOS shall not constitute a waiver of
                  such right or provision. If any provision of the TOS is found
                  by a court of competent jurisdiction to be invalid, the
                  parties nevertheless agree that the court should endeavor to
                  give effect to the parties&apos; intentions as reflected in the
                  provision, and the other provisions of the TOS remain in full
                  force and effect.
                </p>
                <h3 className="text-xl font-medium text-gray-700 mb-3">
                  Statute of Limitations
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  You agree that regardless of any statute or law to the
                  contrary, any claim or cause of action arising out of or
                  related to use of the Service or the TOS must be filed within
                  one (1) year after such claim or cause of action arose or be
                  forever barred.
                </p>
              </section>

              {/* Section 19 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  19. Violations
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We also ask that you bring Service problems to our attention,
                  but California residents may also choose to contact the
                  Complaint Assistance Unit of the Division of Consumer Services
                  of the Department of Consumer Affairs, at 400 R Street,
                  Sacramento, California 95814 or (800) 952-5210.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  For questions about these Terms of Service, the practices of
                  this site or any dealings with The Channel Company, contact us
                  at privacyrequests@thechannelcompany.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  </>
  )
}

export default TermsOfUse;