export const id = 275;
export const ids = [275];
export const modules = {
  39564: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => eF,
      e: () => tW,
      g: () => EF,
      i: () => QF,
      l: () => aW,
      m: () => TF
    });
    var CF = SF(39508);
    var AF = "Babylon Lite v1.32.0",
      uF = SF(39567);

    function hF(FF) {
      return "clientWidth" in FF
    }
    var bW = 1;

    function dF(FF, WF, SF) {
      const dF = WF.getContext("webgpu");
      dF || (0, CF.e)(54), hF(WF) && WF.setAttribute("data-engine", AF);
      const PF = SF?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        RF = SF?.srgb ? (iW = PF).endsWith("-srgb") ? iW : `${iW}-srgb` : PF;
      var iW;
      const eF = SF?.alphaMode ?? "opaque";
      dF.configure({
        device: FF._device,
        format: PF,
        alphaMode: eF,
        viewFormats: [RF]
      });
      const EF = 1 === SF?.msaaSamples ? 1 : 4,
        QF = (0, uF.e)({
          lbl: "swapchain",
          format: RF,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return QF._eager = !0, {
        engine: FF,
        canvas: WF,
        format: RF,
        msaaSamples: EF,
        scRT: QF,
        maxDevicePixelRatio: SF?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: bW++,
        _context: dF,
        _configureFormat: PF,
        _alphaMode: eF,
        _renderingContexts: []
      }
    }

    function PF(FF) {
      const WF = FF._context.getCurrentTexture(),
        SF = FF.scRT;
      SF._colorTexture = WF, SF._colorView = WF.createView({
        format: FF.format
      }), SF._width = WF.width, SF._height = WF.height
    }

    function RF(FF) {
      const WF = FF.canvas;
      if (!hF(WF)) return;
      const SF = FF._w ?? WF.clientWidth,
        CF = FF._h ?? WF.clientHeight;
      if (!(SF > 0 && CF > 0)) return;
      const AF = Math.min(globalThis.devicePixelRatio || 1, FF.maxDevicePixelRatio);
      iW(FF, SF * AF | 0, CF * AF | 0)
    }

    function iW(FF, WF, SF) {
      const CF = FF.canvas,
        AF = 0 | WF,
        uF = 0 | SF;
      if (AF > 0 && uF > 0 && (AF !== CF.width || uF !== CF.height)) {
        CF.width = AF, CF.height = uF, FF.scRT._width = AF, FF.scRT._height = uF;
        for (const WF of FF._renderingContexts) WF._resize?.()
      }
    }
    var eF = 0;

    function EF(FF, WF) {
      return -1 !== FF._renderingContexts.indexOf(WF)
    }

    function QF(FF, WF) {
      return -1 === FF._renderingContexts.indexOf(WF) && (FF._renderingContexts.push(WF), !0)
    }
    var rW = null;
    var gW = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function tW(FF, WF) {
      const uF = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...rW ? rW() : {}
      });
      uF || (0, CF.e)(47);
      const hF = rW?.deviceFeatures?.(uF, WF) ?? function(FF) {
          return gW.filter((WF => FF.features.has(WF)))
        }(uF),
        bW = await uF.requestDevice({
          requiredFeatures: hF,
          requiredLimits: WF?.requiredLimits
        });
      console.log(`${AF} - WebGPU engine`);
      const iW = !!WF?.useHighPrecisionMatrix,
        eF = !!WF?.useFloatingOrigin;
      if (eF && !iW && (0, CF.e)(48), iW) {
        const {
          allocateF64Mat4: FF
        } = await SF.e(329).then((() => SF(58976)));
        0
      }
      let EF, QF, tW, TF;
      if (eF) {
        const [{
          wrapRenderableForFO: FF,
          lightFoVersion: WF,
          applyLightFoOffset: CF
        }, {
          makePackMeshWorld: AF
        }] = await Promise.all([SF.e(330).then((() => SF(58984))), SF.e(331).then((() => SF(58992)))]);
        EF = FF, QF = AF, tW = WF, TF = CF
      }
      const aW = {
          _device: bW
        },
        kW = [aW];
      return Object.assign(aW, {
        engine: aW,
        surfaces: kW,
        _surfaces: kW,
        _device: bW,
        _options: WF,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: iW,
        useFloatingOrigin: eF,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: EF,
        _makePackMeshWorld: QF,
        _lightFoVersion: tW,
        _applyLightFoOffset: TF
      }, dF(aW, FF, WF)), RF(aW), PF(aW), aW
    }

    function TF(FF, WF, SF) {
      iW(FF, WF, SF)
    }

    function aW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FF.surfaces;
      if (SF !== FF.surfaces)
        for (let AF = SF.length; AF--;) SF[AF].engine !== FF && (0, CF.e)(49);
      kW(FF, WF, SF)
    }

    function kW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FF._surfaces,
        CF = 0;
      for (let uF = SF.length; uF--;) CF += SF[uF]._renderingContexts.length;
      if (!CF) return FF.drawCallCount = 0, FF._flushGpuRetirements?.(FF);
      const AF = FF._device.createCommandEncoder({
        label: "frame"
      });
      FF._currentEncoder = AF, FF._currentDelta = WF;
      try {
        FF._gpuTimerBegin?.(AF), CF = 0;
        for (let FF = 0; FF < SF.length; FF++) {
          const WF = SF[FF];
          WF._capturePreFrame?.(WF), PF(WF);
          const AF = WF._renderingContexts;
          for (let FF = 0; FF < AF.length; FF++) {
            const WF = AF[FF];
            WF._update(), CF += WF._drawCallsPre + WF._record()
          }
        }
        const WF = FF._currentEncoder;
        for (let FF = 0; FF < SF.length; FF++) {
          const CF = SF[FF];
          CF._captureService?.(CF, WF)
        }
        FF._gpuTimerEnd?.(WF), FF._cbs[0] = WF.finish(), FF._device.queue.submit(FF._cbs), FF._flushGpuRetirements?.(FF), FF.drawCallCount = CF, FF._gpuTimerResolve?.()
      } finally {
        FF._currentEncoder = void 0
      }
    }
  },
  39515: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      d: () => uF,
      e: () => CF
    });
    var CF = globalThis.GPUTextureUsage,
      AF = globalThis.GPUBufferUsage,
      uF = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  39588: (FF, WF, SF) => {
    function CF(FF) {
      AF(FF.splice(0))
    }

    function AF(FF) {
      for (const SF of FF) try {
        SF()
      } catch (WF) {
        console.error("GPU resource retirement failed.", WF)
      }
    }

    function uF(FF, WF) {
      FF._flushGpuRetirements ??= hF, (FF._retirements ??= []).push(WF)
    }

    function hF(FF) {
      const WF = FF._retirements;
      if (!WF) return;
      FF._retirements = null;
      const SF = FF._retiring ??= new Set;
      SF.add(WF), queueMicrotask((() => {
        FF._device.queue.onSubmittedWorkDone().then((() => {
          SF.delete(WF), CF(WF)
        })).catch((() => {}))
      }))
    }
    SF.d(WF, {
      b: () => uF
    })
  },
  39567: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF,
      h: () => hF,
      i: () => bW
    });
    var CF = SF(39515);

    function AF(FF) {
      const WF = FF.size;
      return "canvas" in WF ? WF.canvas : WF
    }

    function uF(FF) {
      return {
        _descriptor: FF,
        _resolveSize: AF,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function hF(FF, WF) {
      if (FF._eager) return void FF._syncEager?.(WF);
      bW(FF);
      const SF = FF._descriptor,
        {
          width: uF,
          height: hF
        } = (FF._resolveSize ?? AF)(SF);
      FF._width = uF, FF._height = hF;
      const dF = WF._device;
      SF.format && (FF._colorTexture = dF.createTexture({
        label: SF.lbl,
        size: {
          width: uF,
          height: hF
        },
        format: SF.format,
        sampleCount: SF.samples,
        usage: CF.e.RENDER_ATTACHMENT | CF.e.TEXTURE_BINDING | CF.e.COPY_SRC | CF.e.COPY_DST
      }), FF._colorView = FF._colorTexture.createView()), SF.dFormat && (FF._depthTexture = dF.createTexture({
        label: SF.lbl,
        size: {
          width: uF,
          height: hF
        },
        format: SF.dFormat,
        sampleCount: SF.samples,
        usage: CF.e.RENDER_ATTACHMENT | CF.e.TEXTURE_BINDING
      }), FF._depthView = FF._depthTexture.createView())
    }

    function bW(FF) {
      if (!FF || FF._eager && !FF._disposeAttachments) return;
      const WF = FF._colorTexture,
        SF = FF._depthTexture;
      if (FF._colorTexture = FF._depthTexture = null, FF._colorView = FF._depthView = null, FF._width = FF._height = 0, FF._disposeAttachments) FF._disposeAttachments(WF, SF);
      else try {
        WF?.destroy()
      } finally {
        !1 !== FF._ownsDepthTexture && SF?.destroy()
      }
    }
  },
  39579: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF,
      f: () => AF,
      i: () => uF
    });
    var CF = Float32Array,
      AF = Float64Array,
      uF = Uint32Array
  },
  39595: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    var CF = 16
  },
  39508: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = null;

    function AF(FF) {
      for (var WF = arguments.length, SF = new Array(WF > 1 ? WF - 1 : 0), AF = 1; AF < WF; AF++) SF[AF - 1] = arguments[AF];
      const uF = new Error(CF?.(FF, SF) ?? `#${FF}`);
      throw uF.lite = SF, uF
    }
  },
  39543: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(39523);

    function AF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const SF = WF.compare,
        AF = WF.lodMinClamp ?? 0,
        uF = WF.lodMaxClamp ?? 32,
        hF = void 0 !== SF || 0 !== AF || 32 !== uF ? `${SF??""}:${AF}:${uF}` : "";
      return (0, CF.b)(FF, WF, hF)
    }
  },
  39517: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = null;

    function AF(FF) {
      const WF = CF ??= new WeakMap;
      WF.set(FF, (WF.get(FF) ?? 0) + 1)
    }

    function uF(FF) {
      AF(FF.texture)
    }
  },
  39523: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW
    });
    var CF = null,
      AF = "nearest",
      uF = "clamp-to-edge",
      hF = {
        minFilter: AF,
        magFilter: AF,
        mipmapFilter: AF,
        addressModeU: uF,
        addressModeV: uF,
        addressModeW: uF,
        maxAnisotropy: 1
      };

    function bW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const AF = FF._device,
        uF = CF ??= new WeakMap;
      let bW = uF.get(AF);
      bW || uF.set(AF, bW = new Map);
      let dF = SF;
      for (const CF in hF) {
        const FF = CF;
        dF += `:${WF[FF]??hF[FF]}`
      }
      let PF = bW.get(dF);
      return PF || bW.set(dF, PF = AF.createSampler(WF)), PF
    }
  },
  39573: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => IF,
      g: () => sF
    });
    var CF = SF(39567),
      AF = SF(39564);

    function uF(FF, WF) {
      WF._passes.length = 0, FF._currentProcessedTask = WF;
      try {
        WF.record()
      } finally {
        FF._currentProcessedTask = null
      }
    }
    var hF = SF(39579);

    function bW(FF) {
      const WF = FF.worldMatrixVersion;
      if (FF._viewVer === WF) return FF._viewCache;
      const SF = FF._viewCache,
        CF = FF.worldMatrix,
        AF = FF._useFloatingOrigin,
        uF = AF ? 0 : CF[12],
        hF = AF ? 0 : CF[13],
        bW = AF ? 0 : CF[14];
      return SF[0] = CF[0], SF[1] = CF[4], SF[2] = CF[8], SF[3] = 0, SF[4] = CF[1], SF[5] = CF[5], SF[6] = CF[9], SF[7] = 0, SF[8] = CF[2], SF[9] = CF[6], SF[10] = CF[10], SF[11] = 0, SF[12] = -(CF[0] * uF + CF[1] * hF + CF[2] * bW), SF[13] = -(CF[4] * uF + CF[5] * hF + CF[6] * bW), SF[14] = -(CF[8] * uF + CF[9] * hF + CF[10] * bW), SF[15] = 1, FF._viewVer = WF, SF
    }
    var dF = null;

    function PF(FF) {
      return FF._projFov === FF.fov && FF._projNear === FF.nearPlane && FF._projFar === FF.farPlane || (FF._projFov = FF.fov, FF._projNear = FF.nearPlane, FF._projFar = FF.farPlane, FF._projRev = (FF._projRev ?? 0) + 1), FF.worldMatrixVersion + (FF._projRev ?? 0)
    }

    function RF(FF, WF) {
      const SF = PF(FF);
      if (FF._projVer === SF && FF._projAspect === WF) return FF._projCache;
      const CF = FF._projCache;
      return null !== dF && FF.ortho ? dF(FF, WF, CF) : function(FF, WF, SF, CF, AF) {
        const uF = 1 / Math.tan(.5 * WF),
          hF = AF - CF;
        FF[0] = uF / SF, FF[5] = uF, FF[10] = -CF / hF, FF[11] = 1, FF[14] = AF * CF / hF
      }(CF, FF.fov, WF, FF.nearPlane, FF.farPlane), FF._projVer = SF, FF._projAspect = WF, CF
    }
    var iW = SF(39515);

    function eF(FF, WF, SF) {
      return FF._device.createBuffer({
        label: SF,
        size: (CF = WF, AF = 16, Math.ceil(CF / AF) * AF),
        usage: iW.b.UNIFORM | iW.b.COPY_DST
      });
      var CF, AF
    }
    var EF = SF(39588),
      QF = null;

    function rW(FF) {
      const WF = FF._device,
        SF = QF ??= new WeakMap;
      let CF = SF.get(WF);
      return CF || (CF = WF.createBindGroupLayout({
        label: "ju",
        entries: [{
          binding: 0,
          visibility: iW.d.VERTEX | iW.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: iW.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), SF.set(WF, CF)), CF
    }

    function gW(FF, WF, SF) {
      const CF = FF._device,
        AF = eF(FF, WF.byteLength, SF);
      try {
        CF.queue.writeBuffer(AF, 0, WF.buffer, WF.byteOffset, WF.byteLength)
      } catch (uF) {
        throw AF.destroy(), uF
      }
      return AF
    }
    var tW = SF(39595),
      TF = new hF.i(1),
      aW = new hF.b(TF.buffer);

    function kW(FF) {
      let WF = 0;
      for (const SF of FF) WF += SF._lightVersion ?? 0;
      return WF
    }

    function qW(FF, WF) {
      FF.fill(0);
      let SF = 0;
      for (const CF of WF) {
        if (SF >= tW.c) break;
        CF._writeLightUbo && (CF._writeLightUbo(FF, 4 + 16 * SF), SF++)
      }
      TF[0] = SF, FF[0] = aW[0]
    }

    function VF(FF, WF) {
      let SF = WF._lightGpuState;
      const CF = 16 + 16 * tW.c * 4;
      if (SF && SF._byteSize === CF) return SF;
      const AF = !SF;
      SF?._buffer.destroy();
      const uF = new hF.b(CF / 4);
      return qW(uF, WF.lights), FF._applyLightFoOffset?.(uF, WF), SF = {
        _buffer: gW(FF, uF),
        _scratch: uF,
        YSF: kW(WF.lights) + (FF._lightFoVersion?.(WF) ?? 0),
        _listVersion: WF._lightListVersion ?? 0,
        _lightCount: WF.lights.length,
        _byteSize: CF
      }, WF._lightGpuState = SF, AF && WF._disposables.push((() => {
        WF._lightGpuState?._buffer.destroy(), WF._lightGpuState = void 0
      })), SF
    }

    function NF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const AF = WF;
      if (0 === CF && 16 === AF.length) return void FF.set(AF, SF);
      const uF = CF,
        hF = SF;
      FF[hF + 0] = AF[uF + 0], FF[hF + 1] = AF[uF + 1], FF[hF + 2] = AF[uF + 2], FF[hF + 3] = AF[uF + 3], FF[hF + 4] = AF[uF + 4], FF[hF + 5] = AF[uF + 5], FF[hF + 6] = AF[uF + 6], FF[hF + 7] = AF[uF + 7], FF[hF + 8] = AF[uF + 8], FF[hF + 9] = AF[uF + 9], FF[hF + 10] = AF[uF + 10], FF[hF + 11] = AF[uF + 11], FF[hF + 12] = AF[uF + 12], FF[hF + 13] = AF[uF + 13], FF[hF + 14] = AF[uF + 14], FF[hF + 15] = AF[uF + 15]
    }

    function DF(FF, WF, SF, CF, AF) {
      FF.fill(0);
      const uF = function(FF, WF) {
          const SF = PF(FF);
          if (FF._vpVer === SF && FF._vpAspect === WF) return FF._vpCache;
          const CF = FF._vpCache;
          return function(FF, WF, SF, CF, AF, uF) {
            const hF = SF[CF],
              bW = SF[CF + 1],
              dF = SF[CF + 2],
              PF = SF[CF + 3],
              RF = SF[CF + 4],
              iW = SF[CF + 5],
              eF = SF[CF + 6],
              EF = SF[CF + 7],
              QF = SF[CF + 8],
              rW = SF[CF + 9],
              gW = SF[CF + 10],
              tW = SF[CF + 11],
              TF = SF[CF + 12],
              aW = SF[CF + 13],
              kW = SF[CF + 14],
              qW = SF[CF + 15];
            let VF = AF[uF],
              NF = AF[uF + 1],
              DF = AF[uF + 2],
              LF = AF[uF + 3];
            FF[WF] = hF * VF + RF * NF + QF * DF + TF * LF, FF[WF + 1] = bW * VF + iW * NF + rW * DF + aW * LF, FF[WF + 2] = dF * VF + eF * NF + gW * DF + kW * LF, FF[WF + 3] = PF * VF + EF * NF + tW * DF + qW * LF, VF = AF[uF + 4], NF = AF[uF + 5], DF = AF[uF + 6], LF = AF[uF + 7], FF[WF + 4] = hF * VF + RF * NF + QF * DF + TF * LF, FF[WF + 5] = bW * VF + iW * NF + rW * DF + aW * LF, FF[WF + 6] = dF * VF + eF * NF + gW * DF + kW * LF, FF[WF + 7] = PF * VF + EF * NF + tW * DF + qW * LF, VF = AF[uF + 8], NF = AF[uF + 9], DF = AF[uF + 10], LF = AF[uF + 11], FF[WF + 8] = hF * VF + RF * NF + QF * DF + TF * LF, FF[WF + 9] = bW * VF + iW * NF + rW * DF + aW * LF, FF[WF + 10] = dF * VF + eF * NF + gW * DF + kW * LF, FF[WF + 11] = PF * VF + EF * NF + tW * DF + qW * LF, VF = AF[uF + 12], NF = AF[uF + 13], DF = AF[uF + 14], LF = AF[uF + 15], FF[WF + 12] = hF * VF + RF * NF + QF * DF + TF * LF, FF[WF + 13] = bW * VF + iW * NF + rW * DF + aW * LF, FF[WF + 14] = dF * VF + eF * NF + gW * DF + kW * LF, FF[WF + 15] = PF * VF + EF * NF + tW * DF + qW * LF
          }(CF, 0, RF(FF, WF), 0, bW(FF), 0), FF._vpVer = SF, FF._vpAspect = WF, CF
        }(CF, AF),
        hF = bW(CF),
        dF = CF.worldMatrix;
      NF(FF, uF, 0), NF(FF, hF, 16), WF.useFloatingOrigin ? (FF[32] = 0, FF[33] = 0, FF[34] = 0) : (FF[32] = dF[12], FF[33] = dF[13], FF[34] = dF[14]), FF[87] = WF.canvas.width;
      const iW = SF.imageProcessing;
      FF[76] = iW.exposure, FF[77] = iW.contrast, FF[78] = SF._envTextures?.lodGenerationScale ?? .8, FF[79] = +iW.toneMappingEnabled, FF[37] = WF.canvas.height
    }

    function LF(FF, WF) {
      return {
        _renderables: FF,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: WF
      }
    }

    function mW(FF, WF, SF) {
      FF.clr ??= !0;
      const AF = FF.rt._descriptor,
        uF = FF.depth?._descriptor,
        dF = {
          _colorFormat: AF.format,
          _depthStencilFormat: uF?.dFormat ?? AF.dFormat,
          _depthCompare: AF.depthCompare ?? uF?.depthCompare,
          _sampleCount: AF.samples
        },
        RF = {
          loadOp: "clear",
          storeOp: "store"
        },
        iW = {
          ...LF([], -1),
          name: FF.name,
          _config: FF,
          _ownsTargets: !FF.sharedRt,
          engine: WF,
          ju: SF,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [RF]
          },
          _colorAttachment: RF,
          _sceneUBO: eF(WF, 368),
          _suData: new hF.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: dF,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (iW._disposed) throw new Error("RenderTask has been disposed.");
            iW._recordExplicit ? iW._recordExplicit(iW, !0) : ZF(iW, !1 !== FF.autoMirror ? SF._renderables.slice() : iW._renderables, !0)
          },
          execute: () => function(FF, WF, SF) {
            if (!1 === FF.enabled) return 0;
            const CF = FF.ju;
            ! function(FF, WF, SF) {
              const CF = FF.ju;
              !1 !== FF._config.autoMirror && FF._lastVersion !== CF._renderableVersion && ZF(FF, CF._renderables.slice());
              YF(FF, WF);
              const AF = FF._updateContext,
                uF = FF._config.cam ?? CF.camera;
              SF._colorFormat && (FF._config._skipClusteredLights || CF._clusteredLightUpdater?.(uF, AF.targetWidth, AF.targetHeight), function(FF, WF) {
                const SF = VF(FF, WF),
                  CF = kW(WF.lights) + (FF._lightFoVersion?.(WF) ?? 0),
                  AF = WF._lightListVersion ?? 0;
                CF === SF.YSF && AF === SF._listVersion && WF.lights.length === SF._lightCount || (SF.YSF = CF, SF._listVersion = AF, SF._lightCount = WF.lights.length, qW(SF._scratch, WF.lights), FF._applyLightFoOffset?.(SF._scratch, WF), FF._device.queue.writeBuffer(SF._buffer, 0, SF._scratch)), SF._buffer
              }(WF, CF));
              (function(FF, WF, SF, CF) {
                if (!CF) return;
                const AF = CF.viewport,
                  uF = FF._config.rt,
                  hF = (FF._config.cs ? WF.canvas.width / WF.canvas.height : uF._width / uF._height) * (AF ? AF.width / AF.height : 1),
                  bW = SF.fog,
                  dF = SF.imageProcessing,
                  RF = PF(CF),
                  iW = SF._envTextures,
                  eF = FF._sceneUboCacheKey;
                if (eF[0] === CF && eF[1] === bW && eF[2] === RF && eF[3] === hF && eF[4] === dF.exposure && eF[5] === dF.contrast && eF[6] === iW) return;
                eF[0] = CF, eF[1] = bW, eF[2] = RF, eF[3] = hF, eF[4] = dF.exposure, eF[5] = dF.contrast, eF[6] = iW;
                const EF = FF._suData;
                DF(EF, WF, SF, CF, hF);
                const QF = SF._sceneUboContributors;
                if (QF)
                  for (const PF of QF) PF(EF, SF);
                WF._device.queue.writeBuffer(FF._sceneUBO, 0, EF)
              })(FF, WF, CF, uF), AF.QAF = uF, FF._batchState?._reset(), MF(FF._opaqueBindings, AF), MF(FF._directBindings, AF), MF(FF._transparentBindings, AF), FF._batchState?._flush(WF),
                function(FF, WF) {
                  const SF = FF._transparentBindings;
                  if (SF.length <= 1 || !WF) return;
                  const CF = bW(WF);
                  for (const AF of SF) {
                    const FF = AF.renderable._worldCenter;
                    AF._sortDistance = FF ? FF[0] * CF[2] + FF[1] * CF[6] + FF[2] * CF[10] + CF[14] : 0
                  }
                  SF.sort(OF)
                }(FF, uF)
            }(FF, WF, SF);
            const AF = FF._colorAttachment,
              uF = FF._config;
            uF.rt._colorView && (uF.rt === CF.surface.scRT && (AF.view = uF.rt._colorView), AF.resolveTarget = uF.rst?._colorView ?? void 0, AF.clearValue = uF.clrColor ?? CF.clearColor, AF.loadOp = uF.clr ? "clear" : "load");
            if (FF._executeWithTransmission) return FF._executeWithTransmission(SF._sampleCount);
            const hF = WF._currentEncoder.beginRenderPass(FF._renderPassDescriptor),
              dF = oF(FF, hF);
            return hF.end(), dF
          }(iW, WF, dF),
          dispose() {
            if (iW._disposed) return;
            iW._disposed = !0;
            const WF = iW._pendingMeshes;
            WF && (WF.length = 0);
            for (const FF of iW._renderables) iW._retireRenderable?.(iW.engine, FF);
            iW._passes.length = iW._opaqueBindings.length = iW._directBindings.length = 0, iW._transparentBindings.length = iW._renderables.length = iW._ob.length = 0, iW._ownsTargets && ((0, CF.i)(FF.rt), (0, CF.i)(FF.rst)), FF.depth?._eager || (0, CF.i)(FF.depth);
            const SF = iW._sceneUBO;
            (0, EF.b)(iW.engine, (() => SF.destroy())), iW._batchState?._release(iW.engine), iW._batchState = void 0
          }
        };
      return iW
    }

    function OF(FF, WF) {
      return WF._sortDistance - FF._sortDistance || FF.renderable.order - WF.renderable.order
    }

    function xW(FF, WF) {
      return FF.renderable.order - WF.renderable.order
    }

    function ZF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FF._renderables,
        SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        AF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        uF = arguments.length > 4 ? arguments[4] : void 0;
      const hF = FF._config,
        bW = hF.rt,
        dF = FF._batchState,
        PF = LF(WF, FF.ju._renderableVersion);
      if (SF) {
        const WF = (WF, SF) => {
          WF && (SF || FF._ownsTargets || WF._eager) && (0, CF.h)(WF, FF.engine)
        };
        WF(bW), bW._descriptor.samples > 1 && WF(hF.rst), WF(hF.depth, !0)
      }
      const {
        _opaqueBindings: RF,
        _directBindings: iW,
        _transparentBindings: eF
      } = PF;
      try {
        for (const SF of WF) {
          const WF = SF.bind(FF.engine, FF._targetSignature);
          PF._batchState = FF._targetSignature._collectBatches?.(PF._batchState, WF), SF.isTransparent || SF._transmissive ? eF.push(WF) : SF._direct ? iW.push(WF) : RF.push(WF)
        }
        RF.sort(xW), iW.sort(xW), SF && YF(FF, FF.engine, !1)
      } catch (EF) {
        throw PF._batchState?._release(void 0, uF ?? [dF]), EF
      }
      return SF && (! function(FF, WF) {
        const SF = FF._config,
          CF = FF._colorAttachment;
        CF.view = WF._colorView, FF._renderPassDescriptor.colorAttachments = WF._colorView ? [CF] : [];
        const AF = SF.depth ?? WF,
          uF = AF._depthView;
        let hF;
        if (uF) {
          const FF = AF._descriptor,
            WF = (SF.depth ? AF._eager : !1 === SF.depthClear) ? "load" : "clear";
          hF = {
            view: uF,
            depthClearValue: FF.depthClearValue ?? 0,
            depthLoadOp: WF,
            depthStoreOp: "store"
          }, FF.dFormat?.includes("stencil") && (hF.stencilClearValue = 0, hF.stencilLoadOp = WF, hF.stencilStoreOp = "store")
        }
        FF._renderPassDescriptor.depthStencilAttachment = hF
      }(FF, bW), FF._updateContext.targetWidth = bW._width, FF._updateContext.targetHeight = bW._height), AF && (Object.assign(FF, PF), dF?._release(FF.engine, [PF._batchState])), PF
    }

    function oF(FF, WF) {
      const SF = FF.engine,
        CF = FF._config,
        uF = CF.rt,
        hF = FF.ju,
        bW = FF._opaqueBindings,
        dF = FF._ob,
        PF = FF._sceneBG;
      if (function(FF, WF, SF, CF) {
          const AF = WF?.viewport;
          if (!AF) return;
          const uF = Math.floor(AF.x * SF),
            hF = Math.floor((1 - AF.y - AF.height) * CF),
            bW = Math.ceil((AF.x + AF.width) * SF) - uF,
            dF = Math.ceil((1 - AF.y) * CF) - hF;
          FF.setViewport(uF, hF, bW, dF, 0, 1), FF.setScissorRect(uF, hF, bW, dF)
        }(WF, CF.cam ?? hF.camera, uF._width, uF._height), WF.setBindGroup(0, PF), FF._lastVis !== AF.c || !dF.length) {
        const WF = uF._descriptor,
          CF = SF._device.createRenderBundleEncoder({
            colorFormats: WF.format ? [WF.format] : [],
            depthStencilFormat: FF._targetSignature._depthStencilFormat,
            sampleCount: WF.samples
          });
        CF.setBindGroup(0, PF), cW(CF, bW, SF), dF[0] = CF.finish(), FF._lastVis = AF.c
      }
      let RF = bW.length;
      return WF.executeBundles(dF), WF.setBindGroup(0, PF), RF += cW(WF, FF._directBindings, SF), RF += cW(WF, FF._transparentBindings, SF), RF
    }

    function YF(FF, WF) {
      let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const CF = VF(WF, FF.ju)._buffer;
      if (CF === FF._lightsUBO) return;
      const AF = WF._device.createBindGroup({
        layout: rW(WF),
        entries: [{
          binding: 0,
          resource: {
            buffer: FF._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: CF
          }
        }]
      });
      FF._lightsUBO = CF, FF._sceneBG = AF, SF && (FF._ob = [])
    }

    function MF(FF, WF) {
      for (const SF of FF) SF.update?.(WF)
    }

    function cW(FF, WF, SF) {
      let CF = null,
        AF = 0;
      for (const uF of WF) {
        const WF = uF.renderable.mesh;
        WF && !1 === WF.visible || (uF.pipeline !== CF && (FF.setPipeline(uF.pipeline), CF = uF.pipeline), AF += uF.draw(FF, SF))
      }
      return AF
    }

    function GF(FF) {
      const WF = FF._materialSwapQueue;
      if (!WF[0] || FF._runtimeBuilds?.w) return;
      let CF, AF, uF;
      const hF = FF._renderables;
      for (const SF of WF) {
        const WF = SF.material;
        if (!WF) continue;
        const bW = SF._runtimeThinBuild;
        if (bW) {
          AF = bW(FF, SF, AF);
          continue
        }
        const dF = FF._groups.get(WF._buildGroup),
          PF = dF?.r;
        if (!PF) {
          (uF ??= []).push(SF);
          continue
        }
        if (dF._w?.(SF)) {
          (uF ??= []).push([SF, WF]);
          continue
        }
        const RF = FF._meshDisposables.get(SF);
        RF && (FF._meshDisposables.delete(SF), (0, EF.b)(FF.surface.engine, (() => RF.forEach((FF => FF())))));
        const iW = dF.o;
        let eF;
        for (let FF = hF.length; FF--;) hF[FF].mesh === SF && (eF = hF.splice(FF, 1)[0]);
        WF._csmGen = -~WF._csmGen;
        const QF = PF(FF, SF);
        if (iW) {
          const FF = iW.indexOf(eF);
          FF < 0 ? iW.push(QF) : iW[FF] = QF
        }
        CF = hF.push(QF)
      }
      if (CF && (hF.sort(((FF, WF) => FF.order - WF.order)), FF._renderableVersion++, FF._materialEpoch++), WF.length = 0, !uF) return AF;
      const bW = uF;
      return SF.e(335).then((() => SF(59019))).then((WF => {
        let {
          C: SF
        } = WF;
        return SF(FF, bW, AF)
      }), (WF => {
        const SF = FF._runtimeBuilds;
        SF ? SF._x(WF) : console.error(WF)
      }))
    }
    var zW = null;

    function IF(FF, WF) {
      const SF = FF.engine,
        AF = {
          _kind: "ju",
          surface: FF,
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
            SF.useFloatingOrigin && AF.camera && !AF.camera._useFloatingOrigin && (AF.camera._useFloatingOrigin = !0, AF.camera._viewVer = -1, AF.camera._vpVer = -1);
            const FF = AF.fixedDeltaMs > 0 ? AF.fixedDeltaMs : SF._currentDelta,
              WF = SF._currentEncoder;
            let CF = 0;
            for (const SF of AF._beforeRender) SF(FF);
            AF._materialSwapQueue.length && GF(AF);
            for (const uF of AF._prePasses) CF += uF.execute(WF, SF);
            for (const uF of AF._uniformUpdaters) uF.update(SF);
            AF._drawCallsPre = CF
          },
          _record: () => AF._frameGraph.execute(),
          _resize() {
            AF._frameGraph.build()
          }
        },
        hF = function() {
          const FF = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let WF = 0; WF < FF._tasks.length; WF++) uF(FF, FF._tasks[WF]);
              for (const WF of FF._tasks)
                for (const FF of WF._passes) FF._initialize()
            },
            execute() {
              let WF = 0;
              for (const SF of FF._tasks)
                if (!1 !== SF.executionEnabled)
                  if (SF.execute) WF += SF.execute();
                  else
                    for (const FF of SF._passes) WF += FF._execute();
              return WF
            },
            dispose() {
              for (const WF of FF._tasks) WF.dispose();
              FF._tasks.length = 0, FF._currentProcessedTask = null
            }
          };
          return FF
        }();
      if (AF._frameGraph = hF, !1 !== WF?.defaultRenderTask) {
        const WF = FF.msaaSamples > 1,
          uF = WF ? (0, CF.e)({
            lbl: "scene-color",
            format: FF.format,
            dFormat: "depth24plus-stencil8",
            samples: FF.msaaSamples,
            size: FF
          }) : FF.scRT,
          bW = WF ? void 0 : (0, CF.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: FF
          });
        ! function(FF, WF) {
          FF._tasks.push(WF)
        }(hF, mW({
          name: "ju",
          rt: uF,
          rst: WF ? FF.scRT : void 0,
          depth: bW
        }, SF, AF))
      }
      return AF._disposables.push((() => hF.dispose())), AF
    }
    async function fF(FF) {
      const WF = FF;
      for (WF._built || (WF._materialSwapQueue.length = 0); WF._deferredBuilders.length;) {
        const FF = WF._deferredBuilders.splice(0);
        await Promise.all(FF.map((FF => FF())))
      }
      await GF(WF), zW?.get(WF)?.() || (WF._runtimeBuilds?._e(), WF._renderableVersion++, WF._built = !0), await (WF._rebuildHook?.(WF))
    }
    var yW = null;
    async function sF(FF) {
      const WF = FF,
        CF = WF.surface;
      (0, AF.g)(CF, WF) || (await fF(FF), WF._renderables.sort(nF), await Promise.all(WF._frameGraph._tasks.map((FF => FF._preload?.()))), yW && await yW(WF), WF._frameGraph.build(), CF._renderingContexts[0] && (await SF.e(333).then((() => SF(59003)))).configureSwapchainOverlayScene(CF, WF), zW?.get(WF)?.() || (0, AF.i)(CF, WF))
    }
    var nF = (FF, WF) => FF.order - WF.order
  },
  39555: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => PF,
      d: () => RF
    });
    var CF = SF(39508),
      AF = SF(39515),
      uF = SF(39517),
      hF = SF(39523),
      bW = SF(39530),
      dF = SF(39534);

    function PF(FF, WF, SF) {
      let bW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (WF < 1 || SF < 1) && (0, CF.e)(676, WF, SF);
      const PF = FF._device,
        RF = bW.mipMaps ?? !1,
        iW = bW.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        eF = RF ? (0, dF.e)(WF, SF) : 1,
        EF = PF.createTexture({
          size: {
            width: WF,
            height: SF
          },
          format: iW,
          mipLevelCount: eF,
          usage: AF.e.TEXTURE_BINDING | AF.e.COPY_DST | AF.e.RENDER_ATTACHMENT
        }),
        QF = {
          addressModeU: bW.addressModeU ?? "clamp-to-edge",
          addressModeV: bW.addressModeV ?? "clamp-to-edge",
          minFilter: bW.minFilter ?? "linear",
          magFilter: bW.magFilter ?? "linear",
          mipmapFilter: RF ? "linear" : "nearest"
        },
        rW = (0, hF.b)(FF, QF),
        gW = {
          texture: EF,
          view: EF.createView(),
          sampler: rW,
          width: WF,
          height: SF
        };
      return (0, uF.c)(gW), FF._dlr && FF._dlr.t(gW, {
        kind: "dynamic",
        width: WF,
        height: SF,
        format: iW,
        levels: eF,
        samplerDesc: QF,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), gW
    }

    function RF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const AF = CF.invertY ?? !0,
        uF = CF.premultiplyAlpha ?? !1;
      FF._device.queue.copyExternalImageToTexture({
        source: SF,
        flipY: AF
      }, {
        texture: WF.texture,
        premultipliedAlpha: uF
      }, [WF.width, WF.height]);
      const hF = WF._recoverySource;
      hF && "dynamic" === hF.kind && (hF.source = SF, hF.flipY = AF, hF.premultipliedAlpha = uF), WF.texture.mipLevelCount > 1 && (0, bW.generateMipmaps)(FF, WF.texture)
    }
  },
  39547: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF
    });
    var CF = SF(39508),
      AF = SF(39515),
      uF = SF(39517),
      hF = SF(39523),
      bW = SF(39534);
    async function dF(FF, WF) {
      let dF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [PF, RF] = function(FF) {
        const WF = FF,
          SF = [
            [WF.displayWidth, WF.displayHeight],
            [WF.videoWidth, WF.videoHeight],
            [WF.naturalWidth, WF.naturalHeight],
            [WF.width, WF.height]
          ];
        for (const [CF, AF] of SF)
          if (void 0 !== CF && void 0 !== AF && Number.isInteger(CF) && Number.isInteger(AF) && CF > 0 && AF > 0) return [CF, AF];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(WF), [iW, eF] = function(FF, WF, SF) {
        if (void 0 === SF) return [FF, WF];
        if (!Number.isInteger(SF) || SF < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${SF})`);
        if (Math.max(FF, WF) <= SF) return [FF, WF];
        const CF = SF / Math.max(FF, WF);
        return FF >= WF ? [SF, Math.max(1, Math.round(WF * CF))] : [Math.max(1, Math.round(FF * CF)), SF]
      }(PF, RF, dF.maxDimension), EF = dF.mipMaps ?? !0, QF = dF.premultiplyAlpha ?? !1;
      let rW = WF,
        gW = null;
      const tW = {
        texture: null
      };
      try {
        iW === PF && eF === RF || (gW = await createImageBitmap(WF, {
          resizeWidth: iW,
          resizeHeight: eF,
          resizeQuality: "high",
          premultiplyAlpha: QF ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), rW = gW);
        const TF = FF._device,
          aW = dF.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          kW = EF ? (0, bW.e)(iW, eF) : 1,
          qW = kW > 1 ? (await Promise.resolve().then((() => SF(39530)))).generateMipmaps : null,
          VF = {
            addressModeU: dF.addressModeU ?? "repeat",
            addressModeV: dF.addressModeV ?? "repeat",
            minFilter: dF.minFilter ?? "linear",
            magFilter: dF.magFilter ?? "linear",
            mipmapFilter: EF ? "linear" : "nearest"
          };
        VF.maxAnisotropy = "linear" === VF.minFilter && "linear" === VF.magFilter && "linear" === VF.mipmapFilter ? 4 : 1;
        const NF = dF.invertY ?? !0,
          DF = async WF => {
            let SF;
            TF.pushErrorScope("validation"), TF.pushErrorScope("out-of-memory");
            let uF = null;
            try {
              const SF = tW.texture = TF.createTexture({
                size: {
                  width: iW,
                  height: eF
                },
                format: aW,
                mipLevelCount: kW,
                usage: AF.e.TEXTURE_BINDING | AF.e.COPY_DST | AF.e.RENDER_ATTACHMENT
              });
              TF.queue.copyExternalImageToTexture({
                source: WF,
                flipY: NF
              }, {
                texture: SF,
                premultipliedAlpha: QF
              }, {
                width: iW,
                height: eF
              }), qW && qW(FF, SF), uF = (0, hF.b)(FF, VF)
            } catch (EF) {
              SF = EF
            }
            const [bW, dF] = await Promise.all([TF.popErrorScope(), TF.popErrorScope()]);
            if (SF) throw SF;
            const PF = dF ?? bW;
            if (PF) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${PF.message}`, {
              cause: PF
            });
            const RF = tW.texture;
            return RF && uF || (0, CF.e)(677), {
              texture: RF,
              view: RF.createView(),
              sampler: uF,
              width: iW,
              height: eF
            }
          }, LF = await (FF._dlr?.x(rW, iW, eF, aW, kW, VF, NF, QF, DF)) ?? await DF(rW);
        return (0, uF.c)(LF), LF
      } catch (TF) {
        throw tW.texture?.destroy(), TF
      } finally {
        gW?.close()
      }
    }
  },
  39530: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      generateMipmaps: () => EF,
      recordMipmaps: () => QF
    });
    var CF = SF(39515),
      AF = SF(39523),
      uF = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var hF = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      bW = null,
      dF = null,
      PF = null,
      RF = null,
      iW = null;

    function eF(FF) {
      const WF = FF._device;
      WF !== iW && (bW?.clear(), bW = null, dF = null, PF = null, RF = null, iW = null, iW = WF), dF ??= WF.createShaderModule({
        code: hF
      }), PF ??= function(FF) {
        return (0, AF.b)(FF, uF)
      }(FF), RF ??= WF.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: CF.d.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: CF.d.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function EF(FF, WF, SF) {
      const CF = FF._device,
        AF = CF.createCommandEncoder();
      QF(FF, WF, AF, SF), CF.queue.submit([AF.finish()])
    }

    function QF(FF, WF, SF, CF) {
      if (WF.mipLevelCount <= 1) return;
      const AF = FF._device,
        uF = function(FF, WF) {
          const SF = FF._device;
          eF(FF), bW ??= new Map;
          let CF = bW.get(WF);
          return CF || (CF = SF.createRenderPipeline({
            layout: SF.createPipelineLayout({
              bindGroupLayouts: [RF]
            }),
            vertex: {
              module: dF,
              entryPoint: "vs"
            },
            fragment: {
              module: dF,
              entryPoint: "fs",
              targets: [{
                format: WF
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), bW.set(WF, CF)), CF
        }(FF, WF.format),
        hF = null != CF ? {
          dimension: "2d",
          baseArrayLayer: CF,
          arrayLayerCount: 1
        } : {};
      for (let bW = 1; bW < WF.mipLevelCount; bW++) {
        const FF = WF.createView({
            baseMipLevel: bW - 1,
            mipLevelCount: 1,
            ...hF
          }),
          CF = WF.createView({
            baseMipLevel: bW,
            mipLevelCount: 1,
            ...hF
          }),
          dF = AF.createBindGroup({
            layout: RF,
            entries: [{
              binding: 0,
              resource: FF
            }, {
              binding: 1,
              resource: PF
            }]
          }),
          iW = SF.beginRenderPass({
            colorAttachments: [{
              view: CF,
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
        iW.setPipeline(uF), iW.setBindGroup(0, dF), iW.draw(3), iW.end()
      }
    }
  },
  39534: (FF, WF, SF) => {
    function CF(FF, WF) {
      return Math.floor(Math.log2(Math.max(FF, WF))) + 1
    }
    SF.d(WF, {
      e: () => CF
    })
  },
  39504: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF,
      d: () => RF
    });
    var CF = SF(39508),
      AF = SF(39515),
      uF = SF(39517),
      hF = SF(39523),
      bW = SF(39530),
      dF = SF(39534);

    function PF(FF, WF, SF, bW) {
      let PF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (WF < 1 || SF < 1 || bW < 1) && (0, CF.e)(722, WF, SF, bW);
      const RF = FF._device,
        iW = PF.mipMaps ?? !0,
        eF = PF.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        EF = RF.createTexture({
          size: {
            width: WF,
            height: SF,
            depthOrArrayLayers: bW
          },
          dimension: "2d",
          format: eF,
          mipLevelCount: iW ? (0, dF.e)(WF, SF) : 1,
          usage: AF.e.TEXTURE_BINDING | AF.e.COPY_DST | AF.e.RENDER_ATTACHMENT
        }),
        QF = (0, hF.b)(FF, {
          addressModeU: PF.addressModeU ?? "repeat",
          addressModeV: PF.addressModeV ?? "repeat",
          minFilter: PF.minFilter ?? "linear",
          magFilter: PF.magFilter ?? "linear",
          mipmapFilter: iW ? "linear" : "nearest"
        }),
        rW = {
          texture: EF,
          view: EF.createView({
            dimension: "2d-array"
          }),
          sampler: QF,
          width: WF,
          height: SF,
          layers: bW
        };
      return (0, uF.c)(rW), rW
    }

    function RF(FF, WF, SF, AF) {
      let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (SF < 0 || SF >= WF.layers || (0 | SF) !== SF) && (0, CF.e)(723, WF.layers, SF);
      const hF = uF.invertY ?? !0,
        dF = uF.premultiplyAlpha ?? !1;
      FF._device.queue.copyExternalImageToTexture({
        source: AF,
        flipY: hF
      }, {
        texture: WF.texture,
        origin: [0, 0, SF],
        premultipliedAlpha: dF
      }, [WF.width, WF.height, 1]), WF.texture.mipLevelCount > 1 && (0, bW.generateMipmaps)(FF, WF.texture, SF)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);