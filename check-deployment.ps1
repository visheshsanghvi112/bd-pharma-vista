#!/usr/bin/env pwsh
# Quick deployment verification script for Baker and Davis

Write-Host "`n🔍 CHECKING LIVE DEPLOYMENT..." -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

try {
    # Fetch the live HTML
    $response = Invoke-WebRequest -Uri "https://bdindia.in/" -UseBasicParsing -ErrorAction Stop
    $html = $response.Content
    
    # Check for noscript
    $hasNoscript = $html -match '<noscript>'
    $hasBakerDavis = $html -match 'Baker and Davis'
    $hasMetaTags = $html -match 'meta name="description"'
    
    # Extract asset hash to detect new deployments
    if ($html -match '/assets/index-([a-zA-Z0-9_-]+)\.js') {
        $assetHash = $matches[1]
    } else {
        $assetHash = "NOT FOUND"
    }
    
    Write-Host "📊 DEPLOYMENT RESULTS:" -ForegroundColor Yellow
    Write-Host "─────────────────────────────────" -ForegroundColor Gray
    
    if ($hasNoscript) {
        Write-Host "✅ Noscript tag: FOUND" -ForegroundColor Green
        # Extract noscript content preview
        if ($html -match '<noscript>([\s\S]{0,100})') {
            $preview = $matches[1] -replace '\s+', ' '
            Write-Host "   Preview: $preview..." -ForegroundColor DarkGray
        }
    } else {
        Write-Host "❌ Noscript tag: NOT FOUND" -ForegroundColor Red
        Write-Host "   ⚠️  Deployment not yet complete!" -ForegroundColor Yellow
    }
    
    if ($hasBakerDavis) {
        Write-Host "✅ Baker and Davis: Found in meta tags" -ForegroundColor Green
    } else {
        Write-Host "❌ Baker and Davis: NOT FOUND" -ForegroundColor Red
    }
    
    if ($hasMetaTags) {
        Write-Host "✅ SEO meta tags: PRESENT" -ForegroundColor Green
    } else {
        Write-Host "❌ SEO meta tags: MISSING" -ForegroundColor Red
    }
    
    Write-Host "`n📦 Asset Hash: $assetHash" -ForegroundColor Cyan
    Write-Host "   (Changes = New deployment)" -ForegroundColor DarkGray
    
    Write-Host "`n🌐 Status Code: $($response.StatusCode)" -ForegroundColor Cyan
    Write-Host "📏 HTML Size: $([math]::Round($html.Length / 1024, 2)) KB" -ForegroundColor Cyan
    Write-Host "⏰ Checked: $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Cyan
    
    # Overall status
    Write-Host "`n🎯 OVERALL STATUS:" -ForegroundColor Magenta
    if ($hasNoscript -and $hasBakerDavis -and $hasMetaTags) {
        Write-Host "   ✅ DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
        Write-Host "   🚀 Site is ready for search engines" -ForegroundColor Green
    } elseif ($hasBakerDavis -and $hasMetaTags) {
        Write-Host "   ⚠️  PARTIALLY DEPLOYED" -ForegroundColor Yellow
        Write-Host "   ⏳ Wait a few more minutes and check again" -ForegroundColor Yellow
    } else {
        Write-Host "   ❌ DEPLOYMENT INCOMPLETE" -ForegroundColor Red
        Write-Host "   🔄 Trigger a new deployment or check Vercel logs" -ForegroundColor Red
    }
    
} catch {
    Write-Host "❌ ERROR: Could not fetch site" -ForegroundColor Red
    Write-Host "   $_" -ForegroundColor DarkGray
}

Write-Host "`n================================" -ForegroundColor Cyan
Write-Host "TIP: Run this script again in 2-3 minutes" -ForegroundColor DarkGray
Write-Host "     to check if deployment completed`n" -ForegroundColor DarkGray
