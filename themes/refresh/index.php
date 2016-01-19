<?php get_header(); ?>

<div class="content">

    <!-- Put real content in here -->

    <h1>HTML Ipsum Presents</h1>

    <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

    <img src="http://placehold.it/350x150">

    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean assa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

    <h2>Header Level 2</h2>

    <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
    </ol>

    <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

    <h3>Header Level 3</h3>

    <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
    </ul>

    <pre><code>
        #header h1 a { 
            display: block; 
            width: 300px; 
            height: 80px; 
        }
    </code></pre>

    <form action="#" method="post">
        <fieldset>
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your full name" />

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email address" />

            <label for="message">Message:</label>
            <textarea id="message" placeholder="What's on your mind?"></textarea>

            <input type="submit" value="Send message" />

        </fieldset>
    </form>

    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean assa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>

    <table class="data responsive">
        <tr>
            <th>Entry Header 1</th>
            <th>Entry Header 2</th>
            <th>Entry Header 3</th>
            <th>Entry Header 4</th>
        </tr>
        <tr>
            <td>Entry First Line 1</td>
            <td>Entry First Line 2</td>
            <td>Entry First Line 3</td>
            <td>Entry First Line 4</td>
        </tr>
        <tr>
            <td>Entry Line 1</td>
            <td>Entry Line 2</td>
            <td>Entry Line 3</td>
            <td>Entry Line 4</td>
        </tr>
        <tr>
            <td>Entry Last Line 1</td>
            <td>Entry Last Line 2</td>
            <td>Entry Last Line 3</td>
            <td>Entry Last Line 4</td>
        </tr>
    </table>

</div>

<?php get_footer(); ?>
