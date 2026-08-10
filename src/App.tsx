import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. Explain the ASP.NET Framework. Discuss its features and architecture.",
      answer: "",
      codeExample: `
============================================================
           ASP.NET Framework – Features and Architecture
============================================================

============================================================
What is ASP.NET Framework?
============================================================

ASP.NET is a web application framework developed by Microsoft.
It is used to build dynamic websites, web applications, and
web services. It runs on the .NET Framework and mainly uses
programming languages like C# and VB.NET.

It provides many built-in features such as authentication,
security, caching, session management, and database
connectivity, making web development faster and easier.


============================================================
Features of ASP.NET Framework
============================================================

------------------------------------------------------------
1. Easy to Develop
------------------------------------------------------------

• Uses simple programming languages like C# and VB.NET.
• Provides many built-in controls to reduce coding.

------------------------------------------------------------
2. High Performance
------------------------------------------------------------

• Code is compiled before execution.
• Faster than traditional scripting languages.

------------------------------------------------------------
3. Rich Server Controls
------------------------------------------------------------

Provides ready-made controls like:

• Button
• TextBox
• Label
• GridView
• Calendar

------------------------------------------------------------
4. Security
------------------------------------------------------------

Supports:

• User authentication
• Authorization
• Data encryption

Protects web applications from unauthorized access.

------------------------------------------------------------
5. State Management
------------------------------------------------------------

Maintains user data using:

• Session
• Cookies
• ViewState
• Application State

------------------------------------------------------------
6. Caching
------------------------------------------------------------

• Stores frequently used data in memory.
• Improves application speed and performance.

------------------------------------------------------------
7. Database Connectivity
------------------------------------------------------------

• Easily connects with databases using ADO.NET.
• Supports SQL Server, Oracle, MySQL, etc.

------------------------------------------------------------
8. Language Independence
------------------------------------------------------------

Supports multiple .NET languages such as:

• C#
• VB.NET
• F#

------------------------------------------------------------
9. Error Handling
------------------------------------------------------------

• Provides built-in exception handling.
• Displays custom error pages.

------------------------------------------------------------
10. Scalability
------------------------------------------------------------

• Suitable for both small and large web applications.


============================================================
Architecture of ASP.NET Framework
============================================================

The ASP.NET architecture shows how a user request is
processed until a response is sent back.
      
                 User (Browser)
                       │
                  HTTP Request
                       │
                       ▼
                IIS (Web Server)
                       │
                       ▼
                ASP.NET Runtime
                       │
                       │            
                       ▼             
                  CLR (.NET)      
                       │               
                       ▼            
              Business Logic (C# / VB.NET)
                       │
                       ▼
              ADO.NET (Database Access)
                       │
                       ▼
              SQL Server / Database
                       │
                       ▼
                  HTTP Response
                       │
                       ▼
                  User (Browser)


============================================================
Explanation of Architecture
============================================================

------------------------------------------------------------
1. Browser (Client)
------------------------------------------------------------

The user requests a web page using a browser.

------------------------------------------------------------
2. IIS (Internet Information Services)
------------------------------------------------------------

• Receives the HTTP request.
• Passes the request to the ASP.NET Runtime.

------------------------------------------------------------
3. ASP.NET Runtime
------------------------------------------------------------

• Processes the request.
• Manages page execution, sessions, caching, and security.

------------------------------------------------------------
4. CLR (Common Language Runtime)
------------------------------------------------------------

• Executes the compiled .NET code.
• Provides memory management, exception handling, and
  garbage collection.

------------------------------------------------------------
5. Business Logic
------------------------------------------------------------

Contains the application's main functionality written in
C# or VB.NET.

------------------------------------------------------------
6. ADO.NET
------------------------------------------------------------

• Connects the application to the database.
• Retrieves or stores data.

------------------------------------------------------------
7. Database
------------------------------------------------------------

Stores application data such as users, products, orders, etc.

------------------------------------------------------------
8. HTTP Response
------------------------------------------------------------

The processed result is sent back to the user's browser.


============================================================
Advantages of ASP.NET Framework
============================================================

• Easy to learn and use.
• High performance.
• Secure web applications.
• Supports multiple programming languages.
• Built-in debugging support.
• Rich collection of server controls.
• Easy database integration.
• Scalable for large applications.


============================================================
Disadvantages of ASP.NET Framework
============================================================

• Mostly dependent on Windows (classic ASP.NET Framework).
• Requires knowledge of the .NET Framework.
• Can consume more server resources.
• Hosting cost may be higher than some lightweight
  technologies.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET Framework is a web application framework developed by
Microsoft for building dynamic websites, web applications,
and web services using the .NET Framework. It supports
languages like C# and VB.NET and provides features such as
security, caching, state management, and database
connectivity.


============================================================
5-Mark Summary
============================================================

• ASP.NET is a Microsoft web development framework.
• Used to create dynamic websites and web applications.
• Features include security, caching, server controls,
  state management, database connectivity, scalability,
  and high performance.
• Architecture consists of:

  Browser
      ↓
     IIS
      ↓
ASP.NET Runtime
      ↓
     CLR
      ↓
Business Logic
      ↓
   ADO.NET
      ↓
  Database
      ↓
   Response

• It provides fast, secure, and reliable web application
  development.
      
      `
    },
    {
      id: 2,
      question: "2. Explain the Common Language Runtime (CLR) with its architecture, responsibilities, and execution process.",
      answer: "",
      codeExample: `
============================================================
     Common Language Runtime (CLR) – Architecture,
     Responsibilities, and Execution Process
============================================================

============================================================
What is CLR?
============================================================

The Common Language Runtime (CLR) is the execution engine of
the .NET Framework. It is responsible for running .NET
applications and managing program execution. CLR provides
services such as memory management, security, exception
handling, garbage collection, and code execution.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The Common Language Runtime (CLR) is the execution environment
of the .NET Framework that manages the execution of .NET
programs by providing services like memory management,
security, exception handling, and garbage collection.


============================================================
Architecture of CLR
============================================================

            .NET Application
         (C#, VB.NET, F#, etc.)
                    │
                    ▼
          Language Compiler
      (C#, VB.NET Compiler)
                    │
                    ▼
     MSIL / IL (Intermediate Language)
                    │
                    ▼
      CLR (Common Language Runtime)

      ┌─────────────────────────────────┐
      │  JIT Compiler                   │
      │  Garbage Collector              │
      │  Security                       │
      │  Exception Handling             │
      │  Memory Management              │
      │  Thread Management              │
      └─────────────────────────────────┘

                    │
                    ▼
         Native Machine Code
                    │
                    ▼
           Operating System
                    │
                    ▼
           Program Execution


============================================================
Responsibilities of CLR
============================================================

------------------------------------------------------------
1. Memory Management
------------------------------------------------------------

• Allocates memory for objects.
• Frees unused memory automatically.

------------------------------------------------------------
2. Garbage Collection
------------------------------------------------------------

• Removes unused objects from memory.
• Prevents memory leaks.

------------------------------------------------------------
3. JIT (Just-In-Time) Compilation
------------------------------------------------------------

• Converts Intermediate Language (IL) into machine code at
  runtime.
• Improves execution speed.

------------------------------------------------------------
4. Exception Handling
------------------------------------------------------------

• Detects and handles runtime errors.
• Prevents application crashes.

------------------------------------------------------------
5. Security
------------------------------------------------------------

• Verifies code before execution.
• Prevents unauthorized access and unsafe code execution.

------------------------------------------------------------
6. Thread Management
------------------------------------------------------------

• Creates and manages multiple threads.
• Supports multitasking.

------------------------------------------------------------
7. Type Safety
------------------------------------------------------------

• Ensures that data types are used correctly.
• Reduces programming errors.

------------------------------------------------------------
8. Code Verification
------------------------------------------------------------

• Checks whether the compiled code is valid and safe before
  execution.

------------------------------------------------------------
9. Language Interoperability
------------------------------------------------------------

• Allows programs written in different .NET languages
  (C#, VB.NET, F#, etc.) to work together.


============================================================
Execution Process of CLR
============================================================

------------------------------------------------------------
Step 1: Write the Program
------------------------------------------------------------

The programmer writes code in a .NET language such as C# or
VB.NET.

------------------------------------------------------------
Step 2: Compilation
------------------------------------------------------------

The language compiler converts the source code into
Intermediate Language (IL/MSIL).

------------------------------------------------------------
Step 3: Load by CLR
------------------------------------------------------------

The CLR loads the IL code into memory.

------------------------------------------------------------
Step 4: Verification
------------------------------------------------------------

CLR checks the code for correctness, security, and type
safety.

------------------------------------------------------------
Step 5: JIT Compilation
------------------------------------------------------------

The Just-In-Time (JIT) Compiler converts IL into native
machine code.

------------------------------------------------------------
Step 6: Program Execution
------------------------------------------------------------

The CPU executes the native machine code.

------------------------------------------------------------
Step 7: Garbage Collection
------------------------------------------------------------

CLR automatically removes unused objects and frees memory.


============================================================
Advantages of CLR
============================================================

• Automatic memory management.
• Prevents memory leaks through garbage collection.
• Provides strong security.
• Supports multiple programming languages.
• Handles exceptions efficiently.
• Improves performance with JIT compilation.
• Ensures type safety and code reliability.


============================================================
Disadvantages of CLR
============================================================

• Adds a small startup overhead due to JIT compilation.
• Requires the .NET Runtime to be installed.
• Uses additional memory for runtime services.


============================================================
Exam Flow (Easy to Remember)
============================================================

      Source Code (C# / VB.NET)
                │
                ▼
            Compiler
                │
                ▼
         IL / MSIL Code
                │
                ▼
               CLR
        (Verify + JIT)
                │
                ▼
     Native Machine Code
                │
                ▼
       Program Execution
                │
                ▼
      Garbage Collection


============================================================
5-Mark Summary
============================================================

CLR (Common Language Runtime) is the execution engine of the
.NET Framework.

It converts Intermediate Language (IL) into native machine
code using the JIT Compiler.

Its main responsibilities are memory management, garbage
collection, security, exception handling, thread management,
type safety, and code verification.

Execution process:

Source Code → Compiler → IL → CLR → JIT Compiler →
Native Code → Execution → Garbage Collection.

CLR makes .NET applications secure, reliable, and efficient.
      
      `
    },
    {
      id: 3,
      question: "3. Differentiate between Managed Code and Unmanaged Code.",
      answer: "",
      codeExample: `
============================================================
        Difference Between Managed Code and Unmanaged Code
============================================================

Managed Code is the code that is executed under the control of
the Common Language Runtime (CLR). The CLR provides services
like memory management, garbage collection, security, and
exception handling.

Unmanaged Code is the code that is executed directly by the
operating system without the control of the CLR. The programmer
is responsible for memory management and other low-level
operations.


============================================================
Difference Between Managed Code and Unmanaged Code
============================================================

| Managed Code                                                   | Unmanaged Code                                                    |
| ---------------------------------------------------------------| ----------------------------------------------------------------- |
| Runs under the CLR (Common Language Runtime).                  | Runs directly on the Operating System.                            |
| Memory is managed automatically by the Garbage Collector (GC). | Memory must be managed manually by the programmer.                |
| Provides built-in security and type checking.                  | Has limited runtime security.                                     |
| Supports automatic exception handling through the CLR.         | Exception handling must be managed by the programmer or language. |
| Easier to develop and maintain.                                | More difficult to develop and maintain.                           |
| Less chance of memory leaks.                                   | Higher chance of memory leaks if memory is not released properly. |
| Portable across systems that support the .NET Runtime.         | Usually platform-dependent.                                       |
| Examples: C#, VB.NET, F#                                       | Examples: C, C++, Assembly                                        |



============================================================
Advantages of Managed Code
============================================================

• Automatic memory management.
• Better security.
• Easy debugging.
• Automatic garbage collection.
• Fewer memory-related errors.


============================================================
Advantages of Unmanaged Code
============================================================

• Faster execution for low-level operations.
• Direct access to hardware and system resources.
• Suitable for device drivers, operating systems, and embedded
  systems.


============================================================
Exam Definition (2 Marks)
============================================================

Managed Code:

Code that is executed under the control of the CLR, which
provides services like memory management, security, and
garbage collection.

------------------------------------------------------------

Unmanaged Code:

Code that runs directly on the operating system without CLR
support, where the programmer manages memory manually.


============================================================
5-Mark Summary
============================================================

• Managed code is controlled by the CLR, while unmanaged code
  runs directly on the operating system.

• Managed code provides automatic memory management, garbage
  collection, security, and exception handling.

• Unmanaged code requires manual memory management and gives
  direct access to hardware.

• Examples:
  Managed – C#, VB.NET
  Unmanaged – C, C++, Assembly.

• Managed code is safer and easier to maintain, while
  unmanaged code offers better low-level performance and
  control.
      
      `
    },
    {
      id: 4,
      question: "4. Explain Common Type System (CTS) and Common Language Specification (CLS). Compare CTS and CLS.",
      answer: "",
      codeExample: `
============================================================
     Common Type System (CTS) and Common Language Specification (CLS)
============================================================


============================================================
1. Common Type System (CTS)
============================================================

------------------------------------------------------------
What is CTS?
------------------------------------------------------------

The Common Type System (CTS) is a part of the .NET Framework
that defines how data types are declared, used, and managed by
the Common Language Runtime (CLR).

It ensures that all .NET languages (such as C#, VB.NET, and
F#) use a common set of data types, allowing them to work
together smoothly.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Common Type System (CTS) is a set of rules in the .NET
Framework that defines the data types and programming
constructs used by all .NET languages, enabling language
interoperability.

------------------------------------------------------------
Features of CTS
------------------------------------------------------------

• Defines common data types for all .NET languages.
• Ensures language interoperability.
• Provides type safety.
• Supports object-oriented programming.
• Managed by the CLR.

------------------------------------------------------------
Types in CTS
------------------------------------------------------------

CTS classifies data types into two categories:


------------------------------------------------------------
1. Value Types
------------------------------------------------------------

• Store the actual value.
• Stored in the stack.
• Faster to access.

Examples:

• int
• float
• char
• bool


------------------------------------------------------------
2. Reference Types
------------------------------------------------------------

• Store the reference (address) of an object.
• Stored in the heap.
• Managed by the Garbage Collector.

Examples:

• Class
• String
• Array
• Interface


============================================================
2. Common Language Specification (CLS)
============================================================

------------------------------------------------------------
What is CLS?
------------------------------------------------------------

The Common Language Specification (CLS) is a set of rules that
every .NET language should follow to ensure that code written
in one .NET language can be used by another.

CLS is a subset of CTS.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Common Language Specification (CLS) is a collection of rules
and standards that .NET languages follow to ensure
compatibility and interoperability among different .NET
languages.

------------------------------------------------------------
Features of CLS
------------------------------------------------------------

• Ensures language interoperability.
• Defines common programming rules.
• Helps developers create language-independent libraries.
• Improves code reusability.
• Supported by all CLS-compliant .NET languages.


============================================================
Architecture of CTS and CLS
============================================================

                 .NET Framework
                        │
                        ▼
         Common Language Runtime (CLR)
                        │
             ┌──────────┴──────────┐
             │                     │
             ▼                     ▼
  Common Type System      Common Language
        (CTS)           Specification (CLS)
             │                     │
             └──────────┬──────────┘
                        ▼
             C#, VB.NET, F#, etc.


============================================================
Difference Between CTS and CLS
============================================================

| CTS (Common Type System)                                  | CLS (Common Language Specification)                      |
| --------------------------------------------------------- | -------------------------------------------------------- |
| Defines all data types used in .NET.                      | Defines a set of rules for .NET languages.               |
| Ensures that all .NET languages use the same type system. | Ensures that different .NET languages can work together. |
| Managed by the CLR.                                       | A subset of CTS.                                         |
| Includes all .NET data types.                             | Includes only the features common to all .NET languages. |
| Focuses on data types and type safety.                    | Focuses on language compatibility.                       |
| Larger in scope.                                          | Smaller in scope.                                        |


============================================================
Relationship Between CTS and CLS
============================================================

• CTS defines all data types and programming constructs in
  .NET.

• CLS defines only the common rules that all .NET languages
  should support.

• Therefore, CLS is a subset of CTS.


============================================================
Advantages of CTS
============================================================

• Common data type system.
• Type safety.
• Easy code sharing between languages.
• Supports object-oriented programming.
• Better reliability.



============================================================
Advantages of CLS
============================================================

• Improves language interoperability.
• Makes code reusable.
• Creates language-independent libraries.
• Ensures compatibility among .NET languages.
• Simplifies application development.


============================================================
Exam Definition (2 Marks)
============================================================

CTS:

Common Type System defines the data types and programming
constructs used by all .NET languages.

------------------------------------------------------------

CLS:

Common Language Specification defines the common rules that
.NET languages must follow for interoperability.


============================================================
5-Mark Summary
============================================================

CTS (Common Type System) defines all the data types and
programming constructs used in the .NET Framework.

CLS (Common Language Specification) defines a common set of
rules that .NET languages follow to ensure compatibility.

CTS focuses on data types and type safety, while CLS focuses
on language interoperability.

CLS is a subset of CTS.

Together, CTS and CLS allow applications written in different
.NET languages to work together seamlessly.
      `
    },
    {
      id: 5,
      question: "5. Write short notes on: Microsoft Intermediate Language (MSIL), Just-In-Time (JIT) Compiler, Assemblies (Private and Shared), Garbage Collection",
      answer: "",
      codeExample: `
============================================================
           Short Notes on ASP.NET / .NET Concepts
============================================================


############################################################
1. Microsoft Intermediate Language (MSIL)
############################################################

What is MSIL?

Microsoft Intermediate Language (MSIL), also called
Intermediate Language (IL), is the code generated when a
.NET program is compiled. It is not machine code and cannot
run directly on the CPU.

The CLR later converts MSIL into machine code using the
JIT Compiler.


------------------------------------------------------------
Process
------------------------------------------------------------

C# / VB.NET Program
        │
        ▼
     Compiler
        │
        ▼
    MSIL (IL Code)
        │
        ▼
   JIT Compiler
        │
        ▼
   Machine Code
        │
        ▼
 Program Execution


------------------------------------------------------------
Features
------------------------------------------------------------

• Platform-independent code.
• Generated by all .NET language compilers.
• Executed by the CLR.
• Converted into machine code by the JIT compiler.


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Supports multiple .NET languages.
• Improves code portability.
• Provides security through CLR verification.



############################################################
2. Just-In-Time (JIT) Compiler
############################################################

What is JIT Compiler?

The Just-In-Time (JIT) Compiler is a component of the CLR
that converts MSIL (IL) code into native machine code at
runtime (just before execution).


------------------------------------------------------------
Working
------------------------------------------------------------

MSIL Code
    │
    ▼
JIT Compiler
    │
    ▼
Machine Code
    │
    ▼
CPU Executes Program


------------------------------------------------------------
Features
------------------------------------------------------------

• Converts IL to machine code at runtime.
• Improves execution speed.
• Compiles only the required code.
• Managed by the CLR.


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Faster program execution after compilation.
• Optimizes code for the current system.
• Reduces startup compilation work.



############################################################
3. Assemblies (Private and Shared)
############################################################

What is an Assembly?

An Assembly is the basic unit of deployment in the .NET
Framework. It contains the compiled code (DLL or EXE),
metadata, and resources required by an application.


------------------------------------------------------------
Types of Assemblies
------------------------------------------------------------

A) Private Assembly

• Used by only one application.
• Stored in the application's folder.
• Cannot be shared with other applications.

Example:

A DLL used only by one project.


------------------------------------------------------------

B) Shared Assembly

• Used by multiple applications.
• Stored in the Global Assembly Cache (GAC).
• Can be shared among different .NET applications.

Example:

A common library used by many applications.


------------------------------------------------------------
Difference Between Private and Shared Assembly
------------------------------------------------------------

| Private Assembly                  | Shared Assembly                            |
| --------------------------------- | ------------------------------------------ |
| Used by one application.          | Used by multiple applications.             |
| Stored in the application folder. | Stored in the Global Assembly Cache (GAC). |
| Cannot be shared.                 | Can be shared.                             |
| Easy to deploy.                   | Requires installation in the GAC.          |



############################################################
4. Garbage Collection (GC)
############################################################

What is Garbage Collection?

Garbage Collection (GC) is an automatic memory management
feature of the CLR. It removes objects that are no longer
in use and frees memory automatically.

The programmer does not need to release memory manually.


------------------------------------------------------------
Working
------------------------------------------------------------

Program Creates Objects
          │
          ▼
 Objects Become Unused
          │
          ▼
Garbage Collector Detects Them
          │
          ▼
Frees Memory Automatically


------------------------------------------------------------
Features
------------------------------------------------------------

• Automatic memory management.
• Removes unused objects.
• Prevents memory leaks.
• Improves application performance.
• Managed by the CLR.


------------------------------------------------------------
Advantages
------------------------------------------------------------

• No manual memory deallocation.
• Prevents memory leaks.
• Improves application stability.
• Reduces programming errors.



============================================================
Exam Summary (2 Marks)
============================================================

------------------------------------------------------------
MSIL
------------------------------------------------------------

MSIL (Microsoft Intermediate Language) is the intermediate
code generated by the .NET compiler. It is converted into
machine code by the JIT Compiler during execution.


------------------------------------------------------------
JIT Compiler
------------------------------------------------------------

The JIT Compiler converts MSIL into native machine code at
runtime, allowing the CPU to execute the program efficiently.


------------------------------------------------------------
Assemblies
------------------------------------------------------------

An Assembly is the deployment unit of .NET applications.
Private Assemblies are used by a single application, while
Shared Assemblies are stored in the Global Assembly Cache
(GAC) and used by multiple applications.


------------------------------------------------------------
Garbage Collection
------------------------------------------------------------

Garbage Collection is an automatic memory management process
in the CLR that removes unused objects and frees memory,
preventing memory leaks.
      
      `
    },
    {
      id: 11,
      question: "11. Explain ASP.NET Server Controls. Discuss their features, types, properties, and advantages.",
      answer: "",
      codeExample: `
============================================================
      ASP.NET Server Controls – Features, Types,
           Properties, and Advantages
============================================================

============================================================
What are ASP.NET Server Controls?
============================================================

ASP.NET Server Controls are built-in controls provided by
ASP.NET that run on the server. They help developers create
interactive web pages without writing much HTML or JavaScript.

These controls are processed by the server and the generated
HTML is sent to the user's browser.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

ASP.NET Server Controls are reusable components that run on
the server, process user requests, and generate HTML output
to create dynamic web applications.


============================================================
Features of ASP.NET Server Controls
============================================================

------------------------------------------------------------
1. Server-Side Processing
------------------------------------------------------------

Controls are executed on the server before sending the page
to the browser.

------------------------------------------------------------
2. Automatic HTML Generation
------------------------------------------------------------

Automatically generates HTML code for different browsers.

------------------------------------------------------------
3. Event-Driven Programming
------------------------------------------------------------

Supports events like:

• Click
• TextChanged
• SelectedIndexChanged

------------------------------------------------------------
4. State Management
------------------------------------------------------------

Maintains control values using ViewState.

------------------------------------------------------------
5. Data Binding
------------------------------------------------------------

Can easily connect to databases and display data.

------------------------------------------------------------
6. Rich Built-in Controls
------------------------------------------------------------

Provides many ready-made controls like Button, TextBox,
GridView, Calendar, etc.

------------------------------------------------------------
7. Browser Compatibility
------------------------------------------------------------

Works with different web browsers.

------------------------------------------------------------
8. Reusability
------------------------------------------------------------

Controls can be reused in multiple web pages.


============================================================
Types of ASP.NET Server Controls
============================================================

------------------------------------------------------------
1. Standard Controls
------------------------------------------------------------

Used for basic user input.

Examples:

• Label
• TextBox
• Button
• CheckBox
• RadioButton
• DropDownList
• HyperLink

------------------------------------------------------------
2. Validation Controls
------------------------------------------------------------

Used to validate user input.

Examples:

• RequiredFieldValidator
• CompareValidator
• RangeValidator
• RegularExpressionValidator
• CustomValidator
• ValidationSummary

------------------------------------------------------------
3. Data Controls
------------------------------------------------------------

Used to display and manage data.

Examples:

• GridView
• DetailsView
• FormView
• Repeater
• DataList

------------------------------------------------------------
4. Navigation Controls
------------------------------------------------------------

Used for website navigation.

Examples:

• Menu
• TreeView
• SiteMapPath

------------------------------------------------------------
5. Rich Controls
------------------------------------------------------------

Provide advanced functionality.

Examples:

• Calendar
• FileUpload
• Wizard
• AdRotator
• Image

------------------------------------------------------------
6. List Controls
------------------------------------------------------------

Used to display a list of items.

Examples

DropDownList 
ListBox 
CheckBoxList 
RadioButtonList 
BulletedList

============================================================
Common Properties of Server Controls
============================================================

+----------------+------------------------------------------------------+
| Property       | Description                                          |
+----------------+------------------------------------------------------+
| ID             | Unique name of the control.                          |
+----------------+------------------------------------------------------+
| Text           | Displays text on the control.                        |
+----------------+------------------------------------------------------+
| Enabled        | Enables or disables the control.                     |
+----------------+------------------------------------------------------+
| Visible        | Shows or hides the control.                          |
+----------------+------------------------------------------------------+
| BackColor      | Sets the background color.                           |
+----------------+------------------------------------------------------+
| ForeColor      | Sets the text color.                                 |
+----------------+------------------------------------------------------+
| Font           | Sets the font style and size.                        |
+----------------+------------------------------------------------------+
| Width          | Sets the width of the control.                       |
+----------------+------------------------------------------------------+
| Height         | Sets the height of the control.                      |
+----------------+------------------------------------------------------+
| ToolTip        | Displays a hint when the mouse pointer is placed     |
|                | over the control.                                    |
+----------------+------------------------------------------------------+


============================================================
Advantages of ASP.NET Server Controls
============================================================

• Easy to use and learn.
• Reduces coding effort.
• Supports event-driven programming.
• Automatically generates browser-compatible HTML.
• Built-in validation controls improve data accuracy.
• Easy database connectivity with data controls.
• Reusable components reduce development time.
• Supports ViewState to maintain data between requests.
• Improves developer productivity.


============================================================
Disadvantages of ASP.NET Server Controls
============================================================

• May generate extra HTML, increasing page size.
• ViewState can increase page load time if overused.
• Requires server processing, which may affect performance
  for large applications.


============================================================
Simple Example
============================================================

<asp:Label ID="lblName" runat="server"
Text="Enter Name:"></asp:Label>

<asp:TextBox ID="txtName"
runat="server"></asp:TextBox>

<asp:Button ID="btnSubmit"
runat="server"
Text="Submit" />

------------------------------------------------------------
Explanation
------------------------------------------------------------

• Label displays text.
• TextBox accepts user input.
• Button performs an action when clicked.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET Server Controls are server-side components that run
on the web server and generate HTML to create dynamic and
interactive web pages. They support event handling, state
management, and data binding.


============================================================
5-Mark Summary
============================================================

• ASP.NET Server Controls are server-side controls used to
  build dynamic web pages.

• Features:
  Server-side processing, event handling, ViewState,
  data binding, browser compatibility, and reusability.

• Types:
  Standard Controls, Validation Controls, Data Controls,
  Navigation Controls, Login Controls, Web Parts Controls,
  and Rich Controls.

• Common Properties:
  ID, Text, Enabled, Visible, Width, Height, BackColor,
  ForeColor, Font, and ToolTip.

• Advantages:
  Easy development, reduced coding, built-in validation,
  database support, reusable controls, and improved
  productivity.
      `
    },
    {
      id: 12,
      question: "12. Explain Button, TextBox, Label, CheckBox, and RadioButton controls with syntax, properties, and examples.",
      answer: "",
      codeExample: `
============================================================
 ASP.NET Controls: Button, TextBox, Label, CheckBox, and RadioButton
============================================================

These are the most commonly used ASP.NET Server Controls.
They run on the server and generate HTML that is displayed
in the user's browser.


============================================================
1. Button Control
============================================================

What is Button Control?

The Button control is used to perform an action when the user
clicks it, such as submitting a form or saving data.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:Button ID="btnSubmit"
    runat="server"
    Text="Submit" />


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+---------------------------------------------+
| Property       | Description                                 |
+----------------+---------------------------------------------+
| ID             | Unique name of the button.                  |
+----------------+---------------------------------------------+
| Text           | Text displayed on the button.               |
+----------------+---------------------------------------------+
| Enabled        | Enables or disables the button.             |
+----------------+---------------------------------------------+
| Visible        | Shows or hides the button.                  |
+----------------+---------------------------------------------+
| BackColor      | Sets the background color.                  |
+----------------+---------------------------------------------+
| ForeColor      | Sets the text color.                        |
+----------------+---------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:Button ID="btnSave"
    runat="server"
    Text="Save" />



============================================================
2. TextBox Control
============================================================

What is TextBox Control?

The TextBox control is used to accept input from the user.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:TextBox ID="txtName"
    runat="server">
</asp:TextBox>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+------------------------------------------------------+
| Property       | Description                                          |
+----------------+------------------------------------------------------+
| ID             | Unique name of the TextBox.                          |
+----------------+------------------------------------------------------+
| Text           | Gets or sets the entered text.                       |
+----------------+------------------------------------------------------+
| MaxLength      | Maximum number of characters allowed.                |
+----------------+------------------------------------------------------+
| ReadOnly       | Makes the TextBox read-only.                         |
+----------------+------------------------------------------------------+
| TextMode       | Defines the input type (SingleLine, MultiLine,       |
|                | Password).                                           |
+----------------+------------------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:TextBox ID="txtEmail"
    runat="server"
    TextMode="SingleLine">
</asp:TextBox>



============================================================
3. Label Control
============================================================

What is Label Control?

The Label control is used to display text or messages on a
web page.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:Label ID="lblMessage"
    runat="server"
    Text="Welcome">
</asp:Label>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+---------------------------------------------+
| Property       | Description                                 |
+----------------+---------------------------------------------+
| ID             | Unique name of the Label.                   |
+----------------+---------------------------------------------+
| Text           | Text displayed on the Label.                |
+----------------+---------------------------------------------+
| ForeColor      | Sets the text color.                        |
+----------------+---------------------------------------------+
| Font           | Sets the font style and size.               |
+----------------+---------------------------------------------+
| Visible        | Shows or hides the Label.                   |
+----------------+---------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:Label ID="lblResult"
    runat="server"
    Text="Registration Successful">
</asp:Label>



============================================================
4. CheckBox Control
============================================================

What is CheckBox Control?

The CheckBox control allows the user to select or deselect an
option. Multiple checkboxes can be selected at the same time.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:CheckBox ID="chkTerms"
    runat="server"
    Text="I Agree" />


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+---------------------------------------------+
| Property       | Description                                 |
+----------------+---------------------------------------------+
| ID             | Unique name of the CheckBox.                |
+----------------+---------------------------------------------+
| Text           | Text displayed beside the CheckBox.         |
+----------------+---------------------------------------------+
| Checked        | Indicates whether it is selected.           |
+----------------+---------------------------------------------+
| Enabled        | Enables or disables the CheckBox.           |
+----------------+---------------------------------------------+
| Visible        | Shows or hides the CheckBox.                |
+----------------+---------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:CheckBox ID="chkJava"
    runat="server"
    Text="Java" />



============================================================
5. RadioButton Control
============================================================

What is RadioButton Control?

The RadioButton control allows the user to select only one
option from a group.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:RadioButton ID="rbMale"
    runat="server"
    Text="Male"
    GroupName="Gender" />


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+----------------+--------------------------------------------------+
| Property       | Description                                      |
+----------------+--------------------------------------------------+
| ID             | Unique name of the RadioButton.                  |
+----------------+--------------------------------------------------+
| Text           | Text displayed beside the RadioButton.           |
+----------------+--------------------------------------------------+
| Checked        | Indicates whether it is selected.                |
+----------------+--------------------------------------------------+
| GroupName      | Groups RadioButtons together so only one         |
|                | can be selected.                                 |
+----------------+--------------------------------------------------+
| Enabled        | Enables or disables the RadioButton.             |
+----------------+--------------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

<asp:RadioButton ID="rbMale"
    runat="server"
    Text="Male"
    GroupName="Gender" />

<asp:RadioButton ID="rbFemale"
    runat="server"
    Text="Female"
    GroupName="Gender" />



============================================================
Difference Between CheckBox and RadioButton
============================================================

+---------------------------------------------+---------------------------------------------+
| CheckBox                                    | RadioButton                                 |
+---------------------------------------------+---------------------------------------------+
| Multiple options can be selected.           | Only one option can be selected in a group. |
+---------------------------------------------+---------------------------------------------+
| Does not require GroupName.                 | Requires GroupName for grouping.            |
+---------------------------------------------+---------------------------------------------+
| Used for multiple selections.               | Used for single selection.                  |
+---------------------------------------------+---------------------------------------------+


============================================================
Advantages of These Controls
============================================================

• Easy to use.
• Reduce coding effort.
• Support server-side processing.
• Easy event handling.
• Browser compatible.
• Reusable in different web pages.


============================================================
Exam Definition (2 Marks)
============================================================

Button:
Used to perform an action when clicked.

------------------------------------------------------------

TextBox:
Used to receive input from the user.

------------------------------------------------------------

Label:
Used to display text or messages.

------------------------------------------------------------

CheckBox:
Used to select one or more options.

------------------------------------------------------------

RadioButton:
Used to select only one option from a group.


============================================================
5-Mark Summary
============================================================

Button – Performs actions such as submit or save.

TextBox – Accepts user input.

Label – Displays text or messages.

CheckBox – Allows multiple selections.

RadioButton – Allows only one selection within a group.

All these controls support properties such as ID, Text,
Visible, and Enabled, making it easy to create interactive
ASP.NET web applications.
      
      `
    },
    {
      id: 13,
      question: "13. Explain List Controls in ASP.NET (DropDownList, ListBox, CheckBoxList, RadioButtonList, BulletedList).",
      answer: "",
      codeExample: `
============================================================
                  List Controls in ASP.NET
============================================================

============================================================
What are List Controls?
============================================================

List Controls in ASP.NET are server controls used to display
a collection of items. They allow users to select one or
more options from a list.

The commonly used list controls are:

• DropDownList
• ListBox
• CheckBoxList
• RadioButtonList
• BulletedList


============================================================
1. DropDownList
============================================================

------------------------------------------------------------
What is DropDownList?
------------------------------------------------------------

The DropDownList control displays a list of items in a
drop-down menu. The user can select only one item.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:DropDownList ID="ddlCity" runat="server">
    <asp:ListItem>Vadodara</asp:ListItem>
    <asp:ListItem>Ahmedabad</asp:ListItem>
    <asp:ListItem>Surat</asp:ListItem>
</asp:DropDownList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------------------+
| Property         | Description                                          |
+------------------+------------------------------------------------------+
| ID               | Unique name of the control.                          |
+------------------+------------------------------------------------------+
| Items            | Collection of list items.                            |
+------------------+------------------------------------------------------+
| SelectedIndex    | Index of the selected item.                          |
+------------------+------------------------------------------------------+
| SelectedValue    | Value of the selected item.                          |
+------------------+------------------------------------------------------+
| AutoPostBack     | Automatically sends data to the server when          |
|                  | selection changes.                                   |
+------------------+------------------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

A drop-down list for selecting a city.


============================================================
2. ListBox
============================================================

------------------------------------------------------------
What is ListBox?
------------------------------------------------------------

The ListBox control displays a list of items. It allows users
to select one or multiple items.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:ListBox ID="lstCourse"
    runat="server"
    SelectionMode="Multiple">

    <asp:ListItem>Java</asp:ListItem>
    <asp:ListItem>Python</asp:ListItem>
    <asp:ListItem>C#</asp:ListItem>

</asp:ListBox>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------+
| Property         | Description                              |
+------------------+------------------------------------------+
| SelectionMode    | Single or Multiple selection.            |
+------------------+------------------------------------------+
| Items            | Collection of items.                     |
+------------------+------------------------------------------+
| SelectedItem     | Currently selected item.                 |
+------------------+------------------------------------------+
| Rows             | Number of visible rows.                  |
+------------------+------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

A list of programming courses where multiple courses can be
selected.


============================================================
3. CheckBoxList
============================================================

------------------------------------------------------------
What is CheckBoxList?
------------------------------------------------------------

The CheckBoxList control displays a group of checkboxes.
Users can select multiple options.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:CheckBoxList ID="chkSkill" runat="server">

    <asp:ListItem>Java</asp:ListItem>
    <asp:ListItem>Python</asp:ListItem>
    <asp:ListItem>ASP.NET</asp:ListItem>

</asp:CheckBoxList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------+
| Property         | Description                              |
+------------------+------------------------------------------+
| Items            | Collection of checkboxes.                |
+------------------+------------------------------------------+
| RepeatDirection  | Horizontal or Vertical display.          |
+------------------+------------------------------------------+
| RepeatColumns    | Number of columns.                       |
+------------------+------------------------------------------+
| SelectedItem     | Selected item.                           |
+------------------+------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

Selecting multiple skills such as Java, Python, and ASP.NET.


============================================================
4. RadioButtonList
============================================================

------------------------------------------------------------
What is RadioButtonList?
------------------------------------------------------------

The RadioButtonList control displays a group of radio
buttons. The user can select only one option.

------------------------------------------------------------
Syntax
------------------------------------------------------------

<asp:RadioButtonList ID="rblGender" runat="server">

    <asp:ListItem>Male</asp:ListItem>
    <asp:ListItem>Female</asp:ListItem>

</asp:RadioButtonList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+------------------------------------------+
| Property         | Description                              |
+------------------+------------------------------------------+
| Items            | Collection of radio buttons.             |
+------------------+------------------------------------------+
| SelectedItem     | Selected item.                           |
+------------------+------------------------------------------+
| RepeatDirection  | Horizontal or Vertical display.          |
+------------------+------------------------------------------+
| RepeatColumns    | Number of columns.                       |
+------------------+------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

Selecting a gender (Male or Female).


============================================================
5. BulletedList
============================================================

------------------------------------------------------------
What is BulletedList?
------------------------------------------------------------

The BulletedList control displays a list of items with
bullets or numbers. It is mainly used to display information
rather than collect user input.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:BulletedList ID="blCourse" runat="server">

    <asp:ListItem>Java</asp:ListItem>
    <asp:ListItem>Python</asp:ListItem>
    <asp:ListItem>ASP.NET</asp:ListItem>

</asp:BulletedList>


------------------------------------------------------------
Common Properties
------------------------------------------------------------

+------------------+----------------------------------------------+
| Property         | Description                                  |
+------------------+----------------------------------------------+
| Items            | Collection of list items.                    |
+------------------+----------------------------------------------+
| BulletStyle      | Style of bullets (Disc, Circle, Square,      |
|                  | Numbered, etc.).                             |
+------------------+----------------------------------------------+
| DisplayMode      | Text, HyperLink, or LinkButton.              |
+------------------+----------------------------------------------+

------------------------------------------------------------
Example
------------------------------------------------------------

Displaying a bulleted list of available courses.


============================================================
Difference Between ASP.NET List Controls
============================================================

+------------------+-----------------------------------------------+---------------------------+
| Control          | Purpose                                       | Selection                 |
+------------------+-----------------------------------------------+---------------------------+
| DropDownList     | Displays a drop-down list                     | One item                  |
+------------------+-----------------------------------------------+---------------------------+
| ListBox          | Displays a list box                           | One or Multiple items     |
+------------------+-----------------------------------------------+---------------------------+
| CheckBoxList     | Displays multiple checkboxes                  | Multiple items            |
+------------------+-----------------------------------------------+---------------------------+
| RadioButtonList  | Displays multiple radio buttons               | One item                  |
+------------------+-----------------------------------------------+---------------------------+
| BulletedList     | Displays items with bullets                   | No selection (display     |
|                  |                                               | only)                     |
+------------------+-----------------------------------------------+---------------------------+


============================================================
Advantages of List Controls
============================================================

• Easy to display multiple items.
• Reduces coding effort.
• Supports data binding with databases.
• Improves user interaction.
• Supports server-side processing.
• Provides different selection options based on application
  needs.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET List Controls are server controls used to display a
collection of items and allow users to select one or more
options. Common list controls include DropDownList,
ListBox, CheckBoxList, RadioButtonList, and BulletedList.


============================================================
5-Mark Summary
============================================================

• DropDownList – Displays a drop-down menu; allows one selection.

• ListBox – Displays a list; allows single or multiple selections.

• CheckBoxList – Displays multiple checkboxes; allows multiple
  selections.

• RadioButtonList – Displays multiple radio buttons; allows only
  one selection.

• BulletedList – Displays items as a bulleted or numbered list;
  mainly used for display purposes.

These controls simplify data display, improve user
interaction, and support server-side processing.




RadioButton vs RadioButtonList


| Feature      | RadioButton                            | RadioButtonList                             |
| ------------ | -------------------------------------- | ------------------------------------------- |
| Selection    | Usually one option within a group      | Only one option                             |
| Options      | You create each RadioButton separately | Multiple options are managed in one control |
| Grouping     | Need GroupName                         | Automatically grouped                       |
| Data binding | Not convenient                         | Supports data binding                       |
| Code         | More code                              | Less code                                   |
| Example      | Male / Female using separate controls  | Gender list using one control               |


RadioButton example:

<asp:RadioButton ID="rbMale" runat="server"
    Text="Male" GroupName="Gender" />

<asp:RadioButton ID="rbFemale" runat="server"
    Text="Female" GroupName="Gender" />

Here, GroupName="Gender" makes sure only one can be selected.


RadioButtonList example:

<asp:RadioButtonList ID="rblGender" runat="server">
    <asp:ListItem>Male</asp:ListItem>
    <asp:ListItem>Female</asp:ListItem>
    <asp:ListItem>Other</asp:ListItem>
</asp:RadioButtonList>

Here, the whole list is handled by one control.



2. CheckBox vs CheckBoxList

| Feature      | CheckBox               | CheckBoxList                    |
| ------------ | ---------------------- | ------------------------------- |
| Selection    | Individual checkbox    | Multiple options from a list    |
| Options      | One option per control | Multiple options in one control |
| Grouping     | Not required           | All options managed together    |
| Data binding | Not convenient         | Supports data binding           |
| Example      | "I agree to terms"     | Selecting multiple hobbies      |


CheckBox example:

<asp:CheckBox ID="chkTerms" runat="server"
    Text="I agree to the terms" />

A user can check or uncheck it independently.


CheckBoxList example:

<asp:CheckBoxList ID="cblHobbies" runat="server">
    <asp:ListItem>Cricket</asp:ListItem>
    <asp:ListItem>Music</asp:ListItem>
    <asp:ListItem>Reading</asp:ListItem>
    <asp:ListItem>Coding</asp:ListItem>
</asp:CheckBoxList>

The user can select multiple hobbies.


Easy way to remember

RadioButton → One individual option
RadioButtonList → List of options, select only one
CheckBox → One individual option, independently checked
CheckBoxList → List of options, select multiple


Example:

  Gender: → RadioButtonList → 🟢 Male / ⚪ Female / ⚪ Other
  Hobbies: → CheckBoxList → ☑ Coding / ☑ Music / ☐ Cricket

So the most important difference is:

  RadioButton/RadioButtonList = single selection
  CheckBox/CheckBoxList = multiple selection

      `
    },
    {
      id: 14,
      question: "14. Explain the ImageMap Control with its types of HotSpots and HotSpotMode.",
      answer: "",
      codeExample: `
============================================================
                 ImageMap Control in ASP.NET
============================================================

============================================================
What is ImageMap Control?
============================================================

The ImageMap control in ASP.NET is used to display an image
with clickable areas, called HotSpots. Each HotSpot can
perform a different action, such as opening another page,
posting data to the server, or doing nothing.

It is commonly used for maps, diagrams, menus, and navigation
images.


============================================================
Definition (2 Marks)
============================================================

ImageMap is an ASP.NET server control that displays an image
with multiple clickable regions called HotSpots, allowing
different actions for different parts of the image.


============================================================
Syntax
============================================================

aspx
<asp:ImageMap ID="ImageMap1" runat="server" ImageUrl="images/map.jpg">

    <asp:RectangleHotSpot
        Left="20"
        Top="20"
        Right="100"
        Bottom="80"
        NavigateUrl="Home.aspx" />

</asp:ImageMap>



============================================================
Types of HotSpots
============================================================

A HotSpot is a clickable area on an image.

------------------------------------------------------------
1. RectangleHotSpot
------------------------------------------------------------

• Defines a rectangular clickable area.
• Specified using Left, Top, Right, and Bottom coordinates.

Example

<asp:RectangleHotSpot
    Left="20"
    Top="20"
    Right="100"
    Bottom="80"
    NavigateUrl="Home.aspx" />


------------------------------------------------------------
2. CircleHotSpot
------------------------------------------------------------

• Defines a circular clickable area.
• Specified using the X-coordinate, Y-coordinate, and Radius.

Example

<asp:CircleHotSpot
    X="120"
    Y="100"
    Radius="40"
    NavigateUrl="About.aspx" />


------------------------------------------------------------
3. PolygonHotSpot
------------------------------------------------------------

• Defines an irregular (polygon) clickable area.
• Specified using multiple coordinate points.

Example

<asp:PolygonHotSpot
    Coordinates="30,20,70,20,90,60,40,90"
    NavigateUrl="Contact.aspx" />



============================================================
HotSpotMode
============================================================

The HotSpotMode property defines what happens when the user
clicks a HotSpot.


============================================================
Types of HotSpotMode
============================================================

------------------------------------------------------------
1. Navigate
------------------------------------------------------------

• Opens another web page.
• Uses the NavigateUrl property.

Example

Click → Opens Home.aspx

------------------------------------------------------------
2. PostBack
------------------------------------------------------------

• Sends the page back to the server.
• Used to execute server-side code or events.

Example

Click → Server processes the request.

------------------------------------------------------------
3. Inactive
------------------------------------------------------------

• The HotSpot is disabled.
• Clicking it has no effect.

Example

Click → No action performed.


============================================================
Table: HotSpotMode
============================================================

+----------------+-----------------------------------------------------------+
| HotSpotMode    | Purpose                                                   |
+----------------+-----------------------------------------------------------+
| Navigate       | Opens another web page.                                   |
+----------------+-----------------------------------------------------------+
| PostBack       | Sends the page to the server for processing.              |
+----------------+-----------------------------------------------------------+
| Inactive       | Disables the HotSpot; no action is performed.             |
+----------------+-----------------------------------------------------------+


============================================================
Common Properties of ImageMap
============================================================

+----------------+-----------------------------------------------------------+
| Property       | Description                                               |
+----------------+-----------------------------------------------------------+
| ID             | Unique name of the control.                               |
+----------------+-----------------------------------------------------------+
| ImageUrl       | Path of the image to display.                             |
+----------------+-----------------------------------------------------------+
| HotSpotMode    | Defines the action when a HotSpot is clicked.             |
+----------------+-----------------------------------------------------------+
| AlternateText  | Text displayed if the image cannot be loaded.             |
+----------------+-----------------------------------------------------------+
| Enabled        | Enables or disables the control.                          |
+----------------+-----------------------------------------------------------+
| Visible        | Shows or hides the control.                               |
+----------------+-----------------------------------------------------------+


============================================================
Advantages of ImageMap
============================================================

• Creates interactive images.
• Easy navigation using clickable regions.
• Supports multiple clickable areas in one image.
• Improves website design and user experience.
• Useful for maps, diagrams, menus, and floor plans.


============================================================
Disadvantages of ImageMap
============================================================

• Creating coordinates for HotSpots can be time-consuming.
• Large images may affect page loading speed.
• Requires careful design for accurate clickable areas.


============================================================
Applications of ImageMap
============================================================

• Website navigation menus.
• World or country maps.
• Campus or building maps.
• Product catalogs.
• Interactive diagrams and flowcharts.


============================================================
Exam Definition (2 Marks)
============================================================

ImageMap is an ASP.NET server control that displays an image
with clickable regions called HotSpots. The three types of
HotSpots are RectangleHotSpot, CircleHotSpot, and
PolygonHotSpot, and the HotSpotMode can be Navigate,
PostBack, or Inactive.


============================================================
5-Mark Summary
============================================================

• ImageMap is used to create interactive images with
  clickable areas.

HotSpot Types:

• RectangleHotSpot – Rectangular area.
• CircleHotSpot – Circular area.
• PolygonHotSpot – Irregular polygon area.

HotSpotMode Types:

• Navigate – Opens another page.
• PostBack – Sends the page to the server.
• Inactive – No action is performed.

ImageMap is widely used for maps, navigation menus,
diagrams, and interactive web pages.
      
      `
    },
    {
      id: 15,
      question: "15. Explain the web.config file. Discuss its features and important sections. \nExplain the Global.asax file. Discuss its important events and compare it with web.config. ⭐⭐⭐⭐",
      answer: "",
      codeExample: `
============================================================
          1. Explain the web.config File
============================================================

What is web.config?

The web.config file is an XML-based configuration file used in
ASP.NET applications. It stores application settings, security
settings, database connection strings, session settings,
custom error pages, and other configuration information.

Every ASP.NET application can have one or more web.config files.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The web.config file is an XML configuration file that stores
the settings and configuration information of an ASP.NET web
application.


============================================================
Features of web.config
============================================================

------------------------------------------------------------
1. XML-Based File
------------------------------------------------------------

• Written in XML format.
• Easy to read and modify.

------------------------------------------------------------
2. Application Configuration
------------------------------------------------------------

• Stores application-wide settings.

------------------------------------------------------------
3. Security Management
------------------------------------------------------------

• Configures authentication and authorization.

------------------------------------------------------------
4. Database Connection
------------------------------------------------------------

• Stores database connection strings.

------------------------------------------------------------
5. Session Management
------------------------------------------------------------

• Configures session timeout and session mode.

------------------------------------------------------------
6. Error Handling
------------------------------------------------------------

• Defines custom error pages.

------------------------------------------------------------
7. Easy Maintenance
------------------------------------------------------------

• Configuration changes can often be made without changing
  the application code.



============================================================
Important Sections of web.config
============================================================

------------------------------------------------------------
1. <configuration>
------------------------------------------------------------

Root element of the file.

------------------------------------------------------------
2. <appSettings>
------------------------------------------------------------

Stores application settings as key-value pairs.

Example

<appSettings>
   <add key="College" value="ABC College"/>
</appSettings>


------------------------------------------------------------
3. <connectionStrings>
------------------------------------------------------------

Stores database connection strings.

Example

<connectionStrings>
   <add name="MyDB"
        connectionString="Data Source=.;Initial Catalog=CollegeDB;Integrated Security=True"/>
</connectionStrings>


------------------------------------------------------------
4. <authentication>
------------------------------------------------------------

Configures user authentication.

Example:

• Windows Authentication
• Forms Authentication

------------------------------------------------------------
5. <authorization>
------------------------------------------------------------

Controls user access permissions.

------------------------------------------------------------
6. <sessionState>
------------------------------------------------------------

Configures session settings.

Example:

• Timeout
• Session mode

------------------------------------------------------------
7. <customErrors>
------------------------------------------------------------

Displays custom error pages.

------------------------------------------------------------
8. <system.web>
------------------------------------------------------------

Contains ASP.NET application settings.


============================================================
Advantages of web.config
============================================================

• Centralized configuration.
• Easy to modify.
• Improves security.
• Supports database configuration.
• Manages sessions and error handling.


============================================================
          2. Explain the Global.asax File
============================================================

What is Global.asax?

The Global.asax file, also called the ASP.NET Application
File, contains code that responds to application-level and
session-level events.

It allows developers to write code that runs automatically
when the application starts, ends, or when user sessions begin
or end.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The Global.asax file is an ASP.NET application file that
contains event handlers for application-level and session-level
events.


============================================================
Important Events in Global.asax
============================================================

------------------------------------------------------------
1. Application_Start
------------------------------------------------------------

• Executes when the application starts.
• Used to initialize application resources.

------------------------------------------------------------
2. Application_End
------------------------------------------------------------

• Executes when the application stops.
• Used to release resources.

------------------------------------------------------------
3. Session_Start
------------------------------------------------------------

• Executes when a new user session begins.

------------------------------------------------------------
4. Session_End
------------------------------------------------------------

• Executes when a user session ends or times out.

------------------------------------------------------------
5. Application_Error
------------------------------------------------------------

• Executes when an unhandled application error occurs.
• Used for global error handling.

------------------------------------------------------------
6. BeginRequest
------------------------------------------------------------

• Executes at the beginning of every HTTP request.

------------------------------------------------------------
7. EndRequest
------------------------------------------------------------

• Executes after every HTTP request is completed.


============================================================
Simple Example
============================================================

protected void Application_Start(object sender, EventArgs e)
{
    // Application initialization code
}



============================================================
Advantages of Global.asax
============================================================

• Handles global application events.
• Provides centralized error handling.
• Manages sessions.
• Initializes application resources.
• Improves application management.


============================================================
Difference Between web.config and Global.asax
============================================================

+------------------------------------------------------+------------------------------------------------------+
| web.config                                           | Global.asax                                          |
+------------------------------------------------------+------------------------------------------------------+
| XML configuration file.                              | ASP.NET application event file.                      |
+------------------------------------------------------+------------------------------------------------------+
| Stores application settings.                         | Contains event-handling code.                        |
+------------------------------------------------------+------------------------------------------------------+
| Used for configuration.                              | Used for application and session events.             |
+------------------------------------------------------+------------------------------------------------------+
| No programming logic is written.                     | Contains C# or VB.NET code.                          |
+------------------------------------------------------+------------------------------------------------------+
| Stores database, security, and session settings.     | Handles application lifecycle events.                |
+------------------------------------------------------+------------------------------------------------------+
| Multiple web.config files can exist.                 | Usually only one Global.asax file per application.   |
+------------------------------------------------------+------------------------------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

------------------------------------------------------------
web.config
------------------------------------------------------------

The web.config file is an XML configuration file used to
store application settings, database connections, security,
session management, and error handling information.

------------------------------------------------------------
Global.asax
------------------------------------------------------------

The Global.asax file is an ASP.NET application file that
handles application-level and session-level events such as
Application_Start, Session_Start, and Application_Error.


============================================================
5-Mark Summary
============================================================

------------------------------------------------------------
web.config
------------------------------------------------------------

• XML-based configuration file.
• Stores application settings, database connections,
  authentication, authorization, session configuration,
  and custom error pages.
• Important sections:
  <configuration>,
  <appSettings>,
  <connectionStrings>,
  <authentication>,
  <authorization>,
  <sessionState>,
  <customErrors>,
  and <system.web>.

------------------------------------------------------------
Global.asax
------------------------------------------------------------

• Handles application-level events.
• Important events:
  Application_Start,
  Application_End,
  Session_Start,
  Session_End,
  Application_Error,
  BeginRequest,
  and EndRequest.
• Used to initialize resources, manage sessions,
  and handle global errors.

------------------------------------------------------------
Comparison
------------------------------------------------------------

web.config is used for configuration settings, while
Global.asax is used for application event handling.
      
      `
    },
    {
      id: 16,
      question: "16. Explain the structure of an ASP.NET Web Page and its components.",
      answer: "",
      codeExample: `
============================================================
        Structure of an ASP.NET Web Page and Its Components
============================================================

============================================================
What is an ASP.NET Web Page?
============================================================

An ASP.NET Web Page is a web page with the .aspx extension.
It contains HTML, ASP.NET server controls, and server-side
code to create dynamic web applications.

An ASP.NET page is processed by the ASP.NET Runtime on the
server before being sent to the user's browser.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An ASP.NET Web Page is a web page with the .aspx extension
that contains HTML, ASP.NET server controls, and server-side
code to create dynamic and interactive web applications.


============================================================
Structure of an ASP.NET Web Page
============================================================

aspx
<%@ Page Language="C#" AutoEventWireup="true"
CodeFile="Default.aspx.cs"
Inherits="_Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>My ASP.NET Page</title>
</head>

<body>

<form id="form1" runat="server">

    <asp:Label ID="lblMessage"
        runat="server"
        Text="Welcome to ASP.NET">
    </asp:Label>

    <br /><br />

    <asp:TextBox ID="txtName"
        runat="server">
    </asp:TextBox>

    <br /><br />

    <asp:Button ID="btnSubmit"
        runat="server"
        Text="Submit" />

</form>

</body>
</html>


============================================================
Components of an ASP.NET Web Page
============================================================

------------------------------------------------------------
1. Page Directive
------------------------------------------------------------

The Page Directive appears at the top of the page. It
provides information about the ASP.NET page.

Example

aspx
<%@ Page Language="C#" CodeFile="Default.aspx.cs"
Inherits="_Default" %>


Common Attributes

• Language – Programming language used (C#, VB.NET).
• CodeFile – Specifies the code-behind file.
• Inherits – Specifies the class that the page inherits.

------------------------------------------------------------
2. HTML Declaration
------------------------------------------------------------

Defines the document type.

html
<!DOCTYPE html>


------------------------------------------------------------
3. HTML Tag
------------------------------------------------------------

The root element of the web page.

html
<html>


------------------------------------------------------------
4. Head Section
------------------------------------------------------------

Contains page information such as:

• Title
• CSS
• JavaScript
• Meta tags

Example

html
<head runat="server">
    <title>Student Portal</title>
</head>


------------------------------------------------------------
5. Body Section
------------------------------------------------------------

Contains all the visible content displayed to the user.

html
<body>


------------------------------------------------------------
6. Form Control
------------------------------------------------------------

Every ASP.NET Web Forms page must contain at least one
server-side form.

html
<form id="form1" runat="server">


The attribute runat="server" tells ASP.NET that the form
will be processed on the server.

------------------------------------------------------------
7. ASP.NET Server Controls
------------------------------------------------------------

Used to create interactive web pages.

Examples:

• Label
• TextBox
• Button
• CheckBox
• DropDownList
• GridView

Example

aspx
<asp:Button ID="btnSave"
runat="server"
Text="Save" />


------------------------------------------------------------
8. Code-Behind File
------------------------------------------------------------

Contains the server-side code written in C# or VB.NET.

Example

text
Default.aspx.cs


Responsibilities:

• Event handling
• Business logic
• Database operations

------------------------------------------------------------
9. ViewState
------------------------------------------------------------

• Stores page data between postbacks.
• Helps maintain the values of controls.


============================================================
ASP.NET Web Page Flow
============================================================

User Opens Web Page
        │
        ▼
Browser Sends Request
        │
        ▼
IIS Receives Request
        │
        ▼
ASP.NET Runtime
        │
        ▼
Processes .aspx Page
        │
        ▼
Executes Code-Behind
        │
        ▼
Generates HTML
        │
        ▼
Browser Displays Page


============================================================
Advantages of ASP.NET Web Pages
============================================================

• Easy to develop.
• Supports server controls.
• Event-driven programming.
• Automatic state management using ViewState.
• Easy database connectivity.
• Rich user interface.
• High security.
• Code-behind improves code organization.


============================================================
Disadvantages
============================================================

• ViewState may increase page size.
• Requires server processing.
• Can consume more server resources.


============================================================
Exam Definition (2 Marks)
============================================================

An ASP.NET Web Page is a .aspx page that contains HTML,
server controls, and server-side code. Its main components
are the Page Directive, HTML structure, Head, Body, Server
Form, ASP.NET Controls, and the Code-Behind file.


============================================================
5-Mark Summary
============================================================

• An ASP.NET Web Page uses the .aspx extension.

Main Components:

• Page Directive
• HTML Declaration
• HTML Tag
• Head Section
• Body Section
• Server Form (runat="server")
• ASP.NET Server Controls
• Code-Behind File
• ViewState

Working:

Browser → IIS → ASP.NET Runtime → Code-Behind → HTML →
Browser.

ASP.NET Web Pages make it easy to build dynamic, secure, and
interactive web applications.
      `
    },
    {
      id: 17,
      question: "17. Explain Object-Oriented Basics of C# (Class, Object, Method, Constructor, Encapsulation, Inheritance, Polymorphism, Abstraction).",
      answer: "",
      codeExample: `
============================================================
               Object-Oriented Basics of C#
============================================================

============================================================
What is Object-Oriented Programming (OOP)?
============================================================

Object-Oriented Programming (OOP) is a programming approach
that organizes programs using classes and objects. It helps
in making programs reusable, secure, and easy to maintain.

The main OOP concepts in C# are:

• Class
• Object
• Method
• Constructor
• Encapsulation
• Inheritance
• Polymorphism
• Abstraction


============================================================
1. Class
============================================================

What is a Class?

A Class is a blueprint or template used to create objects.
It contains data (fields) and functions (methods).

------------------------------------------------------------
Syntax
------------------------------------------------------------

class Student
{
    public string Name;
}

------------------------------------------------------------
Example
------------------------------------------------------------

class Student
{
    public string Name;
}


============================================================
2. Object
============================================================

What is an Object?

An Object is an instance of a class. It is used to access the
data members and methods of the class.

------------------------------------------------------------
Syntax
------------------------------------------------------------

Student s = new Student();

------------------------------------------------------------
Example
------------------------------------------------------------

Student s = new Student();
s.Name = "Raj";


============================================================
3. Method
============================================================

What is a Method?

A Method is a block of code that performs a specific task.
Methods define the behavior of a class.

------------------------------------------------------------
Syntax
------------------------------------------------------------

public void Display()
{
    Console.WriteLine("Hello");
}

------------------------------------------------------------
Example
------------------------------------------------------------

class Student
{
    public void Display()
    {
        Console.WriteLine("Welcome");
    }
}


============================================================
4. Constructor
============================================================

What is a Constructor?

A Constructor is a special method that is automatically
called when an object is created. It is used to initialize
objects.

------------------------------------------------------------
Features
------------------------------------------------------------

• Constructor name is the same as the class name.
• It has no return type.
• It is called automatically when an object is created.

------------------------------------------------------------
Syntax
------------------------------------------------------------

class Student
{
    public Student()
    {
        Console.WriteLine("Constructor Called");
    }
}

------------------------------------------------------------
Example
------------------------------------------------------------

Student s = new Student();


============================================================
5. Encapsulation
============================================================

What is Encapsulation?

Encapsulation means wrapping data and methods into a single
unit (class) and restricting direct access to data.

It is achieved using private variables and public methods or
properties.

------------------------------------------------------------
Example
------------------------------------------------------------

class Student
{
    private int marks;

    public void SetMarks(int m)
    {
        marks = m;
    }

    public int GetMarks()
    {
        return marks;
    }
}

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Data security.
• Prevents unauthorized access.
• Improves code maintenance.


============================================================
6. Inheritance
============================================================

What is Inheritance?

Inheritance allows one class to inherit the properties and
methods of another class.

• Parent Class (Base Class)
• Child Class (Derived Class)

------------------------------------------------------------
Syntax
------------------------------------------------------------

class Animal
{
    public void Eat()
    {
        Console.WriteLine("Eating");
    }
}

class Dog : Animal
{
}

------------------------------------------------------------
Example
------------------------------------------------------------

Dog d = new Dog();
d.Eat();

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Code reuse.
• Easy maintenance.
• Reduces duplicate code.


============================================================
7. Polymorphism
============================================================

What is Polymorphism?

Polymorphism means one method can have many forms.

There are two types:

------------------------------------------------------------
1. Compile-Time Polymorphism
------------------------------------------------------------

Achieved using Method Overloading.

Example

class Demo
{
    public void Show()
    {
        Console.WriteLine("No Parameter");
    }

    public void Show(string name)
    {
        Console.WriteLine(name);
    }
}

------------------------------------------------------------
2. Run-Time Polymorphism
------------------------------------------------------------

Achieved using Method Overriding.

Example

class Animal
{
    public virtual void Sound()
    {
        Console.WriteLine("Animal Sound");
    }
}

class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Bark");
    }
}

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Flexibility.
• Code reuse.
• Easy extension of programs.


============================================================
8. Abstraction
============================================================

What is Abstraction?

Abstraction means hiding implementation details and showing
only essential features.

It is achieved using:

• Abstract Classes
• Interfaces

------------------------------------------------------------
Example
------------------------------------------------------------

abstract class Animal
{
    public abstract void Sound();
}

class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Bark");
    }
}

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Hides complexity.
• Improves security.
• Makes code easier to understand.


============================================================
Summary of OOP Concepts
============================================================

+-----------------+--------------------------------------------------------------+
| Concept         | Description                                                  |
+-----------------+--------------------------------------------------------------+
| Class           | Blueprint for creating objects.                              |
+-----------------+--------------------------------------------------------------+
| Object          | Instance of a class.                                         |
+-----------------+--------------------------------------------------------------+
| Method          | Performs a specific task.                                    |
+-----------------+--------------------------------------------------------------+
| Constructor     | Initializes an object when it is created.                    |
+-----------------+--------------------------------------------------------------+
| Encapsulation   | Wraps data and methods together and hides data.              |
+-----------------+--------------------------------------------------------------+
| Inheritance     | Allows one class to inherit another class's properties       |
|                 | and methods.                                                 |
+-----------------+--------------------------------------------------------------+
| Polymorphism    | One method can have multiple forms.                          |
+-----------------+--------------------------------------------------------------+
| Abstraction     | Hides implementation details and shows only essential        |
|                 | features.                                                    |
+-----------------+--------------------------------------------------------------+


============================================================
Advantages of OOP
============================================================

• Code reusability.
• Easy maintenance.
• Better security through encapsulation.
• Reduces code duplication.
• Makes large applications easier to develop and manage.


============================================================
Exam Definition (2 Marks)
============================================================

Class:
Blueprint for creating objects.

------------------------------------------------------------

Object:
Instance of a class.

------------------------------------------------------------

Method:
Function that performs a task.

------------------------------------------------------------

Constructor:
Special method used to initialize objects.

------------------------------------------------------------

Encapsulation:
Wrapping data and methods together and restricting direct
access.

------------------------------------------------------------

Inheritance:
Acquiring properties and methods from another class.

------------------------------------------------------------

Polymorphism:
One method having multiple forms.

------------------------------------------------------------

Abstraction:
Hiding implementation details and showing only essential
features.


============================================================
5-Mark Summary
============================================================

• Class is a blueprint, and an Object is its instance.

• Method performs a specific task, while a Constructor
  initializes an object.

• Encapsulation protects data by hiding it inside a class.

• Inheritance enables code reuse by allowing a child class
  to inherit from a parent class.

• Polymorphism allows methods to behave differently in
  different situations (overloading and overriding).

• Abstraction hides internal implementation and exposes
  only the necessary functionality.

These OOP concepts make C# programs modular, reusable,
secure, and easy to maintain.
      
      `
    },
    {
      id: 18,
      question: "18. Explain Data Types, Variables, and Statements in C# with suitable examples.",
      answer: "",
      codeExample: `
============================================================
          Data Types, Variables, and Statements in C#
============================================================


============================================================
1. Data Types in C#
============================================================

------------------------------------------------------------
What are Data Types?
------------------------------------------------------------

A Data Type specifies the type of data that a variable can
store, such as numbers, characters, or text.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Data Type defines the type and size of data that a variable
can store in a C# program.


============================================================
Types of Data Types
============================================================

------------------------------------------------------------
1. Value Data Types
------------------------------------------------------------

These store the actual value directly.

+---------------+-------------------------+---------------------------+
| Data Type     | Description             | Example                   |
+---------------+-------------------------+---------------------------+
| int           | Integer numbers         | int age = 20;             |
+---------------+-------------------------+---------------------------+
| float         | Decimal numbers         | float marks = 85.5f;      |
+---------------+-------------------------+---------------------------+
| double        | Large decimal numbers   | double salary = 50000.75; |
+---------------+-------------------------+---------------------------+
| char          | Single character        | char grade = 'A';         |
+---------------+-------------------------+---------------------------+
| bool          | True or False value     | bool pass = true;         |
+---------------+-------------------------+---------------------------+

------------------------------------------------------------
2. Reference Data Types
------------------------------------------------------------

These store the reference (address) of an object.

+---------------+------------------------------+
| Data Type     | Example                      |
+---------------+------------------------------+
| string        | "Raj"                        |
+---------------+------------------------------+
| object        | object obj = 100;            |
+---------------+------------------------------+
| array         | int[] num = {1,2,3};         |
+---------------+------------------------------+
| class         | Student s = new Student();   |
+---------------+------------------------------+

------------------------------------------------------------
Example of Data Types
------------------------------------------------------------

csharp
int age = 20;
float marks = 85.5f;
char grade = 'A';
bool result = true;
string name = "Raj";



============================================================
2. Variables in C#
============================================================

------------------------------------------------------------
What is a Variable?
------------------------------------------------------------

A Variable is a named memory location used to store data. Its
value can change during program execution.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Variable is a named memory location used to store data of a
specific data type.

------------------------------------------------------------
Syntax
------------------------------------------------------------

csharp
DataType VariableName = Value;


------------------------------------------------------------
Example
------------------------------------------------------------

csharp
int age = 21;
string name = "Raj";
double salary = 25000.50;


------------------------------------------------------------
Rules for Naming Variables
------------------------------------------------------------

• Variable name must start with a letter or _.
• It cannot start with a number.
• Spaces are not allowed.
• C# keywords cannot be used as variable names.
• Variable names are case-sensitive.

------------------------------------------------------------
Valid Examples
------------------------------------------------------------

csharp
int age;
string studentName;
float totalMarks;


------------------------------------------------------------
Invalid Examples
------------------------------------------------------------

csharp
int 1age;             // ❌ Starts with a number
string student name;  // ❌ Contains a space
int class;            // ❌ 'class' is a keyword



============================================================
3. Statements in C#
============================================================

------------------------------------------------------------
What are Statements?
------------------------------------------------------------

A Statement is an instruction that tells the computer to
perform a specific task. Each statement usually ends with a
semicolon (;).

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Statement is a command or instruction in a C# program that
performs a specific action.


============================================================
Types of Statements
============================================================

------------------------------------------------------------
1. Declaration Statement
------------------------------------------------------------

Used to declare variables.

csharp
int age;
string name;


------------------------------------------------------------
2. Assignment Statement
------------------------------------------------------------

Used to assign values to variables.

csharp
age = 20;
name = "Raj";


------------------------------------------------------------
3. Conditional Statement
------------------------------------------------------------

Used to make decisions.

Example: if statement

csharp
int marks = 70;

if (marks >= 35)
{
    Console.WriteLine("Pass");
}


------------------------------------------------------------
4. Loop Statement
------------------------------------------------------------

Used to repeat a block of code.

Example: for loop

csharp
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}


------------------------------------------------------------
5. Jump Statement
------------------------------------------------------------

Used to change the normal flow of execution.

Examples:

csharp
break
continue
return


csharp
break;



============================================================
Complete Example
============================================================

csharp
using System;

class Program
{
    static void Main()
    {
        int age = 21;
        string name = "Raj";
        bool pass = true;

        Console.WriteLine(name);
        Console.WriteLine(age);

        if (pass)
        {
            Console.WriteLine("Passed");
        }
    }
}



============================================================
Advantages
============================================================

• Data types help store data correctly.
• Variables make data easy to access and modify.
• Statements control the flow of the program.
• Improves code readability and organization.


============================================================
Exam Definition (2 Marks)
============================================================

Data Type:

Defines the type of data that a variable can store.

------------------------------------------------------------

Variable:

A named memory location used to store data.

------------------------------------------------------------

Statement:

An instruction that performs a specific action in a C# program.


============================================================
5-Mark Summary
============================================================

Data Types specify the type of data stored in a variable.
They are mainly Value Types (int, float, char, bool) and
Reference Types (string, array, class, object).

Variables are named memory locations used to store data.
They follow specific naming rules and are declared using
DataType VariableName.

Statements are instructions executed by the program.
Common types include Declaration, Assignment, Conditional
(if), Loop (for), and Jump (break, continue, return)
statements.

Together, data types, variables, and statements form the
basic building blocks of every C# program.
      
      `
    },
    {
      id: 21,
      question: "21. Explain ASP.NET Validation Controls. Discuss all basic validation controls with suitable examples.",
      answer: "",
      codeExample: `
============================================================
                 ASP.NET Validation Controls
============================================================

============================================================
What are Validation Controls?
============================================================

ASP.NET Validation Controls are server controls used to validate
user input before it is processed. They ensure that users enter
correct and valid data, reducing errors and improving data
accuracy.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

ASP.NET Validation Controls are server-side controls that check
user input and ensure it meets specified validation rules before
the data is submitted.


============================================================
Features of Validation Controls
============================================================

• Validate user input automatically.
• Reduce invalid data entry.
• Improve data accuracy.
• Easy to use with ASP.NET controls.
• Display error messages when validation fails.
• Support both client-side and server-side validation.


============================================================
Types of ASP.NET Validation Controls
============================================================

There are 6 basic validation controls in ASP.NET:

1. RequiredFieldValidator
2. CompareValidator
3. RangeValidator
4. RegularExpressionValidator
5. CustomValidator
6. ValidationSummary


============================================================
1. RequiredFieldValidator
============================================================

------------------------------------------------------------
What is RequiredFieldValidator?
------------------------------------------------------------

It ensures that the user does not leave a required field empty.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtName" runat="server"></asp:TextBox>

<asp:RequiredFieldValidator
    ID="rfvName"
    runat="server"
    ControlToValidate="txtName"
    ErrorMessage="Name is required!"
    ForeColor="Red">
</asp:RequiredFieldValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

If the Name field is empty, the message
"Name is required!" is displayed.


============================================================
2. CompareValidator
============================================================

------------------------------------------------------------
What is CompareValidator?
------------------------------------------------------------

It compares the value of one control with another control or
with a fixed value.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtPassword" runat="server"></asp:TextBox>

<asp:TextBox ID="txtConfirm" runat="server"></asp:TextBox>

<asp:CompareValidator
    ID="cvPassword"
    runat="server"
    ControlToValidate="txtConfirm"
    ControlToCompare="txtPassword"
    ErrorMessage="Passwords do not match!"
    ForeColor="Red">
</asp:CompareValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Checks whether Password and Confirm Password are the same.


============================================================
3. RangeValidator
============================================================

------------------------------------------------------------
What is RangeValidator?
------------------------------------------------------------

It checks whether the entered value lies within a specified
minimum and maximum range.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtAge" runat="server"></asp:TextBox>

<asp:RangeValidator
    ID="rvAge"
    runat="server"
    ControlToValidate="txtAge"
    MinimumValue="18"
    MaximumValue="60"
    Type="Integer"
    ErrorMessage="Age must be between 18 and 60."
    ForeColor="Red">
</asp:RangeValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Allows only ages between 18 and 60.


============================================================
4. RegularExpressionValidator
============================================================

------------------------------------------------------------
What is RegularExpressionValidator?
------------------------------------------------------------

It validates user input using a regular expression (pattern).

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>

<asp:RegularExpressionValidator
    ID="revEmail"
    runat="server"
    ControlToValidate="txtEmail"
    ValidationExpression="\w+@\w+\.\w+"
    ErrorMessage="Enter a valid email address."
    ForeColor="Red">
</asp:RegularExpressionValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Checks whether the email address is in a valid format.


============================================================
5. CustomValidator
============================================================

------------------------------------------------------------
What is CustomValidator?
------------------------------------------------------------

It allows the developer to create custom validation rules using
server-side or client-side code.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:CustomValidator
    ID="cvCustom"
    runat="server"
    ErrorMessage="Invalid value.">
</asp:CustomValidator>


------------------------------------------------------------
Example
------------------------------------------------------------

Checks custom conditions such as:

• Username already exists.
• Employee ID must follow company rules.


============================================================
6. ValidationSummary
============================================================

------------------------------------------------------------
What is ValidationSummary?
------------------------------------------------------------

It displays all validation error messages together in one place.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:ValidationSummary
    ID="vsSummary"
    runat="server"
    HeaderText="Please correct the following errors:" />


------------------------------------------------------------
Example
------------------------------------------------------------

If multiple validation controls fail, all error messages are
shown in one summary.


============================================================
Common Properties of Validation Controls
============================================================

+----------------------+------------------------------------------------------+
| Property             | Description                                          |
+----------------------+------------------------------------------------------+
| ID                   | Unique name of the validator.                        |
+----------------------+------------------------------------------------------+
| ControlToValidate    | Specifies the control to validate.                   |
+----------------------+------------------------------------------------------+
| ErrorMessage         | Message displayed when validation fails.             |
+----------------------+------------------------------------------------------+
| ForeColor            | Sets the color of the error message.                 |
+----------------------+------------------------------------------------------+
| Display              | Specifies how the error message is displayed.        |
+----------------------+------------------------------------------------------+
| ValidationGroup      | Groups related validation controls.                  |
+----------------------+------------------------------------------------------+


============================================================
Difference Between Validation Controls
============================================================

+-------------------------------+----------------------------------------------+
| Validation Control            | Purpose                                      |
+-------------------------------+----------------------------------------------+
| RequiredFieldValidator        | Ensures the field is not empty.              |
+-------------------------------+----------------------------------------------+
| CompareValidator              | Compares two values or controls.             |
+-------------------------------+----------------------------------------------+
| RangeValidator                | Checks whether a value is within a specified |
|                               | range.                                       |
+-------------------------------+----------------------------------------------+
| RegularExpressionValidator    | Validates input using a pattern              |
|                               | (e.g., email, phone).                        |
+-------------------------------+----------------------------------------------+
| CustomValidator               | Performs user-defined validation.            |
+-------------------------------+----------------------------------------------+
| ValidationSummary             | Displays all validation errors together.     |
+-------------------------------+----------------------------------------------+


============================================================
Advantages of Validation Controls
============================================================

• Improves data accuracy.
• Prevents invalid user input.
• Reduces server-side errors.
• Easy to implement.
• Supports client-side and server-side validation.
• Provides better user experience.


============================================================
Disadvantages
============================================================

• Complex validation may require custom code.
• Incorrect configuration can cause validation failures.
• Client-side validation alone is not sufficient for security.


============================================================
Exam Definition (2 Marks)
============================================================

ASP.NET Validation Controls are server controls that validate
user input before processing. The six basic validation controls
are RequiredFieldValidator, CompareValidator, RangeValidator,
RegularExpressionValidator, CustomValidator, and
ValidationSummary.


============================================================
5-Mark Summary
============================================================

• Validation Controls ensure users enter valid and correct data.

• RequiredFieldValidator – Checks that a field is not empty.

• CompareValidator – Compares two values.

• RangeValidator – Validates a value within a specified range.

• RegularExpressionValidator – Validates input using a pattern.

• CustomValidator – Allows custom validation logic.

• ValidationSummary – Displays all validation errors in one
  place.

These controls improve data accuracy, security, and user
experience in ASP.NET applications.
      
      `
    },
    {
      id: 22,
      question: "22. Explain Validation Techniques in ASP.NET. Discuss Client-side and Server-side validation.",
      answer: "",
      codeExample: `
============================================================
              Validation Techniques in ASP.NET
============================================================

============================================================
What is Validation?
============================================================

Validation is the process of checking whether the data entered
by the user is correct, complete, and in the required format
before it is processed or stored in the database.

ASP.NET provides two main validation techniques:

• Client-side Validation
• Server-side Validation


============================================================
1. Client-side Validation
============================================================

------------------------------------------------------------
What is Client-side Validation?
------------------------------------------------------------

Client-side validation checks the user's input in the web
browser before the data is sent to the server.

It uses JavaScript and ASP.NET Validation Controls to
validate data quickly.

------------------------------------------------------------
Working
------------------------------------------------------------

User Enters Data
        │
        ▼
 Browser Validates Input
        │
        ▼
Valid Data?
   │          │
  Yes        No
   │          │
   ▼          ▼
Send to     Show Error
 Server      Message

------------------------------------------------------------
Features
------------------------------------------------------------

• Performed in the browser.
• Faster because no server request is needed.
• Reduces server load.
• Gives immediate feedback to the user.

------------------------------------------------------------
Example
------------------------------------------------------------

If the Name field is empty, the browser immediately displays:

"Name is required!"

without sending the form to the server.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Fast validation.
• Reduces network traffic.
• Improves user experience.
• Decreases server workload.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Can be bypassed if JavaScript is disabled.
• Not suitable for sensitive security checks.


============================================================
2. Server-side Validation
============================================================

------------------------------------------------------------
What is Server-side Validation?
------------------------------------------------------------

Server-side validation checks the user's input after the form
is submitted to the server.

The server verifies the data before processing or storing it.

------------------------------------------------------------
Working
------------------------------------------------------------

User Enters Data
        │
        ▼
Submit Form
        │
        ▼
 Server Validates Input
        │
        ▼
Valid Data?
   │          │
  Yes        No
   │          │
   ▼          ▼
Process      Return Error
 Request      Message

------------------------------------------------------------
Features
------------------------------------------------------------

• Performed on the server.
• More secure than client-side validation.
• Cannot be bypassed by disabling JavaScript.
• Suitable for database and business rule validation.

------------------------------------------------------------
Example
------------------------------------------------------------

The server checks whether:

• Username already exists.
• Email is unique.
• Password matches the database.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Highly secure.
• Reliable.
• Prevents invalid data from entering the database.
• Supports complex validation.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Slower than client-side validation.
• Requires communication with the server.
• Increases server processing.


============================================================
Difference Between Client-side and Server-side Validation
============================================================

| Client-side Validation                     | Server-side Validation                              |
| ------------------------------------------ | --------------------------------------------------- |
| Performed in the browser.                  | Performed on the server.                            |
| Uses JavaScript and validation controls.   | Uses C# or VB.NET code on the server.               |
| Faster.                                    | Slower because data is sent to the server.          |
| Reduces server load.                       | Increases server load.                              |
| Can be bypassed if JavaScript is disabled. | Cannot be bypassed by disabling JavaScript.         |
| Suitable for basic input validation.       | Suitable for security and business rule validation. |



============================================================
Why Both Techniques Are Used
============================================================

In ASP.NET applications, both client-side and server-side
validation are used together because:

• Client-side validation provides a fast and user-friendly
  experience.

• Server-side validation ensures data is secure and valid
  before processing.

Using both techniques makes the application fast, secure,
and reliable.


============================================================
Advantages of Validation
============================================================

• Prevents invalid data entry.
• Improves data accuracy.
• Enhances application security.
• Reduces database errors.
• Improves user experience.


============================================================
Exam Definition (2 Marks)
============================================================

Validation is the process of checking user input before
processing it. ASP.NET supports Client-side Validation,
which validates data in the browser, and Server-side
Validation, which validates data on the server before
processing.


============================================================
5-Mark Summary
============================================================

• Validation ensures that user input is correct and complete.

• Client-side Validation:
  - Performed in the browser.
  - Fast and reduces server load.
  - Uses JavaScript and ASP.NET validation controls.

• Server-side Validation:
  - Performed on the server.
  - More secure and reliable.
  - Used for database checks and business rules.

• Client-side validation improves performance, while
  server-side validation provides strong security.

• Best practice is to use both client-side and server-side
  validation together in ASP.NET applications.
      


-----------------------------------------------------------------------


============================================================
              Client-side and Server-side Validation Examples
============================================================


============================================================
1. Client-side Validation Example
============================================================

Validation Used:

✅ RequiredFieldValidator

------------------------------------------------------------
Explanation
------------------------------------------------------------

When the user clicks the button without entering a name,
the error message appears immediately in the browser
(no request is sent to the server).

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Client Side Validation</title>
</head>
<body>

<form id="form1" runat="server">

    Name :
    <asp:TextBox ID="txtName" runat="server"></asp:TextBox>

    <asp:RequiredFieldValidator
        ID="rfvName"
        runat="server"
        ControlToValidate="txtName"
        ErrorMessage="Name is required"
        ForeColor="Red">
    </asp:RequiredFieldValidator>

    <br /><br />

    <asp:Button
        ID="btnSubmit"
        runat="server"
        Text="Submit" />

</form>

</body>
</html>


------------------------------------------------------------
Output
------------------------------------------------------------

Name : ___________

[Submit]

If empty →

Name is required

------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ RequiredFieldValidator

This is Client-side Validation (it also performs server-side
validation automatically if JavaScript is unavailable).


============================================================
2. Client-side Validation Example
============================================================

Compare Password

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
Password :
<asp:TextBox ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>

Confirm Password :
<asp:TextBox ID="txtConfirm" runat="server" TextMode="Password"></asp:TextBox>

<asp:CompareValidator
    ID="cv1"
    runat="server"
    ControlToValidate="txtConfirm"
    ControlToCompare="txtPassword"
    ErrorMessage="Password does not match"
    ForeColor="Red">
</asp:CompareValidator>


------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ CompareValidator


============================================================
3. Client-side Validation Example
============================================================

Email Validation

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
Email :

<asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>

<asp:RegularExpressionValidator
    ID="revEmail"
    runat="server"
    ControlToValidate="txtEmail"
    ValidationExpression="\w+@\w+\.\w+"
    ErrorMessage="Invalid Email"
    ForeColor="Red">
</asp:RegularExpressionValidator>


------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ RegularExpressionValidator


============================================================
4. Server-side Validation Example
============================================================

Suppose you want to check whether the Username is "admin".

Only the server knows this information.

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
<form id="form1" runat="server">

Username :

<asp:TextBox
    ID="txtUser"
    runat="server">
</asp:TextBox>

<br /><br />

<asp:Button
    ID="btnCheck"
    runat="server"
    Text="Check Username"
    OnClick="btnCheck_Click" />

<br /><br />

<asp:Label
    ID="lblResult"
    runat="server">
</asp:Label>

</form>


------------------------------------------------------------
C# Code (Default.aspx.cs)
------------------------------------------------------------

csharp
protected void btnCheck_Click(object sender, EventArgs e)
{
    if (txtUser.Text == "admin")
    {
        lblResult.Text = "Username already exists";
    }
    else
    {
        lblResult.Text = "Username is available";
    }
}


------------------------------------------------------------
Validation Used
------------------------------------------------------------

❌ No ASP.NET Validation Control

✅ Validation is done using C# code on the server.


============================================================
5. Server-side Validation Using CustomValidator
============================================================

------------------------------------------------------------
ASPX Code
------------------------------------------------------------

aspx
Username :

<asp:TextBox ID="txtName" runat="server"></asp:TextBox>

<asp:CustomValidator
    ID="cvUser"
    runat="server"
    ControlToValidate="txtName"
    OnServerValidate="CheckUser"
    ErrorMessage="Username already exists"
    ForeColor="Red">
</asp:CustomValidator>

<br /><br />

<asp:Button
    ID="btnSave"
    runat="server"
    Text="Save" />


------------------------------------------------------------
C# Code
------------------------------------------------------------

csharp
protected void CheckUser(object source, ServerValidateEventArgs args)
{
    if (args.Value == "admin")
    {
        args.IsValid = false;
    }
    else
    {
        args.IsValid = true;
    }
}


------------------------------------------------------------
Validation Used
------------------------------------------------------------

✅ CustomValidator



      `
    },
    {
      id: 23,
      question: "23. Explain State Management in ASP.NET. Discuss View State, Session State, Application State, Cookies, and URL Encoding.",
      answer: "",
      codeExample: `
============================================================
                State Management in ASP.NET
============================================================

============================================================
What is State Management?
============================================================

State Management is the process of storing and maintaining
user data between different page requests in an ASP.NET
application.

Since HTTP is a stateless protocol, it does not remember
previous requests. ASP.NET uses state management techniques
to preserve information such as user login, preferences,
and shopping cart data.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

State Management is the technique of storing and maintaining
user information between different requests in an ASP.NET
application.


============================================================
Types of State Management
============================================================

ASP.NET provides the following state management techniques:

• View State
• Session State
• Application State
• Cookies
• URL Encoding


============================================================
1. View State
============================================================

------------------------------------------------------------
What is View State?
------------------------------------------------------------

View State stores the values of controls on the same page
after a postback.

It is stored in a hidden field on the web page.

------------------------------------------------------------
Example
------------------------------------------------------------

Store Data

Example:
ViewState["Name"] = "Anmol";
ViewState["Age"] = 22;


Retrieve Data

Example:
string name = ViewState["Name"].ToString();
int age = Convert.ToInt32(ViewState["Age"]);


------------------------------------------------------------
Features
------------------------------------------------------------

• Stores page-level data.
• Maintains control values after postback.
• Stored on the client (hidden field).
• Available only for the current page.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Automatic state maintenance.
• Easy to use.
• No server memory required.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Increases page size.
• Works only for the same page.


============================================================
2. Session State
============================================================

------------------------------------------------------------
What is Session State?
------------------------------------------------------------

Session State stores data for a single user during a session.

It is stored on the server and is available until the user
logs out or the session expires.

------------------------------------------------------------
Example
------------------------------------------------------------

Store Data

Example:
Session["Name"] = "Anmol";
Session["Age"] = 22;

Retrieve Data
string name = Session["Name"].ToString();
int age = Convert.ToInt32(Session["Age"]);


------------------------------------------------------------
Features
------------------------------------------------------------

• Stores user-specific data.
• Stored on the server.
• Available across multiple pages.
• Expires after a timeout.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Secure.
• Easy to access.
• Suitable for login information and shopping carts.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Uses server memory.
• Data is lost when the session expires.


============================================================
3. Application State
============================================================

------------------------------------------------------------
What is Application State?
------------------------------------------------------------

Application State stores data that is shared by all users
of the application.

It remains available until the application stops or
restarts.

------------------------------------------------------------
Example
------------------------------------------------------------


Application["Visitors"] = 100;


To retrieve the value:

int count = (int)Application["Visitors"];


------------------------------------------------------------
Features
------------------------------------------------------------

• Shared by all users.
• Stored on the server.
• Available throughout the application.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to share common data.
• Suitable for application-wide information.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Not user-specific.
• Uses server memory.


============================================================
4. Cookies
============================================================

------------------------------------------------------------
What are Cookies?
------------------------------------------------------------

Cookies are small text files stored in the user's browser.
They are used to remember user information such as login
preferences and language settings.

------------------------------------------------------------
Example
------------------------------------------------------------

Create a Cookie

HttpCookie ck = new HttpCookie("User");
ck.Value = "Anmol";
Response.Cookies.Add(ck);

Read a Cookie

string name = Request.Cookies["User"].Value;


Create a Persistent Cookie

HttpCookie ck = new HttpCookie("User");
ck.Value = "Anmol";
ck.Expires = DateTime.Now.AddDays(7);
Response.Cookies.Add(ck);

Delete a Cookie

Response.Cookies["User"].Expires = DateTime.Now.AddDays(-1);


------------------------------------------------------------
Features
------------------------------------------------------------

• Stored on the client.
• Can persist after the browser is closed (if an expiry date
  is set).
• Small amount of data can be stored.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Saves user preferences.
• Reduces repeated login requests.
• Does not use server memory.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Limited storage size.
• Users can delete or disable cookies.
• Not suitable for sensitive information.


============================================================
5. URL Encoding (Query String)
============================================================

------------------------------------------------------------
What is URL Encoding?
------------------------------------------------------------

URL Encoding (Query String) passes information from one page
to another by appending data to the URL.

------------------------------------------------------------
Example
------------------------------------------------------------

text
Response.Redirect("Page2.aspx?name=Anmol&age=22");


Retrieve values in C#:

csharp
string name = Request.QueryString["Name"];
string age = Request.QueryString["Age"];


------------------------------------------------------------
Features
------------------------------------------------------------

• Data is passed through the URL.
• Easy to implement.
• Suitable for small amounts of data.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Simple to use.
• No server memory required.
• Useful for navigation between pages.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Data is visible in the browser's address bar.
• Limited amount of data can be passed.
• Not secure for confidential information.


============================================================
Difference Between State Management Techniques
============================================================

| Technique         | Storage Location      | Scope         | Example Use                            |
| ------------------| --------------------- | ------------- | -------------------------------------- |
| View State        | Client (Hidden Field) | Same page     | Maintain TextBox values after postback |
| Session State     | Server                | Single user   | Login information, shopping cart       |
| Application State | Server                | All users     | Visitor count, application settings    |
| Cookies           | Client Browser        | Single user   | Remember username, language preference |
| URL Encoding      | URL (Query String)    | Between pages | Pass ID or name to another page        |


============================================================
Advantages of State Management
============================================================

• Maintains user data.
• Improves user experience.
• Supports login and session tracking.
• Makes web applications interactive.
• Allows data sharing between pages.


============================================================
Exam Definition (2 Marks)
============================================================

State Management is the technique used in ASP.NET to store
and maintain user data between different page requests.
Common techniques include View State, Session State,
Application State, Cookies, and URL Encoding.


============================================================
5-Mark Summary
============================================================

• State Management maintains user data because HTTP is
  stateless.

• View State stores page data on the client and works only
  on the same page.

• Session State stores user-specific data on the server and
  is available across multiple pages.

• Application State stores application-wide data shared by
  all users.

• Cookies store small amounts of data in the browser.

• URL Encoding (Query String) passes data through the URL
  between pages.

• These techniques help create dynamic, user-friendly, and
  interactive ASP.NET applications.
      `
    },
    {
      id: 24,
      question: "24. Explain Master Pages in ASP.NET. Discuss creating Master Pages and Content Pages with advantages.",
      answer: "",
      codeExample: `
============================================================
                    Master Pages in ASP.NET
============================================================

============================================================
What is a Master Page?
============================================================

A Master Page in ASP.NET is a special page that defines the
common layout (such as header, footer, navigation menu, and
sidebar) for multiple web pages.

It helps maintain a consistent look and feel throughout the
website. Master Pages have the .master extension.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Master Page is an ASP.NET page with the .master extension
that defines the common layout of a website and allows
multiple content pages to share the same design.


============================================================
Why Use Master Pages?
============================================================

Without a Master Page:

• Every web page must have its own header, footer, and menu.
• If the design changes, each page must be updated manually.

------------------------------------------------------------

With a Master Page:

• Common layout is created once.
• All content pages automatically use the same layout.


============================================================
Structure of Master Page
============================================================

Master Page (.master)
│
├── Header
├── Navigation Menu
├── ContentPlaceHolder
├── Sidebar
└── Footer


============================================================
Creating a Master Page
============================================================

------------------------------------------------------------
Step 1: Create a Master Page
------------------------------------------------------------

Create a file named Site.master.

------------------------------------------------------------
Master Page Code (Site.master)
------------------------------------------------------------

<%@ Master Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>My Website</title>
</head>

<body>

<h1>ABC College</h1>

<hr/>

<asp:ContentPlaceHolder
    ID="MainContent"
    runat="server">
</asp:ContentPlaceHolder>

<hr/>

<h3>Copyright © 2026</h3>

</body>
</html>


------------------------------------------------------------
Explanation
------------------------------------------------------------

• Header → Displays the website title.
• ContentPlaceHolder → Area where content pages display
  their content.
• Footer → Common footer for all pages.


============================================================
Creating a Content Page
============================================================

A Content Page uses the layout of the Master Page and provides
only the page-specific content.

------------------------------------------------------------
Step 2: Create Default.aspx
------------------------------------------------------------

<%@ Page
MasterPageFile="~/Site.master"
Language="C#"
Title="Home Page" %>

<asp:Content
ID="Content1"
ContentPlaceHolderID="MainContent"
runat="server">

<h2>Welcome to ASP.NET</h2>

<p>This is the Home Page.</p>

</asp:Content>


------------------------------------------------------------
Explanation
------------------------------------------------------------

• MasterPageFile → Specifies the Master Page.
• ContentPlaceHolderID → Links the content to the
  ContentPlaceHolder in the Master Page.
• The content inside <asp:Content> is displayed in the
  Master Page.


============================================================
Components of a Master Page
============================================================

------------------------------------------------------------
1. Master Directive
------------------------------------------------------------

aspx
<%@ Master Language="C#" %>


Defines the page as a Master Page.

------------------------------------------------------------
2. ContentPlaceHolder
------------------------------------------------------------

aspx
<asp:ContentPlaceHolder
ID="MainContent"
runat="server">
</asp:ContentPlaceHolder>


Provides a placeholder where content pages insert their
content.

------------------------------------------------------------
3. Content Control
------------------------------------------------------------

aspx
<asp:Content
ContentPlaceHolderID="MainContent"
runat="server">


Used in a content page to insert content into the Master Page.


============================================================
Working of Master Pages
============================================================

User Requests Content Page
          │
          ▼
Content Page
          │
Uses Master Page Layout
          │
          ▼
Content is inserted into
ContentPlaceHolder
          │
          ▼
Final Web Page
          │
          ▼
Displayed in Browser


============================================================
Advantages of Master Pages
============================================================

• Maintains a consistent layout across all pages.
• Reduces duplicate code.
• Easier website maintenance.
• Changes made in the Master Page automatically apply to all
  content pages.
• Improves code reusability.
• Saves development time.
• Makes website management easier.


============================================================
Disadvantages of Master Pages
============================================================

• More difficult to understand for beginners.
• Complex layouts may require multiple nested Master Pages.
• Improper design can make maintenance harder.


============================================================
Difference Between Master Page and Content Page
============================================================

| Master Page                                | Content Page                    |
| ------------------------------------------ | ------------------------------- |
| Defines the common layout.                 | Contains page-specific content. |
| Has the .master extension.                 | Has the .aspx extension.        |
| Contains ContentPlaceHolder.               | Contains Content controls.      |
| Shared by multiple pages.                  | Uses one Master Page.           |
| Usually contains header, footer, and menu. | Displays unique page content.   |


============================================================
Exam Definition (2 Marks)
============================================================

A Master Page is an ASP.NET page with the .master extension
that provides a common layout for multiple web pages.
Content Pages use the Master Page and display page-specific
content inside ContentPlaceHolder controls.


============================================================
5-Mark Summary
============================================================

• Master Page provides a common layout for all web pages.
• It contains Header, Footer, Navigation Menu, and
  ContentPlaceHolder.
• Content Pages use the Master Page and add their own content
  through the Content control.
• Creating a Master Page: Create a .master file and add a
  ContentPlaceHolder.
• Creating a Content Page: Create an .aspx page, set the
  MasterPageFile, and place content inside an
  <asp:Content> control.
• Advantages: Consistent design, reduced code duplication,
  easier maintenance, better reusability, and faster
  development.
      
      `
    },
    {
      id: 25,
      question: "25. Explain Nested Master Pages and how to access Master Page controls from a Content Page.",
      answer: "",
      codeExample: `
============================================================
     Nested Master Pages and Accessing Master Page Controls
                 from a Content Page
============================================================


============================================================
1. Nested Master Pages
============================================================

------------------------------------------------------------
What are Nested Master Pages?
------------------------------------------------------------

A Nested Master Page is a Master Page that is based on another
Master Page. It allows you to create multiple levels of page
layouts.

For example:

• A Main Master Page provides the common layout for the
  entire website.

• A Nested Master Page adds a layout for a specific section
  (such as Student or Admin).

• Content Pages use the Nested Master Page.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Nested Master Page is a Master Page that inherits the layout
of another Master Page, allowing multiple levels of reusable
page layouts.


============================================================
Structure of Nested Master Pages
============================================================

Website

Main Master Page (Site.master)
│
├── Header
├── Navigation
├── Footer
│
▼
Nested Master Page (Student.master)
│
├── Student Menu
├── Student Sidebar
│
▼
Content Page (Home.aspx)


============================================================
Creating a Nested Master Page
============================================================

------------------------------------------------------------
Step 1: Main Master Page (Site.master)
------------------------------------------------------------

<%@ Master Language="C#" %>

<html>
<body>

<h1>ABC College</h1>

<asp:ContentPlaceHolder
ID="MainContent"
runat="server">
</asp:ContentPlaceHolder>

</body>
</html>


------------------------------------------------------------
Step 2: Nested Master Page (Student.master)
------------------------------------------------------------

<%@ Master
MasterPageFile="~/Site.master"
Language="C#" %>

<asp:Content
ContentPlaceHolderID="MainContent"
runat="server">

<h2>Student Section</h2>

<asp:ContentPlaceHolder
ID="StudentContent"
runat="server">
</asp:ContentPlaceHolder>

</asp:Content>


------------------------------------------------------------
Step 3: Content Page (Home.aspx)
------------------------------------------------------------

<%@ Page
MasterPageFile="~/Student.master"
Language="C#" %>

<asp:Content
ContentPlaceHolderID="StudentContent"
runat="server">

Welcome Student

</asp:Content>



============================================================
Advantages of Nested Master Pages
============================================================

• Better organization of large websites.
• Reuse layouts at multiple levels.
• Easy maintenance.
• Reduces duplicate code.
• Provides consistent design.


============================================================
2. Accessing Master Page Controls from a Content Page
============================================================

Sometimes a Content Page needs to access controls (such as a
Label, TextBox, or Button) that are placed in the Master Page.

This can be done using the Master.FindControl() method.


============================================================
Example
============================================================

------------------------------------------------------------
Master Page (Site.master)
------------------------------------------------------------

<asp:Label
ID="lblTitle"
runat="server"
Text="Welcome">
</asp:Label>


------------------------------------------------------------
Content Page (Default.aspx.cs)
------------------------------------------------------------

protected void Page_Load(object sender, EventArgs e)
{
    Label lbl = (Label)Master.FindControl("lblTitle");

    lbl.Text = "Student Portal";
}



============================================================
Explanation
============================================================

• Master refers to the current Master Page.

• FindControl("lblTitle") searches for the control with ID
  lblTitle.

• The Label text is changed from "Welcome" to
  "Student Portal".


============================================================
Another Example (Accessing a TextBox)
============================================================

------------------------------------------------------------
Master Page
------------------------------------------------------------

<asp:TextBox
ID="txtName"
runat="server">
</asp:TextBox>


------------------------------------------------------------
Content Page
------------------------------------------------------------

csharp
TextBox txt = (TextBox)Master.FindControl("txtName");

string name = txt.Text;


This retrieves the text entered in the TextBox on the Master
Page.


============================================================
Working of Nested Master Pages
============================================================

Content Page
      │
      ▼
Nested Master Page
      │
      ▼
Main Master Page
      │
      ▼
Final Web Page
      │
      ▼
Browser


============================================================
Difference Between Master Page and Nested Master Page
============================================================

| Master Page                     | Nested Master Page                                   |
| ------------------------------- | ---------------------------------------------------- |
| Main layout of the website.     | Inherits from another Master Page.                   |
| Directly used by content pages. | Used between the main Master Page and content pages. |
| Contains common layout.         | Adds section-specific layout.                        |
| One level of layout.            | Multiple levels of layout.                           |


============================================================
Advantages of Accessing Master Page Controls
============================================================

• Easy communication between the Master Page and
  Content Page.

• Updates common controls dynamically.

• Improves code reusability.

• Centralized management of shared controls.


============================================================
Exam Definition (2 Marks)
============================================================

Nested Master Page:

A Master Page that inherits another Master Page to create
multiple levels of reusable layouts.

------------------------------------------------------------

Accessing Master Page Controls:

Controls in the Master Page can be accessed from a Content Page
using the Master.FindControl() method.


============================================================
5-Mark Summary
============================================================

• A Nested Master Page is a Master Page that is based on
  another Master Page.

• It helps organize large websites by creating multi-level
  layouts.

• Structure:
  Main Master Page → Nested Master Page → Content Page.

• A Content Page can access Master Page controls using
  Master.FindControl().

• Advantages:
  Better organization, code reuse, easy maintenance,
  consistent design, and dynamic access to shared controls.
      `
    },
    {
      id: 26,
      question: "26. Explain Themes in ASP.NET. Discuss Skin Files and CSS with suitable examples.",
      answer: "",
      codeExample: `
============================================================
                      Themes in ASP.NET
============================================================

============================================================
What are Themes?
============================================================

A Theme in ASP.NET is a collection of Skin files, CSS files,
and images that define the appearance (look and feel) of a
website.

Themes help maintain a consistent design across all web pages
without changing the application code.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An ASP.NET Theme is a collection of Skin files, CSS files,
and images used to provide a consistent appearance to web
pages.


============================================================
Components of a Theme
============================================================

An ASP.NET Theme mainly consists of:

• Skin Files (.skin)
• CSS Files (.css)
• Images (optional)


============================================================
Theme Folder Structure
============================================================

App_Themes
│
└── BlueTheme
    │
    ├── Button.skin
    ├── Style.css
    └── logo.png


============================================================
Applying a Theme
============================================================

The theme is applied using the Theme attribute in the Page
Directive.

------------------------------------------------------------
Example
------------------------------------------------------------

<%@ Page Language="C#" Theme="BlueTheme" %>


============================================================
Features of Themes
============================================================

• Provides a consistent look and feel.
• Easy to change website design.
• Reusable across multiple pages.
• Reduces duplicate styling code.
• Separates design from application logic.


============================================================
Skin Files (.skin)
============================================================

------------------------------------------------------------
What is a Skin File?
------------------------------------------------------------

A Skin File is a file with the .skin extension that defines
the appearance of ASP.NET server controls.

It stores properties such as color, font, width, and height.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Skin File is a .skin file that defines the default
appearance of ASP.NET server controls.

------------------------------------------------------------
Syntax of Skin File
------------------------------------------------------------

Button.skin

<asp:Button
runat="server"
BackColor="Blue"
ForeColor="White"
Font-Bold="True" />

------------------------------------------------------------
Using the Button
------------------------------------------------------------

Now simply write:

<asp:Button
ID="btnSave"
runat="server"
Text="Save" />

The button automatically gets the properties defined in
Button.skin.

------------------------------------------------------------
Advantages of Skin Files
------------------------------------------------------------

• No need to set properties repeatedly.
• Easy maintenance.
• Improves code reusability.
• Keeps design separate from logic.


============================================================
CSS (Cascading Style Sheets)
============================================================

------------------------------------------------------------
What is CSS?
------------------------------------------------------------

CSS is used to define the style of HTML elements, such as
colors, fonts, spacing, borders, and layouts.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

CSS (Cascading Style Sheets) is a stylesheet language used to
control the appearance and layout of web pages.

------------------------------------------------------------
Example of CSS File
------------------------------------------------------------

Style.css

body
{
    background-color: lightblue;
}

h1
{
    color: darkblue;
}

.button
{
    background-color: green;
    color: white;
}

------------------------------------------------------------
Linking CSS File
------------------------------------------------------------

<link href="Style.css" rel="stylesheet" />

------------------------------------------------------------
Using CSS
------------------------------------------------------------

<h1>Welcome to ASP.NET</h1>

<input type="button"
class="button"
value="Save" />


============================================================
Difference Between Skin Files and CSS
============================================================

| Skin File                                | CSS                                                       |
| ---------------------------------------- | --------------------------------------------------------- |
| Styles ASP.NET server controls.          | Styles HTML elements.                                     |
| File extension is .skin.                 | File extension is .css.                                   |
| Defines control properties.              | Defines visual styles such as colors, fonts, and layouts. |
| Stored inside the App_Themes folder.     | Can be stored anywhere in the project.                    |
| Used only in ASP.NET applications.       | Used in all web technologies.                             |


============================================================
Working of Themes
============================================================

Theme
│
├── Skin Files
├── CSS Files
└── Images
      │
      ▼
Applied to ASP.NET Page
      │
      ▼
Consistent Website Appearance


============================================================
Advantages of Themes
============================================================

• Consistent website design.
• Easy maintenance.
• Reusable styles.
• Reduces duplicate code.
• Easy to change the website appearance.
• Separates presentation from business logic.


============================================================
Disadvantages
============================================================

• Managing many themes can become complex.
• Skin files apply only to ASP.NET server controls.
• Large themes may increase project size.


============================================================
Exam Definition (2 Marks)
============================================================

Theme:

A collection of Skin files, CSS files, and images used to
provide a consistent appearance to ASP.NET web pages.

------------------------------------------------------------

Skin File:

A .skin file used to define the appearance of ASP.NET server
controls.

------------------------------------------------------------

CSS:

A stylesheet language used to style HTML elements and control
the layout of web pages.


============================================================
5-Mark Summary
============================================================

Themes provide a consistent look and feel for ASP.NET
applications.

A Theme contains Skin Files, CSS Files, and optionally Images.

Skin Files (.skin) define the appearance of ASP.NET server
controls (such as Button, Label, and TextBox).

CSS (.css) styles HTML elements by controlling colors, fonts,
spacing, and layout.

Themes make websites easier to maintain, reusable, and
visually consistent across all pages.
      
      `
    },
    {
      id: 27,
      question: "27. Explain Site Navigation in ASP.NET. Discuss Navigation Controls with examples.",
      answer: "",
      codeExample: `
============================================================
                 Site Navigation in ASP.NET
============================================================

============================================================
What is Site Navigation?
============================================================

Site Navigation in ASP.NET is a feature that helps users move
from one web page to another easily. It provides a structured
way to organize and display links between pages in a website.

ASP.NET provides several Navigation Controls to create menus,
breadcrumbs, and tree structures.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Site Navigation is the process of providing links and menus
that help users navigate between different pages of an
ASP.NET website.


============================================================
Features of Site Navigation
============================================================

• Easy navigation between web pages.
• Improves user experience.
• Organizes website structure.
• Supports hierarchical (parent-child) menus.
• Easy to maintain using a site map.


============================================================
Site Map File
============================================================

ASP.NET uses a Web.sitemap file to define the website
structure.

------------------------------------------------------------
Example (Web.sitemap)
------------------------------------------------------------

xml
<?xml version="1.0" encoding="utf-8"?>

<siteMap xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0">

    <siteMapNode title="Home" url="Home.aspx">

        <siteMapNode title="About" url="About.aspx"/>

        <siteMapNode title="Contact" url="Contact.aspx"/>

    </siteMapNode>

</siteMap>


============================================================
Navigation Controls in ASP.NET
============================================================

ASP.NET provides three main Navigation Controls:

• Menu Control
• TreeView Control
• SiteMapPath Control


============================================================
1. Menu Control
============================================================

------------------------------------------------------------
What is Menu Control?
------------------------------------------------------------

The Menu control displays navigation links in the form of
horizontal or vertical menus.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:Menu ID="Menu1" runat="server">

    <Items>

        <asp:MenuItem Text="Home"
        NavigateUrl="Home.aspx" />

        <asp:MenuItem Text="About"
        NavigateUrl="About.aspx" />

        <asp:MenuItem Text="Contact"
        NavigateUrl="Contact.aspx" />

    </Items>

</asp:Menu>


------------------------------------------------------------
Output
------------------------------------------------------------

Home   About   Contact

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to create menus.
• Supports submenus.
• User-friendly navigation.


============================================================
2. TreeView Control
============================================================

------------------------------------------------------------
What is TreeView Control?
------------------------------------------------------------

The TreeView control displays navigation items in a tree
structure with expandable and collapsible nodes.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:TreeView ID="TreeView1" runat="server">

    <Nodes>

        <asp:TreeNode Text="Courses">

            <asp:TreeNode Text="BCA"/>

            <asp:TreeNode Text="MCA"/>

        </asp:TreeNode>

    </Nodes>

</asp:TreeView>


------------------------------------------------------------
Output
------------------------------------------------------------

Courses

├── BCA

└── MCA

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Displays hierarchical data.
• Supports expand/collapse.
• Easy navigation for large websites.


============================================================
3. SiteMapPath Control
============================================================

------------------------------------------------------------
What is SiteMapPath Control?
------------------------------------------------------------

The SiteMapPath control displays the navigation path
(breadcrumb) from the home page to the current page.

------------------------------------------------------------
Syntax
------------------------------------------------------------

asp
<asp:SiteMapPath
    ID="SiteMapPath1"
    runat="server">
</asp:SiteMapPath>


------------------------------------------------------------
Output
------------------------------------------------------------

Home > Courses > MCA

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Shows the user's current location.
• Easy to return to previous pages.
• Improves navigation.


============================================================
Difference Between Navigation Controls
============================================================

| Control     | Purpose                             |
| ------------| ----------------------------------- |
| Menu        | Displays navigation links as menus. |
| TreeView    | Displays hierarchical navigation.   |
| SiteMapPath | Displays breadcrumb navigation.     |


============================================================
Working of Site Navigation
============================================================

User Opens Website
        │
        ▼
Reads Web.sitemap
        │
        ▼
Navigation Controls
(Menu / TreeView / SiteMapPath)
        │
        ▼
User Navigates Between Pages


============================================================
Advantages of Site Navigation
============================================================

• Easy website navigation.
• Improves user experience.
• Organizes website pages.
• Supports hierarchical menus.
• Easy maintenance using a single sitemap file.


============================================================
Disadvantages
============================================================

• Large websites may have complex sitemap files.
• Incorrect sitemap configuration can break navigation.
• Requires updates when pages are added or removed.


============================================================
Exam Definition (2 Marks)
============================================================

Site Navigation is the technique used in ASP.NET to help
users move between web pages. The main navigation controls
are Menu, TreeView, and SiteMapPath.


============================================================
5-Mark Summary
============================================================

• Site Navigation helps users move easily between web pages.

• ASP.NET uses a Web.sitemap file to define the website
  structure.

• Navigation Controls:

  - Menu – Displays links as horizontal or vertical menus.

  - TreeView – Displays pages in a hierarchical tree
    structure.

  - SiteMapPath – Displays breadcrumb navigation
    (e.g., Home > Courses > MCA).

• These controls improve website organization, navigation,
  and user experience.
      
      `
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "1. ",
      answer: "",
      codeExample: ``
    },

  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>WAD Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
