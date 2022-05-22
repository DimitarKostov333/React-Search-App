
<h1>React Movie App</h1>

<p>Please note that this is a React application sitting on top of a Laravel installation.</p>

<p>Serving the json file via the controller in PHP was deemed redundant when React already has a way of reading json data directly from the file.</p>

<h3>Installation:</h3>
<p>These instructions presume you already have the latest version of Node, Composer and the LAMP stack environment setup on your local machine.</p>

<ul>
    <li>Clone the repository on your local machine.</li>
    <li>Open the bash/command line tool.</li>
    <li>Run the <code>npm install</code> command inside the root folder.</li>
    <li>Once installation of all dependencies is complete you can run <code>php artisan serve</code> to start the laravel server and navigate to the IP address displayed.</li>
    <li>Then you can run <code>npm run watch</code> to compile the js files</li>
    <li>If <code>npm run watch</code> has errors please delete the "node_modules" folder and run the <code>npm install</code> command again.</li>
</ul>

<h3>File Notes</h3>

<p>Most of the code is written in React in the <code>Resources/js</code> folder. The main view is <code>movie_app.blade.php</code></p>
