<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2014 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace SiteApplication\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
    	$response_xml_data = file_get_contents('http://www.susep.gov.br/rss/RSS');

        $xml = simplexml_load_string($response_xml_data);
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);

        return new ViewModel(array('news_01' => $array));
    }
}
