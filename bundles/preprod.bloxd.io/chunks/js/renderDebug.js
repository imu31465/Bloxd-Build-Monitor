export const id = 56;
export const ids = [56];
export const modules = {
  5171: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => EU
    });
    var cU = zU(27),
      yU = zU(31),
      QU = zU(1310),
      AU = zU(3099);
    const FU = 3e4,
      oU = 1e3;

    function DU() {
      return "visible" === document.visibilityState && "inGame" === cU.e.get("gameState") && (0, QU.w)()
    }

    function EU(UU, XU) {
      (0, AU.t)() || function(UU, XU, zU) {
        let cU = 0;
        const yU = setInterval((() => {
          XU() && (cU += oU, cU >= UU && (clearInterval(yU), zU()))
        }), oU)
      }(FU, DU, (() => {
        XU().then((() => {
          UU(`saved for the player after ${FU/1e3} s of play`), (0, AU.A)(), yU.k.UY("chat", {
            content: [{
              str: "Saved a debug file to your downloads: please send it to us with a screenshot of the game.",
              style: {
                color: "#ffd84a"
              }
            }]
          })
        }))
      }))
    }
  },
  5164: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      installRenderDebug: () => Yz,
      renderDebugPlayable: () => Iz,
      startRenderDebug: () => Nz,
      waitForDraw: () => pz
    });
    var cU = zU(1896),
      yU = zU(5171),
      QU = zU(3099);
    const AU = ["+x", "-x", "+y", "-y", "+z", "-z", "dir6", "dir7"];

    function FU(UU) {
      return 7 & UU
    }

    function oU(UU) {
      return UU >>> 11 & 1
    }

    function DU(UU) {
      return [1 + (UU >>> 18 & 63), 1 + (UU >>> 24 & 63)]
    }

    function EU(UU, XU) {
      const [zU, , cU] = UU, yU = FU(cU), QU = function(UU, XU, zU) {
        return XU + (1 === (22 >>> UU & 1) ? 4 - zU : zU) & 3
      }(yU, oU(cU), XU), AU = yU >>> 1, [EU, YU] = DU(zU), NU = 1 === QU || 2 === QU ? EU : 0, IU = QU >= 2 ? YU : 0, pU = [63 & zU, zU >>> 6 & 63, zU >>> 12 & 63];
      return pU[2 === AU ? 0 : 2] += NU, pU[1 === AU ? 0 : 1] += IU, pU
    }

    function YU(UU) {
      const XU = Math.max(...DU(UU[0]));
      return 1 === XU ? "1" : XU <= 4 ? "2-4" : XU <= 16 ? "5-16" : "17-64"
    }
    const NU = 16;

    function IU(UU) {
      let XU = 2166136261;
      for (let zU = 0; zU < UU.length; zU++) XU = Math.imul(XU ^ UU[zU], 16777619);
      return XU >>> 0
    }

    function pU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 12;
      const cU = Math.max(0, XU - zU),
        yU = Math.min(UU.length, XU + zU),
        QU = [];
      for (let AU = cU; AU < yU; AU++) {
        const zU = UU[AU].toString(16).padStart(2, "0");
        QU.push(AU === XU ? `[${zU}]` : zU)
      }
      return QU.join(" ")
    }
    const aU = {
        NO_ERROR: 0,
        POINTS: 0,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        INTERLEAVED_ATTRIBS: 35980,
        RASTERIZER_DISCARD: 35977,
        STREAM_READ: 35041,
        CURRENT_PROGRAM: 35725,
        LINK_STATUS: 35714,
        VERTEX_SHADER: 35633,
        FRAGMENT_SHADER: 35632,
        DEPTH_FUNC: 2932,
        DEPTH_CLEAR_VALUE: 2931,
        SAMPLES: 32937,
        DRAW_FRAMEBUFFER: 36009,
        DEPTH_ATTACHMENT: 36096,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_INDEX: 35386,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_ATTRIBS: 34921,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        CURRENT_VERTEX_ATTRIB: 34342,
        TEXTURE_2D: 3553,
        TEXTURE0: 33984,
        ACTIVE_TEXTURE: 34016,
        TEXTURE_BINDING_2D: 32873,
        READ_FRAMEBUFFER: 36008,
        READ_FRAMEBUFFER_BINDING: 36010,
        COLOR_ATTACHMENT0: 36064,
        RGBA_INTEGER: 36249,
        UNSIGNED_INT: 5125,
        RGBA32UI: 36208,
        RGBA16UI: 36214,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        FLOAT: 5126,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676
      },
      tU = "_vs2fs_location0";
    const gU = 0,
      kU = 4,
      GU = 6,
      BU = [0, 1, 2, 0, 2, 3],
      ZU = 2048,
      RU = 4,
      PU = 256,
      WU = 64,
      dU = 268435456,
      LU = 65536,
      eU = /^#version [^\n]*\/\/ program (\S+)$/m;

    function CU(UU) {
      return null === UU.name ? `#${UU.id}` : `#${UU.id} ${UU.name}`
    }
    const wU = [],
      qU = new WeakMap,
      OU = new WeakMap,
      SU = {
        context: null,
        inProbe: !1,
        pendingCheck: null,
        shadowBytes: 0,
        uncopied: 0
      };
    let rU = 1;
    const uU = new WeakMap;

    function fU(UU) {
      if (null === UU) return 0;
      let XU = uU.get(UU);
      return void 0 === XU && (XU = rU++, uU.set(UU, XU)), XU
    }
    class iU {
      constructor(UU, XU) {
        this.print = UU, this.now = XU, this.shown = 0, this.uD = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.cY = [], this.dropped = 0
      }
      line(UU) {
        const XU = this.now();
        if (XU - this.second >= 1e3 && (this.second = XU, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.uD++, void this.store(UU);
        this.shown++, this.inSecond++, this.print(400 === this.shown ? `${UU} (the last line here: the rest go to bloxdDebug.save())` : UU)
      }
      keep(UU) {
        this.sections++, this.store(UU)
      }
      store(UU) {
        this.cY.push(`${new Date(Date.now()).toISOString()} ${UU}`), this.cY.length > 2e4 && (this.cY.shift(), this.dropped++)
      }
      dump() {
        return [`${this.shown} lines logged (above); kept here: ${this.uD} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.cY].join("\n")
      }
    }
    let HU = null;

    function MU() {
      if (null === HU) {
        const UU = new iU((UU => {
          (0, QU.l)("render", UU)
        }), (() => performance.now()));
        (0, QU.h)("render", (() => UU.dump())), HU = UU
      }
      return HU
    }

    function vU(UU) {
      MU().line(UU)
    }

    function VU(UU) {
      MU().keep(UU)
    }

    function sU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4096;
      return UU.length <= XU ? UU : `${UU.slice(0,XU)}... (${UU.length-XU} more characters)`
    }

    function nU(UU, XU, zU, cU, yU, QU) {
      const AU = SU.pendingCheck;
      if (null === AU) return;
      const FU = "undefined" !== typeof WebGL2RenderingContext && UU instanceof WebGL2RenderingContext,
        oU = {
          gl: UU,
          program: zU,
          call: cU,
          Qt: yU,
          instances: QU,
          attributes: [],
          group: -1,
          chunk: "",
          pages: []
        };
      if (AU.draws.push(oU), FU) try {
        const cU = function(UU) {
          const XU = [],
            zU = new Map,
            cU = Math.min(16, UU.getParameter(aU.MAX_VERTEX_ATTRIBS));
          for (let yU = 0; yU < cU; yU++) {
            if (!UU.getVertexAttrib(yU, aU.VERTEX_ATTRIB_ARRAY_ENABLED)) continue;
            const cU = UU.getVertexAttrib(yU, aU.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING),
              QU = UU.getVertexAttribOffset(yU, aU.VERTEX_ATTRIB_ARRAY_POINTER),
              AU = UU.getVertexAttrib(yU, aU.VERTEX_ATTRIB_ARRAY_STRIDE),
              FU = UU.getVertexAttrib(yU, aU.VERTEX_ATTRIB_ARRAY_SIZE),
              oU = UU.getVertexAttrib(yU, aU.VERTEX_ATTRIB_ARRAY_TYPE),
              DU = "VERTEX_ATTRIB_ARRAY_INTEGER" in UU && UU.getVertexAttrib(yU, aU.VERTEX_ATTRIB_ARRAY_INTEGER),
              EU = "VERTEX_ATTRIB_ARRAY_DIVISOR" in UU ? UU.getVertexAttrib(yU, aU.VERTEX_ATTRIB_ARRAY_DIVISOR) : 0;
            zU.set(yU, {
              buffer: cU,
              offset: QU,
              stride: AU
            }), XU.push(`@${yU} buf#${fU(cU)} +${QU} stride ${AU} ${FU}x0x${oU.toString(16)}${DU?" int":""} div ${EU}`)
          }
          return {
            lines: XU,
            byLocation: zU
          }
        }(UU);
        if (oU.attributes = cU.lines, "inst" === zU.terrain) {
          const {
            group: yU,
            chunk: FU
          } = function(UU, XU, zU) {
            const cU = XU.get(GU),
              yU = UU.getVertexAttrib(GU, aU.CURRENT_VERTEX_ATTRIB),
              QU = cU ? `+${cU.offset}` : yU ? Array.from(yU).slice(0, 3).join(",") : "?";
            let AU = zU.groups.get(QU);
            return void 0 === AU && (AU = zU.groups.size, zU.groups.set(QU, AU)), {
              group: AU,
              chunk: QU
            }
          }(UU, cU.byLocation, AU);
          oU.group = yU, oU.chunk = FU;
          for (const UU of [gU, kU]) {
            var DU;
            const XU = null === (DU = cU.byLocation.get(UU)) || void 0 === DU ? void 0 : DU.buffer;
            XU && oU.pages.push({
              kind: "buf",
              buffer: XU
            })
          }! function(UU, XU, zU, cU, yU, QU, AU) {
            const FU = cU.get(gU),
              oU = AU.parts.get(QU);
            if (void 0 === oU && AU.parts.size >= RU) return;
            const DU = Math.min(yU, WU, PU - (null !== oU && void 0 !== oU ? oU : 0));
            if (null === FU || void 0 === FU || !FU.buffer || DU <= 0) return;
            const EU = mU(UU, XU, zU);
            if (!EU) return;
            const YU = FU.stride || 12,
              NU = KU(UU, FU.buffer, FU.offset, (DU - 1) * YU + 12),
              IU = new DataView(NU.buffer),
              pU = function(UU, XU) {
                const zU = function(UU) {
                    const XU = hU.get(UU);
                    if (void 0 !== XU && (null === XU || UU.isProgram(XU))) return XU;
                    SU.inProbe = !0;
                    let zU = null;
                    try {
                      zU = lU(UU, bU, TU, "fed", "the record feed")
                    } finally {
                      SU.inProbe = !1
                    }
                    return hU.set(UU, zU), zU
                  }(UU),
                  cU = zU ? jU(UU, zU, XU, (() => {
                    UU.drawArraysInstanced(aU.POINTS, 0, 1, XU)
                  }), "decode probe input (the record feed)") : null;
                return cU ? new Uint32Array(cU.buffer) : null
              }(UU, DU);
            pU || AU.fed.failed++;
            const tU = jU(UU, EU, 4 * DU, (() => {
              UU.drawArraysInstanced(aU.POINTS, 0, 4, DU)
            }));
            if (!tU) return;
            AU.parts.set(QU, (null !== oU && void 0 !== oU ? oU : 0) + DU);
            for (let aU = 0; aU < DU; aU++) {
              const UU = aU * YU,
                XU = [IU.getUint32(UU, !0), IU.getUint32(UU + 4, !0), IU.getUint32(UU + 8, !0)],
                zU = pU ? [pU[3 * aU], pU[3 * aU + 1], pU[3 * aU + 2]] : XU;
              pU && (AU.fed.records++, zU.some(((UU, zU) => UU !== XU[zU])) && (AU.fed.differing++, AU.fed.first.length < 8 && AU.fed.first.push(`part ${QU} instance ${aU}: fed ${zU.map(yX).join(" ")} buffer ${XU.map(yX).join(" ")}`)));
              for (let cU = 0; cU < 4; cU++) {
                const UU = 3 * (4 * aU + cU);
                AU.vertices.push({
                  record: zU,
                  slot: cU,
                  group: QU,
                  gpu: [tU[UU], tU[UU + 1], tU[UU + 2]]
                })
              }
            }
          }(UU, XU, zU, cU.byLocation, QU, yU, AU)
        } else {
          const cU = UX(UU, XU, 16),
            QU = UX(UU, XU, 8);
          for (const UU of [cU, QU]) UU && oU.pages.push({
            kind: "tex",
            texture: UU
          });
          cU && function(UU, XU, zU, cU, yU, QU) {
            if (QU.parts.size >= RU) return;
            const AU = mU(UU, XU, zU);
            if (!AU) return;
            let FU = 6 * PU;
            const oU = [];
            for (const [IU, pU] of yU) {
              const UU = Math.min(pU, FU, Math.max(6, 6 * Math.floor(PU / yU.length)));
              UU > 0 && (oU.push([IU, UU]), FU -= UU)
            }
            const DU = oU.reduce(((UU, XU) => {
                let [, zU] = XU;
                return UU + zU
              }), 0),
              EU = jU(UU, AU, DU, (() => {
                for (const [XU, zU] of oU) UU.drawArrays(aU.POINTS, XU, zU)
              }));
            if (!EU) return;
            let YU = 0;
            for (const [IU, pU] of oU) {
              const XU = Math.floor(IU / 6),
                zU = Math.floor((IU + pU - 1) / 6) - XU + 1,
                yU = XX(UU, cU, ZU, XU, zU);
              for (let UU = IU; UU < IU + pU; UU++, YU++) {
                var NU;
                const zU = 4 * (Math.floor(UU / 6) - XU),
                  cU = [yU[zU], yU[zU + 1], yU[zU + 2]];
                QU.parts.set(yU[zU + 3], (null !== (NU = QU.parts.get(yU[zU + 3])) && void 0 !== NU ? NU : 0) + (UU % 6 === 0 ? 1 : 0)), QU.vertices.push({
                  record: cU,
                  slot: BU[UU % 6],
                  group: yU[zU + 3],
                  gpu: [EU[3 * YU], EU[3 * YU + 1], EU[3 * YU + 2]]
                })
              }
            }
          }(UU, XU, zU, cU, yU, AU)
        }
      } catch (EU) {
        vU(`decode probe failed on program ${CU(zU)}: ${String(EU)}`)
      }
    }

    function mU(UU, XU, zU) {
      if (void 0 !== zU.probe) return zU.probe && xU(UU, XU, zU.probe), zU.probe;
      zU.probe = null, SU.inProbe = !0;
      try {
        zU.probe = function(UU, XU) {
          return lU(UU, (zU = XU.vertex, zU.replace(`\nvec3 ${tU} = vec3(0);\n`, `\nout vec3 ${tU};\n`)), XU.fragment, tU, `program ${CU(XU)}'s twin`);
          var zU
        }(UU, zU)
      } finally {
        SU.inProbe = !1
      }
      return zU.probe && xU(UU, XU, zU.probe), zU.probe
    }

    function lU(UU, XU, zU, cU, yU) {
      const QU = [UU.createShader(aU.VERTEX_SHADER), UU.createShader(aU.FRAGMENT_SHADER)],
        AU = UU.createProgram();
      if (!AU || !QU[0] || !QU[1]) return null;
      UU.shaderSource(QU[0], XU), UU.shaderSource(QU[1], zU);
      for (const oU of QU) UU.compileShader(oU), UU.attachShader(AU, oU);
      UU.transformFeedbackVaryings(AU, [cU], aU.INTERLEAVED_ATTRIBS), UU.linkProgram(AU);
      for (const oU of QU) UU.deleteShader(oU);
      var FU;
      return UU.getProgramParameter(AU, aU.LINK_STATUS) ? AU : (vU(`decode probe: ${yU} failed to link: ${sU(null!==(FU=UU.getProgramInfoLog(AU))&&void 0!==FU?FU:"",300)}`), UU.deleteProgram(AU), null)
    }

    function xU(UU, XU, zU) {
      const cU = UU.getProgramParameter(XU, aU.ACTIVE_UNIFORM_BLOCKS);
      for (let FU = 0; FU < cU; FU++) {
        const cU = UU.getActiveUniformBlockName(XU, FU),
          yU = null === cU ? aU.INVALID_INDEX : UU.getUniformBlockIndex(zU, cU);
        yU !== aU.INVALID_INDEX && UU.uniformBlockBinding(zU, yU, UU.getActiveUniformBlockParameter(XU, FU, aU.UNIFORM_BLOCK_BINDING))
      }
      const yU = UU.getParameter(aU.CURRENT_PROGRAM);
      UU.useProgram(zU);
      const QU = UU.getProgramParameter(XU, aU.ACTIVE_UNIFORMS),
        AU = UU.getActiveUniforms(XU, [...Array(QU).keys()], aU.UNIFORM_BLOCK_INDEX);
      for (let FU = 0; FU < QU; FU++) {
        const cU = UU.getActiveUniform(XU, FU);
        if (!cU || -1 !== AU[FU]) continue;
        const yU = cU.name.replace(/\[0\]$/, "");
        for (let QU = 0; QU < cU.size; QU++) {
          const AU = cU.size > 1 ? `${yU}[${QU}]` : cU.name,
            FU = UU.getUniformLocation(XU, AU),
            oU = UU.getUniformLocation(zU, AU);
          FU && oU && JU(UU, oU, cU.type, UU.getUniform(XU, FU))
        }
      }
      UU.useProgram(yU)
    }

    function JU(UU, XU, zU, cU) {
      const yU = ArrayBuffer.isView(cU) ? Array.from(cU) : [Number(cU)];
      switch (zU) {
        case aU.FLOAT:
          return void UU.uniform1f(XU, yU[0]);
        case aU.FLOAT_VEC2:
          return void UU.uniform2fv(XU, yU);
        case aU.FLOAT_VEC3:
          return void UU.uniform3fv(XU, yU);
        case aU.FLOAT_VEC4:
          return void UU.uniform4fv(XU, yU);
        case aU.FLOAT_MAT3:
          return void UU.uniformMatrix3fv(XU, !1, yU);
        case aU.FLOAT_MAT4:
          return void UU.uniformMatrix4fv(XU, !1, yU);
        case aU.UNSIGNED_INT:
          return void UU.uniform1ui(XU, yU[0]);
        case aU.UNSIGNED_INT_VEC2:
          return void UU.uniform2uiv(XU, yU);
        case aU.UNSIGNED_INT_VEC3:
          return void UU.uniform3uiv(XU, yU);
        case aU.UNSIGNED_INT_VEC4:
          return void UU.uniform4uiv(XU, yU);
        case aU.INT_VEC2:
          return void UU.uniform2iv(XU, yU);
        case aU.INT_VEC3:
          return void UU.uniform3iv(XU, yU);
        case aU.INT_VEC4:
          return void UU.uniform4iv(XU, yU);
        default:
          UU.uniform1i(XU, yU[0])
      }
    }

    function jU(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "decode probe";
      const QU = UU.getParameter(aU.CURRENT_PROGRAM),
        AU = UU.getParameter(aU.TRANSFORM_FEEDBACK_BINDING),
        FU = UU.getParameter(aU.TRANSFORM_FEEDBACK_BUFFER_BINDING),
        oU = UU.getParameter(aU.COPY_READ_BUFFER_BINDING),
        DU = UU.isEnabled(aU.RASTERIZER_DISCARD),
        EU = UU.createTransformFeedback(),
        YU = UU.createBuffer();
      SU.inProbe = !0;
      try {
        const QU = UU.getError();
        QU !== aU.NO_ERROR && vU(`GL error 0x${QU.toString(16)} pending before the decode probe (the renderer's)`), UU.useProgram(XU), UU.bindTransformFeedback(aU.TRANSFORM_FEEDBACK, EU), UU.bindBuffer(aU.TRANSFORM_FEEDBACK_BUFFER, YU), UU.bufferData(aU.TRANSFORM_FEEDBACK_BUFFER, 12 * zU, aU.STREAM_READ), UU.bindBufferBase(aU.TRANSFORM_FEEDBACK_BUFFER, 0, YU), UU.enable(aU.RASTERIZER_DISCARD), UU.beginTransformFeedback(aU.POINTS), cU(), UU.endTransformFeedback(), UU.bindBufferBase(aU.TRANSFORM_FEEDBACK_BUFFER, 0, null);
        const AU = UU.getError();
        if (AU !== aU.NO_ERROR) return vU(`${yU}: GL error 0x${AU.toString(16)} on the feedback draw`), null;
        const FU = new Float32Array(3 * zU);
        return UU.bindBuffer(aU.COPY_READ_BUFFER, YU), UU.getBufferSubData(aU.COPY_READ_BUFFER, 0, FU), FU
      } finally {
        DU || UU.disable(aU.RASTERIZER_DISCARD), UU.bindTransformFeedback(aU.TRANSFORM_FEEDBACK, AU), UU.bindBuffer(aU.TRANSFORM_FEEDBACK_BUFFER, FU), UU.bindBuffer(aU.COPY_READ_BUFFER, oU), UU.deleteTransformFeedback(EU), UU.deleteBuffer(YU), UU.useProgram(QU), SU.inProbe = !1
      }
    }

    function KU(UU, XU, zU, cU) {
      const yU = UU.getParameter(aU.COPY_READ_BUFFER_BINDING),
        QU = new Uint8Array(cU);
      return UU.bindBuffer(aU.COPY_READ_BUFFER, XU), UU.getBufferSubData(aU.COPY_READ_BUFFER, zU, QU), UU.bindBuffer(aU.COPY_READ_BUFFER, yU), QU
    }
    const bU = `#version 300 es\nlayout(location = ${gU}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
      TU = "#version 300 es\nprecision highp float;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(0.0);\n}\n",
      hU = new WeakMap;

    function UX(UU, XU, zU) {
      const cU = UU.getProgramParameter(XU, aU.ACTIVE_UNIFORMS),
        yU = UU.getParameter(aU.ACTIVE_TEXTURE);
      try {
        for (let yU = 0; yU < cU; yU++) {
          const cU = UU.getActiveUniform(XU, yU);
          if ((null === cU || void 0 === cU ? void 0 : cU.type) !== aU.UNSIGNED_INT_SAMPLER_2D) continue;
          const QU = UU.getUniformLocation(XU, cU.name),
            AU = QU ? UU.getUniform(XU, QU) : -1;
          if (AU < 0) continue;
          UU.activeTexture(aU.TEXTURE0 + AU);
          const FU = UU.getParameter(aU.TEXTURE_BINDING_2D);
          if (FU && OU.get(FU) === zU) return FU
        }
        return null
      } finally {
        UU.activeTexture(yU)
      }
    }

    function XX(UU, XU, zU, cU, yU) {
      const QU = new Uint32Array(4 * yU),
        AU = UU.getParameter(aU.READ_FRAMEBUFFER_BINDING),
        FU = UU.createFramebuffer();
      UU.bindFramebuffer(aU.READ_FRAMEBUFFER, FU), UU.framebufferTexture2D(aU.READ_FRAMEBUFFER, aU.COLOR_ATTACHMENT0, aU.TEXTURE_2D, XU, 0);
      try {
        let XU = 0;
        for (; XU < yU;) {
          const AU = cU + XU,
            FU = AU % zU,
            oU = Math.min(yU - XU, zU - FU);
          UU.readPixels(FU, Math.floor(AU / zU), oU, 1, aU.RGBA_INTEGER, aU.UNSIGNED_INT, QU.subarray(4 * XU, 4 * (XU + oU))), XU += oU
        }
      } finally {
        UU.bindFramebuffer(aU.READ_FRAMEBUFFER, AU), UU.deleteFramebuffer(FU)
      }
      return QU
    }

    function zX(UU, XU, zU) {
      let cU = 0,
        yU = 0;
      for (let oU = 0; oU < XU.bytes.length; oU += LU) {
        cU++;
        const UU = Math.min(oU + LU, XU.bytes.length);
        IU(XU.bytes.subarray(oU, UU)) !== IU(zU.subarray(oU, UU)) && yU++
      }
      const QU = `${UU} ${XU.bytes.length} B cpu ${IU(XU.bytes).toString(16)} gpu ${IU(zU).toString(16)}, ${yU}/${cU} blocks differ${XU.missed?`, ${XU.missed} GPU-side writes uncopied`:""}`;
      if (0 === yU) return QU;
      const {
        count: AU,
        offsets: FU
      } = function(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
        const cU = Math.min(UU.length, XU.length);
        let yU = Math.abs(UU.length - XU.length);
        const QU = [];
        for (let AU = 0; AU < cU; AU++) UU[AU] !== XU[AU] && (yU++, QU.length < zU && QU.push(AU));
        return {
          count: yU,
          offsets: QU
        }
      }(XU.bytes, zU);
      return VU([`${QU}: ${AU} bytes differ`, ...FU.map((UU => `  +${UU}: cpu ${pU(XU.bytes,UU)} | gpu ${pU(zU,UU)}`))].join("\n")), `${QU}: ${AU} bytes differ, first at ${FU.join(", ")} (context in the saved file)`
    }

    function cX(UU) {
      if (0 === UU.vertices.length) return void vU(`decode probe (${UU.reason}): no terrain draw probed (${UU.draws.length} seen)`);
      const XU = function(UU) {
          const XU = new Map;
          for (const cU of UU) {
            const UU = XU.get(cU.group);
            UU ? UU.push(cU) : XU.set(cU.group, [cU])
          }
          const zU = {
            vertices: UU.length,
            mismatches: 0,
            byDirection: new Array(8).fill(0),
            byDiagonal: [0, 0],
            byBand: {},
            translations: new Map,
            first: []
          };
          for (const [cU, yU] of XU) {
            const UU = new Map,
              XU = yU.map((XU => {
                const zU = EU(XU.record, XU.slot),
                  cU = [XU.gpu[0] - zU[0], XU.gpu[1] - zU[1], XU.gpu[2] - zU[2]],
                  yU = cU.map((UU => Math.round(64 * UU))).join(","),
                  QU = UU.get(yU);
                return QU ? QU.count++ : UU.set(yU, {
                  count: 1,
                  offset: cU
                }), zU
              }));
            let QU = [0, 0, 0],
              AU = 0;
            for (const zU of UU.values()) zU.count > AU && (AU = zU.count, QU = zU.offset);
            zU.translations.set(cU, QU), yU.forEach(((UU, cU) => {
              var yU;
              const AU = [XU[cU][0] + QU[0], XU[cU][1] + QU[1], XU[cU][2] + QU[2]];
              if (AU.every(((XU, zU) => {
                  return cU = UU.gpu[zU], yU = XU, Math.abs(cU - yU) <= Math.max(.001, 1e-6 * Math.abs(yU));
                  var cU, yU
                }))) return;
              zU.mismatches++, zU.byDirection[FU(UU.record[2])]++, zU.byDiagonal[oU(UU.record[2])]++;
              const DU = YU(UU.record);
              zU.byBand[DU] = (null !== (yU = zU.byBand[DU]) && void 0 !== yU ? yU : 0) + 1, zU.first.length < NU && zU.first.push({
                ...UU,
                expected: AU
              })
            }))
          }
          return zU
        }(UU.vertices),
        zU = XU.byDirection.map(((UU, XU) => UU ? `${AU[XU]} ${UU}` : "")).filter(Boolean).join(" "),
        cU = Object.entries(XU.byBand).map((UU => {
          let [XU, zU] = UU;
          return `${XU}: ${zU}`
        })).join(" ");
      if (vU(`decode probe (${UU.reason}): ${XU.mismatches}/${XU.vertices} vertices differ from the CPU decode over ${UU.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (XU.mismatches ? ` by direction [${zU}] diagonal [0: ${XU.byDiagonal[0]} 1: ${XU.byDiagonal[1]}] extent [${cU}]` : "")), UU.fed.records > 0 || UU.fed.failed > 0) {
        vU(`decode probe input: ${UU.fed.differing}/${UU.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (UU.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (UU.fed.failed ? `; the feed failed on ${UU.fed.failed} draws, whose decode is held to the buffer's readback` : ""));
        for (const XU of UU.fed.first) vU(`  ${XU}`)
      }
      for (const yU of XU.first) {
        const [UU, XU, zU] = yU.record;
        vU(`  mismatch part ${yU.group} r0 ${UU.toString(16)} r1 ${XU.toString(16)} r2 ${zU.toString(16)} slot ${yU.slot} (${AU[FU(zU)]}): expected ${yU.expected.map(QX).join(",")} gpu ${yU.gpu.map(QX).join(",")}`)
      }
      VU(`decode probe translations: ${[...XU.translations].map((UU=>{let[XU,zU]=UU;return`${XU}: ${zU.map(QX).join(",")}`})).join("; ")}`)
    }

    function yX(UU) {
      return UU.toString(16)
    }

    function QX(UU) {
      return Number.isInteger(UU) ? String(UU) : UU.toFixed(3)
    }

    function AX(UU) {
      return null !== SU.pendingCheck ? Promise.resolve() : new Promise((XU => {
        let zU = !1;
        const cU = {
          reason: UU,
          terrainDraws: 0,
          draws: [],
          vertices: [],
          parts: new Map,
          groups: new Map,
          fed: {
            records: 0,
            differing: 0,
            first: [],
            failed: 0
          }
        };
        SU.pendingCheck = cU;
        const yU = () => {
            SU.pendingCheck = null;
            try {
              ! function(UU) {
                vU(`draw ranges (${UU.reason}): ${UU.terrainDraws} terrain draws in the frame, the first ${UU.draws.length} here`);
                for (const XU of UU.draws) {
                  const UU = XU.Qt.slice(0, 8).map((UU => {
                      let [XU, zU] = UU;
                      return `${XU}+${zU}`
                    })).join(" "),
                    zU = XU.Qt.length > 8 ? ` (+${XU.Qt.length-8} ranges)` : "";
                  vU(`  ${CU(XU.program)} ${XU.program.terrain} ${XU.call} ${UU}${zU} x${XU.instances}${XU.group>=0?` part ${XU.group} chunk ${XU.chunk}`:""} | ${XU.attributes.join(" | ")}`)
                }
              }(cU), cX(cU);
              cU.draws.some((UU => "undefined" !== typeof WebGL2RenderingContext && UU.gl instanceof WebGL2RenderingContext)) || 0 === cU.draws.length ? function(UU) {
                const XU = [],
                  zU = new Map;
                for (const cU of UU)
                  if ("undefined" !== typeof WebGL2RenderingContext && cU.gl instanceof WebGL2RenderingContext)
                    for (const UU of cU.pages) zU.set("buf" === UU.kind ? UU.buffer : UU.texture, {
                      page: UU,
                      gl: cU.gl
                    });
                for (const [cU, {
                    page: yU,
                    gl: QU
                  }] of zU) {
                  const UU = qU.get(cU);
                  if (!UU) {
                    XU.push(`${yU.kind}#${fU(cU)}: no CPU copy (${SU.uncopied} pages over the copy budget)`);
                    continue
                  }
                  if ("buf" === yU.kind) {
                    XU.push(zX(`buf#${UU.id}`, UU, KU(QU, yU.buffer, 0, UU.bytes.length)));
                    continue
                  }
                  const zU = XX(QU, yU.texture, UU.width, 0, UU.width * UU.height),
                    AU = 16 === UU.texelBytes ? new Uint8Array(zU.buffer) : new Uint8Array(new Uint16Array(zU).buffer);
                  XU.push(zX(`tex#${UU.id} (${16===UU.texelBytes?"records":"light"})`, UU, AU))
                }
                for (const cU of XU) vU(`page readback ${cU}`)
              }(cU.draws) : vU("page readback: none on WebGL1 (no buffer readback)")
            } catch (UU) {
              vU(`check failed: ${String(UU)}`)
            }
            XU()
          },
          QU = () => {
            if (cU.draws.length > 0 && !zU) return zU = !0, void setTimeout(yU, 0);
            zU || requestAnimationFrame(QU)
          };
        requestAnimationFrame(QU), setTimeout((() => {
          zU || (zU = !0, yU())
        }), 5e3)
      }))
    }
    var FX = zU(5179);
    const oX = 20,
      DX = 24,
      EX = Reflect.apply;

    function YX(UU, XU, zU) {
      if (!UU) return;
      const cU = UU[XU];
      if ("function" === typeof cU) {
        const yU = zU(cU);
        UU[XU] = yU, (0, FX.t)(yU, cU)
      }
    }
    let NX = !1;
    const IX = new WeakMap,
      pX = new WeakMap,
      aX = new WeakMap,
      tX = {
        gl: 0,
        lost: 0
      };
    let gX = {
        inst: {
          draws: 0,
          faces: 0
        },
        tex: {
          draws: 0,
          faces: 0
        },
        other: {
          draws: 0,
          faces: 0
        }
      },
      kX = {
        buffer: 0,
        texture: 0
      },
      GX = 0;

    function BX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      if (UU instanceof ArrayBuffer) return new Uint8Array(UU, XU, zU || void 0);
      if (!ArrayBuffer.isView(UU)) return null;
      const cU = "BYTES_PER_ELEMENT" in UU ? UU.BYTES_PER_ELEMENT : 1,
        yU = UU.byteOffset + XU * cU,
        QU = zU ? zU * cU : UU.byteLength - XU * cU;
      return new Uint8Array(UU.buffer, yU, Math.max(0, QU))
    }

    function ZX(UU, XU) {
      const zU = function(UU) {
        switch (UU) {
          case aU.ARRAY_BUFFER:
            return aU.ARRAY_BUFFER_BINDING;
          case aU.ELEMENT_ARRAY_BUFFER:
            return aU.ELEMENT_ARRAY_BUFFER_BINDING;
          case aU.COPY_READ_BUFFER:
            return aU.COPY_READ_BUFFER_BINDING;
          case aU.COPY_WRITE_BUFFER:
            return aU.COPY_WRITE_BUFFER_BINDING;
          case aU.UNIFORM_BUFFER:
            return aU.UNIFORM_BUFFER_BINDING;
          case aU.PIXEL_UNPACK_BUFFER:
            return aU.PIXEL_UNPACK_BUFFER_BINDING;
          case aU.TRANSFORM_FEEDBACK_BUFFER:
            return aU.TRANSFORM_FEEDBACK_BUFFER_BINDING;
          default:
            return 0
        }
      }(XU);
      return zU ? UU.getParameter(zU) : null
    }

    function RX(UU) {
      const XU = qU.get(UU);
      XU && (SU.shadowBytes -= XU.bytes.length, qU.delete(UU))
    }

    function PX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      RX(UU), SU.shadowBytes + XU > dU ? SU.uncopied++ : (SU.shadowBytes += XU, qU.set(UU, {
        id: fU(UU),
        bytes: new Uint8Array(XU),
        width: zU,
        height: cU,
        texelBytes: yU,
        missed: 0
      }))
    }

    function WX(UU, XU) {
      for (const zU of ["deleteBuffer", "deleteTexture"]) YX(UU, zU, (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return zU[0] && RX(zU[0]), EX(UU, this, zU)
      }));
      YX(UU, "shaderSource", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return zU[0] && "string" === typeof zU[1] && IX.set(zU[0], zU[1]), EX(UU, this, zU)
      })), YX(UU, "attachShader", (UU => function() {
        for (var XU, zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        const QU = cU[0],
          AU = null !== (XU = pX.get(QU)) && void 0 !== XU ? XU : [];
        return AU.push(cU[1]), pX.set(QU, AU), EX(UU, this, cU)
      })), YX(UU, "linkProgram", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = EX(UU, this, zU);
        return SU.inProbe || function(UU, XU) {
          var zU, cU, yU;
          "undefined" !== typeof HTMLCanvasElement && UU.canvas instanceof HTMLCanvasElement && function(UU) {
            if (qX.has(UU)) return;
            qX.add(UU);
            for (const XU of ["webglcontextlost", "webglcontextrestored", "webglcontextcreationerror"]) UU.addEventListener(XU, (UU => {
              tX.lost < oX && (tX.lost++, vU(`${XU}${"statusMessage"in UU?`: ${String(UU.statusMessage)}`:""}`))
            }))
          }(UU.canvas);
          SU.context ??= UU;
          const QU = null !== (zU = pX.get(XU)) && void 0 !== zU ? zU : [];
          let AU = "",
            FU = "";
          for (const EU of QU) {
            var oU;
            const UU = null !== (oU = IX.get(EU)) && void 0 !== oU ? oU : "";
            /\bgl_Position\b/.test(UU) ? AU = UU : FU = UU
          }
          const DU = {
            id: fU(XU),
            name: null !== (cU = null === (yU = eU.exec(AU)) || void 0 === yU ? void 0 : yU[1]) && void 0 !== cU ? cU : null,
            gl: UU,
            vertex: AU,
            fragment: FU,
            terrain: LX(AU),
            checked: !1,
            firstDraw: !1
          };
          if (aX.set(XU, DU), wU.push([XU, DU]), null !== DU.terrain) {
            const XU = QU.map((XU => {
              var zU;
              return null !== (zU = UU.getShaderInfoLog(XU)) && void 0 !== zU ? zU : ""
            })).filter((UU => "" !== UU.trim()));
            XU.length > 0 && VU(`program ${CU(DU)} (${DU.terrain}) shader logs:\n${sU(XU.join("\n"))}`)
          }
        }(this, zU[0]), yU
      })), YX(UU, "bufferData", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = EX(UU, this, zU);
        if (!SU.inProbe) {
          const UU = ZX(this, zU[0]);
          if (UU) {
            var QU, AU, FU;
            const XU = "number" === typeof zU[1] ? null : BX(zU[1], null !== (QU = zU[3]) && void 0 !== QU ? QU : 0, null !== (AU = zU[4]) && void 0 !== AU ? AU : 0);
            var oU;
            if (PX(UU, "number" === typeof zU[1] ? zU[1] : null !== (FU = null === XU || void 0 === XU ? void 0 : XU.length) && void 0 !== FU ? FU : 0), XU) null === (oU = qU.get(UU)) || void 0 === oU || oU.bytes.set(XU)
          }
        }
        return yU
      })), YX(UU, "bufferSubData", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = EX(UU, this, zU);
        if (!SU.inProbe) {
          var QU, AU;
          const UU = ZX(this, zU[0]),
            XU = UU ? qU.get(UU) : void 0,
            cU = BX(zU[2], null !== (QU = zU[3]) && void 0 !== QU ? QU : 0, null !== (AU = zU[4]) && void 0 !== AU ? AU : 0);
          if (XU && cU) {
            const UU = zU[1];
            XU.bytes.set(cU.subarray(0, Math.max(0, XU.bytes.length - UU)), UU), dX("buffer", XU, UU, cU.length)
          }
        }
        return yU
      })), XU && (YX(UU, "copyBufferSubData", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = EX(UU, this, zU);
        if (!SU.inProbe) {
          const [UU, XU, cU, yU, QU] = zU, AU = ZX(this, UU), FU = ZX(this, XU), oU = AU ? qU.get(AU) : void 0, DU = FU ? qU.get(FU) : void 0;
          DU && (oU ? DU.bytes.set(oU.bytes.slice(cU, cU + QU), yU) : DU.missed++)
        }
        return yU
      })), YX(UU, "texStorage2D", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = EX(UU, this, zU),
          [, , QU, AU, FU] = zU;
        if (!SU.inProbe && (QU === aU.RGBA32UI || QU === aU.RGBA16UI)) {
          const UU = this.getParameter(aU.TEXTURE_BINDING_2D),
            XU = QU === aU.RGBA32UI ? 16 : 8;
          UU && (OU.set(UU, XU), PX(UU, AU * FU * XU, AU, FU, XU))
        }
        return yU
      })), YX(UU, "texSubImage2D", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = EX(UU, this, zU);
        return !SU.inProbe && zU.length >= 9 && zU[0] === aU.TEXTURE_2D && 0 === zU[1] && function(UU, XU) {
          var zU;
          const cU = UU.getParameter(aU.TEXTURE_BINDING_2D),
            yU = cU ? qU.get(cU) : void 0;
          if (!yU) return;
          const [, , QU, AU, FU, oU] = XU;
          let DU = BX(XU[8], null !== (zU = XU[9]) && void 0 !== zU ? zU : 0);
          if (null === DU && "number" === typeof XU[8]) {
            const zU = ZX(UU, aU.PIXEL_UNPACK_BUFFER),
              cU = zU ? qU.get(zU) : void 0;
            DU = cU ? cU.bytes.subarray(XU[8]) : null
          }
          if (null === DU) return void yU.missed++;
          const EU = UU.getParameter(aU.UNPACK_ROW_LENGTH) || FU,
            YU = UU.getParameter(aU.UNPACK_SKIP_ROWS),
            NU = UU.getParameter(aU.UNPACK_SKIP_PIXELS),
            IU = yU.texelBytes;
          for (let pU = 0; pU < oU; pU++) {
            const UU = ((YU + pU) * EU + NU) * IU,
              XU = ((AU + pU) * yU.width + QU) * IU;
            yU.bytes.set(DU.subarray(UU, UU + FU * IU), XU)
          }
          dX("texture", yU, (AU * yU.width + QU) * IU, FU * oU * IU)
        }(this, zU), yU
      })), YX(UU, "copyTexSubImage2D", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = zU[0] === aU.TEXTURE_2D ? this.getParameter(aU.TEXTURE_BINDING_2D) : null,
          QU = yU ? qU.get(yU) : void 0;
        return QU && QU.missed++, EX(UU, this, zU)
      })));
      for (const zU of ["drawArrays", "drawElements", "drawArraysInstanced", "drawElementsInstanced"]) YX(UU, zU, (UU => function() {
        for (var XU = arguments.length, cU = new Array(XU), yU = 0; yU < XU; yU++) cU[yU] = arguments[yU];
        const QU = EX(UU, this, cU);
        return SU.inProbe || CX(this, zU, cU), QU
      }));
      YX(UU, "getExtension", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        const yU = EX(UU, this, zU);
        return yU && "object" === typeof yU && function(UU, XU, zU) {
          const cU = {
            WEBGL_multi_draw: ["multiDrawArraysWEBGL", "multiDrawElementsWEBGL", "multiDrawArraysInstancedWEBGL", "multiDrawElementsInstancedWEBGL"],
            ANGLE_instanced_arrays: ["drawArraysInstancedANGLE", "drawElementsInstancedANGLE"]
          };
          if (!(XU in cU) || zU.bloxdRenderDebug) return;
          zU.bloxdRenderDebug = !0;
          for (const yU of cU[XU]) {
            const XU = zU[yU];
            "function" === typeof XU && (zU[yU] = function() {
              for (var cU = arguments.length, QU = new Array(cU), AU = 0; AU < cU; AU++) QU[AU] = arguments[AU];
              const FU = EX(XU, zU, QU);
              return SU.inProbe || CX(UU, yU, QU), FU
            })
          }
        }(this, zU[0], yU), yU
      }))
    }

    function dX(UU, XU, zU, cU) {
      kX[UU] += cU, GX < 32 && XU.bytes.length >= 1 << 20 && (GX++, VU(`upload ${UU} #${XU.id} +${zU} ${cU} B`))
    }

    function LX(UU) {
      if (!UU.includes("decodeQuad")) return null;
      return !/^\s*#version 300 es/.test(UU) || /in uvec3 _p2vs_location0\b/.test(UU) ? "inst" : "tex"
    }

    function eX(UU, XU, zU) {
      var cU;
      if (zU.checked) return;
      zU.checked = !0;
      const yU = UU.getProgramParameter(XU, aU.LINK_STATUS),
        QU = (null !== (cU = UU.getProgramInfoLog(XU)) && void 0 !== cU ? cU : "").trim();
      var AU;
      null === zU.terrain && yU || (vU(`program ${CU(zU)} ${null!==(AU=zU.terrain)&&void 0!==AU?AU:"other"} link ${yU?"ok":"FAILED"}${QU?`: ${sU(QU,300)}`:""}`), QU && VU(`program ${CU(zU)} link log:\n${sU(QU)}`))
    }

    function CX(UU, XU, zU) {
      var cU;
      const yU = UU.getParameter(aU.CURRENT_PROGRAM),
        QU = yU ? aX.get(yU) : void 0;
      if (!yU || !QU) return;
      const AU = null !== (cU = QU.terrain) && void 0 !== cU ? cU : "other",
        {
          Qt: FU,
          instances: oU
        } = function(UU, XU) {
          switch (UU) {
            case "drawArrays":
              return {
                Qt: [
                  [XU[1], XU[2]]
                ], instances: 1
              };
            case "drawArraysInstanced":
            case "drawArraysInstancedANGLE":
              return {
                Qt: [
                  [XU[1], XU[2]]
                ], instances: XU[3]
              };
            case "drawElements":
              return {
                Qt: [
                  [0, XU[1]]
                ], instances: 1
              };
            case "drawElementsInstanced":
            case "drawElementsInstancedANGLE":
              return {
                Qt: [
                  [0, XU[1]]
                ], instances: XU[4]
              };
            case "multiDrawArraysWEBGL": {
              const UU = XU[1],
                zU = XU[3],
                cU = XU[2],
                yU = XU[4],
                QU = [];
              for (let AU = 0; AU < XU[5]; AU++) QU.push([UU[cU + AU], zU[yU + AU]]);
              return {
                Qt: QU,
                instances: 1
              }
            }
            default:
              return {
                Qt: [], instances: 0
              }
          }
        }(XU, zU),
        DU = "inst" === QU.terrain ? oU : FU.reduce(((UU, XU) => {
          let [, zU] = XU;
          return UU + zU
        }), 0) / 6;
      if (gX[AU].draws++, gX[AU].faces += DU, null === QU.terrain) return;
      if (SU.context = UU, !QU.firstDraw) {
        QU.firstDraw = !0, eX(UU, yU, QU), wX || (wX = !0, vU(function(UU) {
          var XU;
          const zU = UU.getParameter(aU.DEPTH_FUNC),
            cU = {
              513: "less",
              514: "equal",
              515: "lequal",
              516: "greater",
              518: "gequal",
              519: "always"
            };
          let yU = "default framebuffer";
          if ("DRAW_FRAMEBUFFER" in UU && UU.getParameter(aU.DRAW_FRAMEBUFFER_BINDING)) {
            const XU = UU;
            yU = XU.getFramebufferAttachmentParameter(aU.DRAW_FRAMEBUFFER, aU.DEPTH_ATTACHMENT, aU.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE) ? `depth ${String(XU.getFramebufferAttachmentParameter(aU.DRAW_FRAMEBUFFER,aU.DEPTH_ATTACHMENT,aU.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE))} bits type 0x${Number(XU.getFramebufferAttachmentParameter(aU.DRAW_FRAMEBUFFER,aU.DEPTH_ATTACHMENT,aU.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE)).toString(16)}` : "no depth attachment"
          }
          const QU = UU.getParameter(aU.DEPTH_CLEAR_VALUE);
          return `depth ${null!==(XU=cU[zU])&&void 0!==XU?XU:`0x${zU.toString(16)}`} clear ${QU}${516===zU||518===zU?" (reverse-Z)":""}, samples ${String(UU.getParameter(aU.SAMPLES))}, ${yU}`
        }(UU)));
        const zU = UU.getError();
        zU !== aU.NO_ERROR && tX.gl < oX && (tX.gl++, vU(`GL error 0x${zU.toString(16)} after program ${CU(QU)}'s first terrain draw (${XU})`))
      }
      const EU = SU.pendingCheck;
      null !== EU && (EU.terrainDraws++, EU.draws.length < DX && nU(UU, yU, QU, XU, FU, oU))
    }
    let wX = !1;
    const qX = new WeakSet;
    var OX = zU(4947),
      SX = zU(5184);
    const rX = ["maxStorageBuffersPerShaderStage", "maxStorageBufferBindingSize", "maxBufferSize", "maxUniformBufferBindingSize", "minUniformBufferOffsetAlignment", "maxTextureDimension2D", "maxTextureArrayLayers", "maxVertexBuffers", "maxVertexAttributes", "maxVertexBufferArrayStride", "maxBindGroups", "maxColorAttachmentBytesPerSample"];
    let uX = !1;
    const fX = new WeakSet,
      iX = new WeakMap,
      HX = new WeakMap,
      MX = {
        uncaptured: 0,
        compile: 0,
        rejected: 0
      };
    let vX = 0,
      VX = !1,
      sX = null,
      nX = {
        draws: 0,
        faces: 0
      };

    function mX(UU) {
      const XU = globalThis[UU];
      return null === XU || void 0 === XU ? void 0 : XU.prototype
    }

    function lX(UU) {
      return UU && "function" === typeof UU[Symbol.iterator] ? [...UU].sort().join(" ") : ""
    }

    function xX(UU, XU) {
      const zU = null !== UU && void 0 !== UU ? UU : {},
        cU = null !== XU && void 0 !== XU ? XU : Object.keys(Object.getPrototypeOf(zU)).concat(Object.keys(zU));
      return [...new Set(cU)].filter((UU => "number" === typeof zU[UU])).map((UU => `${UU} ${String(zU[UU])}`)).join(", ")
    }

    function JX(UU, XU) {
      var zU;
      const cU = null !== (zU = XU.vertex) && void 0 !== zU ? zU : {};
      if (cU.module && fX.has(cU.module)) {
        var yU;
        const zU = String(null !== (yU = cU.entryPoint) && void 0 !== yU ? yU : "");
        if (zU.startsWith("vs_packed") && iX.set(UU, zU), !VX) {
          var QU, AU, FU, oU, DU;
          VX = !0;
          const UU = null !== (QU = XU.depthStencil) && void 0 !== QU ? QU : {},
            cU = null !== (AU = XU.multisample) && void 0 !== AU ? AU : {},
            yU = String(null !== (FU = UU.depthCompare) && void 0 !== FU ? FU : "");
          vU(`WebGPU terrain pipeline ${zU}: depth ${String(null!==(oU=UU.format)&&void 0!==oU?oU:"none")} ${yU}${yU.startsWith("greater")?" (reverse-Z)":""}, MSAA ${String(null!==(DU=cU.count)&&void 0!==DU?DU:1)}`)
        }
      }
    }

    function jX(UU) {
      YX(UU, "setPipeline", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return HX.set(this, zU[0]), EX(UU, this, zU)
      }));
      for (const XU of ["draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect"]) YX(UU, XU, (UU => function() {
        const zU = HX.get(this),
          cU = zU ? iX.get(zU) : void 0;
        for (var yU = arguments.length, QU = new Array(yU), AU = 0; AU < yU; AU++) QU[AU] = arguments[AU];
        return void 0 !== cU && KX(XU, cU, QU), EX(UU, this, QU)
      }))
    }

    function KX(UU, XU, zU) {
      var cU;
      (nX.draws++, "draw" === UU || "drawIndexed" === UU) && (nX.faces += zU[0] * (null !== (cU = zU[1]) && void 0 !== cU ? cU : 1) / 6);
      if (null !== sX && sX.length < DX) {
        const cU = ("draw" === UU ? ["vertices", "instances", "firstVertex", "firstInstance"] : "drawIndexed" === UU ? ["indices", "instances", "firstIndex", "baseVertex", "firstInstance"] : ["indirectOffset"]).map(((XU, cU) => {
          const yU = UU.endsWith("Indirect") ? zU[1] : zU[cU];
          return `${XU} ${String(null!==yU&&void 0!==yU?yU:"instances"===XU?1:0)}`
        }));
        sX.push(`  ${XU} ${UU} ${cU.join(" ")}`)
      }
    }

    function bX() {
      if (uX || "undefined" === typeof navigator || !("gpu" in navigator)) return;
      uX = !0, YX(mX("GPU"), "requestAdapter", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return EX(UU, this, zU).then((UU => {
          var XU;
          UU ? function(UU) {
            var XU;
            const zU = null !== (XU = UU.info) && void 0 !== XU ? XU : {};
            vU(`WebGPU adapter ${["vendor","architecture","device","description"].map((UU=>{var XU;return`${UU} "${String(null!==(XU=zU[UU])&&void 0!==XU?XU:"")}"`})).join(" ")}${UU.isFallbackAdapter?" (fallback)":""}`), vU(`WebGPU adapter features ${lX(UU.features)}`), vU(`WebGPU adapter limits ${xX(UU.limits,rX)}`), VU(`WebGPU adapter all limits ${xX(UU.limits,null)}`)
          }(UU) : vU(`WebGPU requestAdapter(${JSON.stringify(null!==(XU=zU[0])&&void 0!==XU?XU:{})}) gave none`);
          return UU
        }))
      })), YX(mX("GPUAdapter"), "requestDevice", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return EX(UU, this, zU).then((UU => (function(UU) {
          vU(`WebGPU device features ${lX(UU.features)}`), vU(`WebGPU device limits ${xX(UU.limits,rX)}`), UU.addEventListener("uncapturederror", (UU => {
            if (MX.uncaptured < oX) {
              var XU, zU, cU;
              MX.uncaptured++;
              const yU = UU.error;
              vU(`WebGPU uncaptured ${null!==(XU=null===yU||void 0===yU||null===(zU=yU.constructor)||void 0===zU?void 0:zU.name)&&void 0!==XU?XU:"error"}: ${sU(String(null!==(cU=null===yU||void 0===yU?void 0:yU.message)&&void 0!==cU?cU:""),600)}`)
            }
          }));
          const XU = UU.lost;
          null === XU || void 0 === XU || XU.then((UU => {
            var XU;
            vU(`WebGPU device lost (${String(UU.reason)}): ${sU(String(null!==(XU=UU.message)&&void 0!==XU?XU:""),600)}`)
          }))
        }(UU), UU)), (UU => {
          throw vU(`WebGPU requestDevice failed: ${String(UU)}`), UU
        }))
      }));
      const UU = mX("GPUDevice");
      YX(UU, "createShaderModule", (UU => function() {
        for (var XU, zU, cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
        const AU = EX(UU, this, yU);
        return function(UU, XU) {
          const zU = XU.includes("decodeQuad");
          zU && fX.add(UU);
          const cU = UU.getCompilationInfo;
          null === cU || void 0 === cU || cU.call(UU).then((UU => {
            if (0 === UU.messages.length && !zU) return;
            const XU = {};
            for (const zU of UU.messages) {
              var cU;
              XU[String(zU.type)] = (null !== (cU = XU[String(zU.type)]) && void 0 !== cU ? cU : 0) + 1
            }
            const yU = UU.messages.map((UU => `${String(UU.type)} ${String(UU.lineNum)}:${String(UU.linePos)} ${String(UU.message)}`)).join("\n");
            MX.compile < oX && (MX.compile++, vU(`WebGPU ${zU?"terrain ":""}shader module compiled: ${JSON.stringify(XU)}${yU?` first: ${sU(yU.split("\n")[0],300)}`:""}`)), yU && VU(`WebGPU shader module messages:\n${sU(yU)}`)
          }))
        }(AU, String(null !== (XU = (null !== (zU = yU[0]) && void 0 !== zU ? zU : {}).code) && void 0 !== XU ? XU : "")), AU
      })), YX(UU, "createRenderPipeline", (UU => function() {
        for (var XU, zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        const QU = EX(UU, this, cU);
        return JX(QU, null !== (XU = cU[0]) && void 0 !== XU ? XU : {}), QU
      })), YX(UU, "createRenderPipelineAsync", (UU => function() {
        for (var XU = arguments.length, zU = new Array(XU), cU = 0; cU < XU; cU++) zU[cU] = arguments[cU];
        return EX(UU, this, zU).then((UU => {
          var XU;
          return JX(UU, null !== (XU = zU[0]) && void 0 !== XU ? XU : {}), UU
        }), (UU => {
          var XU;
          throw function(UU, XU) {
            var zU, cU, yU;
            if (MX.rejected >= oX) return;
            MX.rejected++;
            const {
              reason: QU,
              message: AU
            } = null !== XU && void 0 !== XU ? XU : {}, FU = String(null !== (zU = (null !== (cU = UU.vertex) && void 0 !== cU ? cU : {}).entryPoint) && void 0 !== zU ? zU : "");
            vU(`WebGPU pipeline "${String(null!==(yU=UU.label)&&void 0!==yU?yU:"")}" ${FU} rejected (${String(null!==QU&&void 0!==QU?QU:"no reason")}): ${sU(String(null!==AU&&void 0!==AU?AU:XU),600)}`)
          }(null !== (XU = zU[0]) && void 0 !== XU ? XU : {}, UU), UU
        }))
      })), YX(mX("GPUCanvasContext"), "configure", (UU => function() {
        for (var XU, zU = arguments.length, cU = new Array(zU), yU = 0; yU < zU; yU++) cU[yU] = arguments[yU];
        const QU = null !== (XU = cU[0]) && void 0 !== XU ? XU : {};
        var AU, FU;
        vX++ < 3 && vU(`WebGPU canvas ${String(QU.format)} ${String(null!==(AU=QU.colorSpace)&&void 0!==AU?AU:"srgb")} alpha ${String(null!==(FU=QU.alphaMode)&&void 0!==FU?FU:"opaque")}`);
        return EX(UU, this, cU)
      })), jX(mX("GPURenderPassEncoder")), jX(mX("GPURenderBundleEncoder"))
    }
    const TX = 1e4,
      hX = 6e4,
      Uz = 5e3,
      Xz = 3e3,
      zz = 100;
    let cz = null,
      yz = !1,
      Qz = {
        ...OX.c
      },
      Az = !1,
      Fz = null,
      oz = 0,
      Dz = () => {};
    const Ez = new Promise((UU => {
      Dz = UU
    }));

    function Yz() {
      var UU;
      yz || (yz = !0, Qz = Object.assign(window.bloxdRenderDebug ??= {
        ...OX.c
      }, {
        faceCull: "0" === (0, QU.p)("faceCull") ? "0" : "1",
        adrenoProbe: null !== (UU = (0, QU.p)("adrenoProbe")) && void 0 !== UU ? UU : ""
      }), vU("quality steps off while the topic is on (util/weakGpu.ts): no stepped MSAA or scale, no weak-GPU tier"), NX || "undefined" === typeof window || (NX = !0, "undefined" !== typeof WebGL2RenderingContext && WX(WebGL2RenderingContext.prototype, !0), "undefined" !== typeof WebGLRenderingContext && WX(WebGLRenderingContext.prototype, !1)), bX(), (0, QU.d)("renderProbe", (() => {
        gz("console")
      })), az(), setInterval(Gz, Uz))
    }

    function Nz(UU) {
      var XU, zU;
      Yz(), cz = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.backend) && void 0 !== XU ? XU : null;
      const cU = `, renderer param ${null!==(zU=(0,QU.p)("renderer"))&&void 0!==zU?zU:"none"}, faceCull ${"0"===Qz.faceCull?"off (whole parts)":"on"}, adrenoProbe ${Qz.adrenoProbe||"none"}`;
      vU(`${(0,SX.c)(UU)}${null===UU?"":cU}`)
    }

    function Iz() {
      const UU = performance.now(),
        XU = pz(Ez, TX, hX).then((XU => gz(`${Math.round((performance.now()-UU)/1e3)} s after playable${XU?"":", no terrain drawn yet"}`)));
      (0, yU.d)(vU, (async () => {
        await XU, await Fz
      }))
    }
    async function pz(UU, XU, zU) {
      const yU = (0, cU.e)(zU).then((() => !1));
      return await (0, cU.e)(XU), Promise.race([UU.then((() => !0)), yU])
    }

    function az() {
      requestAnimationFrame((() => {
        oz++, az()
      }))
    }

    function tz() {
      var UU, XU, zU;
      if (Az) return;
      (Az = !0, vU(`renderer caps ${null!==(UU=Qz.caps)&&void 0!==UU?UU:"(not noted)"}; terrain fetch ${null!==(XU=Qz.fetch)&&void 0!==XU?XU:"(not noted)"}`), Qz.adrenoProbe) && vU(`adrenoProbe ${Qz.adrenoProbe} asked; in force (storage fetch only): ${null!==(zU=Qz.probe)&&void 0!==zU?zU:"(not noted)"}`);
      const cU = SU.context;
      if (cU) {
        for (const UU of function(UU) {
            var XU;
            const zU = [],
              cU = UU.getExtension("WEBGL_debug_renderer_info"),
              yU = cU ? UU.getParameter(cU.UNMASKED_VENDOR_WEBGL) : "(masked)",
              QU = cU ? UU.getParameter(cU.UNMASKED_RENDERER_WEBGL) : "(masked)";
            zU.push(`GL ${String(UU.getParameter(UU.VERSION))} | ${String(UU.getParameter(UU.SHADING_LANGUAGE_VERSION))} | ${String(UU.getParameter(UU.VENDOR))} / ${String(UU.getParameter(UU.RENDERER))}`), zU.push(`GL unmasked ${yU} / ${QU}`);
            const AU = [
              ["MAX_TEXTURE_SIZE", UU.MAX_TEXTURE_SIZE],
              ["MAX_VERTEX_ATTRIBS", UU.MAX_VERTEX_ATTRIBS],
              ["MAX_VERTEX_UNIFORM_VECTORS", UU.MAX_VERTEX_UNIFORM_VECTORS],
              ["MAX_VERTEX_TEXTURE_IMAGE_UNITS", UU.MAX_VERTEX_TEXTURE_IMAGE_UNITS],
              ["MAX_COMBINED_TEXTURE_IMAGE_UNITS", UU.MAX_COMBINED_TEXTURE_IMAGE_UNITS],
              ["MAX_VARYING_VECTORS", UU.MAX_VARYING_VECTORS],
              ["MAX_RENDERBUFFER_SIZE", UU.MAX_RENDERBUFFER_SIZE]
            ];
            "MAX_UNIFORM_BLOCK_SIZE" in UU && AU.push(["MAX_UNIFORM_BLOCK_SIZE", UU.MAX_UNIFORM_BLOCK_SIZE], ["MAX_VERTEX_UNIFORM_BLOCKS", UU.MAX_VERTEX_UNIFORM_BLOCKS], ["MAX_SAMPLES", UU.MAX_SAMPLES], ["MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS", UU.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS]), zU.push(`GL limits ${AU.map((XU=>{let[zU,cU]=XU;return`${zU} ${String(UU.getParameter(cU))}`})).join(", ")}`);
            const FU = (XU, zU) => {
              const cU = UU.getShaderPrecisionFormat(XU, UU.HIGH_FLOAT),
                yU = UU.getShaderPrecisionFormat(XU, UU.HIGH_INT);
              return `${zU} highp float ${cU?`${cU.rangeMin}/${cU.rangeMax}/${cU.precision}`:"?"} int ${yU?`${yU.rangeMin}/${yU.rangeMax}/${yU.precision}`:"?"}`
            };
            zU.push(`GL precision ${FU(UU.VERTEX_SHADER,"VS")}, ${FU(UU.FRAGMENT_SHADER,"FS")}`);
            const oU = UU.getContextAttributes();
            return zU.push(`GL context ${JSON.stringify(oU)} drawingBuffer ${UU.drawingBufferWidth}x${UU.drawingBufferHeight}${"drawingBufferFormat"in UU?` format 0x${Number(UU.drawingBufferFormat).toString(16)}`:""}${"drawingBufferColorSpace"in UU?` ${String(UU.drawingBufferColorSpace)}`:""}`), zU.push(`GL extensions ${(null!==(XU=UU.getSupportedExtensions())&&void 0!==XU?XU:[]).join(" ")}`), zU
          }(cU)) vU(UU);
        ! function() {
          if (!SU.context) return;
          let UU = 0,
            XU = 0;
          for (const [zU, cU] of wU) !cU.gl.isContextLost() && cU.gl.isProgram(zU) && (XU++, eX(cU.gl, zU, cU), null !== cU.terrain && UU++);
          vU(`programs: ${XU} live of ${wU.length} linked, ${UU} packed terrain; CPU page copies ${Math.round(SU.shadowBytes/1048576)} MiB (${SU.uncopied} over budget)`)
        }()
      }
    }

    function gz(UU) {
      return Fz ??= async function(UU) {
        tz(), "webgpu" === cz ? (kz(), "1" === Qz.slotCheck && vU("slot check: the last request is still unanswered, so the next answer reads the slots as they were then"), Qz.slotCheck = "1", await
          function(UU) {
            if (null !== sX) return Promise.resolve();
            const XU = [];
            return sX = XU, new Promise((zU => {
              setTimeout((() => {
                sX = null, vU(`WebGPU draw ranges (${UU}): ${XU.length} terrain draws recorded in a second (first ${DX}; bundles replay without new ones)`);
                for (const UU of XU) vU(UU);
                zU()
              }), 1e3)
            }))
          }(UU), await async function() {
            if (await (0, OX.j)(Qz, "slotCheck", ["1"], Xz, zz), "1" === Qz.slotCheck) return void vU(`slot check: no answer in ${Xz} ms (only the storage fetch has one; a later answer logs on its own)`);
            kz()
          }()) : await AX(UU);
        vU(`check (${UU}) done: bloxdDebug.save() downloads it all`)
      }(UU).catch((XU => {
        vU(`check (${UU}) failed: ${String(XU)}`)
      })).finally((() => {
        Fz = null
      })), Fz
    }

    function kz() {
      void 0 !== Qz.slotCheck && "1" !== Qz.slotCheck && (vU(Qz.slotCheck), delete Qz.slotCheck)
    }

    function Gz() {
      const UU = UU => oz ? (UU / oz).toFixed(1) : "0",
        XU = function() {
          const UU = nX;
          return nX = {
            draws: 0,
            faces: 0
          }, UU
        }(),
        zU = function() {
          const UU = gX;
          return gX = {
            inst: {
              draws: 0,
              faces: 0
            },
            tex: {
              draws: 0,
              faces: 0
            },
            other: {
              draws: 0,
              faces: 0
            }
          }, UU
        }(),
        cU = function() {
          const UU = kX;
          return kX = {
            buffer: 0,
            texture: 0
          }, UU
        }();
      kz(), ("webgpu" === cz ? XU.draws : zU.inst.draws + zU.tex.draws) > 0 && Dz();
      const yU = "webgpu" === cz ? [`terrain ${UU(XU.draws)} draws ${UU(XU.faces)} faces a frame (bundles' replays uncounted)`] : ["inst", "tex", "other"].filter((UU => zU[UU].draws > 0)).map((XU => `${XU} ${UU(zU[XU].draws)} draws ${UU(zU[XU].faces)} faces a frame`));
      vU(`${oz} frames: ${yU.join(", ")||"no draws"}; uploaded ${Math.round(cU.buffer/1024)} KiB to buffers, ${Math.round(cU.texture/1024)} KiB to data textures`), oz = 0
    }
  },
  5184: (UU, XU, zU) => {
    function cU(UU) {
      if (null === UU) return "backend: none picked (no renderer build)";
      const XU = UU.adapter ? `${UU.adapter.vendor}/${UU.adapter.architecture}` : "none";
      return `backend ${UU.backend}: reason ${UU.reason}, source ${UU.source}, adapter ${XU}`
    }
    zU.d(XU, {
      c: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);