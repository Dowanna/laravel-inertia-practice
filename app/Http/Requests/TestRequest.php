<?php

/**
 * アカウント編集リクエスト
 */
class Request
{
	/**
	 * コンストラクタ
	 */
	function __construct()
	{
		$this->setType();
	}

	/**
	 * 入力状態判定
	 * @var bool true：入力状態、false：入力状態以外
	 */
	public $is_input = false;

	/**
	 * 確認状態判定
	 * @var bool true：確認状態、false：確認状態以外
	 */
	public $is_confirm = false;

	/**
	 * 完了状態
	 * @var bool true：完了状態、false：完了状態以外
	 */
	public $is_complete = false;

	/**
	 * 機能コードを取得
	 * @return string 機能コード
	 */
	public function getFunctionCode()
	{
		return 'LS-07-01';
	}

	public function only()
	{
		return [
			"is_input" => true,
			"is_complete" => false,
		];
	}

	/**
	 * 管理者の操作可否
	 * @return boolean treu：可能、false：不可
	 */
	public function canAdmin()
	{
		return false;
	}

	/**
	 * リクエストタイプを設定
	 */
	public function setType()
	{
		$this->is_input = true;
	}
}
