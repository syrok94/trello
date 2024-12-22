Q1 
a. print last 5 lines /etc/passwd file
b. write the output of ls command to files.txt
c. change the permissios of files.txt to allow only to read and write but group can read, write and execite also.
d. create a new user "dac2"
e. change the group of "files.txt" to dac2

q2
write a bash script to find given directry exists or not at any path. if not exist create it. take directory from user.

Q3
a. write a program to find largest 4 digit number divisible by 10 and 13
b. create git project
c. write a docker file to execute (a) program in container

Q4. 
a. create a project(maven) with all required depencencies
b. write selenium script to automate
1.open https://testpages.eviltester.com/styled/search
2.enter any string in search box
3. verify the result(only first bullet on result)
c. create a maven project in jenkins(use above project POM.xml) and execute the job with goal "clean teat"

ChatGPT said:
ChatGPT
Q1
a. Print last 5 lines of /etc/passwd file

bash
Copy code
tail -n 5 /etc/passwd
b. Write the output of ls command to files.txt

bash
Copy code
ls > files.txt
c. Change the permissions of files.txt to allow only read and write for the owner, and read, write, and execute for the group

bash
Copy code
chmod 766 files.txt
d. Create a new user dac2

bash
Copy code
sudo useradd dac2
e. Change the group of files.txt to dac2

bash
Copy code
sudo chown :dac2 files.txt
Q2
Write a Bash script to check if a given directory exists at any path, and if not, create it. Take directory input from the user.

bash
Copy code
#!/bin/bash

# Prompt the user for directory path
echo "Enter the directory path:"
read dir_path

# Check if the directory exists
if [ ! -d "$dir_path" ]; then
  # Create the directory if it does not exist
  mkdir -p "$dir_path"
  echo "Directory created: $dir_path"
else
  echo "Directory already exists: $dir_path"
fi
Q3
a. Write a program to find the largest 4-digit number divisible by 10 and 13

python
Copy code
# Python program to find the largest 4-digit number divisible by 10 and 13
def largest_number():
    for num in range(9999, 999, -1):
        if num % 10 == 0 and num % 13 == 0:
            return num
print(largest_number())
b. Create a Git project

Initialize the Git repository in your project folder:
bash
Copy code
git init
Add the files and commit:
bash
Copy code
git add .
git commit -m "Initial commit"
c. Write a Dockerfile to execute the program in the container

dockerfile
Copy code
# Use a Python base image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the program file into the container
COPY largest_number.py .

# Set the command to run the program
CMD ["python", "largest_number.py"]
Q4
a. Create a Maven project with all required dependencies

Create a new Maven project using the following command:
bash
Copy code
mvn archetype:generate -DgroupId=com.example -DartifactId=selenium-test -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
Add required dependencies to pom.xml for Selenium:
xml
Copy code
<dependencies>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
        <version>4.0.0</version>
    </dependency>
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
        <version>7.4.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
b. Write Selenium script to automate the tasks

java
Copy code
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeOptions;

public class SeleniumTest {
    public static void main(String[] args) {
        // Set Chrome driver path (adjust if needed)
        System.setProperty("webdriver.chrome.driver", "/path/to/chromedriver");

        // Initialize Chrome browser
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless"); // To run in headless mode (no UI)
        WebDriver driver = new ChromeDriver(options);

        // Open the test page
        driver.get("https://testpages.eviltester.com/styled/search");

        // Find the search box, enter a string, and submit the form
        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("Selenium");
        searchBox.submit();

        // Verify the first bullet result
        WebElement firstResult = driver.findElement(By.xpath("//ul/li[1]"));
        System.out.println("First result: " + firstResult.getText());

        // Close the browser
        driver.quit();
    }
}
c. Create a Maven project in Jenkins (use the above project's pom.xml)

In Jenkins, create a new Maven project.
In the project configuration, under Source Code Management, select Git and add the repository URL of your Git project.
Under Build section, add Invoke top-level Maven targets and specify clean test in the Goals field.
Save and run the Jenkins job to execute the Selenium script.
