<?php include_once('edit/components/head.php'); ?>

	<body class="start test">

		<?php include_once('edit/components/navigation.php'); ?> 
		

	 	<div id="spellcheck" class="editable" style="outline:none;" spellcheck="false">
		    <div class="container" id="main" role="main">	
			    <div class="box-12 tablet-12  contenteditable" contenteditable="true" id="content" style="outline:none;">
			    
			    
			    <?php include_once('edit/components/newDoc.php'); ?> 
			    
			    <?php // include_once('edit/components/intro.php'); ?> 

					
			    </div>
		    </div>
	 	</div><!-- This is where the edibility container suddenly ends, no more from this point. -->

	    <footer role="contentinfo">
	    </footer>

	    <!-- OPEN CLOSE MY DOCUMENTS --> 
		<?php include_once('edit/components/documentList.php'); ?>

<?php include_once('edit/components/scripts.php'); ?>
<?php include_once('edit/components/analyticstracking.php'); ?>
</body>
</html>