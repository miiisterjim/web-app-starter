'use strict';

import { fetchContent, displayContent } from '../main.js';
import { jest } from '@jest/globals';

describe('main', () => {
    
    describe('fetchContent', () => {
        it('should fetch content data', async () => {
          const mockResponse = {
            json: jest.fn().mockResolvedValue({
              content: 'Yo!',        
            }),
          };
      
          global.fetch = jest.fn().mockResolvedValue(mockResponse);
      
          const contentData = await fetchContent();
      
          expect(fetch).toHaveBeenCalledWith('/hello-world');
          expect(contentData.content).toBe('Hello World!');
        });
        
      });

      describe('displayContent', () => {

        beforeEach(() => {
            document.body.innerHTML = `
              <div id="content-display"></div>
            `;
        });

        it('should display content', async () => {
          const contentData = {
            content: "Yo!"
          };
      
          displayContent(contentData);

          const displayDiv = document.getElementById('content-display');          
          expect(displayDiv.innerHTML).toBe('<p>Yo!</p>');
        });        
      });    
  });