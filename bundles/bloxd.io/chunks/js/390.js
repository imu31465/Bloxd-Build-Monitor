export const id = 390;
export const ids = [390];
export const modules = {
  61306: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      greasedLinePixelShaderWGSL: () => bk
    });
    var Dk = ik(39412);
    const fk = "greasedLinePixelShader",
      Sk = "var grlColors: texture_2d<f32>;var grlColorsSampler: sampler;uniform grlUseColors: f32;uniform grlUseDash: f32;uniform grlDashArray: f32;uniform grlDashOffset: f32;uniform grlDashRatio: f32;uniform grlVisibility: f32;uniform grlColorsWidth: f32;uniform grl_colorModeAndColorDistributionType: vec2f;uniform grlColor: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\nlet grlColorMode: f32=uniforms.grl_colorModeAndColorDistributionType.x;let grlColorDistributionType: f32=uniforms.grl_colorModeAndColorDistributionType.y;var outColor=vec4(uniforms.grlColor,1.);outColor.a=step(fragmentInputs.grlCounters,uniforms.grlVisibility);if (outColor.a==0.0) {discard;}\nif (uniforms.grlUseDash==1.0) {let dashPosition=(fragmentInputs.grlCounters+uniforms.grlDashOffset) % uniforms.grlDashArray;outColor.a*=ceil(dashPosition-(uniforms.grlDashArray*uniforms.grlDashRatio));if (outColor.a==0.0) {discard;}}\nif (uniforms.grlUseColors==1.) {\n#ifdef GREASED_LINE_COLOR_DISTRIBUTION_TYPE_LINE\nlet grlColor: vec4f=textureSample(grlColors,grlColorsSampler,vec2f(fragmentInputs.grlCounters,0.));\n#else\nlet lookup: vec2f=vec2(fract(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth),1.0-floor(fragmentInputs.grlColorPointer/uniforms.grlColorsWidth));let grlColor: vec4f=textureSample(grlColors,grlColorsSampler,lookup);\n#endif\nif (grlColorMode==COLOR_MODE_SET) {outColor=grlColor;} else if (grlColorMode==COLOR_MODE_ADD) {outColor+=grlColor;} else if (grlColorMode==COLOR_MODE_MULTIPLY) {outColor*=grlColor;}}\n#if !defined(PREPASS) && !defined(ORDER_INDEPENDENT_TRANSPARENCY)\nfragmentOutputs.color=outColor;\n#endif\n#if ORDER_INDEPENDENT_TRANSPARENCY\nif (fragDepth==nearestDepth) {fragmentOutputs.frontColor=vec4f(fragmentOutputs.frontColor.rgb+outColor.rgb*outColor.a*alphaMultiplier,1.0-alphaMultiplier*(1.0-outColor.a));} else {fragmentOutputs.backColor+=outColor;}\n#endif\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
    Dk.d.ShadersStoreWGSL[fk] || (Dk.d.ShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);