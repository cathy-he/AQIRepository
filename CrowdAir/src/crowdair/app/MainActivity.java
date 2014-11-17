package crowdair.app;

import android.os.Bundle;
import android.view.View;

import org.apache.cordova.*;

public class MainActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
     
        
        
        
        super.loadUrl("file:///android_asset/www/index.html");
        
     // Display vertical scrollbar and hide horizontal scrollBar
        super.appView.setVerticalScrollBarEnabled(true);
        super.appView.setHorizontalScrollBarEnabled(true);
        // set scrollbar style
        super.appView.setScrollBarStyle(View.SCROLLBARS_INSIDE_OVERLAY);
        
        
    }
}