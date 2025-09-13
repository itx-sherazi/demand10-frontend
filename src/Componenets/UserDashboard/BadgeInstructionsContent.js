import BadgeGenerator from "@/Componenets/UserDashboard/BadgeGenerator";
import { BookOpen, Code, Settings, Globe } from 'lucide-react';

export default function BadgeInstructionsContent({ companyId, companyName, subcategorySlug, claims, companyData }) {
  // Check if user has approved claims
  const approvedClaims = claims.filter(claim => claim.status === 'approved');
  
  if (approvedClaims.length === 0) {
    return (
      <div className="py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Badge Instructions</h1>
          <p className="text-gray-600 mt-2">
            You need to have an approved company claim to view badge instructions.
          </p>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Please submit a company claim and wait for admin approval to access badge instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If we don't have company data yet, show a message
  if (!companyData) {
    return (
      <div className="py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Badge Instructions</h1>
          <p className="text-gray-600 mt-2">
            Loading company data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Badge Integration Instructions</h1>
        <p className="text-gray-600 mt-2">
          Learn how to embed your IntentWire badges on your website
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <BookOpen className="mr-2 h-5 w-5 text-[#4ecfc5]" />
          How to Embed Your Badge
        </h2>
        <p className="text-gray-600 mb-4">
          Follow these instructions to add your IntentWire badge to your website. The badge will automatically 
          display your most recent achievement and update when you receive new badges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-[#4ecfc5] bg-opacity-10 rounded-lg">
                <Code className="h-5 w-5 text-[#4ecfc5]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 ml-3">Step 1: Choose Your Badge Type</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
              <li><span className="font-medium">Basic Embed:</span> Simple HTML code that displays your badge</li>
              <li><span className="font-medium">Advanced Embed:</span> JavaScript that auto-updates your badge</li>
            </ul>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-[#4ecfc5] bg-opacity-10 rounded-lg">
                <Settings className="h-5 w-5 text-[#4ecfc5]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 ml-3">Step 2: Customize Size</h3>
            </div>
            <p className="text-gray-600">
              Adjust the width and height to fit your website&apos;s design. Default size is 200x60 pixels.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-[#4ecfc5] bg-opacity-10 rounded-lg">
                <Code className="h-5 w-5 text-[#4ecfc5]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 ml-3">Step 3: Copy the Code</h3>
            </div>
            <p className="text-gray-600">
              Copy the code snippet from the badge generator below.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-[#4ecfc5] bg-opacity-10 rounded-lg">
                <Globe className="h-5 w-5 text-[#4ecfc5]" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 ml-3">Step 4: Add to Your Website</h3>
            </div>
            <p className="text-gray-600">
              Paste the code into your website&apos;s HTML where you want the badge to appear.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Settings className="mr-2 h-5 w-5 text-[#4ecfc5]" />
          Generate Your Badge Code
        </h2>
        <p className="text-gray-600 mb-4">
          Use the form below to generate your badge code with custom dimensions.
        </p>
        
        <BadgeGenerator 
          companyId={companyId} 
          companyName={companyName}
          subcategorySlug={subcategorySlug}
        />
      </div>
      
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Globe className="mr-2 h-5 w-5 text-[#4ecfc5]" />
          Platform-Specific Instructions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-gray-900 mb-2">HTML/CSS Websites</h3>
            <p className="text-sm text-gray-600">
              Copy and paste the Basic Embed Code directly into your HTML files.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-gray-900 mb-2">WordPress</h3>
            <p className="text-sm text-gray-600">
              Use the &quot;Custom HTML&quot; block in your post/page editor to paste the code.\r
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-gray-900 mb-2">React/Next.js</h3>
            <p className="text-sm text-gray-600">
              Use the Basic Embed Code in JSX or implement the Advanced Embed Script.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-gray-900 mb-2">Wix</h3>
            <p className="text-sm text-gray-600">
              Add the &quot;Embed&quot; element and choose &quot;Embed a Code Snippet&quot;.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-gray-900 mb-2">Shopify</h3>
            <p className="text-sm text-gray-600">
              Add the code to your desired template file in the theme editor.
            </p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-medium text-gray-900 mb-2">Python Frameworks</h3>
            <p className="text-sm text-gray-600">
              Include the code in your HTML templates, using |safe filter for Django.
            </p>
          </div>
        </div>
        
       <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
  <h3 className="text-md font-medium text-blue-900 mb-2">Need Help?</h3>

  <p className="text-sm text-blue-800 mb-2">
    For detailed instructions on integrating badges with specific platforms,
    please refer to our comprehensive documentation.
  </p>

  <p className="text-sm text-blue-800">
    Still stuck? Contact our support at{" "}
    <a
      href="mailto:info@gmail.com"
      className="font-semibold text-blue-700 underline hover:text-blue-900"
    >
      info@intentwire.com
    </a>
  </p>
</div>

      </div>
    </div>
  );
}