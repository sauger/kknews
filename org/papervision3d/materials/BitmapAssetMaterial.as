/*
 *  PAPER    ON   ERVIS  NPAPER ISION  PE  IS ON  PERVI IO  APER  SI  PA
 *  AP  VI  ONPA  RV  IO PA     SI  PA ER  SI NP PE     ON AP  VI ION AP
 *  PERVI  ON  PE VISIO  APER   IONPA  RV  IO PA  RVIS  NP PE  IS ONPAPE
 *  ER     NPAPER IS     PE     ON  PE  ISIO  AP     IO PA ER  SI NP PER
 *  RV     PA  RV SI     ERVISI NP  ER   IO   PE VISIO  AP  VISI  PA  RV3D
 *  ______________________________________________________________________
 *  papervision3d.org � blog.papervision3d.org � osflash.org/papervision3d
 */

/*
 * Copyright 2006 (c) Carlos Ulloa Matesanz, noventaynueve.com.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// __________________________________________________________________________ BITMAP ASSET MATERIAL

package org.papervision3d.materials
{
import flash.display.BitmapData;
import flash.utils.describeType;
import flash.utils.getDefinitionByName;


/**
* The BitmapAssetMaterial class creates a texture from a Bitmap library symbol.
*
* Materials collects data about how objects appear when rendered.
*
*/
public class BitmapAssetMaterial extends BitmapMaterial
{
	// ______________________________________________________________________ NEW

	/**
	* The BitmapAssetMaterial class creates a texture from a Bitmap library asset.
	*
	* @param	id					The linkage name of the Bitmap symbol in the library.
	* @param	initObject			[optional] - An object that contains additional properties with which to populate the newly created material.
	*/

	public function BitmapAssetMaterial( id:String, initObject:Object=null )
	{
		super( id, initObject );
	}


	// ______________________________________________________________________ CREATE BITMAP

	/**
	* [internal-use]
	*
	* @param	asset
	* @return
	*/
	protected override function createBitmap( asset:* ):BitmapData
	{
		// Remove previous bitmap
		if( this._texture != asset )
		{
			_count[this._texture]--;

			var prevBitmap:BitmapData = _library[this._texture];

			if( prevBitmap && _count[this._texture] == 0 )
				prevBitmap.dispose();
		}

		// Retrieve from library or...
		var bitmapOk :BitmapData;
		var bitmap   :BitmapData = _library[asset];

		// ...loadBitmap
		if( ! bitmap )
		{
			var BitmapAsset:Class = getDefinitionByName( asset ) as Class;

			var description:XML = describeType( BitmapAsset );

			// Check if Flash 9 Alpha
			if( description..constructor.length() == 0 )
				bitmap = new BitmapAsset() as BitmapData;
			else
				bitmap = new BitmapAsset( 0, 0 ) as BitmapData;

			bitmapOk = correctBitmap( bitmap, true );

			_library[asset] = bitmapOk;
			_count[asset] = 0;
		}
		else
		{
			bitmapOk = bitmap;
			_count[asset]++;
		}

		return bitmapOk;
	}

	static private var _library :Object = new Object();
	static private var _count   :Object = new Object();
}
}