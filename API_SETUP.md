# API Setup Guide

## Current Issue
The movie search is failing because the API key in your `.env` file is invalid.

**Current invalid key:** `32550b83`
**Problem:** This key is too short and not a valid OMDB API key.

## How to Fix

### Step 1: Get a Valid API Key
1. Go to [OMDB API Key Request](http://www.omdbapi.com/apikey.aspx)
2. Fill out the form with your email address
3. Check your email for the API key (it will be much longer, typically 32+ characters)
4. Copy the API key

### Step 2: Update Your Environment File
1. Open the `.env` file in your project root
2. Replace the current invalid key:
   ```
   VITE_OMDB_API_KEY=32550b83
   ```
3. With your new valid key:
   ```
   VITE_OMDB_API_KEY=your_actual_long_api_key_here
   ```

### Step 3: Restart Your Development Server
1. Stop the current dev server (Ctrl+C)
2. Run `npm run dev` again
3. The environment variables will be reloaded

## Expected API Key Format
- **Length:** Usually 32+ characters
- **Example:** `abc123def456ghi789jkl012mno345pqr678stu901vwx234yz`
- **Current:** `32550b83` (too short, invalid)

## Testing
After updating the API key, try searching for a movie like "batman" or "avengers" to test if it's working.

## Troubleshooting
If you still get errors after updating the API key:
1. Check the browser console for detailed error messages
2. Verify the `.env` file is in the project root (same folder as `package.json`)
3. Make sure you restarted the development server
4. Check that the API key was copied correctly (no extra spaces or characters)

## Need Help?
- OMDB API Documentation: http://www.omdbapi.com/
- API Key Request: http://www.omdbapi.com/apikey.aspx
- Check the browser console for detailed error logs
