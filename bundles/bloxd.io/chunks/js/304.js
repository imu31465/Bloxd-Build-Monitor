export const id = 304;
export const ids = [304];
export const modules = {
  41713: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => kS,
      g: () => CS,
      i: () => aS,
      j: () => KS,
      l: () => PS,
      m: () => nS
    });
    var tS = gS(41677);
    var bS = "Babylon Lite v1.32.0",
      XS = gS(41721);

    function xS(SS) {
      return "clientWidth" in SS
    }
    var NS = 1;

    function qS(SS, HS, gS) {
      const qS = HS.getContext("webgpu");
      qS || (0, tS.e)(54), xS(HS) && HS.setAttribute("data-engine", bS);
      const uS = gS?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        IS = gS?.srgb ? (fS = uS).endsWith("-srgb") ? fS : `${fS}-srgb` : uS;
      var fS;
      const kS = gS?.alphaMode ?? "opaque";
      qS.configure({
        device: SS._device,
        format: uS,
        alphaMode: kS,
        viewFormats: [IS]
      });
      const aS = 1 === gS?.msaaSamples ? 1 : 4,
        KS = (0, XS.c)({
          lbl: "swapchain",
          format: IS,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return KS._eager = !0, {
        engine: SS,
        canvas: HS,
        format: IS,
        msaaSamples: aS,
        scRT: KS,
        maxDevicePixelRatio: gS?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: NS++,
        _context: qS,
        _configureFormat: uS,
        _alphaMode: kS,
        _renderingContexts: []
      }
    }

    function uS(SS) {
      const HS = SS._context.getCurrentTexture(),
        gS = SS.scRT;
      gS._colorTexture = HS, gS._colorView = HS.createView({
        format: SS.format
      }), gS._width = HS.width, gS._height = HS.height
    }

    function IS(SS) {
      const HS = SS.canvas;
      if (!xS(HS)) return;
      const gS = SS._w ?? HS.clientWidth,
        tS = SS._h ?? HS.clientHeight;
      if (!(gS > 0 && tS > 0)) return;
      const bS = Math.min(globalThis.devicePixelRatio || 1, SS.maxDevicePixelRatio);
      fS(SS, gS * bS | 0, tS * bS | 0)
    }

    function fS(SS, HS, gS) {
      const tS = SS.canvas,
        bS = 0 | HS,
        XS = 0 | gS;
      if (bS > 0 && XS > 0 && (bS !== tS.width || XS !== tS.height)) {
        tS.width = bS, tS.height = XS, SS.scRT._width = bS, SS.scRT._height = XS;
        for (const HS of SS._renderingContexts) HS._resize?.()
      }
    }
    var kS = 0;

    function aS(SS, HS) {
      return -1 !== SS._renderingContexts.indexOf(HS)
    }

    function KS(SS, HS) {
      return -1 === SS._renderingContexts.indexOf(HS) && (SS._renderingContexts.push(HS), !0)
    }
    var jS = null;
    var GS = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function CS(SS, HS) {
      const XS = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...jS ? jS() : {}
      });
      XS || (0, tS.e)(47);
      const xS = jS?.deviceFeatures?.(XS, HS) ?? function(SS) {
          return GS.filter((HS => SS.features.has(HS)))
        }(XS),
        NS = await XS.requestDevice({
          requiredFeatures: xS,
          requiredLimits: HS?.requiredLimits
        });
      console.log(`${bS} - WebGPU engine`);
      const fS = !!HS?.useHighPrecisionMatrix,
        kS = !!HS?.useFloatingOrigin;
      if (kS && !fS && (0, tS.e)(48), fS) {
        const {
          allocateF64Mat4: SS
        } = await gS.e(357).then((() => gS(61400)));
        0
      }
      let aS, KS, CS, nS;
      if (kS) {
        const [{
          wrapRenderableForFO: SS,
          lightFoVersion: HS,
          applyLightFoOffset: tS
        }, {
          makePackMeshWorld: bS
        }] = await Promise.all([gS.e(358).then((() => gS(61405))), gS.e(359).then((() => gS(61411)))]);
        aS = SS, KS = bS, CS = HS, nS = tS
      }
      const PS = {
          _device: NS
        },
        QS = [PS];
      return Object.assign(PS, {
        engine: PS,
        surfaces: QS,
        _surfaces: QS,
        _device: NS,
        _options: HS,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: fS,
        useFloatingOrigin: kS,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: aS,
        _makePackMeshWorld: KS,
        _lightFoVersion: CS,
        _applyLightFoOffset: nS
      }, qS(PS, SS, HS)), IS(PS), uS(PS), PS
    }

    function nS(SS, HS, gS) {
      fS(SS, HS, gS)
    }

    function PS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SS.surfaces;
      if (gS !== SS.surfaces)
        for (let bS = gS.length; bS--;) gS[bS].engine !== SS && (0, tS.e)(49);
      QS(SS, HS, gS)
    }

    function QS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SS._surfaces,
        tS = 0;
      for (let XS = gS.length; XS--;) tS += gS[XS]._renderingContexts.length;
      if (!tS) return SS.drawCallCount = 0, SS._flushGpuRetirements?.(SS);
      const bS = SS._device.createCommandEncoder({
        label: "frame"
      });
      SS._currentEncoder = bS, SS._currentDelta = HS;
      try {
        SS._gpuTimerBegin?.(bS), tS = 0;
        for (let SS = 0; SS < gS.length; SS++) {
          const HS = gS[SS];
          HS._capturePreFrame?.(HS), uS(HS);
          const bS = HS._renderingContexts;
          for (let SS = 0; SS < bS.length; SS++) {
            const HS = bS[SS];
            HS._update(), tS += HS._drawCallsPre + HS._record()
          }
        }
        const HS = SS._currentEncoder;
        for (let SS = 0; SS < gS.length; SS++) {
          const tS = gS[SS];
          tS._captureService?.(tS, HS)
        }
        SS._gpuTimerEnd?.(HS), SS._cbs[0] = HS.finish(), SS._device.queue.submit(SS._cbs), SS._flushGpuRetirements?.(SS), SS.drawCallCount = tS, SS._gpuTimerResolve?.()
      } finally {
        SS._currentEncoder = void 0
      }
    }
  },
  41685: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS,
      d: () => XS,
      h: () => tS
    });
    var tS = globalThis.GPUTextureUsage,
      bS = globalThis.GPUBufferUsage,
      XS = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41737: (SS, HS, gS) => {
    function tS(SS) {
      bS(SS.splice(0))
    }

    function bS(SS) {
      for (const gS of SS) try {
        gS()
      } catch (HS) {
        console.error("GPU resource retirement failed.", HS)
      }
    }

    function XS(SS, HS) {
      SS._flushGpuRetirements ??= xS, (SS._retirements ??= []).push(HS)
    }

    function xS(SS) {
      const HS = SS._retirements;
      if (!HS) return;
      SS._retirements = null;
      const gS = SS._retiring ??= new Set;
      gS.add(HS), queueMicrotask((() => {
        SS._device.queue.onSubmittedWorkDone().then((() => {
          gS.delete(HS), tS(HS)
        })).catch((() => {}))
      }))
    }
    gS.d(HS, {
      c: () => XS
    })
  },
  41721: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      d: () => xS,
      e: () => NS
    });
    var tS = gS(41685);

    function bS(SS) {
      const HS = SS.size;
      return "canvas" in HS ? HS.canvas : HS
    }

    function XS(SS) {
      return {
        _descriptor: SS,
        _resolveSize: bS,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function xS(SS, HS) {
      if (SS._eager) return void SS._syncEager?.(HS);
      NS(SS);
      const gS = SS._descriptor,
        {
          width: XS,
          height: xS
        } = (SS._resolveSize ?? bS)(gS);
      SS._width = XS, SS._height = xS;
      const qS = HS._device;
      gS.format && (SS._colorTexture = qS.createTexture({
        label: gS.lbl,
        size: {
          width: XS,
          height: xS
        },
        format: gS.format,
        sampleCount: gS.samples,
        usage: tS.h.RENDER_ATTACHMENT | tS.h.TEXTURE_BINDING | tS.h.COPY_SRC | tS.h.COPY_DST
      }), SS._colorView = SS._colorTexture.createView()), gS.dFormat && (SS._depthTexture = qS.createTexture({
        label: gS.lbl,
        size: {
          width: XS,
          height: xS
        },
        format: gS.dFormat,
        sampleCount: gS.samples,
        usage: tS.h.RENDER_ATTACHMENT | tS.h.TEXTURE_BINDING
      }), SS._depthView = SS._depthTexture.createView())
    }

    function NS(SS) {
      if (!SS || SS._eager && !SS._disposeAttachments) return;
      const HS = SS._colorTexture,
        gS = SS._depthTexture;
      if (SS._colorTexture = SS._depthTexture = null, SS._colorView = SS._depthView = null, SS._width = SS._height = 0, SS._disposeAttachments) SS._disposeAttachments(HS, gS);
      else try {
        HS?.destroy()
      } finally {
        !1 !== SS._ownsDepthTexture && gS?.destroy()
      }
    }
  },
  41732: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS,
      d: () => bS,
      h: () => XS
    });
    var tS = Float32Array,
      bS = Float64Array,
      XS = Uint32Array
  },
  41745: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    var tS = 16
  },
  41677: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = null;

    function bS(SS) {
      for (var HS = arguments.length, gS = new Array(HS > 1 ? HS - 1 : 0), bS = 1; bS < HS; bS++) gS[bS - 1] = arguments[bS];
      const XS = new Error(tS?.(SS, gS) ?? `#${SS}`);
      throw XS.lite = gS, XS
    }
  },
  41703: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(41696);

    function bS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const gS = HS.compare,
        bS = HS.lodMinClamp ?? 0,
        XS = HS.lodMaxClamp ?? 32,
        xS = void 0 !== gS || 0 !== bS || 32 !== XS ? `${gS??""}:${bS}:${XS}` : "";
      return (0, tS.d)(SS, HS, xS)
    }
  },
  41691: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => XS
    });
    var tS = null;

    function bS(SS) {
      const HS = tS ??= new WeakMap;
      HS.set(SS, (HS.get(SS) ?? 0) + 1)
    }

    function XS(SS) {
      bS(SS.texture)
    }
  },
  41696: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS
    });
    var tS = null,
      bS = "nearest",
      XS = "clamp-to-edge",
      xS = {
        minFilter: bS,
        magFilter: bS,
        mipmapFilter: bS,
        addressModeU: XS,
        addressModeV: XS,
        addressModeW: XS,
        maxAnisotropy: 1
      };

    function NS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const bS = SS._device,
        XS = tS ??= new WeakMap;
      let NS = XS.get(bS);
      NS || XS.set(bS, NS = new Map);
      let qS = gS;
      for (const tS in xS) {
        const SS = tS;
        qS += `:${HS[SS]??xS[SS]}`
      }
      let uS = NS.get(qS);
      return uS || NS.set(qS, uS = bS.createSampler(HS)), uS
    }
  },
  41730: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => iS,
      c: () => US
    });
    var tS = gS(41721),
      bS = gS(41713);

    function XS(SS, HS) {
      HS._passes.length = 0, SS._currentProcessedTask = HS;
      try {
        HS.record()
      } finally {
        SS._currentProcessedTask = null
      }
    }
    var xS = gS(41732);

    function NS(SS) {
      const HS = SS.worldMatrixVersion;
      if (SS._viewVer === HS) return SS._viewCache;
      const gS = SS._viewCache,
        tS = SS.worldMatrix,
        bS = SS._useFloatingOrigin,
        XS = bS ? 0 : tS[12],
        xS = bS ? 0 : tS[13],
        NS = bS ? 0 : tS[14];
      return gS[0] = tS[0], gS[1] = tS[4], gS[2] = tS[8], gS[3] = 0, gS[4] = tS[1], gS[5] = tS[5], gS[6] = tS[9], gS[7] = 0, gS[8] = tS[2], gS[9] = tS[6], gS[10] = tS[10], gS[11] = 0, gS[12] = -(tS[0] * XS + tS[1] * xS + tS[2] * NS), gS[13] = -(tS[4] * XS + tS[5] * xS + tS[6] * NS), gS[14] = -(tS[8] * XS + tS[9] * xS + tS[10] * NS), gS[15] = 1, SS._viewVer = HS, gS
    }
    var qS = null;

    function uS(SS) {
      return SS._projFov === SS.fov && SS._projNear === SS.nearPlane && SS._projFar === SS.farPlane || (SS._projFov = SS.fov, SS._projNear = SS.nearPlane, SS._projFar = SS.farPlane, SS._projRev = (SS._projRev ?? 0) + 1), SS.worldMatrixVersion + (SS._projRev ?? 0)
    }

    function IS(SS, HS) {
      const gS = uS(SS);
      if (SS._projVer === gS && SS._projAspect === HS) return SS._projCache;
      const tS = SS._projCache;
      return null !== qS && SS.ortho ? qS(SS, HS, tS) : function(SS, HS, gS, tS, bS) {
        const XS = 1 / Math.tan(.5 * HS),
          xS = bS - tS;
        SS[0] = XS / gS, SS[5] = XS, SS[10] = -tS / xS, SS[11] = 1, SS[14] = bS * tS / xS
      }(tS, SS.fov, HS, SS.nearPlane, SS.farPlane), SS._projVer = gS, SS._projAspect = HS, tS
    }
    var fS = gS(41685);

    function kS(SS, HS, gS) {
      return SS._device.createBuffer({
        label: gS,
        size: (tS = HS, bS = 16, Math.ceil(tS / bS) * bS),
        usage: fS.b.UNIFORM | fS.b.COPY_DST
      });
      var tS, bS
    }
    var aS = gS(41737),
      KS = null;

    function jS(SS) {
      const HS = SS._device,
        gS = KS ??= new WeakMap;
      let tS = gS.get(HS);
      return tS || (tS = HS.createBindGroupLayout({
        label: "Bj",
        entries: [{
          binding: 0,
          visibility: fS.d.VERTEX | fS.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: fS.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), gS.set(HS, tS)), tS
    }

    function GS(SS, HS, gS) {
      const tS = SS._device,
        bS = kS(SS, HS.byteLength, gS);
      try {
        tS.queue.writeBuffer(bS, 0, HS.buffer, HS.byteOffset, HS.byteLength)
      } catch (XS) {
        throw bS.destroy(), XS
      }
      return bS
    }
    var CS = gS(41745),
      nS = new xS.h(1),
      PS = new xS.c(nS.buffer);

    function QS(SS) {
      let HS = 0;
      for (const gS of SS) HS += gS._lightVersion ?? 0;
      return HS
    }

    function DS(SS, HS) {
      SS.fill(0);
      let gS = 0;
      for (const tS of HS) {
        if (gS >= CS.c) break;
        tS._writeLightUbo && (tS._writeLightUbo(SS, 4 + 16 * gS), gS++)
      }
      nS[0] = gS, SS[0] = PS[0]
    }

    function wS(SS, HS) {
      let gS = HS._lightGpuState;
      const tS = 16 + 16 * CS.c * 4;
      if (gS && gS._byteSize === tS) return gS;
      const bS = !gS;
      gS?._buffer.destroy();
      const XS = new xS.c(tS / 4);
      return DS(XS, HS.lights), SS._applyLightFoOffset?.(XS, HS), gS = {
        _buffer: GS(SS, XS),
        _scratch: XS,
        fW: QS(HS.lights) + (SS._lightFoVersion?.(HS) ?? 0),
        _listVersion: HS._lightListVersion ?? 0,
        _lightCount: HS.lights.length,
        _byteSize: tS
      }, HS._lightGpuState = gS, bS && HS._disposables.push((() => {
        HS._lightGpuState?._buffer.destroy(), HS._lightGpuState = void 0
      })), gS
    }

    function hS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const bS = HS;
      if (0 === tS && 16 === bS.length) return void SS.set(bS, gS);
      const XS = tS,
        xS = gS;
      SS[xS + 0] = bS[XS + 0], SS[xS + 1] = bS[XS + 1], SS[xS + 2] = bS[XS + 2], SS[xS + 3] = bS[XS + 3], SS[xS + 4] = bS[XS + 4], SS[xS + 5] = bS[XS + 5], SS[xS + 6] = bS[XS + 6], SS[xS + 7] = bS[XS + 7], SS[xS + 8] = bS[XS + 8], SS[xS + 9] = bS[XS + 9], SS[xS + 10] = bS[XS + 10], SS[xS + 11] = bS[XS + 11], SS[xS + 12] = bS[XS + 12], SS[xS + 13] = bS[XS + 13], SS[xS + 14] = bS[XS + 14], SS[xS + 15] = bS[XS + 15]
    }

    function ZS(SS, HS, gS, tS, bS) {
      SS.fill(0);
      const XS = function(SS, HS) {
          const gS = uS(SS);
          if (SS._vpVer === gS && SS._vpAspect === HS) return SS._vpCache;
          const tS = SS._vpCache;
          return function(SS, HS, gS, tS, bS, XS) {
            const xS = gS[tS],
              NS = gS[tS + 1],
              qS = gS[tS + 2],
              uS = gS[tS + 3],
              IS = gS[tS + 4],
              fS = gS[tS + 5],
              kS = gS[tS + 6],
              aS = gS[tS + 7],
              KS = gS[tS + 8],
              jS = gS[tS + 9],
              GS = gS[tS + 10],
              CS = gS[tS + 11],
              nS = gS[tS + 12],
              PS = gS[tS + 13],
              QS = gS[tS + 14],
              DS = gS[tS + 15];
            let wS = bS[XS],
              hS = bS[XS + 1],
              ZS = bS[XS + 2],
              JS = bS[XS + 3];
            SS[HS] = xS * wS + IS * hS + KS * ZS + nS * JS, SS[HS + 1] = NS * wS + fS * hS + jS * ZS + PS * JS, SS[HS + 2] = qS * wS + kS * hS + GS * ZS + QS * JS, SS[HS + 3] = uS * wS + aS * hS + CS * ZS + DS * JS, wS = bS[XS + 4], hS = bS[XS + 5], ZS = bS[XS + 6], JS = bS[XS + 7], SS[HS + 4] = xS * wS + IS * hS + KS * ZS + nS * JS, SS[HS + 5] = NS * wS + fS * hS + jS * ZS + PS * JS, SS[HS + 6] = qS * wS + kS * hS + GS * ZS + QS * JS, SS[HS + 7] = uS * wS + aS * hS + CS * ZS + DS * JS, wS = bS[XS + 8], hS = bS[XS + 9], ZS = bS[XS + 10], JS = bS[XS + 11], SS[HS + 8] = xS * wS + IS * hS + KS * ZS + nS * JS, SS[HS + 9] = NS * wS + fS * hS + jS * ZS + PS * JS, SS[HS + 10] = qS * wS + kS * hS + GS * ZS + QS * JS, SS[HS + 11] = uS * wS + aS * hS + CS * ZS + DS * JS, wS = bS[XS + 12], hS = bS[XS + 13], ZS = bS[XS + 14], JS = bS[XS + 15], SS[HS + 12] = xS * wS + IS * hS + KS * ZS + nS * JS, SS[HS + 13] = NS * wS + fS * hS + jS * ZS + PS * JS, SS[HS + 14] = qS * wS + kS * hS + GS * ZS + QS * JS, SS[HS + 15] = uS * wS + aS * hS + CS * ZS + DS * JS
          }(tS, 0, IS(SS, HS), 0, NS(SS), 0), SS._vpVer = gS, SS._vpAspect = HS, tS
        }(tS, bS),
        xS = NS(tS),
        qS = tS.worldMatrix;
      hS(SS, XS, 0), hS(SS, xS, 16), HS.useFloatingOrigin ? (SS[32] = 0, SS[33] = 0, SS[34] = 0) : (SS[32] = qS[12], SS[33] = qS[13], SS[34] = qS[14]), SS[87] = HS.canvas.width;
      const fS = gS.imageProcessing;
      SS[76] = fS.exposure, SS[77] = fS.contrast, SS[78] = gS._envTextures?.lodGenerationScale ?? .8, SS[79] = +fS.toneMappingEnabled, SS[37] = HS.canvas.height
    }

    function JS(SS, HS) {
      return {
        _renderables: SS,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: HS
      }
    }

    function OS(SS, HS, gS) {
      SS.clr ??= !0;
      const bS = SS.rt._descriptor,
        XS = SS.depth?._descriptor,
        qS = {
          _colorFormat: bS.format,
          _depthStencilFormat: XS?.dFormat ?? bS.dFormat,
          _depthCompare: bS.depthCompare ?? XS?.depthCompare,
          _sampleCount: bS.samples
        },
        IS = {
          loadOp: "clear",
          storeOp: "store"
        },
        fS = {
          ...JS([], -1),
          name: SS.name,
          _config: SS,
          _ownsTargets: !SS.sharedRt,
          engine: HS,
          Bj: gS,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [IS]
          },
          _colorAttachment: IS,
          _sceneUBO: kS(HS, 368),
          _suData: new xS.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: qS,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (fS._disposed) throw new Error("RenderTask has been disposed.");
            fS._recordExplicit ? fS._recordExplicit(fS, !0) : vS(fS, !1 !== SS.autoMirror ? gS._renderables.slice() : fS._renderables, !0)
          },
          execute: () => function(SS, HS, gS) {
            if (!1 === SS.enabled) return 0;
            const tS = SS.Bj;
            ! function(SS, HS, gS) {
              const tS = SS.Bj;
              !1 !== SS._config.autoMirror && SS._lastVersion !== tS._renderableVersion && vS(SS, tS._renderables.slice());
              LS(SS, HS);
              const bS = SS._updateContext,
                XS = SS._config.cam ?? tS.camera;
              gS._colorFormat && (SS._config._skipClusteredLights || tS._clusteredLightUpdater?.(XS, bS.targetWidth, bS.targetHeight), function(SS, HS) {
                const gS = wS(SS, HS),
                  tS = QS(HS.lights) + (SS._lightFoVersion?.(HS) ?? 0),
                  bS = HS._lightListVersion ?? 0;
                tS === gS.fW && bS === gS._listVersion && HS.lights.length === gS._lightCount || (gS.fW = tS, gS._listVersion = bS, gS._lightCount = HS.lights.length, DS(gS._scratch, HS.lights), SS._applyLightFoOffset?.(gS._scratch, HS), SS._device.queue.writeBuffer(gS._buffer, 0, gS._scratch)), gS._buffer
              }(HS, tS));
              (function(SS, HS, gS, tS) {
                if (!tS) return;
                const bS = tS.viewport,
                  XS = SS._config.rt,
                  xS = (SS._config.cs ? HS.canvas.width / HS.canvas.height : XS._width / XS._height) * (bS ? bS.width / bS.height : 1),
                  NS = gS.fog,
                  qS = gS.imageProcessing,
                  IS = uS(tS),
                  fS = gS._envTextures,
                  kS = SS._sceneUboCacheKey;
                if (kS[0] === tS && kS[1] === NS && kS[2] === IS && kS[3] === xS && kS[4] === qS.exposure && kS[5] === qS.contrast && kS[6] === fS) return;
                kS[0] = tS, kS[1] = NS, kS[2] = IS, kS[3] = xS, kS[4] = qS.exposure, kS[5] = qS.contrast, kS[6] = fS;
                const aS = SS._suData;
                ZS(aS, HS, gS, tS, xS);
                const KS = gS._sceneUboContributors;
                if (KS)
                  for (const uS of KS) uS(aS, gS);
                HS._device.queue.writeBuffer(SS._sceneUBO, 0, aS)
              })(SS, HS, tS, XS), bS.jT = XS, SS._batchState?._reset(), YS(SS._opaqueBindings, bS), YS(SS._directBindings, bS), YS(SS._transparentBindings, bS), SS._batchState?._flush(HS),
                function(SS, HS) {
                  const gS = SS._transparentBindings;
                  if (gS.length <= 1 || !HS) return;
                  const tS = NS(HS);
                  for (const bS of gS) {
                    const SS = bS.renderable._worldCenter;
                    bS._sortDistance = SS ? SS[0] * tS[2] + SS[1] * tS[6] + SS[2] * tS[10] + tS[14] : 0
                  }
                  gS.sort(dS)
                }(SS, XS)
            }(SS, HS, gS);
            const bS = SS._colorAttachment,
              XS = SS._config;
            XS.rt._colorView && (XS.rt === tS.surface.scRT && (bS.view = XS.rt._colorView), bS.resolveTarget = XS.rst?._colorView ?? void 0, bS.clearValue = XS.clrColor ?? tS.clearColor, bS.loadOp = XS.clr ? "clear" : "load");
            if (SS._executeWithTransmission) return SS._executeWithTransmission(gS._sampleCount);
            const xS = HS._currentEncoder.beginRenderPass(SS._renderPassDescriptor),
              qS = ES(SS, xS);
            return xS.end(), qS
          }(fS, HS, qS),
          dispose() {
            if (fS._disposed) return;
            fS._disposed = !0;
            const HS = fS._pendingMeshes;
            HS && (HS.length = 0);
            for (const SS of fS._renderables) fS._retireRenderable?.(fS.engine, SS);
            fS._passes.length = fS._opaqueBindings.length = fS._directBindings.length = 0, fS._transparentBindings.length = fS._renderables.length = fS._ob.length = 0, fS._ownsTargets && ((0, tS.e)(SS.rt), (0, tS.e)(SS.rst)), SS.depth?._eager || (0, tS.e)(SS.depth);
            const gS = fS._sceneUBO;
            (0, aS.c)(fS.engine, (() => gS.destroy())), fS._batchState?._release(fS.engine), fS._batchState = void 0
          }
        };
      return fS
    }

    function dS(SS, HS) {
      return HS._sortDistance - SS._sortDistance || SS.renderable.order - HS.renderable.order
    }

    function cS(SS, HS) {
      return SS.renderable.order - HS.renderable.order
    }

    function vS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SS._renderables,
        gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        bS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        XS = arguments.length > 4 ? arguments[4] : void 0;
      const xS = SS._config,
        NS = xS.rt,
        qS = SS._batchState,
        uS = JS(HS, SS.Bj._renderableVersion);
      if (gS) {
        const HS = (HS, gS) => {
          HS && (gS || SS._ownsTargets || HS._eager) && (0, tS.d)(HS, SS.engine)
        };
        HS(NS), NS._descriptor.samples > 1 && HS(xS.rst), HS(xS.depth, !0)
      }
      const {
        _opaqueBindings: IS,
        _directBindings: fS,
        _transparentBindings: kS
      } = uS;
      try {
        for (const gS of HS) {
          const HS = gS.bind(SS.engine, SS._targetSignature);
          uS._batchState = SS._targetSignature._collectBatches?.(uS._batchState, HS), gS.isTransparent || gS._transmissive ? kS.push(HS) : gS._direct ? fS.push(HS) : IS.push(HS)
        }
        IS.sort(cS), fS.sort(cS), gS && LS(SS, SS.engine, !1)
      } catch (aS) {
        throw uS._batchState?._release(void 0, XS ?? [qS]), aS
      }
      return gS && (! function(SS, HS) {
        const gS = SS._config,
          tS = SS._colorAttachment;
        tS.view = HS._colorView, SS._renderPassDescriptor.colorAttachments = HS._colorView ? [tS] : [];
        const bS = gS.depth ?? HS,
          XS = bS._depthView;
        let xS;
        if (XS) {
          const SS = bS._descriptor,
            HS = (gS.depth ? bS._eager : !1 === gS.depthClear) ? "load" : "clear";
          xS = {
            view: XS,
            depthClearValue: SS.depthClearValue ?? 0,
            depthLoadOp: HS,
            depthStoreOp: "store"
          }, SS.dFormat?.includes("stencil") && (xS.stencilClearValue = 0, xS.stencilLoadOp = HS, xS.stencilStoreOp = "store")
        }
        SS._renderPassDescriptor.depthStencilAttachment = xS
      }(SS, NS), SS._updateContext.targetWidth = NS._width, SS._updateContext.targetHeight = NS._height), bS && (Object.assign(SS, uS), qS?._release(SS.engine, [uS._batchState])), uS
    }

    function ES(SS, HS) {
      const gS = SS.engine,
        tS = SS._config,
        XS = tS.rt,
        xS = SS.Bj,
        NS = SS._opaqueBindings,
        qS = SS._ob,
        uS = SS._sceneBG;
      if (function(SS, HS, gS, tS) {
          const bS = HS?.viewport;
          if (!bS) return;
          const XS = Math.floor(bS.x * gS),
            xS = Math.floor((1 - bS.y - bS.height) * tS),
            NS = Math.ceil((bS.x + bS.width) * gS) - XS,
            qS = Math.ceil((1 - bS.y) * tS) - xS;
          SS.setViewport(XS, xS, NS, qS, 0, 1), SS.setScissorRect(XS, xS, NS, qS)
        }(HS, tS.cam ?? xS.camera, XS._width, XS._height), HS.setBindGroup(0, uS), SS._lastVis !== bS.c || !qS.length) {
        const HS = XS._descriptor,
          tS = gS._device.createRenderBundleEncoder({
            colorFormats: HS.format ? [HS.format] : [],
            depthStencilFormat: SS._targetSignature._depthStencilFormat,
            sampleCount: HS.samples
          });
        tS.setBindGroup(0, uS), AS(tS, NS, gS), qS[0] = tS.finish(), SS._lastVis = bS.c
      }
      let IS = NS.length;
      return HS.executeBundles(qS), HS.setBindGroup(0, uS), IS += AS(HS, SS._directBindings, gS), IS += AS(HS, SS._transparentBindings, gS), IS
    }

    function LS(SS, HS) {
      let gS = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const tS = wS(HS, SS.Bj)._buffer;
      if (tS === SS._lightsUBO) return;
      const bS = HS._device.createBindGroup({
        layout: jS(HS),
        entries: [{
          binding: 0,
          resource: {
            buffer: SS._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: tS
          }
        }]
      });
      SS._lightsUBO = tS, SS._sceneBG = bS, gS && (SS._ob = [])
    }

    function YS(SS, HS) {
      for (const gS of SS) gS.update?.(HS)
    }

    function AS(SS, HS, gS) {
      let tS = null,
        bS = 0;
      for (const XS of HS) {
        const HS = XS.renderable.mesh;
        HS && !1 === HS.visible || (XS.pipeline !== tS && (SS.setPipeline(XS.pipeline), tS = XS.pipeline), bS += XS.draw(SS, gS))
      }
      return bS
    }

    function yS(SS) {
      const HS = SS._materialSwapQueue;
      if (!HS[0] || SS._runtimeBuilds?.w) return;
      let tS, bS, XS;
      const xS = SS._renderables;
      for (const gS of HS) {
        const HS = gS.material;
        if (!HS) continue;
        const NS = gS._runtimeThinBuild;
        if (NS) {
          bS = NS(SS, gS, bS);
          continue
        }
        const qS = SS._groups.get(HS._buildGroup),
          uS = qS?.r;
        if (!uS) {
          (XS ??= []).push(gS);
          continue
        }
        if (qS._w?.(gS)) {
          (XS ??= []).push([gS, HS]);
          continue
        }
        const IS = SS._meshDisposables.get(gS);
        IS && (SS._meshDisposables.delete(gS), (0, aS.c)(SS.surface.engine, (() => IS.forEach((SS => SS())))));
        const fS = qS.o;
        let kS;
        for (let SS = xS.length; SS--;) xS[SS].mesh === gS && (kS = xS.splice(SS, 1)[0]);
        HS._csmGen = -~HS._csmGen;
        const KS = uS(SS, gS);
        if (fS) {
          const SS = fS.indexOf(kS);
          SS < 0 ? fS.push(KS) : fS[SS] = KS
        }
        tS = xS.push(KS)
      }
      if (tS && (xS.sort(((SS, HS) => SS.order - HS.order)), SS._renderableVersion++, SS._materialEpoch++), HS.length = 0, !XS) return bS;
      const NS = XS;
      return gS.e(363).then((() => gS(61433))).then((HS => {
        let {
          C: gS
        } = HS;
        return gS(SS, NS, bS)
      }), (HS => {
        const gS = SS._runtimeBuilds;
        gS ? gS._x(HS) : console.error(HS)
      }))
    }
    var VS = null;

    function iS(SS, HS) {
      const gS = SS.engine,
        bS = {
          _kind: "Bj",
          surface: SS,
          clearColor: {
            r: .2,
            g: .2,
            b: .3,
            a: 1
          },
          camera: null,
          lights: [],
          meshes: [],
          animationGroups: [],
          fog: null,
          clipPlane: null,
          shadowGenerators: [],
          imageProcessing: {
            exposure: 1,
            contrast: 1,
            toneMappingEnabled: !1
          },
          _renderables: [],
          _prePasses: [],
          _pickSources: [],
          _uniformUpdaters: [],
          fixedDeltaMs: 0,
          _beforeRender: [],
          _deferredBuilders: [],
          _groups: new Map,
          _disposables: [],
          _meshDisposables: new Map,
          _materialSwapQueue: [],
          _renderableVersion: 0,
          _materialEpoch: 0,
          _built: !1,
          _drawCallsPre: 0,
          _update() {
            gS.useFloatingOrigin && bS.camera && !bS.camera._useFloatingOrigin && (bS.camera._useFloatingOrigin = !0, bS.camera._viewVer = -1, bS.camera._vpVer = -1);
            const SS = bS.fixedDeltaMs > 0 ? bS.fixedDeltaMs : gS._currentDelta,
              HS = gS._currentEncoder;
            let tS = 0;
            for (const gS of bS._beforeRender) gS(SS);
            bS._materialSwapQueue.length && yS(bS);
            for (const XS of bS._prePasses) tS += XS.execute(HS, gS);
            for (const XS of bS._uniformUpdaters) XS.update(gS);
            bS._drawCallsPre = tS
          },
          _record: () => bS._frameGraph.execute(),
          _resize() {
            bS._frameGraph.build()
          }
        },
        xS = function() {
          const SS = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let HS = 0; HS < SS._tasks.length; HS++) XS(SS, SS._tasks[HS]);
              for (const HS of SS._tasks)
                for (const SS of HS._passes) SS._initialize()
            },
            execute() {
              let HS = 0;
              for (const gS of SS._tasks)
                if (!1 !== gS.executionEnabled)
                  if (gS.execute) HS += gS.execute();
                  else
                    for (const SS of gS._passes) HS += SS._execute();
              return HS
            },
            dispose() {
              for (const HS of SS._tasks) HS.dispose();
              SS._tasks.length = 0, SS._currentProcessedTask = null
            }
          };
          return SS
        }();
      if (bS._frameGraph = xS, !1 !== HS?.defaultRenderTask) {
        const HS = SS.msaaSamples > 1,
          XS = HS ? (0, tS.c)({
            lbl: "scene-color",
            format: SS.format,
            dFormat: "depth24plus-stencil8",
            samples: SS.msaaSamples,
            size: SS
          }) : SS.scRT,
          NS = HS ? void 0 : (0, tS.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: SS
          });
        ! function(SS, HS) {
          SS._tasks.push(HS)
        }(xS, OS({
          name: "Bj",
          rt: XS,
          rst: HS ? SS.scRT : void 0,
          depth: NS
        }, gS, bS))
      }
      return bS._disposables.push((() => xS.dispose())), bS
    }
    async function WS(SS) {
      const HS = SS;
      for (HS._built || (HS._materialSwapQueue.length = 0); HS._deferredBuilders.length;) {
        const SS = HS._deferredBuilders.splice(0);
        await Promise.all(SS.map((SS => SS())))
      }
      await yS(HS), VS?.get(HS)?.() || (HS._runtimeBuilds?._e(), HS._renderableVersion++, HS._built = !0), await (HS._rebuildHook?.(HS))
    }
    var zS = null;
    async function US(SS) {
      const HS = SS,
        tS = HS.surface;
      (0, bS.i)(tS, HS) || (await WS(SS), HS._renderables.sort(pS), await Promise.all(HS._frameGraph._tasks.map((SS => SS._preload?.()))), zS && await zS(HS), HS._frameGraph.build(), tS._renderingContexts[0] && (await gS.e(361).then((() => gS(61419)))).configureSwapchainOverlayScene(tS, HS), VS?.get(HS)?.() || (0, bS.j)(tS, HS))
    }
    var pS = (SS, HS) => SS.order - HS.order
  },
  41711: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS,
      f: () => IS
    });
    var tS = gS(41677),
      bS = gS(41685),
      XS = gS(41691),
      xS = gS(41696),
      NS = gS(41698),
      qS = gS(41701);

    function uS(SS, HS, gS) {
      let NS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (HS < 1 || gS < 1) && (0, tS.e)(676, HS, gS);
      const uS = SS._device,
        IS = NS.mipMaps ?? !1,
        fS = NS.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        kS = IS ? (0, qS.c)(HS, gS) : 1,
        aS = uS.createTexture({
          size: {
            width: HS,
            height: gS
          },
          format: fS,
          mipLevelCount: kS,
          usage: bS.h.TEXTURE_BINDING | bS.h.COPY_DST | bS.h.RENDER_ATTACHMENT
        }),
        KS = {
          addressModeU: NS.addressModeU ?? "clamp-to-edge",
          addressModeV: NS.addressModeV ?? "clamp-to-edge",
          minFilter: NS.minFilter ?? "linear",
          magFilter: NS.magFilter ?? "linear",
          mipmapFilter: IS ? "linear" : "nearest"
        },
        jS = (0, xS.d)(SS, KS),
        GS = {
          texture: aS,
          view: aS.createView(),
          sampler: jS,
          width: HS,
          height: gS
        };
      return (0, XS.e)(GS), SS._dlr && SS._dlr.t(GS, {
        kind: "dynamic",
        width: HS,
        height: gS,
        format: fS,
        levels: kS,
        samplerDesc: KS,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), GS
    }

    function IS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const bS = tS.invertY ?? !0,
        XS = tS.premultiplyAlpha ?? !1;
      SS._device.queue.copyExternalImageToTexture({
        source: gS,
        flipY: bS
      }, {
        texture: HS.texture,
        premultipliedAlpha: XS
      }, [HS.width, HS.height]);
      const xS = HS._recoverySource;
      xS && "dynamic" === xS.kind && (xS.source = gS, xS.flipY = bS, xS.premultipliedAlpha = XS), HS.texture.mipLevelCount > 1 && (0, NS.generateMipmaps)(SS, HS.texture)
    }
  },
  41709: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => qS
    });
    var tS = gS(41677),
      bS = gS(41685),
      XS = gS(41691),
      xS = gS(41696),
      NS = gS(41701);
    async function qS(SS, HS) {
      let qS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [uS, IS] = function(SS) {
        const HS = SS,
          gS = [
            [HS.displayWidth, HS.displayHeight],
            [HS.videoWidth, HS.videoHeight],
            [HS.naturalWidth, HS.naturalHeight],
            [HS.width, HS.height]
          ];
        for (const [tS, bS] of gS)
          if (void 0 !== tS && void 0 !== bS && Number.isInteger(tS) && Number.isInteger(bS) && tS > 0 && bS > 0) return [tS, bS];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(HS), [fS, kS] = function(SS, HS, gS) {
        if (void 0 === gS) return [SS, HS];
        if (!Number.isInteger(gS) || gS < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${gS})`);
        if (Math.max(SS, HS) <= gS) return [SS, HS];
        const tS = gS / Math.max(SS, HS);
        return SS >= HS ? [gS, Math.max(1, Math.round(HS * tS))] : [Math.max(1, Math.round(SS * tS)), gS]
      }(uS, IS, qS.maxDimension), aS = qS.mipMaps ?? !0, KS = qS.premultiplyAlpha ?? !1;
      let jS = HS,
        GS = null;
      const CS = {
        texture: null
      };
      try {
        fS === uS && kS === IS || (GS = await createImageBitmap(HS, {
          resizeWidth: fS,
          resizeHeight: kS,
          resizeQuality: "high",
          premultiplyAlpha: KS ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), jS = GS);
        const nS = SS._device,
          PS = qS.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          QS = aS ? (0, NS.c)(fS, kS) : 1,
          DS = QS > 1 ? (await Promise.resolve().then((() => gS(41698)))).generateMipmaps : null,
          wS = {
            addressModeU: qS.addressModeU ?? "repeat",
            addressModeV: qS.addressModeV ?? "repeat",
            minFilter: qS.minFilter ?? "linear",
            magFilter: qS.magFilter ?? "linear",
            mipmapFilter: aS ? "linear" : "nearest"
          };
        wS.maxAnisotropy = "linear" === wS.minFilter && "linear" === wS.magFilter && "linear" === wS.mipmapFilter ? 4 : 1;
        const hS = qS.invertY ?? !0,
          ZS = async HS => {
            let gS;
            nS.pushErrorScope("validation"), nS.pushErrorScope("out-of-memory");
            let XS = null;
            try {
              const gS = CS.texture = nS.createTexture({
                size: {
                  width: fS,
                  height: kS
                },
                format: PS,
                mipLevelCount: QS,
                usage: bS.h.TEXTURE_BINDING | bS.h.COPY_DST | bS.h.RENDER_ATTACHMENT
              });
              nS.queue.copyExternalImageToTexture({
                source: HS,
                flipY: hS
              }, {
                texture: gS,
                premultipliedAlpha: KS
              }, {
                width: fS,
                height: kS
              }), DS && DS(SS, gS), XS = (0, xS.d)(SS, wS)
            } catch (aS) {
              gS = aS
            }
            const [NS, qS] = await Promise.all([nS.popErrorScope(), nS.popErrorScope()]);
            if (gS) throw gS;
            const uS = qS ?? NS;
            if (uS) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${uS.message}`, {
              cause: uS
            });
            const IS = CS.texture;
            return IS && XS || (0, tS.e)(677), {
              texture: IS,
              view: IS.createView(),
              sampler: XS,
              width: fS,
              height: kS
            }
          }, JS = await (SS._dlr?.x(jS, fS, kS, PS, QS, wS, hS, KS, ZS)) ?? await ZS(jS);
        return (0, XS.e)(JS), JS
      } catch (nS) {
        throw CS.texture?.destroy(), nS
      } finally {
        GS?.close()
      }
    }
  },
  41698: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      generateMipmaps: () => aS,
      recordMipmaps: () => KS
    });
    var tS = gS(41685),
      bS = gS(41696),
      XS = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var xS = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      NS = null,
      qS = null,
      uS = null,
      IS = null,
      fS = null;

    function kS(SS) {
      const HS = SS._device;
      HS !== fS && (NS?.clear(), NS = null, qS = null, uS = null, IS = null, fS = null, fS = HS), qS ??= HS.createShaderModule({
        code: xS
      }), uS ??= function(SS) {
        return (0, bS.d)(SS, XS)
      }(SS), IS ??= HS.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: tS.d.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: tS.d.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function aS(SS, HS, gS) {
      const tS = SS._device,
        bS = tS.createCommandEncoder();
      KS(SS, HS, bS, gS), tS.queue.submit([bS.finish()])
    }

    function KS(SS, HS, gS, tS) {
      if (HS.mipLevelCount <= 1) return;
      const bS = SS._device,
        XS = function(SS, HS) {
          const gS = SS._device;
          kS(SS), NS ??= new Map;
          let tS = NS.get(HS);
          return tS || (tS = gS.createRenderPipeline({
            layout: gS.createPipelineLayout({
              bindGroupLayouts: [IS]
            }),
            vertex: {
              module: qS,
              entryPoint: "vs"
            },
            fragment: {
              module: qS,
              entryPoint: "fs",
              targets: [{
                format: HS
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), NS.set(HS, tS)), tS
        }(SS, HS.format),
        xS = null != tS ? {
          dimension: "2d",
          baseArrayLayer: tS,
          arrayLayerCount: 1
        } : {};
      for (let NS = 1; NS < HS.mipLevelCount; NS++) {
        const SS = HS.createView({
            baseMipLevel: NS - 1,
            mipLevelCount: 1,
            ...xS
          }),
          tS = HS.createView({
            baseMipLevel: NS,
            mipLevelCount: 1,
            ...xS
          }),
          qS = bS.createBindGroup({
            layout: IS,
            entries: [{
              binding: 0,
              resource: SS
            }, {
              binding: 1,
              resource: uS
            }]
          }),
          fS = gS.beginRenderPass({
            colorAttachments: [{
              view: tS,
              loadOp: "clear",
              storeOp: "store",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          });
        fS.setPipeline(XS), fS.setBindGroup(0, qS), fS.draw(3), fS.end()
      }
    }
  },
  41701: (SS, HS, gS) => {
    function tS(SS, HS) {
      return Math.floor(Math.log2(Math.max(SS, HS))) + 1
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  41670: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => uS,
      h: () => IS
    });
    var tS = gS(41677),
      bS = gS(41685),
      XS = gS(41691),
      xS = gS(41696),
      NS = gS(41698),
      qS = gS(41701);

    function uS(SS, HS, gS, NS) {
      let uS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (HS < 1 || gS < 1 || NS < 1) && (0, tS.e)(722, HS, gS, NS);
      const IS = SS._device,
        fS = uS.mipMaps ?? !0,
        kS = uS.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        aS = IS.createTexture({
          size: {
            width: HS,
            height: gS,
            depthOrArrayLayers: NS
          },
          dimension: "2d",
          format: kS,
          mipLevelCount: fS ? (0, qS.c)(HS, gS) : 1,
          usage: bS.h.TEXTURE_BINDING | bS.h.COPY_DST | bS.h.RENDER_ATTACHMENT
        }),
        KS = (0, xS.d)(SS, {
          addressModeU: uS.addressModeU ?? "repeat",
          addressModeV: uS.addressModeV ?? "repeat",
          minFilter: uS.minFilter ?? "linear",
          magFilter: uS.magFilter ?? "linear",
          mipmapFilter: fS ? "linear" : "nearest"
        }),
        jS = {
          texture: aS,
          view: aS.createView({
            dimension: "2d-array"
          }),
          sampler: KS,
          width: HS,
          height: gS,
          layers: NS
        };
      return (0, XS.e)(jS), jS
    }

    function IS(SS, HS, gS, bS) {
      let XS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (gS < 0 || gS >= HS.layers || (0 | gS) !== gS) && (0, tS.e)(723, HS.layers, gS);
      const xS = XS.invertY ?? !0,
        qS = XS.premultiplyAlpha ?? !1;
      SS._device.queue.copyExternalImageToTexture({
        source: bS,
        flipY: xS
      }, {
        texture: HS.texture,
        origin: [0, 0, gS],
        premultipliedAlpha: qS
      }, [HS.width, HS.height, 1]), HS.texture.mipLevelCount > 1 && (0, NS.generateMipmaps)(SS, HS.texture, gS)
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);