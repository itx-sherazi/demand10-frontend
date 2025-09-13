"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import './badge-styles.css';

export default function BadgeGenerator({ companyId, companyName, subcategorySlug }) {
  const [copied, setCopied] = useState(false);
  const [copiedType, setCopiedType] = useState(null); 
  const [badgeWidth, setBadgeWidth] = useState('200'); 
  const [badgeHeight, setBadgeHeight] = useState('60'); 

  // Use environment variable for API base URL, with fallback to production URL
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.intentwire.com/api/v1';

  // Generate the badge snippet code with correct URL structure and referral tracking
  const badgeSnippet = `<div class="intentwire-badge" data-company="${companyId}">
  <a href="https://intentwire.com/${subcategorySlug}/${companyName}?ref=badge_embed" target="_blank" rel="noopener noreferrer">
    <img src="${API_BASE_URL}/badges/embed/${companyId}?ref=badge_embed&width=${badgeWidth}&height=${badgeHeight}" alt="Verified by IntentWire" width="${badgeWidth}" height="${badgeHeight}" style="width: ${badgeWidth}px; height: ${badgeHeight}px;"/>
  </a>
</div>`;

  const advancedSnippet = `<script>
  // IntentWire Badge Embed Script
  // This script will automatically update your badge when your status changes
  (function() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initBadge);
    } else {
      initBadge();
    }
    
    function initBadge() {
      try {
        var badgeContainer = document.querySelector('.intentwire-badge[data-company="${companyId}"]');
        if (!badgeContainer) {
          console.warn('IntentWire badge container not found');
          return;
        }
        
        // Use consistent referral tracking - same as basic embed
        var referrer = 'badge_embed';
        
        // Set up the image with referral tracking
        var img = badgeContainer.querySelector('img');
        if (img) {
          img.src = '${API_BASE_URL}/badges/embed/${companyId}?ref=' + referrer + '&width=${badgeWidth}&height=${badgeHeight}';
          // Set dimensions
          img.width = ${badgeWidth};
          img.height = ${badgeHeight};
          img.style.width = '${badgeWidth}px';
          img.style.height = '${badgeHeight}px';
          img.setAttribute('loading', 'lazy'); // Improve performance
        }
        
        // Fetch additional badge info
        var apiUrl = '${API_BASE_URL}/badges/embed-info/${companyId}?ref=' + referrer + '&width=${badgeWidth}&height=${badgeHeight}';
        
        // Use fetch with timeout
        var controller = new AbortController();
        var timeoutId = setTimeout(() => {
          controller.abort();
          handleFetchError('Request timeout');
        }, 5000); // 5 second timeout
        
        fetch(apiUrl, { signal: controller.signal })
          .then(response => {
            clearTimeout(timeoutId);
            if (!response.ok) {
              throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json();
          })
          .then(data => {
            if (!data) {
              throw new Error('No data received');
            }
            
            if (data.success && data.data && data.data.length > 0) {
              // Select the most recently assigned badge (first in the sorted array)
              var badge = data.data[0];
              var img = badgeContainer.querySelector('img');
              if (img && badge.badge && badge.badge.image) {
                img.src = badge.badge.image;
                img.alt = (badge.badge.name || 'Verified by IntentWire') + ' - Verified by IntentWire';
                // Maintain dimensions
                img.width = ${badgeWidth};
                img.height = ${badgeHeight};
                img.style.width = '${badgeWidth}px';
                img.style.height = '${badgeHeight}px';
              }
              
              // Update the link to point to the company profile with tracking
              var link = badgeContainer.querySelector('a');
              if (link && data.company && data.company.url) {
                link.href = data.company.url + '?ref=' + referrer;
              }
            } else {
              console.warn('No badge data available, using default badge');
            }
          })
          .catch(error => {
            clearTimeout(timeoutId);
            handleFetchError(error.message);
          });
      } catch (error) {
        console.error('IntentWire badge initialization error:', error);
        // Fallback to default badge
        fallbackToDefaultBadge();
      }
    }
    
    function handleFetchError(errorMessage) {
      console.error('IntentWire badge fetch error:', errorMessage);
      // Fallback to default badge if fetch fails
      fallbackToDefaultBadge();
    }
    
    function fallbackToDefaultBadge() {
      try {
        var badgeContainer = document.querySelector('.intentwire-badge[data-company="${companyId}"]');
        if (badgeContainer) {
          // Use consistent referral tracking - same as basic embed
          var referrer = 'badge_embed';
          var img = badgeContainer.querySelector('img');
          if (img) {
            img.src = '${API_BASE_URL}/badges/embed/${companyId}?ref=' + referrer + '&width=${badgeWidth}&height=${badgeHeight}';
          }
        }
      } catch (error) {
        console.error('Error in fallback mechanism:', error);
      }
    }
  })();
</script>`;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setCopiedType(null);
    }, 2000);
  };

  const handleWidthChange = (e) => {
    setBadgeWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setBadgeHeight(e.target.value);
  };

  return (
    <div className="intentwire-badge-container">
      <h3 className="intentwire-badge-title text-xl font-semibold text-gray-900 mb-4">Generate Your Badge Code</h3>
      
      {/* Width and Height Controls */}
      <div className="intentwire-badge-controls mb-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="intentwire-badge-control-title text-md font-medium text-gray-900 mb-3">Badge Size Controls</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="intentwire-badge-control-group">
            <label className="intentwire-badge-label block text-sm font-medium text-gray-700 mb-1">
              Width (px)
            </label>
            <input
              type="number"
              value={badgeWidth}
              onChange={handleWidthChange}
              className="intentwire-badge-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ecfc5]"
              min="50"
              max="500"
            />
          </div>
          <div className="intentwire-badge-control-group">
            <label className="intentwire-badge-label block text-sm font-medium text-gray-700 mb-1">
              Height (px)
            </label>
            <input
              type="number"
              value={badgeHeight}
              onChange={handleHeightChange}
              className="intentwire-badge-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ecfc5]"
              min="30"
              max="300"
            />
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Adjust the width and height to fit your website&apos;s design. Default size is 200x60 pixels.
        </p>
      </div>
      
      <div className="intentwire-badge-code-container mb-6">
        <label className="intentwire-badge-label block text-sm font-medium text-gray-700 mb-2">
          Basic Embed Code (Recommended):
        </label>
        <div className="relative">
          <pre className="intentwire-badge-code bg-gray-100 p-4 rounded-md text-sm overflow-x-auto max-h-40">
            {badgeSnippet}
          </pre>
          <button
            onClick={() => handleCopy(badgeSnippet, 'basic')}
            className="intentwire-badge-copy-button absolute top-2 right-2 bg-[#4ecfc5] text-white p-2 rounded-md hover:bg-[#3bb3a9] transition-colors"
            title="Copy to clipboard"
          >
            {copied && copiedType === 'basic' ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
      
      <div className="intentwire-badge-code-container mb-6">
        <label className="intentwire-badge-label block text-sm font-medium text-gray-700 mb-2">
          Advanced Embed Code (Auto-updating):
        </label>
        <div className="relative">
          <pre className="intentwire-badge-code bg-gray-100 p-4 rounded-md text-sm overflow-x-auto max-h-40">
            {advancedSnippet}
          </pre>
          <button
            onClick={() => handleCopy(advancedSnippet, 'advanced')}
            className="intentwire-badge-copy-button absolute top-2 right-2 bg-[#4ecfc5] text-white p-2 rounded-md hover:bg-[#3bb3a9] transition-colors"
            title="Copy to clipboard"
          >
            {copied && copiedType === 'advanced' ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
      
      <div className="intentwire-badge-preview-container">
        <h4 className="intentwire-badge-preview-title text-md font-medium text-gray-900 mb-2">Preview:</h4>
        <div className="intentwire-badge" style={{ display: 'inline-block' }}>
          <div 
            className="intentwire-badge-preview border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500"
            style={{ 
              width: `${badgeWidth}px`, 
              height: `${badgeHeight}px`,
              minWidth: '50px',
              minHeight: '30px'
            }}
          >
            Badge Preview ({badgeWidth}x{badgeHeight})
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Note: The actual badge will display your company&apos;s most recent achievement and verification status.
        </p>
      </div>
    </div>
  );
}