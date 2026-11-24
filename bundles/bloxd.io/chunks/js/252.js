export const id = 252;
export const ids = [252];
export const modules = {
  40251: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      g: () => Ym,
      i: () => im,
      m: () => Dm
    });
    var hm = fm(40045),
      Am = fm(38766),
      am = fm(40180),
      xm = fm(40091);
    class wm {
      get aJ() {
        return this._isDisposed
      }
      constructor(mm, Tm, fm) {
        let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          wm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Dm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          im = arguments.length > 7 ? arguments[7] : void 0,
          Rm = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, xm.b)(), mm && mm.wG ? this._engine = mm.wG().dO() : this._engine = mm, this._updatable = fm, this._instanced = wm, this._divisor = im || 1, this._label = Rm, Tm instanceof hm.e ? (this._data = null, this._buffer = Tm) : (this._data = Tm, this._buffer = null), this.byteStride = Dm ? Am : Am * Float32Array.BYTES_PER_ELEMENT, am || this.create()
      }
      createVertexBuffer(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          xm = arguments.length > 6 ? arguments[6] : void 0;
        const wm = am ? Tm : Tm * Float32Array.BYTES_PER_ELEMENT,
          im = hm ? am ? hm : hm * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new Dm(this._engine, this, mm, this._updatable, !0, im, void 0 === Am ? this._instanced : Am, wm, fm, void 0, void 0, !0, this._divisor || xm)
      }
      isUpdatable() {
        return this._updatable
      }
      getData() {
        return this._data
      }
      getBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT
      }
      create() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !mm && this._buffer || (mm = mm || this._data, mm && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, mm), this._data = mm) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(mm, this._label), this._data = mm) : this._buffer = this._engine.createVertexBuffer(mm, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.yp > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.yp, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.yp, void 0, this._label));
          Am.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(mm) {
        this.create(mm)
      }
      updateDirectly(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, mm, hm ? Tm : Tm * Float32Array.BYTES_PER_ELEMENT, fm ? fm * this.byteStride : void 0), this._data = 0 === Tm && void 0 === fm ? mm : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class Dm {
      get aJ() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(mm) {
        const Tm = 0 != mm;
        this._instanceDivisor = mm, Tm !== this._instanced && (this._instanced = Tm, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const mm = this.getData();
        return mm ? Array.isArray(mm) ? mm.length / (this.byteStride / 4) - this.byteOffset / 4 : (mm.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(mm, Tm, fm, hm, Am, xm, pm, Em, om, Om) {
        let Ym, qm = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          jm = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          Vm = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          Im = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = mm, "object" === typeof hm && null !== hm ? (Ym = hm.updatable ?? !1, Am = hm.postponeInternalCreation, xm = hm.stride, pm = hm.instanced, Em = hm.offset, om = hm.size, Om = hm.type, qm = hm.normalized ?? !1, jm = hm.useBytes ?? !1, Vm = hm.divisor ?? 1, Im = hm.takeBufferOwnership ?? !1, this._label = hm.label) : Ym = !!hm, Tm instanceof wm ? (this._buffer = Tm, this._ownsBuffer = Im) : (this._buffer = new wm(mm, Tm, Ym, xm, Am, pm, jm, Vm, this._label), this._ownsBuffer = !0), this.uniqueId = Dm._Counter++, this._kind = fm, void 0 === Om) {
          const mm = this.getData();
          this.type = mm ? Rm(mm) : Dm.FLOAT
        } else this.type = Om;
        const Km = (0, am.s)(this.type);
        jm ? (this._size = om || (xm ? xm / Km : im(fm)), this.byteStride = xm || this._buffer.byteStride || this._size * Km, this.byteOffset = Em || 0) : (this._size = om || xm || im(fm), this.byteStride = xm ? xm * Km : this._buffer.byteStride || this._size * Km, this.byteOffset = (Em || 0) * Km), this.normalized = qm, this._instanced = void 0 !== pm && pm, this._instanceDivisor = pm ? Vm : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(mm) {
        switch (mm) {
          case Dm.BYTE:
            return 0;
          case Dm.UNSIGNED_BYTE:
            return 1;
          case Dm.SHORT:
            return 2;
          case Dm.UNSIGNED_SHORT:
            return 3;
          case Dm.INT:
            return 4;
          case Dm.UNSIGNED_INT:
            return 5;
          case Dm.FLOAT:
            return 6;
          case Dm.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${mm}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (Dm._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
      }
      _rebuild() {
        this._buffer?._rebuild()
      }
      getKind() {
        return this._kind
      }
      isUpdatable() {
        return this._buffer.isUpdatable()
      }
      getData() {
        return this._buffer.getData()
      }
      getFloatData(mm, Tm) {
        const fm = this.getData();
        return fm ? (0, am.o)(fm, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, mm, Tm) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, am.s)(this.type)
      }
      ifm() {
        return this.byteOffset / (0, am.s)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, am.s)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(mm) {
        this._buffer.create(mm), this._alignBuffer()
      }
      update(mm) {
        this._buffer.update(mm), this._alignBuffer()
      }
      updateDirectly(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(mm, Tm, void 0, fm), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(mm, Tm) {
        (0, am.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, mm, this.normalized, ((mm, fm) => {
          for (let hm = 0; hm < this._size; hm++) Tm(mm[hm], fm + hm)
        }))
      }
      _alignBuffer() {}
    }

    function im(mm) {
      switch (mm) {
        case Dm.UVKind:
        case Dm.UV2Kind:
        case Dm.UV3Kind:
        case Dm.UV4Kind:
        case Dm.UV5Kind:
        case Dm.UV6Kind:
          return 2;
        case Dm.NormalKind:
        case Dm.PositionKind:
          return 3;
        case Dm.ColorKind:
        case Dm.ColorInstanceKind:
        case Dm.MatricesIndicesKind:
        case Dm.MatricesIndicesExtraKind:
        case Dm.MatricesWeightsKind:
        case Dm.MatricesWeightsExtraKind:
        case Dm.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + mm + "'")
      }
    }

    function Rm(mm) {
      return mm instanceof Int8Array ? Dm.BYTE : mm instanceof Uint8Array ? Dm.UNSIGNED_BYTE : mm instanceof Int16Array ? Dm.SHORT : mm instanceof Uint16Array ? Dm.UNSIGNED_SHORT : mm instanceof Int32Array ? Dm.INT : mm instanceof Uint32Array ? Dm.UNSIGNED_INT : Dm.FLOAT
    }

    function pm(mm) {
      return (0, am.s)(mm)
    }

    function Em(mm, Tm, fm, hm, Am, xm, wm, Dm) {
      (0, am.h)(mm, Tm, fm, hm, Am, xm, wm, ((mm, Tm) => {
        for (let fm = 0; fm < hm; fm++) Dm(mm[fm], Tm + fm)
      }))
    }

    function om(mm, Tm, fm, hm, Am, xm, wm, Dm) {
      return (0, am.o)(mm, Tm, fm, hm, Am, xm, wm, Dm)
    }
    Dm._Counter = 0, Dm.BYTE = 5120, Dm.UNSIGNED_BYTE = 5121, Dm.SHORT = 5122, Dm.UNSIGNED_SHORT = 5123, Dm.INT = 5124, Dm.UNSIGNED_INT = 5125, Dm.FLOAT = 5126, Dm.HALF_FLOAT = 5131, Dm.PositionKind = "position", Dm.NormalKind = "normal", Dm.TangentKind = "tangent", Dm.UVKind = "uv", Dm.UV2Kind = "uv2", Dm.UV3Kind = "uv3", Dm.UV4Kind = "uv4", Dm.UV5Kind = "uv5", Dm.UV6Kind = "uv6", Dm.ColorKind = "color", Dm.ColorInstanceKind = "instanceColor", Dm.MatricesIndicesKind = "matricesIndices", Dm.MatricesWeightsKind = "matricesWeights", Dm.MatricesIndicesExtraKind = "matricesIndicesExtra", Dm.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let Om = !1;

    function Ym() {
      Om || (Om = !0, Dm.DeduceStride = im, Dm.GetDataType = Rm, Dm.GetTypeByteLength = pm, Dm.ForEach = Em, Dm.GetFloatData = om)
    }
  },
  40045: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.yp = 0, this.is32Bits = !1, this.uniqueId = hm._Counter++
      }
    }
    hm._Counter = 0
  },
  40242: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(37185),
      Am = fm(40251);
    class am {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || Tm && !this.pickedMesh.isVerticesDataPresent(Am.m.NormalKind)) return null;
        let fm, am = this.pickedMesh.xhm();
        0 === am?.length && (am = null);
        const xm = hm.j.WO[0],
          wm = hm.j.WO[1],
          Dm = hm.j.WO[2];
        if (Tm) {
          const mm = this.pickedMesh.getVerticesData(Am.m.NormalKind);
          let Tm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId], xm) : xm.Z8(mm[3 * this.faceId * 3], mm[3 * this.faceId * 3 + 1], mm[3 * this.faceId * 3 + 2]),
            im = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 1], wm) : wm.Z8(mm[3 * (3 * this.faceId + 1)], mm[3 * (3 * this.faceId + 1) + 1], mm[3 * (3 * this.faceId + 1) + 2]),
            Rm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 2], Dm) : Dm.Z8(mm[3 * (3 * this.faceId + 2)], mm[3 * (3 * this.faceId + 2) + 1], mm[3 * (3 * this.faceId + 2) + 2]);
          Tm = Tm.scale(this.bu), im = im.scale(this.bv), Rm = Rm.scale(1 - this.bu - this.bv), fm = new hm.p(Tm.x + im.x + Rm.x, Tm.y + im.y + Rm.y, Tm.z + im.z + Rm.z)
        } else {
          const mm = this.pickedMesh.getVerticesData(Am.m.PositionKind),
            Tm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId], xm) : xm.Z8(mm[3 * this.faceId * 3], mm[3 * this.faceId * 3 + 1], mm[3 * this.faceId * 3 + 2]),
            im = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 1], wm) : wm.Z8(mm[3 * (3 * this.faceId + 1)], mm[3 * (3 * this.faceId + 1) + 1], mm[3 * (3 * this.faceId + 1) + 2]),
            Rm = am ? hm.p.FromArrayToRef(mm, 3 * am[3 * this.faceId + 2], Dm) : Dm.Z8(mm[3 * (3 * this.faceId + 2)], mm[3 * (3 * this.faceId + 2) + 1], mm[3 * (3 * this.faceId + 2) + 2]),
            pm = Tm.subtract(im),
            Em = Rm.subtract(im);
          fm = hm.p.Cross(pm, Em)
        }
        const im = (mm, Tm) => {
          if (-1 !== this.thinInstanceIndex) {
            const fm = mm._thinInstanceDataStorage.matrixData,
              Am = this.thinInstanceIndex << 4;
            if (fm && fm.length > Am) {
              const mm = hm.j.Matrix[0];
              hm.e.FromArrayToRef(fm, Am, mm), hm.p.TransformNormalToRef(Tm, mm, Tm)
            }
          }
          let fm = mm.getWorldMatrix();
          mm.nonUniformScaling && (hm.j.Matrix[0].ZZ(fm), fm = hm.j.Matrix[0], fm.setTranslationFromFloats(0, 0, 0), fm.invert(), fm.transposeToRef(hm.j.Matrix[1]), fm = hm.j.Matrix[1]), hm.p.TransformNormalToRef(Tm, fm, Tm)
        };
        if (mm && im(this.pickedMesh, fm), this.ray) {
          const Tm = hm.j.WO[0].ZZ(fm);
          mm || im(this.pickedMesh, Tm), hm.p.Dot(Tm, this.ray.direction) > 0 && fm.negateInPlace()
        }
        return fm.normalize(), fm
      }
      getTextureCoordinates() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Am.m.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(mm)) return null;
        const Tm = this.pickedMesh.xhm();
        if (!Tm) return null;
        const fm = this.pickedMesh.getVerticesData(mm);
        if (!fm) return null;
        let am = hm.l.FromArray(fm, 2 * Tm[3 * this.faceId]),
          xm = hm.l.FromArray(fm, 2 * Tm[3 * this.faceId + 1]),
          wm = hm.l.FromArray(fm, 2 * Tm[3 * this.faceId + 2]);
        return am = am.scale(this.bu), xm = xm.scale(this.bv), wm = wm.scale(1 - this.bu - this.bv), new hm.l(am.x + xm.x + wm.x, am.y + xm.y + wm.y)
      }
    }
  },
  40091: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(39956);
    let Am = !1;

    function am() {
      Am || (Am = !0, hm.ThinEngine.prototype.updateDynamicIndexBuffer = function(mm, Tm) {
        let fm;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(mm), fm = mm.is32Bits ? Tm instanceof Uint32Array ? Tm : new Uint32Array(Tm) : Tm instanceof Uint16Array ? Tm : new Uint16Array(Tm), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, fm, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, hm.ThinEngine.prototype.updateDynamicVertexBuffer = function(mm, Tm, fm, hm) {
        this.bindArrayBuffer(mm), void 0 === fm && (fm = 0);
        const Am = Tm.byteLength || Tm.length;
        void 0 === hm || hm >= Am && 0 === fm ? Tm instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, fm, new Float32Array(Tm)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, fm, Tm) : Tm instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, fm, new Float32Array(Tm).subarray(0, hm / 4)) : (Tm = ArrayBuffer.isView(Tm) ? new Uint8Array(Tm.buffer, Tm.byteOffset, hm) : new Uint8Array(Tm, 0, hm), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, fm, Tm)), this._resetVertexBufferBinding()
      })
    }
  },
  40055: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = Tm, !mm && (mm = Tm.createTexture(), !mm)) throw new Error("Unable to create webGL texture");
        this.set(mm)
      }
      setUsage() {}
      set(mm) {
        this._webGLTexture = mm
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(mm) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(mm)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const mm of this._MSAARenderBuffers) this._context.deleteRenderbuffer(mm);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[mm] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  40014: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Vm
    });
    var hm = fm(37203),
      Am = fm(39958),
      am = fm(37201),
      xm = fm(38766),
      wm = fm(37199),
      Dm = fm(40020);
    class im {
      constructor() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, mm && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(mm) {
        this._zOffset !== mm && (this._zOffset = mm, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(mm) {
        this._zOffsetUnits !== mm && (this._zOffsetUnits = mm, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(mm) {
        this._cullFace !== mm && (this._cullFace = mm, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(mm) {
        this._cull !== mm && (this._cull = mm, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(mm) {
        this._depthFunc !== mm && (this._depthFunc = mm, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(mm) {
        this._depthMask !== mm && (this._depthMask = mm, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(mm) {
        this._depthTest !== mm && (this._depthTest = mm, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(mm) {
        this._frontFace !== mm && (this._frontFace = mm, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(mm) {
        this.isDirty && (this._isCullDirty && (this.cull ? mm.enable(mm.CULL_FACE) : mm.disable(mm.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (mm.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (mm.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? mm.enable(mm.DEPTH_TEST) : mm.disable(mm.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (mm.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (mm.enable(mm.POLYGON_OFFSET_FILL), mm.polygonOffset(this.zOffset, this.zOffsetUnits)) : mm.disable(mm.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (mm.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class Rm {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(mm) {
        this._func !== mm && (this._func = mm, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(mm) {
        this._backFunc !== mm && (this._backFunc = mm, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(mm) {
        this._funcRef !== mm && (this._funcRef = mm, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(mm) {
        this._funcMask !== mm && (this._funcMask = mm, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(mm) {
        this._opStencilFail !== mm && (this._opStencilFail = mm, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(mm) {
        this._opDepthFail !== mm && (this._opDepthFail = mm, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(mm) {
        this._opStencilDepthPass !== mm && (this._opStencilDepthPass = mm, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(mm) {
        this._backOpStencilFail !== mm && (this._backOpStencilFail = mm, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(mm) {
        this._backOpDepthFail !== mm && (this._backOpDepthFail = mm, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(mm) {
        this._backOpStencilDepthPass !== mm && (this._backOpStencilDepthPass = mm, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(mm) {
        this._mask !== mm && (this._mask = mm, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(mm) {
        this._enabled !== mm && (this._enabled = mm, this._isStencilTestDirty = !0)
      }
      constructor() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, mm && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(mm) {
        if (!mm) return;
        const Tm = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = Tm ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = Tm ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = Tm ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = Tm ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = Tm ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = Tm ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = Tm ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = Tm ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = Tm ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = Tm ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = Tm ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = Tm ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? mm.enable(mm.STENCIL_TEST) : mm.disable(mm.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (mm.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (mm.stencilFuncSeparate(mm.FRONT, this.func, this.funcRef, this.funcMask), mm.stencilFuncSeparate(mm.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (mm.stencilOpSeparate(mm.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), mm.stencilOpSeparate(mm.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class pm {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = pm.ALWAYS, this.opStencilFail = pm.KEEP, this.opDepthFail = pm.KEEP, this.opStencilDepthPass = pm.REPLACE, this.backFunc = pm.ALWAYS, this.backOpStencilFail = pm.KEEP, this.backOpDepthFail = pm.KEEP, this.backOpStencilDepthPass = pm.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(mm) {
        this.func = mm
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(mm) {
        this.backFunc = mm
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(mm) {
        this.funcRef = mm
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(mm) {
        this.funcMask = mm
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(mm) {
        this.opStencilFail = mm
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(mm) {
        this.opDepthFail = mm
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(mm) {
        this.opStencilDepthPass = mm
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(mm) {
        this.backOpStencilFail = mm
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(mm) {
        this.backOpDepthFail = mm
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(mm) {
        this.backOpStencilDepthPass = mm
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(mm) {
        this.mask = mm
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(mm) {
        this.enabled = mm
      }
    }
    pm.ALWAYS = 519, pm.KEEP = 7680, pm.REPLACE = 7681;
    var Em = fm(40024),
      om = fm(39993),
      Om = fm(39942),
      Ym = fm(39973),
      qm = fm(39986);

    function jm(mm, Tm) {
      if (Tm) {
        const {
          requestAnimationFrame: fm
        } = Tm;
        if ("function" === typeof fm) return fm(mm)
      }
      if ((0, Ym.p)()) {
        const {
          requestAnimationFrame: fm
        } = Tm || window;
        if ("function" === typeof fm) return fm(mm)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(mm);
      return setTimeout(mm, 16)
    }
    class Vm {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(mm) {
        return this._shaderProcessor
      }
      _resetAlphaMode() {
        this._alphaMode.fill(-1), this._alphaEquation.fill(-1)
      }
      get shaderPlatformName() {
        return this._shaderPlatformName
      }
      _clearEmptyResources() {
        this._emptyTexture = null, this._emptyCubeTexture = null, this._emptyTexture3D = null, this._emptyTexture2DArray = null
      }
      get fhm() {
        return this._useReverseDepthBuffer
      }
      set fhm(mm) {
        mm !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = mm, this._depthCullingState.depthFunc = mm ? 518 : 515)
      }
      setColorWrite(mm) {
        mm !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = mm)
      }
      getColorWrite() {
        return this._colorWrite
      }
      get depthCullingState() {
        return this._depthCullingState
      }
      get alphaState() {
        return this._alphaState
      }
      get stencilState() {
        return this._stencilState
      }
      get stencilStateComposer() {
        return this._stencilStateComposer
      }
      _getGlobalDefines(mm) {
        if (mm) return this.isNDCHalfZRange ? mm.IS_NDC_HALF_ZRANGE = "" : delete mm.IS_NDC_HALF_ZRANGE, this.fhm ? mm.USE_REVERSE_DEPTHBUFFER = "" : delete mm.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? mm.USE_EXACT_SRGB_CONVERSIONS = "" : delete mm.USE_EXACT_SRGB_CONVERSIONS);
        {
          let mm = "";
          return this.isNDCHalfZRange && (mm += "#define IS_NDC_HALF_ZRANGE"), this.fhm && (mm && (mm += "\n"), mm += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (mm && (mm += "\n"), mm += "#define USE_EXACT_SRGB_CONVERSIONS"), mm
        }
      }
      _rebuildInternalTextures() {
        const mm = this._internalTexturesCache.slice();
        for (const Tm of mm) Tm._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const mm = this._renderTargetWrapperCache.slice();
        for (const Tm of mm) Tm.textures?.some((mm => 15 === mm.source)) || Tm._rebuild()
      }
      _rebuildEffects() {
        for (const mm in this._compiledEffects) {
          const Tm = this._compiledEffects[mm];
          Tm._pipelineContext = null, Tm._prepareEffect()
        }
        Am.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        xm.b.Warn(this.name + " context successfully restored."), this.UO.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(mm) {
        setTimeout((() => {
          this._clearEmptyResources();
          const Tm = this._depthCullingState.depthTest,
            fm = this._depthCullingState.depthFunc,
            hm = this._depthCullingState.depthMask,
            Am = this._stencilState.stencilTest;
          mm(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = Tm, this._depthCullingState.depthFunc = fm, this._depthCullingState.depthMask = hm, this._stencilState.stencilTest = Am, this._flagContextRestored()
        }), 0)
      }
      get aJ() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(mm) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(mm) {}
      getClassName() {
        return "AbstractEngine"
      }
      get emptyTexture() {
        return this._emptyTexture || (this._emptyTexture = this.createRawTexture(new Uint8Array(4), 1, 1, 5, !1, !1, 1)), this._emptyTexture
      }
      get emptyTexture3D() {
        return this._emptyTexture3D || (this._emptyTexture3D = this.createRawTexture3D(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture3D
      }
      get emptyTexture2DArray() {
        return this._emptyTexture2DArray || (this._emptyTexture2DArray = this.createRawTexture2DArray(new Uint8Array(4), 1, 1, 1, 5, !1, !1, 1)), this._emptyTexture2DArray
      }
      get emptyCubeTexture() {
        if (!this._emptyCubeTexture) {
          const mm = new Uint8Array(4),
            Tm = [mm, mm, mm, mm, mm, mm];
          this._emptyCubeTexture = this.createRawCubeTexture(Tm, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(mm) {
        this._framebufferDimensionsObject = mm
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(mm) {
        if (!mm) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const Tm = this._activeRenderLoops.indexOf(mm);
        Tm >= 0 && (this._activeRenderLoops.splice(Tm, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: mm
            } = this.customAnimationFrameRequester;
            mm && mm(this.customAnimationFrameRequester.FO), delete this.customAnimationFrameRequester.FO
          }
        } else if (0 !== this._frameHandler) {
          const mm = this._frameHandler;
          if (this._frameHandler = 0, (0, Ym.p)()) {
            const {
              cancelAnimationFrame: Tm
            } = this.getHostWindow() || window;
            if ("function" === typeof Tm) return Tm(mm)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(mm);
          return clearTimeout(mm)
        }
      }
      bI() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      HI() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(mm) {
        this._maxFPS = mm, void 0 !== mm && (this._minFrameTime = mm <= 0 ? Number.MAX_VALUE : 1e3 / mm)
      }
      _isOverFrameTime(mm) {
        if (!mm || void 0 === this._maxFPS) return !1;
        const Tm = mm - this._lastFrameTime;
        return this._lastFrameTime = mm, this._renderAccumulator += Tm, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(mm) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(mm)) {
          let mm = !0;
          (this.aJ || !this.renderEvenInBackground && this._windowIsBackground) && (mm = !1), mm && (this.bI(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.HI())
        }
      }
      _renderLoop(mm) {
        this._processFrame(mm), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let mm = 0; mm < this._activeRenderLoops.length; mm++) {
          (0, this._activeRenderLoops[mm])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(mm, Tm) {
        return jm(mm, Tm)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.FO = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.FO) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(mm) {
        -1 === this._activeRenderLoops.indexOf(mm) && (this._activeRenderLoops.push(mm), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(mm) {
        this._depthCullingState.depthTest = mm
      }
      setZOffset(mm) {
        this._depthCullingState.zOffset = this.fhm ? -mm : mm
      }
      getZOffset() {
        const mm = this._depthCullingState.zOffset;
        return this.fhm ? -mm : mm
      }
      setZOffsetUnits(mm) {
        this._depthCullingState.zOffsetUnits = this.fhm ? -mm : mm
      }
      getZOffsetUnits() {
        const mm = this._depthCullingState.zOffsetUnits;
        return this.fhm ? -mm : mm
      }
      getHostWindow() {
        return (0, Ym.p)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(mm) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const mm of this.scenes) mm._rebuildTextures();
        for (const mm of this._virtualScenes) mm._rebuildTextures()
      }
      _releaseRenderTargetWrapper(mm) {
        const Tm = this._renderTargetWrapperCache.indexOf(mm); - 1 !== Tm && this._renderTargetWrapperCache.splice(Tm, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(mm, Tm, fm) {
        const hm = Tm || this.getRenderWidth(),
          Am = fm || this.getRenderHeight(),
          am = mm.x || 0,
          xm = mm.y || 0;
        this._cachedViewport = mm, this._viewport(am * hm, xm * Am, hm * mm.width, Am * mm.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(mm) {
        return new Path2D(mm)
      }
      get description() {
        let mm = this.name + this.version;
        return this._caps.parallelShaderCompile && (mm += " - Parallel shader compilation"), mm
      }
      _createTextureBase(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          wm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          Dm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          im = arguments.length > 7 ? arguments[7] : void 0,
          Rm = arguments.length > 8 ? arguments[8] : void 0,
          pm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          Em = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          om = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          Ym = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          qm = arguments.length > 13 ? arguments[13] : void 0,
          jm = arguments.length > 14 ? arguments[14] : void 0,
          Im = arguments.length > 15 ? arguments[15] : void 0;
        const Km = "data:" === (mm = mm || "").substring(0, 5),
          Qm = "blob:" === mm.substring(0, 5),
          nm = Km && -1 !== mm.indexOf(";base64,"),
          Jm = Em || new Om.d(this, 1);
        Jm !== Em && (Jm.label = mm.substring(0, 60));
        const cm = mm;
        !this._transformTextureUrl || nm || Em || pm || (mm = this._transformTextureUrl(mm)), cm !== mm && (Jm._originalUrl = cm);
        const zm = mm.lastIndexOf(".");
        let Zm = Ym || (zm > -1 ? mm.substring(zm).toLowerCase() : "");
        Zm.indexOf("?") > -1 && (Zm = Zm.split("?")[0]);
        const km = Vm.GetCompatibleTextureLoader(Zm, qm);
        hm && hm.addPendingData(Jm), Jm.url = mm, Jm.generateMipMaps = !Tm, Jm.samplingMode = Am, Jm.invertY = fm, Jm._useSRGBBuffer = this._getUseSRGBBuffer(!!Im, Tm), this._doNotHandleContextLost || (Jm._buffer = pm);
        let bm = null;
        wm && !Em && (bm = Jm.onLoadedObservable.add(wm)), Em || this._internalTexturesCache.push(Jm);
        const Sm = (fm, Em) => {
          hm && hm.removePendingData(Jm), mm === cm ? (bm && Jm.onLoadedObservable.remove(bm), am.c.UseFallbackTexture && mm !== am.c.FallbackTexture && this._createTextureBase(am.c.FallbackTexture, Tm, Jm.invertY, hm, Am, null, Dm, im, Rm, pm, Jm), fm = (fm || "Unknown error") + (am.c.UseFallbackTexture ? " - Fallback texture was used" : ""), Jm.onErrorObservable.notifyObservers({
            message: fm,
            exception: Em
          }), Dm && Dm(fm, Em)) : (xm.b.Warn(`Failed to load ${mm}, falling back to ${cm}`), this._createTextureBase(cm, Tm, Jm.invertY, hm, Am, wm, Dm, im, Rm, pm, Jm, om, Ym, qm, jm, Im))
        };
        if (km) {
          const Tm = async mm => {
            (await km).loadData(mm, Jm, ((mm, Tm, fm, am, xm, wm) => {
              wm ? Sm("TextureLoader failed to load data") : im(Jm, Zm, hm, {
                width: mm,
                height: Tm
              }, Jm.invertY, !fm, am, (() => (xm(), !1)), Am)
            }), jm)
          };
          if (pm) {
            const mm = async mm => {
              try {
                await Tm(mm)
              } catch (fm) {
                Sm("Failed to parse texture data", fm)
              }
            };
            pm instanceof ArrayBuffer ? mm(new Uint8Array(pm)) : ArrayBuffer.isView(pm) ? mm(pm) : Dm && Dm("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(mm, (async mm => {
            try {
              await Tm(new Uint8Array(mm))
            } catch (fm) {
              Sm("Failed to parse texture data", fm)
            }
          }), void 0, hm ? hm.offlineProvider : void 0, !0, ((mm, Tm) => {
            Sm("Unable to load " + (mm && mm.responseURL, Tm))
          }))
        } else {
          const fm = mm => {
            Qm && !this._doNotHandleContextLost && (Jm._buffer = mm), im(Jm, Zm, hm, mm, Jm.invertY, Tm, !1, Rm, Am)
          };
          !Km || nm ? pm && ("string" === typeof pm.decoding || pm.close) ? fm(pm) : Vm._FileToolsLoadImage(mm || "", fm, Sm, hm ? hm.offlineProvider : null, qm, Jm.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof pm || pm instanceof ArrayBuffer || ArrayBuffer.isView(pm) || pm instanceof Blob ? Vm._FileToolsLoadImage(pm, fm, Sm, hm ? hm.offlineProvider : null, qm, Jm.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : pm && fm(pm)
        }
        return Jm
      }
      _rebuildBuffers() {
        for (const mm of this._uniformBuffers) mm._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, Ym.h)() ? document : null
      }
      getLoadedTexturesCache() {
        return this._internalTexturesCache
      }
      clearInternalTexturesCache() {
        this._internalTexturesCache.length = 0
      }
      getCaps() {
        return this._caps
      }
      resetTextureCache() {
        for (const mm in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, mm) && (this._boundTexturesCache[mm] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(mm) {
        this._name = mm
      }
      static get NpmPackage() {
        return "babylonjs@9.28.0"
      }
      static get Version() {
        return "9.28.0"
      }
      getRenderingCanvas() {
        return this._renderingCanvas
      }
      getAudioContext() {
        return this._audioContext
      }
      getAudioDestination() {
        return this._audioDestination
      }
      setHardwareScalingLevel(mm) {
        this._hardwareScalingLevel = mm, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(mm) {
        this._doNotHandleContextLost = mm
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(mm, Tm, fm) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new im, this._stencilStateComposer = new Rm, this._stencilState = new pm, this._alphaState = new Em.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new hm.c, this.onCanvasFocusObservable = new hm.c, this.onNewSceneAddedObservable = new hm.c, this.onResizeObservable = new hm.c, this.onCanvasPointerOutObservable = new hm.c, this.onEffectErrorObservable = new hm.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new hm.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = mm => this._renderLoop(mm), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new hm.c, this.onAfterShaderCompilationObservable = new hm.c, this.onBeginFrameObservable = new hm.c, this.onEndFrameObservable = new hm.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new hm.c, this.UO = new hm.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.iG = new hm.c, this.onReleaseEffectsObservable = new hm.c, am.c.Instances.push(this), this.startTime = Dm.c.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, wm.d.SetMatrixPrecision(!!Tm.useLargeWorldRendering || !!Tm.useHighPrecisionMatrix), (0, Ym.l)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), Tm.antialias = mm ?? Tm.antialias, Tm.deterministicLockstep = Tm.deterministicLockstep ?? !1, Tm.lockstepMaxSteps = Tm.lockstepMaxSteps ?? 4, Tm.timeStep = Tm.timeStep ?? 1 / 60, Tm.stencil = Tm.stencil ?? !0, this._audioContext = Tm.audioEngineOptions?.audioContext ?? null, this._audioDestination = Tm.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = Tm.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!Tm.doNotHandleContextLost, this._isStencilEnable = !!Tm.stencil, this.useExactSrgbConversions = Tm.useExactSrgbConversions ?? !1, this.canvasTabIndex = Tm.canvasTabIndex ?? this.canvasTabIndex;
        const Am = (0, Ym.p)() && window.devicePixelRatio || 1,
          xm = Tm.limitDeviceRatio || Am;
        fm = fm || Tm.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = fm, this._hardwareScalingLevel = fm ? 1 / Math.min(xm, Am) : 1, this._lastDevicePixelRatio = Am, this._creationOptions = Tm
      }
      resize() {
        let mm, Tm, fm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const mm = (0, Ym.p)() && window.devicePixelRatio || 1,
            Tm = this._lastDevicePixelRatio / mm;
          this._lastDevicePixelRatio = mm, this._hardwareScalingLevel *= Tm
        }
        if ((0, Ym.p)() && (0, Ym.h)())
          if (this._renderingCanvas) {
            const fm = this._renderingCanvas.getBoundingClientRect?.();
            mm = this._renderingCanvas.clientWidth || fm?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, Tm = this._renderingCanvas.clientHeight || fm?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else mm = window.innerWidth, Tm = window.innerHeight;
        else mm = this._renderingCanvas ? this._renderingCanvas.width : 100, Tm = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(mm / this._hardwareScalingLevel, Tm / this._hardwareScalingLevel, fm)
      }
      setSize(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (mm |= 0, Tm |= 0, !fm && this._renderingCanvas.width === mm && this._renderingCanvas.height === Tm) return !1;
        if (this._renderingCanvas.width = mm, this._renderingCanvas.height = Tm, this.scenes) {
          for (let mm = 0; mm < this.scenes.length; mm++) {
            const Tm = this.scenes[mm];
            for (let mm = 0; mm < Tm.cameras.length; mm++) {
              Tm.cameras[mm]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm) {
        throw (0, om.i)("engine.rawTexture")
      }
      createRawCubeTexture(mm, Tm, fm, hm, Am, am, xm, wm) {
        throw (0, om.i)("engine.rawTexture")
      }
      createRawTexture3D(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
        throw (0, om.i)("engine.rawTexture")
      }
      createRawTexture2DArray(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm) {
        throw (0, om.i)("engine.rawTexture")
      }
      _sharedInit(mm) {
        this._renderingCanvas = mm
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const mm = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== mm.indexOf("Mobile") || -1 !== mm.indexOf("Mac") && (0, Ym.h)() && "ontouchend" in document
        }, this._checkForMobile(), (0, Ym.p)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(mm) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(mm, !1)
      }
      getFps() {
        return this._fps
      }
      getDeltaTime() {
        return this._deltaTime
      }
      isDeterministicLockStep() {
        return this._deterministicLockstep
      }
      getLockstepMaxSteps() {
        return this._lockstepMaxSteps
      }
      getTimeStep() {
        return 1e3 * this._timeStep
      }
      _createImageBitmapFromSource(mm, Tm) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(mm, Tm) {
        return createImageBitmap(mm, Tm)
      }
      resizeImageBitmap(mm, Tm, fm) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(mm) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(mm, Tm) {
        if ("undefined" === typeof document) return new OffscreenCanvas(mm, Tm);
        const fm = document.createElement("canvas");
        return fm.width = mm, fm.height = Tm, fm
      }
      createCanvas(mm, Tm) {
        return Vm._CreateCanvas(mm, Tm)
      }
      static _FileToolsLoadImage(mm, Tm, fm, hm, Am, am, xm) {
        if (!qm.c.loadImage) throw (0, om.i)("FileTools");
        return qm.c.loadImage(mm, Tm, fm, hm, Am, am, xm)
      }
      _loadFile(mm, Tm, fm, hm, Am, am) {
        const xm = (0, qm.j)(mm, Tm, fm, hm, Am, am);
        return this._activeRequests.push(xm), xm.onCompleteObservable.add((() => {
          const mm = this._activeRequests.indexOf(xm); - 1 !== mm && this._activeRequests.splice(mm, 1)
        })), xm
      }
      static _FileToolsLoadFile(mm, Tm, fm, hm, Am, am) {
        if (qm.c.loadFile) return qm.c.loadFile(mm, Tm, fm, hm, Am, am);
        throw (0, om.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), Am.e.ResetCache();
        for (const Tm of this._activeRequests) Tm.abort();
        this._boundRenderFunction = null, this.iG.notifyObservers(this), this.iG.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, Ym.p)() && window.removeEventListener("resize", this._checkForMobile);
        const mm = am.c.Instances.indexOf(this);
        mm >= 0 && am.c.Instances.splice(mm, 1), am.c.Instances.length || (am.c.OnEnginesDisposedObservable.notifyObservers(this), am.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(mm) {
        throw (0, om.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(mm, Tm) {
        for (let fm = 0; fm < am.c.Instances.length; fm++) {
          const hm = am.c.Instances[fm];
          for (let fm = 0; fm < hm.scenes.length; fm++) hm.scenes[fm].markAllMaterialsAsDirty(mm, Tm)
        }
      }
      static GetCompatibleTextureLoader(mm, Tm) {
        return null
      }
    }
    Vm._RenderPassIdCounter = 0, Vm._RescalePostProcessFactory = null, Vm.CollisionsEpsilon = .001, Vm.QueueNewFrame = jm
  },
  39960: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.ShadersRepository : hm.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.ShadersStore : hm.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? hm.IncludesShadersStore : hm.IncludesShadersStoreWGSL
      }
    }
    hm.ShadersRepository = "src/Shaders/", hm.ShadersStore = {}, hm.IncludesShadersStore = {}, hm.ShadersRepositoryWGSL = "src/ShadersWGSL/", hm.ShadersStoreWGSL = {}, hm.IncludesShadersStoreWGSL = {}
  },
  39978: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em,
      h: () => Im,
      i: () => Om,
      k: () => om,
      m: () => Ym,
      o: () => Vm,
      q: () => pm,
      s: () => im,
      w: () => Rm,
      y: () => Dm,
      B: () => wm
    });
    class hm {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(mm) {
        mm && this.program && mm(this.program)
      }
      setEngine(mm) {
        this.engine = mm
      }
      _fillEffectInformation(mm, Tm, fm, hm, Am, am, xm, wm) {
        const Dm = this.engine;
        if (Dm.supportsUniformBuffers)
          for (const Rm in Tm) mm.bindUniformBlock(Rm, Tm[Rm]);
        let im;
        for (this.engine.getUniforms(this, fm).forEach(((mm, Tm) => {
            hm[fm[Tm]] = mm
          })), this._uniforms = hm, im = 0; im < Am.length; im++) {
          null == mm.getUniform(Am[im]) && (Am.splice(im, 1), im--)
        }
        Am.forEach(((mm, Tm) => {
          am[mm] = Tm
        }));
        for (const Rm of Dm.getAttributes(this, xm)) wm.push(Rm)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(mm, Tm) {
        const fm = this._valueCache[mm],
          hm = Tm.updateFlag;
        if (void 0 !== fm && fm === hm) return !1;
        const Am = Tm.ahm();
        let am = this._matrixValueCache[mm];
        if (void 0 !== fm && null !== fm && void 0 !== am) {
          let Tm = !0;
          for (let mm = 15; mm >= 0; mm--)
            if (am[mm] !== Am[mm]) {
              Tm = !1;
              break
            } if (Tm) return this._valueCache[mm] = hm, !1
        }
        return void 0 === am && (am = this._matrixValueCache[mm] = new Float32Array(16)), am.set(Am), this._valueCache[mm] = hm, !0
      }
      _cacheFloat2(mm, Tm, fm) {
        let hm = this._valueCache[mm];
        if (!hm || 2 !== hm.length) return hm = [Tm, fm], this._valueCache[mm] = hm, !0;
        let Am = !1;
        return hm[0] !== Tm && (hm[0] = Tm, Am = !0), hm[1] !== fm && (hm[1] = fm, Am = !0), Am
      }
      _cacheFloat3(mm, Tm, fm, hm) {
        let Am = this._valueCache[mm];
        if (!Am || 3 !== Am.length) return Am = [Tm, fm, hm], this._valueCache[mm] = Am, !0;
        let am = !1;
        return Am[0] !== Tm && (Am[0] = Tm, am = !0), Am[1] !== fm && (Am[1] = fm, am = !0), Am[2] !== hm && (Am[2] = hm, am = !0), am
      }
      _cacheFloat4(mm, Tm, fm, hm, Am) {
        let am = this._valueCache[mm];
        if (!am || 4 !== am.length) return am = [Tm, fm, hm, Am], this._valueCache[mm] = am, !0;
        let xm = !1;
        return am[0] !== Tm && (am[0] = Tm, xm = !0), am[1] !== fm && (am[1] = fm, xm = !0), am[2] !== hm && (am[2] = hm, xm = !0), am[3] !== Am && (am[3] = Am, xm = !0), xm
      }
      setInt(mm, Tm) {
        const fm = this._valueCache[mm];
        void 0 !== fm && fm === Tm || this.engine.setInt(this._uniforms[mm], Tm) && (this._valueCache[mm] = Tm)
      }
      setInt2(mm, Tm, fm) {
        this._cacheFloat2(mm, Tm, fm) && (this.engine.setInt2(this._uniforms[mm], Tm, fm) || (this._valueCache[mm] = null))
      }
      setInt3(mm, Tm, fm, hm) {
        this._cacheFloat3(mm, Tm, fm, hm) && (this.engine.setInt3(this._uniforms[mm], Tm, fm, hm) || (this._valueCache[mm] = null))
      }
      setInt4(mm, Tm, fm, hm, Am) {
        this._cacheFloat4(mm, Tm, fm, hm, Am) && (this.engine.setInt4(this._uniforms[mm], Tm, fm, hm, Am) || (this._valueCache[mm] = null))
      }
      setIntArray(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setIntArray(this._uniforms[mm], Tm)
      }
      setIntArray2(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setIntArray2(this._uniforms[mm], Tm)
      }
      setIntArray3(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setIntArray3(this._uniforms[mm], Tm)
      }
      setIntArray4(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setIntArray4(this._uniforms[mm], Tm)
      }
      setUInt(mm, Tm) {
        const fm = this._valueCache[mm];
        void 0 !== fm && fm === Tm || this.engine.setUInt(this._uniforms[mm], Tm) && (this._valueCache[mm] = Tm)
      }
      setUInt2(mm, Tm, fm) {
        this._cacheFloat2(mm, Tm, fm) && (this.engine.setUInt2(this._uniforms[mm], Tm, fm) || (this._valueCache[mm] = null))
      }
      setUInt3(mm, Tm, fm, hm) {
        this._cacheFloat3(mm, Tm, fm, hm) && (this.engine.setUInt3(this._uniforms[mm], Tm, fm, hm) || (this._valueCache[mm] = null))
      }
      setUInt4(mm, Tm, fm, hm, Am) {
        this._cacheFloat4(mm, Tm, fm, hm, Am) && (this.engine.setUInt4(this._uniforms[mm], Tm, fm, hm, Am) || (this._valueCache[mm] = null))
      }
      setUIntArray(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setUIntArray(this._uniforms[mm], Tm)
      }
      setUIntArray2(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setUIntArray2(this._uniforms[mm], Tm)
      }
      setUIntArray3(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setUIntArray3(this._uniforms[mm], Tm)
      }
      setUIntArray4(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setUIntArray4(this._uniforms[mm], Tm)
      }
      setArray(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setArray(this._uniforms[mm], Tm)
      }
      setArray2(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setArray2(this._uniforms[mm], Tm)
      }
      setArray3(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setArray3(this._uniforms[mm], Tm)
      }
      setArray4(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setArray4(this._uniforms[mm], Tm)
      }
      setMatrices(mm, Tm) {
        Tm && (this._valueCache[mm] = null, this.engine.setMatrices(this._uniforms[mm], Tm))
      }
      setMatrix(mm, Tm) {
        this._cacheMatrix(mm, Tm) && (this.engine.setMatrices(this._uniforms[mm], Tm.ahm()) || (this._valueCache[mm] = null))
      }
      setMatrix3x3(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setMatrix3x3(this._uniforms[mm], Tm)
      }
      setMatrix2x2(mm, Tm) {
        this._valueCache[mm] = null, this.engine.setMatrix2x2(this._uniforms[mm], Tm)
      }
      setFloat(mm, Tm) {
        const fm = this._valueCache[mm];
        void 0 !== fm && fm === Tm || this.engine.setFloat(this._uniforms[mm], Tm) && (this._valueCache[mm] = Tm)
      }
      setVector2(mm, Tm) {
        this._cacheFloat2(mm, Tm.x, Tm.y) && (this.engine.setFloat2(this._uniforms[mm], Tm.x, Tm.y) || (this._valueCache[mm] = null))
      }
      setFloat2(mm, Tm, fm) {
        this._cacheFloat2(mm, Tm, fm) && (this.engine.setFloat2(this._uniforms[mm], Tm, fm) || (this._valueCache[mm] = null))
      }
      setVector3(mm, Tm) {
        this._cacheFloat3(mm, Tm.x, Tm.y, Tm.z) && (this.engine.setFloat3(this._uniforms[mm], Tm.x, Tm.y, Tm.z) || (this._valueCache[mm] = null))
      }
      setFloat3(mm, Tm, fm, hm) {
        this._cacheFloat3(mm, Tm, fm, hm) && (this.engine.setFloat3(this._uniforms[mm], Tm, fm, hm) || (this._valueCache[mm] = null))
      }
      setVector4(mm, Tm) {
        this._cacheFloat4(mm, Tm.x, Tm.y, Tm.z, Tm.w) && (this.engine.setFloat4(this._uniforms[mm], Tm.x, Tm.y, Tm.z, Tm.w) || (this._valueCache[mm] = null))
      }
      setQuaternion(mm, Tm) {
        this._cacheFloat4(mm, Tm.x, Tm.y, Tm.z, Tm.w) && (this.engine.setFloat4(this._uniforms[mm], Tm.x, Tm.y, Tm.z, Tm.w) || (this._valueCache[mm] = null))
      }
      setFloat4(mm, Tm, fm, hm, Am) {
        this._cacheFloat4(mm, Tm, fm, hm, Am) && (this.engine.setFloat4(this._uniforms[mm], Tm, fm, hm, Am) || (this._valueCache[mm] = null))
      }
      setColor3(mm, Tm) {
        this._cacheFloat3(mm, Tm.r, Tm.g, Tm.b) && (this.engine.setFloat3(this._uniforms[mm], Tm.r, Tm.g, Tm.b) || (this._valueCache[mm] = null))
      }
      setColor4(mm, Tm, fm) {
        this._cacheFloat4(mm, Tm.r, Tm.g, Tm.b, fm) && (this.engine.setFloat4(this._uniforms[mm], Tm.r, Tm.g, Tm.b, fm) || (this._valueCache[mm] = null))
      }
      setDirectColor4(mm, Tm) {
        this._cacheFloat4(mm, Tm.r, Tm.g, Tm.b, Tm.a) && (this.engine.setFloat4(this._uniforms[mm], Tm.r, Tm.g, Tm.b, Tm.a) || (this._valueCache[mm] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var Am = fm(39986);
    const am = new WeakMap,
      xm = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function wm(mm) {
      let Tm = am.get(mm);
      if (!Tm) {
        if (!mm) return xm;
        Tm = {
          _webGLVersion: mm.TEXTURE_BINDING_3D ? 2 : 1,
          _context: mm,
          parallelShaderCompile: mm.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, am.set(mm, Tm)
      }
      return Tm
    }

    function Dm(mm) {
      am.delete(mm)
    }

    function im(mm, Tm, fm, hm, Am, am) {
      const xm = wm(hm);
      am || (am = xm._createShaderProgramInjection ?? Em);
      return am(mm, jm(Tm, "vertex", hm, xm._contextWasLost), jm(fm, "fragment", hm, xm._contextWasLost), hm, Am, xm.validateShaderPrograms)
    }

    function Rm(mm, Tm, fm, hm, Am) {
      let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        xm = arguments.length > 6 ? arguments[6] : void 0;
      const Dm = wm(Am);
      xm || (xm = Dm._createShaderProgramInjection ?? Em);
      const im = Dm._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return xm(mm, qm(Tm, "vertex", hm, im, Am, Dm._contextWasLost), qm(fm, "fragment", hm, im, Am, Dm._contextWasLost), Am, am, Dm.validateShaderPrograms)
    }

    function pm(mm, Tm) {
      const fm = new hm,
        Am = wm(mm);
      return Am.parallelShaderCompile && !Am.disableParallelShaderCompile && (fm.isParallelCompiled = !0), fm.context = Am._context, fm
    }

    function Em(mm, Tm, fm, hm) {
      let Am = arguments.length > 5 ? arguments[5] : void 0;
      const am = hm.createProgram();
      if (mm.program = am, !am) throw new Error("Unable to create program");
      return hm.attachShader(am, Tm), hm.attachShader(am, fm), hm.linkProgram(am), mm.context = hm, mm.vertexShader = Tm, mm.fragmentShader = fm, mm.isParallelCompiled || Om(mm, hm, Am), am
    }

    function om(mm, Tm, fm) {
      const hm = mm;
      if (hm._isDisposed) return !1;
      const Am = wm(Tm);
      return !!(Am && Am.parallelShaderCompile && Am.parallelShaderCompile.COMPLETION_STATUS_KHR && hm.program && Tm.getProgramParameter(hm.program, Am.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (Om(hm, Tm, fm), !0)
    }

    function Om(mm, Tm, fm) {
      const hm = mm.context,
        Am = mm.vertexShader,
        am = mm.fragmentShader,
        xm = mm.program;
      if (!hm.getProgramParameter(xm, hm.LINK_STATUS)) {
        if (!Tm.getShaderParameter(Am, Tm.COMPILE_STATUS)) {
          const fm = Tm.getShaderInfoLog(Am);
          if (fm) throw mm.vertexCompilationError = fm, new Error("VERTEX SHADER " + fm)
        }
        if (!Tm.getShaderParameter(am, Tm.COMPILE_STATUS)) {
          const fm = Tm.getShaderInfoLog(am);
          if (fm) throw mm.fragmentCompilationError = fm, new Error("FRAGMENT SHADER " + fm)
        }
        const fm = hm.getProgramInfoLog(xm);
        if (fm) throw mm.programLinkError = fm, new Error(fm)
      }
      if (fm) {
        hm.validateProgram(xm);
        if (!hm.getProgramParameter(xm, hm.VALIDATE_STATUS)) {
          const Tm = hm.getProgramInfoLog(xm);
          if (Tm) throw mm.programValidationError = Tm, new Error(Tm)
        }
      }
      hm.deleteShader(Am), hm.deleteShader(am), mm.vertexShader = void 0, mm.fragmentShader = void 0, mm.onCompiled && (mm.onCompiled(), mm.onCompiled = void 0)
    }

    function Ym(mm, Tm, fm, hm, Am, am, xm, Dm, pm) {
      let Em = arguments.length > 10 ? arguments[10] : void 0,
        om = arguments.length > 11 ? arguments[11] : void 0,
        Om = arguments.length > 12 ? arguments[12] : void 0;
      const Ym = wm(mm.context);
      om || (om = Ym.createRawShaderProgramInjection ?? im), Om || (Om = Ym.createShaderProgramInjection ?? Rm);
      const qm = mm;
      qm.program = hm ? om(qm, Tm, fm, qm.context, pm) : Om(qm, Tm, fm, Dm, qm.context, pm), qm.program.__SPECTOR_rebuildProgram = xm, Em()
    }

    function qm(mm, Tm, fm, hm, am, xm) {
      return jm((0, Am.g)(mm, fm, hm), Tm, am, xm)
    }

    function jm(mm, Tm, fm, hm) {
      const Am = fm.createShader("vertex" === Tm ? fm.VERTEX_SHADER : fm.FRAGMENT_SHADER);
      if (!Am) {
        let mm, Am = fm.NO_ERROR;
        for (;
          (mm = fm.getError()) !== fm.NO_ERROR;) Am = mm;
        throw new Error(`Something went wrong while creating a gl ${Tm} shader object. gl error=${Am}, gl isContextLost=${fm.isContextLost()}, _contextWasLost=${hm}`)
      }
      return fm.shaderSource(Am, mm), fm.compileShader(Am), Am
    }

    function Vm(mm, Tm) {
      Tm.useProgram(mm)
    }

    function Im(mm, Tm) {
      const fm = mm;
      if (!fm.isParallelCompiled) return void Tm(mm);
      const hm = fm.onCompiled;
      fm.onCompiled = () => {
        hm?.(), Tm(mm)
      }
    }
  },
  39956: (mm, Tm, fm) => {
    fm.d(Tm, {
      ThinEngine: () => Qm
    });
    var hm = fm(39958),
      Am = fm(39978),
      am = fm(40014),
      xm = fm(40030),
      wm = fm(38766),
      Dm = fm(39973);
    class im {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(mm, Tm, fm, hm, Am) {
        if (Am.drawBuffersExtensionDisabled) {
          const Tm = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          mm = mm.replace(Tm, "")
        }
        return mm
      }
    }
    const Rm = /(flat\s)?\s*varying\s*.*/;
    class pm {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(mm) {
        return mm.replace("attribute", "in")
      }
      varyingCheck(mm, Tm) {
        return Rm.test(mm)
      }
      varyingProcessor(mm, Tm) {
        return mm.replace("varying", Tm ? "in" : "out")
      }
      postProcessor(mm, Tm, fm) {
        const hm = -1 !== mm.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (mm = (mm = mm.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), fm) {
          const fm = -1 !== mm.search(/layout *\(location *= *0\) *out/g),
            Am = -1 !== Tm.indexOf("#define DUAL_SOURCE_BLENDING"),
            am = Am ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          Am && (mm = "#extension GL_EXT_blend_func_extended : require\n" + mm), mm = (mm = (mm = (mm = (mm = (mm = (mm = mm.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (hm || fm ? "" : am) + "void main(")
        } else {
          Tm.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (mm = "invariant gl_Position;\n" + mm);
          if (-1 !== Tm.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + mm
        }
        return mm
      }
    }
    var Em = fm(40036),
      om = fm(40052),
      Om = fm(40055),
      Ym = fm(39942),
      qm = fm(39986),
      jm = fm(39968),
      Vm = fm(40064),
      Im = fm(40024);
    class Km {}
    class Qm extends am.b {
      get name() {
        return this._name
      }
      set name(mm) {
        this._name = mm
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return hm.e.ShadersRepository
      }
      static set ShadersRepository(mm) {
        hm.e.ShadersRepository = mm
      }
      get supportsUniformBuffers() {
        return this.zY > 1 && !this.disableUniformBuffers
      }
      get needPOTTextures() {
        return this._webGLVersion < 2 || this.forcePOTTextures
      }
      get _supportsHardwareTextureRescaling() {
        return !1
      }
      snapshotRenderingReset() {
        this.snapshotRendering = !1
      }
      constructor(mm, Tm, fm, hm) {
        if (fm = fm || {}, super(Tm ?? fm.antialias, fm, hm), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !mm) return;
        let am;
        if (mm.getContext) {
          if (am = mm, void 0 === fm.preserveDrawingBuffer && (fm.preserveDrawingBuffer = !1), void 0 === fm.xrCompatible && (fm.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const mm = navigator.userAgent;
            for (const Tm of Qm.ExceptionList) {
              const hm = Tm.key,
                Am = Tm.targets;
              if (new RegExp(hm).test(mm)) {
                if (Tm.capture && Tm.captureConstraint) {
                  const fm = Tm.capture,
                    hm = Tm.captureConstraint,
                    Am = new RegExp(fm).exec(mm);
                  if (Am && Am.length > 0) {
                    if (parseInt(Am[Am.length - 1]) >= hm) continue
                  }
                }
                for (const mm of Am) switch (mm) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    fm.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, Am.y)(this._gl)
            } : (this._onContextLost = mm => {
              mm.preventDefault(), this._contextWasLost = !0, (0, Am.y)(this._gl), wm.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, am.addEventListener("webglcontextrestored", this._onContextRestored, !1), fm.powerPreference = fm.powerPreference || "high-performance"), am.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (fm.xrCompatible = !1), !fm.disableWebGL2Support) try {
            this._gl = am.getContext("webgl2", fm) || am.getContext("experimental-webgl2", fm), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (Rm) {}
          if (!this._gl) {
            if (!am) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = am.getContext("webgl", fm) || am.getContext("experimental-webgl", fm)
            } catch (Rm) {
              throw new Error("WebGL not supported", {
                cause: Rm
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = mm, am = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const Tm = this._gl.getContextAttributes();
          Tm && (fm.stencil = Tm.stencil)
        }
        this._sharedInit(am), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== fm.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = fm.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let Am = 0; Am < this._caps.maxVertexAttribs; Am++) this._currentBufferPointers[Am] = new Km;
        this._shaderProcessor = this.zY > 1 ? new pm : new im;
        const xm = `Babylon.js v${Qm.Version}`;
        wm.b.Log(xm + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", xm);
        const Dm = (0, Am.B)(this._gl);
        Dm.validateShaderPrograms = this.validateShaderPrograms, Dm.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(mm) {
        return null
      }
      areAllEffectsReady() {
        for (const mm in this._compiledEffects) {
          if (!this._compiledEffects[mm].isReady()) return !1
        }
        return !0
      }
      _initGLContext() {
        this._caps = {
          maxTexturesImageUnits: this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS),
          maxCombinedTexturesImageUnits: this._gl.getParameter(this._gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
          maxVertexTextureImageUnits: this._gl.getParameter(this._gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
          maxTextureSize: this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE),
          maxSamples: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_SAMPLES) : 1,
          maxCubemapTextureSize: this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE),
          maxRenderTextureSize: this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE),
          maxVertexAttribs: this._gl.getParameter(this._gl.MAX_VERTEX_ATTRIBS),
          maxVaryingVectors: this._gl.getParameter(this._gl.MAX_VARYING_VECTORS),
          maxFragmentUniformVectors: this._gl.getParameter(this._gl.MAX_FRAGMENT_UNIFORM_VECTORS),
          maxVertexUniformVectors: this._gl.getParameter(this._gl.MAX_VERTEX_UNIFORM_VECTORS),
          shaderFloatPrecision: 0,
          parallelShaderCompile: this._gl.getExtension("KHR_parallel_shader_compile") || void 0,
          standardDerivatives: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_standard_derivatives"),
          maxAnisotropy: 1,
          astc: this._gl.getExtension("WEBGL_compressed_texture_astc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_astc"),
          bptc: this._gl.getExtension("EXT_texture_compression_bptc") || this._gl.getExtension("WEBKIT_EXT_texture_compression_bptc"),
          s3tc: this._gl.getExtension("WEBGL_compressed_texture_s3tc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
          s3tc_srgb: this._gl.getExtension("WEBGL_compressed_texture_s3tc_srgb") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc_srgb"),
          pvrtc: this._gl.getExtension("WEBGL_compressed_texture_pvrtc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          etc1: this._gl.getExtension("WEBGL_compressed_texture_etc1") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"),
          etc2: this._gl.getExtension("WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBKIT_WEBGL_compressed_texture_etc") || this._gl.getExtension("WEBGL_compressed_texture_es3_0"),
          textureAnisotropicFilterExtension: this._gl.getExtension("EXT_texture_filter_anisotropic") || this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic"),
          uintIndices: this._webGLVersion > 1 || null !== this._gl.getExtension("OES_element_index_uint"),
          fragmentDepthSupported: this._webGLVersion > 1 || null !== this._gl.getExtension("EXT_frag_depth"),
          highPrecisionShaderSupported: !1,
          timerQuery: this._gl.getExtension("EXT_disjoint_timer_query_webgl2") || this._gl.getExtension("EXT_disjoint_timer_query"),
          supportOcclusionQuery: this._webGLVersion > 1,
          canUseTimestampForTimerQuery: !1,
          drawBuffersExtension: !1,
          maxMSAASamples: 1,
          colorBufferFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_float")),
          blendFloat: null !== this._gl.getExtension("EXT_float_blend"),
          supportFloatTexturesResolve: !1,
          rg11b10ufColorRenderable: !1,
          colorBufferHalfFloat: !!(this._webGLVersion > 1 && this._gl.getExtension("EXT_color_buffer_half_float")),
          textureFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_float")),
          textureHalfFloat: !!(this._webGLVersion > 1 || this._gl.getExtension("OES_texture_half_float")),
          textureHalfFloatRender: !1,
          textureFloatLinearFiltering: !1,
          textureFloatRender: !1,
          textureHalfFloatLinearFiltering: !1,
          vertexArrayObject: !1,
          instancedArrays: !1,
          textureLOD: !!(this._webGLVersion > 1 || this._gl.getExtension("EXT_shader_texture_lod")),
          texelFetch: 1 !== this._webGLVersion,
          blendMinMax: !1,
          multiview: this._gl.getExtension("OVR_multiview2"),
          oculusMultiview: this._gl.getExtension("OCULUS_multiview"),
          depthTextureExtension: !1,
          canUseGLInstanceID: this._webGLVersion > 1,
          canUseGLVertexID: this._webGLVersion > 1,
          supportComputeShaders: !1,
          supportSRGBBuffers: !1,
          supportTransformFeedbacks: this._webGLVersion > 1,
          textureMaxLevel: this._webGLVersion > 1,
          texture2DArrayMaxLayerCount: this._webGLVersion > 1 ? this._gl.getParameter(this._gl.MAX_ARRAY_TEXTURE_LAYERS) : 128,
          disableMorphTargetTexture: !1,
          textureNorm16: !!this._gl.getExtension("EXT_texture_norm16"),
          blendParametersPerTarget: !1,
          dualSourceBlending: !1,
          supportReadWriteStorageTextures: !1
        }, this._caps.supportFloatTexturesResolve = this._caps.colorBufferFloat, this._caps.rg11b10ufColorRenderable = this._caps.colorBufferFloat, this._glVersion = this._gl.getParameter(this._gl.VERSION);
        const mm = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != mm && (this._glRenderer = this._gl.getParameter(mm.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(mm.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const Tm = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!Tm, this._alphaState = new Im.d(this._caps.blendParametersPerTarget), Tm && (this._gl.blendEquationSeparateIndexed = Tm.blendEquationSeparateiOES.bind(Tm), this._gl.blendEquationIndexed = Tm.blendEquationiOES.bind(Tm), this._gl.blendFuncSeparateIndexed = Tm.blendFuncSeparateiOES.bind(Tm), this._gl.blendFuncIndexed = Tm.blendFunciOES.bind(Tm), this._gl.colorMaskIndexed = Tm.colorMaskiOES.bind(Tm), this._gl.disableIndexed = Tm.disableiOES.bind(Tm), this._gl.enableIndexed = Tm.enableiOES.bind(Tm)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const mm = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== mm) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = mm.drawBuffersWEBGL.bind(mm), this._caps.maxDrawBuffers = this._gl.getParameter(mm.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let Tm = 0; Tm < 16; Tm++) this._gl["COLOR_ATTACHMENT" + Tm + "_WEBGL"] = mm["COLOR_ATTACHMENT" + Tm + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const mm = this._gl.getExtension("WEBGL_depth_texture");
          null != mm && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = mm.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const mm = this._gl.getExtension("OES_vertex_array_object");
          null != mm && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = mm.createVertexArrayOES.bind(mm), this._gl.bindVertexArray = mm.bindVertexArrayOES.bind(mm), this._gl.deleteVertexArray = mm.deleteVertexArrayOES.bind(mm))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const mm = this._gl.getExtension("ANGLE_instanced_arrays");
          null != mm ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = mm.drawArraysInstancedANGLE.bind(mm), this._gl.drawElementsInstanced = mm.drawElementsInstancedANGLE.bind(mm), this._gl.vertexAttribDivisor = mm.vertexAttribDivisorANGLE.bind(mm)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const mm = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            Tm = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (mm && Tm && (this._caps.highPrecisionShaderSupported = 0 !== mm.precision && 0 !== Tm.precision, this._caps.shaderFloatPrecision = Math.min(mm.precision, Tm.precision)), !this._shouldUseHighPrecisionShader) {
            const mm = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              Tm = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            mm && Tm && (this._caps.shaderFloatPrecision = Math.min(mm.precision, Tm.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const mm = this._gl.getExtension("EXT_blend_minmax");
          null != mm && (this._caps.blendMinMax = !0, this._gl.MAX = mm.MAX_EXT, this._gl.MIN = mm.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const mm = this._gl.getExtension("EXT_sRGB");
            null != mm && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: mm.SRGB_EXT,
              SRGB8: mm.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: mm.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const mm = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== mm && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && mm)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let fm = 0; fm < this._maxSimultaneousTextures; fm++) this._nextFreeTextureSlots.push(fm);
        "Mali-G72" === this._glRenderer && (this._caps.disableMorphTargetTexture = !0)
      }
      _initFeatures() {
        this._features = {
          forceBitmapOverHTMLImageElement: "undefined" === typeof HTMLImageElement,
          supportRenderAndCopyToLodForFloatTextures: 1 !== this._webGLVersion,
          supportDepthStencilTexture: 1 !== this._webGLVersion,
          supportShadowSamplers: 1 !== this._webGLVersion,
          uniformBufferHardCheckMatrix: !1,
          allowTexturePrefiltering: 1 !== this._webGLVersion,
          trackUbosInFrame: !1,
          checkUbosContentBeforeUpload: !1,
          supportCSM: 1 !== this._webGLVersion,
          basisNeedsPOT: 1 === this._webGLVersion,
          support3DTextures: 1 !== this._webGLVersion,
          needTypeSuffixInShaderConstants: 1 !== this._webGLVersion,
          supportMSAA: 1 !== this._webGLVersion,
          supportSSAO2: 1 !== this._webGLVersion,
          supportIBLShadows: 1 !== this._webGLVersion,
          supportExtendedTextureFormats: 1 !== this._webGLVersion,
          supportSwitchCaseInShader: 1 !== this._webGLVersion,
          supportSyncTextureRead: !0,
          needsInvertingBitmap: !0,
          useUBOBindingCache: !0,
          needShaderCodeInlining: !1,
          needToAlwaysBindUniformBuffers: !1,
          supportRenderPasses: !1,
          supportSpriteInstancing: !0,
          forceVertexBufferStrideAndOffsetMultiple4Bytes: !1,
          _checkNonFloatVertexBuffersDontRecreatePipelineContext: !1
        }
      }
      get zY() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const mm = this._workingCanvas.getContext("2d");
        mm && (this._workingContext = mm)
      }
      getInfo() {
        return this.getGlInfo()
      }
      getGlInfo() {
        return {
          vendor: this._glVendor,
          renderer: this._glRenderer,
          version: this._glVersion
        }
      }
      extractDriverInfo() {
        const mm = this.getGlInfo();
        return mm && mm.renderer ? mm.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const am = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = am;
        let xm = 0;
        if (Tm && mm) {
          let Tm = !0;
          if (this._currentRenderTarget) {
            const fm = this._currentRenderTarget.texture?.format;
            if (void 0 !== fm && (0, Vm.i)(fm)) {
              const fm = this._currentRenderTarget.texture?.type;
              void 0 !== fm && (0, Vm.j)(fm) ? (Qm._TempClearColorUint32[0] = 255 * mm.r, Qm._TempClearColorUint32[1] = 255 * mm.g, Qm._TempClearColorUint32[2] = 255 * mm.b, Qm._TempClearColorUint32[3] = 255 * mm.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, Qm._TempClearColorUint32), Tm = !1) : (Qm._TempClearColorInt32[0] = 255 * mm.r, Qm._TempClearColorInt32[1] = 255 * mm.g, Qm._TempClearColorInt32[2] = 255 * mm.b, Qm._TempClearColorInt32[3] = 255 * mm.a, this._gl.clearBufferiv(this._gl.COLOR, 0, Qm._TempClearColorInt32), Tm = !1)
            }
          }
          Tm && (this._gl.clearColor(mm.r, mm.g, mm.b, void 0 !== mm.a ? mm.a : 1), xm |= this._gl.COLOR_BUFFER_BIT)
        }
        fm && (this.fhm ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), xm |= this._gl.DEPTH_BUFFER_BIT), hm && (this._gl.clearStencil(Am), xm |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(xm)
      }
      _clearColorAttachment(mm, Tm, fm, hm) {
        if ((0, Vm.i)(fm)) {
          const fm = (0, Vm.j)(hm),
            Am = fm ? Qm._TempClearColorUint32 : Qm._TempClearColorInt32;
          return Am[0] = Tm.r, Am[1] = Tm.g, Am[2] = Tm.b, Am[3] = Tm.a, void(fm ? this._gl.clearBufferuiv(this._gl.COLOR, mm, Am) : this._gl.clearBufferiv(this._gl.COLOR, mm, Am))
        }
        Qm._TempClearColorFloat32[0] = Tm.r, Qm._TempClearColorFloat32[1] = Tm.g, Qm._TempClearColorFloat32[2] = Tm.b, Qm._TempClearColorFloat32[3] = Tm.a, this._gl.clearBufferfv(this._gl.COLOR, mm, Qm._TempClearColorFloat32)
      }
      _viewport(mm, Tm, fm, hm) {
        mm === this._viewportCached.x && Tm === this._viewportCached.y && fm === this._viewportCached.z && hm === this._viewportCached.w || (this._viewportCached.x = mm, this._viewportCached.y = Tm, this._viewportCached.z = fm, this._viewportCached.w = hm, this._gl.viewport(mm, Tm, fm, hm))
      }
      HI() {
        super.HI(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const Dm = mm;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = mm, this._integerMRTAttachmentsMask = !mm.isMulti && mm.texture && (0, Vm.i)(mm.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(Dm._framebuffer);
        const im = this._gl;
        mm.isMulti || (mm.is2DArray || mm.is3D ? (im.framebufferTextureLayer(im.FRAMEBUFFER, im.COLOR_ATTACHMENT0, mm.texture._hardwareTexture?.underlyingResource, am, xm), Dm._currentLOD = am) : mm.isCube ? im.framebufferTexture2D(im.FRAMEBUFFER, im.COLOR_ATTACHMENT0, im.TEXTURE_CUBE_MAP_POSITIVE_X + Tm, mm.texture._hardwareTexture?.underlyingResource, am) : Dm._currentLOD !== am && (im.framebufferTexture2D(im.FRAMEBUFFER, im.COLOR_ATTACHMENT0, im.TEXTURE_2D, mm.texture._hardwareTexture?.underlyingResource, am), Dm._currentLOD = am));
        const Rm = mm._depthStencilTexture;
        if (Rm) {
          mm.is3D && (mm.texture.width === Rm.width && mm.texture.height === Rm.height && mm.texture.depth === Rm.depth || wm.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const fm = mm._depthStencilTextureWithStencil ? im.DEPTH_STENCIL_ATTACHMENT : im.DEPTH_ATTACHMENT;
          mm.is2DArray || mm.is3D ? im.framebufferTextureLayer(im.FRAMEBUFFER, fm, Rm._hardwareTexture?.underlyingResource, am, xm) : mm.isCube ? im.framebufferTexture2D(im.FRAMEBUFFER, fm, im.TEXTURE_CUBE_MAP_POSITIVE_X + Tm, Rm._hardwareTexture?.underlyingResource, am) : im.framebufferTexture2D(im.FRAMEBUFFER, fm, im.TEXTURE_2D, Rm._hardwareTexture?.underlyingResource, am)
        }
        Dm._MSAAFramebuffer && this._bindUnboundFramebuffer(Dm._MSAAFramebuffer), this._cachedViewport && !Am ? this.setViewport(this._cachedViewport, fm, hm) : (fm || (fm = mm.width, am && (fm /= Math.pow(2, am))), hm || (hm = mm.height, am && (hm /= Math.pow(2, am))), this._viewport(0, 0, fm, hm)), this.wipeCaches()
      }
      setStateCullFaceType(mm, Tm) {
        const fm = this.cullBackFaces ?? mm ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== fm || Tm) && (this._depthCullingState.cullFace = fm)
      }
      setState(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 ? arguments[5] : void 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== mm || fm) && (this._depthCullingState.cull = mm), this.setStateCullFaceType(Am, fm), this.setZOffset(Tm), this.setZOffsetUnits(xm);
        const wm = hm ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== wm || fm) && (this._depthCullingState.frontFace = wm), this._stencilStateComposer.stencilMaterial = am
      }
      _resolveAndGenerateMipMapsFramebuffer(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        mm.disableAutomaticMSAAResolve || (mm.isMulti ? this.resolveMultiFramebuffer(mm) : this.resolveFramebuffer(mm)), Tm || (mm.isMulti ? this.generateMipMapsMultiFramebuffer(mm) : this.generateMipMapsFramebuffer(mm))
      }
      _bindUnboundFramebuffer(mm) {
        this._currentFramebuffer !== mm && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, mm), this._currentFramebuffer = mm)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(mm) {
        const Tm = this._getTextureTarget(mm);
        this._bindTextureDirectly(Tm, mm, !0), this._gl.generateMipmap(Tm), this._bindTextureDirectly(Tm, null)
      }
      unBindFramebuffer(mm, Tm, fm) {
        const hm = mm;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(mm, Tm), fm && (hm._MSAAFramebuffer && this._bindUnboundFramebuffer(hm._framebuffer), fm()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(mm) {
        mm.isMulti || !mm.texture?.generateMipMaps || mm.isCube || this.generateMipmaps(mm.texture)
      }
      resolveFramebuffer(mm) {
        const Tm = mm,
          fm = this._gl;
        if (!Tm._MSAAFramebuffer || Tm.isMulti) return;
        let hm = Tm.resolveMSAAColors ? fm.COLOR_BUFFER_BIT : 0;
        hm |= Tm._generateDepthBuffer && Tm.resolveMSAADepth ? fm.DEPTH_BUFFER_BIT : 0, hm |= Tm._generateStencilBuffer && Tm.resolveMSAAStencil ? fm.STENCIL_BUFFER_BIT : 0, fm.bindFramebuffer(fm.READ_FRAMEBUFFER, Tm._MSAAFramebuffer), fm.bindFramebuffer(fm.DRAW_FRAMEBUFFER, Tm._framebuffer), fm.blitFramebuffer(0, 0, mm.width, mm.height, 0, 0, mm.width, mm.height, hm, fm.NEAREST)
      }
      flushFramebuffer() {
        this._gl.flush()
      }
      restoreDefaultFramebuffer() {
        this._currentRenderTarget ? this.unBindFramebuffer(this._currentRenderTarget) : this._bindUnboundFramebuffer(null), this._cachedViewport && this.setViewport(this._cachedViewport), this.wipeCaches()
      }
      _resetVertexBufferBinding() {
        this.bindArrayBuffer(null), this._cachedVertexBuffers = null
      }
      createVertexBuffer(mm, Tm, fm) {
        return this._createVertexBuffer(mm, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(mm, Tm) {
        const fm = this._gl.createBuffer();
        if (!fm) throw new Error("Unable to create vertex buffer");
        const hm = new Em.e(fm);
        return this.bindArrayBuffer(hm), "number" !== typeof mm ? mm instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(mm), Tm), hm.yp = 4 * mm.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, mm, Tm), hm.yp = mm.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(mm), Tm), hm.yp = mm), this._resetVertexBufferBinding(), hm.references = 1, hm
      }
      createDynamicVertexBuffer(mm, Tm) {
        return this._createVertexBuffer(mm, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(mm, Tm, fm) {
        const hm = this._gl.createBuffer(),
          Am = new Em.e(hm);
        if (!hm) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(Am);
        const am = this._normalizeIndexData(mm);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, am, Tm ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), Am.references = 1, Am.is32Bits = 4 === am.BYTES_PER_ELEMENT, Am
      }
      _normalizeIndexData(mm) {
        if (2 === mm.BYTES_PER_ELEMENT) return mm;
        if (this._caps.uintIndices) {
          if (mm instanceof Uint32Array) return mm;
          for (let Tm = 0; Tm < mm.length; Tm++)
            if (mm[Tm] >= 65535) return new Uint32Array(mm);
          return new Uint16Array(mm)
        }
        return new Uint16Array(mm)
      }
      bindArrayBuffer(mm) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(mm, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(mm, Tm, fm) {
        const hm = mm.program,
          Am = this._gl.getUniformBlockIndex(hm, Tm);
        this._gl.uniformBlockBinding(hm, Am, fm)
      }
      bindIndexBuffer(mm) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(mm, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(mm, Tm) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[Tm] !== mm) && (this._gl.bindBuffer(Tm, mm ? mm.underlyingResource : null), this._currentBoundBuffer[Tm] = mm)
      }
      updateArrayBuffer(mm) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, mm)
      }
      _vertexAttribPointer(mm, Tm, fm, hm, Am, am, xm) {
        const wm = this._currentBufferPointers[Tm];
        if (!wm) return;
        let Dm = !1;
        wm.active ? (wm.buffer !== mm && (wm.buffer = mm, Dm = !0), wm.size !== fm && (wm.size = fm, Dm = !0), wm.type !== hm && (wm.type = hm, Dm = !0), wm.normalized !== Am && (wm.normalized = Am, Dm = !0), wm.stride !== am && (wm.stride = am, Dm = !0), wm.offset !== xm && (wm.offset = xm, Dm = !0)) : (Dm = !0, wm.active = !0, wm.index = Tm, wm.size = fm, wm.type = hm, wm.normalized = Am, wm.stride = am, wm.offset = xm, wm.buffer = mm), (Dm || this._vaoRecordInProgress) && (this.bindArrayBuffer(mm), hm === this._gl.UNSIGNED_INT || hm === this._gl.INT ? this._gl.vertexAttribIPointer(Tm, fm, hm, am, xm) : this._gl.vertexAttribPointer(Tm, fm, hm, Am, am, xm))
      }
      _bindIndexBufferWithCache(mm) {
        null != mm && this._cachedIndexBuffer !== mm && (this._cachedIndexBuffer = mm, this.bindIndexBuffer(mm), this._uintIndicesCurrentlySet = mm.is32Bits)
      }
      _bindVertexBuffersAttributes(mm, Tm, fm) {
        const hm = Tm.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let Am = 0; Am < hm.length; Am++) {
          const am = Tm.getAttributeLocation(Am);
          if (am >= 0) {
            const Tm = hm[Am];
            let xm = null;
            if (fm && (xm = fm[Tm]), xm || (xm = mm[Tm]), !xm) continue;
            this._gl.enableVertexAttribArray(am), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[am] = !0);
            const wm = xm.getBuffer();
            wm && (this._vertexAttribPointer(wm, am, xm.getSize(), xm.type, xm.normalized, xm.byteStride, xm.byteOffset), xm.getIsInstanced() && (this._gl.vertexAttribDivisor(am, xm.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(am), this._currentInstanceBuffers.push(wm))))
          }
        }
      }
      recordVertexArrayObject(mm, Tm, fm, hm) {
        const Am = this._gl.createVertexArray();
        if (!Am) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(Am), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(mm, fm, hm), this.bindIndexBuffer(Tm), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), Am
      }
      bindVertexArrayObject(mm, Tm) {
        this._cachedVertexArrayObject !== mm && (this._cachedVertexArrayObject = mm, this._gl.bindVertexArray(mm), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != Tm && Tm.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(mm, Tm, fm, hm, Am) {
        if (this._cachedVertexBuffers !== mm || this._cachedEffectForVertexBuffers !== Am) {
          this._cachedVertexBuffers = mm, this._cachedEffectForVertexBuffers = Am;
          const Tm = Am.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let am = 0;
          for (let xm = 0; xm < Tm; xm++)
            if (xm < fm.length) {
              const Tm = Am.getAttributeLocation(xm);
              Tm >= 0 && (this._gl.enableVertexAttribArray(Tm), this._vertexAttribArraysEnabled[Tm] = !0, this._vertexAttribPointer(mm, Tm, fm[xm], this._gl.FLOAT, !1, hm, am)), am += 4 * fm[xm]
            }
        }
        this._bindIndexBufferWithCache(Tm)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(mm, Tm, fm, hm) {
        this._cachedVertexBuffers === mm && this._cachedEffectForVertexBuffers === fm || (this._cachedVertexBuffers = mm, this._cachedEffectForVertexBuffers = fm, this._bindVertexBuffersAttributes(mm, fm, hm)), this._bindIndexBufferWithCache(Tm)
      }
      unbindInstanceAttributes() {
        let mm;
        for (let Tm = 0, fm = this._currentInstanceLocations.length; Tm < fm; Tm++) {
          const fm = this._currentInstanceBuffers[Tm];
          mm != fm && fm.references && (mm = fm, this.bindArrayBuffer(fm));
          const hm = this._currentInstanceLocations[Tm];
          this._gl.vertexAttribDivisor(hm, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(mm) {
        this._gl.deleteVertexArray(mm)
      }
      _releaseBuffer(mm) {
        return mm.references--, 0 === mm.references && (this._deleteBuffer(mm), !0)
      }
      _deleteBuffer(mm) {
        this._gl.deleteBuffer(mm.underlyingResource)
      }
      updateAndBindInstancesBuffer(mm, Tm, fm) {
        if (this.bindArrayBuffer(mm), Tm && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, Tm), void 0 !== fm[0].index) this.bindInstancesBuffer(mm, fm, !0);
        else
          for (let hm = 0; hm < 4; hm++) {
            const Tm = fm[hm];
            this._vertexAttribArraysEnabled[Tm] || (this._gl.enableVertexAttribArray(Tm), this._vertexAttribArraysEnabled[Tm] = !0), this._vertexAttribPointer(mm, Tm, 4, this._gl.FLOAT, !1, 64, 16 * hm), this._gl.vertexAttribDivisor(Tm, 1), this._currentInstanceLocations.push(Tm), this._currentInstanceBuffers.push(mm)
          }
      }
      bindInstancesBuffer(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(mm);
        let hm = 0;
        if (fm)
          for (let Am = 0; Am < Tm.length; Am++) {
            hm += 4 * Tm[Am].attributeSize
          }
        for (let Am = 0; Am < Tm.length; Am++) {
          const fm = Tm[Am];
          void 0 === fm.index && (fm.index = this._currentEffect.getAttributeLocationByName(fm.attributeName)), fm.index < 0 || (this._vertexAttribArraysEnabled[fm.index] || (this._gl.enableVertexAttribArray(fm.index), this._vertexAttribArraysEnabled[fm.index] = !0), this._vertexAttribPointer(mm, fm.index, fm.attributeSize, fm.attributeType || this._gl.FLOAT, fm.normalized || !1, hm, fm.offset), this._gl.vertexAttribDivisor(fm.index, void 0 === fm.divisor ? 1 : fm.divisor), this._currentInstanceLocations.push(fm.index), this._currentInstanceBuffers.push(mm))
        }
      }
      disableInstanceAttributeByName(mm) {
        if (!this._currentEffect) return;
        const Tm = this._currentEffect.getAttributeLocationByName(mm);
        this.disableInstanceAttribute(Tm)
      }
      disableInstanceAttribute(mm) {
        let Tm, fm = !1;
        for (; - 1 !== (Tm = this._currentInstanceLocations.indexOf(mm));) this._currentInstanceLocations.splice(Tm, 1), this._currentInstanceBuffers.splice(Tm, 1), fm = !0;
        fm && (this._gl.vertexAttribDivisor(mm, 0), this.disableAttributeByIndex(mm))
      }
      disableAttributeByIndex(mm) {
        this._gl.disableVertexAttribArray(mm), this._vertexAttribArraysEnabled[mm] = !1, this._currentBufferPointers[mm].active = !1
      }
      draw(mm, Tm, fm, hm) {
        this.drawElementsType(mm ? 0 : 1, Tm, fm, hm)
      }
      drawPointClouds(mm, Tm, fm) {
        this.drawArraysType(2, mm, Tm, fm)
      }
      drawUnIndexed(mm, Tm, fm, hm) {
        this.drawArraysType(mm ? 0 : 1, Tm, fm, hm)
      }
      drawElementsType(mm, Tm, fm, hm) {
        this.applyStates(), this._reportDrawCall();
        const Am = this._drawMode(mm),
          am = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          xm = this._uintIndicesCurrentlySet ? 4 : 2;
        hm ? this._gl.drawElementsInstanced(Am, fm, am, Tm * xm, hm) : this._gl.drawElements(Am, fm, am, Tm * xm)
      }
      drawArraysType(mm, Tm, fm, hm) {
        this.applyStates(), this._reportDrawCall();
        const Am = this._drawMode(mm);
        hm ? this._gl.drawArraysInstanced(Am, Tm, fm, hm) : this._gl.drawArrays(Am, Tm, fm)
      }
      _drawMode(mm) {
        switch (mm) {
          case 0:
          default:
            return this._gl.TRIANGLES;
          case 2:
          case 3:
            return this._gl.POINTS;
          case 1:
          case 4:
            return this._gl.LINES;
          case 5:
            return this._gl.LINE_LOOP;
          case 6:
            return this._gl.LINE_STRIP;
          case 7:
            return this._gl.TRIANGLE_STRIP;
          case 8:
            return this._gl.TRIANGLE_FAN
        }
      }
      _releaseEffect(mm) {
        this._compiledEffects[mm._key] && delete this._compiledEffects[mm._key];
        const Tm = mm.getPipelineContext();
        Tm && this._deletePipelineContext(Tm)
      }
      _deletePipelineContext(mm) {
        const Tm = mm;
        Tm && Tm.program && (Tm.program.__SPECTOR_rebuildProgram = null, (0, jm.g)(Tm), this._gl && (this._currentProgram === Tm.program && this._setProgram(null), this._gl.deleteProgram(Tm.program)))
      }
      _getGlobalDefines(mm) {
        return (0, qm.i)(mm, this.isNDCHalfZRange, this.fhm, this.useExactSrgbConversions)
      }
      createEffect(mm, Tm, fm, am, xm, wm, Dm, im, Rm) {
        let pm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          Em = arguments.length > 10 ? arguments[10] : void 0;
        const om = "string" === typeof mm ? mm : mm.vertexToken || mm.vertexSource || mm.vertexElement || mm.vertex,
          Om = "string" === typeof mm ? mm : mm.fragmentToken || mm.fragmentSource || mm.fragmentElement || mm.fragment,
          Ym = this._getGlobalDefines(),
          qm = void 0 !== Tm.attributes;
        let jm = xm ?? Tm.defines ?? "";
        Ym && (jm += Ym);
        const Vm = om + "+" + Om + "@" + jm;
        if (this._compiledEffects[Vm]) {
          const mm = this._compiledEffects[Vm];
          return Dm && mm.isReady() && Dm(mm), mm._refCount++, mm
        }
        this._gl && (0, Am.B)(this._gl);
        const Im = new hm.e(mm, Tm, qm ? this : fm, am, this, xm, wm, Dm, im, Rm, Vm, Tm.shaderLanguage ?? pm, Tm.extraInitializationsAsync ?? Em);
        return this._compiledEffects[Vm] = Im, Im
      }
      _getShaderSource(mm) {
        return this._gl.getShaderSource(mm)
      }
      createRawShaderProgram(mm, Tm, fm, hm) {
        let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const xm = (0, Am.B)(this._gl);
        return xm._contextWasLost = this._contextWasLost, xm.validateShaderPrograms = this.validateShaderPrograms, (0, Am.s)(mm, Tm, fm, hm || this._gl, am)
      }
      createShaderProgram(mm, Tm, fm, hm, am) {
        let xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const wm = (0, Am.B)(this._gl);
        return wm._contextWasLost = this._contextWasLost, wm.validateShaderPrograms = this.validateShaderPrograms, (0, Am.w)(mm, Tm, fm, hm, am || this._gl, xm)
      }
      inlineShaderCode(mm) {
        return mm
      }
      createPipelineContext(mm) {
        if (this._gl) {
          (0, Am.B)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const Tm = (0, Am.q)(this._gl, mm);
        return Tm.engine = this, Tm
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(mm) {
        return (0, Am.i)(mm, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(mm, Tm, fm, hm, am, xm, wm, Dm, im, Rm, pm) {
        const Em = (0, Am.B)(this._gl);
        return Em._contextWasLost = this._contextWasLost, Em.validateShaderPrograms = this.validateShaderPrograms, Em._createShaderProgramInjection = this._createShaderProgram.bind(this), Em.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), Em.createShaderProgramInjection = this.createShaderProgram.bind(this), Em.loadFileInjection = this._loadFile.bind(this), (0, Am.m)(mm, Tm, fm, hm, am, xm, wm, Dm, im, Rm, pm)
      }
      _createShaderProgram(mm, Tm, fm, hm) {
        let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, Am.e)(mm, Tm, fm, hm, am)
      }
      _isRenderingStateCompiled(mm) {
        return !this._isDisposed && (0, Am.k)(mm, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(mm, Tm) {
        (0, Am.h)(mm, Tm)
      }
      getUniforms(mm, Tm) {
        const fm = new Array,
          hm = mm;
        for (let Am = 0; Am < Tm.length; Am++) fm.push(this._gl.getUniformLocation(hm.program, Tm[Am]));
        return fm
      }
      getAttributes(mm, Tm) {
        const fm = [],
          hm = mm;
        for (let am = 0; am < Tm.length; am++) try {
          fm.push(this._gl.getAttribLocation(hm.program, Tm[am]))
        } catch (Am) {
          fm.push(-1)
        }
        return fm
      }
      enableEffect(mm) {
        (mm = null !== mm && (0, xm.c)(mm) ? mm.effect : mm) && mm !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(mm), this._currentEffect = mm, mm.onBind && mm.onBind(mm), mm._onBindObservable && mm._onBindObservable.notifyObservers(mm))
      }
      setInt(mm, Tm) {
        return !!mm && (this._gl.uniform1i(mm, Tm), !0)
      }
      setInt2(mm, Tm, fm) {
        return !!mm && (this._gl.uniform2i(mm, Tm, fm), !0)
      }
      setInt3(mm, Tm, fm, hm) {
        return !!mm && (this._gl.uniform3i(mm, Tm, fm, hm), !0)
      }
      setInt4(mm, Tm, fm, hm, Am) {
        return !!mm && (this._gl.uniform4i(mm, Tm, fm, hm, Am), !0)
      }
      setIntArray(mm, Tm) {
        return !!mm && (this._gl.uniform1iv(mm, Tm), !0)
      }
      setIntArray2(mm, Tm) {
        return !(!mm || Tm.length % 2 !== 0) && (this._gl.uniform2iv(mm, Tm), !0)
      }
      setIntArray3(mm, Tm) {
        return !(!mm || Tm.length % 3 !== 0) && (this._gl.uniform3iv(mm, Tm), !0)
      }
      setIntArray4(mm, Tm) {
        return !(!mm || Tm.length % 4 !== 0) && (this._gl.uniform4iv(mm, Tm), !0)
      }
      setUInt(mm, Tm) {
        return !!mm && (this._gl.uniform1ui(mm, Tm), !0)
      }
      setUInt2(mm, Tm, fm) {
        return !!mm && (this._gl.uniform2ui(mm, Tm, fm), !0)
      }
      setUInt3(mm, Tm, fm, hm) {
        return !!mm && (this._gl.uniform3ui(mm, Tm, fm, hm), !0)
      }
      setUInt4(mm, Tm, fm, hm, Am) {
        return !!mm && (this._gl.uniform4ui(mm, Tm, fm, hm, Am), !0)
      }
      setUIntArray(mm, Tm) {
        return !!mm && (this._gl.uniform1uiv(mm, Tm), !0)
      }
      setUIntArray2(mm, Tm) {
        return !(!mm || Tm.length % 2 !== 0) && (this._gl.uniform2uiv(mm, Tm), !0)
      }
      setUIntArray3(mm, Tm) {
        return !(!mm || Tm.length % 3 !== 0) && (this._gl.uniform3uiv(mm, Tm), !0)
      }
      setUIntArray4(mm, Tm) {
        return !(!mm || Tm.length % 4 !== 0) && (this._gl.uniform4uiv(mm, Tm), !0)
      }
      setArray(mm, Tm) {
        return !!mm && (!(Tm.length < 1) && (this._gl.uniform1fv(mm, Tm), !0))
      }
      setArray2(mm, Tm) {
        return !(!mm || Tm.length % 2 !== 0) && (this._gl.uniform2fv(mm, Tm), !0)
      }
      setArray3(mm, Tm) {
        return !(!mm || Tm.length % 3 !== 0) && (this._gl.uniform3fv(mm, Tm), !0)
      }
      setArray4(mm, Tm) {
        return !(!mm || Tm.length % 4 !== 0) && (this._gl.uniform4fv(mm, Tm), !0)
      }
      setMatrices(mm, Tm) {
        return !!mm && (this._gl.uniformMatrix4fv(mm, !1, Tm), !0)
      }
      setMatrix3x3(mm, Tm) {
        return !!mm && (this._gl.uniformMatrix3fv(mm, !1, Tm), !0)
      }
      setMatrix2x2(mm, Tm) {
        return !!mm && (this._gl.uniformMatrix2fv(mm, !1, Tm), !0)
      }
      setFloat(mm, Tm) {
        return !!mm && (this._gl.uniform1f(mm, Tm), !0)
      }
      setFloat2(mm, Tm, fm) {
        return !!mm && (this._gl.uniform2f(mm, Tm, fm), !0)
      }
      setFloat3(mm, Tm, fm, hm) {
        return !!mm && (this._gl.uniform3f(mm, Tm, fm, hm), !0)
      }
      setFloat4(mm, Tm, fm, hm, Am) {
        return !!mm && (this._gl.uniform4f(mm, Tm, fm, hm, Am), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const mm = this._colorWrite;
          this._gl.colorMask(mm, mm, mm, mm)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(mm) {
        this.preventCacheWipeBetweenFrames && !mm || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), mm && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(mm, Tm) {
        const fm = this._gl;
        let hm = fm.NEAREST,
          Am = fm.NEAREST,
          am = !1;
        switch (mm) {
          case 11:
            hm = fm.LINEAR, Am = Tm ? fm.LINEAR_MIPMAP_NEAREST : fm.LINEAR;
            break;
          case 3:
            hm = fm.LINEAR, am = !0, Am = Tm ? fm.LINEAR_MIPMAP_LINEAR : fm.LINEAR;
            break;
          case 8:
            am = !0, hm = fm.NEAREST, Am = Tm ? fm.NEAREST_MIPMAP_LINEAR : fm.NEAREST;
            break;
          case 4:
            hm = fm.NEAREST, Am = Tm ? fm.NEAREST_MIPMAP_NEAREST : fm.NEAREST;
            break;
          case 5:
            hm = fm.NEAREST, Am = Tm ? fm.LINEAR_MIPMAP_NEAREST : fm.LINEAR;
            break;
          case 6:
            am = !0, hm = fm.NEAREST, Am = Tm ? fm.LINEAR_MIPMAP_LINEAR : fm.LINEAR;
            break;
          case 7:
            hm = fm.NEAREST, Am = fm.LINEAR;
            break;
          case 1:
            hm = fm.NEAREST, Am = fm.NEAREST;
            break;
          case 9:
            hm = fm.LINEAR, Am = Tm ? fm.NEAREST_MIPMAP_NEAREST : fm.NEAREST;
            break;
          case 10:
            am = !0, hm = fm.LINEAR, Am = Tm ? fm.NEAREST_MIPMAP_LINEAR : fm.NEAREST;
            break;
          case 2:
            hm = fm.LINEAR, Am = fm.LINEAR;
            break;
          case 12:
            hm = fm.LINEAR, Am = fm.NEAREST
        }
        return {
          min: Am,
          mag: hm,
          hasMipMaps: am
        }
      }
      _createTexture() {
        const mm = this._gl.createTexture();
        if (!mm) throw new Error("Unable to create texture");
        return mm
      }
      _createHardwareTexture() {
        return new Om.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(mm, Tm) {
        let fm, hm, Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          am = !1,
          xm = 0,
          Dm = 3,
          im = 5,
          Rm = !1,
          pm = 1,
          Em = !1,
          om = 0,
          Om = !1;
        void 0 !== Tm && "object" === typeof Tm ? (fm = !!Tm.generateMipMaps, am = !!Tm.createMipMaps, xm = void 0 === Tm.type ? 0 : Tm.type, Dm = void 0 === Tm.samplingMode ? 3 : Tm.samplingMode, im = void 0 === Tm.format ? 5 : Tm.format, Rm = void 0 !== Tm.useSRGBBuffer && Tm.useSRGBBuffer, pm = Tm.samples ?? 1, hm = Tm.label, Em = !!Tm.createMSAATexture, om = Tm.comparisonFunction || 0, Om = !!Tm.isCube) : fm = !!Tm, Rm && (Rm = this._caps.supportSRGBBuffers && (this.zY > 1 || this.isWebGPU)), (1 !== xm || this._caps.textureFloatLinearFiltering) && (2 !== xm || this._caps.textureHalfFloatLinearFiltering) || (Dm = 1), 1 !== xm || this._caps.textureFloat || (xm = 0, wm.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const qm = (0, Vm.f)(im),
          jm = (0, Vm.c)(im),
          Im = this._gl,
          Km = new Ym.d(this, Am),
          Qm = mm.width || mm,
          nm = mm.height || mm,
          Jm = mm.depth || 0,
          cm = mm.layers || 0,
          zm = this._getSamplingParameters(Dm, (fm || am) && !qm),
          Zm = 0 !== cm ? Im.TEXTURE_2D_ARRAY : 0 !== Jm ? Im.TEXTURE_3D : Om ? Im.TEXTURE_CUBE_MAP : Im.TEXTURE_2D,
          km = qm ? this._getInternalFormatFromDepthTextureFormat(im, !0, jm) : this._getRGBABufferInternalSizedFormat(xm, im, Rm),
          bm = qm ? jm ? Im.DEPTH_STENCIL : Im.DEPTH_COMPONENT : this._getInternalFormat(im),
          Sm = qm ? this._getWebGLTextureTypeFromDepthTextureFormat(im) : this._getWebGLTextureType(xm);
        if (this._bindTextureDirectly(Zm, Km), 0 !== cm) Km.is2DArray = !0, Im.texImage3D(Zm, 0, km, Qm, nm, cm, 0, bm, Sm, null);
        else if (0 !== Jm) Km.is3D = !0, Im.texImage3D(Zm, 0, km, Qm, nm, Jm, 0, bm, Sm, null);
        else if (Om) {
          Km.isCube = !0;
          for (let mm = 0; mm < 6; mm++) Im.texImage2D(Im.TEXTURE_CUBE_MAP_POSITIVE_X + mm, 0, km, Qm, nm, 0, bm, Sm, null)
        } else Im.texImage2D(Zm, 0, km, Qm, nm, 0, bm, Sm, null);
        if (Im.texParameteri(Zm, Im.TEXTURE_MAG_FILTER, zm.mag), Im.texParameteri(Zm, Im.TEXTURE_MIN_FILTER, zm.min), Im.texParameteri(Zm, Im.TEXTURE_WRAP_S, Im.CLAMP_TO_EDGE), Im.texParameteri(Zm, Im.TEXTURE_WRAP_T, Im.CLAMP_TO_EDGE), qm && this.zY > 1 && (0 === om ? (Im.texParameteri(Zm, Im.TEXTURE_COMPARE_FUNC, 515), Im.texParameteri(Zm, Im.TEXTURE_COMPARE_MODE, Im.NONE)) : (Im.texParameteri(Zm, Im.TEXTURE_COMPARE_FUNC, om), Im.texParameteri(Zm, Im.TEXTURE_COMPARE_MODE, Im.COMPARE_REF_TO_TEXTURE))), (fm || am) && this._gl.generateMipmap(Zm), this._bindTextureDirectly(Zm, null), Km._useSRGBBuffer = Rm, Km.baseWidth = Qm, Km.baseHeight = nm, Km.width = Qm, Km.height = nm, Km.depth = cm || Jm, Km.isReady = !0, Km.samples = pm, Km.generateMipMaps = fm, Km.samplingMode = Dm, Km.type = xm, Km.format = im, Km.label = hm, Km.comparisonFunction = om, this._internalTexturesCache.push(Km), Em) {
          let mm;
          if (mm = (0, Vm.f)(Km.format) ? this._setupFramebufferDepthAttachments((0, Vm.c)(Km.format), 19 !== Km.format, Km.width, Km.height, pm, Km.format, !0) : this._createRenderBuffer(Km.width, Km.height, pm, -1, this._getRGBABufferInternalSizedFormat(Km.type, Km.format, Km._useSRGBBuffer), -1), !mm) throw new Error("Unable to create render buffer");
          Km._autoMSAAManagement = !0;
          let Tm = Km._hardwareTexture;
          Tm || (Tm = Km._hardwareTexture = this._createHardwareTexture()), Tm.addMSAARenderBuffer(mm)
        }
        return Km
      }
      _getUseSRGBBuffer(mm, Tm) {
        return mm && this._caps.supportSRGBBuffers && (this.zY > 1 || Tm)
      }
      createTexture(mm, Tm, fm, hm) {
        var Am = this;
        let am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          xm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          wm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Dm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          im = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Rm = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pm = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          Em = arguments.length > 11 ? arguments[11] : void 0,
          om = arguments.length > 12 ? arguments[12] : void 0,
          Om = arguments.length > 13 ? arguments[13] : void 0,
          qm = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(mm, Tm, fm, hm, am, xm, wm, (function() {
          for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
          return Am._prepareWebGLTexture(...Tm, Rm)
        }), ((mm, Tm, fm, Am, am, xm) => {
          const wm = this._gl,
            Dm = fm.width === mm && fm.height === Tm;
          am._creationFlags = Om ?? 0;
          const im = this._getTexImageParametersForCreateTexture(am.format, am._useSRGBBuffer);
          if (Dm) return wm.texImage2D(wm.TEXTURE_2D, 0, im.internalFormat, im.format, im.type, fm), !1;
          const Rm = this._caps.maxTextureSize;
          if (fm.width > Rm || fm.height > Rm || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = mm, this._workingCanvas.height = Tm, this._workingContext.drawImage(fm, 0, 0, fm.width, fm.height, 0, 0, mm, Tm), wm.texImage2D(wm.TEXTURE_2D, 0, im.internalFormat, im.format, im.type, this._workingCanvas), am.width = mm, am.height = Tm, !1);
          {
            const mm = new Ym.d(this, 2);
            this._bindTextureDirectly(wm.TEXTURE_2D, mm, !0), wm.texImage2D(wm.TEXTURE_2D, 0, im.internalFormat, im.format, im.type, fm), this._rescaleTexture(mm, am, hm, im.format, (() => {
              this._releaseTexture(mm), this._bindTextureDirectly(wm.TEXTURE_2D, am, !0), xm()
            }))
          }
          return !0
        }), Dm, im, Rm, pm, Em, om, qm)
      }
      _getTexImageParametersForCreateTexture(mm, Tm) {
        let fm, hm;
        return 1 === this.zY ? (fm = this._getInternalFormat(mm, Tm), hm = fm) : (fm = this._getInternalFormat(mm, !1), hm = this._getRGBABufferInternalSizedFormat(0, mm, Tm)), {
          internalFormat: hm,
          format: fm,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(mm, Tm, fm, hm, Am) {}
      _unpackFlipY(mm) {
        this._unpackFlipYCached !== mm && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, mm ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = mm))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(mm) {
        return mm.isCube ? this._gl.TEXTURE_CUBE_MAP : mm.is3D ? this._gl.TEXTURE_3D : mm.is2DArray || mm.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = this._getTextureTarget(Tm),
          Am = this._getSamplingParameters(mm, Tm.useMipMaps || fm);
        this._setTextureParameterInteger(hm, this._gl.TEXTURE_MAG_FILTER, Am.mag, Tm), this._setTextureParameterInteger(hm, this._gl.TEXTURE_MIN_FILTER, Am.min), fm && Am.hasMipMaps && (Tm.generateMipMaps = !0, this._gl.generateMipmap(hm)), this._bindTextureDirectly(hm, null), Tm.samplingMode = mm
      }
      updateTextureDimensions(mm, Tm, fm) {}
      updateTextureWrappingMode(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Am = this._getTextureTarget(mm);
        null !== Tm && (this._setTextureParameterInteger(Am, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Tm), mm), mm._cachedWrapU = Tm), null !== fm && (this._setTextureParameterInteger(Am, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(fm), mm), mm._cachedWrapV = fm), (mm.is2DArray || mm.is3D) && null !== hm && (this._setTextureParameterInteger(Am, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(hm), mm), mm._cachedWrapR = hm), this._bindTextureDirectly(Am, null)
      }
      _uploadCompressedDataToTextureDirectly(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const wm = this._gl;
        let Dm = wm.TEXTURE_2D;
        if (mm.isCube && (Dm = wm.TEXTURE_CUBE_MAP_POSITIVE_X + am), mm._useSRGBBuffer) switch (Tm) {
          case 37492:
          case 36196:
            this._caps.etc2 ? Tm = wm.COMPRESSED_SRGB8_ETC2 : mm._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? Tm = wm.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : mm._useSRGBBuffer = !1;
            break;
          case 36492:
            Tm = wm.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            Tm = wm.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? Tm = wm.COMPRESSED_SRGB_S3TC_DXT1_EXT : mm._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? Tm = wm.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : mm._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? Tm = wm.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : mm._useSRGBBuffer = !1;
            break;
          default:
            mm._useSRGBBuffer = !1
        }
        if (mm.generateMipMaps) {
          const am = mm._hardwareTexture;
          am.memoryAllocated || (wm.texStorage2D(mm.isCube ? wm.TEXTURE_CUBE_MAP : wm.TEXTURE_2D, Math.floor(Math.log2(Math.max(fm, hm))) + 1, Tm, mm.width, mm.height), am.memoryAllocated = !0), this._gl.compressedTexSubImage2D(Dm, xm, 0, 0, fm, hm, Tm, Am)
        } else this._gl.compressedTexImage2D(Dm, xm, Tm, fm, hm, 0, Am)
      }
      _uploadDataToTextureDirectly(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Am = arguments.length > 4 ? arguments[4] : void 0,
          am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const xm = this._gl,
          wm = this._getWebGLTextureType(mm.type),
          Dm = this._getInternalFormat(mm.format),
          im = void 0 === Am ? this._getRGBABufferInternalSizedFormat(mm.type, mm.format, mm._useSRGBBuffer) : this._getInternalFormat(Am, mm._useSRGBBuffer);
        this._unpackFlipY(mm.invertY);
        let Rm = xm.TEXTURE_2D;
        mm.isCube && (Rm = xm.TEXTURE_CUBE_MAP_POSITIVE_X + fm);
        const pm = Math.round(Math.log(mm.width) * Math.LOG2E),
          Em = Math.round(Math.log(mm.height) * Math.LOG2E),
          om = am ? mm.width : Math.pow(2, Math.max(pm - hm, 0)),
          Om = am ? mm.height : Math.pow(2, Math.max(Em - hm, 0));
        xm.texImage2D(Rm, hm, im, om, Om, 0, Dm, wm, Tm)
      }
      updateTextureData(mm, Tm, fm, hm, Am, am) {
        let xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const im = this._gl,
          Rm = this._getWebGLTextureType(mm.type),
          pm = this._getInternalFormat(mm.format);
        this._unpackFlipY(mm.invertY);
        let Em = im.TEXTURE_2D,
          om = im.TEXTURE_2D;
        mm.isCube && (om = im.TEXTURE_CUBE_MAP_POSITIVE_X + xm, Em = im.TEXTURE_CUBE_MAP), this._bindTextureDirectly(Em, mm, !0), im.texSubImage2D(om, wm, fm, hm, Am, am, pm, Rm, Tm), Dm && this._gl.generateMipmap(om), this._bindTextureDirectly(Em, null)
      }
      _uploadArrayBufferViewToTexture(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const Am = this._gl,
          am = mm.isCube ? Am.TEXTURE_CUBE_MAP : Am.TEXTURE_2D;
        this._bindTextureDirectly(am, mm, !0), this._uploadDataToTextureDirectly(mm, Tm, fm, hm), this._bindTextureDirectly(am, null, !0)
      }
      _prepareWebGLTextureContinuation(mm, Tm, fm, hm, Am) {
        const am = this._gl;
        if (!am) return;
        const xm = this._getSamplingParameters(Am, !fm);
        am.texParameteri(am.TEXTURE_2D, am.TEXTURE_MAG_FILTER, xm.mag), am.texParameteri(am.TEXTURE_2D, am.TEXTURE_MIN_FILTER, xm.min), fm || hm || am.generateMipmap(am.TEXTURE_2D), this._bindTextureDirectly(am.TEXTURE_2D, null), Tm && Tm.removePendingData(mm), mm.onLoadedObservable.notifyObservers(mm), mm.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        const Rm = this.getCaps().maxTextureSize,
          pm = Math.min(Rm, this.needPOTTextures ? (0, om.f)(hm.width, Rm) : hm.width),
          Em = Math.min(Rm, this.needPOTTextures ? (0, om.f)(hm.height, Rm) : hm.height),
          Om = this._gl;
        Om && (mm._hardwareTexture ? (this._bindTextureDirectly(Om.TEXTURE_2D, mm, !0), this._unpackFlipY(void 0 === Am || !!Am), mm.baseWidth = hm.width, mm.baseHeight = hm.height, mm.width = pm, mm.height = Em, mm.isReady = !0, mm.type = -1 !== mm.type ? mm.type : 0, mm.format = -1 !== mm.format ? mm.format : im ?? (".jpg" !== Tm || mm._useSRGBBuffer ? 5 : 4), wm(pm, Em, hm, Tm, mm, (() => {
          this._prepareWebGLTextureContinuation(mm, fm, am, xm, Dm)
        })) || this._prepareWebGLTextureContinuation(mm, fm, am, xm, Dm)) : fm && fm.removePendingData(mm))
      }
      _getInternalFormatFromDepthTextureFormat(mm, Tm, fm) {
        const hm = this._gl;
        if (!Tm) return hm.STENCIL_INDEX8;
        let Am = fm ? hm.DEPTH_STENCIL : hm.DEPTH_COMPONENT;
        return this.zY > 1 ? 15 === mm ? Am = hm.DEPTH_COMPONENT16 : 16 === mm ? Am = hm.DEPTH_COMPONENT24 : 17 === mm || 13 === mm ? Am = fm ? hm.DEPTH24_STENCIL8 : hm.DEPTH_COMPONENT24 : 14 === mm ? Am = hm.DEPTH_COMPONENT32F : 18 === mm && (Am = fm ? hm.DEPTH32F_STENCIL8 : hm.DEPTH_COMPONENT32F) : Am = hm.DEPTH_COMPONENT16, Am
      }
      _getWebGLTextureTypeFromDepthTextureFormat(mm) {
        const Tm = this._gl;
        let fm = Tm.UNSIGNED_INT;
        return 15 === mm ? fm = Tm.UNSIGNED_SHORT : 17 === mm || 13 === mm ? fm = Tm.UNSIGNED_INT_24_8 : 14 === mm ? fm = Tm.FLOAT : 18 === mm ? fm = Tm.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === mm && (fm = Tm.UNSIGNED_BYTE), fm
      }
      _setupFramebufferDepthAttachments(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          am = arguments.length > 5 ? arguments[5] : void 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const wm = this._gl;
        am = am ?? (mm ? 13 : 14);
        const Dm = this._getInternalFormatFromDepthTextureFormat(am, Tm, mm);
        return mm && Tm ? this._createRenderBuffer(fm, hm, Am, wm.DEPTH_STENCIL, Dm, xm ? -1 : wm.DEPTH_STENCIL_ATTACHMENT) : Tm ? this._createRenderBuffer(fm, hm, Am, Dm, Dm, xm ? -1 : wm.DEPTH_ATTACHMENT) : mm ? this._createRenderBuffer(fm, hm, Am, Dm, Dm, xm ? -1 : wm.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(mm, Tm, fm, hm, Am, am) {
        let xm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const wm = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(wm, mm, Tm, fm, hm, Am, am, xm)
      }
      _updateRenderBuffer(mm, Tm, fm, hm, Am, am, xm) {
        let wm = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const Dm = this._gl;
        return Dm.bindRenderbuffer(Dm.RENDERBUFFER, mm), hm > 1 && Dm.renderbufferStorageMultisample ? Dm.renderbufferStorageMultisample(Dm.RENDERBUFFER, hm, am, Tm, fm) : Dm.renderbufferStorage(Dm.RENDERBUFFER, Am, Tm, fm), -1 !== xm && Dm.framebufferRenderbuffer(Dm.FRAMEBUFFER, xm, Dm.RENDERBUFFER, mm), wm && Dm.bindRenderbuffer(Dm.RENDERBUFFER, null), mm
      }
      _releaseTexture(mm) {
        this._deleteTexture(mm._hardwareTexture), this.unbindAllTextures();
        const Tm = this._internalTexturesCache.indexOf(mm); - 1 !== Tm && this._internalTexturesCache.splice(Tm, 1), mm._lodTextureHigh && mm._lodTextureHigh.dispose(), mm._lodTextureMid && mm._lodTextureMid.dispose(), mm._lodTextureLow && mm._lodTextureLow.dispose(), mm._irradianceTexture && mm._irradianceTexture.dispose()
      }
      _deleteTexture(mm) {
        mm?.release()
      }
      _setProgram(mm) {
        this._currentProgram !== mm && ((0, Am.o)(mm, this._gl), this._currentProgram = mm)
      }
      bindSamplers(mm) {
        const Tm = mm.getPipelineContext();
        this._setProgram(Tm.program);
        const fm = mm.getSamplers();
        for (let hm = 0; hm < fm.length; hm++) {
          const Tm = mm.getUniform(fm[hm]);
          Tm && (this._boundUniforms[hm] = Tm)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          Am = !1;
        const am = Tm && Tm._associatedChannel > -1;
        fm && am && (this._activeChannel = Tm._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== Tm || hm) {
          if (this._activateCurrentTexture(), Tm && Tm.isMultiview) throw wm.b.Error(["_bindTextureDirectly called with a multiview texture!", mm, Tm]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(mm, Tm?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = Tm, Tm && (Tm._associatedChannel = this._activeChannel)
        } else fm && (Am = !0, this._activateCurrentTexture());
        return am && !fm && this._bindSamplerUniformToChannel(Tm._associatedChannel, this._activeChannel), Am
      }
      _bindTexture(mm, Tm, fm) {
        if (void 0 === mm) return;
        Tm && (Tm._associatedChannel = mm), this._activeChannel = mm;
        const hm = Tm ? this._getTextureTarget(Tm) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(hm, Tm)
      }
      unbindAllTextures() {
        for (let mm = 0; mm < this._maxSimultaneousTextures; mm++) this._activeChannel = mm, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.zY > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(mm, Tm, fm, hm) {
        void 0 !== mm && (Tm && (this._boundUniforms[mm] = Tm), this._setTexture(mm, fm))
      }
      _bindSamplerUniformToChannel(mm, Tm) {
        const fm = this._boundUniforms[mm];
        fm && fm._currentState !== Tm && (this._gl.uniform1i(fm, Tm), fm._currentState = Tm)
      }
      _getTextureWrapMode(mm) {
        switch (mm) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(mm, Tm) {
        let fm, hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!Tm) return null != this._boundTexturesCache[mm] && (this._activeChannel = mm, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.zY > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (Tm.video) {
          this._activeChannel = mm;
          const fm = Tm.getInternalTexture();
          fm && (fm._associatedChannel = mm), Tm.update()
        } else if (4 === Tm.delayLoadState) return Tm.delayLoad(), !1;
        fm = Am ? Tm.depthStencilTexture : Tm.isReady() ? Tm.getInternalTexture() : Tm.isCube ? this.emptyCubeTexture : Tm.is3D ? this.emptyTexture3D : Tm.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !hm && fm && (fm._associatedChannel = mm);
        let am = !0;
        this._boundTexturesCache[mm] === fm && (hm || this._bindSamplerUniformToChannel(fm._associatedChannel, mm), am = !1), this._activeChannel = mm;
        const xm = this._getTextureTarget(fm);
        if (am && this._bindTextureDirectly(xm, fm, hm), fm && !fm.isMultiview) {
          if (fm.isCube && fm._cachedCoordinatesMode !== Tm.coordinatesMode) {
            fm._cachedCoordinatesMode = Tm.coordinatesMode;
            const mm = 3 !== Tm.coordinatesMode && 5 !== Tm.coordinatesMode ? 1 : 0;
            Tm.wrapU = mm, Tm.wrapV = mm
          }
          fm._cachedWrapU !== Tm.wrapU && (fm._cachedWrapU = Tm.wrapU, this._setTextureParameterInteger(xm, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(Tm.wrapU), fm)), fm._cachedWrapV !== Tm.wrapV && (fm._cachedWrapV = Tm.wrapV, this._setTextureParameterInteger(xm, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(Tm.wrapV), fm)), fm.is3D && fm._cachedWrapR !== Tm.wrapR && (fm._cachedWrapR = Tm.wrapR, this._setTextureParameterInteger(xm, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(Tm.wrapR), fm)), this._setAnisotropicLevel(xm, fm, Tm.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(mm, Tm, fm, hm) {
        if (void 0 !== mm && Tm) {
          this._textureUnits && this._textureUnits.length === fm.length || (this._textureUnits = new Int32Array(fm.length));
          for (let Tm = 0; Tm < fm.length; Tm++) {
            const hm = fm[Tm].getInternalTexture();
            hm ? (this._textureUnits[Tm] = mm + Tm, hm._associatedChannel = mm + Tm) : this._textureUnits[Tm] = -1
          }
          this._gl.uniform1iv(Tm, this._textureUnits);
          for (let mm = 0; mm < fm.length; mm++) this._setTexture(this._textureUnits[mm], fm[mm], !0)
        }
      }
      _setAnisotropicLevel(mm, Tm, fm) {
        const hm = this._caps.textureAnisotropicFilterExtension;
        11 !== Tm.samplingMode && 3 !== Tm.samplingMode && 2 !== Tm.samplingMode && (fm = 1), hm && Tm._cachedAnisotropicFilteringLevel !== fm && (this._setTextureParameterFloat(mm, hm.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(fm, this._caps.maxAnisotropy), Tm), Tm._cachedAnisotropicFilteringLevel = fm)
      }
      _setTextureParameterFloat(mm, Tm, fm, hm) {
        this._bindTextureDirectly(mm, hm, !0, !0), this._gl.texParameterf(mm, Tm, fm)
      }
      _setTextureParameterInteger(mm, Tm, fm, hm) {
        hm && this._bindTextureDirectly(mm, hm, !0, !0), this._gl.texParameteri(mm, Tm, fm)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let mm = 0; mm < this._caps.maxVertexAttribs; mm++) this.disableAttributeByIndex(mm)
        } else
          for (let mm = 0, Tm = this._vertexAttribArraysEnabled.length; mm < Tm; mm++) mm >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[mm] || this.disableAttributeByIndex(mm)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, Dm.p)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, Am.y)(this._gl)
      }
      attachContextLostEvent(mm) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", mm, !1)
      }
      attachContextRestoredEvent(mm) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", mm, !1)
      }
      getError() {
        return this._gl.getError()
      }
      _canRenderToFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(1)
      }
      _canRenderToHalfFloatFramebuffer() {
        return this._webGLVersion > 1 ? this._caps.colorBufferFloat : this._canRenderToFramebuffer(2)
      }
      _canRenderToFramebuffer(mm) {
        const Tm = this._gl;
        for (; Tm.getError() !== Tm.NO_ERROR;);
        let fm = !0;
        const hm = Tm.createTexture();
        Tm.bindTexture(Tm.TEXTURE_2D, hm), Tm.texImage2D(Tm.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(mm), 1, 1, 0, Tm.RGBA, this._getWebGLTextureType(mm), null), Tm.texParameteri(Tm.TEXTURE_2D, Tm.TEXTURE_MIN_FILTER, Tm.NEAREST), Tm.texParameteri(Tm.TEXTURE_2D, Tm.TEXTURE_MAG_FILTER, Tm.NEAREST);
        const Am = Tm.createFramebuffer();
        Tm.bindFramebuffer(Tm.FRAMEBUFFER, Am), Tm.framebufferTexture2D(Tm.FRAMEBUFFER, Tm.COLOR_ATTACHMENT0, Tm.TEXTURE_2D, hm, 0);
        const am = Tm.checkFramebufferStatus(Tm.FRAMEBUFFER);
        if (fm = fm && am === Tm.FRAMEBUFFER_COMPLETE, fm = fm && Tm.getError() === Tm.NO_ERROR, fm && (Tm.clear(Tm.COLOR_BUFFER_BIT), fm = fm && Tm.getError() === Tm.NO_ERROR), fm) {
          Tm.bindFramebuffer(Tm.FRAMEBUFFER, null);
          const mm = Tm.RGBA,
            hm = Tm.UNSIGNED_BYTE,
            Am = new Uint8Array(4);
          Tm.readPixels(0, 0, 1, 1, mm, hm, Am), fm = fm && Tm.getError() === Tm.NO_ERROR
        }
        for (Tm.deleteTexture(hm), Tm.deleteFramebuffer(Am), Tm.bindFramebuffer(Tm.FRAMEBUFFER, null); !fm && Tm.getError() !== Tm.NO_ERROR;);
        return fm
      }
      _getWebGLTextureType(mm) {
        if (1 === this._webGLVersion) {
          switch (mm) {
            case 1:
              return this._gl.FLOAT;
            case 2:
              return this._gl.HALF_FLOAT_OES;
            case 0:
              return this._gl.UNSIGNED_BYTE;
            case 8:
              return this._gl.UNSIGNED_SHORT_4_4_4_4;
            case 9:
              return this._gl.UNSIGNED_SHORT_5_5_5_1;
            case 10:
              return this._gl.UNSIGNED_SHORT_5_6_5
          }
          return this._gl.UNSIGNED_BYTE
        }
        switch (mm) {
          case 3:
            return this._gl.BYTE;
          case 0:
            return this._gl.UNSIGNED_BYTE;
          case 4:
            return this._gl.SHORT;
          case 5:
            return this._gl.UNSIGNED_SHORT;
          case 6:
            return this._gl.INT;
          case 7:
            return this._gl.UNSIGNED_INT;
          case 1:
            return this._gl.FLOAT;
          case 2:
            return this._gl.HALF_FLOAT;
          case 8:
            return this._gl.UNSIGNED_SHORT_4_4_4_4;
          case 9:
            return this._gl.UNSIGNED_SHORT_5_5_5_1;
          case 10:
            return this._gl.UNSIGNED_SHORT_5_6_5;
          case 11:
            return this._gl.UNSIGNED_INT_2_10_10_10_REV;
          case 12:
            return this._gl.UNSIGNED_INT_24_8;
          case 13:
            return this._gl.UNSIGNED_INT_10F_11F_11F_REV;
          case 14:
            return this._gl.UNSIGNED_INT_5_9_9_9_REV;
          case 15:
            return this._gl.FLOAT_32_UNSIGNED_INT_24_8_REV
        }
        return this._gl.UNSIGNED_BYTE
      }
      _getInternalFormat(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = Tm ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (mm) {
          case 0:
            fm = this._gl.ALPHA;
            break;
          case 1:
            fm = this._gl.LUMINANCE;
            break;
          case 2:
            fm = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            fm = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            fm = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            fm = Tm ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            fm = Tm ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (mm) {
          case 8:
            fm = this._gl.RED_INTEGER;
            break;
          case 9:
            fm = this._gl.RG_INTEGER;
            break;
          case 10:
            fm = this._gl.RGB_INTEGER;
            break;
          case 11:
            fm = this._gl.RGBA_INTEGER
        }
        return fm
      }
      _getRGBABufferInternalSizedFormat(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== Tm) switch (Tm) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return fm ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (mm) {
          case 3:
            switch (Tm) {
              case 6:
                return this._gl.R8_SNORM;
              case 7:
                return this._gl.RG8_SNORM;
              case 4:
                return this._gl.RGB8_SNORM;
              case 8:
                return this._gl.R8I;
              case 9:
                return this._gl.RG8I;
              case 10:
                return this._gl.RGB8I;
              case 11:
                return this._gl.RGBA8I;
              default:
                return this._gl.RGBA8_SNORM
            }
          case 0:
            switch (Tm) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return fm ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return fm ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
              case 8:
                return this._gl.R8UI;
              case 9:
                return this._gl.RG8UI;
              case 10:
                return this._gl.RGB8UI;
              case 11:
                return this._gl.RGBA8UI;
              case 0:
                return this._gl.ALPHA;
              case 1:
                return this._gl.LUMINANCE;
              case 2:
                return this._gl.LUMINANCE_ALPHA;
              default:
                return this._gl.RGBA8
            }
          case 4:
            switch (Tm) {
              case 8:
                return this._gl.R16I;
              case 36760:
                return this._gl.R16_SNORM_EXT;
              case 36761:
                return this._gl.RG16_SNORM_EXT;
              case 36762:
                return this._gl.RGB16_SNORM_EXT;
              case 36763:
                return this._gl.RGBA16_SNORM_EXT;
              case 9:
                return this._gl.RG16I;
              case 10:
                return this._gl.RGB16I;
              default:
                return this._gl.RGBA16I
            }
          case 5:
            switch (Tm) {
              case 8:
                return this._gl.R16UI;
              case 33322:
                return this._gl.R16_EXT;
              case 33324:
                return this._gl.RG16_EXT;
              case 32852:
                return this._gl.RGB16_EXT;
              case 32859:
                return this._gl.RGBA16_EXT;
              case 9:
                return this._gl.RG16UI;
              case 10:
                return this._gl.RGB16UI;
              default:
                return this._gl.RGBA16UI
            }
          case 6:
            switch (Tm) {
              case 8:
                return this._gl.R32I;
              case 9:
                return this._gl.RG32I;
              case 10:
                return this._gl.RGB32I;
              default:
                return this._gl.RGBA32I
            }
          case 7:
            switch (Tm) {
              case 8:
                return this._gl.R32UI;
              case 9:
                return this._gl.RG32UI;
              case 10:
                return this._gl.RGB32UI;
              default:
                return this._gl.RGBA32UI
            }
          case 1:
            switch (Tm) {
              case 6:
                return this._gl.R32F;
              case 7:
                return this._gl.RG32F;
              case 4:
                return this._gl.RGB32F;
              default:
                return this._gl.RGBA32F
            }
          case 2:
            switch (Tm) {
              case 6:
                return this._gl.R16F;
              case 7:
                return this._gl.RG16F;
              case 4:
                return this._gl.RGB16F;
              default:
                return this._gl.RGBA16F
            }
          case 10:
            return this._gl.RGB565;
          case 13:
            return this._gl.R11F_G11F_B10F;
          case 14:
            return this._gl.RGB9_E5;
          case 8:
            return this._gl.RGBA4;
          case 9:
            return this._gl.RGB5_A1;
          case 11:
            switch (Tm) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return fm ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(mm, Tm, fm, hm) {
        let Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const Dm = Am ? 4 : 3,
          im = Am ? this._gl.RGBA : this._gl.RGB,
          Rm = fm * hm * Dm;
        if (xm) {
          if (xm.length < Rm) return wm.b.Error(`Data buffer is too small to store the read pixels (${xm.length} should be more than ${Rm})`), Promise.resolve(xm)
        } else xm = new Uint8Array(Rm);
        return am && this.flushFramebuffer(), this._gl.readPixels(mm, Tm, fm, hm, im, this._gl.UNSIGNED_BYTE, xm), Promise.resolve(xm)
      }
      static get IsSupportedAsync() {
        return Promise.resolve(this.isSupported())
      }
      static get IsSupported() {
        return this.isSupported()
      }
      static isSupported() {
        if (null !== this._HasMajorPerformanceCaveat) return !this._HasMajorPerformanceCaveat;
        if (null === this._IsSupported) try {
          const mm = am.b._CreateCanvas(1, 1),
            Tm = mm.getContext("webgl") || mm.getContext("experimental-webgl");
          this._IsSupported = null != Tm && !!globalThis.WebGLRenderingContext
        } catch (mm) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const mm = am.b._CreateCanvas(1, 1),
            Tm = mm.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || mm.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !Tm
        } catch (mm) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    Qm._TempClearColorUint32 = new Uint32Array(4), Qm._TempClearColorInt32 = new Int32Array(4), Qm._TempClearColorFloat32 = new Float32Array(4), Qm.ExceptionList = [{
      key: "Chrome/63.0",
      capture: "63\\.0\\.3239\\.(\\d+)",
      captureConstraint: 108,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/58",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Firefox/59",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/72.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/73.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Chrome/74.+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/71",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome/72",
      capture: null,
      captureConstraint: null,
      targets: ["vao"]
    }, {
      key: "Mac OS.+Chrome",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: "Chrome/12\\d\\..+?Mobile",
      capture: null,
      captureConstraint: null,
      targets: ["uniformBuffer"]
    }, {
      key: ".*AppleWebKit.*(15.4).*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }, {
      key: ".*(15.4).*AppleWebKit.*Safari",
      capture: null,
      captureConstraint: null,
      targets: ["antialias", "maxMSAASamples"]
    }], Qm._ConcatenateShader = qm.g, Qm._IsSupported = null, Qm._HasMajorPerformanceCaveat = null
  },
  40292: (mm, Tm, fm) => {
    var hm;
    fm.d(Tm, {
        c: () => Am
      }),
      function(mm) {
        mm[mm.PointerMove = 0] = "PointerMove", mm[mm.PointerDown = 1] = "PointerDown", mm[mm.PointerUp = 2] = "PointerUp"
      }(hm || (hm = {}));
    class Am {}
    Am.DOM_DELTA_PIXEL = 0, Am.DOM_DELTA_LINE = 1, Am.DOM_DELTA_PAGE = 2
  },
  40287: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm,
      e: () => am,
      h: () => Am
    });
    class hm {}
    hm.KEYDOWN = 1, hm.KEYUP = 2;
    class Am {
      constructor(mm, Tm) {
        this.type = mm, this.event = Tm
      }
    }
    class am extends Am {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(mm) {
        this.skipOnKeyboardObservable = mm
      }
      constructor(mm, Tm) {
        super(mm, Tm), this.type = mm, this.event = Tm, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40283: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => xm,
      f: () => wm
    });
    var hm = fm(37185);
    class Am {}
    Am.POINTERDOWN = 1, Am.POINTERUP = 2, Am.POINTERMOVE = 4, Am.POINTERWHEEL = 8, Am.POINTERPICK = 16, Am.POINTERTAP = 32, Am.POINTERDOUBLETAP = 64;
    class am {
      constructor(mm, Tm) {
        this.type = mm, this.event = Tm
      }
    }
    class xm extends am {
      constructor(mm, Tm, fm, Am) {
        super(mm, Tm), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new hm.l(fm, Am)
      }
    }
    class wm extends am {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(mm, Tm), this._pickInfo = fm, this._inputManager = hm
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40303: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      static CompareLightsPriority(mm, Tm) {
        return mm.shadowEnabled !== Tm.shadowEnabled ? (Tm.shadowEnabled ? 1 : 0) - (mm.shadowEnabled ? 1 : 0) : Tm.renderPriority - mm.renderPriority
      }
    }
    hm.FALLOFF_DEFAULT = 0, hm.FALLOFF_PHYSICAL = 1, hm.FALLOFF_GLTF = 2, hm.FALLOFF_STANDARD = 3, hm.LIGHTMAP_DEFAULT = 0, hm.LIGHTMAP_SPECULAR = 1, hm.LIGHTMAP_SHADOWSONLY = 2, hm.INTENSITYMODE_AUTOMATIC = 0, hm.INTENSITYMODE_LUMINOUSPOWER = 1, hm.INTENSITYMODE_LUMINOUSINTENSITY = 2, hm.INTENSITYMODE_ILLUMINANCE = 3, hm.INTENSITYMODE_LUMINANCE = 4, hm.LIGHTTYPEID_POINTLIGHT = 0, hm.LIGHTTYPEID_DIRECTIONALLIGHT = 1, hm.LIGHTTYPEID_SPOTLIGHT = 2, hm.LIGHTTYPEID_HEMISPHERICLIGHT = 3, hm.LIGHTTYPEID_RECT_AREALIGHT = 4, hm.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39942: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm
    });
    var hm, Am = fm(37203),
      am = fm(39948);
    ! function(mm) {
      mm[mm.Unknown = 0] = "Unknown", mm[mm.Url = 1] = "Url", mm[mm.Temp = 2] = "Temp", mm[mm.Raw = 3] = "Raw", mm[mm.Dynamic = 4] = "Dynamic", mm[mm.RenderTarget = 5] = "RenderTarget", mm[mm.MultiRenderTarget = 6] = "MultiRenderTarget", mm[mm.Cube = 7] = "Cube", mm[mm.CubeRaw = 8] = "CubeRaw", mm[mm.CubePrefiltered = 9] = "CubePrefiltered", mm[mm.Raw3D = 10] = "Raw3D", mm[mm.Raw2DArray = 11] = "Raw2DArray", mm[mm.DepthStencil = 12] = "DepthStencil", mm[mm.CubeRawRGBD = 13] = "CubeRawRGBD", mm[mm.Depth = 14] = "Depth", mm[mm.External = 15] = "External"
    }(hm || (hm = {}));
    class xm extends am.d {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(mm) {
        this._useMipMaps = mm
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(mm) {
        this._uniqueId = mm
      }
      dO() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new Am.c, this.onErrorObservable = new Am.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = mm, this._source = Tm, this._uniqueId = xm._Counter++, fm || (this._hardwareTexture = mm._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, mm, Tm, fm), this.width = mm, this.height = Tm, this.depth = fm, this.baseWidth = mm, this.baseHeight = Tm, this.baseDepth = fm, this._size = mm * Tm * fm
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const mm = this.onRebuildCallback(this),
            Tm = Tm => {
              Tm._swapAndDie(this, !1), this.isReady = mm.isReady
            };
          return void(mm.isAsync ? mm.proxy.then(Tm) : Tm(mm.proxy))
        }
        let mm;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(mm = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (mm => {
              mm._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (mm = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), mm._swapAndDie(this, !1), this._bufferViewArray)
              for (let mm = 0; mm < this._bufferViewArray.length; mm++) {
                const Tm = this._bufferViewArray[mm];
                Tm && this._engine.updateRawTexture(this, Tm, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, mm)
              }
            this.isReady = !0;
            break;
          case 10:
            mm = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), mm._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (mm = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), mm._swapAndDie(this, !1), this._bufferViewArray)
              for (let mm = 0; mm < this._bufferViewArray.length; mm++) {
                const Tm = this._bufferViewArray[mm];
                Tm && this._engine.updateRawTexture2DArray(this, Tm, this.format, this.invertY, this._compression, this.type, mm)
              }
            this.isReady = !0;
            break;
          case 4:
            mm = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), mm._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(mm = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              mm._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            mm = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), mm._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return mm = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (mm => {
              mm && mm._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(mm._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(mm._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), mm._hardwareTexture = this._hardwareTexture, mm._setUniqueId(xm._Counter++), Tm && (mm._isRGBD = this._isRGBD), this._lodTextureHigh && (mm._lodTextureHigh && mm._lodTextureHigh.dispose(), mm._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (mm._lodTextureMid && mm._lodTextureMid.dispose(), mm._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (mm._lodTextureLow && mm._lodTextureLow.dispose(), mm._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (mm._irradianceTexture && mm._irradianceTexture.dispose(), mm._irradianceTexture = this._irradianceTexture);
        const fm = this._engine.getLoadedTexturesCache();
        let hm = fm.indexOf(this); - 1 !== hm && fm.splice(hm, 1), hm = fm.indexOf(mm), -1 === hm && fm.push(mm)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    xm._Counter = 0
  },
  40064: (mm, Tm, fm) => {
    function hm(mm) {
      return 13 === mm || 14 === mm || 15 === mm || 16 === mm || 17 === mm || 18 === mm || 19 === mm
    }

    function Am(mm) {
      return 8 === mm || 9 === mm || 10 === mm || 11 === mm
    }

    function am(mm) {
      return 0 === mm || 5 === mm || 7 === mm || 11 === mm
    }

    function xm(mm) {
      return 13 === mm || 17 === mm || 18 === mm || 19 === mm
    }
    fm.d(Tm, {
      c: () => xm,
      f: () => hm,
      i: () => Am,
      j: () => am
    })
  },
  39948: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    class hm {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(mm) {
        this._cachedWrapU = mm
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(mm) {
        this._cachedWrapV = mm
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(mm) {
        this._cachedWrapR = mm
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(mm) {
        this._cachedAnisotropicFilteringLevel = mm
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(mm) {
        this._comparisonFunction = mm
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(mm) {
        this._useMipMaps = mm
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = mm, this._cachedWrapV = Tm, this._cachedWrapR = fm, this._cachedAnisotropicFilteringLevel = hm, this.samplingMode = Am, this._comparisonFunction = am, this
      }
      compareSampler(mm) {
        return this._cachedWrapU === mm._cachedWrapU && this._cachedWrapV === mm._cachedWrapV && this._cachedWrapR === mm._cachedWrapR && this._cachedAnisotropicFilteringLevel === mm._cachedAnisotropicFilteringLevel && this.samplingMode === mm.samplingMode && this._comparisonFunction === mm._comparisonFunction && this._useMipMaps === mm._useMipMaps
      }
    }
  },
  40228: (mm, Tm, fm) => {
    function hm(mm) {
      mm.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    fm.d(Tm, {
      b: () => hm
    })
  },
  40030: (mm, Tm, fm) => {
    function hm(mm) {
      return void 0 === mm.getPipelineContext
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  40423: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am
    });
    var hm = fm(40008);
    class Am {
      static GetEffect(mm) {
        return void 0 === mm.getPipelineContext ? mm.effect : mm
      }
      constructor(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = mm.createDrawContext(), Tm && (this.materialContext = mm.createMaterialContext())
      }
      setEffect(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        fm || this.effect === mm || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = mm, void 0 !== Tm && (this.defines = Tm), fm && this.drawContext?.reset()
      }
      dispose() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const Tm = this.effect;
          mm ? Tm.dispose() : hm.c.SetImmediate((() => {
            Tm.dO().onEndFrameObservable.addOnce((() => {
              Tm.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39968: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm,
      d: () => om,
      e: () => im,
      g: () => Rm
    });
    var hm = fm(39973),
      Am = fm(39978),
      am = fm(39960),
      xm = fm(38766),
      wm = fm(4e4),
      Dm = fm(39986);

    function im(mm, Tm) {
      return (0, Am.B)(Tm).cachedPipelines[mm]
    }

    function Rm(mm) {
      const Tm = mm._name,
        fm = mm.context;
      if (Tm && fm) {
        const mm = (0, Am.B)(fm),
          hm = mm.cachedPipelines[Tm];
        hm?.dispose(), delete mm.cachedPipelines[Tm]
      }
    }

    function pm(mm, Tm, fm, Am, am, xm, Dm) {
      let im, Rm;
      const pm = (0, hm.p)() ? xm?.getHostDocument() : null;
      im = "string" === typeof Tm ? Tm : "string" === typeof Tm.vertexSource ? "source:" + Tm.vertexSource : "string" === typeof Tm.vertexElement ? pm?.getElementById(Tm.vertexElement) || Tm.vertexElement : Tm.vertex || Tm, Rm = "string" === typeof Tm ? Tm : "string" === typeof Tm.fragmentSource ? "source:" + Tm.fragmentSource : "string" === typeof Tm.fragmentElement ? pm?.getElementById(Tm.fragmentElement) || Tm.fragmentElement : Tm.fragment || Tm;
      const om = [void 0, void 0],
        Om = () => {
          if (om[0] && om[1]) {
            const [hm, im] = om;
            (0, wm.d)(mm), (0, wm.i)(hm, mm, ((hm, Rm) => {
              Dm && (Dm._vertexSourceCodeBeforeMigration = Rm), fm && (hm = fm("vertex", hm)), mm.isFragment = !0, (0, wm.i)(im, mm, ((xm, im) => {
                Dm && (Dm._fragmentSourceCodeBeforeMigration = im), fm && (xm = fm("fragment", xm));
                const Rm = (0, wm.b)(hm, xm, mm);
                mm = null;
                const pm = function(mm, Tm, fm, hm) {
                  if (fm) {
                    return {
                      vertexSourceCode: (1 === hm ? "//" : "") + "#define SHADER_NAME vertex:" + (fm.vertexElement || fm.vertex || fm.spectorName || fm) + "\n" + mm,
                      fragmentSourceCode: (1 === hm ? "//" : "") + "#define SHADER_NAME fragment:" + (fm.fragmentElement || fm.fragment || fm.spectorName || fm) + "\n" + Tm
                    }
                  }
                  return {
                    vertexSourceCode: mm,
                    fragmentSourceCode: Tm
                  }
                }(Rm.vertexCode, Rm.fragmentCode, Tm, am);
                Am?.(pm.vertexSourceCode, pm.fragmentSourceCode)
              }), xm)
            }), xm)
          }
        };
      Em(im, "Vertex", "", (mm => {
        Dm && (Dm._rawVertexSourceCode = mm), om[0] = mm, Om()
      }), am), Em(Rm, "Fragment", "Pixel", (mm => {
        Dm && (Dm._rawFragmentSourceCode = mm), om[1] = mm, Om()
      }), am)
    }

    function Em(mm, Tm, fm, Am, xm, wm) {
      if ("undefined" !== typeof HTMLElement && mm instanceof HTMLElement) {
        return void Am((0, hm.d)(mm))
      }
      if ("source:" === mm.substring(0, 7)) return void Am(mm.substring(7));
      if ("base64:" === mm.substring(0, 7)) {
        return void Am(window.atob(mm.substring(7)))
      }
      const im = am.e.GetShadersStore(xm);
      if (im[mm + Tm + "Shader"]) return void Am(im[mm + Tm + "Shader"]);
      if (fm && im[mm + fm + "Shader"]) return void Am(im[mm + fm + "Shader"]);
      let Rm;
      if (Rm = "." === mm[0] || "/" === mm[0] || mm.indexOf("http") > -1 ? mm : am.e.GetShadersRepository(xm) + mm, !(wm = wm || Dm.j)) throw new Error("loadFileInjection is not defined");
      wm(Rm + "." + Tm.toLowerCase() + ".fx", Am)
    }
    const om = (mm, Tm, fm, hm) => {
      try {
        const am = mm.context ? (0, Am.B)(mm.context) : null;
        am && (am.disableParallelShaderCompile = mm.disableParallelCompilation);
        const xm = mm.existingPipelineContext || Tm(mm.shaderProcessingContext);
        return xm._name = mm.name, mm.name && am && (am.cachedPipelines[mm.name] = xm), fm(xm, mm.vertex, mm.fragment, !!mm.createAsRaw, "", "", mm.rebuildRebind, mm.defines, mm.transformFeedbackVaryings, "", (() => {
          hm(xm, (() => {
            mm.onRenderingStateCompiled?.(xm)
          }))
        })), xm
      } catch (am) {
        throw xm.b.Error("Error compiling effect"), am
      }
    }
  },
  39958: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm
    });
    var hm = fm(37203),
      Am = fm(38766),
      am = fm(39960),
      xm = fm(39968),
      wm = fm(40008);
    class Dm {
      static get ShadersRepository() {
        return am.e.ShadersRepository
      }
      static set ShadersRepository(mm) {
        am.e.ShadersRepository = mm
      }
      get aJ() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new hm.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(mm, Tm, fm) {
        let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          am = arguments.length > 4 ? arguments[4] : void 0,
          wm = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          im = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          Rm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          pm = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          Em = arguments.length > 9 ? arguments[9] : void 0,
          om = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          Om = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          Ym = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new hm.c, this.onErrorObservable = new hm.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = mm, this._key = om;
        const qm = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let jm;
        if (Tm.attributes) {
          const mm = Tm;
          if (this._engine = fm, this._attributesNames = mm.attributes, this._uniformsNames = mm.uniformsNames.concat(mm.samplers), this._samplerList = mm.samplers.slice(), this.defines = mm.defines, this.onError = mm.onError, this.onCompiled = mm.onCompiled, this._fallbacks = mm.fallbacks, this._indexParameters = mm.indexParameters, this._transformFeedbackVaryings = mm.transformFeedbackVaryings || null, this._multiTarget = !!mm.multiTarget, this._shaderLanguage = mm.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!mm.disableParallelShaderCompilation, mm.uniformBuffersNames) {
            this._uniformBuffersNamesList = mm.uniformBuffersNames.slice();
            for (let Tm = 0; Tm < mm.uniformBuffersNames.length; Tm++) this._uniformBuffersNames[mm.uniformBuffersNames[Tm]] = Tm
          }
          this._processFinalCode = mm.processFinalCode ?? null, this._processCodeAfterIncludes = mm.processCodeAfterIncludes ?? void 0, Ym = mm.extraInitializationsAsync, jm = mm.existingPipelineContext
        } else this._engine = am, this.defines = null == wm ? "" : wm, this._uniformsNames = fm.concat(Am), this._samplerList = Am ? Am.slice() : [], this._attributesNames = Tm, this._uniformBuffersNamesList = [], this._shaderLanguage = Om, this.onError = pm, this.onCompiled = Rm, this._indexParameters = Em, this._fallbacks = im;
        "WEBGL2" === this._engine.shaderPlatformName && (jm = (0, xm.e)(qm, this._engine._gl) ?? jm), this._attributeLocationByName = {}, this.uniqueId = Dm._UniqueIdSeed++, jm ? (this._pipelineContext = jm, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, Ym).catch((mm => {
          const Tm = mm?.message ?? String(mm),
            fm = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${Tm}`);
          mm && "string" === typeof mm.stack && (fm.stack = `${fm.message}\nCaused by: ${mm.stack}`), this._processCompilationErrors(fm)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.aJ || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        hm && await hm(), this._processingContext = fm || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const Am = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: mm ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: am.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: am.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          fhm: this._engine.fhm,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, xm.b)(Am, this.name, this._processFinalCode, ((mm, fm) => {
          this._vertexSourceCode = mm, this._fragmentSourceCode = fm, this._prepareEffect(Tm)
        }), this._shaderLanguage, this._engine, this)
      }
      get key() {
        return this._key
      }
      isReady() {
        try {
          return this._isReadyInternal()
        } catch {
          return !1
        }
      }
      _isReadyInternal() {
        return !!this._engine.aJ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      dO() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(mm) {
        return this._attributes[mm]
      }
      getAttributeLocationByName(mm) {
        return this._attributeLocationByName[mm]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(mm) {
        return this._uniformsNames.indexOf(mm)
      }
      getUniform(mm) {
        return this._uniforms[mm]
      }
      getSamplers() {
        return this._samplerList
      }
      getUniformNames() {
        return this._uniformsNames
      }
      getUniformBuffersNames() {
        return this._uniformBuffersNamesList
      }
      getIndexParameters() {
        return this._indexParameters
      }
      getCompilationError() {
        return this._compilationError
      }
      allFallbacksProcessed() {
        return this._allFallbacksProcessed
      }
      async whenCompiledAsync() {
        return await new Promise((mm => {
          this.executeWhenCompiled(mm)
        }))
      }
      executeWhenCompiled(mm) {
        this.isReady() ? mm(this) : (this.onCompileObservable.add((Tm => {
          mm(Tm)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(mm) {
        (0, wm.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (Tm => {
          this._processCompilationErrors(Tm, mm)
        }), 16, 12e4, !0, ` - Effect: ${"string"===typeof this.name?this.name:this.key}`)
      }
      get vertexSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._vertexSourceCodeOverride : this._pipelineContext?._getVertexShaderCode() ?? this._vertexSourceCode
      }
      get fragmentSourceCode() {
        return this._vertexSourceCodeOverride && this._fragmentSourceCodeOverride ? this._fragmentSourceCodeOverride : this._pipelineContext?._getFragmentShaderCode() ?? this._fragmentSourceCode
      }
      get vertexSourceCodeBeforeMigration() {
        return this._vertexSourceCodeBeforeMigration
      }
      get fragmentSourceCodeBeforeMigration() {
        return this._fragmentSourceCodeBeforeMigration
      }
      get rawVertexSourceCode() {
        return this._rawVertexSourceCode
      }
      get rawFragmentSourceCode() {
        return this._rawFragmentSourceCode
      }
      getPipelineGenerationOptions() {
        return {
          platformName: this._engine.shaderPlatformName,
          shaderLanguage: this._shaderLanguage,
          shaderNameOrContent: this.name,
          key: this._key,
          defines: this.defines.split("\n"),
          addGlobalDefines: !1,
          extendedProcessingOptions: {
            indexParameters: this._indexParameters,
            isNDCHalfZRange: this._engine.isNDCHalfZRange,
            fhm: this._engine.fhm,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(mm, Tm, fm, hm) {
        this._isReady = !1, this._vertexSourceCodeOverride = mm, this._fragmentSourceCodeOverride = Tm, this.onError = (mm, Tm) => {
          hm && hm(Tm)
        }, this.onCompiled = () => {
          const mm = this.dO().scenes;
          if (mm)
            for (let Tm = 0; Tm < mm.length; Tm++) mm[Tm].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(fm)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(mm) {
        if (this._pipelineContext = mm, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let Tm = 0; Tm < this._attributesNames.length; Tm++) {
            const mm = this._attributesNames[Tm];
            this._attributeLocationByName[mm] = this._attributes[Tm]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), Dm.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = this._pipelineContext;
        this._isReady = !1;
        try {
          const fm = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            hm = fm ? null : this.defines,
            Am = fm ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            am = fm ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            wm = this._engine;
          this._pipelineContext = (0, xm.d)({
            existingPipelineContext: mm ? Tm : null,
            vertex: Am,
            fragment: am,
            context: "WEBGL2" === wm.shaderPlatformName || "WEBGL1" === wm.shaderPlatformName ? wm._gl : void 0,
            rebuildRebind: (mm, Tm, fm, hm) => this._rebuildProgram(mm, Tm, fm, hm),
            defines: hm,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: fm,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: fm => {
              Tm && !mm && this._engine._deletePipelineContext(Tm), fm && this._onRenderingStateCompiled(fm)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(Tm)
        } catch (fm) {
          this._processCompilationErrors(fm, Tm)
        }
      }
      _getShaderCodeAndErrorLine(mm, Tm, fm) {
        const hm = fm ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let Am = null;
        if (Tm && mm) {
          const am = Tm.match(hm);
          if (am && 2 === am.length) {
            const Tm = parseInt(am[1]),
              hm = mm.split("\n", -1);
            hm.length >= Tm && (Am = `Offending line [${Tm}] in ${fm?"fragment":"vertex"} code: ${hm[Tm-1]}`)
          }
        }
        return [mm, Am]
      }
      _processCompilationErrors(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof mm?.stack ? mm.stack : mm?.message ?? String(mm);
        const fm = this._attributesNames,
          hm = this._fallbacks;
        if (Am.b.Error("Unable to compile effect:"), Am.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), Am.b.Error(`Attributes: ${fm.join(" ")}`), Am.b.Error("Defines:\n" + this.defines), Dm.LogShaderCodeOnCompilationError) {
          let mm, Tm = null,
            fm = null;
          this._pipelineContext?._getVertexShaderCode() && ([mm, Tm] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), mm && (Am.b.Error("Vertex code:"), Am.b.Error(mm))), this._pipelineContext?._getFragmentShaderCode() && ([mm, fm] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), mm && (Am.b.Error("Fragment code:"), Am.b.Error(mm))), Tm && Am.b.Error(Tm), fm && Am.b.Error(fm)
        }
        Am.b.Error("Error: " + this._compilationError);
        const am = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        Tm && (this._pipelineContext = Tm, this._isReady = !0, am()), hm ? (this._pipelineContext = null, hm.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, Am.b.Error("Trying next fallback."), this.defines = hm.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, am(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, Tm || am())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(mm, Tm) {
        this._engine._bindTexture(this._samplers[mm], Tm, mm)
      }
      setTexture(mm, Tm) {
        this._engine.setTexture(this._samplers[mm], this._uniforms[mm], Tm, mm)
      }
      setTextureArray(mm, Tm) {
        const fm = mm + "Ex";
        if (-1 === this._samplerList.indexOf(fm + "0")) {
          const hm = this._samplerList.indexOf(mm);
          for (let mm = 1; mm < Tm.length; mm++) {
            const Tm = fm + (mm - 1).toString();
            this._samplerList.splice(hm + mm, 0, Tm)
          }
          let Am = 0;
          for (const mm of this._samplerList) this._samplers[mm] = Am, Am += 1
        }
        this._engine.setTextureArray(this._samplers[mm], this._uniforms[mm], Tm, mm)
      }
      bindUniformBuffer(mm, Tm) {
        const fm = this._uniformBuffersNames[Tm];
        void 0 === fm || Dm._BaseCache[fm] === mm && this._engine._features.useUBOBindingCache || (Dm._BaseCache[fm] = mm, this._engine.bindUniformBufferBase(mm, fm, Tm))
      }
      bindUniformBlock(mm, Tm) {
        this._engine.bindUniformBlock(this._pipelineContext, mm, Tm)
      }
      setInt(mm, Tm) {
        return this._pipelineContext.setInt(mm, Tm), this
      }
      setInt2(mm, Tm, fm) {
        return this._pipelineContext.setInt2(mm, Tm, fm), this
      }
      setInt3(mm, Tm, fm, hm) {
        return this._pipelineContext.setInt3(mm, Tm, fm, hm), this
      }
      setInt4(mm, Tm, fm, hm, Am) {
        return this._pipelineContext.setInt4(mm, Tm, fm, hm, Am), this
      }
      setIntArray(mm, Tm) {
        return this._pipelineContext.setIntArray(mm, Tm), this
      }
      setIntArray2(mm, Tm) {
        return this._pipelineContext.setIntArray2(mm, Tm), this
      }
      setIntArray3(mm, Tm) {
        return this._pipelineContext.setIntArray3(mm, Tm), this
      }
      setIntArray4(mm, Tm) {
        return this._pipelineContext.setIntArray4(mm, Tm), this
      }
      setUInt(mm, Tm) {
        return this._pipelineContext.setUInt(mm, Tm), this
      }
      setUInt2(mm, Tm, fm) {
        return this._pipelineContext.setUInt2(mm, Tm, fm), this
      }
      setUInt3(mm, Tm, fm, hm) {
        return this._pipelineContext.setUInt3(mm, Tm, fm, hm), this
      }
      setUInt4(mm, Tm, fm, hm, Am) {
        return this._pipelineContext.setUInt4(mm, Tm, fm, hm, Am), this
      }
      setUIntArray(mm, Tm) {
        return this._pipelineContext.setUIntArray(mm, Tm), this
      }
      setUIntArray2(mm, Tm) {
        return this._pipelineContext.setUIntArray2(mm, Tm), this
      }
      setUIntArray3(mm, Tm) {
        return this._pipelineContext.setUIntArray3(mm, Tm), this
      }
      setUIntArray4(mm, Tm) {
        return this._pipelineContext.setUIntArray4(mm, Tm), this
      }
      setFloatArray(mm, Tm) {
        return this._pipelineContext.setArray(mm, Tm), this
      }
      setFloatArray2(mm, Tm) {
        return this._pipelineContext.setArray2(mm, Tm), this
      }
      setFloatArray3(mm, Tm) {
        return this._pipelineContext.setArray3(mm, Tm), this
      }
      setFloatArray4(mm, Tm) {
        return this._pipelineContext.setArray4(mm, Tm), this
      }
      setArray(mm, Tm) {
        return this._pipelineContext.setArray(mm, Tm), this
      }
      setArray2(mm, Tm) {
        return this._pipelineContext.setArray2(mm, Tm), this
      }
      setArray3(mm, Tm) {
        return this._pipelineContext.setArray3(mm, Tm), this
      }
      setArray4(mm, Tm) {
        return this._pipelineContext.setArray4(mm, Tm), this
      }
      setMatrices(mm, Tm) {
        return this._pipelineContext.setMatrices(mm, Tm), this
      }
      setMatrix(mm, Tm) {
        return this._pipelineContext.setMatrix(mm, Tm), this
      }
      setMatrix3x3(mm, Tm) {
        return this._pipelineContext.setMatrix3x3(mm, Tm), this
      }
      setMatrix2x2(mm, Tm) {
        return this._pipelineContext.setMatrix2x2(mm, Tm), this
      }
      setFloat(mm, Tm) {
        return this._pipelineContext.setFloat(mm, Tm), this
      }
      setBool(mm, Tm) {
        return this._pipelineContext.setInt(mm, Tm ? 1 : 0), this
      }
      setVector2(mm, Tm) {
        return this._pipelineContext.setVector2(mm, Tm), this
      }
      setFloat2(mm, Tm, fm) {
        return this._pipelineContext.setFloat2(mm, Tm, fm), this
      }
      setVector3(mm, Tm) {
        return this._pipelineContext.setVector3(mm, Tm), this
      }
      setFloat3(mm, Tm, fm, hm) {
        return this._pipelineContext.setFloat3(mm, Tm, fm, hm), this
      }
      setVector4(mm, Tm) {
        return this._pipelineContext.setVector4(mm, Tm), this
      }
      setQuaternion(mm, Tm) {
        return this._pipelineContext.setQuaternion(mm, Tm), this
      }
      setFloat4(mm, Tm, fm, hm, Am) {
        return this._pipelineContext.setFloat4(mm, Tm, fm, hm, Am), this
      }
      setColor3(mm, Tm) {
        return this._pipelineContext.setColor3(mm, Tm), this
      }
      setColor4(mm, Tm, fm) {
        return this._pipelineContext.setColor4(mm, Tm, fm), this
      }
      setDirectColor4(mm, Tm) {
        return this._pipelineContext.setDirectColor4(mm, Tm), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (Dm.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, xm.g)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        Tm && (am.e.GetShadersStore(hm)[`${mm}PixelShader`] = Tm), fm && (am.e.GetShadersStore(hm)[`${mm}VertexShader`] = fm)
      }
      static ResetCache() {
        Dm._BaseCache = {}
      }
    }
    Dm.LogShaderCodeOnCompilationError = !0, Dm.PersistentMode = !1, Dm.AutomaticallyClearCodeCache = !1, Dm._UniqueIdSeed = 0, Dm._BaseCache = {}, Dm.ShadersStore = am.e.ShadersStore, Dm.IncludesShadersStore = am.e.IncludesShadersStore
  },
  40259: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Rm,
      c: () => Jm,
      f: () => nm
    });
    var hm = fm(39958),
      Am = fm(37185),
      am = fm(37217),
      xm = fm(40235);
    const wm = new Am.e,
      Dm = new Am.e,
      im = new Am.e,
      Rm = {
        wG: () => {},
        eyeAtCamera: !0
      };

    function pm(mm, Tm, fm) {
      const hm = fm.ahm(),
        Am = Tm.ahm();
      for (let am = 0; am < 16; am++) hm[am] = Am[am];
      return hm[12] -= mm.x, hm[13] -= mm.y, hm[14] -= mm.z, fm.markAsUpdated(), fm
    }

    function Em(mm, Tm, fm) {
      return (0, am.j)(Tm, Dm), pm(mm, Dm, im), (0, am.j)(im, fm), fm
    }

    function om(mm, Tm, fm) {
      if (!Rm.eyeAtCamera) return Em(mm, Tm, fm);
      const hm = fm.ahm(),
        Am = Tm.ahm();
      for (let am = 0; am < 16; am++) hm[am] = Am[am];
      return hm[12] = 0, hm[13] = 0, hm[14] = 0, fm.markAsUpdated(), fm
    }

    function Om(mm, Tm, fm, hm) {
      return (0, am.p)(om(mm, Tm, hm), fm, hm), hm
    }

    function Ym(mm, Tm, fm, hm) {
      return (0, am.j)(fm, Dm), (0, am.p)(Tm, Dm, im), pm(mm, im, Dm), om(mm, fm, im), (0, am.p)(Dm, im, hm), hm
    }

    function qm(mm, Tm, fm, hm, Am, xm) {
      return (0, am.j)(fm, Dm), (0, am.p)(Tm, Dm, im), pm(mm, im, Dm), Om(mm, hm, Am, im), (0, am.p)(Dm, im, xm), xm
    }

    function jm(mm, Tm) {
      const fm = Rm.wG();
      if (!fm || wm === Tm) return Tm;
      wm.updateFlag = Tm.updateFlag;
      const hm = fm.floatingOriginOffset;
      switch (mm) {
        case "world":
          return pm(hm, Tm, wm);
        case "view":
          return om(hm, Tm, wm);
        case "worldView":
          return Ym(hm, Tm, fm.getViewMatrix(), wm);
        case "viewProjection":
          return Om(hm, fm.getViewMatrix(), fm.getProjectionMatrix(), wm);
        case "worldViewProjection":
          return qm(hm, Tm, fm.getTransformMatrix(), fm.getViewMatrix(), fm.getProjectionMatrix(), wm);
        default:
          if (mm.startsWith("u_")) {
            const Am = mm.toLowerCase();
            if (Am.startsWith("u_worldviewprojection")) return qm(hm, Tm, fm.getTransformMatrix(), fm.getViewMatrix(), fm.getProjectionMatrix(), wm);
            if (Am.startsWith("u_viewprojection")) return Om(hm, fm.getViewMatrix(), fm.getProjectionMatrix(), wm);
            if (Am.startsWith("u_worldview")) return Ym(hm, Tm, fm.getViewMatrix(), wm);
            if (Am.startsWith("u_world")) return pm(hm, Tm, wm);
            if (Am.startsWith("u_view")) return om(hm, Tm, wm)
          }
          return Tm
      }
    }
    const Vm = xm.e,
      Im = hm.e,
      Km = Vm.prototype._updateMatrixForUniform,
      Qm = hm.e.prototype.setMatrix;

    function nm() {
      hm.e.prototype.setMatrix = Qm, Im._setMatrixOverride = void 0, Vm.prototype._updateMatrixForUniform = Km, Vm.prototype._updateMatrixForUniformOverride = void 0
    }

    function Jm() {
      Im.prototype._setMatrixOverride = Qm, Im.prototype.setMatrix = function(mm, Tm) {
        return this._setMatrixOverride(mm, jm(mm, Tm)), this
      }, Vm.prototype._updateMatrixForUniformOverride = Km, Vm.prototype._updateMatrixForUniform = function(mm, Tm) {
        this._updateMatrixForUniformOverride(mm, jm(mm, Tm))
      }
    }
  },
  40230: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Am
    });
    var hm = fm(40228);

    function Am(mm, Tm) {
      Tm.WHITEBALANCE && mm.push("whiteBalanceMatrix"), Tm.EXPOSURE && mm.push("exposureLinear"), Tm.CONTRAST && mm.push("contrast"), Tm.COLORGRADING && mm.push("colorTransformSettings"), (Tm.VIGNETTE || Tm.DITHER) && mm.push("vInverseScreenSize"), Tm.VIGNETTE && (mm.push("vignetteSettings1"), mm.push("vignetteSettings2")), Tm.COLORCURVES && (0, hm.b)(mm), Tm.DITHER && mm.push("ditherIntensity")
    }

    function am(mm, Tm) {
      Tm.COLORGRADING && mm.push("txColorTransform")
    }
  },
  40226: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => bm,
      f: () => Nm
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(37203),
      xm = fm(37336),
      wm = fm(37208),
      Dm = fm(37185);
    const im = [
        [0, .18006, .26352, -.24341],
        [10, .18066, .26589, -.25479],
        [20, .18133, .26846, -.26876],
        [30, .18208, .27119, -.28539],
        [40, .18293, .27407, -.3047],
        [50, .18388, .27709, -.32675],
        [60, .18494, .28021, -.35156],
        [70, .18611, .28342, -.37915],
        [80, .1874, .28668, -.40955],
        [90, .1888, .28997, -.44278],
        [100, .19032, .29326, -.47888],
        [125, .19462, .30141, -.58204],
        [150, .19962, .30921, -.70471],
        [175, .20525, .31647, -.84901],
        [200, .21142, .32312, -1.0182],
        [225, .21807, .32909, -1.2168],
        [250, .22511, .33439, -1.4512],
        [275, .23247, .33904, -1.7298],
        [300, .2401, .34308, -2.0637],
        [325, .24792, .34655, -2.4681],
        [350, .25591, .34951, -2.9641],
        [375, .264, .352, -3.5814],
        [400, .27218, .35407, -4.3633],
        [425, .28039, .35577, -5.3762],
        [450, .28863, .35714, -6.7262],
        [475, .29685, .35823, -8.5955],
        [500, .30505, .35907, -11.324],
        [525, .3132, .35968, -15.628],
        [550, .32129, .36011, -23.325],
        [575, .32931, .36038, -40.77],
        [600, .33724, .36051, -116.45]
      ],
      Rm = 1e6 / im[im.length - 1][0],
      pm = 150;

    function Em(mm, Tm) {
      const fm = Number.isNaN(mm) ? Rm : Math.max(mm, Rm),
        hm = (0, wm.Clamp)(1e6 / fm, im[0][0], im[im.length - 1][0]);
      let Am = 0,
        am = im.length - 1;
      for (; am - Am > 1;) {
        const mm = Am + am >> 1;
        im[mm][0] <= hm ? Am = mm : am = mm
      }
      const xm = Am,
        [Em, om, Om, Ym] = im[xm],
        [qm, jm, Vm, Im] = im[xm + 1],
        Km = (hm - Em) / (qm - Em),
        Qm = Dm.l.Lerp(new Dm.l(om, Om), new Dm.l(jm, Vm), Km),
        nm = Dm.l.Normalize(new Dm.l(1, Ym)),
        Jm = Dm.l.Normalize(new Dm.l(1, Im)),
        cm = Dm.l.Normalize(Dm.l.Lerp(nm, Jm, Km)),
        zm = (0, wm.Clamp)(Tm, -150, pm);
      Qm.zhm(cm.scale(zm / 3e3));
      const Zm = 2 * Qm.x - 8 * Qm.y + 4,
        km = 3 * Qm.x / Zm,
        bm = 2 * Qm.y / Zm;
      return new Dm.p(km / bm, 1, (1 - km - bm) / bm)
    }
    const om = Dm.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      Om = Dm.e.Invert(om);

    function Ym(mm, Tm) {
      const fm = Tm > 0 ? mm / Tm : 10;
      return (0, wm.Clamp)(fm, .1, 10)
    }

    function qm(mm, Tm) {
      const fm = Dm.p.TransformNormal(mm, om),
        hm = Dm.p.TransformNormal(Tm, om),
        Am = Dm.e.FromArray([Ym(hm.x, fm.x), 0, 0, 0, 0, Ym(hm.y, fm.y), 0, 0, 0, 0, Ym(hm.z, fm.z), 0, 0, 0, 0, 1]);
      return om.multiply(Am).multiply(Om)
    }
    const jm = new Dm.p(.95047, 1, 1.08883),
      Vm = Dm.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(qm(jm, Em(6500, 0))),
      Im = Dm.e.Invert(Vm),
      Km = Dm.p.TransformNormal(new Dm.p(1, 1, 1), Vm);
    var Qm = fm(40129),
      nm = fm(40228);
    let Jm = (() => {
      var mm;
      let Tm, fm, am, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm = [],
        jm = [],
        Vm = [],
        Im = [],
        Km = [],
        Jm = [],
        cm = [],
        zm = [],
        Zm = [],
        km = [],
        bm = [],
        Sm = [],
        em = [],
        Nm = [],
        Gm = [],
        Xm = [],
        Pm = [],
        Hm = [],
        ym = [],
        Cm = [],
        rm = [],
        sm = [],
        lm = [],
        Mm = [];
      return mm = class {
        constructor() {
          this._dirty = !0, this._tempColor = new xm.c(0, 0, 0, 0), this._globalCurve = new xm.c(0, 0, 0, 0), this._highlightsCurve = new xm.c(0, 0, 0, 0), this._midtonesCurve = new xm.c(0, 0, 0, 0), this._shadowsCurve = new xm.c(0, 0, 0, 0), this._positiveCurve = new xm.c(0, 0, 0, 0), this._negativeCurve = new xm.c(0, 0, 0, 0), this._globalHue = (0, hm.i)(this, qm, 30), this._globalDensity = ((0, hm.i)(this, jm), (0, hm.i)(this, Vm, 0)), this._globalSaturation = ((0, hm.i)(this, Im), (0, hm.i)(this, Km, 0)), this._globalExposure = ((0, hm.i)(this, Jm), (0, hm.i)(this, cm, 0)), this._highlightsHue = ((0, hm.i)(this, zm), (0, hm.i)(this, Zm, 30)), this._highlightsDensity = ((0, hm.i)(this, km), (0, hm.i)(this, bm, 0)), this._highlightsSaturation = ((0, hm.i)(this, Sm), (0, hm.i)(this, em, 0)), this._highlightsExposure = ((0, hm.i)(this, Nm), (0, hm.i)(this, Gm, 0)), this._midtonesHue = ((0, hm.i)(this, Xm), (0, hm.i)(this, Pm, 30)), this._midtonesDensity = ((0, hm.i)(this, Hm), (0, hm.i)(this, ym, 0)), this._midtonesSaturation = ((0, hm.i)(this, Cm), (0, hm.i)(this, rm, 0)), this._midtonesExposure = ((0, hm.i)(this, sm), (0, hm.i)(this, lm, 0)), this._shadowsHue = ((0, hm.i)(this, Mm), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(mm) {
          this._globalHue = mm, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(mm) {
          this._globalDensity = mm, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(mm) {
          this._globalSaturation = mm, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(mm) {
          this._globalExposure = mm, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(mm) {
          this._highlightsHue = mm, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(mm) {
          this._highlightsDensity = mm, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(mm) {
          this._highlightsSaturation = mm, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(mm) {
          this._highlightsExposure = mm, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(mm) {
          this._midtonesHue = mm, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(mm) {
          this._midtonesDensity = mm, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(mm) {
          this._midtonesSaturation = mm, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(mm) {
          this._midtonesExposure = mm, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(mm) {
          this._shadowsHue = mm, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(mm) {
          this._shadowsDensity = mm, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(mm) {
          this._shadowsSaturation = mm, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(mm) {
          this._shadowsExposure = mm, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(Tm, fm, hm, Am, am) {
          null != Tm && (Tm = mm._Clamp(Tm, 0, 360), fm = mm._Clamp(fm, -100, 100), hm = mm._Clamp(hm, -100, 100), Am = mm._Clamp(Am, -100, 100), fm = mm._ApplyColorGradingSliderNonlinear(fm), fm *= .5, Am = mm._ApplyColorGradingSliderNonlinear(Am), fm < 0 && (fm *= -1, Tm = (Tm + 180) % 360), mm._FromHSBToRef(Tm, fm, 50 + .25 * Am, am), am.scaleToRef(2, am), am.a = 1 + .01 * hm)
        }
        static _ApplyColorGradingSliderNonlinear(mm) {
          mm /= 100;
          let Tm = Math.abs(mm);
          return Tm = Math.pow(Tm, 2), mm < 0 && (Tm *= -1), Tm *= 100, Tm
        }
        static _FromHSBToRef(Tm, fm, hm, Am) {
          let am = mm._Clamp(Tm, 0, 360);
          const xm = mm._Clamp(fm / 100, 0, 1),
            wm = mm._Clamp(hm / 100, 0, 1);
          if (0 === xm) Am.r = wm, Am.g = wm, Am.b = wm;
          else {
            am /= 60;
            const mm = Math.floor(am),
              Tm = am - mm,
              fm = wm * (1 - xm),
              hm = wm * (1 - xm * Tm),
              Dm = wm * (1 - xm * (1 - Tm));
            switch (mm) {
              case 0:
                Am.r = wm, Am.g = Dm, Am.b = fm;
                break;
              case 1:
                Am.r = hm, Am.g = wm, Am.b = fm;
                break;
              case 2:
                Am.r = fm, Am.g = wm, Am.b = Dm;
                break;
              case 3:
                Am.r = fm, Am.g = hm, Am.b = wm;
                break;
              case 4:
                Am.r = Dm, Am.g = fm, Am.b = wm;
                break;
              default:
                Am.r = wm, Am.g = fm, Am.b = hm
            }
          }
          Am.a = 1
        }
        static _Clamp(mm, Tm, fm) {
          return Math.min(Math.max(mm, Tm), fm)
        }
        clone() {
          return Qm.d.Clone((() => new mm), this)
        }
        serialize() {
          return Qm.d.Serialize(this)
        }
        _bind(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), mm && (mm.setFloat4(Tm, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), mm.setFloat4(fm, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), mm.setFloat4(hm, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const xm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], wm = [(0, Am.J)()], Dm = [(0, Am.J)()], im = [(0, Am.J)()], Rm = [(0, Am.J)()], pm = [(0, Am.J)()], Em = [(0, Am.J)()], om = [(0, Am.J)()], Om = [(0, Am.J)()], Ym = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: mm => "_globalHue" in mm,
            get: mm => mm._globalHue,
            set: (mm, Tm) => {
              mm._globalHue = Tm
            }
          },
          metadata: xm
        }, qm, jm), (0, hm.g)(null, null, fm, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "_globalDensity" in mm,
            get: mm => mm._globalDensity,
            set: (mm, Tm) => {
              mm._globalDensity = Tm
            }
          },
          metadata: xm
        }, Vm, Im), (0, hm.g)(null, null, am, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: mm => "_globalSaturation" in mm,
            get: mm => mm._globalSaturation,
            set: (mm, Tm) => {
              mm._globalSaturation = Tm
            }
          },
          metadata: xm
        }, Km, Jm), (0, hm.g)(null, null, wm, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: mm => "_globalExposure" in mm,
            get: mm => mm._globalExposure,
            set: (mm, Tm) => {
              mm._globalExposure = Tm
            }
          },
          metadata: xm
        }, cm, zm), (0, hm.g)(null, null, Dm, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: mm => "_highlightsHue" in mm,
            get: mm => mm._highlightsHue,
            set: (mm, Tm) => {
              mm._highlightsHue = Tm
            }
          },
          metadata: xm
        }, Zm, km), (0, hm.g)(null, null, im, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "_highlightsDensity" in mm,
            get: mm => mm._highlightsDensity,
            set: (mm, Tm) => {
              mm._highlightsDensity = Tm
            }
          },
          metadata: xm
        }, bm, Sm), (0, hm.g)(null, null, Rm, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: mm => "_highlightsSaturation" in mm,
            get: mm => mm._highlightsSaturation,
            set: (mm, Tm) => {
              mm._highlightsSaturation = Tm
            }
          },
          metadata: xm
        }, em, Nm), (0, hm.g)(null, null, pm, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: mm => "_highlightsExposure" in mm,
            get: mm => mm._highlightsExposure,
            set: (mm, Tm) => {
              mm._highlightsExposure = Tm
            }
          },
          metadata: xm
        }, Gm, Xm), (0, hm.g)(null, null, Em, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: mm => "_midtonesHue" in mm,
            get: mm => mm._midtonesHue,
            set: (mm, Tm) => {
              mm._midtonesHue = Tm
            }
          },
          metadata: xm
        }, Pm, Hm), (0, hm.g)(null, null, om, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: mm => "_midtonesDensity" in mm,
            get: mm => mm._midtonesDensity,
            set: (mm, Tm) => {
              mm._midtonesDensity = Tm
            }
          },
          metadata: xm
        }, ym, Cm), (0, hm.g)(null, null, Om, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: mm => "_midtonesSaturation" in mm,
            get: mm => mm._midtonesSaturation,
            set: (mm, Tm) => {
              mm._midtonesSaturation = Tm
            }
          },
          metadata: xm
        }, rm, sm), (0, hm.g)(null, null, Ym, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: mm => "_midtonesExposure" in mm,
            get: mm => mm._midtonesExposure,
            set: (mm, Tm) => {
              mm._midtonesExposure = Tm
            }
          },
          metadata: xm
        }, lm, Mm), xm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: xm
        })
      })(), mm.PrepareUniforms = nm.b, mm
    })();

    function cm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      mm._bind(Tm, fm, hm, Am)
    }
    var zm = fm(40052),
      Zm = fm(40230),
      km = fm(37224);
    let bm = (() => {
        var mm;
        let Tm, fm, im, om, Om, Ym, jm, nm, km, bm, Sm, em, Nm, Gm, Xm, Pm, Hm, ym, Cm, rm, sm, lm, Mm, um, Bm, Lm, tm, Um, dm = [],
          gm = [],
          Wm = [],
          Fm = [],
          mT = [],
          TT = [],
          fT = [],
          hT = [],
          AT = [],
          aT = [],
          xT = [],
          wT = [],
          DT = [],
          iT = [],
          RT = [],
          pT = [],
          ET = [],
          oT = [],
          OT = [],
          YT = [],
          qT = [],
          jT = [],
          VT = [],
          IT = [],
          KT = [],
          QT = [],
          nT = [],
          JT = [],
          cT = [],
          zT = [],
          ZT = [],
          kT = [],
          bT = [],
          ST = [],
          eT = [],
          NT = [],
          GT = [],
          XT = [],
          PT = [],
          HT = [],
          yT = [],
          CT = [],
          rT = [],
          sT = [],
          lT = [],
          MT = [],
          uT = [],
          BT = [],
          LT = [],
          vT = [],
          tT = [],
          UT = [],
          dT = [],
          gT = [],
          WT = [],
          FT = [];
        return mm = class {
          constructor() {
            this.colorCurves = (0, hm.i)(this, dm, new Jm), this._colorCurvesEnabled = ((0, hm.i)(this, gm), (0, hm.i)(this, Wm, !1)), this._colorGradingTexture = ((0, hm.i)(this, Fm), (0, hm.i)(this, mT, void 0)), this._colorGradingEnabled = ((0, hm.i)(this, TT), (0, hm.i)(this, fT, !1)), this._colorGradingWithGreenDepth = ((0, hm.i)(this, hT), (0, hm.i)(this, AT, !0)), this._colorGradingBGR = ((0, hm.i)(this, aT), (0, hm.i)(this, xT, !0)), this._exposure = ((0, hm.i)(this, wT), (0, hm.i)(this, DT, 1)), this._toneMappingEnabled = ((0, hm.i)(this, iT), (0, hm.i)(this, RT, !1)), this._toneMappingType = ((0, hm.i)(this, pT), (0, hm.i)(this, ET, mm.TONEMAPPING_STANDARD)), this._contrast = ((0, hm.i)(this, oT), (0, hm.i)(this, OT, 1)), this._whiteBalanceEnabled = ((0, hm.i)(this, YT), (0, hm.i)(this, qT, !1)), this._temperature = ((0, hm.i)(this, jT), (0, hm.i)(this, VT, 6500)), this._tint = ((0, hm.i)(this, IT), (0, hm.i)(this, KT, 0)), this._whiteBalanceMatrix = ((0, hm.i)(this, QT), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, hm.i)(this, nT, 0), this.vignetteCenterX = ((0, hm.i)(this, JT), (0, hm.i)(this, cT, 0)), this.vignetteCenterY = ((0, hm.i)(this, zT), (0, hm.i)(this, ZT, 0)), this.vignetteWeight = ((0, hm.i)(this, kT), (0, hm.i)(this, bT, 1.5)), this.vignetteColor = ((0, hm.i)(this, ST), (0, hm.i)(this, eT, new xm.c(0, 0, 0, 0))), this.vignetteCameraFov = ((0, hm.i)(this, NT), (0, hm.i)(this, GT, .5)), this._vignetteBlendMode = ((0, hm.i)(this, XT), (0, hm.i)(this, PT, mm.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, hm.i)(this, HT), (0, hm.i)(this, yT, !1)), this._ditheringEnabled = ((0, hm.i)(this, CT), (0, hm.i)(this, rT, !1)), this._ditheringIntensity = ((0, hm.i)(this, sT), (0, hm.i)(this, lT, 1 / 255)), this._skipFinalColorClamp = ((0, hm.i)(this, MT), (0, hm.i)(this, uT, !1)), this._applyByPostProcess = ((0, hm.i)(this, BT), (0, hm.i)(this, LT, !1)), this._isEnabled = ((0, hm.i)(this, vT), (0, hm.i)(this, tT, !0)), this.outputTextureWidth = ((0, hm.i)(this, UT), (0, hm.i)(this, dT, 0)), this.outputTextureHeight = ((0, hm.i)(this, gT), (0, hm.i)(this, WT, 0)), this.onUpdateParameters = ((0, hm.i)(this, FT), new am.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(mm) {
            this._colorCurvesEnabled !== mm && (this._colorCurvesEnabled = mm, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(mm) {
            this._colorGradingTexture !== mm && (this._colorGradingTexture = mm, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(mm) {
            this._colorGradingEnabled !== mm && (this._colorGradingEnabled = mm, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(mm) {
            this._colorGradingWithGreenDepth !== mm && (this._colorGradingWithGreenDepth = mm, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(mm) {
            this._colorGradingBGR !== mm && (this._colorGradingBGR = mm, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(mm) {
            this._exposure !== mm && (this._exposure = mm, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(mm) {
            this._toneMappingEnabled !== mm && (this._toneMappingEnabled = mm, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(mm) {
            this._toneMappingType !== mm && (this._toneMappingType = mm, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(mm) {
            this._contrast !== mm && (this._contrast = mm, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(mm) {
            this._whiteBalanceEnabled !== mm && (this._whiteBalanceEnabled = mm, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(mm) {
            mm = Number.isNaN(mm) ? Rm : Math.max(mm, Rm), this._temperature !== mm && (this._temperature = mm, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(mm) {
            mm = (0, wm.Clamp)(mm, -150, pm), this._tint !== mm && (this._tint = mm, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(mm, Tm) {
              const fm = qm(Em(mm, Tm), Km),
                hm = Vm.multiply(fm).multiply(Im);
              return Dm.e.GetAsMatrix3x3(hm)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(mm) {
            this.vignetteCenterY = mm
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(mm) {
            this.vignetteCenterX = mm
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(mm) {
            this._vignetteBlendMode !== mm && (this._vignetteBlendMode = mm, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(mm) {
            this._vignetteEnabled !== mm && (this._vignetteEnabled = mm, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(mm) {
            this._ditheringEnabled !== mm && (this._ditheringEnabled = mm, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(mm) {
            this._ditheringIntensity !== mm && (this._ditheringIntensity = mm, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(mm) {
            this._skipFinalColorClamp !== mm && (this._skipFinalColorClamp = mm, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(mm) {
            this._applyByPostProcess !== mm && (this._applyByPostProcess = mm, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(mm) {
            this._isEnabled !== mm && (this._isEnabled = mm, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(Tm) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return Tm.WHITEBALANCE = !1, Tm.VIGNETTE = !1, Tm.TONEMAPPING = 0, Tm.CONTRAST = !1, Tm.EXPOSURE = !1, Tm.COLORCURVES = !1, Tm.COLORGRADING = !1, Tm.COLORGRADING3D = !1, Tm.DITHER = !1, Tm.IMAGEPROCESSING = !1, Tm.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(Tm.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (Tm.WHITEBALANCE = this._whiteBalanceEnabled, Tm.VIGNETTE = this.vignetteEnabled, Tm.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === mm._VIGNETTEMODE_MULTIPLY, Tm.VIGNETTEBLENDMODEOPAQUE = !Tm.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case mm.TONEMAPPING_KHR_PBR_NEUTRAL:
                Tm.TONEMAPPING = 3;
                break;
              case mm.TONEMAPPING_ACES:
                Tm.TONEMAPPING = 2;
                break;
              default:
                Tm.TONEMAPPING = 1
            } else Tm.TONEMAPPING = 0;
            Tm.CONTRAST = 1 !== this.contrast, Tm.EXPOSURE = 1 !== this.exposure, Tm.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, Tm.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, Tm.COLORGRADING ? Tm.COLORGRADING3D = this.colorGradingTexture.is3D : Tm.COLORGRADING3D = !1, Tm.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, Tm.SAMPLER3DBGRMAP = this.colorGradingBGR, Tm.DITHER = this._ditheringEnabled, Tm.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, Tm.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, Tm.IMAGEPROCESSING = Tm.WHITEBALANCE || Tm.VIGNETTE || !!Tm.TONEMAPPING || Tm.CONTRAST || Tm.EXPOSURE || Tm.COLORCURVES || Tm.COLORGRADING || Tm.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(mm, Tm) {
            if (this._whiteBalanceEnabled && mm.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && cm(this.colorCurves, mm), this._vignetteEnabled || this._ditheringEnabled) {
              const fm = 1 / (this.outputTextureWidth || mm.dO().getRenderWidth()),
                hm = 1 / (this.outputTextureHeight || mm.dO().getRenderHeight());
              if (mm.setFloat2("vInverseScreenSize", fm, hm), this._ditheringEnabled && mm.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const Am = null != Tm ? Tm : hm / fm;
                let am = Math.tan(.5 * this.vignetteCameraFov),
                  xm = am * Am;
                const wm = Math.sqrt(xm * am);
                xm = (0, zm.l)(xm, wm, this.vignetteStretch), am = (0, zm.l)(am, wm, this.vignetteStretch), mm.setFloat4("vignetteSettings1", xm, am, -xm * this.vignetteCenterX, -am * this.vignetteCenterY);
                const Dm = -2 * this.vignetteWeight;
                mm.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, Dm)
              }
            }
            if (mm.setFloat("exposureLinear", this.exposure), mm.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              mm.setTexture("txColorTransform", this.colorGradingTexture);
              const Tm = this.colorGradingTexture.getSize().height;
              mm.setFloat4("colorTransformSettings", (Tm - 1) / Tm, .5 / Tm, Tm, this.colorGradingTexture.level)
            }
          }
          clone() {
            return Qm.d.Clone((() => new mm), this)
          }
          serialize() {
            return Qm.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const am = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Tm = [(0, Am.j)()], fm = [(0, Am.J)()], im = [(0, Am.A)("colorGradingTexture")], om = [(0, Am.J)()], Om = [(0, Am.J)()], Ym = [(0, Am.J)()], jm = [(0, Am.J)()], nm = [(0, Am.J)()], km = [(0, Am.J)()], bm = [(0, Am.J)()], Sm = [(0, Am.J)()], em = [(0, Am.J)()], Nm = [(0, Am.J)()], Gm = [(0, Am.J)()], Xm = [(0, Am.J)()], Pm = [(0, Am.J)()], Hm = [(0, Am.J)()], ym = [(0, Am.o)()], Cm = [(0, Am.J)()], rm = [(0, Am.J)()], sm = [(0, Am.J)()], lm = [(0, Am.J)()], Mm = [(0, Am.J)()], um = [(0, Am.J)()], Bm = [(0, Am.J)()], Lm = [(0, Am.J)()], tm = [(0, Am.J)()], Um = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: mm => "colorCurves" in mm,
              get: mm => mm.colorCurves,
              set: (mm, Tm) => {
                mm.colorCurves = Tm
              }
            },
            metadata: am
          }, dm, gm), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: mm => "_colorCurvesEnabled" in mm,
              get: mm => mm._colorCurvesEnabled,
              set: (mm, Tm) => {
                mm._colorCurvesEnabled = Tm
              }
            },
            metadata: am
          }, Wm, Fm), (0, hm.g)(null, null, im, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_colorGradingTexture" in mm,
              get: mm => mm._colorGradingTexture,
              set: (mm, Tm) => {
                mm._colorGradingTexture = Tm
              }
            },
            metadata: am
          }, mT, TT), (0, hm.g)(null, null, om, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: mm => "_colorGradingEnabled" in mm,
              get: mm => mm._colorGradingEnabled,
              set: (mm, Tm) => {
                mm._colorGradingEnabled = Tm
              }
            },
            metadata: am
          }, fT, hT), (0, hm.g)(null, null, Om, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: mm => "_colorGradingWithGreenDepth" in mm,
              get: mm => mm._colorGradingWithGreenDepth,
              set: (mm, Tm) => {
                mm._colorGradingWithGreenDepth = Tm
              }
            },
            metadata: am
          }, AT, aT), (0, hm.g)(null, null, Ym, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: mm => "_colorGradingBGR" in mm,
              get: mm => mm._colorGradingBGR,
              set: (mm, Tm) => {
                mm._colorGradingBGR = Tm
              }
            },
            metadata: am
          }, xT, wT), (0, hm.g)(null, null, jm, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: mm => "_exposure" in mm,
              get: mm => mm._exposure,
              set: (mm, Tm) => {
                mm._exposure = Tm
              }
            },
            metadata: am
          }, DT, iT), (0, hm.g)(null, null, nm, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: mm => "_toneMappingEnabled" in mm,
              get: mm => mm._toneMappingEnabled,
              set: (mm, Tm) => {
                mm._toneMappingEnabled = Tm
              }
            },
            metadata: am
          }, RT, pT), (0, hm.g)(null, null, km, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: mm => "_toneMappingType" in mm,
              get: mm => mm._toneMappingType,
              set: (mm, Tm) => {
                mm._toneMappingType = Tm
              }
            },
            metadata: am
          }, ET, oT), (0, hm.g)(null, null, bm, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: mm => "_contrast" in mm,
              get: mm => mm._contrast,
              set: (mm, Tm) => {
                mm._contrast = Tm
              }
            },
            metadata: am
          }, OT, YT), (0, hm.g)(null, null, Sm, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: mm => "_whiteBalanceEnabled" in mm,
              get: mm => mm._whiteBalanceEnabled,
              set: (mm, Tm) => {
                mm._whiteBalanceEnabled = Tm
              }
            },
            metadata: am
          }, qT, jT), (0, hm.g)(null, null, em, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: mm => "_temperature" in mm,
              get: mm => mm._temperature,
              set: (mm, Tm) => {
                mm._temperature = Tm
              }
            },
            metadata: am
          }, VT, IT), (0, hm.g)(null, null, Nm, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: mm => "_tint" in mm,
              get: mm => mm._tint,
              set: (mm, Tm) => {
                mm._tint = Tm
              }
            },
            metadata: am
          }, KT, QT), (0, hm.g)(null, null, Gm, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: mm => "vignetteStretch" in mm,
              get: mm => mm.vignetteStretch,
              set: (mm, Tm) => {
                mm.vignetteStretch = Tm
              }
            },
            metadata: am
          }, nT, JT), (0, hm.g)(null, null, Xm, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: mm => "vignetteCenterX" in mm,
              get: mm => mm.vignetteCenterX,
              set: (mm, Tm) => {
                mm.vignetteCenterX = Tm
              }
            },
            metadata: am
          }, cT, zT), (0, hm.g)(null, null, Pm, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: mm => "vignetteCenterY" in mm,
              get: mm => mm.vignetteCenterY,
              set: (mm, Tm) => {
                mm.vignetteCenterY = Tm
              }
            },
            metadata: am
          }, ZT, kT), (0, hm.g)(null, null, Hm, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "vignetteWeight" in mm,
              get: mm => mm.vignetteWeight,
              set: (mm, Tm) => {
                mm.vignetteWeight = Tm
              }
            },
            metadata: am
          }, bT, ST), (0, hm.g)(null, null, ym, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "vignetteColor" in mm,
              get: mm => mm.vignetteColor,
              set: (mm, Tm) => {
                mm.vignetteColor = Tm
              }
            },
            metadata: am
          }, eT, NT), (0, hm.g)(null, null, Cm, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: mm => "vignetteCameraFov" in mm,
              get: mm => mm.vignetteCameraFov,
              set: (mm, Tm) => {
                mm.vignetteCameraFov = Tm
              }
            },
            metadata: am
          }, GT, XT), (0, hm.g)(null, null, rm, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: mm => "_vignetteBlendMode" in mm,
              get: mm => mm._vignetteBlendMode,
              set: (mm, Tm) => {
                mm._vignetteBlendMode = Tm
              }
            },
            metadata: am
          }, PT, HT), (0, hm.g)(null, null, sm, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: mm => "_vignetteEnabled" in mm,
              get: mm => mm._vignetteEnabled,
              set: (mm, Tm) => {
                mm._vignetteEnabled = Tm
              }
            },
            metadata: am
          }, yT, CT), (0, hm.g)(null, null, lm, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: mm => "_ditheringEnabled" in mm,
              get: mm => mm._ditheringEnabled,
              set: (mm, Tm) => {
                mm._ditheringEnabled = Tm
              }
            },
            metadata: am
          }, rT, sT), (0, hm.g)(null, null, Mm, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: mm => "_ditheringIntensity" in mm,
              get: mm => mm._ditheringIntensity,
              set: (mm, Tm) => {
                mm._ditheringIntensity = Tm
              }
            },
            metadata: am
          }, lT, MT), (0, hm.g)(null, null, um, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: mm => "_skipFinalColorClamp" in mm,
              get: mm => mm._skipFinalColorClamp,
              set: (mm, Tm) => {
                mm._skipFinalColorClamp = Tm
              }
            },
            metadata: am
          }, uT, BT), (0, hm.g)(null, null, Bm, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: mm => "_applyByPostProcess" in mm,
              get: mm => mm._applyByPostProcess,
              set: (mm, Tm) => {
                mm._applyByPostProcess = Tm
              }
            },
            metadata: am
          }, LT, vT), (0, hm.g)(null, null, Lm, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: mm => "_isEnabled" in mm,
              get: mm => mm._isEnabled,
              set: (mm, Tm) => {
                mm._isEnabled = Tm
              }
            },
            metadata: am
          }, tT, UT), (0, hm.g)(null, null, tm, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: mm => "outputTextureWidth" in mm,
              get: mm => mm.outputTextureWidth,
              set: (mm, Tm) => {
                mm.outputTextureWidth = Tm
              }
            },
            metadata: am
          }, dT, gT), (0, hm.g)(null, null, Um, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: mm => "outputTextureHeight" in mm,
              get: mm => mm.outputTextureHeight,
              set: (mm, Tm) => {
                mm.outputTextureHeight = Tm
              }
            },
            metadata: am
          }, WT, FT), am && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: am
          })
        })(), mm.TONEMAPPING_STANDARD = 0, mm.TONEMAPPING_ACES = 1, mm.TONEMAPPING_KHR_PBR_NEUTRAL = 2, mm.PrepareUniforms = Zm.d, mm.PrepareSamplers = Zm.c, mm._VIGNETTEMODE_MULTIPLY = 0, mm._VIGNETTEMODE_OPAQUE = 1, mm
      })(),
      Sm = !1;

    function em(mm) {
      const Tm = Qm.d.Parse((() => new bm), mm, null, null);
      return void 0 !== mm.vignetteCentreX && (Tm.vignetteCenterX = mm.vignetteCentreX), void 0 !== mm.vignetteCentreY && (Tm.vignetteCenterY = mm.vignetteCentreY), Tm
    }

    function Nm() {
      Sm || (Sm = !0, bm.Parse = em, Qm.d._ImageProcessingConfigurationParser = em, (0, km.d)("BABYLON.ImageProcessingConfiguration", bm))
    }
  },
  40235: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => am
    });
    var hm = fm(38766),
      Am = fm(40203);
    class am {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          am = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = mm, this._noUBO = !mm.supportsUniformBuffers || Am, this._dynamic = fm, this._name = hm ?? "no-name", this._data = Tm || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === am && this._engine._features.trackUbosInFrame || !0 === am) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.K9 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.K9 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
      }
      get useUbo() {
        return !this._noUBO
      }
      get isSync() {
        return !this._needSync
      }
      isDynamic() {
        return this._dynamic
      }
      getData() {
        return this._bufferData
      }
      getBuffer() {
        return this._buffer
      }
      getUniformNames() {
        return this._uniformNames
      }
      _fillAlignment(mm) {
        let Tm;
        if (Tm = mm <= 2 ? mm : 4, this._uniformLocationPointer % Tm !== 0) {
          const mm = this._uniformLocationPointer;
          this._uniformLocationPointer += Tm - this._uniformLocationPointer % Tm;
          const fm = this._uniformLocationPointer - mm;
          for (let Tm = 0; Tm < fm; Tm++) this._data.push(0)
        }
      }
      addUniform(mm, Tm) {
        let fm, hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (hm > 0 && "number" === typeof Tm && (this._uniformArraySizes[mm] = {
            strideSize: Tm,
            arraySize: hm
          }), void 0 === this._uniformLocations[mm] && (this._uniformNames.push(mm), !this._noUBO)) {
          if (hm > 0) {
            if (Tm instanceof Array) throw "addUniform should not be use with Array in UBO: " + mm;
            if (this._fillAlignment(4), 16 == Tm) Tm *= hm;
            else {
              Tm = Tm * hm + (4 - Tm) * hm
            }
            fm = [];
            for (let mm = 0; mm < Tm; mm++) fm.push(0)
          } else {
            if (Tm instanceof Array) fm = Tm, Tm = fm.length;
            else {
              fm = [];
              for (let mm = 0; mm < Tm; mm++) fm.push(0)
            }
            this._fillAlignment(Tm)
          }
          this._uniformSizes[mm] = Tm, this._uniformLocations[mm] = this._uniformLocationPointer, this._uniformLocationPointer += Tm;
          for (let mm = 0; mm < Tm; mm++) this._data.push(fm[mm]);
          this._needSync = !0
        }
      }
      addMatrix(mm, Tm) {
        this.addUniform(mm, Array.prototype.slice.call(Tm.ahm()))
      }
      addFloat2(mm, Tm, fm) {
        const hm = [Tm, fm];
        this.addUniform(mm, hm)
      }
      addFloat3(mm, Tm, fm, hm) {
        const Am = [Tm, fm, hm];
        this.addUniform(mm, Am)
      }
      addColor3(mm, Tm) {
        const fm = [Tm.r, Tm.g, Tm.b];
        this.addUniform(mm, fm)
      }
      addColor4(mm, Tm, fm) {
        const hm = [Tm.r, Tm.g, Tm.b, fm];
        this.addUniform(mm, hm)
      }
      addVector3(mm, Tm) {
        const fm = [Tm.x, Tm.y, Tm.z];
        this.addUniform(mm, fm)
      }
      addMatrix3x3(mm) {
        this.addUniform(mm, 12)
      }
      addMatrix2x2(mm) {
        this.addUniform(mm, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const mm = [];
        let Tm = 0;
        for (const fm in this._uniformLocations)
          if (mm.push(fm), 10 === ++Tm) break;
        return mm.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const mm of this._ownerListsBySlot.values()) this._removeOwnerBacklink(mm);
        this._ownerListsBySlot = new Map, this._slotByOwner = new WeakMap, this._slotFrameId = [], this._ownerCount = 0, this._freeSlots = [], this._slotGeneration = []
      }
      get _numBuffers() {
        return this._buffers.length
      }
      get _indexBuffer() {
        return this._bufferIndex
      }
      get name() {
        return this._name
      }
      set name(mm) {
        this._name = mm
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(mm, Tm) {
        for (let fm = 0; fm < mm.length; ++fm)
          if (mm[fm] !== Tm[fm]) return !1;
        return !0
      }
      _copyBuffer(mm, Tm) {
        for (let fm = 0; fm < mm.length; ++fm) Tm[fm] = mm[fm]
      }
      update() {
        if (!this._noUBO)
          if (this.bindUniformBuffer(), this._buffer)
            if (this._dynamic || this._needSync) {
              if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
                if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) return this._needSync = !1, void(this._createBufferOnWrite = this._trackUBOsInFrame);
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1])
              }
              this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData), this._needSync = !1, this._createBufferOnWrite = this._trackUBOsInFrame
            } else this._createBufferOnWrite = this._trackUBOsInFrame;
        else this.create()
      }
      _updateOwnerKeyed(mm) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let Tm = this._slotByOwner.get(mm);
        if (void 0 === Tm && (Tm = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(mm, Tm), this._ownerCount++, mm._uniformBuffersWithOwnedSlot || (mm._uniformBuffersWithOwnedSlot = []), mm._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(Tm, mm._uniformBuffersWithOwnedSlot)), this._slotGeneration[Tm] === this._dataGeneration) return this._bufferIndex = Tm, this._buffer = this._buffers[Tm][0], this.bindUniformBuffer(), this._slotFrameId[Tm] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const fm = this._buffers[Tm][1];
        this._slotFrameId[Tm] === this._currentFrameId && fm && !this._buffersEqual(this._bufferData, fm) && (Tm = this._takeFreeSlot(!1)), this._bufferIndex = Tm, this._buffer = this._buffers[Tm][0], this.bindUniformBuffer();
        const hm = this._buffers[Tm][1];
        hm && this._buffersEqual(this._bufferData, hm) || (hm && this._copyBuffer(this._bufferData, hm), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[Tm] = this._currentFrameId, this._slotGeneration[Tm] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(mm) {
        for (let fm = 0; fm < this._freeSlots.length; ++fm) {
          const Tm = this._freeSlots[fm];
          if (this._slotFrameId[Tm] !== this._currentFrameId) return mm && (this._freeSlots[fm] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), Tm
        }
        this._rebuild();
        const Tm = this._buffers.length - 1;
        return mm || this._freeSlots.push(Tm), Tm
      }
      _releaseOwnerSlot(mm) {
        const Tm = this._slotByOwner?.get(mm);
        if (void 0 === Tm) return;
        this._slotByOwner.delete(mm);
        const fm = this._ownerListsBySlot.get(Tm);
        fm && (this._removeOwnerBacklink(fm), this._ownerListsBySlot.delete(Tm)), this._ownerCount--, this._freeSlots.push(Tm)
      }
      _removeOwnerBacklink(mm) {
        const Tm = mm.indexOf(this); - 1 !== Tm && (mm[Tm] = mm[mm.length - 1], mm.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(mm, Tm, fm) {
        this._checkNewFrame();
        let Am = this._uniformLocations[mm];
        if (void 0 === Am) {
          if (this._buffer) return void hm.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + mm);
          this.addUniform(mm, fm), Am = this._uniformLocations[mm]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let mm = 0; mm < fm; mm++) this._bufferData[Am + mm] = Tm[mm];
          this._dataGeneration++
        } else {
          let mm = !1;
          for (let hm = 0; hm < fm; hm++)(16 === fm && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[Am + hm] !== Math.fround(Tm[hm])) && (mm = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[Am + hm] = Tm[hm]);
          this._needSync = this._needSync || mm, mm && this._dataGeneration++
        }
      }
      updateUniformArray(mm, Tm, fm) {
        this._checkNewFrame();
        const am = this._uniformLocations[mm];
        if (void 0 === am) return void hm.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const xm = this._uniformArraySizes[mm];
        if (this._dynamic) {
          for (let mm = 0; mm < fm; mm++) this._bufferData[am + mm] = Tm[mm];
          this._dataGeneration++
        } else {
          let mm = !1,
            hm = 0,
            wm = 0;
          for (let Dm = 0; Dm < fm; Dm++)
            if (this._bufferData[am + 4 * wm + hm] !== Am.h.FloatRound(Tm[Dm]) && (mm = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[am + 4 * wm + hm] = Tm[Dm]), hm++, hm === xm.strideSize) {
              for (; hm < 4; hm++) this._bufferData[am + 4 * wm + hm] = 0;
              hm = 0, wm++
            } this._needSync = this._needSync || mm, mm && this._dataGeneration++
        }
      }
      _cacheMatrix(mm, Tm) {
        this._checkNewFrame();
        const fm = this._valueCache[mm],
          hm = Tm.updateFlag;
        return (void 0 === fm || fm !== hm) && (this._valueCache[mm] = hm, !0)
      }
      _updateMatrix3x3ForUniform(mm, Tm) {
        for (let fm = 0; fm < 3; fm++) am._TempBuffer[4 * fm] = Tm[3 * fm], am._TempBuffer[4 * fm + 1] = Tm[3 * fm + 1], am._TempBuffer[4 * fm + 2] = Tm[3 * fm + 2], am._TempBuffer[4 * fm + 3] = 0;
        this.updateUniform(mm, am._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(mm, Tm) {
        this._currentEffect.setMatrix3x3(mm, Tm)
      }
      _updateMatrix2x2ForEffect(mm, Tm) {
        this._currentEffect.setMatrix2x2(mm, Tm)
      }
      _updateMatrix2x2ForUniform(mm, Tm) {
        for (let fm = 0; fm < 2; fm++) am._TempBuffer[4 * fm] = Tm[2 * fm], am._TempBuffer[4 * fm + 1] = Tm[2 * fm + 1], am._TempBuffer[4 * fm + 2] = 0, am._TempBuffer[4 * fm + 3] = 0;
        this.updateUniform(mm, am._TempBuffer, 8)
      }
      _updateFloatForEffect(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(mm + fm, Tm)
      }
      _updateFloatForUniform(mm, Tm) {
        am._TempBuffer[0] = Tm, this.updateUniform(mm, am._TempBuffer, 1)
      }
      _updateFloat2ForEffect(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(mm + hm, Tm, fm)
      }
      _updateFloat2ForUniform(mm, Tm, fm) {
        am._TempBuffer[0] = Tm, am._TempBuffer[1] = fm, this.updateUniform(mm, am._TempBuffer, 2)
      }
      _updateFloat3ForEffect(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(mm + Am, Tm, fm, hm)
      }
      _updateFloat3ForUniform(mm, Tm, fm, hm) {
        am._TempBuffer[0] = Tm, am._TempBuffer[1] = fm, am._TempBuffer[2] = hm, this.updateUniform(mm, am._TempBuffer, 3)
      }
      _updateFloat4ForEffect(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(mm + am, Tm, fm, hm, Am)
      }
      _updateFloat4ForUniform(mm, Tm, fm, hm, Am) {
        am._TempBuffer[0] = Tm, am._TempBuffer[1] = fm, am._TempBuffer[2] = hm, am._TempBuffer[3] = Am, this.updateUniform(mm, am._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[mm]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(mm + fm, Tm);
            break;
          case 3:
            this._currentEffect.setFloatArray3(mm + fm, Tm);
            break;
          case 4:
            this._currentEffect.setFloatArray4(mm + fm, Tm);
            break;
          default:
            this._currentEffect.setFloatArray(mm + fm, Tm)
        }
      }
      _updateFloatArrayForUniform(mm, Tm) {
        this.updateUniformArray(mm, Tm, Tm.length)
      }
      _updateArrayForEffect(mm, Tm) {
        this._currentEffect.setArray(mm, Tm)
      }
      _updateArrayForUniform(mm, Tm) {
        this.updateUniformArray(mm, Tm, Tm.length)
      }
      _updateIntArrayForEffect(mm, Tm) {
        this._currentEffect.setIntArray(mm, Tm)
      }
      _updateIntArrayForUniform(mm, Tm) {
        am._TempBufferInt32View.set(Tm), this.updateUniformArray(mm, am._TempBuffer, Tm.length)
      }
      _updateUIntArrayForEffect(mm, Tm) {
        this._currentEffect.setUIntArray(mm, Tm)
      }
      _updateUIntArrayForUniform(mm, Tm) {
        am._TempBufferUInt32View.set(Tm), this.updateUniformArray(mm, am._TempBuffer, Tm.length)
      }
      _updateMatrixForEffect(mm, Tm) {
        this._currentEffect.setMatrix(mm, Tm)
      }
      _updateMatrixForUniform(mm, Tm) {
        this._cacheMatrix(mm, Tm) && this.updateUniform(mm, Tm.ahm(), 16)
      }
      _updateMatricesForEffect(mm, Tm) {
        this._currentEffect.setMatrices(mm, Tm)
      }
      _updateMatricesForUniform(mm, Tm) {
        this.updateUniform(mm, Tm, Tm.length)
      }
      _updateVector3ForEffect(mm, Tm) {
        this._currentEffect.setVector3(mm, Tm)
      }
      _updateVector3ForUniform(mm, Tm) {
        am._TempBuffer[0] = Tm.x, am._TempBuffer[1] = Tm.y, am._TempBuffer[2] = Tm.z, this.updateUniform(mm, am._TempBuffer, 3)
      }
      _updateVector4ForEffect(mm, Tm) {
        this._currentEffect.setVector4(mm, Tm)
      }
      _updateVector4ForUniform(mm, Tm) {
        am._TempBuffer[0] = Tm.x, am._TempBuffer[1] = Tm.y, am._TempBuffer[2] = Tm.z, am._TempBuffer[3] = Tm.w, this.updateUniform(mm, am._TempBuffer, 4)
      }
      _updateColor3ForEffect(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(mm + fm, Tm)
      }
      _updateColor3ForUniform(mm, Tm) {
        am._TempBuffer[0] = Tm.r, am._TempBuffer[1] = Tm.g, am._TempBuffer[2] = Tm.b, this.updateUniform(mm, am._TempBuffer, 3)
      }
      _updateColor4ForEffect(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(mm + hm, Tm, fm)
      }
      _updateDirectColor4ForEffect(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(mm + fm, Tm)
      }
      _updateColor4ForUniform(mm, Tm, fm) {
        am._TempBuffer[0] = Tm.r, am._TempBuffer[1] = Tm.g, am._TempBuffer[2] = Tm.b, am._TempBuffer[3] = fm, this.updateUniform(mm, am._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(mm, Tm) {
        am._TempBuffer[0] = Tm.r, am._TempBuffer[1] = Tm.g, am._TempBuffer[2] = Tm.b, am._TempBuffer[3] = Tm.a, this.updateUniform(mm, am._TempBuffer, 4)
      }
      _updateIntForEffect(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(mm + fm, Tm)
      }
      _updateIntForUniform(mm, Tm) {
        am._TempBufferInt32View[0] = Tm, this.updateUniform(mm, am._TempBuffer, 1)
      }
      _updateInt2ForEffect(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(mm + hm, Tm, fm)
      }
      _updateInt2ForUniform(mm, Tm, fm) {
        am._TempBufferInt32View[0] = Tm, am._TempBufferInt32View[1] = fm, this.updateUniform(mm, am._TempBuffer, 2)
      }
      _updateInt3ForEffect(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(mm + Am, Tm, fm, hm)
      }
      _updateInt3ForUniform(mm, Tm, fm, hm) {
        am._TempBufferInt32View[0] = Tm, am._TempBufferInt32View[1] = fm, am._TempBufferInt32View[2] = hm, this.updateUniform(mm, am._TempBuffer, 3)
      }
      _updateInt4ForEffect(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(mm + am, Tm, fm, hm, Am)
      }
      _updateInt4ForUniform(mm, Tm, fm, hm, Am) {
        am._TempBufferInt32View[0] = Tm, am._TempBufferInt32View[1] = fm, am._TempBufferInt32View[2] = hm, am._TempBufferInt32View[3] = Am, this.updateUniform(mm, am._TempBuffer, 4)
      }
      _updateUIntForEffect(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(mm + fm, Tm)
      }
      _updateUIntForUniform(mm, Tm) {
        am._TempBufferUInt32View[0] = Tm, this.updateUniform(mm, am._TempBuffer, 1)
      }
      _updateUInt2ForEffect(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(mm + hm, Tm, fm)
      }
      _updateUInt2ForUniform(mm, Tm, fm) {
        am._TempBufferUInt32View[0] = Tm, am._TempBufferUInt32View[1] = fm, this.updateUniform(mm, am._TempBuffer, 2)
      }
      _updateUInt3ForEffect(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(mm + Am, Tm, fm, hm)
      }
      _updateUInt3ForUniform(mm, Tm, fm, hm) {
        am._TempBufferUInt32View[0] = Tm, am._TempBufferUInt32View[1] = fm, am._TempBufferUInt32View[2] = hm, this.updateUniform(mm, am._TempBuffer, 3)
      }
      _updateUInt4ForEffect(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(mm + am, Tm, fm, hm, Am)
      }
      _updateUInt4ForUniform(mm, Tm, fm, hm, Am) {
        am._TempBufferUInt32View[0] = Tm, am._TempBufferUInt32View[1] = fm, am._TempBufferUInt32View[2] = hm, am._TempBufferUInt32View[3] = Am, this.updateUniform(mm, am._TempBuffer, 4)
      }
      setTexture(mm, Tm) {
        this._currentEffect.setTexture(mm, Tm)
      }
      setTextureArray(mm, Tm) {
        this._currentEffect.setTextureArray(mm, Tm)
      }
      bindTexture(mm, Tm) {
        this._currentEffect._bindTexture(mm, Tm)
      }
      updateUniformDirectly(mm, Tm) {
        this.updateUniform(mm, Tm, Tm.length), this.update()
      }
      bindToEffect(mm, Tm) {
        this._currentEffect = mm, this._currentEffectName = Tm
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(mm) {
        if (!this._buffers) return this._buffer === mm;
        for (let Tm = 0; Tm < this._buffers.length; ++Tm) {
          if (this._buffers[Tm][0] === mm) return this._bufferIndex = Tm, this._buffer = mm, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[Tm][1] && (this._bufferData.set(this._buffers[Tm][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(mm) {
        return void 0 !== this._uniformLocations[mm]
      }
      dispose() {
        if (this._noUBO) return;
        const mm = this._engine._uniformBuffers,
          Tm = mm.indexOf(this);
        if (-1 !== Tm && (mm[Tm] = mm[mm.length - 1], mm.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let mm = 0; mm < this._buffers.length; ++mm) {
            const Tm = this._buffers[mm][0];
            this._engine._releaseBuffer(Tm)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    am._MAX_UNIFORM_SIZE = 256, am._TempBuffer = new Float32Array(am._MAX_UNIFORM_SIZE), am._TempBufferInt32View = new Int32Array(am._TempBuffer.buffer), am._TempBufferUInt32View = new Uint32Array(am._TempBuffer.buffer)
  },
  40036: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am
    });
    var hm = fm(40045);
    class Am extends hm.e {
      constructor(mm) {
        super(), this._buffer = mm
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40122: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Dm,
      f: () => im
    });
    const hm = "__bjs_serializable__",
      Am = new WeakMap;

    function am(mm, Tm) {
      return Object.prototype.hasOwnProperty.call(mm, Tm)
    }
    const xm = function() {
      let mm = Symbol.metadata;
      return mm || (mm = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: mm
      })), mm
    }();

    function wm(mm) {
      return "function" === typeof mm ? mm : mm?.constructor
    }

    function Dm(mm) {
      if (!mm) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(xm)}) polyfill must run before decorated classes are evaluated.`);
      return am(mm, hm) || (mm[hm] = {}), mm[hm]
    }

    function im(mm) {
      const Tm = wm(mm),
        fm = Tm ? Tm[xm] : void 0;
      if (!fm) return {};
      const Dm = Am.get(fm);
      if (Dm) return Dm;
      const im = {},
        Rm = [];
      let pm = fm;
      for (; pm;) Rm.push(pm), pm = Object.getPrototypeOf(pm);
      for (const Am of Rm)
        if (am(Am, hm)) {
          const mm = Am[hm];
          for (const Tm in mm) im[Tm] = mm[Tm]
        } return Am.set(fm, im), im
    }
  },
  40119: (mm, Tm, fm) => {
    fm.d(Tm, {
      A: () => wm,
      B: () => Rm,
      F: () => pm,
      J: () => xm,
      b: () => Im,
      c: () => am,
      g: () => Vm,
      j: () => om,
      k: () => Dm,
      o: () => Om,
      s: () => im,
      u: () => qm,
      v: () => Em,
      y: () => Ym
    });
    var hm = fm(40122);

    function Am(mm, Tm) {
      return (fm, Am) => {
        if (!Am.metadata) return;
        const am = String(Am.name),
          xm = (0, hm.e)(Am.metadata);
        xm[am] || (xm[am] = {
          type: mm,
          sourceName: Tm
        })
      }
    }

    function am(mm) {
      return function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (fm, hm) => {
          const Am = Tm || "_" + String(hm.name);
          return {
            init(mm) {
              return void 0 === mm && Am in this || (this[Am] = mm), mm
            },
            get() {
              return this[Am]
            },
            set(Tm) {
              "function" === typeof this[Am]?.equals && this[Am].equals(Tm) || this[Am] !== Tm && (this[Am] = Tm, this[mm]())
            }
          }
        }
      }(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function xm(mm) {
      return Am(0, mm)
    }

    function wm(mm) {
      return Am(1, mm)
    }

    function Dm(mm) {
      return Am(2, mm)
    }

    function im(mm) {
      return Am(3, mm)
    }

    function Rm(mm) {
      return Am(4, mm)
    }

    function pm(mm) {
      return Am(5, mm)
    }

    function Em(mm) {
      return Am(6, mm)
    }

    function om(mm) {
      return Am(7, mm)
    }

    function Om(mm) {
      return Am(8, mm)
    }

    function Ym(mm) {
      return Am(10, mm)
    }

    function qm(mm) {
      return Am(12, mm)
    }

    function jm(mm, Tm, fm) {
      const hm = String(Tm.name);
      let Am = null;
      const am = function() {
        if (null === Am) {
          Am = mm, "undefined" !== typeof _native && _native[hm] && (Am = fm(_native[hm], mm));
          const xm = this && (Tm.static ? this : Object.getPrototypeOf(this));
          xm?.[hm] === am && (xm[hm] = Am)
        }
        for (var xm = arguments.length, wm = new Array(xm), Dm = 0; Dm < xm; Dm++) wm[Dm] = arguments[Dm];
        return Am.apply(this, wm)
      };
      return am
    }

    function Vm(mm, Tm) {
      return jm(mm, Tm, (mm => mm))
    }

    function Im(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (fm, hm) => {
        const Am = Tm || "_" + String(hm.name);
        return {
          get() {
            return this[Am]?.value
          },
          set(Tm) {
            "function" === typeof this[Am]?.value?.equals && this[Am].value.equals(Tm) || this[Am].value !== Tm && (this[Am].value = Tm, this[mm]())
          }
        }
      }
    }
    Vm.filter = function(mm) {
      return (Tm, fm) => jm(Tm, fm, ((Tm, fm) => function() {
        for (var hm = arguments.length, Am = new Array(hm), am = 0; am < hm; am++) Am[am] = arguments[am];
        return mm(...Am) ? Tm(...Am) : fm.apply(this, Am)
      }))
    }
  },
  40129: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => im
    });
    var hm = fm(39993),
      Am = fm(40138),
      am = fm(37336),
      xm = fm(37185),
      wm = fm(40122);
    const Dm = function(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const am = mm();
      Am.e && Am.e.HasTags(Tm) && Am.e.AddTagsTo(am, Am.e.GetTags(Tm, !0));
      const xm = (0, wm.f)(am),
        Dm = {};
      for (const Am in xm) {
        const mm = xm[Am],
          wm = Tm[Am],
          Rm = mm.type;
        if (void 0 !== wm && null !== wm && ("uniqueId" !== Am || im.AllowLoadingUniqueId)) switch (Rm) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof wm.slice ? am[Am] = wm.slice() : am[Am] = wm;
            break;
          case 1:
            hm.cloneTexturesOnlyOnce && Dm[wm.uniqueId] ? am[Am] = Dm[wm.uniqueId] : (am[Am] = fm || wm.isRenderTarget ? wm : wm.clone(), Dm[wm.uniqueId] = am[Am]);
            break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
          case 13:
            am[Am] = fm ? wm : wm.clone()
        }
      }
      return am
    };
    class im {
      static AppendSerializedAnimations(mm, Tm) {
        if (mm.animations) {
          Tm.animations = [];
          for (let fm = 0; fm < mm.animations.length; fm++) {
            const hm = mm.animations[fm];
            Tm.animations.push(hm.serialize())
          }
        }
      }
      static Serialize(mm, Tm) {
        Tm || (Tm = {}), Am.e && (Tm.tags = Am.e.GetTags(mm));
        const fm = (0, wm.f)(mm);
        for (const hm in fm) {
          const Am = fm[hm],
            am = Am.sourceName || hm,
            xm = Am.type,
            wm = mm[hm];
          if (void 0 !== wm && null !== wm && ("uniqueId" !== hm || im.AllowLoadingUniqueId)) switch (xm) {
            case 0:
              Array.isArray(wm) ? Tm[am] = wm.slice() : Tm[am] = wm;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              Tm[am] = wm.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              Tm[am] = wm.ahm();
              break;
            case 6:
            case 11:
              Tm[am] = wm.id
          }
        }
        return Tm
      }
      static ParseProperties(mm, Tm, fm, hm) {
        hm || (hm = "");
        const Am = (0, wm.f)(Tm);
        for (const wm in Am) {
          const Dm = Am[wm],
            Rm = mm[Dm.sourceName || wm],
            pm = Dm.type;
          if (void 0 !== Rm && null !== Rm && ("uniqueId" !== wm || im.AllowLoadingUniqueId)) {
            const mm = Tm;
            switch (pm) {
              case 0:
                mm[wm] = Rm;
                break;
              case 1:
                fm && (mm[wm] = im._TextureParser(Rm, fm, hm));
                break;
              case 2:
                mm[wm] = am.b.FromArray(Rm);
                break;
              case 3:
                mm[wm] = im._FresnelParametersParser(Rm);
                break;
              case 4:
                mm[wm] = xm.l.FromArray(Rm);
                break;
              case 5:
                mm[wm] = xm.p.FromArray(Rm);
                break;
              case 6:
                fm && (mm[wm] = fm.getLastMeshById(Rm));
                break;
              case 7:
                mm[wm] = im._ColorCurvesParser(Rm);
                break;
              case 8:
                mm[wm] = am.c.FromArray(Rm);
                break;
              case 9:
                mm[wm] = im._ImageProcessingConfigurationParser(Rm);
                break;
              case 10:
                mm[wm] = xm.h.FromArray(Rm);
                break;
              case 11:
                fm && (mm[wm] = fm.getCameraById(Rm));
                break;
              case 12:
                mm[wm] = xm.e.FromArray(Rm);
                break;
              case 13:
                mm[wm] = xm.t.FromArray(Rm)
            }
          }
        }
      }
      static Parse(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const am = mm();
        return Am.e && Am.e.AddTagsTo(am, Tm.tags), im.ParseProperties(Tm, am, fm, hm), am
      }
      static Clone(mm, Tm) {
        return Dm(mm, Tm, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(mm, Tm) {
        return Dm(mm, Tm, !0)
      }
    }
    im.AllowLoadingUniqueId = !1, im._ImageProcessingConfigurationParser = mm => {
      throw (0, hm.i)("ImageProcessingConfiguration")
    }, im._FresnelParametersParser = mm => {
      throw (0, hm.i)("FresnelParameters")
    }, im._ColorCurvesParser = mm => {
      throw (0, hm.i)("ColorCurves")
    }, im._TextureParser = (mm, Tm, fm) => {
      throw (0, hm.i)("Texture")
    }
  },
  40068: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(40020);
    class Am {
      get min() {
        return this._min
      }
      get max() {
        return this._max
      }
      get average() {
        return this._average
      }
      get lastSecAverage() {
        return this._lastSecAverage
      }
      get current() {
        return this._current
      }
      get total() {
        return this._totalAccumulated
      }
      get count() {
        return this._totalValueCount
      }
      constructor() {
        this._startMonitoringTime = 0, this._min = 0, this._max = 0, this._hasResult = !1, this._hasCurrentValue = !1, this._average = 0, this._lastSecAverage = 0, this._current = 0, this._totalValueCount = 0, this._totalAccumulated = 0, this._lastSecAccumulated = 0, this._lastSecTime = 0, this._lastSecValueCount = 0
      }
      fetchNewFrame() {
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = Am.Enabled, this._lastSecValueCount++
      }
      addCount(mm, Tm) {
        Am.Enabled && (this._current += mm, this._hasCurrentValue = !0, Tm && this._fetchResult())
      }
      beginMonitoring() {
        Am.Enabled && (this._startMonitoringTime = hm.c.Now)
      }
      endMonitoring() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!Am.Enabled) return;
        mm && this.fetchNewFrame();
        const Tm = hm.c.Now;
        this._current = Tm - this._startMonitoringTime, this._hasCurrentValue = !0, mm && this._fetchResult()
      }
      HI() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const mm = hm.c.Now;
        mm - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = mm, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    Am.Enabled = !0
  },
  40220: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      f: () => hm
    });
    class hm {
      constructor(mm) {
        this.length = 0, this.data = new Array(mm), this._id = hm._GlobalId++
      }
      push(mm) {
        this.data[this.length++] = mm, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(mm) {
        for (let Tm = 0; Tm < this.length; Tm++) mm(this.data[Tm])
      }
      sort(mm) {
        this.data.sort(mm)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(mm) {
        if (0 !== mm.length) {
          this.length + mm.length > this.data.length && (this.data.length = 2 * (this.length + mm.length));
          for (let Tm = 0; Tm < mm.length; Tm++) this.data[this.length++] = (mm.data || mm)[Tm]
        }
      }
      indexOf(mm) {
        const Tm = this.data.indexOf(mm);
        return Tm >= this.length ? -1 : Tm
      }
      contains(mm) {
        return -1 !== this.indexOf(mm)
      }
    }
    hm._GlobalId = 0;
    class Am extends hm {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(mm) {
        super.push(mm), mm.__smartArrayFlags || (mm.__smartArrayFlags = {}), mm.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(mm) {
        return (!mm.__smartArrayFlags || mm.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(mm), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(mm) {
        if (0 !== mm.length) {
          this.length + mm.length > this.data.length && (this.data.length = 2 * (this.length + mm.length));
          for (let Tm = 0; Tm < mm.length; Tm++) {
            const fm = (mm.data || mm)[Tm];
            this.pushNoDuplicate(fm)
          }
        }
      }
    }
  },
  40138: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Am
    });
    class hm {
      static Eval(mm, Tm) {
        return "true" === (mm = mm.match(/\([^()]*\)/g) ? mm.replace(/\([^()]*\)/g, (mm => (mm = mm.slice(1, mm.length - 1), hm._HandleParenthesisContent(mm, Tm)))) : hm._HandleParenthesisContent(mm, Tm)) || "false" !== mm && hm.Eval(mm, Tm)
      }
      static _HandleParenthesisContent(mm, Tm) {
        let fm;
        Tm = Tm || (mm => "true" === mm);
        const Am = mm.split("||");
        for (const am in Am)
          if (Object.prototype.hasOwnProperty.call(Am, am)) {
            let mm = hm._SimplifyNegation(Am[am].trim());
            const xm = mm.split("&&");
            if (xm.length > 1)
              for (let Am = 0; Am < xm.length; ++Am) {
                const am = hm._SimplifyNegation(xm[Am].trim());
                if (fm = "true" !== am && "false" !== am ? "!" === am[0] ? !Tm(am.substring(1)) : Tm(am) : "true" === am, !fm) {
                  mm = "false";
                  break
                }
              }
            if (fm || "true" === mm) {
              fm = !0;
              break
            }
            fm = "true" !== mm && "false" !== mm ? "!" === mm[0] ? !Tm(mm.substring(1)) : Tm(mm) : "true" === mm
          } return fm ? "true" : "false"
      }
      static _SimplifyNegation(mm) {
        return "!true" === (mm = (mm = mm.replace(/^[\s!]+/, (mm => (mm = mm.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? mm = "false" : "!false" === mm && (mm = "true"), mm
      }
    }
    class Am {
      static EnableFor(mm) {
        mm._tags = mm._tags || {}, mm.hasTags = () => Am.HasTags(mm), mm.addTags = Tm => Am.AddTagsTo(mm, Tm), mm.removeTags = Tm => Am.RemoveTagsFrom(mm, Tm), mm.matchesTagsQuery = Tm => Am.MatchesQuery(mm, Tm)
      }
      static DisableFor(mm) {
        delete mm._tags, delete mm.hasTags, delete mm.addTags, delete mm.removeTags, delete mm.matchesTagsQuery
      }
      static HasTags(mm) {
        if (!mm._tags) return !1;
        const Tm = mm._tags;
        for (const fm in Tm)
          if (Object.prototype.hasOwnProperty.call(Tm, fm)) return !0;
        return !1
      }
      static GetTags(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!mm._tags) return null;
        if (Tm) {
          const Tm = [];
          for (const fm in mm._tags) Object.prototype.hasOwnProperty.call(mm._tags, fm) && !0 === mm._tags[fm] && Tm.push(fm);
          return Tm.join(" ")
        }
        return mm._tags
      }
      static AddTagsTo(mm, Tm) {
        if (!Tm) return;
        if ("string" !== typeof Tm) return;
        const fm = Tm.split(" ");
        for (const hm of fm) Am._AddTagTo(mm, hm)
      }
      static _AddTagTo(mm, Tm) {
        "" !== (Tm = Tm.trim()) && "true" !== Tm && "false" !== Tm && (Tm.match(/[\s]/) || Tm.match(/^([!]|([|]|[&]){2})/) || (Am.EnableFor(mm), mm._tags[Tm] = !0))
      }
      static RemoveTagsFrom(mm, Tm) {
        if (!Am.HasTags(mm)) return;
        const fm = Tm.split(" ");
        for (const hm in fm) Am._RemoveTagFrom(mm, fm[hm])
      }
      static _RemoveTagFrom(mm, Tm) {
        delete mm._tags[Tm]
      }
      static MatchesQuery(mm, Tm) {
        return void 0 === Tm || ("" === Tm ? Am.HasTags(mm) : hm.Eval(Tm, (Tm => Am.HasTags(mm) && mm._tags[Tm])))
      }
    }
  },
  40256: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(40251),
      Am = fm(37203);
    class am {
      constructor(mm) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new Am.c, this._scene = mm
      }
      _prepareBuffers() {
        if (this._vertexBuffers[hm.m.PositionKind]) return;
        const mm = [];
        mm.push(1, 1), mm.push(-1, 1), mm.push(-1, -1), mm.push(1, -1), this._vertexBuffers[hm.m.PositionKind] = new hm.m(this._scene.dO(), mm, hm.m.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const mm = [];
        mm.push(0), mm.push(1), mm.push(2), mm.push(0), mm.push(2), mm.push(3), this._indexBuffer = this._scene.dO().createIndexBuffer(mm)
      }
      _getActivePostProcesses(mm) {
        const Tm = this._activePostProcesses;
        Tm.length = 0;
        for (let fm = 0; fm < mm.length; fm++) {
          const hm = mm[fm];
          hm && Tm.push(hm)
        }
        return Tm
      }
      _rebuild() {
        const mm = this._vertexBuffers[hm.m.PositionKind];
        mm && (mm._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const fm = this._scene.activeCamera;
        return !!fm && (Tm = Tm || this._getActivePostProcesses(fm._postProcesses), !(!Tm || 0 === Tm.length || !this._scene.postProcessesEnabled) && (Tm[0].activate(fm, mm, null !== Tm && void 0 !== Tm), !0))
      }
      directRender(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          am = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : mm.length;
        const wm = this._scene.dO();
        for (let Dm = 0; Dm < xm; Dm++) {
          Dm < mm.length - 1 ? mm[Dm + 1].activate(this._scene.activeCamera || this._scene, Tm?.texture) : (Tm ? wm.bindFramebuffer(Tm, hm, void 0, void 0, fm, Am) : am || wm.restoreDefaultFramebuffer(), wm._debugInsertMarker?.(`post process ${mm[Dm].name} output`));
          const xm = mm[Dm],
            im = xm.apply();
          im && (xm.onBeforeRenderObservable.notifyObservers(im), this._prepareBuffers(), wm.bindBuffers(this._vertexBuffers, this._indexBuffer, im), wm.drawElementsType(0, 0, 6), xm.onAfterRenderObservable.notifyObservers(im))
        }
        wm.setDepthBuffer(!0), wm.setDepthWrite(!0)
      }
      _finalizeFrame(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const am = this._scene.activeCamera;
        if (!am) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (hm = hm || this._getActivePostProcesses(am._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const xm = this._scene.dO();
        for (let wm = 0, Dm = hm.length; wm < Dm; wm++) {
          const im = hm[wm];
          if (wm < Dm - 1 ? im._outputTexture = hm[wm + 1].activate(am, Tm?.texture) : (Tm ? (xm.bindFramebuffer(Tm, fm, void 0, void 0, Am), im._outputTexture = Tm) : (xm.restoreDefaultFramebuffer(), im._outputTexture = null), xm._debugInsertMarker?.(`post process ${hm[wm].name} output`)), mm) break;
          const Rm = im.apply();
          Rm && (im.onBeforeRenderObservable.notifyObservers(Rm), this._prepareBuffers(), xm.bindBuffers(this._vertexBuffers, this._indexBuffer, Rm), xm.drawElementsType(0, 0, 6), im.onAfterRenderObservable.notifyObservers(Rm))
        }
        xm.setDepthBuffer(!0), xm.setDepthWrite(!0), xm.setAlphaMode(0)
      }
      dispose() {
        const mm = this._vertexBuffers[hm.m.PositionKind];
        mm && (mm.dispose(), this._vertexBuffers[hm.m.PositionKind] = null), this._indexBuffer && (this._scene.dO()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40272: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => im
    });
    var hm = fm(40220),
      Am = fm(37185);
    const am = [],
      xm = [];
    let wm = !1;

    function Dm(mm, Tm) {
      for (; mm.length < Tm;) mm.push(void 0)
    }
    class im {
      set opaqueSortCompareFn(mm) {
        this._opaqueSortCompareFn = mm || im.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(mm) {
        this._alphaTestSortCompareFn = mm || im.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(mm) {
        this._transparentSortCompareFn = mm || im.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = mm, this._opaqueSubMeshes = new hm.f(256), this._transparentSubMeshes = new hm.f(256), this._alphaTestSubMeshes = new hm.f(256), this._depthOnlySubMeshes = new hm.f(256), this._particleSystems = new hm.f(256), this._spriteManagers = new hm.f(256), this._empty = !0, this._edgesRenderers = new hm.c(16), this.disableDepthPrePass = !1, this._scene = Tm, this.opaqueSortCompareFn = fm, this.alphaTestSortCompareFn = Am, this.transparentSortCompareFn = am
      }
      render(mm, Tm, fm, hm) {
        let Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          wm = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          Dm = arguments.length > 8 ? arguments[8] : void 0;
        if (mm) return void mm(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const im = this._scene.dO();
        Am && 0 !== this._depthOnlySubMeshes.length && (im.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), im.setColorWrite(!0)), am && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), xm && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const Rm = im.getStencilBuffer();
        if (im.setStencilBuffer(!1), Tm && this._renderSprites(), fm && this._renderParticles(hm), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), wm && (Dm || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (im.setStencilBuffer(Rm), Dm) Dm(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const mm = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            mm.length && this._renderTransparent(mm)
          } else this._renderTransparent(this._transparentSubMeshes);
          im.setAlphaMode(0)
        }
        if (im.setStencilBuffer(!1), am && this._edgesRenderers.length) {
          for (let mm = 0; mm < this._edgesRenderers.length; mm++) this._edgesRenderers.data[mm].render();
          im.setAlphaMode(0)
        }
        im.setStencilBuffer(Rm)
      }
      _renderOpaqueSorted(mm) {
        im._RenderSorted(mm, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(mm) {
        im._RenderSorted(mm, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(mm) {
        im._RenderSorted(mm, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(mm, Tm, fm, hm, am) {
        let Rm, pm = 0;
        const Em = fm ? fm.globalPosition : im._ZeroVector;
        if (hm && Tm !== im.PainterSortCompare)
          for (; pm < mm.length; pm++) Rm = mm.data[pm], Rm._alphaIndex = Rm.getMesh().alphaIndex, Rm._distanceToCamera = Am.p.Distance(Rm.DH().Shm.centerWorld, Em);
        const om = mm.length;
        let Om = mm.data;
        const Ym = om !== Om.length && !wm;
        if (Ym) {
          for (wm = !0, Dm(xm, om), pm = 0; pm < om; pm++) xm[pm] = Om[pm];
          Om = xm
        } else om !== Om.length && (Om = Om.slice(0, om));
        try {
          Tm && im._StableSort(Om, om, Tm), im._DrawSorted(Om, om, hm, am)
        } finally {
          Ym && (xm.fill(void 0, 0, om), wm = !1)
        }
      }
      static _DrawSorted(mm, Tm, fm, hm) {
        let Am;
        const am = mm[0].getMesh().wG();
        for (let xm = 0; xm < Tm; xm++) {
          if (Am = mm[xm], am._activeMeshesFrozenButKeepClipping && !Am.isInFrustum(am._frustumPlanes)) continue;
          let Tm = !1;
          if (fm) {
            const mm = Am.TY();
            if (mm && mm.needDepthPrePass && !hm) {
              Tm = !0;
              const fm = mm.wG().dO();
              fm.setColorWrite(!1), fm.setAlphaMode(0), Am.render(!1), fm.setColorWrite(!0)
            }
          }
          const wm = Am._renderingMesh;
          !Tm && wm._renderRunFollower(Am, fm) || Am.render(fm)
        }
      }
      static _StableSort(mm, Tm, fm) {
        for (let hm = 0; hm < Tm; hm += 16) {
          const Am = Math.min(hm + 16, Tm);
          for (let Tm = hm + 1; Tm < Am; Tm++) {
            const Am = mm[Tm];
            let am = hm,
              xm = Tm;
            for (; am < xm;) {
              const Tm = am + xm >>> 1;
              fm(Am, mm[Tm]) < 0 ? xm = Tm : am = Tm + 1
            }
            for (let fm = Tm; fm > am; fm--) mm[fm] = mm[fm - 1];
            mm[am] = Am
          }
        }
        if (!(Tm <= 16)) {
          Dm(am, Tm);
          try {
            let hm = mm,
              Am = am;
            for (let mm = 16; mm < Tm; mm *= 2) {
              for (let xm = 0; xm < Tm; xm += 2 * mm) {
                const am = Math.min(xm + mm, Tm),
                  wm = Math.min(xm + 2 * mm, Tm);
                let Dm = xm,
                  im = am,
                  Rm = xm;
                if (am < wm && fm(hm[am], hm[am - 1]) < 0)
                  for (; Dm < am && im < wm;) Am[Rm++] = fm(hm[im], hm[Dm]) < 0 ? hm[im++] : hm[Dm++];
                for (; Dm < am;) Am[Rm++] = hm[Dm++];
                for (; im < wm;) Am[Rm++] = hm[im++]
              }
              const am = Am;
              Am = hm, hm = am
            }
            if (hm !== mm)
              for (let fm = 0; fm < Tm; fm++) mm[fm] = hm[fm]
          } finally {
            am.fill(void 0, 0, Tm)
          }
        }
      }
      static defaultTransparentSortCompare(mm, Tm) {
        return mm._alphaIndex > Tm._alphaIndex ? 1 : mm._alphaIndex < Tm._alphaIndex ? -1 : im.backToFrontSortCompare(mm, Tm)
      }
      static backToFrontSortCompare(mm, Tm) {
        return mm._distanceToCamera < Tm._distanceToCamera ? 1 : mm._distanceToCamera > Tm._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(mm, Tm) {
        return mm._distanceToCamera < Tm._distanceToCamera ? -1 : mm._distanceToCamera > Tm._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(mm, Tm) {
        const fm = mm.getMesh(),
          hm = Tm.getMesh();
        return fm.material && hm.material ? fm.material.uniqueId - hm.material.uniqueId : fm.uniqueId - hm.uniqueId
      }
      prepare() {
        this._opaqueSubMeshes.reset(), this._transparentSubMeshes.reset(), this._alphaTestSubMeshes.reset(), this._depthOnlySubMeshes.reset(), this._particleSystems.reset(), this.prepareSprites(), this._edgesRenderers.reset(), this._empty = !0
      }
      prepareSprites() {
        this._spriteManagers.reset()
      }
      dispose() {
        this._opaqueSubMeshes.dispose(), this._transparentSubMeshes.dispose(), this._alphaTestSubMeshes.dispose(), this._depthOnlySubMeshes.dispose(), this._particleSystems.dispose(), this._spriteManagers.dispose(), this._edgesRenderers.dispose()
      }
      dispatch(mm, Tm, fm) {
        void 0 === Tm && (Tm = mm.getMesh()), void 0 === fm && (fm = mm.TY()), null !== fm && void 0 !== fm && (fm.needAlphaBlendingForMesh(Tm) ? this._transparentSubMeshes.push(mm) : fm.needAlphaTestingForMesh(Tm) ? (fm.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(mm), this._alphaTestSubMeshes.push(mm)) : (fm.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(mm), this._opaqueSubMeshes.push(mm)), Tm._renderingGroup = this, Tm._edgesRenderer && Tm.isEnabled() && Tm.isVisible && Tm._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(Tm._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(mm) {
        this._spriteManagers.push(mm), this._empty = !1
      }
      dispatchParticles(mm) {
        this._particleSystems.push(mm), this._empty = !1
      }
      _renderParticles(mm) {
        if (0 === this._particleSystems.length) return;
        const Tm = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let fm = 0; fm < this._particleSystems.length; fm++) {
          const hm = this._particleSystems.data[fm];
          if (0 === (Tm && Tm.layerMask & hm.layerMask)) continue;
          const Am = hm.emitter;
          Am.position && mm && -1 === mm.indexOf(Am) || this._scene._activeParticles.addCount(hm.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const mm = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let Tm = 0; Tm < this._spriteManagers.length; Tm++) {
          const fm = this._spriteManagers.data[Tm];
          0 !== (mm && mm.layerMask & fm.layerMask) && fm.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    im._ZeroVector = Am.p.Zero()
  },
  40264: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => am
    });
    var hm = fm(40272);
    class Am {}
    class am {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(mm) {
        this._disableDepthPrePass = mm;
        for (const Tm of this._renderingGroups) Tm.disableDepthPrePass = mm
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(mm) {
        mm !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = mm, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const mm of this._scene.meshes)
          if (mm.jK)
            for (const Tm of mm.jK) Tm._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const mm of this._scene.spriteManagers) mm._wasDispatched = !1;
        for (const mm of this._scene.VK) mm._wasDispatched = !1
      }
      constructor(mm) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new Am, this._maintainStateBetweenFrames = !1, this._scene = mm;
        for (let Tm = am.MIN_RENDERINGGROUPS; Tm < am.MAX_RENDERINGGROUPS; Tm++) this._autoClearDepthStencil[Tm] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(mm) {
        const Tm = mm || 0;
        return this._prepareRenderingGroup(Tm), this._renderingGroups[Tm]
      }
      _clearDepthStencilBuffer() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.dO().clear(null, !1, mm, Tm), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(mm, Tm, fm, hm) {
        let Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xm = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          wm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          Dm = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          im = arguments.length > 8 ? arguments[8] : void 0,
          Rm = arguments.length > 9 ? arguments[9] : void 0;
        const pm = this._renderingGroupInfo;
        pm.Aq = this._scene, pm.camera = this._scene.activeCamera, pm.renderingManager = this;
        const Em = Rm ?? this._scene.spriteManagers;
        if (Em && hm)
          for (let am = 0; am < Em.length; am++) {
            const mm = Em[am];
            this.dispatchSprites(mm)
          }
        for (let om = am.MIN_RENDERINGGROUPS; om < am.MAX_RENDERINGGROUPS; om++) {
          this._depthStencilBufferAlreadyCleaned = om === am.MIN_RENDERINGGROUPS;
          const Rm = this._renderingGroups[om];
          if (!Rm || Rm._empty) continue;
          const Em = 1 << om;
          if (pm.renderingGroupId = om, this._scene.onBeforeRenderingGroupObservable.notifyObservers(pm, Em), am.AUTOCLEAR) {
            const mm = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(om) : this._autoClearDepthStencil[om];
            mm && mm.autoClear && this._clearDepthStencilBuffer(mm.depth, mm.stencil)
          }
          for (let mm = 0, Tm = this._scene._beforeRenderingGroupDrawStage; mm < Tm.length; mm++) {
            Tm[mm].action(om)
          }
          Rm.render(mm, hm, fm, Tm, Am, xm, wm, Dm, im);
          for (let mm = 0, Tm = this._scene._afterRenderingGroupDrawStage; mm < Tm.length; mm++) {
            Tm[mm].action(om)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(pm, Em)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let mm = am.MIN_RENDERINGGROUPS; mm < am.MAX_RENDERINGGROUPS; mm++) {
            const Tm = this._renderingGroups[mm];
            Tm && Tm.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let mm = am.MIN_RENDERINGGROUPS; mm < am.MAX_RENDERINGGROUPS; mm++) {
            const Tm = this._renderingGroups[mm];
            Tm && Tm.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let mm = am.MIN_RENDERINGGROUPS; mm < am.MAX_RENDERINGGROUPS; mm++) {
          const Tm = this._renderingGroups[mm];
          Tm && Tm.dispose()
        }
      }
      _prepareRenderingGroup(mm) {
        void 0 === this._renderingGroups[mm] && (this._renderingGroups[mm] = new hm.e(mm, this._scene, this._customOpaqueSortCompareFn[mm], this._customAlphaTestSortCompareFn[mm], this._customTransparentSortCompareFn[mm]), this._renderingGroups[mm].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(mm) {
        this.maintainStateBetweenFrames && mm._wasDispatched || (mm._wasDispatched = !0, this.getRenderingGroup(mm.renderingGroupId).dispatchSprites(mm))
      }
      dispatchParticles(mm) {
        this.maintainStateBetweenFrames && mm._wasDispatched || (mm._wasDispatched = !0, this.getRenderingGroup(mm.renderingGroupId).dispatchParticles(mm))
      }
      dispatch(mm, Tm, fm) {
        void 0 === Tm && (Tm = mm.getMesh()), this.maintainStateBetweenFrames && mm._wasDispatched || (mm._wasDispatched = !0, this.getRenderingGroup(Tm.renderingGroupId).dispatch(mm, Tm, fm))
      }
      setRenderingOrder(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[mm] = Tm, this._customAlphaTestSortCompareFn[mm] = fm, this._customTransparentSortCompareFn[mm] = hm, this._renderingGroups[mm]) {
          const Tm = this._renderingGroups[mm];
          Tm.opaqueSortCompareFn = this._customOpaqueSortCompareFn[mm], Tm.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[mm], Tm.transparentSortCompareFn = this._customTransparentSortCompareFn[mm]
        }
      }
      setRenderingAutoClearDepthStencil(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[mm] = {
          autoClear: Tm,
          depth: fm,
          stencil: hm
        }
      }
      getAutoClearDepthStencilSetup(mm) {
        return this._autoClearDepthStencil[mm]
      }
    }
    am.MAX_RENDERINGGROUPS = 4, am.MIN_RENDERINGGROUPS = 0, am.AUTOCLEAR = !0
  },
  40024: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    class hm {
      constructor(mm) {
        this._supportBlendParametersPerTarget = mm, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(mm) {
        this.setAlphaBlend(mm)
      }
      setAlphaBlend(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[Tm] !== mm && (mm ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[Tm] = mm, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(mm, Tm, fm, hm) {
        this._blendConstants[0] === mm && this._blendConstants[1] === Tm && this._blendConstants[2] === fm && this._blendConstants[3] === hm || (this._blendConstants[0] = mm, this._blendConstants[1] = Tm, this._blendConstants[2] = fm, this._blendConstants[3] = hm, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(mm, Tm, fm, hm) {
        const Am = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[Am + 0] === mm && this._blendFunctionParameters[Am + 1] === Tm && this._blendFunctionParameters[Am + 2] === fm && this._blendFunctionParameters[Am + 3] === hm || (this._blendFunctionParameters[Am + 0] = mm, this._blendFunctionParameters[Am + 1] = Tm, this._blendFunctionParameters[Am + 2] = fm, this._blendFunctionParameters[Am + 3] = hm, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(mm, Tm) {
        const fm = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[fm + 0] === mm && this._blendEquationParameters[fm + 1] === Tm || (this._blendEquationParameters[fm + 0] = mm, this._blendEquationParameters[fm + 1] = Tm, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== Tm && (this._numTargets = Tm, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== fm && (this._blendDisabledTargetsMask = fm, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (mm.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === Tm || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (Tm > 1 && 0 !== fm && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & fm) ? mm.enable(mm.BLEND) : mm.disable(mm.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (mm.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (mm.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const hm = mm;
        if (this._isAlphaBlendDirty) {
          for (let Am = 0; Am < Tm; Am++) {
            const Tm = Am < this._numTargetEnabled ? Am : 0;
            this._alphaBlend[Tm] && 0 === (fm & 1 << Am) ? hm.enableIndexed(mm.BLEND, Am) : hm.disableIndexed(mm.BLEND, Am)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let mm = 0; mm < Tm; mm++) {
            const Tm = mm < this._numTargetEnabled ? 4 * mm : 0;
            hm.blendFuncSeparateIndexed(mm, this._blendFunctionParameters[Tm + 0], this._blendFunctionParameters[Tm + 1], this._blendFunctionParameters[Tm + 2], this._blendFunctionParameters[Tm + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let mm = 0; mm < Tm; mm++) {
            const Tm = mm < this._numTargetEnabled ? 2 * mm : 0;
            hm.blendEquationSeparateIndexed(mm, this._blendEquationParameters[Tm + 0], this._blendEquationParameters[Tm + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(mm, Tm) {
        let fm = 32774;
        switch (mm) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, Tm);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, Tm);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, Tm);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, Tm);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, Tm);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, Tm);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, Tm);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, Tm);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, Tm);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, Tm);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Tm);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, Tm);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, Tm);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, Tm);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, Tm);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, Tm);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Tm), fm = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, Tm), fm = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, Tm);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, Tm)
        }
        this.setAlphaEquationParameters(fm, fm, Tm)
      }
    }
  },
  40294: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    class hm {}
    hm._IsPickingAvailable = !1
  },
  40199: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Df,
      f: () => xf
    });
    var hm = fm(40203),
      Am = fm(40008),
      am = fm(40020),
      xm = fm(37203),
      wm = fm(40220);
    class Dm {
      constructor() {
        this._count = 0, this._data = {}
      }
      ZZ(mm) {
        this.clear(), mm.forEach(((mm, Tm) => this.add(mm, Tm)))
      }
      get(mm) {
        const Tm = this._data[mm];
        if (void 0 !== Tm) return Tm
      }
      getOrAddWithFactory(mm, Tm) {
        let fm = this.get(mm);
        return void 0 !== fm || (fm = Tm(mm), fm && this.add(mm, fm)), fm
      }
      getOrAdd(mm, Tm) {
        const fm = this.get(mm);
        return void 0 !== fm ? fm : (this.add(mm, Tm), Tm)
      }
      contains(mm) {
        return void 0 !== this._data[mm]
      }
      add(mm, Tm) {
        return void 0 === this._data[mm] && (this._data[mm] = Tm, ++this._count, !0)
      }
      set(mm, Tm) {
        return void 0 !== this._data[mm] && (this._data[mm] = Tm, !0)
      }
      getAndRemove(mm) {
        const Tm = this.get(mm);
        return void 0 !== Tm ? (delete this._data[mm], --this._count, Tm) : null
      }
      remove(mm) {
        return !!this.contains(mm) && (delete this._data[mm], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(mm) {
        for (const Tm in this._data) {
          mm(Tm, this._data[Tm])
        }
      }
      first(mm) {
        for (const Tm in this._data) {
          const fm = mm(Tm, this._data[Tm]);
          if (fm) return fm
        }
        return null
      }
    }
    var im = fm(40138),
      Rm = fm(37185),
      pm = fm(40226),
      Em = fm(40235),
      om = fm(40242);
    class Om {
      constructor(mm, Tm, fm, hm, Am, am) {
        this.source = mm, this.pointerX = Tm, this.pointerY = fm, this.meshUnderPointer = hm, this.sourceEvent = Am, this.additionalData = am
      }
      static CreateNew(mm, Tm, fm) {
        const hm = mm.wG();
        return new Om(mm, hm.pointerX, hm.pointerY, hm.meshUnderPointer || mm, Tm, fm)
      }
      static CreateNewFromSprite(mm, Tm, fm, hm) {
        return new Om(mm, Tm.pointerX, Tm.pointerY, Tm.meshUnderPointer, fm, hm)
      }
      static CreateNewFromScene(mm, Tm) {
        return new Om(null, mm.pointerX, mm.pointerY, mm.meshUnderPointer, Tm)
      }
      static CreateNewFromPrimitive(mm, Tm, fm, hm) {
        return new Om(mm, Tm.x, Tm.y, null, fm, hm)
      }
    }
    var Ym = fm(40256),
      qm = fm(40259),
      jm = fm(40264),
      Vm = fm(40274),
      Im = fm(39973),
      Km = fm(37201),
      Qm = fm(39993),
      nm = fm(40283);
    class Jm {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const mm in Jm.Triggers)
          if (Object.prototype.hasOwnProperty.call(Jm.Triggers, mm)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const mm in Jm.Triggers)
          if (Object.prototype.hasOwnProperty.call(Jm.Triggers, mm)) {
            const Tm = parseInt(mm);
            if (Tm >= 1 && Tm <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(mm) {
        for (const Tm in Jm.Triggers)
          if (Object.prototype.hasOwnProperty.call(Jm.Triggers, Tm)) {
            if (parseInt(Tm) === mm) return !0
          } return !1
      }
    }
    Jm.Triggers = {};
    var cm, zm, Zm, km, bm, Sm, em, Nm = fm(40287);
    ! function(mm) {
      mm[mm.Generic = 0] = "Generic", mm[mm.Keyboard = 1] = "Keyboard", mm[mm.Mouse = 2] = "Mouse", mm[mm.Touch = 3] = "Touch", mm[mm.DualShock = 4] = "DualShock", mm[mm.Xbox = 5] = "Xbox", mm[mm.Switch = 6] = "Switch", mm[mm.DualSense = 7] = "DualSense"
    }(cm || (cm = {})),
    function(mm) {
      mm[mm.Horizontal = 0] = "Horizontal", mm[mm.Vertical = 1] = "Vertical", mm[mm.LeftClick = 2] = "LeftClick", mm[mm.MiddleClick = 3] = "MiddleClick", mm[mm.RightClick = 4] = "RightClick", mm[mm.BrowserBack = 5] = "BrowserBack", mm[mm.BrowserForward = 6] = "BrowserForward", mm[mm.MouseWheelX = 7] = "MouseWheelX", mm[mm.MouseWheelY = 8] = "MouseWheelY", mm[mm.MouseWheelZ = 9] = "MouseWheelZ", mm[mm.Move = 12] = "Move"
    }(zm || (zm = {})),
    function(mm) {
      mm[mm.Horizontal = 0] = "Horizontal", mm[mm.Vertical = 1] = "Vertical", mm[mm.LeftClick = 2] = "LeftClick", mm[mm.MiddleClick = 3] = "MiddleClick", mm[mm.RightClick = 4] = "RightClick", mm[mm.BrowserBack = 5] = "BrowserBack", mm[mm.BrowserForward = 6] = "BrowserForward", mm[mm.MouseWheelX = 7] = "MouseWheelX", mm[mm.MouseWheelY = 8] = "MouseWheelY", mm[mm.MouseWheelZ = 9] = "MouseWheelZ", mm[mm.DeltaHorizontal = 10] = "DeltaHorizontal", mm[mm.DeltaVertical = 11] = "DeltaVertical"
    }(Zm || (Zm = {})),
    function(mm) {
      mm[mm.Cross = 0] = "Cross", mm[mm.Circle = 1] = "Circle", mm[mm.Square = 2] = "Square", mm[mm.Triangle = 3] = "Triangle", mm[mm.L1 = 4] = "L1", mm[mm.R1 = 5] = "R1", mm[mm.L2 = 6] = "L2", mm[mm.R2 = 7] = "R2", mm[mm.Share = 8] = "Share", mm[mm.Options = 9] = "Options", mm[mm.L3 = 10] = "L3", mm[mm.R3 = 11] = "R3", mm[mm.DPadUp = 12] = "DPadUp", mm[mm.DPadDown = 13] = "DPadDown", mm[mm.DPadLeft = 14] = "DPadLeft", mm[mm.DPadRight = 15] = "DPadRight", mm[mm.Home = 16] = "Home", mm[mm.TouchPad = 17] = "TouchPad", mm[mm.LStickXAxis = 18] = "LStickXAxis", mm[mm.LStickYAxis = 19] = "LStickYAxis", mm[mm.RStickXAxis = 20] = "RStickXAxis", mm[mm.RStickYAxis = 21] = "RStickYAxis"
    }(km || (km = {})),
    function(mm) {
      mm[mm.Cross = 0] = "Cross", mm[mm.Circle = 1] = "Circle", mm[mm.Square = 2] = "Square", mm[mm.Triangle = 3] = "Triangle", mm[mm.L1 = 4] = "L1", mm[mm.R1 = 5] = "R1", mm[mm.L2 = 6] = "L2", mm[mm.R2 = 7] = "R2", mm[mm.Create = 8] = "Create", mm[mm.Options = 9] = "Options", mm[mm.L3 = 10] = "L3", mm[mm.R3 = 11] = "R3", mm[mm.DPadUp = 12] = "DPadUp", mm[mm.DPadDown = 13] = "DPadDown", mm[mm.DPadLeft = 14] = "DPadLeft", mm[mm.DPadRight = 15] = "DPadRight", mm[mm.Home = 16] = "Home", mm[mm.TouchPad = 17] = "TouchPad", mm[mm.LStickXAxis = 18] = "LStickXAxis", mm[mm.LStickYAxis = 19] = "LStickYAxis", mm[mm.RStickXAxis = 20] = "RStickXAxis", mm[mm.RStickYAxis = 21] = "RStickYAxis"
    }(bm || (bm = {})),
    function(mm) {
      mm[mm.A = 0] = "A", mm[mm.B = 1] = "B", mm[mm.X = 2] = "X", mm[mm.Y = 3] = "Y", mm[mm.LB = 4] = "LB", mm[mm.RB = 5] = "RB", mm[mm.LT = 6] = "LT", mm[mm.RT = 7] = "RT", mm[mm.Back = 8] = "Back", mm[mm.Start = 9] = "Start", mm[mm.LS = 10] = "LS", mm[mm.RS = 11] = "RS", mm[mm.DPadUp = 12] = "DPadUp", mm[mm.DPadDown = 13] = "DPadDown", mm[mm.DPadLeft = 14] = "DPadLeft", mm[mm.DPadRight = 15] = "DPadRight", mm[mm.Home = 16] = "Home", mm[mm.LStickXAxis = 17] = "LStickXAxis", mm[mm.LStickYAxis = 18] = "LStickYAxis", mm[mm.RStickXAxis = 19] = "RStickXAxis", mm[mm.RStickYAxis = 20] = "RStickYAxis"
    }(Sm || (Sm = {})),
    function(mm) {
      mm[mm.B = 0] = "B", mm[mm.A = 1] = "A", mm[mm.Y = 2] = "Y", mm[mm.X = 3] = "X", mm[mm.L = 4] = "L", mm[mm.R = 5] = "R", mm[mm.ZL = 6] = "ZL", mm[mm.ZR = 7] = "ZR", mm[mm.Minus = 8] = "Minus", mm[mm.Plus = 9] = "Plus", mm[mm.LS = 10] = "LS", mm[mm.RS = 11] = "RS", mm[mm.DPadUp = 12] = "DPadUp", mm[mm.DPadDown = 13] = "DPadDown", mm[mm.DPadLeft = 14] = "DPadLeft", mm[mm.DPadRight = 15] = "DPadRight", mm[mm.Home = 16] = "Home", mm[mm.Capture = 17] = "Capture", mm[mm.LStickXAxis = 18] = "LStickXAxis", mm[mm.LStickYAxis = 19] = "LStickYAxis", mm[mm.RStickXAxis = 20] = "RStickXAxis", mm[mm.RStickYAxis = 21] = "RStickYAxis"
    }(em || (em = {}));
    var Gm = fm(40292);
    class Xm {
      static CreateDeviceEvent(mm, Tm, fm, hm, Am, am, xm) {
        switch (mm) {
          case cm.Keyboard:
            return this._CreateKeyboardEvent(fm, hm, Am, am);
          case cm.Mouse:
            if (fm === zm.MouseWheelX || fm === zm.MouseWheelY || fm === zm.MouseWheelZ) return this._CreateWheelEvent(mm, Tm, fm, hm, Am, am);
          case cm.Touch:
            return this._CreatePointerEvent(mm, Tm, fm, hm, Am, am, xm);
          default:
            throw `Unable to generate event for device ${cm[mm]}`
        }
      }
      static _CreatePointerEvent(mm, Tm, fm, hm, Am, am, xm) {
        const wm = this._CreateMouseEvent(mm, Tm, fm, hm, Am, am);
        mm === cm.Mouse ? (wm.deviceType = cm.Mouse, wm.pointerId = 1, wm.pointerType = "mouse") : (wm.deviceType = cm.Touch, wm.pointerId = xm ?? Tm, wm.pointerType = "touch");
        let Dm = 0;
        return Dm += Am.pollInput(mm, Tm, zm.LeftClick), Dm += 2 * Am.pollInput(mm, Tm, zm.RightClick), Dm += 4 * Am.pollInput(mm, Tm, zm.MiddleClick), wm.buttons = Dm, fm === zm.Move ? wm.type = "pointermove" : fm >= zm.LeftClick && fm <= zm.RightClick && (wm.type = 1 === hm ? "pointerdown" : "pointerup", wm.button = fm - 2), wm
      }
      static _CreateWheelEvent(mm, Tm, fm, hm, Am, am) {
        const xm = this._CreateMouseEvent(mm, Tm, fm, hm, Am, am);
        switch (xm.pointerId = 1, xm.type = "wheel", xm.deltaMode = Gm.c.DOM_DELTA_PIXEL, xm.deltaX = 0, xm.deltaY = 0, xm.deltaZ = 0, fm) {
          case zm.MouseWheelX:
            xm.deltaX = hm;
            break;
          case zm.MouseWheelY:
            xm.deltaY = hm;
            break;
          case zm.MouseWheelZ:
            xm.deltaZ = hm
        }
        return xm
      }
      static _CreateMouseEvent(mm, Tm, fm, hm, Am, am) {
        const xm = this._CreateEvent(am),
          wm = Am.pollInput(mm, Tm, zm.Horizontal),
          Dm = Am.pollInput(mm, Tm, zm.Vertical);
        return am ? (xm.movementX = 0, xm.movementY = 0, xm.offsetX = xm.movementX - am.getBoundingClientRect().x, xm.offsetY = xm.movementY - am.getBoundingClientRect().y) : (xm.movementX = Am.pollInput(mm, Tm, 10), xm.movementY = Am.pollInput(mm, Tm, 11), xm.offsetX = 0, xm.offsetY = 0), this._CheckNonCharacterKeys(xm, Am), xm.clientX = wm, xm.clientY = Dm, xm.x = wm, xm.y = Dm, xm.deviceType = mm, xm.deviceSlot = Tm, xm.inputIndex = fm, xm
      }
      static _CreateKeyboardEvent(mm, Tm, fm, hm) {
        const Am = this._CreateEvent(hm);
        return this._CheckNonCharacterKeys(Am, fm), Am.deviceType = cm.Keyboard, Am.deviceSlot = 0, Am.inputIndex = mm, Am.type = 1 === Tm ? "keydown" : "keyup", Am.key = String.fromCharCode(mm), Am.keyCode = mm, Am
      }
      static _CheckNonCharacterKeys(mm, Tm) {
        const fm = Tm.isDeviceAvailable(cm.Keyboard),
          hm = fm && 1 === Tm.pollInput(cm.Keyboard, 0, 18),
          Am = fm && 1 === Tm.pollInput(cm.Keyboard, 0, 17),
          am = fm && (1 === Tm.pollInput(cm.Keyboard, 0, 91) || 1 === Tm.pollInput(cm.Keyboard, 0, 92) || 1 === Tm.pollInput(cm.Keyboard, 0, 93)),
          xm = fm && 1 === Tm.pollInput(cm.Keyboard, 0, 16);
        mm.altKey = hm, mm.ctrlKey = Am, mm.metaKey = am, mm.shiftKey = xm
      }
      static _CreateEvent(mm) {
        const Tm = {
          preventDefault: () => {}
        };
        return Tm.target = mm, Tm
      }
    }
    class Pm {
      constructor(mm, Tm, fm) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(mm, Tm, ((mm, Tm, hm, Am) => {
          const am = Xm.CreateDeviceEvent(mm, Tm, hm, Am, this);
          fm(mm, Tm, am)
        })) : this._createDummyNativeInput()
      }
      pollInput(mm, Tm, fm) {
        return this._nativeInput.pollInput(mm, Tm, fm)
      }
      isDeviceAvailable(mm) {
        return mm === cm.Mouse || mm === cm.Touch
      }
      dispose() {
        this._nativeInput.dispose()
      }
      _createDummyNativeInput() {
        return {
          pollInput: () => 0,
          isDeviceAvailable: () => !1,
          dispose: () => {}
        }
      }
    }
    const Hm = Object.keys(zm).length / 2;
    class ym {
      constructor(mm, Tm, fm, Am) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = hm.h.IsSafari(), this._usingMacOs = (0, Im.l)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = mm => {}, this._keyboardUpEvent = mm => {}, this._keyboardBlurEvent = mm => {}, this._pointerMoveEvent = mm => {}, this._pointerDownEvent = mm => {}, this._pointerUpEvent = mm => {}, this._pointerCancelEvent = mm => {}, this._pointerCancelTouch = mm => {}, this._pointerLeaveEvent = mm => {}, this._pointerWheelEvent = mm => {}, this._pointerBlurEvent = mm => {}, this._pointerMacOsChromeOutEvent = mm => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, Im.l)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, Im.l)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = mm => {}, this._gamepadDisconnectedEvent = mm => {}, this._eventPrefix = hm.h.GetPointerPrefix(mm), this._engine = mm, this._onDeviceConnected = Tm, this._onDeviceDisconnected = fm, this._onInputChanged = Am, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(mm, Tm, fm) {
        const Am = this._inputs[mm][Tm];
        if (!Am) throw `Unable to find device ${cm[mm]}`;
        mm >= cm.DualShock && mm <= cm.DualSense && this._updateDevice(mm, Tm, fm);
        const am = Am[fm];
        if (void 0 === am) throw `Unable to find input ${fm} for device ${cm[mm]} in slot ${Tm}`;
        return fm === zm.Move && hm.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), am
      }
      isDeviceAvailable(mm) {
        return void 0 !== this._inputs[mm]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const mm = this?._engine.getInputElement();
        if (mm && (!this._eventsAttached || this._elementToAttachTo !== mm)) {
          if (this._disableEvents(), this._inputs)
            for (const mm of this._inputs)
              if (mm)
                for (const Tm in mm) {
                  const fm = mm[+Tm];
                  if (fm)
                    for (let mm = 0; mm < fm.length; mm++) fm[mm] = 0
                }
          this._elementToAttachTo = mm, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const mm = navigator.getGamepads();
          for (const Tm of mm) Tm && this._addGamePad(Tm)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(cm.Mouse, 0, 0, 0)
      }
      _addGamePad(mm) {
        const Tm = this._getGamepadDeviceType(mm.id),
          fm = mm.index;
        this._gamepads = this._gamepads || new Array(mm.index + 1), this._registerDevice(Tm, fm, mm.buttons.length + mm.axes.length), this._gamepads[fm] = Tm
      }
      _addPointerDevice(mm, Tm, fm, hm) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(mm, Tm, Hm);
        const Am = this._inputs[mm][Tm];
        Am[0] = fm, Am[1] = hm
      }
      _registerDevice(mm, Tm, fm) {
        if (void 0 === Tm) throw `Unable to register device ${cm[mm]} to undefined slot.`;
        if (this._inputs[mm] || (this._inputs[mm] = {}), !this._inputs[mm][Tm]) {
          const hm = new Array(fm);
          hm.fill(0), this._inputs[mm][Tm] = hm, this._onDeviceConnected(mm, Tm)
        }
      }
      _unregisterDevice(mm, Tm) {
        this._inputs[mm][Tm] && (delete this._inputs[mm][Tm], this._onDeviceDisconnected(mm, Tm))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = mm => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(cm.Keyboard, 0, 255));
          const Tm = this._inputs[cm.Keyboard][0];
          if (Tm) {
            Tm[mm.keyCode] = 1;
            const fm = mm;
            fm.inputIndex = mm.keyCode, this._usingMacOs && mm.metaKey && "Meta" !== mm.key && (this._metaKeys.includes(mm.keyCode) || this._metaKeys.push(mm.keyCode)), this._onInputChanged(cm.Keyboard, 0, fm)
          }
        }, this._keyboardUpEvent = mm => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(cm.Keyboard, 0, 255));
          const Tm = this._inputs[cm.Keyboard][0];
          if (Tm) {
            Tm[mm.keyCode] = 0;
            const fm = mm;
            if (fm.inputIndex = mm.keyCode, this._usingMacOs && "Meta" === mm.key && this._metaKeys.length > 0) {
              for (const mm of this._metaKeys) {
                const fm = Xm.CreateDeviceEvent(cm.Keyboard, 0, mm, 0, this, this._elementToAttachTo);
                Tm[mm] = 0, this._onInputChanged(cm.Keyboard, 0, fm)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(cm.Keyboard, 0, fm)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const mm = this._inputs[cm.Keyboard][0];
            for (let Tm = 0; Tm < mm.length; Tm++)
              if (0 !== mm[Tm]) {
                mm[Tm] = 0;
                const fm = Xm.CreateDeviceEvent(cm.Keyboard, 0, Tm, 0, this, this._elementToAttachTo);
                this._onInputChanged(cm.Keyboard, 0, fm)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, Im.l)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let hm = 0; hm < this._maxTouchPoints; hm++) this._activeTouchIds[hm] = -1;
        this._pointerMoveEvent = mm => {
          const Tm = this._getPointerType(mm);
          let fm = Tm === cm.Mouse ? 0 : this._activeTouchIds.indexOf(mm.pointerId);
          if (Tm === cm.Touch && -1 === fm) {
            if (0 === mm.buttons) return;
            const Am = this._activeTouchIds.indexOf(-1);
            if (!(Am >= 0)) return void hm.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            fm = Am, this._activeTouchIds[Am] = mm.pointerId, this._onDeviceConnected(Tm, fm)
          }
          this._inputs[Tm] || (this._inputs[Tm] = {}), this._inputs[Tm][fm] || this._addPointerDevice(Tm, fm, mm.clientX, mm.clientY);
          const Am = this._inputs[Tm][fm];
          if (Am) {
            const hm = mm;
            hm.inputIndex = zm.Move, Am[zm.Horizontal] = mm.clientX, Am[zm.Vertical] = mm.clientY, Tm === cm.Touch && 0 === Am[zm.LeftClick] && (Am[zm.LeftClick] = 1), void 0 === mm.pointerId && (mm.pointerId = this._mouseId), this._onInputChanged(Tm, fm, hm), this._usingSafari || -1 === mm.button || (hm.inputIndex = mm.button + 2, Am[mm.button + 2] = Am[mm.button + 2] ? 0 : 1, this._onInputChanged(Tm, fm, hm))
          }
        }, this._pointerDownEvent = mm => {
          const Tm = this._getPointerType(mm);
          let fm = Tm === cm.Mouse ? 0 : mm.pointerId;
          if (Tm === cm.Touch) {
            let Tm = this._activeTouchIds.indexOf(mm.pointerId);
            if (-1 === Tm && (Tm = this._activeTouchIds.indexOf(-1)), !(Tm >= 0)) return void hm.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            fm = Tm, this._activeTouchIds[Tm] = mm.pointerId
          }
          this._inputs[Tm] || (this._inputs[Tm] = {}), this._inputs[Tm][fm] ? Tm === cm.Touch && this._onDeviceConnected(Tm, fm) : this._addPointerDevice(Tm, fm, mm.clientX, mm.clientY);
          const Am = this._inputs[Tm][fm];
          if (Am) {
            const hm = Am[zm.Horizontal],
              xm = Am[zm.Vertical];
            if (Tm === cm.Mouse) {
              if (void 0 === mm.pointerId && (mm.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (am) {}
            } else if (mm.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(mm.pointerId)
            } catch (am) {}
            Am[zm.Horizontal] = mm.clientX, Am[zm.Vertical] = mm.clientY, Am[mm.button + 2] = 1;
            const wm = mm;
            wm.inputIndex = mm.button + 2, this._onInputChanged(Tm, fm, wm), hm === mm.clientX && xm === mm.clientY || (wm.inputIndex = zm.Move, this._onInputChanged(Tm, fm, wm))
          }
        }, this._pointerUpEvent = mm => {
          const Tm = this._getPointerType(mm),
            fm = Tm === cm.Mouse ? 0 : this._activeTouchIds.indexOf(mm.pointerId);
          if (Tm === cm.Touch) {
            if (-1 === fm) return;
            this._activeTouchIds[fm] = -1
          }
          const hm = this._inputs[Tm]?.[fm];
          let Am = mm.button,
            am = hm && 0 !== hm[Am + 2];
          if (!am && this._isUsingFirefox && this._usingMacOs && hm && (Am = 2 === Am ? 0 : 2, am = 0 !== hm[Am + 2]), am) {
            const am = hm[zm.Horizontal],
              xm = hm[zm.Vertical];
            hm[zm.Horizontal] = mm.clientX, hm[zm.Vertical] = mm.clientY, hm[Am + 2] = 0;
            const wm = mm;
            void 0 === mm.pointerId && (mm.pointerId = this._mouseId), am === mm.clientX && xm === mm.clientY || (wm.inputIndex = zm.Move, this._onInputChanged(Tm, fm, wm)), wm.inputIndex = Am + 2, Tm === cm.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : mm.pointerId && this._elementToAttachTo.hasPointerCapture?.(mm.pointerId) && this._elementToAttachTo.releasePointerCapture(mm.pointerId), this._onInputChanged(Tm, fm, wm), Tm === cm.Touch && this._onDeviceDisconnected(Tm, fm)
          }
        }, this._pointerCancelTouch = mm => {
          const Tm = this._activeTouchIds.indexOf(mm);
          if (-1 === Tm) return;
          this._elementToAttachTo.hasPointerCapture?.(mm) && this._elementToAttachTo.releasePointerCapture(mm), this._inputs[cm.Touch][Tm][zm.LeftClick] = 0;
          const fm = Xm.CreateDeviceEvent(cm.Touch, Tm, zm.LeftClick, 0, this, this._elementToAttachTo, mm);
          this._onInputChanged(cm.Touch, Tm, fm), this._activeTouchIds[Tm] = -1, this._onDeviceDisconnected(cm.Touch, Tm)
        }, this._pointerCancelEvent = mm => {
          if ("mouse" === mm.pointerType) {
            const mm = this._inputs[cm.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Tm = zm.LeftClick; Tm <= zm.BrowserForward; Tm++)
              if (1 === mm[Tm]) {
                mm[Tm] = 0;
                const fm = Xm.CreateDeviceEvent(cm.Mouse, 0, Tm, 0, this, this._elementToAttachTo);
                this._onInputChanged(cm.Mouse, 0, fm)
              }
          } else this._pointerCancelTouch(mm.pointerId)
        }, this._pointerLeaveEvent = mm => {
          "pen" === mm.pointerType && this._pointerCancelTouch(mm.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let mm = !1;
        const Tm = function() {};
        try {
          const fm = Object.defineProperty({}, "passive", {
            get: function() {
              mm = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", Tm, fm), this._elementToAttachTo.removeEventListener("test", Tm, fm)
        } catch (fm) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(cm.Mouse)) {
            const mm = this._inputs[cm.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let Tm = zm.LeftClick; Tm <= zm.BrowserForward; Tm++)
              if (1 === mm[Tm]) {
                mm[Tm] = 0;
                const fm = Xm.CreateDeviceEvent(cm.Mouse, 0, Tm, 0, this, this._elementToAttachTo);
                this._onInputChanged(cm.Mouse, 0, fm)
              }
          }
          if (this.isDeviceAvailable(cm.Touch)) {
            const mm = this._inputs[cm.Touch];
            for (let Tm = 0; Tm < this._activeTouchIds.length; Tm++) {
              const fm = this._activeTouchIds[Tm];
              if (this._elementToAttachTo.hasPointerCapture?.(fm) && this._elementToAttachTo.releasePointerCapture(fm), -1 !== fm && 1 === mm[Tm]?.[zm.LeftClick]) {
                mm[Tm][zm.LeftClick] = 0;
                const hm = Xm.CreateDeviceEvent(cm.Touch, Tm, zm.LeftClick, 0, this, this._elementToAttachTo, fm);
                this._onInputChanged(cm.Touch, Tm, hm), this._activeTouchIds[Tm] = -1, this._onDeviceDisconnected(cm.Touch, Tm)
              }
            }
          }
        }, this._pointerWheelEvent = mm => {
          const Tm = cm.Mouse;
          this._inputs[Tm] || (this._inputs[Tm] = []), this._inputs[Tm][0] || (this._pointerActive = !0, this._registerDevice(Tm, 0, Hm));
          const fm = this._inputs[Tm][0];
          if (fm) {
            fm[zm.MouseWheelX] = mm.deltaX || 0, fm[zm.MouseWheelY] = mm.deltaY || mm.wheelDelta || 0, fm[zm.MouseWheelZ] = mm.deltaZ || 0;
            const hm = mm;
            void 0 === mm.pointerId && (mm.pointerId = this._mouseId), 0 !== fm[zm.MouseWheelX] && (hm.inputIndex = zm.MouseWheelX, this._onInputChanged(Tm, 0, hm)), 0 !== fm[zm.MouseWheelY] && (hm.inputIndex = zm.MouseWheelY, this._onInputChanged(Tm, 0, hm)), 0 !== fm[zm.MouseWheelZ] && (hm.inputIndex = zm.MouseWheelZ, this._onInputChanged(Tm, 0, hm))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = mm => {
          mm.buttons > 1 && this._pointerCancelEvent(mm)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!mm && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(cm.Mouse)) {
            const mm = this._inputs[cm.Mouse][0];
            mm[zm.MouseWheelX] = 0, mm[zm.MouseWheelY] = 0, mm[zm.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = mm => {
          this._addGamePad(mm.gamepad)
        }, this._gamepadDisconnectedEvent = mm => {
          if (this._gamepads) {
            const Tm = this._getGamepadDeviceType(mm.gamepad.id),
              fm = mm.gamepad.index;
            this._unregisterDevice(Tm, fm), delete this._gamepads[fm]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(mm, Tm, fm) {
        const hm = navigator.getGamepads()[Tm];
        if (hm && mm === this._gamepads[Tm]) {
          const Am = this._inputs[mm][Tm];
          fm >= hm.buttons.length ? Am[fm] = hm.axes[fm - hm.buttons.length].valueOf() : Am[fm] = hm.buttons[fm].value
        }
      }
      _getGamepadDeviceType(mm) {
        return -1 !== mm.indexOf("054c") ? -1 !== mm.indexOf("0ce6") ? cm.DualSense : cm.DualShock : -1 !== mm.indexOf("Xbox One") || -1 !== mm.search("Xbox 360") || -1 !== mm.search("xinput") || -1 !== mm.indexOf("045e") && -1 === mm.indexOf("Surface Dock") ? cm.Xbox : -1 !== mm.indexOf("057e") ? cm.Switch : cm.Generic
      }
      _getPointerType(mm) {
        let Tm = cm.Mouse;
        return ("touch" === mm.pointerType || "pen" === mm.pointerType || mm.touches) && (Tm = cm.Touch), Tm
      }
    }
    class Cm {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = Tm, this.deviceSlot = fm, this.onInputChangedObservable = new xm.c, this._deviceInputSystem = mm
      }
      getInput(mm) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, mm)
      }
    }
    class rm {
      constructor(mm) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = mm => {
          for (let Tm = 0; Tm < this._devices.length; Tm++) {
            const fm = this._devices[Tm];
            for (const hm in fm) {
              const fm = +hm;
              mm._addDevice(new Cm(this._deviceInputSystem, Tm, fm))
            }
          }
          this._registeredManagers.push(mm)
        }, this.unregisterManager = mm => {
          const Tm = this._registeredManagers.indexOf(mm);
          Tm > -1 && this._registeredManagers.splice(Tm, 1)
        };
        const Tm = Object.keys(cm).length / 2;
        this._devices = new Array(Tm);
        const fm = (mm, Tm) => {
            this._devices[mm] || (this._devices[mm] = new Array), this._devices[mm][Tm] || (this._devices[mm][Tm] = Tm);
            for (const fm of this._registeredManagers) {
              const hm = new Cm(this._deviceInputSystem, mm, Tm);
              fm._addDevice(hm)
            }
          },
          hm = (mm, Tm) => {
            this._devices[mm]?.[Tm] && delete this._devices[mm][Tm];
            for (const fm of this._registeredManagers) fm._removeDevice(mm, Tm)
          },
          Am = (mm, Tm, fm) => {
            if (fm)
              for (const hm of this._registeredManagers) hm._onInputChanged(mm, Tm, fm)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new Pm(fm, hm, Am) : this._deviceInputSystem = new ym(mm, fm, hm, Am)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class sm {
      getDeviceSource(mm, Tm) {
        if (void 0 === Tm) {
          if (void 0 === this._firstDevice[mm]) return null;
          Tm = this._firstDevice[mm]
        }
        return this._devices[mm] && void 0 !== this._devices[mm][Tm] ? this._devices[mm][Tm] : null
      }
      getDeviceSources(mm) {
        return this._devices[mm] ? this._devices[mm].filter((mm => !!mm)) : []
      }
      constructor(mm) {
        const Tm = Object.keys(cm).length / 2;
        this._devices = new Array(Tm), this._firstDevice = new Array(Tm), this._engine = mm, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new rm(mm)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new xm.c((mm => {
          for (const Tm of this._devices)
            if (Tm)
              for (const fm of Tm) fm && this.onDeviceConnectedObservable.notifyObserver(mm, fm)
        })), this.onDeviceDisconnectedObservable = new xm.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = mm.iG.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.iG.remove(this._onDisposeObserver)
      }
      _addDevice(mm) {
        this._devices[mm.deviceType] || (this._devices[mm.deviceType] = []), this._devices[mm.deviceType][mm.deviceSlot] || (this._devices[mm.deviceType][mm.deviceSlot] = mm, this._updateFirstDevices(mm.deviceType)), this.onDeviceConnectedObservable.notifyObservers(mm)
      }
      _removeDevice(mm, Tm) {
        const fm = this._devices[mm]?.[Tm];
        this.onDeviceDisconnectedObservable.notifyObservers(fm), this._devices[mm]?.[Tm] && delete this._devices[mm][Tm], this._updateFirstDevices(mm)
      }
      _onInputChanged(mm, Tm, fm) {
        this._devices[mm]?.[Tm]?.onInputChangedObservable.notifyObservers(fm)
      }
      _updateFirstDevices(mm) {
        switch (mm) {
          case cm.Keyboard:
          case cm.Mouse:
            this._firstDevice[mm] = 0;
            break;
          case cm.Touch:
          case cm.DualSense:
          case cm.DualShock:
          case cm.Xbox:
          case cm.Switch:
          case cm.Generic: {
            delete this._firstDevice[mm];
            const Tm = this._devices[mm];
            if (Tm)
              for (let fm = 0; fm < Tm.length; fm++)
                if (Tm[fm]) {
                  this._firstDevice[mm] = fm;
                  break
                } break
          }
        }
      }
    }
    var lm = fm(40294);
    class Mm {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get IR() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(mm) {
        this._singleClick = mm
      }
      set IR(mm) {
        this._doubleClick = mm
      }
      set hasSwiped(mm) {
        this._hasSwiped = mm
      }
      set ignore(mm) {
        this._ignore = mm
      }
    }
    class um {
      constructor(mm) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new Rm.l(0, 0), this._previousStartingPointerPosition = new Rm.l(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = mm || Km.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(mm) {
        return this._meshUnderPointerId[mm] || null
      }
      get unTranslatedPointer() {
        return new Rm.l(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(mm) {
        this._pointerX = mm
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(mm) {
        this._pointerY = mm
      }
      _updatePointerPosition(mm) {
        const Tm = this._scene.dO().getInputElementClientRect();
        Tm && (this._pointerX = mm.clientX - Tm.left, this._pointerY = mm.clientY - Tm.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(mm, Tm) {
        const fm = this._scene,
          hm = fm.dO(),
          Am = hm.getInputElement();
        Am && (Am.tabIndex = hm.canvasTabIndex, fm.doNotHandleCursors || (Am.style.cursor = fm.defaultCursor)), this._setCursorAndPointerOverMesh(mm, Tm, fm);
        for (const wm of fm._pointerMoveStage) {
          mm = mm || this._pickMove(Tm);
          const fm = !!mm?.pickedMesh;
          mm = wm.action(this._unTranslatedPointerX, this._unTranslatedPointerY, mm, fm, Am)
        }
        const am = Tm.inputIndex >= zm.MouseWheelX && Tm.inputIndex <= zm.MouseWheelZ ? nm.c.POINTERWHEEL : nm.c.POINTERMOVE;
        let xm;
        fm.onPointerMove && (mm = mm || this._pickMove(Tm), fm.onPointerMove(Tm, mm, am)), mm ? (xm = new nm.f(am, Tm, mm), this._setRayOnPointerInfo(mm, Tm)) : (xm = new nm.f(am, Tm, null, this), this._movePointerInfo = xm), fm.onPointerObservable.hasObservers() && fm.onPointerObservable.notifyObservers(xm, am)
      }
      _setRayOnPointerInfo(mm, Tm) {
        const fm = this._scene;
        mm && lm.c._IsPickingAvailable && (mm.ray || (mm.ray = fm.createPickingRay(Tm.offsetX, Tm.offsetY, Rm.e.Identity(), fm.activeCamera)))
      }
      _addCameraPointerObserver(mm, Tm) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(mm, Tm)
      }
      _removeCameraPointerObserver(mm) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(mm)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(mm, Tm, fm) {
        const hm = this._scene,
          Am = new nm.e(fm, Tm, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return mm && (Am.originalPickingInfo = mm, Am.ray = mm.ray, "xr-near" === Tm.pointerType && mm.originMesh && (Am.nearInteractionPickingInfo = mm)), hm.onPrePointerObservable.notifyObservers(Am, fm), !!Am.skipOnPointerObservable
      }
      _pickMove(mm) {
        const Tm = this._scene,
          fm = Tm.Do(this._unTranslatedPointerX, this._unTranslatedPointerY, Tm.pointerMovePredicate, Tm.pointerMoveFastCheck, Tm.cameraToUseForPointers, Tm.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(fm, mm, Tm), fm
      }
      _updateMeshUnderPointer() {
        const mm = this._scene;
        if (!mm.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || mm.skipPointerMovePicking || !mm.cameraToUseForPointers && !mm.activeCamera) return;
        this._ensurePointerMovePredicate();
        const Tm = this._pointerX,
          fm = this._pointerY,
          hm = this._unTranslatedPointerX,
          Am = this._unTranslatedPointerY;
        for (const am of this._latestPointerMoveEvents.values()) this._pointerX = am.pointerX, this._pointerY = am.pointerY, this._unTranslatedPointerX = am.unTranslatedPointerX, this._unTranslatedPointerY = am.unTranslatedPointerY, this._pickMove(am.event);
        this._pointerX = Tm, this._pointerY = fm, this._unTranslatedPointerX = hm, this._unTranslatedPointerY = Am
      }
      _ensurePointerMovePredicate() {
        const mm = this._scene;
        mm.pointerMovePredicate || (mm.pointerMovePredicate = Tm => (Tm._isPointerMovePickable ?? Tm.xq) && Tm.isVisible && Tm.isReady() && Tm.isEnabled() && (Tm.enablePointerMoveEvents || mm.constantlyUpdateMeshUnderPointer || null !== Tm._getActionManagerForTrigger()) && (!mm.cameraToUseForPointers || 0 !== (mm.cameraToUseForPointers.layerMask & Tm.layerMask)))
      }
      _setCursorAndPointerOverMesh(mm, Tm, fm) {
        const hm = fm.dO().getInputElement();
        if (mm?.pickedMesh) {
          if (this.setPointerOverMesh(mm.pickedMesh, Tm.pointerId, mm, Tm), !fm.doNotHandleCursors && hm && this._pointerOverMesh) {
            const mm = this._pointerOverMesh._getActionManagerForTrigger();
            mm && mm.hasPointerTriggers && (hm.style.cursor = mm.hoverCursor || fm.hoverCursor)
          }
        } else this.setPointerOverMesh(null, Tm.pointerId, mm, Tm)
      }
      simulatePointerMove(mm, Tm) {
        const fm = new PointerEvent("pointermove", Tm);
        fm.inputIndex = zm.Move, this._checkPrePointerObservable(mm, fm, nm.c.POINTERMOVE) || this._processPointerMove(mm, fm)
      }
      simulatePointerDown(mm, Tm) {
        const fm = new PointerEvent("pointerdown", Tm);
        fm.inputIndex = fm.button + 2, this._checkPrePointerObservable(mm, fm, nm.c.POINTERDOWN) || this._processPointerDown(mm, fm)
      }
      _processPointerDown(mm, Tm) {
        const fm = this._scene;
        if (mm?.pickedMesh) {
          this._pickedDownMesh = mm.pickedMesh;
          const hm = mm.pickedMesh._getActionManagerForTrigger();
          if (hm) {
            if (hm.hasPickTriggers) switch (hm.processTrigger(5, new Om(mm.pickedMesh, fm.pointerX, fm.pointerY, mm.pickedMesh, Tm, mm)), Tm.button) {
              case 0:
                hm.processTrigger(2, new Om(mm.pickedMesh, fm.pointerX, fm.pointerY, mm.pickedMesh, Tm, mm));
                break;
              case 1:
                hm.processTrigger(4, new Om(mm.pickedMesh, fm.pointerX, fm.pointerY, mm.pickedMesh, Tm, mm));
                break;
              case 2:
                hm.processTrigger(3, new Om(mm.pickedMesh, fm.pointerX, fm.pointerY, mm.pickedMesh, Tm, mm))
            }
            hm.hasSpecificTrigger(8) && window.setTimeout((() => {
              const mm = fm.Do(this._unTranslatedPointerX, this._unTranslatedPointerY, (mm => mm.xq && mm.isVisible && mm.isReady() && mm.actionManager && mm.actionManager.hasSpecificTrigger(8) && mm === this._pickedDownMesh), !1, fm.cameraToUseForPointers);
              mm?.pickedMesh && hm && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > um.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, hm.processTrigger(8, Om.CreateNew(mm.pickedMesh, Tm)))
            }), um.LongPressDelay)
          }
        } else
          for (const am of fm._pointerDownStage) mm = am.action(this._unTranslatedPointerX, this._unTranslatedPointerY, mm, Tm, !1);
        let hm;
        const Am = nm.c.POINTERDOWN;
        mm ? (fm.onPointerDown && fm.onPointerDown(Tm, mm, Am), hm = new nm.f(Am, Tm, mm), this._setRayOnPointerInfo(mm, Tm)) : hm = new nm.f(Am, Tm, null, this), fm.onPointerObservable.hasObservers() && fm.onPointerObservable.notifyObservers(hm, Am)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(mm, Tm, fm) {
        const hm = new PointerEvent("pointerup", Tm);
        hm.inputIndex = zm.Move;
        const Am = new Mm;
        fm ? Am.IR = !0 : Am.singleClick = !0, this._checkPrePointerObservable(mm, hm, nm.c.POINTERUP) || this._processPointerUp(mm, hm, Am)
      }
      _processPointerUp(mm, Tm, fm) {
        const hm = this._scene;
        if (mm?.pickedMesh) {
          if (this._pickedUpMesh = mm.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (hm.onPointerPick && hm.onPointerPick(Tm, mm), fm.singleClick && !fm.ignore && hm.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const fm = nm.c.POINTERPICK,
              Am = new nm.f(fm, Tm, mm);
            this._setRayOnPointerInfo(mm, Tm), hm.onPointerObservable.notifyObservers(Am, fm)
          }
          const Am = mm.pickedMesh._getActionManagerForTrigger();
          if (Am && !fm.ignore) {
            Am.processTrigger(7, Om.CreateNew(mm.pickedMesh, Tm, mm)), !fm.hasSwiped && fm.singleClick && Am.processTrigger(1, Om.CreateNew(mm.pickedMesh, Tm, mm));
            const hm = mm.pickedMesh._getActionManagerForTrigger(6);
            fm.IR && hm && hm.processTrigger(6, Om.CreateNew(mm.pickedMesh, Tm, mm))
          }
        } else if (!fm.ignore)
          for (const Am of hm._pointerUpStage) mm = Am.action(this._unTranslatedPointerX, this._unTranslatedPointerY, mm, Tm, fm.IR);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const mm = this._pickedDownMesh._getActionManagerForTrigger(16);
          mm && mm.processTrigger(16, Om.CreateNew(this._pickedDownMesh, Tm))
        }
        if (!fm.ignore) {
          const Am = new nm.f(nm.c.POINTERUP, Tm, mm);
          if (this._setRayOnPointerInfo(mm, Tm), hm.onPointerObservable.notifyObservers(Am, nm.c.POINTERUP), hm.onPointerUp && hm.onPointerUp(Tm, mm, nm.c.POINTERUP), !fm.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let Am = 0;
            if (fm.singleClick ? Am = nm.c.POINTERTAP : fm.IR && (Am = nm.c.POINTERDOUBLETAP), Am) {
              const fm = new nm.f(Am, Tm, mm);
              hm.onPointerObservable.hasObservers() && hm.onPointerObservable.hasSpecificMask(Am) && hm.onPointerObservable.notifyObservers(fm, Am)
            }
          }
        }
      }
      isPointerCaptured() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[mm]
      }
      attachControl() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const Am = this._scene,
          am = Am.dO();
        hm || (hm = am.getInputElement()), this._alreadyAttached && this.detachControl(), hm && (this._alreadyAttachedTo = hm), this._deviceSourceManager = new sm(am), this._initActionManager = mm => {
          if (!this._meshPickProceed) {
            const Tm = Am.skipPointerUpPicking || 0 === Am._registeredActions && !this._checkForPicking() && !Am.onPointerUp ? null : Am.Do(this._unTranslatedPointerX, this._unTranslatedPointerY, Am.pointerUpPredicate, Am.pointerUpFastCheck, Am.cameraToUseForPointers, Am.pointerUpTrianglePredicate);
            this._currentPickResult = Tm, Tm && (mm = Tm.hit && Tm.pickedMesh ? Tm.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return mm
        }, this._delayedSimpleClick = (mm, Tm, fm) => {
          if ((Date.now() - this._previousStartingPointerTime > um.DoubleClickDelay && !this._doubleClickOccured || mm !== this._previousButtonPressed) && (this._doubleClickOccured = !1, Tm.singleClick = !0, Tm.ignore = !1, this._delayedClicks[mm])) {
            const Tm = this._delayedClicks[mm].evt,
              fm = nm.c.POINTERTAP,
              hm = new nm.f(fm, Tm, this._currentPickResult);
            Am.onPointerObservable.hasObservers() && Am.onPointerObservable.hasSpecificMask(fm) && Am.onPointerObservable.notifyObservers(hm, fm), this._delayedClicks[mm] = null
          }
        }, this._initClickEvent = (mm, Tm, fm, hm) => {
          const Am = new Mm;
          this._currentPickResult = null;
          let am = null,
            xm = mm.hasSpecificMask(nm.c.POINTERPICK) || Tm.hasSpecificMask(nm.c.POINTERPICK) || mm.hasSpecificMask(nm.c.POINTERTAP) || Tm.hasSpecificMask(nm.c.POINTERTAP) || mm.hasSpecificMask(nm.c.POINTERDOUBLETAP) || Tm.hasSpecificMask(nm.c.POINTERDOUBLETAP);
          !xm && Jm && (am = this._initActionManager(am, Am), am && (xm = am.hasPickTriggers));
          let wm = !1;
          if (xm = xm && !this._isMultiTouchGesture, xm) {
            const xm = fm.button;
            if (Am.hasSwiped = this._isPointerSwiping(), !Am.hasSwiped) {
              let Dm = !um.ExclusiveDoubleClickMode;
              if (Dm || (Dm = !mm.hasSpecificMask(nm.c.POINTERDOUBLETAP) && !Tm.hasSpecificMask(nm.c.POINTERDOUBLETAP), Dm && !Jm.HasSpecificTrigger(6) && (am = this._initActionManager(am, Am), am && (Dm = !am.hasSpecificTrigger(6)))), Dm)(Date.now() - this._previousStartingPointerTime > um.DoubleClickDelay || xm !== this._previousButtonPressed) && (Am.singleClick = !0, hm(Am, this._currentPickResult), wm = !0);
              else {
                const mm = {
                  evt: fm,
                  clickInfo: Am,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, xm, Am, hm), um.DoubleClickDelay)
                };
                this._delayedClicks[xm] = mm
              }
              let im = mm.hasSpecificMask(nm.c.POINTERDOUBLETAP) || Tm.hasSpecificMask(nm.c.POINTERDOUBLETAP);
              !im && Jm.HasSpecificTrigger(6) && (am = this._initActionManager(am, Am), am && (im = am.hasSpecificTrigger(6))), im && (xm === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < um.DoubleClickDelay && !this._doubleClickOccured ? (Am.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = xm, um.ExclusiveDoubleClickMode ? (this._delayedClicks[xm] && (clearTimeout(this._delayedClicks[xm]?.timeoutId), this._delayedClicks[xm] = null), hm(Am, this._previousPickResult)) : hm(Am, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, Am.IR = !0, Am.ignore = !1, um.ExclusiveDoubleClickMode && this._delayedClicks[xm] && (clearTimeout(this._delayedClicks[xm]?.timeoutId), this._delayedClicks[xm] = null), hm(Am, this._currentPickResult)), wm = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = xm))
            }
          }
          wm || hm(Am, this._currentPickResult)
        }, this._onPointerMove = mm => {
          if (this._updatePointerPosition(mm), this._latestPointerMoveEvents.set(mm.pointerId, {
              event: mm,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > um.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > um.DragMovementThreshold), am.isPointerLock && am._verifyPointerLock(), this._checkPrePointerObservable(null, mm, mm.inputIndex >= zm.MouseWheelX && mm.inputIndex <= zm.MouseWheelZ ? nm.c.POINTERWHEEL : nm.c.POINTERMOVE)) return;
          if (!Am.cameraToUseForPointers && !Am.activeCamera) return;
          if (Am.skipPointerMovePicking) return void this._processPointerMove(new om.e, mm);
          this._ensurePointerMovePredicate();
          const Tm = Am._registeredActions > 0 || Am.constantlyUpdateMeshUnderPointer ? this._pickMove(mm) : null;
          this._processPointerMove(Tm, mm)
        }, this._onPointerDown = mm => {
          const Tm = this._activePointerIds.indexOf(-1);
          if (-1 === Tm ? this._activePointerIds.push(mm.pointerId) : this._activePointerIds[Tm] = mm.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, um.ExclusiveDoubleClickMode)
            for (let hm = 0; hm < this._delayedClicks.length; hm++)
              if (this._delayedClicks[hm])
                if (mm.button === hm) clearTimeout(this._delayedClicks[hm]?.timeoutId);
                else {
                  const mm = this._delayedClicks[hm].clickInfo;
                  this._doubleClickOccured = !1, mm.singleClick = !0, mm.ignore = !1;
                  const Tm = this._delayedClicks[hm].evt,
                    fm = nm.c.POINTERTAP,
                    am = new nm.f(fm, Tm, this._currentPickResult);
                  Am.onPointerObservable.hasObservers() && Am.onPointerObservable.hasSpecificMask(fm) && Am.onPointerObservable.notifyObservers(am, fm), this._delayedClicks[hm] = null
                } if (this._updatePointerPosition(mm), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = mm.button), Am.preventDefaultOnPointerDown && hm && (mm.preventDefault(), hm.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, mm, nm.c.POINTERDOWN)) return;
          if (!Am.cameraToUseForPointers && !Am.activeCamera) return;
          let fm;
          this._pointerCaptures[mm.pointerId] = !0, Am.pointerDownPredicate || (Am.pointerDownPredicate = mm => mm.xq && mm.isVisible && mm.isReady() && mm.isEnabled() && (!Am.cameraToUseForPointers || 0 !== (Am.cameraToUseForPointers.layerMask & mm.layerMask))), this._pickedDownMesh = null, fm = Am.skipPointerDownPicking || 0 === Am._registeredActions && !this._checkForPicking() && !Am.onPointerDown ? new om.e : Am.Do(this._unTranslatedPointerX, this._unTranslatedPointerY, Am.pointerDownPredicate, Am.pointerDownFastCheck, Am.cameraToUseForPointers, Am.pointerDownTrianglePredicate), this._processPointerDown(fm, mm)
        }, this._onPointerUp = mm => {
          const Tm = this._activePointerIds.indexOf(mm.pointerId); - 1 !== Tm && (this._activePointerIds[Tm] = -1, this._activePointerIdsCount--, "touch" === mm.pointerType && this._latestPointerMoveEvents.delete(mm.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(mm), Am.preventDefaultOnPointerUp && hm && (mm.preventDefault(), hm.focus()), this._initClickEvent(Am.onPrePointerObservable, Am.onPointerObservable, mm, ((Tm, fm) => {
            if (Am.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !Tm.ignore)) {
              if (this._checkPrePointerObservable(null, mm, nm.c.POINTERUP)) return this._swipeButtonPressed === mm.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === mm.buttons && (this._pointerCaptures[mm.pointerId] = !1));
              Tm.hasSwiped || (Tm.singleClick && Am.onPrePointerObservable.hasSpecificMask(nm.c.POINTERTAP) && this._checkPrePointerObservable(null, mm, nm.c.POINTERTAP) && (this._skipPointerTap = !0), Tm.IR && Am.onPrePointerObservable.hasSpecificMask(nm.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, mm, nm.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[mm.pointerId] ? (0 === mm.buttons && (this._pointerCaptures[mm.pointerId] = !1), (Am.cameraToUseForPointers || Am.activeCamera) && (Am.pointerUpPredicate || (Am.pointerUpPredicate = mm => mm.xq && mm.isVisible && mm.isReady() && mm.isEnabled() && (!Am.cameraToUseForPointers || 0 !== (Am.cameraToUseForPointers.layerMask & mm.layerMask))), !this._meshPickProceed && (Jm && Jm.HasTriggers || this._checkForPicking() || Am.onPointerUp) && this._initActionManager(null, Tm), fm || (fm = this._currentPickResult), this._processPointerUp(fm, mm, Tm), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === mm.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === mm.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = mm => {
          const Tm = Nm.d.KEYDOWN;
          if (Am.onPreKeyboardObservable.hasObservers()) {
            const fm = new Nm.e(Tm, mm);
            if (Am.onPreKeyboardObservable.notifyObservers(fm, Tm), fm.skipOnKeyboardObservable) return
          }
          if (Am.onKeyboardObservable.hasObservers()) {
            const fm = new Nm.h(Tm, mm);
            Am.onKeyboardObservable.notifyObservers(fm, Tm)
          }
          Am.actionManager && Am.actionManager.processTrigger(14, Om.CreateNewFromScene(Am, mm))
        }, this._onKeyUp = mm => {
          const Tm = Nm.d.KEYUP;
          if (Am.onPreKeyboardObservable.hasObservers()) {
            const fm = new Nm.e(Tm, mm);
            if (Am.onPreKeyboardObservable.notifyObservers(fm, Tm), fm.skipOnKeyboardObservable) return
          }
          if (Am.onKeyboardObservable.hasObservers()) {
            const fm = new Nm.h(Tm, mm);
            Am.onKeyboardObservable.notifyObservers(fm, Tm)
          }
          Am.actionManager && Am.actionManager.processTrigger(15, Om.CreateNewFromScene(Am, mm))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((hm => {
          hm.deviceType === cm.Mouse ? hm.onInputChangedObservable.add((Am => {
            this._originMouseEvent = Am, Am.inputIndex === zm.LeftClick || Am.inputIndex === zm.MiddleClick || Am.inputIndex === zm.RightClick || Am.inputIndex === zm.BrowserBack || Am.inputIndex === zm.BrowserForward ? Tm && 1 === hm.getInput(Am.inputIndex) ? this._onPointerDown(Am) : mm && 0 === hm.getInput(Am.inputIndex) && this._onPointerUp(Am) : fm && (Am.inputIndex === zm.Move ? this._onPointerMove(Am) : Am.inputIndex !== zm.MouseWheelX && Am.inputIndex !== zm.MouseWheelY && Am.inputIndex !== zm.MouseWheelZ || this._onPointerMove(Am))
          })) : hm.deviceType === cm.Touch ? hm.onInputChangedObservable.add((Am => {
            Am.inputIndex === zm.LeftClick && (Tm && 1 === hm.getInput(Am.inputIndex) ? (this._onPointerDown(Am), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : mm && 0 === hm.getInput(Am.inputIndex) && (this._onPointerUp(Am), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), fm && Am.inputIndex === zm.Move && this._onPointerMove(Am)
          })) : hm.deviceType === cm.Keyboard && hm.onInputChangedObservable.add((mm => {
            "keydown" === mm.type ? this._onKeyDown(mm) : "keyup" === mm.type && this._onKeyUp(mm)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[Tm] === mm && (!mm || !mm._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const Am = this._meshUnderPointerId[Tm];
        let am;
        Am && (am = Am._getActionManagerForTrigger(10), am && am.processTrigger(10, new Om(Am, this._pointerX, this._pointerY, mm, hm, {
          pointerId: Tm
        }))), mm ? (this._meshUnderPointerId[Tm] = mm, this._pointerOverMesh = mm, am = mm._getActionManagerForTrigger(9), am && am.processTrigger(9, new Om(mm, this._pointerX, this._pointerY, mm, hm, {
          pointerId: Tm,
          pickResult: fm
        }))) : (delete this._meshUnderPointerId[Tm], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: mm,
          pointerId: Tm
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(mm) {
        this._pointerOverMesh === mm && (this._pointerOverMesh = null), this._pickedDownMesh === mm && (this._pickedDownMesh = null), this._pickedUpMesh === mm && (this._pickedUpMesh = null);
        for (const Tm in this._meshUnderPointerId) this._meshUnderPointerId[Tm] === mm && delete this._meshUnderPointerId[Tm]
      }
    }
    um.DragMovementThreshold = 10, um.LongPressDelay = 500, um.DoubleClickDelay = 300, um.ExclusiveDoubleClickMode = !1;
    var Bm = fm(40068),
      Lm = fm(37336),
      tm = fm(37813);
    class Um {
      static get UniqueId() {
        const mm = this._UniqueIdCounter;
        return this._UniqueIdCounter++, mm
      }
    }
    Um._UniqueIdCounter = 1;
    var dm = fm(40154),
      gm = fm(40303),
      Wm = fm(37197);
    class Fm {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var mT, TT, fT, hT, AT, aT, xT, wT, DT, iT, RT, pT, ET, oT, OT, YT, qT, jT, VT, IT, KT, QT, nT, JT, cT, zT, ZT, kT, bT, ST, eT, NT, GT, XT, PT, HT, yT, CT, rT, sT, lT, MT, uT, BT, LT, vT, tT, UT, dT, gT, WT, FT, mf, Tf = fm(38766),
      ff = fm(37224);
    const hf = new Rm.t,
      Af = new Rm.t;
    var af;
    ! function(mm) {
      mm[mm.BackwardCompatible = 0] = "BackwardCompatible", mm[mm.Intermediate = 1] = "Intermediate", mm[mm.Aggressive = 2] = "Aggressive"
    }(af || (af = {}));
    class xf {
      static DefaultMaterialFactory(mm) {
        throw (0, Qm.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, Qm.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(mm) {
        mm !== this._clearColor && (this._clearColor = mm, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(mm) {
        if (mm !== this._performancePriority) {
          switch (this._performancePriority = mm, mm) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(mm)
        }
      }
      set forceWireframe(mm) {
        this._forceWireframe !== mm && (this._forceWireframe = mm, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(mm) {
        this._skipFrustumClipping !== mm && (this._skipFrustumClipping = mm)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(mm) {
        this._forcePointsCloud !== mm && (this._forcePointsCloud = mm, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(mm) {
        this._environmentTexture !== mm && (this._environmentTexture = mm, this.onEnvironmentTextureChangedObservable.notifyObservers(mm), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let mm = [];
        mm = mm.concat(this.meshes), mm = mm.concat(this.lights), mm = mm.concat(this.cameras), mm = mm.concat(this.transformNodes);
        for (const Tm of this.skeletons) mm = mm.concat(Tm.bones);
        return mm
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(mm) {
        this._animationPropertiesOverride = mm
      }
      set onDispose(mm) {
        this._onDisposeObserver && this.iG.remove(this._onDisposeObserver), this._onDisposeObserver = this.iG.add(mm)
      }
      set beforeRender(mm) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), mm && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(mm))
      }
      set afterRender(mm) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), mm && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(mm))
      }
      set beforeCameraRender(mm) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(mm)
      }
      set afterCameraRender(mm) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(mm)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(mm) {
        this._pointerPickingConfiguration.pointerDownPredicate = mm
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(mm) {
        this._pointerPickingConfiguration.pointerUpPredicate = mm
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(mm) {
        this._pointerPickingConfiguration.pointerMovePredicate = mm
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(mm) {
        this._pointerPickingConfiguration.pointerDownFastCheck = mm
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(mm) {
        this._pointerPickingConfiguration.pointerUpFastCheck = mm
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(mm) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = mm
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(mm) {
        this._pointerPickingConfiguration.skipPointerMovePicking = mm
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(mm) {
        this._pointerPickingConfiguration.skipPointerDownPicking = mm
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(mm) {
        this._pointerPickingConfiguration.skipPointerUpPicking = mm
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return um.DragMovementThreshold
      }
      static set DragMovementThreshold(mm) {
        um.DragMovementThreshold = mm
      }
      static get LongPressDelay() {
        return um.LongPressDelay
      }
      static set LongPressDelay(mm) {
        um.LongPressDelay = mm
      }
      static get DoubleClickDelay() {
        return um.DoubleClickDelay
      }
      static set DoubleClickDelay(mm) {
        um.DoubleClickDelay = mm
      }
      static get ExclusiveDoubleClickMode() {
        return um.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(mm) {
        um.ExclusiveDoubleClickMode = mm
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? Rm.p.ZeroReadOnly
      }
      bindEyePosition(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const hm = this._eyePosition,
          Am = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          am = this.floatingOriginOffset,
          xm = hf.set(hm.x, hm.y, hm.z, Am ? -1 : 1),
          wm = xm.subtractFromFloatsToRef(am.x, am.y, am.z, 0, Af);
        return mm && (fm ? mm.setFloat3(Tm, wm.x, wm.y, wm.z) : mm.setVector4(Tm, wm)), xm
      }
      finalizeSceneUbo() {
        const mm = this.getSceneUniformBuffer(),
          Tm = this.bindEyePosition(null),
          fm = this.floatingOriginOffset;
        return mm.updateFloat4("vEyePosition", Tm.x - fm.x, Tm.y - fm.y, Tm.z - fm.z, Tm.w), mm.update(), mm
      }
      set useRightHandedSystem(mm) {
        this._useRightHandedSystem !== mm && (this._useRightHandedSystem = mm, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(mm) {
        this._currentStepId = mm
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(mm) {
        this._fogEnabled !== mm && (this._fogEnabled = mm, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(mm) {
        this._fogMode !== mm && (this._fogMode = mm, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(mm) {
        this._shadowsEnabled !== mm && (this._shadowsEnabled = mm, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(mm) {
        this._lightsEnabled !== mm && (this._lightsEnabled = mm, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(mm) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), mm && (this._unObserveActiveCameras = (0, Wm.h)(mm, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = mm
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(mm) {
        mm !== this._activeCamera && (this._activeCamera = mm, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return xf.DefaultMaterialFactory !== xf._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = xf.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(mm) {
        this._defaultMaterial = mm
      }
      set texturesEnabled(mm) {
        this._texturesEnabled !== mm && (this._texturesEnabled = mm, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(mm) {
        if (this._frameGraph) return this._frameGraph = mm, void(mm || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = mm, mm && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(mm) {
        this._skeletonsEnabled !== mm && (this._skeletonsEnabled = mm, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = xf.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const mm of this._transientComponents) mm.register();
          this._transientComponents.length = 0
        }
      }
      vfm(mm) {
        this._components.push(mm), this._transientComponents.push(mm);
        const Tm = mm;
        Tm.addFromContainer && Tm.serialize && this._serializableComponents.push(Tm)
      }
      _getComponent(mm) {
        for (const Tm of this._components)
          if (Tm.name === mm) return Tm;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(mm, Tm) {
        this._inputManager = new um(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new Lm.c(.2, .2, .3, 1), this.onClearColorChangedObservable = new xm.c, this.ambientColor = new Lm.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new xm.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.VK = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.iG = new xm.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new xm.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new xm.c, this.onAfterRenderCameraObservable = new xm.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new xm.c, this.onAfterAnimationsObservable = new xm.c, this.onBeforeDrawPhaseObservable = new xm.c, this.onAfterDrawPhaseObservable = new xm.c, this.onReadyObservable = new xm.c, this.onBeforeCameraRenderObservable = new xm.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new xm.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new xm.c, this.onAfterActiveMeshesEvaluationObservable = new xm.c, this.onBeforeParticlesRenderingObservable = new xm.c, this.onAfterParticlesRenderingObservable = new xm.c, this.onDataLoadedObservable = new xm.c, this.onNewCameraAddedObservable = new xm.c, this.onCameraRemovedObservable = new xm.c, this.onNewLightAddedObservable = new xm.c, this.onLightRemovedObservable = new xm.c, this.onNewGeometryAddedObservable = new xm.c, this.onGeometryRemovedObservable = new xm.c, this.onNewTransformNodeAddedObservable = new xm.c, this.onTransformNodeRemovedObservable = new xm.c, this.onNewMeshAddedObservable = new xm.c, this.onMeshRemovedObservable = new xm.c, this.onNewSkeletonAddedObservable = new xm.c, this.onSkeletonRemovedObservable = new xm.c, this.onNewParticleSystemAddedObservable = new xm.c, this.onParticleSystemRemovedObservable = new xm.c, this.onNewAnimationGroupAddedObservable = new xm.c, this.onAnimationGroupRemovedObservable = new xm.c, this.onNewMaterialAddedObservable = new xm.c, this.onNewMultiMaterialAddedObservable = new xm.c, this.onMaterialRemovedObservable = new xm.c, this.onMultiMaterialRemovedObservable = new xm.c, this.onNewTextureAddedObservable = new xm.c, this.onTextureRemovedObservable = new xm.c, this.onNewFrameGraphAddedObservable = new xm.c, this.onFrameGraphRemovedObservable = new xm.c, this.onNewObjectRendererAddedObservable = new xm.c, this.onObjectRendererRemovedObservable = new xm.c, this.onNewPostProcessAddedObservable = new xm.c, this.onPostProcessRemovedObservable = new xm.c, this.onNewEffectLayerAddedObservable = new xm.c, this.onEffectLayerRemovedObservable = new xm.c, this.onBeforeRenderTargetsRenderObservable = new xm.c, this.onAfterRenderTargetsRenderObservable = new xm.c, this.onBeforeStepObservable = new xm.c, this.onAfterStepObservable = new xm.c, this.onActiveCameraChanged = new xm.c, this.onActiveCamerasChanged = new xm.c, this.onBeforeRenderingGroupObservable = new xm.c, this.onAfterRenderingGroupObservable = new xm.c, this.onMeshImportedObservable = new xm.c, this.onAnimationFileImportedObservable = new xm.c, this.onEnvironmentTextureChangedObservable = new xm.c, this.onMeshUnderPointerUpdatedObservable = new xm.c, this._registeredForLateAnimationBindings = new wm.c(256), this._pointerPickingConfiguration = new Fm, this.onPrePointerObservable = new xm.c, this.onPointerObservable = new xm.c, this.onPreKeyboardObservable = new xm.c, this.onKeyboardObservable = new xm.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = xf.FOGMODE_NONE, this.fogColor = new Lm.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.YC = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new Rm.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new wm.c(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new Bm.d, this._activeIndices = new Bm.d, this._activeParticles = new Bm.d, this._activeBones = new Bm.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new wm.f(256), this._processedMaterials = new wm.f(256), this._renderTargets = new wm.c(256), this._materialsRenderTargets = new wm.c(256), this._activeParticleSystems = new wm.f(256), this._activeSkeletons = new wm.c(32), this._softwareSkinnedMeshes = new wm.c(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = Rm.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = Vm.g.Create(), this._beforeClearStage = Vm.g.Create(), this._beforeRenderTargetClearStage = Vm.g.Create(), this._gatherRenderTargetsStage = Vm.g.Create(), this._gatherActiveCameraRenderTargetsStage = Vm.g.Create(), this._isReadyForMeshStage = Vm.g.Create(), this._beforeEvaluateActiveMeshStage = Vm.g.Create(), this._evaluateSubMeshStage = Vm.g.Create(), this._preActiveMeshStage = Vm.g.Create(), this._cameraDrawRenderTargetStage = Vm.g.Create(), this._beforeCameraDrawStage = Vm.g.Create(), this._beforeRenderTargetDrawStage = Vm.g.Create(), this._beforeRenderingGroupDrawStage = Vm.g.Create(), this._beforeRenderingMeshStage = Vm.g.Create(), this._afterRenderingMeshStage = Vm.g.Create(), this._afterRenderingGroupDrawStage = Vm.g.Create(), this._afterCameraDrawStage = Vm.g.Create(), this._afterCameraPostProcessStage = Vm.g.Create(), this._afterRenderTargetDrawStage = Vm.g.Create(), this._afterRenderTargetPostProcessStage = Vm.g.Create(), this._afterRenderStage = Vm.g.Create(), this._pointerMoveStage = Vm.g.Create(), this._pointerDownStage = Vm.g.Create(), this._pointerUpStage = Vm.g.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new xm.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const fm = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...Tm
        };
        this.defaultCameraLayerMask = fm.defaultCameraLayerMask, this.defaultRenderableLayerMask = fm.defaultRenderableLayerMask, mm = this._engine = mm || Km.c.LastCreatedEngine, fm.virtual ? mm._virtualScenes.push(this) : (Km.c._LastCreatedScene = this, mm.scenes.push(this)), (mm.getCreationOptions().useLargeWorldRendering || Tm?.useFloatingOrigin) && ((0, qm.c)(), this._floatingOriginScene = this, qm.b.wG = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new jm.b(this), Ym.c && (this.postProcessManager = new Ym.c(this)), (0, Im.p)() && this.attachControl(), this._createUbo(), pm.c && (this._imageProcessingConfiguration = new pm.c), this.setDefaultCandidateProviders(), fm.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = fm.useMaterialMeshMap, this.useClonedMeshMap = fm.useClonedMeshMap, Tm && Tm.virtual || mm.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(mm) {
        return this._defaultSubMeshCandidates.data = mm.jK, this._defaultSubMeshCandidates.length = mm.jK.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = mm => this._getDefaultSubMeshCandidates(mm), this.getIntersectingSubMeshCandidates = (mm, Tm) => this._getDefaultSubMeshCandidates(mm), this.getCollidingSubMeshCandidates = (mm, Tm) => this._getDefaultSubMeshCandidates(mm)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(mm) {
        this._inputManager.pointerX = mm
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(mm) {
        this._inputManager.pointerY = mm
      }
      getCachedMaterial() {
        return this._cachedMaterial
      }
      getCachedEffect() {
        return this._cachedEffect
      }
      getCachedVisibility() {
        return this._cachedVisibility
      }
      isCachedMaterialInvalid(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== Tm || this._cachedMaterial !== mm || this._cachedVisibility !== fm
      }
      dO() {
        return this._engine
      }
      getTotalVertices() {
        return this._totalVertices.current
      }
      get totalVerticesPerfCounter() {
        return this._totalVertices
      }
      getActiveIndices() {
        return this._activeIndices.current
      }
      get totalActiveIndicesPerfCounter() {
        return this._activeIndices
      }
      getActiveParticles() {
        return this._activeParticles.current
      }
      get activeParticlesPerfCounter() {
        return this._activeParticles
      }
      getActiveBones() {
        return this._activeBones.current
      }
      get activeBonesPerfCounter() {
        return this._activeBones
      }
      getActiveMeshes() {
        return this._activeMeshes
      }
      getAnimationRatio() {
        return void 0 !== this._animationRatio ? this._animationRatio : 1
      }
      getRenderId() {
        return this._renderId
      }
      getFrameId() {
        return this._frameId
      }
      incrementRenderId() {
        this._renderId++
      }
      _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer())
      }
      simulatePointerMove(mm, Tm) {
        return this._inputManager.simulatePointerMove(mm, Tm), this
      }
      simulatePointerDown(mm, Tm) {
        return this._inputManager.simulatePointerDown(mm, Tm), this
      }
      simulatePointerUp(mm, Tm, fm) {
        return this._inputManager.simulatePointerUp(mm, Tm, fm), this
      }
      isPointerCaptured() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(mm)
      }
      attachControl() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(mm, Tm, fm)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let mm, Tm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const fm = this.dO(),
          hm = fm.currentRenderPassId;
        fm.currentRenderPassId = this.activeCamera?.renderPassId ?? hm;
        let Am = !0;
        for (this._pendingData.length > 0 && (Am = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && Am && (Am = this.depthPeelingRenderer.isReady()), Tm && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), mm = 0; mm < this.meshes.length; mm++) {
          const hm = this.meshes[mm];
          if (!hm.jK || 0 === hm.jK.length) continue;
          if (!hm.isReady(!0)) {
            Am = !1;
            continue
          }
          const am = hm.hasThinInstances || "InstancedMesh" === hm.getClassName() || "InstancedLinesMesh" === hm.getClassName() || fm.getCaps().instancedArrays && hm.instances.length > 0;
          for (let mm = 0, Tm = this._isReadyForMeshStage; mm < Tm.length; mm++) {
            Tm[mm].action(hm, am) || (Am = !1)
          }
          if (!Tm) continue;
          const xm = hm.material || this.defaultMaterial;
          if (xm)
            if (xm._storeEffectOnSubMeshes)
              for (const mm of hm.jK) {
                const Tm = mm.TY();
                Tm && Tm.hasRenderTargetTextures && null != Tm.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(Tm) && (this._processedMaterials.push(Tm), this._materialsRenderTargets.concatWithNoDuplicate(Tm.getRenderTargetTextures()))
              } else xm.hasRenderTargetTextures && null != xm.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(xm) && (this._processedMaterials.push(xm), this._materialsRenderTargets.concatWithNoDuplicate(xm.getRenderTargetTextures()))
        }
        if (Tm) {
          for (mm = 0; mm < this._materialsRenderTargets.length; ++mm) {
            this._materialsRenderTargets.data[mm].isReadyForRendering() || (Am = !1)
          }
          for (mm = 0; mm < this.customRenderTargets.length; ++mm) {
            this.customRenderTargets[mm].isReadyForRendering() || (Am = !1)
          }
        }
        for (mm = 0; mm < this.geometries.length; mm++) {
          2 === this.geometries[mm].delayLoadState && (Am = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const am of this.activeCameras) am.isReady(!0) || (Am = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (Am = !1));
        for (const am of this.VK) am.isReady() || (Am = !1);
        if (this.proceduralTexturesEnabled)
          for (const am of this.proceduralTextures) am.isReady() || (Am = !1);
        if (this.layers)
          for (const am of this.layers) am.isReady() || (Am = !1);
        if (this.effectLayers)
          for (const am of this.effectLayers) am.isLayerReady() || (Am = !1);
        for (const am of this._isReadyChecks) am.isReady() || (Am = !1);
        return fm.areAllEffectsReady() || (Am = !1), fm.currentRenderPassId = hm, Am
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(mm) {
        this.onBeforeRenderObservable.add(mm)
      }
      unregisterBeforeRender(mm) {
        this.onBeforeRenderObservable.removeCallback(mm)
      }
      registerAfterRender(mm) {
        this.onAfterRenderObservable.add(mm)
      }
      unregisterAfterRender(mm) {
        this.onAfterRenderObservable.removeCallback(mm)
      }
      _executeOnceBeforeRender(mm) {
        const Tm = () => {
          mm(), setTimeout((() => {
            this.unregisterBeforeRender(Tm)
          }))
        };
        this.registerBeforeRender(Tm)
      }
      executeOnceBeforeRender(mm, Tm) {
        void 0 !== Tm ? setTimeout((() => {
          this._executeOnceBeforeRender(mm)
        }), Tm) : this._executeOnceBeforeRender(mm)
      }
      addPendingData(mm) {
        this._pendingData.push(mm)
      }
      removePendingData(mm) {
        const Tm = this.isLoading,
          fm = this._pendingData.indexOf(mm); - 1 !== fm && this._pendingData.splice(fm, 1), Tm && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(mm) {
        -1 === this._isReadyChecks.indexOf(mm) && this._isReadyChecks.push(mm)
      }
      removeIsReadyCheck(mm) {
        const Tm = this._isReadyChecks.indexOf(mm); - 1 !== Tm && this._isReadyChecks.splice(Tm, 1)
      }
      executeWhenReady(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(mm), null === this._executeWhenReadyTimeoutId && this._checkIsReady(Tm)
      }
      async whenReadyAsync() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((Tm => {
          this.executeWhenReady((() => {
            Tm()
          }), mm)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = am.c.Now;
        else if (this.onReadyTimeoutDuration > 0 && am.c.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(mm)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(mm)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = am.c.Now
      }
      getViewMatrix() {
        return this._viewMatrix
      }
      getProjectionMatrix() {
        return this._projectionMatrix
      }
      getInverseProjectionMatrix() {
        return this._inverseProjectionMatrix
      }
      getTransformMatrix() {
        return this._transformMatrix
      }
      setTransformMatrix(mm, Tm, fm, hm) {
        this._multiviewSceneUboIsActive = !!(fm && hm && this._multiviewSceneUbo), this._viewUpdateFlag === mm.updateFlag && this._projectionUpdateFlag === Tm.updateFlag || (this._viewUpdateFlag = mm.updateFlag, this._projectionUpdateFlag = Tm.updateFlag, this._viewMatrix = mm, this._projectionMatrix = Tm, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new Rm.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? tm.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = tm.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(fm, hm) : this._sceneUbo.useUbo && (this._sceneUbo.K9("viewProjection", this._transformMatrix), this._sceneUbo.K9("view", this._viewMatrix), this._sceneUbo.K9("projection", this._projectionMatrix), this._sceneUbo.K9("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(mm, Tm) {
        const fm = "boolean" === typeof Tm ? Tm : Tm?.trackUBOsInFrame,
          hm = new Em.e(this._engine, void 0, !1, mm ?? "Aq", void 0, fm);
        return hm.addUniform("viewProjection", 16), hm.addUniform("view", 16), hm.addUniform("projection", 16), hm.addUniform("vEyePosition", 4), hm.addUniform("inverseProjection", 16), hm
      }
      setSceneUniformBuffer(mm) {
        this._sceneUbo = mm, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : Rm.p.ZeroReadOnly
      }
      getUniqueId() {
        return Um.UniqueId
      }
      whm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(mm), mm._resyncLightSources(), mm.parent || mm._addToSceneRootNodes(), Am.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(mm)
          })), Tm)) {
          const Tm = mm.getChildMeshes();
          for (const mm of Tm) this.whm(mm)
        }
      }
      yG(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const fm = this.meshes.indexOf(mm);
        if (-1 !== fm && (this.meshes.splice(fm, 1), mm.parent || mm._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(mm), this.onMeshRemovedObservable.notifyObservers(mm), Tm) {
          const Tm = mm.getChildMeshes();
          for (const mm of Tm) this.yG(mm)
        }
        return fm
      }
      addTransformNode(mm) {
        this._blockEntityCollection || mm.wG() === this && -1 !== mm._indexInSceneTransformNodesArray || (mm._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(mm), mm.parent || mm._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(mm))
      }
      removeTransformNode(mm) {
        const Tm = mm._indexInSceneTransformNodesArray;
        if (-1 !== Tm) {
          if (Tm !== this.transformNodes.length - 1) {
            const mm = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[Tm] = mm, mm._indexInSceneTransformNodesArray = Tm
          }
          mm._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), mm.parent || mm._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(mm), Tm
      }
      removeSkeleton(mm) {
        const Tm = this.skeletons.indexOf(mm);
        return -1 !== Tm && (this.skeletons.splice(Tm, 1), this.onSkeletonRemovedObservable.notifyObservers(mm), this._executeActiveContainerCleanup(this._activeSkeletons)), Tm
      }
      removeMorphTargetManager(mm) {
        const Tm = this.morphTargetManagers.indexOf(mm);
        return -1 !== Tm && this.morphTargetManagers.splice(Tm, 1), Tm
      }
      removeLight(mm) {
        const Tm = this.lights.indexOf(mm);
        if (-1 !== Tm) {
          for (const Tm of this.meshes) Tm._removeLightSource(mm, !1);
          this.lights.splice(Tm, 1), this.sortLightsByPriority(), mm.parent || mm._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(mm)
        }
        return Tm
      }
      removeCamera(mm) {
        const Tm = this.cameras.indexOf(mm);
        if (-1 !== Tm && (this.cameras.splice(Tm, 1), mm.parent || mm._removeFromSceneRootNodes()), this.activeCameras) {
          const Tm = this.activeCameras.indexOf(mm); - 1 !== Tm && this.activeCameras.splice(Tm, 1)
        }
        return this.activeCamera === mm && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(mm), Tm
      }
      removeParticleSystem(mm) {
        const Tm = this.VK.indexOf(mm);
        return -1 !== Tm && (this.VK.splice(Tm, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(mm), Tm
      }
      removeAnimation(mm) {
        const Tm = this.animations.indexOf(mm);
        return -1 !== Tm && this.animations.splice(Tm, 1), Tm
      }
      stopAnimation(mm, Tm, fm) {}
      removeAnimationGroup(mm) {
        const Tm = this.animationGroups.indexOf(mm);
        return -1 !== Tm && this.animationGroups.splice(Tm, 1), this.onAnimationGroupRemovedObservable.notifyObservers(mm), Tm
      }
      removeMultiMaterial(mm) {
        const Tm = this.multiMaterials.indexOf(mm);
        return -1 !== Tm && this.multiMaterials.splice(Tm, 1), this.onMultiMaterialRemovedObservable.notifyObservers(mm), Tm
      }
      removeMaterial(mm) {
        const Tm = mm._indexInSceneMaterialArray;
        if (-1 !== Tm && Tm < this.materials.length) {
          if (Tm !== this.materials.length - 1) {
            const mm = this.materials[this.materials.length - 1];
            this.materials[Tm] = mm, mm._indexInSceneMaterialArray = Tm
          }
          mm._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(mm), Tm
      }
      removeActionManager(mm) {
        const Tm = this.actionManagers.indexOf(mm);
        return -1 !== Tm && this.actionManagers.splice(Tm, 1), Tm
      }
      removeTexture(mm) {
        const Tm = this.textures.indexOf(mm);
        return -1 !== Tm && this.textures.splice(Tm, 1), this.onTextureRemovedObservable.notifyObservers(mm), Tm
      }
      removeFrameGraph(mm) {
        const Tm = this.frameGraphs.indexOf(mm);
        return -1 !== Tm && this.frameGraphs.splice(Tm, 1), this.onFrameGraphRemovedObservable.notifyObservers(mm), Tm
      }
      removeObjectRenderer(mm) {
        const Tm = this.objectRenderers.indexOf(mm);
        return -1 !== Tm && this.objectRenderers.splice(Tm, 1), this.onObjectRendererRemovedObservable.notifyObservers(mm), Tm
      }
      removePostProcess(mm) {
        const Tm = this.postProcesses.indexOf(mm);
        return -1 !== Tm && this.postProcesses.splice(Tm, 1), this.onPostProcessRemovedObservable.notifyObservers(mm), Tm
      }
      removeEffectLayer(mm) {
        const Tm = this.effectLayers.indexOf(mm);
        return -1 !== Tm && this.effectLayers.splice(Tm, 1), this.onEffectLayerRemovedObservable.notifyObservers(mm), Tm
      }
      addLight(mm) {
        if (!this._blockEntityCollection) {
          this.lights.push(mm), this.sortLightsByPriority(), mm.parent || mm._addToSceneRootNodes();
          for (const Tm of this.meshes) - 1 === Tm.lightSources.indexOf(mm) && (Tm.lightSources.push(mm), Tm._resyncLightSources());
          Am.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(mm)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(gm.e.CompareLightsPriority)
      }
      addCamera(mm) {
        this._blockEntityCollection || (this.cameras.push(mm), Am.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(mm)
        })), mm.parent || mm._addToSceneRootNodes())
      }
      addSkeleton(mm) {
        this._blockEntityCollection || (this.skeletons.push(mm), Am.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(mm)
        })))
      }
      addParticleSystem(mm) {
        this._blockEntityCollection || (this.VK.push(mm), Am.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(mm)
        })))
      }
      addAnimation(mm) {
        this._blockEntityCollection || this.animations.push(mm)
      }
      addAnimationGroup(mm) {
        this._blockEntityCollection || (this.animationGroups.push(mm), Am.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(mm)
        })))
      }
      addMultiMaterial(mm) {
        this._blockEntityCollection || (this.multiMaterials.push(mm), Am.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(mm)
        })))
      }
      addMaterial(mm) {
        this._blockEntityCollection || mm.wG() === this && -1 !== mm._indexInSceneMaterialArray || (mm._indexInSceneMaterialArray = this.materials.length, this.materials.push(mm), Am.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(mm)
        })))
      }
      addMorphTargetManager(mm) {
        this._blockEntityCollection || this.morphTargetManagers.push(mm)
      }
      addGeometry(mm) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[mm.uniqueId] = this.geometries.length), this.geometries.push(mm))
      }
      addActionManager(mm) {
        this.actionManagers.push(mm)
      }
      addTexture(mm) {
        this._blockEntityCollection || (this.textures.push(mm), this.onNewTextureAddedObservable.notifyObservers(mm))
      }
      addFrameGraph(mm) {
        this.frameGraphs.push(mm), Am.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(mm)
        }))
      }
      addObjectRenderer(mm) {
        this.objectRenderers.push(mm), Am.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(mm)
        }))
      }
      addPostProcess(mm) {
        this._blockEntityCollection || (this.postProcesses.push(mm), Am.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(mm)
        })))
      }
      addEffectLayer(mm) {
        this._blockEntityCollection || (this.effectLayers.push(mm), Am.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(mm)
        })))
      }
      switchActiveCamera(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = mm, Tm && mm.attachControl())
      }
      setActiveCameraById(mm) {
        const Tm = this.getCameraById(mm);
        return Tm ? (this.activeCamera = Tm, Tm) : null
      }
      setActiveCameraByName(mm) {
        const Tm = this.getCameraByName(mm);
        return Tm ? (this.activeCamera = Tm, Tm) : null
      }
      getAnimationGroupByName(mm) {
        for (let Tm = 0; Tm < this.animationGroups.length; Tm++)
          if (this.animationGroups[Tm].name === mm) return this.animationGroups[Tm];
        return null
      }
      _getMaterial(mm, Tm) {
        for (let fm = 0; fm < this.materials.length; fm++) {
          const mm = this.materials[fm];
          if (Tm(mm)) return mm
        }
        if (mm)
          for (let fm = 0; fm < this.multiMaterials.length; fm++) {
            const mm = this.multiMaterials[fm];
            if (Tm(mm)) return mm
          }
        return null
      }
      getMaterialByUniqueID(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(mm, Tm)
      }
      getMaterialByUniqueId(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Tm, (Tm => Tm.uniqueId === mm))
      }
      getMaterialById(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Tm, (Tm => Tm.id === mm))
      }
      getMaterialByName(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(Tm, (Tm => Tm.name === mm))
      }
      getLastMaterialById(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let fm = this.materials.length - 1; fm >= 0; fm--)
          if (this.materials[fm].id === mm) return this.materials[fm];
        if (Tm)
          for (let fm = this.multiMaterials.length - 1; fm >= 0; fm--)
            if (this.multiMaterials[fm].id === mm) return this.multiMaterials[fm];
        return null
      }
      getTextureByUniqueId(mm) {
        for (let Tm = 0; Tm < this.textures.length; Tm++)
          if (this.textures[Tm].uniqueId === mm) return this.textures[Tm];
        return null
      }
      getTextureByName(mm) {
        for (let Tm = 0; Tm < this.textures.length; Tm++)
          if (this.textures[Tm].name === mm) return this.textures[Tm];
        return null
      }
      getCameraById(mm) {
        for (let Tm = 0; Tm < this.cameras.length; Tm++)
          if (this.cameras[Tm].id === mm) return this.cameras[Tm];
        return null
      }
      getCameraByUniqueId(mm) {
        for (let Tm = 0; Tm < this.cameras.length; Tm++)
          if (this.cameras[Tm].uniqueId === mm) return this.cameras[Tm];
        return null
      }
      getCameraByName(mm) {
        for (let Tm = 0; Tm < this.cameras.length; Tm++)
          if (this.cameras[Tm].name === mm) return this.cameras[Tm];
        return null
      }
      getBoneById(mm) {
        for (let Tm = 0; Tm < this.skeletons.length; Tm++) {
          const fm = this.skeletons[Tm];
          for (let Tm = 0; Tm < fm.bones.length; Tm++)
            if (fm.bones[Tm].id === mm) return fm.bones[Tm]
        }
        return null
      }
      getBoneByName(mm) {
        for (let Tm = 0; Tm < this.skeletons.length; Tm++) {
          const fm = this.skeletons[Tm];
          for (let Tm = 0; Tm < fm.bones.length; Tm++)
            if (fm.bones[Tm].name === mm) return fm.bones[Tm]
        }
        return null
      }
      getLightByName(mm) {
        for (let Tm = 0; Tm < this.lights.length; Tm++)
          if (this.lights[Tm].name === mm) return this.lights[Tm];
        return null
      }
      getLightById(mm) {
        for (let Tm = 0; Tm < this.lights.length; Tm++)
          if (this.lights[Tm].id === mm) return this.lights[Tm];
        return null
      }
      getLightByUniqueId(mm) {
        for (let Tm = 0; Tm < this.lights.length; Tm++)
          if (this.lights[Tm].uniqueId === mm) return this.lights[Tm];
        return null
      }
      getParticleSystemById(mm) {
        for (let Tm = 0; Tm < this.VK.length; Tm++)
          if (this.VK[Tm].id === mm) return this.VK[Tm];
        return null
      }
      getGeometryById(mm) {
        for (let Tm = 0; Tm < this.geometries.length; Tm++)
          if (this.geometries[Tm].id === mm) return this.geometries[Tm];
        return null
      }
      _getGeometryByUniqueId(mm) {
        if (this._geometriesByUniqueId) {
          const Tm = this._geometriesByUniqueId[mm];
          if (void 0 !== Tm) return this.geometries[Tm]
        } else
          for (let Tm = 0; Tm < this.geometries.length; Tm++)
            if (this.geometries[Tm].uniqueId === mm) return this.geometries[Tm];
        return null
      }
      getFrameGraphByName(mm) {
        for (let Tm = 0; Tm < this.frameGraphs.length; Tm++)
          if (this.frameGraphs[Tm].name === mm) return this.frameGraphs[Tm];
        return null
      }
      pushGeometry(mm, Tm) {
        return !(!Tm && this._getGeometryByUniqueId(mm.uniqueId)) && (this.addGeometry(mm), Am.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(mm)
        })), !0)
      }
      removeGeometry(mm) {
        let Tm;
        if (this._geometriesByUniqueId) {
          if (Tm = this._geometriesByUniqueId[mm.uniqueId], void 0 === Tm) return !1
        } else if (Tm = this.geometries.indexOf(mm), Tm < 0) return !1;
        if (Tm !== this.geometries.length - 1) {
          const mm = this.geometries[this.geometries.length - 1];
          mm && (this.geometries[Tm] = mm, this._geometriesByUniqueId && (this._geometriesByUniqueId[mm.uniqueId] = Tm))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[mm.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(mm), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(mm) {
        for (let Tm = 0; Tm < this.meshes.length; Tm++)
          if (this.meshes[Tm].id === mm) return this.meshes[Tm];
        return null
      }
      getMeshesById(mm) {
        return this.meshes.filter((function(Tm) {
          return Tm.id === mm
        }))
      }
      getTransformNodeById(mm) {
        for (let Tm = 0; Tm < this.transformNodes.length; Tm++)
          if (this.transformNodes[Tm].id === mm) return this.transformNodes[Tm];
        return null
      }
      getTransformNodeByUniqueId(mm) {
        for (let Tm = 0; Tm < this.transformNodes.length; Tm++)
          if (this.transformNodes[Tm].uniqueId === mm) return this.transformNodes[Tm];
        return null
      }
      getTransformNodesById(mm) {
        return this.transformNodes.filter((function(Tm) {
          return Tm.id === mm
        }))
      }
      getMeshByUniqueId(mm) {
        for (let Tm = 0; Tm < this.meshes.length; Tm++)
          if (this.meshes[Tm].uniqueId === mm) return this.meshes[Tm];
        return null
      }
      getLastMeshById(mm) {
        for (let Tm = this.meshes.length - 1; Tm >= 0; Tm--)
          if (this.meshes[Tm].id === mm) return this.meshes[Tm];
        return null
      }
      getLastTransformNodeById(mm) {
        for (let Tm = this.transformNodes.length - 1; Tm >= 0; Tm--)
          if (this.transformNodes[Tm].id === mm) return this.transformNodes[Tm];
        return null
      }
      getLastEntryById(mm) {
        let Tm;
        for (Tm = this.meshes.length - 1; Tm >= 0; Tm--)
          if (this.meshes[Tm].id === mm) return this.meshes[Tm];
        for (Tm = this.transformNodes.length - 1; Tm >= 0; Tm--)
          if (this.transformNodes[Tm].id === mm) return this.transformNodes[Tm];
        for (Tm = this.cameras.length - 1; Tm >= 0; Tm--)
          if (this.cameras[Tm].id === mm) return this.cameras[Tm];
        for (Tm = this.lights.length - 1; Tm >= 0; Tm--)
          if (this.lights[Tm].id === mm) return this.lights[Tm];
        for (Tm = this.skeletons.length - 1; Tm >= 0; Tm--) {
          const fm = this.skeletons[Tm];
          for (let Tm = fm.bones.length - 1; Tm >= 0; Tm--)
            if (fm.bones[Tm].id === mm) return fm.bones[Tm]
        }
        return null
      }
      getNodeById(mm) {
        const Tm = this.getMeshById(mm);
        if (Tm) return Tm;
        const fm = this.getTransformNodeById(mm);
        if (fm) return fm;
        const hm = this.getLightById(mm);
        if (hm) return hm;
        const Am = this.getCameraById(mm);
        if (Am) return Am;
        const am = this.getBoneById(mm);
        return am || null
      }
      getNodeByName(mm) {
        const Tm = this.getMeshByName(mm);
        if (Tm) return Tm;
        const fm = this.getTransformNodeByName(mm);
        if (fm) return fm;
        const hm = this.getLightByName(mm);
        if (hm) return hm;
        const Am = this.getCameraByName(mm);
        if (Am) return Am;
        const am = this.getBoneByName(mm);
        return am || null
      }
      getMeshByName(mm) {
        for (let Tm = 0; Tm < this.meshes.length; Tm++)
          if (this.meshes[Tm].name === mm) return this.meshes[Tm];
        return null
      }
      getTransformNodeByName(mm) {
        for (let Tm = 0; Tm < this.transformNodes.length; Tm++)
          if (this.transformNodes[Tm].name === mm) return this.transformNodes[Tm];
        return null
      }
      getLastSkeletonById(mm) {
        for (let Tm = this.skeletons.length - 1; Tm >= 0; Tm--)
          if (this.skeletons[Tm].id === mm) return this.skeletons[Tm];
        return null
      }
      getSkeletonByUniqueId(mm) {
        for (let Tm = 0; Tm < this.skeletons.length; Tm++)
          if (this.skeletons[Tm].uniqueId === mm) return this.skeletons[Tm];
        return null
      }
      getSkeletonById(mm) {
        for (let Tm = 0; Tm < this.skeletons.length; Tm++)
          if (this.skeletons[Tm].id === mm) return this.skeletons[Tm];
        return null
      }
      getSkeletonByName(mm) {
        for (let Tm = 0; Tm < this.skeletons.length; Tm++)
          if (this.skeletons[Tm].name === mm) return this.skeletons[Tm];
        return null
      }
      getMorphTargetManagerById(mm) {
        for (let Tm = 0; Tm < this.morphTargetManagers.length; Tm++)
          if (this.morphTargetManagers[Tm].uniqueId === mm) return this.morphTargetManagers[Tm];
        return null
      }
      getMorphTargetById(mm) {
        for (let Tm = 0; Tm < this.morphTargetManagers.length; ++Tm) {
          const fm = this.morphTargetManagers[Tm];
          for (let Tm = 0; Tm < fm.numTargets; ++Tm) {
            const hm = fm.getTarget(Tm);
            if (hm.id === mm) return hm
          }
        }
        return null
      }
      getMorphTargetByName(mm) {
        for (let Tm = 0; Tm < this.morphTargetManagers.length; ++Tm) {
          const fm = this.morphTargetManagers[Tm];
          for (let Tm = 0; Tm < fm.numTargets; ++Tm) {
            const hm = fm.getTarget(Tm);
            if (hm.name === mm) return hm
          }
        }
        return null
      }
      getPostProcessByName(mm) {
        for (let Tm = 0; Tm < this.postProcesses.length; ++Tm) {
          const fm = this.postProcesses[Tm];
          if (fm.name === mm) return fm
        }
        return null
      }
      isActiveMesh(mm) {
        return -1 !== this._activeMeshes.indexOf(mm)
      }
      get uid() {
        return this._uid || (this._uid = hm.h.RandomId()), this._uid
      }
      addExternalData(mm, Tm) {
        return this._externalData || (this._externalData = new Dm), this._externalData.add(mm, Tm)
      }
      getExternalData(mm) {
        return this._externalData ? this._externalData.get(mm) : null
      }
      getOrAddExternalDataWithFactory(mm, Tm) {
        return this._externalData || (this._externalData = new Dm), this._externalData.getOrAddWithFactory(mm, Tm)
      }
      removeExternalData(mm) {
        return this._externalData.remove(mm)
      }
      _evaluateSubMesh(mm, Tm, fm, hm) {
        if (hm || mm.isInFrustum(this._frustumPlanes)) {
          for (let hm = 0, Am = this._evaluateSubMeshStage; hm < Am.length; hm++) {
            Am[hm].action(Tm, mm)
          }
          const fm = mm.TY();
          null !== fm && void 0 !== fm && (fm.hasRenderTargetTextures && null != fm.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(fm) && (this._processedMaterials.push(fm), this._materialsRenderTargets.concatWithNoDuplicate(fm.getRenderTargetTextures())), this._renderingManager.dispatch(mm, Tm, fm))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(mm) {
        this._preventFreeActiveMeshesAndRenderingGroups !== mm && (mm && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = mm)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let mm = 0; mm < this.activeCameras.length; mm++) {
            const Tm = this.activeCameras[mm];
            Tm && Tm._activeMeshes && Tm._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let mm = 0; mm < this.textures.length; mm++) {
            const Tm = this.textures[mm];
            Tm && Tm.renderList && Tm.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const xm = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const mm of xm) mm.objectRenderer._freezeActiveMeshes(hm);
          return this._freezeActiveMeshesCancel = (0, Am.f)((() => {
            let mm = !0,
              Tm = !0;
            for (const fm of xm) mm && (mm = fm.objectRenderer._isFrozen), Tm && (Tm = null !== fm.objectRenderer._freezeActiveMeshesCancel);
            if (mm) return !0;
            if (!Tm) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = am, this._skipEvaluateActiveMeshesCompletely = mm, Tm?.()
          }), ((mm, Tm) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), Tm) {
              const Tm = "Scene: Timeout while waiting for meshes to be frozen.";
              fm ? fm(Tm) : (Tf.b.Error(Tm), mm && Tf.b.Error(mm))
            } else {
              const Tm = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              fm ? fm(Tm) : (Tf.b.Error(Tm), mm && (Tf.b.Error(mm), mm.stack && Tf.b.Error(mm.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = am, this._skipEvaluateActiveMeshesCompletely = mm, hm)
              for (let mm = 0; mm < this._activeMeshes.length; mm++) this._activeMeshes.data[mm]._freeze();
            Tm && Tm()
          } else fm && fm("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let mm = 0; mm < this.meshes.length; mm++) {
          const Tm = this.meshes[mm];
          Tm._internalAbstractMeshDataInfo && (Tm._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const mm = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const Tm of mm) Tm.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let mm = 0; mm < this._activeMeshes.length; mm++) this._activeMeshes.data[mm]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(mm) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => mm.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const mm = this._activeMeshes.length;
            for (let Tm = 0; Tm < mm; Tm++) {
              this._activeMeshes.data[Tm].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const mm = this._activeParticleSystems.length;
            for (let Tm = 0; Tm < mm; Tm++) this._activeParticleSystems.data[Tm].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let Am = 0, am = this._beforeEvaluateActiveMeshStage; Am < am.length; Am++) {
          am[Am].action()
        }
        const mm = this.getActiveMeshCandidates(),
          Tm = mm.length,
          fm = Bm.d.Enabled,
          hm = this.customLODSelector;
        for (let Am = 0; Am < Tm; Am++) {
          const Tm = mm.data[Am],
            am = !hm && !Tm.pG && !Tm._internalMeshDataInfo?._LODLevels.length;
          let xm, wm;
          if ((am || (xm = Tm._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), xm ? xm[1] = -1 : (xm = [Tm, -1], Tm._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, xm))), !Tm.isBlocked) && (fm && this._totalVertices.addCount(Tm.getTotalVertices(), !1), Tm.isReady() && Tm.isEnabled() && !Tm.fi.hasAZeroComponent)) {
            if (Tm.computeWorldMatrix(), Tm.actionManager && Tm.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(Tm), am) wm = Tm;
            else if (wm = hm ? hm(Tm, this.activeCamera) : Tm.getLOD(this.activeCamera), xm[0] = wm, xm[1] = this._frameId, void 0 === wm || null === wm) continue;
            if (wm !== Tm && 0 !== wm.billboardMode && wm.computeWorldMatrix(), Tm._preActivate(), Tm.isVisible && Tm.visibility > 0 && 0 !== (Tm.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || Tm.gO || Tm.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(Tm), this.activeCamera._activeMeshes.push(Tm), wm !== Tm && wm._activate(this._renderId, !1);
              for (let mm = 0, fm = this._preActiveMeshStage; mm < fm.length; mm++) {
                fm[mm].action(Tm)
              }
              Tm._activate(this._renderId, !1) && (Tm.pG ? Tm._internalAbstractMeshDataInfo._actAsRegularMesh && (wm = Tm) : wm._internalAbstractMeshDataInfo._onlyForInstances = !1, wm._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(Tm, wm)), Tm._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let mm = 0; mm < this.VK.length; mm++) {
            const Tm = this.VK[mm];
            if (!Tm.isStarted() || !Tm.emitter) continue;
            const fm = Tm.emitter;
            fm.position && !fm.isEnabled() || (this._activeParticleSystems.push(Tm), Tm.animate(), this._renderingManager.dispatchParticles(Tm))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(mm) {
        this._skeletonsEnabled && mm.skeleton && (this._activeSkeletons.pushNoDuplicate(mm.skeleton) && (mm.skeleton.prepare(), this._activeBones.addCount(mm.skeleton.bones.length, !1)), mm.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(mm) && this.frameGraph && mm.applySkeleton(mm.skeleton))
      }
      _activeMesh(mm, Tm) {
        this._prepareSkeleton(Tm);
        let fm = mm.Fhm || mm.pG || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || Tm.gO;
        if (Tm && Tm.jK && Tm.jK.length > 0) {
          const hm = this.getActiveSubMeshCandidates(Tm),
            Am = hm.length;
          fm = fm || 1 === Am;
          for (let am = 0; am < Am; am++) {
            const Am = hm.data[am];
            this._evaluateSubMesh(Am, Tm, mm, fm)
          }
        }
      }
      updateTransformMatrix(mm) {
        const Tm = this.activeCamera;
        if (Tm)
          if (Tm._renderingMultiview) {
            const fm = Tm._rigCameras[0],
              hm = Tm._rigCameras[1];
            this.setTransformMatrix(fm.getViewMatrix(), fm.getProjectionMatrix(mm), hm.getViewMatrix(), hm.getProjectionMatrix(mm))
          } else this.setTransformMatrix(Tm.getViewMatrix(), Tm.getProjectionMatrix(mm))
      }
      _bindFrameBuffer(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (mm && mm._multiviewTexture ? mm._multiviewTexture._bindFrameBuffer() : mm && mm.outputRenderTarget ? mm.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), Tm && this._clearFrameBuffer(mm)
      }
      _clearFrameBuffer(mm) {
        if (mm && mm._multiviewTexture);
        else if (mm && mm.outputRenderTarget && !mm._renderingMultiview) {
          const Tm = mm.outputRenderTarget;
          Tm.onClearObservable.hasObservers() ? Tm.onClearObservable.notifyObservers(this._engine) : Tm.skipInitialClear || mm.isRightCamera || (this.autoClear && this._engine.clear(Tm.clearColor || this._clearColor, !Tm._cleared, !0, !0), Tm._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (mm && mm._skipRendering) return;
        const Am = this._engine;
        if (this._activeCamera = mm, !this.activeCamera) throw new Error("Active camera not set");
        if (Am.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && fm) {
          let Tm = !0;
          mm._renderingMultiview && mm.outputRenderTarget && (Tm = mm.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, mm.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), mm._renderingMultiview && mm.outputRenderTarget && (mm.outputRenderTarget.skipInitialClear = Tm)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = mm.outputRenderTarget?.renderPassId ?? mm.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let hm = 0; hm < this._softwareSkinnedMeshes.length; hm++) {
          const mm = this._softwareSkinnedMeshes.data[hm];
          mm.applySkeleton(mm.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), mm.customRenderTargets && mm.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(mm.customRenderTargets), Tm && Tm.customRenderTargets && Tm.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(Tm.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let hm = 0, wm = this._gatherActiveCameraRenderTargetsStage; hm < wm.length; hm++) {
          wm[hm].action(this._renderTargets)
        }
        let am = !1;
        if (this.renderTargetsEnabled) {
          let mm;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            hm.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const Tm = this.getBoundingBoxRenderer?.();
            for (let fm = 0; fm < this._renderTargets.length; fm++) {
              const hm = this._renderTargets.data[fm];
              if (hm._shouldRender()) {
                this._renderId++;
                const fm = hm.activeCamera && hm.activeCamera !== this.activeCamera;
                Tm && !mm && (mm = Tm.renderList.length > 0 ? Tm.renderList.data.slice() : [], mm.length = Tm.renderList.length), hm.render(fm, this.dumpNextRenderTargets), am = !0
              }
            }
            Tm && mm && (Tm.renderList.data = mm, Tm.renderList.length = mm.length), hm.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const Tm = this.getBoundingBoxRenderer?.();
            Tm && !mm && (mm = Tm.renderList.length > 0 ? Tm.renderList.data.slice() : [], mm.length = Tm.renderList.length);
            for (let mm = 0, fm = this._cameraDrawRenderTargetStage; mm < fm.length; mm++) {
              am = fm[mm].action(this.activeCamera) || am
            }
            Tm && mm && (Tm.renderList.data = mm, Tm.renderList.length = mm.length)
          }
          this._intermediateRendering = !1
        }
        am && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || mm._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let hm = 0, wm = this._beforeCameraDrawStage; hm < wm.length; hm++) {
          wm[hm].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const xm = Am.snapshotRendering && 1 === Am.snapshotRenderingMode;
        xm && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !xm), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let hm = 0, wm = this._afterCameraDrawStage; hm < wm.length; hm++) {
          wm[hm].action(this.activeCamera)
        }
        if (this.postProcessManager && !mm._multiviewTexture) {
          const Tm = mm.outputRenderTarget ? mm.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(mm.isIntermediate, Tm)
        }
        for (let hm = 0, wm = this._afterCameraPostProcessStage; hm < wm.length; hm++) {
          wm[hm].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === mm.cameraRigMode || mm._renderingMultiview) return mm._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(mm, void 0, Tm), void this.onAfterRenderCameraObservable.notifyObservers(mm);
        if (mm._useMultiviewToSingleView) this._renderMultiviewToSingleView(mm);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(mm);
          for (let Tm = 0; Tm < mm._rigCameras.length; Tm++) this._renderForCamera(mm._rigCameras[Tm], mm)
        }
        this._activeCamera = mm, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(mm)
      }
      _checkIntersections() {
        for (let mm = 0; mm < this._meshesForIntersections.length; mm++) {
          const Tm = this._meshesForIntersections.data[mm];
          if (Tm.actionManager)
            for (let mm = 0; Tm.actionManager && mm < Tm.actionManager.actions.length; mm++) {
              const fm = Tm.actionManager.actions[mm];
              if (12 === fm.trigger || 13 === fm.trigger) {
                const mm = fm.getTriggerParameter(),
                  hm = mm.mesh ? mm.mesh : mm,
                  Am = hm.vhm(Tm, mm.usePreciseIntersection),
                  am = Tm._intersectionsInProgress.indexOf(hm);
                Am && -1 === am ? 12 === fm.trigger ? (fm._executeCurrent(Om.CreateNew(Tm, void 0, hm)), Tm._intersectionsInProgress.push(hm)) : 13 === fm.trigger && Tm._intersectionsInProgress.push(hm) : !Am && am > -1 && (13 === fm.trigger && fm._executeCurrent(Om.CreateNew(Tm, void 0, hm)), Tm.actionManager.hasSpecificTrigger(13, (mm => {
                  const Tm = mm.mesh ? mm.mesh : mm;
                  return hm === Tm
                })) && 13 !== fm.trigger || Tm._intersectionsInProgress.splice(am, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(mm) {}
      _animate(mm) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let mm = Math.max(xf.MinDeltaTime, Math.min(this._engine.getDeltaTime(), xf.MaxDeltaTime)) + this._timeAccumulator;
          const Tm = this._engine.getTimeStep(),
            fm = 1e3 / Tm / 1e3;
          let hm = 0;
          const Am = this._engine.getLockstepMaxSteps();
          let am = Math.floor(mm / Tm);
          for (am = Math.min(am, Am); mm > 0 && hm < am;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = Tm * fm, this._animate(Tm), this.onAfterAnimationsObservable.notifyObservers(this), this.YC && this._advancePhysicsEngineStep(Tm), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, hm++, mm -= Tm;
          this._timeAccumulator = mm < 0 ? 0 : mm
        } else {
          const mm = this.useConstantAnimationDeltaTime ? 16 : Math.max(xf.MinDeltaTime, Math.min(this._engine.getDeltaTime(), xf.MaxDeltaTime));
          this._animationRatio = .06 * mm, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.YC && this._advancePhysicsEngineStep(mm)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(mm) {
        if (mm?.outputRenderTarget && !mm?.isRigCamera && (mm.outputRenderTarget._cleared = !1), mm?.rigCameras?.length)
          for (let Tm = 0; Tm < mm.rigCameras.length; ++Tm) {
            const fm = mm.rigCameras[Tm].outputRenderTarget;
            fm && (fm._cleared = !1)
          }
      }
      resetDrawCache(mm) {
        if (this.meshes)
          for (const Tm of this.meshes) Tm.resetDrawCache(mm)
      }
      _renderWithFrameGraph() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Tm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, mm)
          for (const fm of this.cameras)
            if (fm.update(), 0 !== fm.cameraRigMode)
              for (let mm = 0; mm < fm._rigCameras.length; mm++) fm._rigCameras[mm].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(Tm)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(mm) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const Tm = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), hm.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let mm = 0; mm < this._renderTargets.length; mm++) {
            const fm = this._renderTargets.data[mm],
              hm = fm.activeCamera || Tm;
            this._renderRenderTarget(fm, hm, !0, this.dumpNextRenderTargets)
          }
          hm.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let fm = 0, hm = this._beforeClearStage; fm < hm.length; fm++) {
          hm[fm].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const Tm = this.getActiveMeshCandidates(),
            fm = Tm.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let mm = 0; mm < fm; mm++) {
                const fm = Tm.data[mm];
                fm._internalAbstractMeshDataInfo._wasActiveLastFrame && fm.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const mm = this._activeParticleSystems.length;
              for (let Tm = 0; Tm < mm; Tm++) this._activeParticleSystems.data[Tm].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let hm = 0; hm < fm; hm++) {
              const fm = Tm.data[hm];
              fm._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, fm.isBlocked || (this._totalVertices.addCount(fm.getTotalVertices(), !1), fm.isReady() && fm.isEnabled() && !fm.fi.hasAZeroComponent && (fm.computeWorldMatrix(mm), fm.actionManager && fm.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(fm)))
            }
            if (this.particlesEnabled)
              for (let mm = 0; mm < this.VK.length; mm++) {
                const Tm = this.VK[mm];
                if (!Tm.isStarted() || !Tm.emitter) continue;
                const fm = Tm.emitter;
                fm.position && !fm.isEnabled() || (this._activeParticleSystems.push(Tm), Tm.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, mm._shouldRender()) {
          if (this._renderId++, this.activeCamera = Tm, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), mm.render(fm, hm)
        }
        this._intermediateRendering = !1
      }
      render() {
        let mm = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.aJ) return;
        const fm = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(mm, Tm)
        } finally {
          this._renderingMeshEvaluationDepth = fm
        }
      }
      _renderFrame(mm, Tm) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), qm.b.wG = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const fm of this.activeCameras) this._checkCameraRenderTarget(fm);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), Tm || this.animate();
        for (let fm = 0, hm = this._beforeCameraUpdateStage; fm < hm.length; fm++) {
          hm[fm].action()
        }
        if (mm)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let fm = 0; fm < this.activeCameras.length; fm++) {
              const mm = this.activeCameras[fm];
              if (mm.update(), 0 !== mm.cameraRigMode)
                for (let Tm = 0; Tm < mm._rigCameras.length; Tm++) mm._rigCameras[Tm].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let fm = 0; fm < this.activeCamera._rigCameras.length; fm++) this.activeCamera._rigCameras[fm].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(mm, Tm);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const mm = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            hm.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let Tm = 0; Tm < this.customRenderTargets.length; Tm++) {
              const fm = this.customRenderTargets[Tm],
                hm = fm.activeCamera || this.activeCamera;
              this._renderRenderTarget(fm, hm, mm !== hm, this.dumpNextRenderTargets)
            }
            hm.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = mm?.renderPassId ?? 0, this.activeCamera = mm, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let Tm = 0, fm = this._beforeClearStage; Tm < fm.length; Tm++) {
            fm[Tm].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let Tm = 0, fm = this._gatherRenderTargetsStage; Tm < fm.length; Tm++) {
            fm[Tm].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let Tm = 0; Tm < this.activeCameras.length; Tm++) this._processSubCameras(this.activeCameras[Tm], Tm > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let fm = 0, hm = this._afterRenderStage; fm < hm.length; fm++) {
          hm[fm].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let mm = 0; mm < this._toBeDisposed.length; mm++) {
            const Tm = this._toBeDisposed[mm];
            Tm && Tm.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let mm = 0; mm < this.materials.length; mm++) this.materials[mm].freeze()
      }
      unfreezeMaterials() {
        for (let mm = 0; mm < this.materials.length; mm++) this.materials[mm].unfreeze()
      }
      dispose() {
        if (this.aJ) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, Qm.d)(this.stopAllAnimations)) {
          for (const mm of this._activeAnimatables) mm.onAnimationEndObservable.clear(), mm.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const mm = this._activeRequests.slice();
        for (const am of mm) am.abort();
        this._activeRequests.length = 0;
        try {
          this.iG.notifyObservers(this)
        } catch (Am) {
          Tf.b.Error("An error occurred while calling onDisposeObservable!", Am)
        }
        this.detachControl();
        const Tm = this._engine.getInputElement?.();
        if (Tm)
          for (let am = 0; am < this.cameras.length; am++) this.cameras[am].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (mm => mm.dispose(!0))), this._disposeList(this.transformNodes, (mm => mm.dispose(!0)));
        const fm = this.cameras;
        this._disposeList(fm), this._disposeList(this.VK), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let hm = this._engine.scenes.indexOf(this);
        if (hm > -1 && this._engine.scenes.splice(hm, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, qm.f)(), Km.c._LastCreatedScene === this) {
          Km.c._LastCreatedScene = null;
          let mm = Km.c.Instances.length - 1;
          for (; mm >= 0;) {
            const Tm = Km.c.Instances[mm];
            if (Tm.scenes.length > 0) {
              Km.c._LastCreatedScene = Tm.scenes[this._engine.scenes.length - 1];
              break
            }
            mm--
          }
        }
        hm = this._engine._virtualScenes.indexOf(this), hm > -1 && this._engine._virtualScenes.splice(hm, 1), this._engine.wipeCaches(!0), this.iG.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(mm, Tm) {
        const fm = mm.slice(0);
        Tm = Tm ?? (mm => mm.dispose());
        for (const hm of fm) Tm(hm);
        mm.length = 0
      }
      get aJ() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let mm = 0; mm < this.meshes.length; mm++) {
          const Tm = this.meshes[mm].geometry;
          Tm && Tm.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const mm of this.textures) {
          mm._buffer && (mm._buffer = null)
        }
      }
      getWorldExtends(mm) {
        const Tm = new Rm.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          fm = new Rm.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        mm = mm || (() => !0);
        const hm = this.meshes.filter(mm);
        for (const Am of hm) {
          if (Am.computeWorldMatrix(!0), !Am.jK || 0 === Am.jK.length || Am.infiniteDistance) continue;
          const mm = Am.DH(),
            hm = mm.boundingBox.minimumWorld,
            am = mm.boundingBox.maximumWorld;
          Rm.p.CheckExtends(hm, Tm, fm), Rm.p.CheckExtends(am, Tm, fm)
        }
        return Tm.x === Number.MAX_VALUE ? {
          min: Rm.p.Zero(),
          max: Rm.p.Zero()
        } : {
          min: Tm,
          max: fm
        }
      }
      createPickingRay(mm, Tm, fm, hm) {
        throw (0, Qm.i)("Ray")
      }
      createPickingRayToRef(mm, Tm, fm, hm, Am) {
        throw (0, Qm.i)("Ray")
      }
      createPickingRayInCameraSpace(mm, Tm, fm) {
        throw (0, Qm.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(mm, Tm, fm, hm) {
        throw (0, Qm.i)("Ray")
      }
      Do(mm, Tm, fm, hm, Am, am) {
        const xm = (0, Qm.i)("Ray", !0);
        return xm && Tf.b.Warn(xm), new om.e
      }
      pickWithBoundingInfo(mm, Tm, fm, hm, Am) {
        const am = (0, Qm.i)("Ray", !0);
        return am && Tf.b.Warn(am), new om.e
      }
      pickWithRay(mm, Tm, fm, hm) {
        throw (0, Qm.i)("Ray")
      }
      multiPick(mm, Tm, fm, hm, Am) {
        throw (0, Qm.i)("Ray")
      }
      multiPickWithRay(mm, Tm, fm) {
        throw (0, Qm.i)("Ray")
      }
      setPointerOverMesh(mm, Tm, fm) {
        this._inputManager.setPointerOverMesh(mm, Tm, fm)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const mm of this.geometries) mm._rebuild();
        for (const mm of this.meshes) mm._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const mm of this._components) mm.rebuild();
        for (const mm of this.VK) mm.rebuild();
        if (this.spriteManagers)
          for (const mm of this.spriteManagers) mm.rebuild()
      }
      _rebuildTextures() {
        for (const mm of this.textures) mm._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(mm, Tm, fm) {
        if (void 0 === Tm) return mm;
        const hm = [];
        for (const Am in mm) {
          const am = mm[Am];
          im.e && im.e.MatchesQuery(am, Tm) && (!fm || fm(am)) && hm.push(am)
        }
        return hm
      }
      getMeshesByTags(mm, Tm) {
        return this._getByTags(this.meshes, mm, Tm)
      }
      getCamerasByTags(mm, Tm) {
        return this._getByTags(this.cameras, mm, Tm)
      }
      getLightsByTags(mm, Tm) {
        return this._getByTags(this.lights, mm, Tm)
      }
      getMaterialByTags(mm, Tm) {
        return this._getByTags(this.materials, mm, Tm).concat(this._getByTags(this.multiMaterials, mm, Tm))
      }
      getTransformNodesByTags(mm, Tm) {
        return this._getByTags(this.transformNodes, mm, Tm)
      }
      setRenderingOrder(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(mm, Tm, fm, hm)
      }
      setRenderingAutoClearDepthStencil(mm, Tm) {
        let fm = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(mm, Tm, fm, hm)
      }
      getAutoClearDepthStencilSetup(mm) {
        return this._renderingManager.getAutoClearDepthStencilSetup(mm)
      }
      _forceBlockMaterialDirtyMechanism(mm) {
        this._blockMaterialDirtyMechanism = mm
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(mm) {
        this._blockMaterialDirtyMechanism !== mm && (this._blockMaterialDirtyMechanism = mm, mm || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(mm, Tm) {
        if (!this._blockMaterialDirtyMechanism)
          for (const fm of this.materials) Tm && !Tm(fm) || fm.HTm(mm)
      }
      _loadFile(mm, Tm, fm, hm, Am, am, xm) {
        const wm = (0, dm.r)(mm, Tm, fm, hm ? this.offlineProvider : void 0, Am, am, xm);
        return this._activeRequests.push(wm), wm.onCompleteObservable.add((mm => {
          this._activeRequests.splice(this._activeRequests.indexOf(mm), 1)
        })), wm
      }
      async _loadFileAsync(mm, Tm, fm, hm, Am) {
        return await new Promise(((am, xm) => {
          this._loadFile(mm, (mm => {
            am(mm)
          }), Tm, fm, hm, ((mm, Tm) => {
            xm(Tm)
          }), Am)
        }))
      }
      async _loadDelayedFileAsync(mm, Tm, fm) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const hm = `${mm}|${Tm?"binary":"string"}`;
        let Am = this._delayedFileRequests.get(hm);
        if (!Am) {
          Am = Tm ? this._loadFileAsync(mm, void 0, fm, !0) : this._loadFileAsync(mm, void 0, fm, !1);
          const am = Am;
          (async () => {
            try {
              await am
            } catch {}
            this._delayedFileRequests?.delete(hm)
          })(), this._delayedFileRequests.set(hm, Am)
        }
        return await Am
      }
      _requestFile(mm, Tm, fm, hm, Am, am, xm) {
        const wm = (0, dm.D)(mm, Tm, fm, hm ? this.offlineProvider : void 0, Am, am, xm);
        return this._activeRequests.push(wm), wm.onCompleteObservable.add((mm => {
          this._activeRequests.splice(this._activeRequests.indexOf(mm), 1)
        })), wm
      }
      async _requestFileAsync(mm, Tm, fm, hm, Am) {
        return await new Promise(((am, xm) => {
          this._requestFile(mm, (mm => {
            am(mm)
          }), Tm, fm, hm, (mm => {
            xm(mm)
          }), Am)
        }))
      }
      _readFile(mm, Tm, fm, hm, Am) {
        const am = (0, dm.x)(mm, Tm, fm, hm, Am);
        return this._activeRequests.push(am), am.onCompleteObservable.add((mm => {
          this._activeRequests.splice(this._activeRequests.indexOf(mm), 1)
        })), am
      }
      async _readFileAsync(mm, Tm, fm) {
        return await new Promise(((hm, Am) => {
          this._readFile(mm, (mm => {
            hm(mm)
          }), Tm, fm, (mm => {
            Am(mm)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, Qm.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(mm) {
        return this.setActiveCameraById(mm)
      }
      getMaterialByID(mm) {
        return this.getMaterialById(mm)
      }
      getLastMaterialByID(mm) {
        return this.getLastMaterialById(mm)
      }
      getTextureByUniqueID(mm) {
        return this.getTextureByUniqueId(mm)
      }
      getCameraByID(mm) {
        return this.getCameraById(mm)
      }
      getCameraByUniqueID(mm) {
        return this.getCameraByUniqueId(mm)
      }
      getBoneByID(mm) {
        return this.getBoneById(mm)
      }
      getLightByID(mm) {
        return this.getLightById(mm)
      }
      getLightByUniqueID(mm) {
        return this.getLightByUniqueId(mm)
      }
      getParticleSystemByID(mm) {
        return this.getParticleSystemById(mm)
      }
      getGeometryByID(mm) {
        return this.getGeometryById(mm)
      }
      getMeshByID(mm) {
        return this.getMeshById(mm)
      }
      getMeshByUniqueID(mm) {
        return this.getMeshByUniqueId(mm)
      }
      getLastMeshByID(mm) {
        return this.getLastMeshById(mm)
      }
      getMeshesByID(mm) {
        return this.getMeshesById(mm)
      }
      getTransformNodeByID(mm) {
        return this.getTransformNodeById(mm)
      }
      getTransformNodeByUniqueID(mm) {
        return this.getTransformNodeByUniqueId(mm)
      }
      getTransformNodesByID(mm) {
        return this.getTransformNodesById(mm)
      }
      getNodeByID(mm) {
        return this.getNodeById(mm)
      }
      getLastEntryByID(mm) {
        return this.getLastEntryById(mm)
      }
      getLastSkeletonByID(mm) {
        return this.getLastSkeletonById(mm)
      }
    }
    xf.FOGMODE_NONE = 0, xf.FOGMODE_EXP = 1, xf.FOGMODE_EXP2 = 2, xf.FOGMODE_LINEAR = 3, xf.MinDeltaTime = 1, xf.MaxDeltaTime = 1e3, xf._OriginalDefaultMaterialFactory = xf.DefaultMaterialFactory;
    let wf = !1;

    function Df() {
      wf || (wf = !0, (0, ff.d)("BABYLON.Scene", xf))
    }(mT = xf.prototype).sortActiveAnimatables ?? (mT.sortActiveAnimatables = (0, Qm.f)("Scene", "sortActiveAnimatables")), (TT = xf.prototype).beginWeightedAnimation ?? (TT.beginWeightedAnimation = (0, Qm.f)("Scene", "beginWeightedAnimation")), (fT = xf.prototype).beginAnimation ?? (fT.beginAnimation = (0, Qm.f)("Scene", "beginAnimation")), (hT = xf.prototype).beginHierarchyAnimation ?? (hT.beginHierarchyAnimation = (0, Qm.f)("Scene", "beginHierarchyAnimation")), (AT = xf.prototype).beginDirectAnimation ?? (AT.beginDirectAnimation = (0, Qm.f)("Scene", "beginDirectAnimation")), (aT = xf.prototype).beginDirectHierarchyAnimation ?? (aT.beginDirectHierarchyAnimation = (0, Qm.f)("Scene", "beginDirectHierarchyAnimation")), (xT = xf.prototype).getAnimatableByTarget ?? (xT.getAnimatableByTarget = (0, Qm.f)("Scene", "getAnimatableByTarget")), (wT = xf.prototype).getAllAnimatablesByTarget ?? (wT.getAllAnimatablesByTarget = (0, Qm.f)("Scene", "getAllAnimatablesByTarget")), (DT = xf.prototype).stopAllAnimations ?? (DT.stopAllAnimations = (0, Qm.f)("Scene", "stopAllAnimations")), (iT = xf.prototype).getSoundByName ?? (iT.getSoundByName = (0, Qm.f)("Scene", "getSoundByName")), (RT = xf.prototype).createOrUpdateSelectionOctree ?? (RT.createOrUpdateSelectionOctree = (0, Qm.f)("Scene", "createOrUpdateSelectionOctree")), (pT = xf.prototype).createDefaultLight ?? (pT.createDefaultLight = (0, Qm.f)("Scene", "createDefaultLight")), (ET = xf.prototype).createDefaultCamera ?? (ET.createDefaultCamera = (0, Qm.f)("Scene", "createDefaultCamera")), (oT = xf.prototype).createDefaultCameraOrLight ?? (oT.createDefaultCameraOrLight = (0, Qm.f)("Scene", "createDefaultCameraOrLight")), (OT = xf.prototype).createDefaultSkybox ?? (OT.createDefaultSkybox = (0, Qm.f)("Scene", "createDefaultSkybox")), (YT = xf.prototype).createDefaultEnvironment ?? (YT.createDefaultEnvironment = (0, Qm.f)("Scene", "createDefaultEnvironment")), (qT = xf.prototype).createDefaultVRExperience ?? (qT.createDefaultVRExperience = (0, Qm.f)("Scene", "createDefaultVRExperience")), (jT = xf.prototype).createDefaultXRExperienceAsync ?? (jT.createDefaultXRExperienceAsync = (0, Qm.f)("Scene", "createDefaultXRExperienceAsync")), (VT = xf.prototype).getGlowLayerByName ?? (VT.getGlowLayerByName = (0, Qm.f)("Scene", "getGlowLayerByName")), (IT = xf.prototype).getHighlightLayerByName ?? (IT.getHighlightLayerByName = (0, Qm.f)("Scene", "getHighlightLayerByName")), (KT = xf.prototype).getSelectionOutlineLayerByName ?? (KT.getSelectionOutlineLayerByName = (0, Qm.f)("Scene", "getSelectionOutlineLayerByName")), (QT = xf.prototype).removeLensFlareSystem ?? (QT.removeLensFlareSystem = (0, Qm.f)("Scene", "removeLensFlareSystem")), (nT = xf.prototype).addLensFlareSystem ?? (nT.addLensFlareSystem = (0, Qm.f)("Scene", "addLensFlareSystem")), (JT = xf.prototype).getLensFlareSystemByName ?? (JT.getLensFlareSystemByName = (0, Qm.f)("Scene", "getLensFlareSystemByName")), (cT = xf.prototype).getLensFlareSystemByID ?? (cT.getLensFlareSystemByID = (0, Qm.f)("Scene", "getLensFlareSystemByID")), (zT = xf.prototype).getLensFlareSystemById ?? (zT.getLensFlareSystemById = (0, Qm.f)("Scene", "getLensFlareSystemById")), (ZT = xf.prototype).getPhysicsEngine ?? (ZT.getPhysicsEngine = (0, Qm.f)("Scene", "getPhysicsEngine")), (kT = xf.prototype).enablePhysics ?? (kT.enablePhysics = (0, Qm.f)("Scene", "enablePhysics")), (bT = xf.prototype).disablePhysicsEngine ?? (bT.disablePhysicsEngine = (0, Qm.f)("Scene", "disablePhysicsEngine")), (ST = xf.prototype).isPhysicsEnabled ?? (ST.isPhysicsEnabled = (0, Qm.f)("Scene", "isPhysicsEnabled")), (eT = xf.prototype).deleteCompoundImpostor ?? (eT.deleteCompoundImpostor = (0, Qm.f)("Scene", "deleteCompoundImpostor")), (NT = xf.prototype).removeReflectionProbe ?? (NT.removeReflectionProbe = (0, Qm.f)("Scene", "removeReflectionProbe")), (GT = xf.prototype).addReflectionProbe ?? (GT.addReflectionProbe = (0, Qm.f)("Scene", "addReflectionProbe")), (XT = xf.prototype).getBoundingBoxRenderer ?? (XT.getBoundingBoxRenderer = (0, Qm.f)("Scene", "getBoundingBoxRenderer")), (PT = xf.prototype).enableDepthRenderer ?? (PT.enableDepthRenderer = (0, Qm.f)("Scene", "enableDepthRenderer")), (HT = xf.prototype).disableDepthRenderer ?? (HT.disableDepthRenderer = (0, Qm.f)("Scene", "disableDepthRenderer")), (yT = xf.prototype).enableFluidRenderer ?? (yT.enableFluidRenderer = (0, Qm.f)("Scene", "enableFluidRenderer")), (CT = xf.prototype).disableFluidRenderer ?? (CT.disableFluidRenderer = (0, Qm.f)("Scene", "disableFluidRenderer")), (rT = xf.prototype).enableGeometryBufferRenderer ?? (rT.enableGeometryBufferRenderer = (0, Qm.f)("Scene", "enableGeometryBufferRenderer")), (sT = xf.prototype).disableGeometryBufferRenderer ?? (sT.disableGeometryBufferRenderer = (0, Qm.f)("Scene", "disableGeometryBufferRenderer")), (lT = xf.prototype).enableIblCdfGenerator ?? (lT.enableIblCdfGenerator = (0, Qm.f)("Scene", "enableIblCdfGenerator")), (MT = xf.prototype).disableIblCdfGenerator ?? (MT.disableIblCdfGenerator = (0, Qm.f)("Scene", "disableIblCdfGenerator")), (uT = xf.prototype).getOutlineRenderer ?? (uT.getOutlineRenderer = (0, Qm.f)("Scene", "getOutlineRenderer")), (BT = xf.prototype).enablePrePassRenderer ?? (BT.enablePrePassRenderer = (0, Qm.f)("Scene", "enablePrePassRenderer")), (LT = xf.prototype).disablePrePassRenderer ?? (LT.disablePrePassRenderer = (0, Qm.f)("Scene", "disablePrePassRenderer")), (vT = xf.prototype).enableSubSurfaceForPrePass ?? (vT.enableSubSurfaceForPrePass = (0, Qm.f)("Scene", "enableSubSurfaceForPrePass")), (tT = xf.prototype).disableSubSurfaceForPrePass ?? (tT.disableSubSurfaceForPrePass = (0, Qm.f)("Scene", "disableSubSurfaceForPrePass")), (UT = xf.prototype).pickSprite ?? (UT.pickSprite = (0, Qm.f)("Scene", "pickSprite")), (dT = xf.prototype).pickSpriteWithRay ?? (dT.pickSpriteWithRay = (0, Qm.f)("Scene", "pickSpriteWithRay")), (gT = xf.prototype).multiPickSprite ?? (gT.multiPickSprite = (0, Qm.f)("Scene", "multiPickSprite")), (WT = xf.prototype).multiPickSpriteWithRay ?? (WT.multiPickSpriteWithRay = (0, Qm.f)("Scene", "multiPickSpriteWithRay")), (FT = xf.prototype).setPointerOverSprite ?? (FT.setPointerOverSprite = (0, Qm.f)("Scene", "setPointerOverSprite")), (mf = xf.prototype).getPointerOverSprite ?? (mf.getPointerOverSprite = (0, Qm.f)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(xf.prototype, "mainSoundTrack") || Object.defineProperty(xf.prototype, "mainSoundTrack", (0, Qm.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(xf.prototype, "soundTracks") || Object.defineProperty(xf.prototype, "soundTracks", (0, Qm.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(xf.prototype, "audioEnabled") || Object.defineProperty(xf.prototype, "audioEnabled", (0, Qm.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(xf.prototype, "headphone") || Object.defineProperty(xf.prototype, "headphone", (0, Qm.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(xf.prototype, "audioListenerPositionProvider") || Object.defineProperty(xf.prototype, "audioListenerPositionProvider", (0, Qm.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(xf.prototype, "audioListenerRotationProvider") || Object.defineProperty(xf.prototype, "audioListenerRotationProvider", (0, Qm.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(xf.prototype, "audioPositioningRefreshRate") || Object.defineProperty(xf.prototype, "audioPositioningRefreshRate", (0, Qm.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(xf.prototype, "selectionOctree") || Object.defineProperty(xf.prototype, "selectionOctree", (0, Qm.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(xf.prototype, "debugLayer") || Object.defineProperty(xf.prototype, "debugLayer", (0, Qm.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(xf.prototype, "gamepadManager") || Object.defineProperty(xf.prototype, "gamepadManager", (0, Qm.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(xf.prototype, "simplificationQueue") || Object.defineProperty(xf.prototype, "simplificationQueue", (0, Qm.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(xf.prototype, "onBeforePhysicsObservable") || Object.defineProperty(xf.prototype, "onBeforePhysicsObservable", (0, Qm.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(xf.prototype, "onAfterPhysicsObservable") || Object.defineProperty(xf.prototype, "onAfterPhysicsObservable", (0, Qm.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(xf.prototype, "reflectionProbes") || Object.defineProperty(xf.prototype, "reflectionProbes", (0, Qm.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(xf.prototype, "forceShowBoundingBoxes") || Object.defineProperty(xf.prototype, "forceShowBoundingBoxes", (0, Qm.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(xf.prototype, "depthPeelingRenderer") || Object.defineProperty(xf.prototype, "depthPeelingRenderer", (0, Qm.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(xf.prototype, "useOrderIndependentTransparency") || Object.defineProperty(xf.prototype, "useOrderIndependentTransparency", (0, Qm.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(xf.prototype, "fluidRenderer") || Object.defineProperty(xf.prototype, "fluidRenderer", (0, Qm.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(xf.prototype, "geometryBufferRenderer") || Object.defineProperty(xf.prototype, "geometryBufferRenderer", (0, Qm.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(xf.prototype, "iblCdfGenerator") || Object.defineProperty(xf.prototype, "iblCdfGenerator", (0, Qm.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(xf.prototype, "prePassRenderer") || Object.defineProperty(xf.prototype, "prePassRenderer", (0, Qm.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(xf.prototype, "subSurfaceConfiguration") || Object.defineProperty(xf.prototype, "subSurfaceConfiguration", (0, Qm.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(xf.prototype, "spriteManagers") || Object.defineProperty(xf.prototype, "spriteManagers", (0, Qm.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(xf.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(xf.prototype, "onBeforeSpritesRenderingObservable", (0, Qm.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(xf.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(xf.prototype, "onAfterSpritesRenderingObservable", (0, Qm.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40274: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm,
      g: () => Am
    });
    class hm {}
    hm.NAME_EFFECTLAYER = "EffectLayer", hm.NAME_LAYER = "Layer", hm.NAME_LENSFLARESYSTEM = "LensFlareSystem", hm.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", hm.NAME_PARTICLESYSTEM = "ParticleSystem", hm.NAME_GAMEPAD = "Gamepad", hm.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", hm.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", hm.NAME_PREPASSRENDERER = "PrePassRenderer", hm.NAME_DEPTHRENDERER = "DepthRenderer", hm.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", hm.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", hm.NAME_SPRITE = "Sprite", hm.NAME_SUBSURFACE = "SubSurface", hm.NAME_OUTLINERENDERER = "Outline", hm.NAME_PROCEDURALTEXTURE = "ProceduralTexture", hm.NAME_SHADOWGENERATOR = "ShadowGenerator", hm.NAME_OCTREE = "qhm", hm.NAME_PHYSICSENGINE = "PhysicsEngine", hm.NAME_AUDIO = "Audio", hm.NAME_FLUIDRENDERER = "FluidRenderer", hm.NAME_IBLCDFGENERATOR = "iblCDFGenerator", hm.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", hm.STEP_ISREADYFORMESH_EFFECTLAYER = 0, hm.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, hm.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, hm.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, hm.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, hm.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, hm.STEP_BEFORECAMERADRAW_PREPASS = 0, hm.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, hm.STEP_BEFORECAMERADRAW_LAYER = 2, hm.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, hm.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, hm.STEP_BEFORERENDERINGMESH_PREPASS = 0, hm.STEP_BEFORERENDERINGMESH_OUTLINE = 1, hm.STEP_AFTERRENDERINGMESH_PREPASS = 0, hm.STEP_AFTERRENDERINGMESH_OUTLINE = 1, hm.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, hm.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, hm.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, hm.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, hm.STEP_BEFORECLEAR_PREPASS = 1, hm.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, hm.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, hm.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, hm.STEP_AFTERCAMERADRAW_PREPASS = 0, hm.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, hm.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, hm.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, hm.STEP_AFTERCAMERADRAW_LAYER = 4, hm.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, hm.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, hm.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, hm.STEP_AFTERRENDER_AUDIO = 0, hm.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, hm.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, hm.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, hm.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, hm.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, hm.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, hm.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, hm.STEP_POINTERMOVE_SPRITE = 0, hm.STEP_POINTERDOWN_SPRITE = 0, hm.STEP_POINTERUP_SPRITE = 0;
    class Am extends Array {
      constructor(mm) {
        super(...mm)
      }
      static Create() {
        return Object.create(Am.prototype)
      }
      registerStep(mm, Tm, fm) {
        let hm, Am = 0;
        for (; Am < this.length; Am++) {
          if (hm = this[Am].index, mm < hm) break
        }
        this.splice(Am, 0, {
          index: mm,
          component: Tm,
          action: fm.bind(Tm)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40113: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm,
      c: () => wm,
      g: () => hm,
      i: () => Am,
      l: () => am
    });

    function hm(mm, Tm, fm, hm, Am, am) {
      function xm(mm) {
        if (void 0 !== mm && "function" !== typeof mm) throw new TypeError("Function expected");
        return mm
      }
      for (var wm, Dm = hm.kind, im = "getter" === Dm ? "get" : "setter" === Dm ? "set" : "value", Rm = !Tm && mm ? hm.static ? mm : mm.prototype : null, pm = Tm || (Rm ? Object.getOwnPropertyDescriptor(Rm, hm.name) : {}), Em = !1, om = fm.length - 1; om >= 0; om--) {
        var Om = {};
        for (var Ym in hm) Om[Ym] = "access" === Ym ? {} : hm[Ym];
        for (var Ym in hm.access) Om.access[Ym] = hm.access[Ym];
        Om.addInitializer = function(mm) {
          if (Em) throw new TypeError("Cannot add initializers after decoration has completed");
          am.push(xm(mm || null))
        };
        var qm = (0, fm[om])("accessor" === Dm ? {
          get: pm.get,
          set: pm.set
        } : pm[im], Om);
        if ("accessor" === Dm) {
          if (void 0 === qm) continue;
          if (null === qm || "object" !== typeof qm) throw new TypeError("Object expected");
          (wm = xm(qm.get)) && (pm.get = wm), (wm = xm(qm.set)) && (pm.set = wm), (wm = xm(qm.init)) && Am.unshift(wm)
        } else(wm = xm(qm)) && ("field" === Dm ? Am.unshift(wm) : pm[im] = wm)
      }
      Rm && Object.defineProperty(Rm, hm.name, pm), Em = !0
    }

    function Am(mm, Tm, fm) {
      for (var hm = arguments.length > 2, Am = 0; Am < Tm.length; Am++) fm = hm ? Tm[Am].call(mm, fm) : Tm[Am].call(mm);
      return hm ? fm : void 0
    }

    function am(mm, Tm, fm) {
      return "symbol" === typeof Tm && (Tm = Tm.description ? "[".concat(Tm.description, "]") : ""), Object.defineProperty(mm, "name", {
        configurable: !0,
        value: fm ? "".concat(fm, " ", Tm) : Tm
      })
    }
    Object.create;
    Object.create;

    function xm(mm, Tm, fm, hm) {
      if ("a" === fm && !hm) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof Tm ? mm !== Tm || !hm : !Tm.has(mm)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === fm ? hm : "a" === fm ? hm.call(mm) : hm ? hm.value : Tm.get(mm)
    }

    function wm(mm, Tm, fm, hm, Am) {
      if ("m" === hm) throw new TypeError("Private method is not writable");
      if ("a" === hm && !Am) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof Tm ? mm !== Tm || !Am : !Tm.has(mm)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === hm ? Am.call(mm, fm) : Am ? Am.value = fm : Tm.set(mm, fm), fm
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);