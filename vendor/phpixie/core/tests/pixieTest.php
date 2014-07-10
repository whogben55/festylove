<?php
namespace PixieTest {
	require_once(ROOT . '/vendor/phpixie/core/classes/PHPixie/Pixie.php');
	class Pixie extends \PHPixie\Pixie { 
		public $basepath = '/tester/';
		protected $modules = array(
			'mod'=>'\PixieTest\PixieMod'
		);
		protected $instance_classes = array(
		'config'  => '\PixieTest\Config',
		'debug'   => '\PHPixie\Debug',
		'router'  => '\PHPixie\Router'
	);
	}
	class PixieMod { }
	class Config {
		public function get() {
			return array();
		}
	}
	class TestController extends \PHPixie\Controller {}
}
namespace {
	/**
	 * Generated by PHPUnit_SkeletonGenerator 1.2.0 on 2013-04-15 at 21:57:25.
	 */
	class PixieTest extends PHPUnit_Framework_TestCase
	{
		/**
		 * @var Pixie
		 */
		protected $object;

		/**
		 * Sets up the fixture, for example, opens a network connection.
		 * This method is called before a test is executed.
		 */
		protected function setUp()
		{
			$this->object = new \PixieTest\Pixie();
			$this->object->bootstrap(sys_get_temp_dir());
		}
		
		public function testBootstrap() {
			$this->assertEquals("PixieTest\\", $this->object->app_namespace);
			$this->assertEquals(true, $this->object->mod instanceof \PixieTest\PixieMod );
			$this->assertEquals(true, $this->object->config instanceof \PixieTest\Config );
			$this->assertEquals('/', substr($this->object->root_dir,-1));
		}
		
		public function testArr() {
			$this->assertEquals('a', $this->object->arr(array('c'=>'a'),'c','b'));
			$this->assertEquals('b', $this->object->arr(array('c'=>'a'),'d','b'));
		}
		
		public function testHttp_Request() {
			$this->object->router->add(new \PHPixie\Route('/', 'default', '/<controller>/<action>', array()));
			$_SERVER['REQUEST_URI'] = "/home/index";
			$_POST['post'] = "test";
			$_GET['get'] = "test";
			$_SERVER['REQUEST_METHOD'] = "POST";
			$_COOKIE['fairy'] = 'test';
			$req = $this->object->http_request();
			$this->assertEquals($req->get('get'), 'test');
			$this->assertEquals($req->post('post'), 'test');
			$this->assertEquals($req->server('REQUEST_METHOD'), 'POST');
			$this->assertEquals($req->method, 'POST');
			$this->assertEquals($req->param('controller'), 'home');
			$this->assertEquals($req->param('action'), 'index');
			$this->assertAttributeEquals(
				array('fairy' => 'test'),
				'_cookie',
				$req
			);
		}
		
		public function test_base_Http_Request() {
			$this->object->router->add(new \PHPixie\Route('/', 'default', '/<controller>', array('action' => 'test')));
            
			$_SERVER['REQUEST_URI'] = "/home/index";
			$_POST['post'] = "test";
			$_GET['get'] = "test";
			$_SERVER['REQUEST_METHOD'] = "POST";
			$_COOKIE['fairy'] = 'test';
            $this->object->basepath='/home/';
			$req = $this->object->http_request();
			$this->assertEquals($req->get('get'), 'test');
			$this->assertEquals($req->post('post'), 'test');
			$this->assertEquals($req->server('REQUEST_METHOD'), 'POST');
			$this->assertEquals($req->method, 'POST');
			$this->assertEquals($req->param('controller'), 'index');
			$this->assertEquals($req->param('action'), 'test');
			$this->assertAttributeEquals(
				array('fairy' => 'test'),
				'_cookie',
				$req
			);
		}
        
		public function testFind_file() {
			$dir = $this->object->root_dir.'/assets';
			if(!is_dir($dir))
				mkdir($dir);
			file_put_contents($dir.'/test.php','');
			$file = $this->object->find_file('','test');
			$this->assertEquals(true, strpos($file, 'test.php') > 0);
			unlink($dir.'/test.php');
			rmdir($dir);
		}
		
		public function testResponse() {
			$this->assertEquals('PHPixie\Response', get_class($this->object->response()));
		}
		
		public function testRoute() {
			$route = $this->object->route('a','/',array(),'POST');
			$this->assertEquals('PHPixie\Route', get_class($route));
			$this->assertEquals('POST', $route->methods[0]);
		}
		public function testRequest() {
			$this->assertEquals('PHPixie\Request', get_class($this->object->request(null)));
		}
		public function testController() {
			$this->assertEquals('PixieTest\TestController', get_class($this->object->controller('\PixieTest\TestController')));
		}
		public function testView() {
			$mock = $this->getMock('\PixieTest\Pixie', array('find_file'));
			$mock->expects($this->once())
                 ->method('find_file')
                 ->will($this->returnValue('test'));
			$this->assertEquals('PHPixie\View', get_class($mock->view('test')));
		}
		
		public function testView_Helper() {
			$this->assertEquals('PHPixie\View\Helper', get_class($this->object->view_helper()));
		}
	}
}
