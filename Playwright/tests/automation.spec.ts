import { expect, test } from "@playwright/test";

test('Kaleidoscope Scholarship', async ({ page,context }) => {
    await context.clearCookies();
    const random_string = (Math.random() + 1).toString(36).substring(2);
    // Step 1: Register a new User
    await page.goto("/program/sdet-test-scholarship");
    await page.getByRole('link', { name: 'Log In to Apply' }).click();
    await page.getByPlaceholder('Email Address').fill(`madhur-${random_string}@gmail.com`);
    await page.getByLabel('Next').click();   
    await page.getByLabel('First Name').fill('Madhur');    
    await page.getByLabel('Last Name').fill('Sharma');    
    await page.getByPlaceholder('1 (702) 123-').fill('+91987654321');
    await page.getByLabel('Create a Password').fill(`Scholar-${random_string}@12345`);
    await page.getByLabel('I confirm that I am at least').check();
    await page.getByLabel('Submit').click();
    // Address Details  
    await page.getByPlaceholder('Enter your street address').fill(`Test Address-${random_string}`);    
    await page.getByPlaceholder('Enter additional street').fill(`Test Street-${random_string}`);
    await page.getByPlaceholder('Enter your state').click();
    await page.getByRole('option', { name: 'California' }).click();    
    await page.getByPlaceholder('Enter your city').fill('Test City');    
    await page.getByPlaceholder('Enter your zip code').fill('400000');
    await page.getByPlaceholder('Enter your country').click();
    await page.getByRole('option', { name: 'India' }).click();
    await page.getByRole('button', { name: 'Next Page' }).click();
    //Adding Extracurricular Activities
    // 1st Extracurricular Activities
    await page.getByRole('button', { name: 'Add Entry' }).click();    
    await page.getByPlaceholder('Short Input').fill('Dance');    
    await page.getByPlaceholder('123').fill('6');    
    await page.getByLabel('List any leadership roles,').fill('Lead Dancer of My Office Dance Group');    
    await page.getByLabel('Description of Involvement ').fill('I have participated in many events in my Office. Won first prize in the year 2018 in Dance competition');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByRole('button', { name: 'Next Page' }).click();
    await expect(page.getByText('Extracurricular Activities *Please add at least 2 entries')).toBeVisible();
    // 2nd Extracurricular Activities
    await page.getByRole('button', { name: 'Add Entry' }).click();    
    await page.getByPlaceholder('Short Input').fill('Music');    
    await page.getByPlaceholder('123').fill('2');    
    await page.getByLabel('List any leadership roles,').fill('Lead Guitarist of My School Music Group');  
    await page.getByLabel('Description of Involvement ').fill('I have participated in many events in my School. Won first prize in the year 2014 in Music competition');
    await page.getByRole('button', { name: 'Add' }).click();  
    // 3rd Extracurricular Activities
    await page.getByRole('button', { name: 'Add Entry' }).click();   
    await page.getByPlaceholder('Short Input').fill('Painter');   
    await page.getByPlaceholder('123').fill('3');  
    await page.getByLabel('List any leadership roles,').fill('Third Rank Holder');    
    await page.getByLabel('Description of Involvement ').fill('I have participated in many events in my College. Won third prize in the year 2012 in painting competition');
    await page.getByRole('button', { name: 'Add' }).click();
    // 4th Extracurricular Activities
    await page.getByRole('button', { name: 'Add Entry' }).click();    
    await page.getByPlaceholder('Short Input').fill('Sports');   
    await page.getByPlaceholder('123').fill('2');    
    await page.getByLabel('List any leadership roles,').fill('Captain of cricket team');    
    await page.getByLabel('Description of Involvement ').fill('I have participated in many events in my School. Won first prize in the year 2010 in Music competition',{timeout:2000});
    await page.getByRole('button', { name: 'Add' }).click({timeout:3000});
    await page.getByRole('button', { name: 'Next Page' }).click({timeout:3000});
    await page.getByRole('button', { name: 'Next Page' }).click({timeout:3000});
    //High School Information    
    await page.getByPlaceholder('Please enter the name of your current High School').fill('Test1 High School');    
    await page.getByPlaceholder('Enter high school street address').fill('Test1 Street');   
    await page.getByPlaceholder('Enter additional high school address').fill('Test1 high school address');    
    await page.getByPlaceholder('Enter high school city').fill('Test1 City');
    await page.getByPlaceholder('Enter high school state').click();
    await page.getByRole('option', { name: 'California' }).click();    
    await page.getByPlaceholder('e.g. 55413').fill('400000');    
    await page.getByPlaceholder('Enter your current GPA').fill('9');
    await page.getByPlaceholder('Enter a date').click();
    await page.getByPlaceholder('Enter a date').fill('2018/07/04');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Upload File', exact: true }).setInputFiles('MySchoolTranscript.pdf');
    await page.getByRole('button', { name: 'Next Page' }).click();
    //Essay    
    await page.getByLabel('Cars').check();
    await page.getByLabel('Animals').check();
    await page.getByLabel('School').check();
    await page.getByLabel('Other').check();
    await expect(page.getByLabel('Essay about Cars')).toBeVisible();
    await expect(page.getByLabel('Essay about Animals')).toBeVisible();
    await expect(page.getByLabel('Essay about School')).toBeVisible();
    await expect(page.getByLabel('Provide an essay about any topic')).toBeVisible();
    await page.getByLabel('Cars').uncheck();
    await page.getByLabel('Other').uncheck();
    await page.locator('//textarea[@name="3kQsIdx5-JQCId_AOoSOB"]').fill('Essay on Animal with some dummy data in it.');    
    await page.locator('//textarea[@name="oSl-QCyps8HnGHKUtIFw3"] ').fill('Essay on school with Dummy data within it to do testing.');
    await page.getByRole('button', { name: 'Next Page' }).click();

    //Submit Application
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.goto("applicant/applications");
    await page.getByRole('button', { name: 'View Application' }).click({timeout: 3000});
  });

