export const id = 240;
export const ids = [240];
export const modules = {
  61395: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      DEVTOOLS_SHADERS: () => Ip,
      registerDevtoolsShader: () => Sp
    });
    var Op = cp(40062),
      op = cp(37421);
    const Ip = {
      devtoolsNormal: function(pp) {
        return {
          vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.d)(pp,"normal","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\t\t\t${(0,op.rb)(pp,"world","mat4")}\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${(0,op.i)(pp)} = ${(0,op.sb)(pp,"worldViewProjection")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"position"),"1.0")};\n\t\t\t\t${(0,op.Ab)(pp,"vNormal")} = normalize((${(0,op.sb)(pp,"world")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"normal"),"0.0")}).xyz);\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,op.tb)(pp,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t\n\t\t\t\t${(0,op.A)(pp,"vec3","normalColor",`abs(${(0,op.R)(pp,"vNormal")})`)}\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsWhite: function(pp) {
        return {
          vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${(0,op.i)(pp)} = ${(0,op.sb)(pp,"worldViewProjection")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"position"),"1.0")};\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
        }
      },
      devtoolsDepth: function(pp) {
        return {
          vertex: `\n\t\t\t${(0,op.d)(pp,"position","vec3")}\n\t\t\t${(0,op.rb)(pp,"worldViewProjection","mat4")}\n\t\t\t${(0,op.rb)(pp,"world","mat4")}\n\t\t\t${(0,op.rb)(pp,"cameraPosition","vec3")}\n\t\t\t${(0,op.tb)(pp,"vDepth","float","mediump")}\n\n\t\t\t${(0,op.vb)(pp,`\n\t\t\t\t${(0,op.i)(pp)} = ${(0,op.sb)(pp,"worldViewProjection")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"position"),"1.0")};\n\t\t\t\t${(0,op.A)(pp,"vec3","worldPosition",`(${(0,op.sb)(pp,"world")} * ${(0,op.j)(pp,"vec4",(0,op.zb)(pp,"position"),"1.0")}).xyz`)}\n\t\t\t\t${(0,op.Ab)(pp,"vDepth")} = distance(worldPosition, ${(0,op.sb)(pp,"cameraPosition")});\n\t\t\t`)}\n\t\t`,
          fragment: `\n\t\t\t${(0,op.tb)(pp,"vDepth","float","mediump")}\n\t\t\t${(0,op.rb)(pp,"maxDepth","float")}\n\t\t\t${(0,op.rb)(pp,"minDepth","float")}\n\n\t\t\t${(0,op.N)(pp,`\n\t\t\t\t\n\t\t\t\t${(0,op.A)(pp,"float","normalizedDepth",`clamp((${(0,op.R)(pp,"vDepth")} - ${(0,op.sb)(pp,"minDepth")}) / (${(0,op.sb)(pp,"maxDepth")} - ${(0,op.sb)(pp,"minDepth")}), 0.0, 1.0)`)}\n\t\t\t\t${(0,op.A)(pp,"float","gray","1.0 - normalizedDepth")}\n\t\t\t\t${(0,op.I)(pp)} = ${(0,op.j)(pp,"vec4","gray","gray","gray","1.0")};\n\t\t\t`)}\n\t\t`
        }
      }
    };

    function Sp(pp, ip) {
      const {
        vertex: cp,
        fragment: op
      } = Ip[pp](ip), Sp = Op.b.GetShadersStore(ip);
      Sp[`${pp}VertexShader`] = cp, Sp[`${pp}FragmentShader`] = op
    }
  },
  37421: (pp, ip, cp) => {
    cp.d(ip, {
      $: () => hp,
      A: () => Dp,
      Ab: () => Mp,
      B: () => mp,
      D: () => lp,
      G: () => Ip,
      I: () => Bp,
      K: () => Jp,
      N: () => dp,
      R: () => Cp,
      S: () => Xp,
      V: () => fp,
      Y: () => op,
      Z: () => Qp,
      b: () => Op,
      cb: () => np,
      d: () => Up,
      db: () => kp,
      eb: () => jp,
      g: () => Rp,
      gb: () => ap,
      i: () => tp,
      ib: () => Fp,
      j: () => Lp,
      jb: () => bp,
      l: () => Np,
      mb: () => ep,
      n: () => Tp,
      qb: () => Yp,
      r: () => Pp,
      rb: () => vp,
      sb: () => Ep,
      tb: () => wp,
      v: () => Wp,
      vb: () => Hp,
      w: () => Ap,
      zb: () => qp
    });
    const Op = {
      GLSL: 0,
      WGSL: 1
    };

    function op(pp) {
      return pp === Op.WGSL
    }

    function Ip(pp, ip, cp) {
      return op(pp) ? cp : ip
    }
    const Sp = new Map([
      ["int", "i32"],
      ["float", "f32"],
      ["vec2", "vec2f"],
      ["vec3", "vec3f"],
      ["vec4", "vec4f"],
      ["mat2", "mat2x2f"],
      ["mat3", "mat3x3f"],
      ["mat4", "mat4x4f"]
    ]);

    function xp(pp, ip) {
      if (!op(pp)) return ip;
      const cp = Sp.get(ip);
      if (!cp) throw new Error(`No WGSL name for shader type "${ip}"`);
      return cp
    }

    function Lp(pp, ip) {
      for (var cp = arguments.length, Op = new Array(cp > 2 ? cp - 2 : 0), op = 2; op < cp; op++) Op[op - 2] = arguments[op];
      return `${xp(pp,ip)}(${Op.join(", ")})`
    }

    function Yp(pp, ip) {
      return Lp(pp, "int", ip)
    }

    function Dp(pp, ip, cp, Op, Ip) {
      return op(pp) ? `var ${cp}: ${xp(pp,ip)} = ${Op};` : `${yp(pp,Ip)}${ip} ${cp} = ${Op};`
    }

    function Ap(pp, ip, cp) {
      return op(pp) ? `var ${cp}: ${xp(pp,ip)};` : `${ip} ${cp};`
    }

    function Pp(pp, ip, cp, Op) {
      return op(pp) ? `const ${cp}: ${xp(pp,ip)} = ${Op};` : `const ${ip} ${cp} = ${Op};`
    }

    function Wp(pp, ip, cp, Op, Ip) {
      if (op(pp)) {
        return `fn ${cp}(${Op.map((ip=>`${ip.name}: ${xp(pp,ip.type)}`)).join(", ")}) -> ${xp(pp,ip)} {${Ip}}`
      }
      return `${ip} ${cp}(${Op.map((pp=>`${pp.type} ${pp.name}`)).join(", ")}) {${Ip}}`
    }

    function yp(pp, ip) {
      return !ip || op(pp) ? "" : `${ip} `
    }

    function Up(pp, ip, cp, Op) {
      return op(pp) ? `attribute ${ip}: ${xp(pp,cp)};` : `attribute ${yp(pp,Op)}${cp} ${ip};`
    }

    function wp(pp, ip, cp, Op) {
      return op(pp) ? `varying ${ip}: ${xp(pp,cp)};` : `varying ${yp(pp,Op)}${cp} ${ip};`
    }

    function vp(pp, ip, cp) {
      return op(pp) ? `uniform ${ip}: ${xp(pp,cp)};` : `uniform ${cp} ${ip};`
    }

    function tp(pp) {
      return op(pp) ? "vertexOutputs.position" : "gl_Position"
    }

    function Hp(pp, ip) {
      return op(pp) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ip}}` : `void main() {${ip}}`
    }

    function dp(pp, ip) {
      return op(pp) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ip}}` : `void main() {${ip}}`
    }

    function ep(pp, ip, cp) {
      if (op(pp)) {
        return [`var ${ip}Sampler: sampler;`, `var ${ip}: ${"2dArray"===cp?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
      }
      return `uniform highp ${"2dArray"===cp?"sampler2DArray":"sampler2D"} ${ip};`
    }

    function jp(pp, ip, cp) {
      return op(pp) ? `textureSample(${ip}, ${ip}Sampler, ${cp})` : `texture2D(${ip}, ${cp})`
    }

    function kp(pp, ip, cp, Op, Ip) {
      if (op(pp)) {
        return `${Ip?"textureSampleLevel":"textureSample"}(${ip}, ${ip}Sampler, ${cp}, ${Yp(pp,`round(${Op})`)}${Ip?`, ${Ip}`:""})`
      }
      const Sp = Lp(pp, "vec3", cp, Op);
      return Ip ? `textureLod(${ip}, ${Sp}, ${Ip})` : `texture(${ip}, ${Sp})`
    }

    function mp(pp) {
      return op(pp) ? "!baseColor\\=\\w+\\(diffuseSampler,diffuseSamplerSampler,fragmentInputs\\.vDiffuseUV\\+uvOffset\\);" : "!baseColor\\=\\w+\\(diffuseSampler,vDiffuseUV\\+uvOffset\\);"
    }

    function Rp(pp) {
      return op(pp) ? {
        "!varying vMainUV1: vec2f;": "centroid varying vMainUV1: vec2f;"
      } : {
        "!varying vec2 vMainUV1;": "#ifdef WEBGL2\ncentroid varying vec2 vMainUV1;\n#else\nvarying vec2 vMainUV1;\n#endif"
      }
    }

    function qp(pp, ip) {
      return op(pp) ? `vertexInputs.${ip}` : ip
    }

    function Mp(pp, ip) {
      return op(pp) ? `vertexOutputs.${ip}` : ip
    }

    function Cp(pp, ip) {
      return op(pp) ? `fragmentInputs.${ip}` : ip
    }

    function Ep(pp, ip) {
      return op(pp) ? `uniforms.${ip}` : ip
    }

    function Xp(pp, ip, cp) {
      return op(pp) ? `frame.${ip}` : cp
    }

    function lp(pp) {
      return op(pp) ? "scene.vEyePosition" : "vEyePosition"
    }

    function Qp(pp) {
      return op(pp) ? "mesh.visibility" : "visibility"
    }

    function Jp(pp) {
      return op(pp) ? "fragmentInputs.position" : "gl_FragCoord"
    }

    function Bp(pp) {
      return op(pp) ? "fragmentOutputs.color" : "gl_FragColor"
    }

    function Np(pp, ip) {
      return op(pp) ? `dpdx(${ip})` : `dFdx(${ip})`
    }

    function Tp(pp, ip) {
      return op(pp) ? `dpdy(${ip})` : `dFdy(${ip})`
    }

    function fp(pp, ip) {
      return op(pp) ? `inverseSqrt(${ip})` : `inversesqrt(${ip})`
    }

    function bp(pp, ip, cp, Op) {
      return op(pp) ? `select(${Op}, ${cp}, ${ip})` : `((${ip}) ? (${cp}) : (${Op}))`
    }

    function hp(pp, ip, cp) {
      return op(pp) ? `((${ip}) - (${cp}) * floor((${ip}) / (${cp})))` : `mod(${ip}, ${cp})`
    }

    function ap(pp, ip, cp) {
      return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.a);` : `${ip}.rgb = ${cp};`
    }

    function np(pp, ip, cp) {
      return op(pp) ? `${ip} = vec4f(${ip}.rgb * (${cp}), ${ip}.a);` : `${ip}.rgb *= ${cp};`
    }

    function Fp(pp, ip, cp) {
      return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.w);` : `${ip}.xyz = ${cp};`
    }
  },
  40062: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op
    });
    class Op {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersRepository : Op.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.ShadersStore : Op.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? Op.IncludesShadersStore : Op.IncludesShadersStoreWGSL
      }
    }
    Op.ShadersRepository = "src/Shaders/", Op.ShadersStore = {}, Op.IncludesShadersStore = {}, Op.ShadersRepositoryWGSL = "src/ShadersWGSL/", Op.ShadersStoreWGSL = {}, Op.IncludesShadersStoreWGSL = {}
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);