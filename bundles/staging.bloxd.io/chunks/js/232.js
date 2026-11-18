export const id = 232;
export const ids = [232];
export const modules = {
  38897: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB,
      h: () => uB,
      k: () => gB,
      m: () => YB
    });
    var VB = dB(38684),
      yB = dB(37651),
      pB = dB(38819),
      lB = dB(38726);
    class JB {
      get WdB() {
        return this._isDisposed
      }
      constructor(BB, TB, dB) {
        let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          JB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          YB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          gB = arguments.length > 7 ? arguments[7] : void 0,
          oB = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, lB.b)(), BB && BB.jU ? this._engine = BB.jU().PD() : this._engine = BB, this._updatable = dB, this._instanced = JB, this._divisor = gB || 1, this._label = oB, TB instanceof VB.b ? (this._data = null, this._buffer = TB) : (this._data = TB, this._buffer = null), this.byteStride = YB ? yB : yB * Float32Array.BYTES_PER_ELEMENT, pB || this.create()
      }
      createVertexBuffer(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          lB = arguments.length > 6 ? arguments[6] : void 0;
        const JB = pB ? TB : TB * Float32Array.BYTES_PER_ELEMENT,
          gB = VB ? pB ? VB : VB * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new YB(this._engine, this, BB, this._updatable, !0, gB, void 0 === yB ? this._instanced : yB, JB, dB, void 0, void 0, !0, this._divisor || lB)
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !BB && this._buffer || (BB = BB || this._data, BB && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB), this._data = BB) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(BB, this._label), this._data = BB) : this._buffer = this._engine.createVertexBuffer(BB, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.Kk > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.Kk, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.Kk, void 0, this._label));
          yB.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(BB) {
        this.create(BB)
      }
      updateDirectly(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB, VB ? TB : TB * Float32Array.BYTES_PER_ELEMENT, dB ? dB * this.byteStride : void 0), this._data = 0 === TB && void 0 === dB ? BB : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class YB {
      get WdB() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(BB) {
        const TB = 0 != BB;
        this._instanceDivisor = BB, TB !== this._instanced && (this._instanced = TB, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const BB = this.getData();
        return BB ? Array.isArray(BB) ? BB.length / (this.byteStride / 4) - this.byteOffset / 4 : (BB.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(BB, TB, dB, VB, yB, lB, kB, LB, OB, DB) {
        let uB, HB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          EB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          vB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          mB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = BB, "object" === typeof VB && null !== VB ? (uB = VB.updatable ?? !1, yB = VB.postponeInternalCreation, lB = VB.stride, kB = VB.instanced, LB = VB.offset, OB = VB.size, DB = VB.type, HB = VB.normalized ?? !1, EB = VB.useBytes ?? !1, vB = VB.divisor ?? 1, mB = VB.takeBufferOwnership ?? !1, this._label = VB.label) : uB = !!VB, TB instanceof JB ? (this._buffer = TB, this._ownsBuffer = mB) : (this._buffer = new JB(BB, TB, uB, lB, yB, kB, EB, vB, this._label), this._ownsBuffer = !0), this.uniqueId = YB._Counter++, this._kind = dB, void 0 === DB) {
          const BB = this.getData();
          this.type = BB ? oB(BB) : YB.FLOAT
        } else this.type = DB;
        const iB = (0, pB.p)(this.type);
        EB ? (this._size = OB || (lB ? lB / iB : gB(dB)), this.byteStride = lB || this._buffer.byteStride || this._size * iB, this.byteOffset = LB || 0) : (this._size = OB || lB || gB(dB), this.byteStride = lB ? lB * iB : this._buffer.byteStride || this._size * iB, this.byteOffset = (LB || 0) * iB), this.normalized = HB, this._instanced = void 0 !== kB && kB, this._instanceDivisor = kB ? vB : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(BB) {
        switch (BB) {
          case YB.BYTE:
            return 0;
          case YB.UNSIGNED_BYTE:
            return 1;
          case YB.SHORT:
            return 2;
          case YB.UNSIGNED_SHORT:
            return 3;
          case YB.INT:
            return 4;
          case YB.UNSIGNED_INT:
            return 5;
          case YB.FLOAT:
            return 6;
          case YB.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${BB}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (YB._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(BB, TB) {
        const dB = this.getData();
        return dB ? (0, pB.l)(dB, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, BB, TB) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, pB.p)(this.type)
      }
      KdB() {
        return this.byteOffset / (0, pB.p)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, pB.p)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(BB) {
        this._buffer.create(BB), this._alignBuffer()
      }
      update(BB) {
        this._buffer.update(BB), this._alignBuffer()
      }
      updateDirectly(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(BB, TB, void 0, dB), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(BB, TB) {
        (0, pB.g)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, BB, this.normalized, ((BB, dB) => {
          for (let VB = 0; VB < this._size; VB++) TB(BB[VB], dB + VB)
        }))
      }
      _alignBuffer() {}
    }

    function gB(BB) {
      switch (BB) {
        case YB.UVKind:
        case YB.UV2Kind:
        case YB.UV3Kind:
        case YB.UV4Kind:
        case YB.UV5Kind:
        case YB.UV6Kind:
          return 2;
        case YB.NormalKind:
        case YB.PositionKind:
          return 3;
        case YB.ColorKind:
        case YB.ColorInstanceKind:
        case YB.MatricesIndicesKind:
        case YB.MatricesIndicesExtraKind:
        case YB.MatricesWeightsKind:
        case YB.MatricesWeightsExtraKind:
        case YB.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + BB + "'")
      }
    }

    function oB(BB) {
      return BB instanceof Int8Array ? YB.BYTE : BB instanceof Uint8Array ? YB.UNSIGNED_BYTE : BB instanceof Int16Array ? YB.SHORT : BB instanceof Uint16Array ? YB.UNSIGNED_SHORT : BB instanceof Int32Array ? YB.INT : BB instanceof Uint32Array ? YB.UNSIGNED_INT : YB.FLOAT
    }

    function kB(BB) {
      return (0, pB.p)(BB)
    }

    function LB(BB, TB, dB, VB, yB, lB, JB, YB) {
      (0, pB.g)(BB, TB, dB, VB, yB, lB, JB, ((BB, TB) => {
        for (let dB = 0; dB < VB; dB++) YB(BB[dB], TB + dB)
      }))
    }

    function OB(BB, TB, dB, VB, yB, lB, JB, YB) {
      return (0, pB.l)(BB, TB, dB, VB, yB, lB, JB, YB)
    }
    YB._Counter = 0, YB.BYTE = 5120, YB.UNSIGNED_BYTE = 5121, YB.SHORT = 5122, YB.UNSIGNED_SHORT = 5123, YB.INT = 5124, YB.UNSIGNED_INT = 5125, YB.FLOAT = 5126, YB.HALF_FLOAT = 5131, YB.PositionKind = "position", YB.NormalKind = "normal", YB.TangentKind = "tangent", YB.UVKind = "uv", YB.UV2Kind = "uv2", YB.UV3Kind = "uv3", YB.UV4Kind = "uv4", YB.UV5Kind = "uv5", YB.UV6Kind = "uv6", YB.ColorKind = "color", YB.ColorInstanceKind = "instanceColor", YB.MatricesIndicesKind = "matricesIndices", YB.MatricesWeightsKind = "matricesWeights", YB.MatricesIndicesExtraKind = "matricesIndicesExtra", YB.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let DB = !1;

    function uB() {
      DB || (DB = !0, YB.DeduceStride = gB, YB.GetDataType = oB, YB.GetTypeByteLength = kB, YB.ForEach = LB, YB.GetFloatData = OB)
    }
  },
  38684: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.Kk = 0, this.is32Bits = !1, this.uniqueId = VB._Counter++
      }
    }
    VB._Counter = 0
  },
  38889: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(36126),
      yB = dB(38897);
    class pB {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || TB && !this.pickedMesh.isVerticesDataPresent(yB.m.NormalKind)) return null;
        let dB, pB = this.pickedMesh.elB();
        0 === pB?.length && (pB = null);
        const lB = VB.j.RD[0],
          JB = VB.j.RD[1],
          YB = VB.j.RD[2];
        if (TB) {
          const BB = this.pickedMesh.getVerticesData(yB.m.NormalKind);
          let TB = pB ? VB.p.FromArrayToRef(BB, 3 * pB[3 * this.faceId], lB) : lB.YBB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            gB = pB ? VB.p.FromArrayToRef(BB, 3 * pB[3 * this.faceId + 1], JB) : JB.YBB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            oB = pB ? VB.p.FromArrayToRef(BB, 3 * pB[3 * this.faceId + 2], YB) : YB.YBB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]);
          TB = TB.scale(this.bu), gB = gB.scale(this.bv), oB = oB.scale(1 - this.bu - this.bv), dB = new VB.p(TB.x + gB.x + oB.x, TB.y + gB.y + oB.y, TB.z + gB.z + oB.z)
        } else {
          const BB = this.pickedMesh.getVerticesData(yB.m.PositionKind),
            TB = pB ? VB.p.FromArrayToRef(BB, 3 * pB[3 * this.faceId], lB) : lB.YBB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            gB = pB ? VB.p.FromArrayToRef(BB, 3 * pB[3 * this.faceId + 1], JB) : JB.YBB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            oB = pB ? VB.p.FromArrayToRef(BB, 3 * pB[3 * this.faceId + 2], YB) : YB.YBB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]),
            kB = TB.subtract(gB),
            LB = oB.subtract(gB);
          dB = VB.p.Cross(kB, LB)
        }
        const gB = (BB, TB) => {
          if (-1 !== this.thinInstanceIndex) {
            const dB = BB._thinInstanceDataStorage.matrixData,
              yB = this.thinInstanceIndex << 4;
            if (dB && dB.length > yB) {
              const BB = VB.j.Matrix[0];
              VB.b.FromArrayToRef(dB, yB, BB), VB.p.TransformNormalToRef(TB, BB, TB)
            }
          }
          let dB = BB.getWorldMatrix();
          BB.nonUniformScaling && (VB.j.Matrix[0].bdB(dB), dB = VB.j.Matrix[0], dB.setTranslationFromFloats(0, 0, 0), dB.invert(), dB.transposeToRef(VB.j.Matrix[1]), dB = VB.j.Matrix[1]), VB.p.TransformNormalToRef(TB, dB, TB)
        };
        if (BB && gB(this.pickedMesh, dB), this.ray) {
          const TB = VB.j.RD[0].bdB(dB);
          BB || gB(this.pickedMesh, TB), VB.p.Dot(TB, this.ray.direction) > 0 && dB.negateInPlace()
        }
        return dB.normalize(), dB
      }
      getTextureCoordinates() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yB.m.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(BB)) return null;
        const TB = this.pickedMesh.elB();
        if (!TB) return null;
        const dB = this.pickedMesh.getVerticesData(BB);
        if (!dB) return null;
        let pB = VB.l.FromArray(dB, 2 * TB[3 * this.faceId]),
          lB = VB.l.FromArray(dB, 2 * TB[3 * this.faceId + 1]),
          JB = VB.l.FromArray(dB, 2 * TB[3 * this.faceId + 2]);
        return pB = pB.scale(this.bu), lB = lB.scale(this.bv), JB = JB.scale(1 - this.bu - this.bv), new VB.l(pB.x + lB.x + JB.x, pB.y + lB.y + JB.y)
      }
    }
  },
  38726: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(38584);
    let yB = !1;

    function pB() {
      yB || (yB = !0, VB.ThinEngine.prototype.updateDynamicIndexBuffer = function(BB, TB) {
        let dB;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(BB), dB = BB.is32Bits ? TB instanceof Uint32Array ? TB : new Uint32Array(TB) : TB instanceof Uint16Array ? TB : new Uint16Array(TB), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, dB, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, VB.ThinEngine.prototype.updateDynamicVertexBuffer = function(BB, TB, dB, VB) {
        this.bindArrayBuffer(BB), void 0 === dB && (dB = 0);
        const yB = TB.byteLength || TB.length;
        void 0 === VB || VB >= yB && 0 === dB ? TB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, dB, new Float32Array(TB)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, dB, TB) : TB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, dB, new Float32Array(TB).subarray(0, VB / 4)) : (TB = ArrayBuffer.isView(TB) ? new Uint8Array(TB.buffer, TB.byteOffset, VB) : new Uint8Array(TB, 0, VB), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, dB, TB)), this._resetVertexBufferBinding()
      })
    }
  },
  38698: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = TB, !BB && (BB = TB.createTexture(), !BB)) throw new Error("Unable to create webGL texture");
        this.set(BB)
      }
      setUsage() {}
      set(BB) {
        this._webGLTexture = BB
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(BB) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(BB)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const BB of this._MSAARenderBuffers) this._context.deleteRenderbuffer(BB);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[BB] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  38652: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => vB
    });
    var VB = dB(36150),
      yB = dB(38591),
      pB = dB(36148),
      lB = dB(37651),
      JB = dB(36140),
      YB = dB(38657);
    class gB {
      constructor() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, BB && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(BB) {
        this._zOffset !== BB && (this._zOffset = BB, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(BB) {
        this._zOffsetUnits !== BB && (this._zOffsetUnits = BB, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(BB) {
        this._cullFace !== BB && (this._cullFace = BB, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(BB) {
        this._cull !== BB && (this._cull = BB, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(BB) {
        this._depthFunc !== BB && (this._depthFunc = BB, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(BB) {
        this._depthMask !== BB && (this._depthMask = BB, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(BB) {
        this._depthTest !== BB && (this._depthTest = BB, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(BB) {
        this._frontFace !== BB && (this._frontFace = BB, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(BB) {
        this.isDirty && (this._isCullDirty && (this.cull ? BB.enable(BB.CULL_FACE) : BB.disable(BB.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (BB.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (BB.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? BB.enable(BB.DEPTH_TEST) : BB.disable(BB.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (BB.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (BB.enable(BB.POLYGON_OFFSET_FILL), BB.polygonOffset(this.zOffset, this.zOffsetUnits)) : BB.disable(BB.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (BB.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class oB {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(BB) {
        this._func !== BB && (this._func = BB, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(BB) {
        this._backFunc !== BB && (this._backFunc = BB, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(BB) {
        this._funcRef !== BB && (this._funcRef = BB, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(BB) {
        this._funcMask !== BB && (this._funcMask = BB, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(BB) {
        this._opStencilFail !== BB && (this._opStencilFail = BB, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(BB) {
        this._opDepthFail !== BB && (this._opDepthFail = BB, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(BB) {
        this._opStencilDepthPass !== BB && (this._opStencilDepthPass = BB, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(BB) {
        this._backOpStencilFail !== BB && (this._backOpStencilFail = BB, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(BB) {
        this._backOpDepthFail !== BB && (this._backOpDepthFail = BB, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(BB) {
        this._backOpStencilDepthPass !== BB && (this._backOpStencilDepthPass = BB, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(BB) {
        this._mask !== BB && (this._mask = BB, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(BB) {
        this._enabled !== BB && (this._enabled = BB, this._isStencilTestDirty = !0)
      }
      constructor() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, BB && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(BB) {
        if (!BB) return;
        const TB = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = TB ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = TB ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = TB ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = TB ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = TB ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = TB ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = TB ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = TB ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = TB ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = TB ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = TB ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = TB ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? BB.enable(BB.STENCIL_TEST) : BB.disable(BB.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (BB.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (BB.stencilFuncSeparate(BB.FRONT, this.func, this.funcRef, this.funcMask), BB.stencilFuncSeparate(BB.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (BB.stencilOpSeparate(BB.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), BB.stencilOpSeparate(BB.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class kB {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = kB.ALWAYS, this.opStencilFail = kB.KEEP, this.opDepthFail = kB.KEEP, this.opStencilDepthPass = kB.REPLACE, this.backFunc = kB.ALWAYS, this.backOpStencilFail = kB.KEEP, this.backOpDepthFail = kB.KEEP, this.backOpStencilDepthPass = kB.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(BB) {
        this.func = BB
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(BB) {
        this.backFunc = BB
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(BB) {
        this.funcRef = BB
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(BB) {
        this.funcMask = BB
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(BB) {
        this.opStencilFail = BB
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(BB) {
        this.opDepthFail = BB
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(BB) {
        this.opStencilDepthPass = BB
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(BB) {
        this.backOpStencilFail = BB
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(BB) {
        this.backOpDepthFail = BB
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(BB) {
        this.backOpStencilDepthPass = BB
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(BB) {
        this.mask = BB
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(BB) {
        this.enabled = BB
      }
    }
    kB.ALWAYS = 519, kB.KEEP = 7680, kB.REPLACE = 7681;
    var LB = dB(38665),
      OB = dB(38629),
      DB = dB(38569),
      uB = dB(38606),
      HB = dB(38620);

    function EB(BB, TB) {
      if (TB) {
        const {
          requestAnimationFrame: dB
        } = TB;
        if ("function" === typeof dB) return dB(BB)
      }
      if ((0, uB.h)()) {
        const {
          requestAnimationFrame: dB
        } = TB || window;
        if ("function" === typeof dB) return dB(BB)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(BB);
      return setTimeout(BB, 16)
    }
    class vB {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(BB) {
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
      get fVB() {
        return this._useReverseDepthBuffer
      }
      set fVB(BB) {
        BB !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = BB, this._depthCullingState.depthFunc = BB ? 518 : 515)
      }
      setColorWrite(BB) {
        BB !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = BB)
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
      _getGlobalDefines(BB) {
        if (BB) return this.isNDCHalfZRange ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, this.fVB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
        {
          let BB = "";
          return this.isNDCHalfZRange && (BB += "#define IS_NDC_HALF_ZRANGE"), this.fVB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
        }
      }
      _rebuildInternalTextures() {
        const BB = this._internalTexturesCache.slice();
        for (const TB of BB) TB._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const BB = this._renderTargetWrapperCache.slice();
        for (const TB of BB) TB.textures?.some((BB => 15 === BB.source)) || TB._rebuild()
      }
      _rebuildEffects() {
        for (const BB in this._compiledEffects) {
          const TB = this._compiledEffects[BB];
          TB._pipelineContext = null, TB._prepareEffect()
        }
        yB.e.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        lB.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(BB) {
        setTimeout((() => {
          this._clearEmptyResources();
          const TB = this._depthCullingState.depthTest,
            dB = this._depthCullingState.depthFunc,
            VB = this._depthCullingState.depthMask,
            yB = this._stencilState.stencilTest;
          BB(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = TB, this._depthCullingState.depthFunc = dB, this._depthCullingState.depthMask = VB, this._stencilState.stencilTest = yB, this._flagContextRestored()
        }), 0)
      }
      get WdB() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(BB) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(BB) {}
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
          const BB = new Uint8Array(4),
            TB = [BB, BB, BB, BB, BB, BB];
          this._emptyCubeTexture = this.createRawCubeTexture(TB, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(BB) {
        this._framebufferDimensionsObject = BB
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(BB) {
        if (!BB) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const TB = this._activeRenderLoops.indexOf(BB);
        TB >= 0 && (this._activeRenderLoops.splice(TB, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: BB
            } = this.customAnimationFrameRequester;
            BB && BB(this.customAnimationFrameRequester.aD), delete this.customAnimationFrameRequester.aD
          }
        } else if (0 !== this._frameHandler) {
          const BB = this._frameHandler;
          if (this._frameHandler = 0, (0, uB.h)()) {
            const {
              cancelAnimationFrame: TB
            } = this.getHostWindow() || window;
            if ("function" === typeof TB) return TB(BB)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(BB);
          return clearTimeout(BB)
        }
      }
      Rm() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Zm() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(BB) {
        this._maxFPS = BB, void 0 !== BB && (this._minFrameTime = BB <= 0 ? Number.MAX_VALUE : 1e3 / BB)
      }
      _isOverFrameTime(BB) {
        if (!BB || void 0 === this._maxFPS) return !1;
        const TB = BB - this._lastFrameTime;
        return this._lastFrameTime = BB, this._renderAccumulator += TB, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(BB) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(BB)) {
          let BB = !0;
          (this.WdB || !this.renderEvenInBackground && this._windowIsBackground) && (BB = !1), BB && (this.Rm(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Zm())
        }
      }
      _renderLoop(BB) {
        this._processFrame(BB), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let BB = 0; BB < this._activeRenderLoops.length; BB++) {
          (0, this._activeRenderLoops[BB])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(BB, TB) {
        return EB(BB, TB)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.aD = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.aD) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(BB) {
        -1 === this._activeRenderLoops.indexOf(BB) && (this._activeRenderLoops.push(BB), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(BB) {
        this._depthCullingState.depthTest = BB
      }
      setZOffset(BB) {
        this._depthCullingState.zOffset = this.fVB ? -BB : BB
      }
      getZOffset() {
        const BB = this._depthCullingState.zOffset;
        return this.fVB ? -BB : BB
      }
      setZOffsetUnits(BB) {
        this._depthCullingState.zOffsetUnits = this.fVB ? -BB : BB
      }
      getZOffsetUnits() {
        const BB = this._depthCullingState.zOffsetUnits;
        return this.fVB ? -BB : BB
      }
      getHostWindow() {
        return (0, uB.h)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(BB) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const BB of this.scenes) BB._rebuildTextures();
        for (const BB of this._virtualScenes) BB._rebuildTextures()
      }
      _releaseRenderTargetWrapper(BB) {
        const TB = this._renderTargetWrapperCache.indexOf(BB); - 1 !== TB && this._renderTargetWrapperCache.splice(TB, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(BB, TB, dB) {
        const VB = TB || this.getRenderWidth(),
          yB = dB || this.getRenderHeight(),
          pB = BB.x || 0,
          lB = BB.y || 0;
        this._cachedViewport = BB, this._viewport(pB * VB, lB * yB, VB * BB.width, yB * BB.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(BB) {
        return new Path2D(BB)
      }
      get description() {
        let BB = this.name + this.version;
        return this._caps.parallelShaderCompile && (BB += " - Parallel shader compilation"), BB
      }
      _createTextureBase(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          YB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          gB = arguments.length > 7 ? arguments[7] : void 0,
          oB = arguments.length > 8 ? arguments[8] : void 0,
          kB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          LB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          OB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          uB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          HB = arguments.length > 13 ? arguments[13] : void 0,
          EB = arguments.length > 14 ? arguments[14] : void 0,
          mB = arguments.length > 15 ? arguments[15] : void 0;
        const iB = "data:" === (BB = BB || "").substring(0, 5),
          NB = "blob:" === BB.substring(0, 5),
          tB = iB && -1 !== BB.indexOf(";base64,"),
          fB = LB || new DB.e(this, 1);
        fB !== LB && (fB.label = BB.substring(0, 60));
        const sB = BB;
        !this._transformTextureUrl || tB || LB || kB || (BB = this._transformTextureUrl(BB)), sB !== BB && (fB._originalUrl = sB);
        const MB = BB.lastIndexOf(".");
        let zB = uB || (MB > -1 ? BB.substring(MB).toLowerCase() : "");
        zB.indexOf("?") > -1 && (zB = zB.split("?")[0]);
        const wB = vB.GetCompatibleTextureLoader(zB, HB);
        VB && VB.addPendingData(fB), fB.url = BB, fB.generateMipMaps = !TB, fB.samplingMode = yB, fB.invertY = dB, fB._useSRGBBuffer = this._getUseSRGBBuffer(!!mB, TB), this._doNotHandleContextLost || (fB._buffer = kB);
        let UB = null;
        JB && !LB && (UB = fB.onLoadedObservable.add(JB)), LB || this._internalTexturesCache.push(fB);
        const FB = (dB, LB) => {
          VB && VB.removePendingData(fB), BB === sB ? (UB && fB.onLoadedObservable.remove(UB), pB.c.UseFallbackTexture && BB !== pB.c.FallbackTexture && this._createTextureBase(pB.c.FallbackTexture, TB, fB.invertY, VB, yB, null, YB, gB, oB, kB, fB), dB = (dB || "Unknown error") + (pB.c.UseFallbackTexture ? " - Fallback texture was used" : ""), fB.onErrorObservable.notifyObservers({
            message: dB,
            exception: LB
          }), YB && YB(dB, LB)) : (lB.b.Warn(`Failed to load ${BB}, falling back to ${sB}`), this._createTextureBase(sB, TB, fB.invertY, VB, yB, JB, YB, gB, oB, kB, fB, OB, uB, HB, EB, mB))
        };
        if (wB) {
          const TB = async BB => {
            (await wB).loadData(BB, fB, ((BB, TB, dB, pB, lB, JB) => {
              JB ? FB("TextureLoader failed to load data") : gB(fB, zB, VB, {
                width: BB,
                height: TB
              }, fB.invertY, !dB, pB, (() => (lB(), !1)), yB)
            }), EB)
          };
          if (kB) {
            const BB = async BB => {
              try {
                await TB(BB)
              } catch (dB) {
                FB("Failed to parse texture data", dB)
              }
            };
            kB instanceof ArrayBuffer ? BB(new Uint8Array(kB)) : ArrayBuffer.isView(kB) ? BB(kB) : YB && YB("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(BB, (async BB => {
            try {
              await TB(new Uint8Array(BB))
            } catch (dB) {
              FB("Failed to parse texture data", dB)
            }
          }), void 0, VB ? VB.offlineProvider : void 0, !0, ((BB, TB) => {
            FB("Unable to load " + (BB && BB.responseURL, TB))
          }))
        } else {
          const dB = BB => {
            NB && !this._doNotHandleContextLost && (fB._buffer = BB), gB(fB, zB, VB, BB, fB.invertY, TB, !1, oB, yB)
          };
          !iB || tB ? kB && ("string" === typeof kB.decoding || kB.close) ? dB(kB) : vB._FileToolsLoadImage(BB || "", dB, FB, VB ? VB.offlineProvider : null, HB, fB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof kB || kB instanceof ArrayBuffer || ArrayBuffer.isView(kB) || kB instanceof Blob ? vB._FileToolsLoadImage(kB, dB, FB, VB ? VB.offlineProvider : null, HB, fB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : kB && dB(kB)
        }
        return fB
      }
      _rebuildBuffers() {
        for (const BB of this._uniformBuffers) BB._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, uB.c)() ? document : null
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
        for (const BB in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, BB) && (this._boundTexturesCache[BB] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
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
      setHardwareScalingLevel(BB) {
        this._hardwareScalingLevel = BB, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(BB) {
        this._doNotHandleContextLost = BB
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(BB, TB, dB) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new gB, this._stencilStateComposer = new oB, this._stencilState = new kB, this._alphaState = new LB.b(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new VB.e, this.onCanvasFocusObservable = new VB.e, this.onNewSceneAddedObservable = new VB.e, this.onResizeObservable = new VB.e, this.onCanvasPointerOutObservable = new VB.e, this.onEffectErrorObservable = new VB.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new VB.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = BB => this._renderLoop(BB), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new VB.e, this.onAfterShaderCompilationObservable = new VB.e, this.onBeginFrameObservable = new VB.e, this.onEndFrameObservable = new VB.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new VB.e, this.onContextRestoredObservable = new VB.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.lF = new VB.e, this.onReleaseEffectsObservable = new VB.e, pB.c.Instances.push(this), this.startTime = YB.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, JB.c.SetMatrixPrecision(!!TB.useLargeWorldRendering || !!TB.useHighPrecisionMatrix), (0, uB.f)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), TB.antialias = BB ?? TB.antialias, TB.deterministicLockstep = TB.deterministicLockstep ?? !1, TB.lockstepMaxSteps = TB.lockstepMaxSteps ?? 4, TB.timeStep = TB.timeStep ?? 1 / 60, TB.stencil = TB.stencil ?? !0, this._audioContext = TB.audioEngineOptions?.audioContext ?? null, this._audioDestination = TB.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = TB.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!TB.doNotHandleContextLost, this._isStencilEnable = !!TB.stencil, this.useExactSrgbConversions = TB.useExactSrgbConversions ?? !1, this.canvasTabIndex = TB.canvasTabIndex ?? this.canvasTabIndex;
        const yB = (0, uB.h)() && window.devicePixelRatio || 1,
          lB = TB.limitDeviceRatio || yB;
        dB = dB || TB.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = dB, this._hardwareScalingLevel = dB ? 1 / Math.min(lB, yB) : 1, this._lastDevicePixelRatio = yB, this._creationOptions = TB
      }
      resize() {
        let BB, TB, dB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const BB = (0, uB.h)() && window.devicePixelRatio || 1,
            TB = this._lastDevicePixelRatio / BB;
          this._lastDevicePixelRatio = BB, this._hardwareScalingLevel *= TB
        }
        if ((0, uB.h)() && (0, uB.c)())
          if (this._renderingCanvas) {
            const dB = this._renderingCanvas.getBoundingClientRect?.();
            BB = this._renderingCanvas.clientWidth || dB?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, TB = this._renderingCanvas.clientHeight || dB?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else BB = window.innerWidth, TB = window.innerHeight;
        else BB = this._renderingCanvas ? this._renderingCanvas.width : 100, TB = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(BB / this._hardwareScalingLevel, TB / this._hardwareScalingLevel, dB)
      }
      setSize(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (BB |= 0, TB |= 0, !dB && this._renderingCanvas.width === BB && this._renderingCanvas.height === TB) return !1;
        if (this._renderingCanvas.width = BB, this._renderingCanvas.height = TB, this.scenes) {
          for (let BB = 0; BB < this.scenes.length; BB++) {
            const TB = this.scenes[BB];
            for (let BB = 0; BB < TB.cameras.length; BB++) {
              TB.cameras[BB]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB) {
        throw (0, OB.i)("engine.rawTexture")
      }
      createRawCubeTexture(BB, TB, dB, VB, yB, pB, lB, JB) {
        throw (0, OB.i)("engine.rawTexture")
      }
      createRawTexture3D(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
        throw (0, OB.i)("engine.rawTexture")
      }
      createRawTexture2DArray(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB) {
        throw (0, OB.i)("engine.rawTexture")
      }
      _sharedInit(BB) {
        this._renderingCanvas = BB
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const BB = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== BB.indexOf("Mobile") || -1 !== BB.indexOf("Mac") && (0, uB.c)() && "ontouchend" in document
        }, this._checkForMobile(), (0, uB.h)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(BB) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(BB, !1)
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
      _createImageBitmapFromSource(BB, TB) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(BB, TB) {
        return createImageBitmap(BB, TB)
      }
      resizeImageBitmap(BB, TB, dB) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(BB) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(BB, TB) {
        if ("undefined" === typeof document) return new OffscreenCanvas(BB, TB);
        const dB = document.createElement("canvas");
        return dB.width = BB, dB.height = TB, dB
      }
      createCanvas(BB, TB) {
        return vB._CreateCanvas(BB, TB)
      }
      static _FileToolsLoadImage(BB, TB, dB, VB, yB, pB, lB) {
        if (!HB.d.loadImage) throw (0, OB.i)("FileTools");
        return HB.d.loadImage(BB, TB, dB, VB, yB, pB, lB)
      }
      _loadFile(BB, TB, dB, VB, yB, pB) {
        const lB = (0, HB.l)(BB, TB, dB, VB, yB, pB);
        return this._activeRequests.push(lB), lB.onCompleteObservable.add((() => {
          const BB = this._activeRequests.indexOf(lB); - 1 !== BB && this._activeRequests.splice(BB, 1)
        })), lB
      }
      static _FileToolsLoadFile(BB, TB, dB, VB, yB, pB) {
        if (HB.d.loadFile) return HB.d.loadFile(BB, TB, dB, VB, yB, pB);
        throw (0, OB.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), yB.e.ResetCache();
        for (const TB of this._activeRequests) TB.abort();
        this._boundRenderFunction = null, this.lF.notifyObservers(this), this.lF.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, uB.h)() && window.removeEventListener("resize", this._checkForMobile);
        const BB = pB.c.Instances.indexOf(this);
        BB >= 0 && pB.c.Instances.splice(BB, 1), pB.c.Instances.length || (pB.c.OnEnginesDisposedObservable.notifyObservers(this), pB.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(BB) {
        throw (0, OB.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(BB, TB) {
        for (let dB = 0; dB < pB.c.Instances.length; dB++) {
          const VB = pB.c.Instances[dB];
          for (let dB = 0; dB < VB.scenes.length; dB++) VB.scenes[dB].markAllMaterialsAsDirty(BB, TB)
        }
      }
      static GetCompatibleTextureLoader(BB, TB) {
        return null
      }
    }
    vB._RenderPassIdCounter = 0, vB._RescalePostProcessFactory = null, vB.CollisionsEpsilon = .001, vB.QueueNewFrame = EB
  },
  38595: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.ShadersRepository : VB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.ShadersStore : VB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? VB.IncludesShadersStore : VB.IncludesShadersStoreWGSL
      }
    }
    VB.ShadersRepository = "src/Shaders/", VB.ShadersStore = {}, VB.IncludesShadersStore = {}, VB.ShadersRepositoryWGSL = "src/ShadersWGSL/", VB.ShadersStoreWGSL = {}, VB.IncludesShadersStoreWGSL = {}
  },
  38614: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      c: () => mB,
      f: () => DB,
      j: () => OB,
      k: () => uB,
      m: () => vB,
      p: () => kB,
      s: () => gB,
      t: () => oB,
      x: () => YB,
      A: () => JB
    });
    class VB {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(BB) {
        BB && this.program && BB(this.program)
      }
      setEngine(BB) {
        this.engine = BB
      }
      _fillEffectInformation(BB, TB, dB, VB, yB, pB, lB, JB) {
        const YB = this.engine;
        if (YB.supportsUniformBuffers)
          for (const oB in TB) BB.bindUniformBlock(oB, TB[oB]);
        let gB;
        for (this.engine.getUniforms(this, dB).forEach(((BB, TB) => {
            VB[dB[TB]] = BB
          })), this._uniforms = VB, gB = 0; gB < yB.length; gB++) {
          null == BB.getUniform(yB[gB]) && (yB.splice(gB, 1), gB--)
        }
        yB.forEach(((BB, TB) => {
          pB[BB] = TB
        }));
        for (const oB of YB.getAttributes(this, lB)) JB.push(oB)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(BB, TB) {
        const dB = this._valueCache[BB],
          VB = TB.updateFlag;
        if (void 0 !== dB && dB === VB) return !1;
        const yB = TB.FVB();
        let pB = this._matrixValueCache[BB];
        if (void 0 !== dB && null !== dB && void 0 !== pB) {
          let TB = !0;
          for (let BB = 15; BB >= 0; BB--)
            if (pB[BB] !== yB[BB]) {
              TB = !1;
              break
            } if (TB) return this._valueCache[BB] = VB, !1
        }
        return void 0 === pB && (pB = this._matrixValueCache[BB] = new Float32Array(16)), pB.set(yB), this._valueCache[BB] = VB, !0
      }
      _cacheFloat2(BB, TB, dB) {
        let VB = this._valueCache[BB];
        if (!VB || 2 !== VB.length) return VB = [TB, dB], this._valueCache[BB] = VB, !0;
        let yB = !1;
        return VB[0] !== TB && (VB[0] = TB, yB = !0), VB[1] !== dB && (VB[1] = dB, yB = !0), yB
      }
      _cacheFloat3(BB, TB, dB, VB) {
        let yB = this._valueCache[BB];
        if (!yB || 3 !== yB.length) return yB = [TB, dB, VB], this._valueCache[BB] = yB, !0;
        let pB = !1;
        return yB[0] !== TB && (yB[0] = TB, pB = !0), yB[1] !== dB && (yB[1] = dB, pB = !0), yB[2] !== VB && (yB[2] = VB, pB = !0), pB
      }
      _cacheFloat4(BB, TB, dB, VB, yB) {
        let pB = this._valueCache[BB];
        if (!pB || 4 !== pB.length) return pB = [TB, dB, VB, yB], this._valueCache[BB] = pB, !0;
        let lB = !1;
        return pB[0] !== TB && (pB[0] = TB, lB = !0), pB[1] !== dB && (pB[1] = dB, lB = !0), pB[2] !== VB && (pB[2] = VB, lB = !0), pB[3] !== yB && (pB[3] = yB, lB = !0), lB
      }
      setInt(BB, TB) {
        const dB = this._valueCache[BB];
        void 0 !== dB && dB === TB || this.engine.setInt(this._uniforms[BB], TB) && (this._valueCache[BB] = TB)
      }
      setInt2(BB, TB, dB) {
        this._cacheFloat2(BB, TB, dB) && (this.engine.setInt2(this._uniforms[BB], TB, dB) || (this._valueCache[BB] = null))
      }
      setInt3(BB, TB, dB, VB) {
        this._cacheFloat3(BB, TB, dB, VB) && (this.engine.setInt3(this._uniforms[BB], TB, dB, VB) || (this._valueCache[BB] = null))
      }
      setInt4(BB, TB, dB, VB, yB) {
        this._cacheFloat4(BB, TB, dB, VB, yB) && (this.engine.setInt4(this._uniforms[BB], TB, dB, VB, yB) || (this._valueCache[BB] = null))
      }
      setIntArray(BB, TB) {
        this._valueCache[BB] = null, this.engine.setIntArray(this._uniforms[BB], TB)
      }
      setIntArray2(BB, TB) {
        this._valueCache[BB] = null, this.engine.setIntArray2(this._uniforms[BB], TB)
      }
      setIntArray3(BB, TB) {
        this._valueCache[BB] = null, this.engine.setIntArray3(this._uniforms[BB], TB)
      }
      setIntArray4(BB, TB) {
        this._valueCache[BB] = null, this.engine.setIntArray4(this._uniforms[BB], TB)
      }
      setUInt(BB, TB) {
        const dB = this._valueCache[BB];
        void 0 !== dB && dB === TB || this.engine.setUInt(this._uniforms[BB], TB) && (this._valueCache[BB] = TB)
      }
      setUInt2(BB, TB, dB) {
        this._cacheFloat2(BB, TB, dB) && (this.engine.setUInt2(this._uniforms[BB], TB, dB) || (this._valueCache[BB] = null))
      }
      setUInt3(BB, TB, dB, VB) {
        this._cacheFloat3(BB, TB, dB, VB) && (this.engine.setUInt3(this._uniforms[BB], TB, dB, VB) || (this._valueCache[BB] = null))
      }
      setUInt4(BB, TB, dB, VB, yB) {
        this._cacheFloat4(BB, TB, dB, VB, yB) && (this.engine.setUInt4(this._uniforms[BB], TB, dB, VB, yB) || (this._valueCache[BB] = null))
      }
      setUIntArray(BB, TB) {
        this._valueCache[BB] = null, this.engine.setUIntArray(this._uniforms[BB], TB)
      }
      setUIntArray2(BB, TB) {
        this._valueCache[BB] = null, this.engine.setUIntArray2(this._uniforms[BB], TB)
      }
      setUIntArray3(BB, TB) {
        this._valueCache[BB] = null, this.engine.setUIntArray3(this._uniforms[BB], TB)
      }
      setUIntArray4(BB, TB) {
        this._valueCache[BB] = null, this.engine.setUIntArray4(this._uniforms[BB], TB)
      }
      setArray(BB, TB) {
        this._valueCache[BB] = null, this.engine.setArray(this._uniforms[BB], TB)
      }
      setArray2(BB, TB) {
        this._valueCache[BB] = null, this.engine.setArray2(this._uniforms[BB], TB)
      }
      setArray3(BB, TB) {
        this._valueCache[BB] = null, this.engine.setArray3(this._uniforms[BB], TB)
      }
      setArray4(BB, TB) {
        this._valueCache[BB] = null, this.engine.setArray4(this._uniforms[BB], TB)
      }
      setMatrices(BB, TB) {
        TB && (this._valueCache[BB] = null, this.engine.setMatrices(this._uniforms[BB], TB))
      }
      setMatrix(BB, TB) {
        this._cacheMatrix(BB, TB) && (this.engine.setMatrices(this._uniforms[BB], TB.FVB()) || (this._valueCache[BB] = null))
      }
      setMatrix3x3(BB, TB) {
        this._valueCache[BB] = null, this.engine.setMatrix3x3(this._uniforms[BB], TB)
      }
      setMatrix2x2(BB, TB) {
        this._valueCache[BB] = null, this.engine.setMatrix2x2(this._uniforms[BB], TB)
      }
      setFloat(BB, TB) {
        const dB = this._valueCache[BB];
        void 0 !== dB && dB === TB || this.engine.setFloat(this._uniforms[BB], TB) && (this._valueCache[BB] = TB)
      }
      setVector2(BB, TB) {
        this._cacheFloat2(BB, TB.x, TB.y) && (this.engine.setFloat2(this._uniforms[BB], TB.x, TB.y) || (this._valueCache[BB] = null))
      }
      setFloat2(BB, TB, dB) {
        this._cacheFloat2(BB, TB, dB) && (this.engine.setFloat2(this._uniforms[BB], TB, dB) || (this._valueCache[BB] = null))
      }
      setVector3(BB, TB) {
        this._cacheFloat3(BB, TB.x, TB.y, TB.z) && (this.engine.setFloat3(this._uniforms[BB], TB.x, TB.y, TB.z) || (this._valueCache[BB] = null))
      }
      setFloat3(BB, TB, dB, VB) {
        this._cacheFloat3(BB, TB, dB, VB) && (this.engine.setFloat3(this._uniforms[BB], TB, dB, VB) || (this._valueCache[BB] = null))
      }
      setVector4(BB, TB) {
        this._cacheFloat4(BB, TB.x, TB.y, TB.z, TB.w) && (this.engine.setFloat4(this._uniforms[BB], TB.x, TB.y, TB.z, TB.w) || (this._valueCache[BB] = null))
      }
      setQuaternion(BB, TB) {
        this._cacheFloat4(BB, TB.x, TB.y, TB.z, TB.w) && (this.engine.setFloat4(this._uniforms[BB], TB.x, TB.y, TB.z, TB.w) || (this._valueCache[BB] = null))
      }
      setFloat4(BB, TB, dB, VB, yB) {
        this._cacheFloat4(BB, TB, dB, VB, yB) && (this.engine.setFloat4(this._uniforms[BB], TB, dB, VB, yB) || (this._valueCache[BB] = null))
      }
      setColor3(BB, TB) {
        this._cacheFloat3(BB, TB.r, TB.g, TB.b) && (this.engine.setFloat3(this._uniforms[BB], TB.r, TB.g, TB.b) || (this._valueCache[BB] = null))
      }
      setColor4(BB, TB, dB) {
        this._cacheFloat4(BB, TB.r, TB.g, TB.b, dB) && (this.engine.setFloat4(this._uniforms[BB], TB.r, TB.g, TB.b, dB) || (this._valueCache[BB] = null))
      }
      setDirectColor4(BB, TB) {
        this._cacheFloat4(BB, TB.r, TB.g, TB.b, TB.a) && (this.engine.setFloat4(this._uniforms[BB], TB.r, TB.g, TB.b, TB.a) || (this._valueCache[BB] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var yB = dB(38620);
    const pB = new WeakMap,
      lB = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function JB(BB) {
      let TB = pB.get(BB);
      if (!TB) {
        if (!BB) return lB;
        TB = {
          _webGLVersion: BB.TEXTURE_BINDING_3D ? 2 : 1,
          _context: BB,
          parallelShaderCompile: BB.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, pB.set(BB, TB)
      }
      return TB
    }

    function YB(BB) {
      pB.delete(BB)
    }

    function gB(BB, TB, dB, VB, yB, pB) {
      const lB = JB(VB);
      pB || (pB = lB._createShaderProgramInjection ?? LB);
      return pB(BB, EB(TB, "vertex", VB, lB._contextWasLost), EB(dB, "fragment", VB, lB._contextWasLost), VB, yB, lB.validateShaderPrograms)
    }

    function oB(BB, TB, dB, VB, yB) {
      let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        lB = arguments.length > 6 ? arguments[6] : void 0;
      const YB = JB(yB);
      lB || (lB = YB._createShaderProgramInjection ?? LB);
      const gB = YB._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return lB(BB, HB(TB, "vertex", VB, gB, yB, YB._contextWasLost), HB(dB, "fragment", VB, gB, yB, YB._contextWasLost), yB, pB, YB.validateShaderPrograms)
    }

    function kB(BB, TB) {
      const dB = new VB,
        yB = JB(BB);
      return yB.parallelShaderCompile && !yB.disableParallelShaderCompile && (dB.isParallelCompiled = !0), dB.context = yB._context, dB
    }

    function LB(BB, TB, dB, VB) {
      let yB = arguments.length > 5 ? arguments[5] : void 0;
      const pB = VB.createProgram();
      if (BB.program = pB, !pB) throw new Error("Unable to create program");
      return VB.attachShader(pB, TB), VB.attachShader(pB, dB), VB.linkProgram(pB), BB.context = VB, BB.vertexShader = TB, BB.fragmentShader = dB, BB.isParallelCompiled || DB(BB, VB, yB), pB
    }

    function OB(BB, TB, dB) {
      const VB = BB;
      if (VB._isDisposed) return !1;
      const yB = JB(TB);
      return !!(yB && yB.parallelShaderCompile && yB.parallelShaderCompile.COMPLETION_STATUS_KHR && VB.program && TB.getProgramParameter(VB.program, yB.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (DB(VB, TB, dB), !0)
    }

    function DB(BB, TB, dB) {
      const VB = BB.context,
        yB = BB.vertexShader,
        pB = BB.fragmentShader,
        lB = BB.program;
      if (!VB.getProgramParameter(lB, VB.LINK_STATUS)) {
        if (!TB.getShaderParameter(yB, TB.COMPILE_STATUS)) {
          const dB = TB.getShaderInfoLog(yB);
          if (dB) throw BB.vertexCompilationError = dB, new Error("VERTEX SHADER " + dB)
        }
        if (!TB.getShaderParameter(pB, TB.COMPILE_STATUS)) {
          const dB = TB.getShaderInfoLog(pB);
          if (dB) throw BB.fragmentCompilationError = dB, new Error("FRAGMENT SHADER " + dB)
        }
        const dB = VB.getProgramInfoLog(lB);
        if (dB) throw BB.programLinkError = dB, new Error(dB)
      }
      if (dB) {
        VB.validateProgram(lB);
        if (!VB.getProgramParameter(lB, VB.VALIDATE_STATUS)) {
          const TB = VB.getProgramInfoLog(lB);
          if (TB) throw BB.programValidationError = TB, new Error(TB)
        }
      }
      VB.deleteShader(yB), VB.deleteShader(pB), BB.vertexShader = void 0, BB.fragmentShader = void 0, BB.onCompiled && (BB.onCompiled(), BB.onCompiled = void 0)
    }

    function uB(BB, TB, dB, VB, yB, pB, lB, YB, kB) {
      let LB = arguments.length > 10 ? arguments[10] : void 0,
        OB = arguments.length > 11 ? arguments[11] : void 0,
        DB = arguments.length > 12 ? arguments[12] : void 0;
      const uB = JB(BB.context);
      OB || (OB = uB.createRawShaderProgramInjection ?? gB), DB || (DB = uB.createShaderProgramInjection ?? oB);
      const HB = BB;
      HB.program = VB ? OB(HB, TB, dB, HB.context, kB) : DB(HB, TB, dB, YB, HB.context, kB), HB.program.__SPECTOR_rebuildProgram = lB, LB()
    }

    function HB(BB, TB, dB, VB, pB, lB) {
      return EB((0, yB.h)(BB, dB, VB), TB, pB, lB)
    }

    function EB(BB, TB, dB, VB) {
      const yB = dB.createShader("vertex" === TB ? dB.VERTEX_SHADER : dB.FRAGMENT_SHADER);
      if (!yB) {
        let BB, yB = dB.NO_ERROR;
        for (;
          (BB = dB.getError()) !== dB.NO_ERROR;) yB = BB;
        throw new Error(`Something went wrong while creating a gl ${TB} shader object. gl error=${yB}, gl isContextLost=${dB.isContextLost()}, _contextWasLost=${VB}`)
      }
      return dB.shaderSource(yB, BB), dB.compileShader(yB), yB
    }

    function vB(BB, TB) {
      TB.useProgram(BB)
    }

    function mB(BB, TB) {
      const dB = BB;
      if (!dB.isParallelCompiled) return void TB(BB);
      const VB = dB.onCompiled;
      dB.onCompiled = () => {
        VB?.(), TB(BB)
      }
    }
  },
  38584: (BB, TB, dB) => {
    dB.d(TB, {
      ThinEngine: () => NB
    });
    var VB = dB(38591),
      yB = dB(38614),
      pB = dB(38652),
      lB = dB(38671),
      JB = dB(37651),
      YB = dB(38606);
    class gB {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(BB, TB, dB, VB, yB) {
        if (yB.drawBuffersExtensionDisabled) {
          const TB = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          BB = BB.replace(TB, "")
        }
        return BB
      }
    }
    const oB = /(flat\s)?\s*varying\s*.*/;
    class kB {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(BB) {
        return BB.replace("attribute", "in")
      }
      varyingCheck(BB, TB) {
        return oB.test(BB)
      }
      varyingProcessor(BB, TB) {
        return BB.replace("varying", TB ? "in" : "out")
      }
      postProcessor(BB, TB, dB) {
        const VB = -1 !== BB.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (BB = (BB = BB.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), dB) {
          const dB = -1 !== BB.search(/layout *\(location *= *0\) *out/g),
            yB = -1 !== TB.indexOf("#define DUAL_SOURCE_BLENDING"),
            pB = yB ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          yB && (BB = "#extension GL_EXT_blend_func_extended : require\n" + BB), BB = (BB = (BB = (BB = (BB = (BB = (BB = BB.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (VB || dB ? "" : pB) + "void main(")
        } else {
          TB.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (BB = "invariant gl_Position;\n" + BB);
          if (-1 !== TB.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + BB
        }
        return BB
      }
    }
    var LB = dB(38680),
      OB = dB(38689),
      DB = dB(38698),
      uB = dB(38569),
      HB = dB(38620),
      EB = dB(38599),
      vB = dB(38702),
      mB = dB(38665);
    class iB {}
    class NB extends pB.c {
      get name() {
        return this._name
      }
      set name(BB) {
        this._name = BB
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return VB.e.ShadersRepository
      }
      static set ShadersRepository(BB) {
        VB.e.ShadersRepository = BB
      }
      get supportsUniformBuffers() {
        return this.Lu > 1 && !this.disableUniformBuffers
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
      constructor(BB, TB, dB, VB) {
        if (dB = dB || {}, super(TB ?? dB.antialias, dB, VB), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !BB) return;
        let pB;
        if (BB.getContext) {
          if (pB = BB, void 0 === dB.preserveDrawingBuffer && (dB.preserveDrawingBuffer = !1), void 0 === dB.xrCompatible && (dB.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const BB = navigator.userAgent;
            for (const TB of NB.ExceptionList) {
              const VB = TB.key,
                yB = TB.targets;
              if (new RegExp(VB).test(BB)) {
                if (TB.capture && TB.captureConstraint) {
                  const dB = TB.capture,
                    VB = TB.captureConstraint,
                    yB = new RegExp(dB).exec(BB);
                  if (yB && yB.length > 0) {
                    if (parseInt(yB[yB.length - 1]) >= VB) continue
                  }
                }
                for (const BB of yB) switch (BB) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    dB.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, yB.x)(this._gl)
            } : (this._onContextLost = BB => {
              BB.preventDefault(), this._contextWasLost = !0, (0, yB.x)(this._gl), JB.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, pB.addEventListener("webglcontextrestored", this._onContextRestored, !1), dB.powerPreference = dB.powerPreference || "high-performance"), pB.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (dB.xrCompatible = !1), !dB.disableWebGL2Support) try {
            this._gl = pB.getContext("webgl2", dB) || pB.getContext("experimental-webgl2", dB), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (oB) {}
          if (!this._gl) {
            if (!pB) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = pB.getContext("webgl", dB) || pB.getContext("experimental-webgl", dB)
            } catch (oB) {
              throw new Error("WebGL not supported", {
                cause: oB
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = BB, pB = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const TB = this._gl.getContextAttributes();
          TB && (dB.stencil = TB.stencil)
        }
        this._sharedInit(pB), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== dB.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = dB.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let yB = 0; yB < this._caps.maxVertexAttribs; yB++) this._currentBufferPointers[yB] = new iB;
        this._shaderProcessor = this.Lu > 1 ? new kB : new gB;
        const lB = `Babylon.js v${NB.Version}`;
        JB.b.Log(lB + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", lB);
        const YB = (0, yB.A)(this._gl);
        YB.validateShaderPrograms = this.validateShaderPrograms, YB.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(BB) {
        return null
      }
      areAllEffectsReady() {
        for (const BB in this._compiledEffects) {
          if (!this._compiledEffects[BB].isReady()) return !1
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
        const BB = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != BB && (this._glRenderer = this._gl.getParameter(BB.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(BB.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const TB = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!TB, this._alphaState = new mB.b(this._caps.blendParametersPerTarget), TB && (this._gl.blendEquationSeparateIndexed = TB.blendEquationSeparateiOES.bind(TB), this._gl.blendEquationIndexed = TB.blendEquationiOES.bind(TB), this._gl.blendFuncSeparateIndexed = TB.blendFuncSeparateiOES.bind(TB), this._gl.blendFuncIndexed = TB.blendFunciOES.bind(TB), this._gl.colorMaskIndexed = TB.colorMaskiOES.bind(TB), this._gl.disableIndexed = TB.disableiOES.bind(TB), this._gl.enableIndexed = TB.enableiOES.bind(TB)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const BB = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== BB) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = BB.drawBuffersWEBGL.bind(BB), this._caps.maxDrawBuffers = this._gl.getParameter(BB.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let TB = 0; TB < 16; TB++) this._gl["COLOR_ATTACHMENT" + TB + "_WEBGL"] = BB["COLOR_ATTACHMENT" + TB + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const BB = this._gl.getExtension("WEBGL_depth_texture");
          null != BB && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = BB.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const BB = this._gl.getExtension("OES_vertex_array_object");
          null != BB && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = BB.createVertexArrayOES.bind(BB), this._gl.bindVertexArray = BB.bindVertexArrayOES.bind(BB), this._gl.deleteVertexArray = BB.deleteVertexArrayOES.bind(BB))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const BB = this._gl.getExtension("ANGLE_instanced_arrays");
          null != BB ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = BB.drawArraysInstancedANGLE.bind(BB), this._gl.drawElementsInstanced = BB.drawElementsInstancedANGLE.bind(BB), this._gl.vertexAttribDivisor = BB.vertexAttribDivisorANGLE.bind(BB)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const BB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            TB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (BB && TB && (this._caps.highPrecisionShaderSupported = 0 !== BB.precision && 0 !== TB.precision, this._caps.shaderFloatPrecision = Math.min(BB.precision, TB.precision)), !this._shouldUseHighPrecisionShader) {
            const BB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              TB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            BB && TB && (this._caps.shaderFloatPrecision = Math.min(BB.precision, TB.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const BB = this._gl.getExtension("EXT_blend_minmax");
          null != BB && (this._caps.blendMinMax = !0, this._gl.MAX = BB.MAX_EXT, this._gl.MIN = BB.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const BB = this._gl.getExtension("EXT_sRGB");
            null != BB && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: BB.SRGB_EXT,
              SRGB8: BB.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: BB.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const BB = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== BB && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && BB)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let dB = 0; dB < this._maxSimultaneousTextures; dB++) this._nextFreeTextureSlots.push(dB);
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
      get Lu() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const BB = this._workingCanvas.getContext("2d");
        BB && (this._workingContext = BB)
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
        const BB = this.getGlInfo();
        return BB && BB.renderer ? BB.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const pB = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = pB;
        let lB = 0;
        if (TB && BB) {
          let TB = !0;
          if (this._currentRenderTarget) {
            const dB = this._currentRenderTarget.texture?.format;
            if (void 0 !== dB && (0, vB.h)(dB)) {
              const dB = this._currentRenderTarget.texture?.type;
              void 0 !== dB && (0, vB.l)(dB) ? (NB._TempClearColorUint32[0] = 255 * BB.r, NB._TempClearColorUint32[1] = 255 * BB.g, NB._TempClearColorUint32[2] = 255 * BB.b, NB._TempClearColorUint32[3] = 255 * BB.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, NB._TempClearColorUint32), TB = !1) : (NB._TempClearColorInt32[0] = 255 * BB.r, NB._TempClearColorInt32[1] = 255 * BB.g, NB._TempClearColorInt32[2] = 255 * BB.b, NB._TempClearColorInt32[3] = 255 * BB.a, this._gl.clearBufferiv(this._gl.COLOR, 0, NB._TempClearColorInt32), TB = !1)
            }
          }
          TB && (this._gl.clearColor(BB.r, BB.g, BB.b, void 0 !== BB.a ? BB.a : 1), lB |= this._gl.COLOR_BUFFER_BIT)
        }
        dB && (this.fVB ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), lB |= this._gl.DEPTH_BUFFER_BIT), VB && (this._gl.clearStencil(yB), lB |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(lB)
      }
      _clearColorAttachment(BB, TB, dB, VB) {
        if ((0, vB.h)(dB)) {
          const dB = (0, vB.l)(VB),
            yB = dB ? NB._TempClearColorUint32 : NB._TempClearColorInt32;
          return yB[0] = TB.r, yB[1] = TB.g, yB[2] = TB.b, yB[3] = TB.a, void(dB ? this._gl.clearBufferuiv(this._gl.COLOR, BB, yB) : this._gl.clearBufferiv(this._gl.COLOR, BB, yB))
        }
        NB._TempClearColorFloat32[0] = TB.r, NB._TempClearColorFloat32[1] = TB.g, NB._TempClearColorFloat32[2] = TB.b, NB._TempClearColorFloat32[3] = TB.a, this._gl.clearBufferfv(this._gl.COLOR, BB, NB._TempClearColorFloat32)
      }
      _viewport(BB, TB, dB, VB) {
        BB === this._viewportCached.x && TB === this._viewportCached.y && dB === this._viewportCached.z && VB === this._viewportCached.w || (this._viewportCached.x = BB, this._viewportCached.y = TB, this._viewportCached.z = dB, this._viewportCached.w = VB, this._gl.viewport(BB, TB, dB, VB))
      }
      Zm() {
        super.Zm(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const YB = BB;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._integerMRTAttachmentsMask = !BB.isMulti && BB.texture && (0, vB.h)(BB.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(YB._framebuffer);
        const gB = this._gl;
        BB.isMulti || (BB.is2DArray || BB.is3D ? (gB.framebufferTextureLayer(gB.FRAMEBUFFER, gB.COLOR_ATTACHMENT0, BB.texture._hardwareTexture?.underlyingResource, pB, lB), YB._currentLOD = pB) : BB.isCube ? gB.framebufferTexture2D(gB.FRAMEBUFFER, gB.COLOR_ATTACHMENT0, gB.TEXTURE_CUBE_MAP_POSITIVE_X + TB, BB.texture._hardwareTexture?.underlyingResource, pB) : YB._currentLOD !== pB && (gB.framebufferTexture2D(gB.FRAMEBUFFER, gB.COLOR_ATTACHMENT0, gB.TEXTURE_2D, BB.texture._hardwareTexture?.underlyingResource, pB), YB._currentLOD = pB));
        const oB = BB._depthStencilTexture;
        if (oB) {
          BB.is3D && (BB.texture.width === oB.width && BB.texture.height === oB.height && BB.texture.depth === oB.depth || JB.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const dB = BB._depthStencilTextureWithStencil ? gB.DEPTH_STENCIL_ATTACHMENT : gB.DEPTH_ATTACHMENT;
          BB.is2DArray || BB.is3D ? gB.framebufferTextureLayer(gB.FRAMEBUFFER, dB, oB._hardwareTexture?.underlyingResource, pB, lB) : BB.isCube ? gB.framebufferTexture2D(gB.FRAMEBUFFER, dB, gB.TEXTURE_CUBE_MAP_POSITIVE_X + TB, oB._hardwareTexture?.underlyingResource, pB) : gB.framebufferTexture2D(gB.FRAMEBUFFER, dB, gB.TEXTURE_2D, oB._hardwareTexture?.underlyingResource, pB)
        }
        YB._MSAAFramebuffer && this._bindUnboundFramebuffer(YB._MSAAFramebuffer), this._cachedViewport && !yB ? this.setViewport(this._cachedViewport, dB, VB) : (dB || (dB = BB.width, pB && (dB /= Math.pow(2, pB))), VB || (VB = BB.height, pB && (VB /= Math.pow(2, pB))), this._viewport(0, 0, dB, VB)), this.wipeCaches()
      }
      setStateCullFaceType(BB, TB) {
        const dB = this.cullBackFaces ?? BB ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== dB || TB) && (this._depthCullingState.cullFace = dB)
      }
      setState(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 ? arguments[5] : void 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== BB || dB) && (this._depthCullingState.cull = BB), this.setStateCullFaceType(yB, dB), this.setZOffset(TB), this.setZOffsetUnits(lB);
        const JB = VB ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== JB || dB) && (this._depthCullingState.frontFace = JB), this._stencilStateComposer.stencilMaterial = pB
      }
      _resolveAndGenerateMipMapsFramebuffer(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB.disableAutomaticMSAAResolve || (BB.isMulti ? this.resolveMultiFramebuffer(BB) : this.resolveFramebuffer(BB)), TB || (BB.isMulti ? this.generateMipMapsMultiFramebuffer(BB) : this.generateMipMapsFramebuffer(BB))
      }
      _bindUnboundFramebuffer(BB) {
        this._currentFramebuffer !== BB && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, BB), this._currentFramebuffer = BB)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(BB) {
        const TB = this._getTextureTarget(BB);
        this._bindTextureDirectly(TB, BB, !0), this._gl.generateMipmap(TB), this._bindTextureDirectly(TB, null)
      }
      unBindFramebuffer(BB, TB, dB) {
        const VB = BB;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(BB, TB), dB && (VB._MSAAFramebuffer && this._bindUnboundFramebuffer(VB._framebuffer), dB()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(BB) {
        BB.isMulti || !BB.texture?.generateMipMaps || BB.isCube || this.generateMipmaps(BB.texture)
      }
      resolveFramebuffer(BB) {
        const TB = BB,
          dB = this._gl;
        if (!TB._MSAAFramebuffer || TB.isMulti) return;
        let VB = TB.resolveMSAAColors ? dB.COLOR_BUFFER_BIT : 0;
        VB |= TB._generateDepthBuffer && TB.resolveMSAADepth ? dB.DEPTH_BUFFER_BIT : 0, VB |= TB._generateStencilBuffer && TB.resolveMSAAStencil ? dB.STENCIL_BUFFER_BIT : 0, dB.bindFramebuffer(dB.READ_FRAMEBUFFER, TB._MSAAFramebuffer), dB.bindFramebuffer(dB.DRAW_FRAMEBUFFER, TB._framebuffer), dB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, VB, dB.NEAREST)
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
      createVertexBuffer(BB, TB, dB) {
        return this._createVertexBuffer(BB, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(BB, TB) {
        const dB = this._gl.createBuffer();
        if (!dB) throw new Error("Unable to create vertex buffer");
        const VB = new LB.d(dB);
        return this.bindArrayBuffer(VB), "number" !== typeof BB ? BB instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(BB), TB), VB.Kk = 4 * BB.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, TB), VB.Kk = BB.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(BB), TB), VB.Kk = BB), this._resetVertexBufferBinding(), VB.references = 1, VB
      }
      createDynamicVertexBuffer(BB, TB) {
        return this._createVertexBuffer(BB, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(BB, TB, dB) {
        const VB = this._gl.createBuffer(),
          yB = new LB.d(VB);
        if (!VB) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(yB);
        const pB = this._normalizeIndexData(BB);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, pB, TB ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), yB.references = 1, yB.is32Bits = 4 === pB.BYTES_PER_ELEMENT, yB
      }
      _normalizeIndexData(BB) {
        if (2 === BB.BYTES_PER_ELEMENT) return BB;
        if (this._caps.uintIndices) {
          if (BB instanceof Uint32Array) return BB;
          for (let TB = 0; TB < BB.length; TB++)
            if (BB[TB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }
        return new Uint16Array(BB)
      }
      bindArrayBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(BB, TB, dB) {
        const VB = BB.program,
          yB = this._gl.getUniformBlockIndex(VB, TB);
        this._gl.uniformBlockBinding(VB, yB, dB)
      }
      bindIndexBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(BB, TB) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[TB] !== BB) && (this._gl.bindBuffer(TB, BB ? BB.underlyingResource : null), this._currentBoundBuffer[TB] = BB)
      }
      updateArrayBuffer(BB) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, BB)
      }
      _vertexAttribPointer(BB, TB, dB, VB, yB, pB, lB) {
        const JB = this._currentBufferPointers[TB];
        if (!JB) return;
        let YB = !1;
        JB.active ? (JB.buffer !== BB && (JB.buffer = BB, YB = !0), JB.size !== dB && (JB.size = dB, YB = !0), JB.type !== VB && (JB.type = VB, YB = !0), JB.normalized !== yB && (JB.normalized = yB, YB = !0), JB.stride !== pB && (JB.stride = pB, YB = !0), JB.offset !== lB && (JB.offset = lB, YB = !0)) : (YB = !0, JB.active = !0, JB.index = TB, JB.size = dB, JB.type = VB, JB.normalized = yB, JB.stride = pB, JB.offset = lB, JB.buffer = BB), (YB || this._vaoRecordInProgress) && (this.bindArrayBuffer(BB), VB === this._gl.UNSIGNED_INT || VB === this._gl.INT ? this._gl.vertexAttribIPointer(TB, dB, VB, pB, lB) : this._gl.vertexAttribPointer(TB, dB, VB, yB, pB, lB))
      }
      _bindIndexBufferWithCache(BB) {
        null != BB && this._cachedIndexBuffer !== BB && (this._cachedIndexBuffer = BB, this.bindIndexBuffer(BB), this._uintIndicesCurrentlySet = BB.is32Bits)
      }
      _bindVertexBuffersAttributes(BB, TB, dB) {
        const VB = TB.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let yB = 0; yB < VB.length; yB++) {
          const pB = TB.getAttributeLocation(yB);
          if (pB >= 0) {
            const TB = VB[yB];
            let lB = null;
            if (dB && (lB = dB[TB]), lB || (lB = BB[TB]), !lB) continue;
            this._gl.enableVertexAttribArray(pB), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[pB] = !0);
            const JB = lB.getBuffer();
            JB && (this._vertexAttribPointer(JB, pB, lB.getSize(), lB.type, lB.normalized, lB.byteStride, lB.byteOffset), lB.getIsInstanced() && (this._gl.vertexAttribDivisor(pB, lB.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(pB), this._currentInstanceBuffers.push(JB))))
          }
        }
      }
      recordVertexArrayObject(BB, TB, dB, VB) {
        const yB = this._gl.createVertexArray();
        if (!yB) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(yB), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(BB, dB, VB), this.bindIndexBuffer(TB), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), yB
      }
      bindVertexArrayObject(BB, TB) {
        this._cachedVertexArrayObject !== BB && (this._cachedVertexArrayObject = BB, this._gl.bindVertexArray(BB), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != TB && TB.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(BB, TB, dB, VB, yB) {
        if (this._cachedVertexBuffers !== BB || this._cachedEffectForVertexBuffers !== yB) {
          this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = yB;
          const TB = yB.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let pB = 0;
          for (let lB = 0; lB < TB; lB++)
            if (lB < dB.length) {
              const TB = yB.getAttributeLocation(lB);
              TB >= 0 && (this._gl.enableVertexAttribArray(TB), this._vertexAttribArraysEnabled[TB] = !0, this._vertexAttribPointer(BB, TB, dB[lB], this._gl.FLOAT, !1, VB, pB)), pB += 4 * dB[lB]
            }
        }
        this._bindIndexBufferWithCache(TB)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(BB, TB, dB, VB) {
        this._cachedVertexBuffers === BB && this._cachedEffectForVertexBuffers === dB || (this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = dB, this._bindVertexBuffersAttributes(BB, dB, VB)), this._bindIndexBufferWithCache(TB)
      }
      unbindInstanceAttributes() {
        let BB;
        for (let TB = 0, dB = this._currentInstanceLocations.length; TB < dB; TB++) {
          const dB = this._currentInstanceBuffers[TB];
          BB != dB && dB.references && (BB = dB, this.bindArrayBuffer(dB));
          const VB = this._currentInstanceLocations[TB];
          this._gl.vertexAttribDivisor(VB, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(BB) {
        this._gl.deleteVertexArray(BB)
      }
      _releaseBuffer(BB) {
        return BB.references--, 0 === BB.references && (this._deleteBuffer(BB), !0)
      }
      _deleteBuffer(BB) {
        this._gl.deleteBuffer(BB.underlyingResource)
      }
      updateAndBindInstancesBuffer(BB, TB, dB) {
        if (this.bindArrayBuffer(BB), TB && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, TB), void 0 !== dB[0].index) this.bindInstancesBuffer(BB, dB, !0);
        else
          for (let VB = 0; VB < 4; VB++) {
            const TB = dB[VB];
            this._vertexAttribArraysEnabled[TB] || (this._gl.enableVertexAttribArray(TB), this._vertexAttribArraysEnabled[TB] = !0), this._vertexAttribPointer(BB, TB, 4, this._gl.FLOAT, !1, 64, 16 * VB), this._gl.vertexAttribDivisor(TB, 1), this._currentInstanceLocations.push(TB), this._currentInstanceBuffers.push(BB)
          }
      }
      bindInstancesBuffer(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(BB);
        let VB = 0;
        if (dB)
          for (let yB = 0; yB < TB.length; yB++) {
            VB += 4 * TB[yB].attributeSize
          }
        for (let yB = 0; yB < TB.length; yB++) {
          const dB = TB[yB];
          void 0 === dB.index && (dB.index = this._currentEffect.getAttributeLocationByName(dB.attributeName)), dB.index < 0 || (this._vertexAttribArraysEnabled[dB.index] || (this._gl.enableVertexAttribArray(dB.index), this._vertexAttribArraysEnabled[dB.index] = !0), this._vertexAttribPointer(BB, dB.index, dB.attributeSize, dB.attributeType || this._gl.FLOAT, dB.normalized || !1, VB, dB.offset), this._gl.vertexAttribDivisor(dB.index, void 0 === dB.divisor ? 1 : dB.divisor), this._currentInstanceLocations.push(dB.index), this._currentInstanceBuffers.push(BB))
        }
      }
      disableInstanceAttributeByName(BB) {
        if (!this._currentEffect) return;
        const TB = this._currentEffect.getAttributeLocationByName(BB);
        this.disableInstanceAttribute(TB)
      }
      disableInstanceAttribute(BB) {
        let TB, dB = !1;
        for (; - 1 !== (TB = this._currentInstanceLocations.indexOf(BB));) this._currentInstanceLocations.splice(TB, 1), this._currentInstanceBuffers.splice(TB, 1), dB = !0;
        dB && (this._gl.vertexAttribDivisor(BB, 0), this.disableAttributeByIndex(BB))
      }
      disableAttributeByIndex(BB) {
        this._gl.disableVertexAttribArray(BB), this._vertexAttribArraysEnabled[BB] = !1, this._currentBufferPointers[BB].active = !1
      }
      draw(BB, TB, dB, VB) {
        this.drawElementsType(BB ? 0 : 1, TB, dB, VB)
      }
      drawPointClouds(BB, TB, dB) {
        this.drawArraysType(2, BB, TB, dB)
      }
      drawUnIndexed(BB, TB, dB, VB) {
        this.drawArraysType(BB ? 0 : 1, TB, dB, VB)
      }
      drawElementsType(BB, TB, dB, VB) {
        this.applyStates(), this._reportDrawCall();
        const yB = this._drawMode(BB),
          pB = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          lB = this._uintIndicesCurrentlySet ? 4 : 2;
        VB ? this._gl.drawElementsInstanced(yB, dB, pB, TB * lB, VB) : this._gl.drawElements(yB, dB, pB, TB * lB)
      }
      drawArraysType(BB, TB, dB, VB) {
        this.applyStates(), this._reportDrawCall();
        const yB = this._drawMode(BB);
        VB ? this._gl.drawArraysInstanced(yB, TB, dB, VB) : this._gl.drawArrays(yB, TB, dB)
      }
      _drawMode(BB) {
        switch (BB) {
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
      _releaseEffect(BB) {
        this._compiledEffects[BB._key] && delete this._compiledEffects[BB._key];
        const TB = BB.getPipelineContext();
        TB && this._deletePipelineContext(TB)
      }
      _deletePipelineContext(BB) {
        const TB = BB;
        TB && TB.program && (TB.program.__SPECTOR_rebuildProgram = null, (0, EB.k)(TB), this._gl && (this._currentProgram === TB.program && this._setProgram(null), this._gl.deleteProgram(TB.program)))
      }
      _getGlobalDefines(BB) {
        return (0, HB.i)(BB, this.isNDCHalfZRange, this.fVB, this.useExactSrgbConversions)
      }
      createEffect(BB, TB, dB, pB, lB, JB, YB, gB, oB) {
        let kB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          LB = arguments.length > 10 ? arguments[10] : void 0;
        const OB = "string" === typeof BB ? BB : BB.vertexToken || BB.vertexSource || BB.vertexElement || BB.vertex,
          DB = "string" === typeof BB ? BB : BB.fragmentToken || BB.fragmentSource || BB.fragmentElement || BB.fragment,
          uB = this._getGlobalDefines(),
          HB = void 0 !== TB.attributes;
        let EB = lB ?? TB.defines ?? "";
        uB && (EB += uB);
        const vB = OB + "+" + DB + "@" + EB;
        if (this._compiledEffects[vB]) {
          const BB = this._compiledEffects[vB];
          return YB && BB.isReady() && YB(BB), BB._refCount++, BB
        }
        this._gl && (0, yB.A)(this._gl);
        const mB = new VB.e(BB, TB, HB ? this : dB, pB, this, lB, JB, YB, gB, oB, vB, TB.shaderLanguage ?? kB, TB.extraInitializationsAsync ?? LB);
        return this._compiledEffects[vB] = mB, mB
      }
      _getShaderSource(BB) {
        return this._gl.getShaderSource(BB)
      }
      createRawShaderProgram(BB, TB, dB, VB) {
        let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const lB = (0, yB.A)(this._gl);
        return lB._contextWasLost = this._contextWasLost, lB.validateShaderPrograms = this.validateShaderPrograms, (0, yB.s)(BB, TB, dB, VB || this._gl, pB)
      }
      createShaderProgram(BB, TB, dB, VB, pB) {
        let lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const JB = (0, yB.A)(this._gl);
        return JB._contextWasLost = this._contextWasLost, JB.validateShaderPrograms = this.validateShaderPrograms, (0, yB.t)(BB, TB, dB, VB, pB || this._gl, lB)
      }
      inlineShaderCode(BB) {
        return BB
      }
      createPipelineContext(BB) {
        if (this._gl) {
          (0, yB.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const TB = (0, yB.p)(this._gl, BB);
        return TB.engine = this, TB
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(BB) {
        return (0, yB.f)(BB, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(BB, TB, dB, VB, pB, lB, JB, YB, gB, oB, kB) {
        const LB = (0, yB.A)(this._gl);
        return LB._contextWasLost = this._contextWasLost, LB.validateShaderPrograms = this.validateShaderPrograms, LB._createShaderProgramInjection = this._createShaderProgram.bind(this), LB.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), LB.createShaderProgramInjection = this.createShaderProgram.bind(this), LB.loadFileInjection = this._loadFile.bind(this), (0, yB.k)(BB, TB, dB, VB, pB, lB, JB, YB, gB, oB, kB)
      }
      _createShaderProgram(BB, TB, dB, VB) {
        let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, yB.b)(BB, TB, dB, VB, pB)
      }
      _isRenderingStateCompiled(BB) {
        return !this._isDisposed && (0, yB.j)(BB, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(BB, TB) {
        (0, yB.c)(BB, TB)
      }
      getUniforms(BB, TB) {
        const dB = new Array,
          VB = BB;
        for (let yB = 0; yB < TB.length; yB++) dB.push(this._gl.getUniformLocation(VB.program, TB[yB]));
        return dB
      }
      getAttributes(BB, TB) {
        const dB = [],
          VB = BB;
        for (let pB = 0; pB < TB.length; pB++) try {
          dB.push(this._gl.getAttribLocation(VB.program, TB[pB]))
        } catch (yB) {
          dB.push(-1)
        }
        return dB
      }
      enableEffect(BB) {
        (BB = null !== BB && (0, lB.d)(BB) ? BB.effect : BB) && BB !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(BB), this._currentEffect = BB, BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setInt(BB, TB) {
        return !!BB && (this._gl.uniform1i(BB, TB), !0)
      }
      setInt2(BB, TB, dB) {
        return !!BB && (this._gl.uniform2i(BB, TB, dB), !0)
      }
      setInt3(BB, TB, dB, VB) {
        return !!BB && (this._gl.uniform3i(BB, TB, dB, VB), !0)
      }
      setInt4(BB, TB, dB, VB, yB) {
        return !!BB && (this._gl.uniform4i(BB, TB, dB, VB, yB), !0)
      }
      setIntArray(BB, TB) {
        return !!BB && (this._gl.uniform1iv(BB, TB), !0)
      }
      setIntArray2(BB, TB) {
        return !(!BB || TB.length % 2 !== 0) && (this._gl.uniform2iv(BB, TB), !0)
      }
      setIntArray3(BB, TB) {
        return !(!BB || TB.length % 3 !== 0) && (this._gl.uniform3iv(BB, TB), !0)
      }
      setIntArray4(BB, TB) {
        return !(!BB || TB.length % 4 !== 0) && (this._gl.uniform4iv(BB, TB), !0)
      }
      setUInt(BB, TB) {
        return !!BB && (this._gl.uniform1ui(BB, TB), !0)
      }
      setUInt2(BB, TB, dB) {
        return !!BB && (this._gl.uniform2ui(BB, TB, dB), !0)
      }
      setUInt3(BB, TB, dB, VB) {
        return !!BB && (this._gl.uniform3ui(BB, TB, dB, VB), !0)
      }
      setUInt4(BB, TB, dB, VB, yB) {
        return !!BB && (this._gl.uniform4ui(BB, TB, dB, VB, yB), !0)
      }
      setUIntArray(BB, TB) {
        return !!BB && (this._gl.uniform1uiv(BB, TB), !0)
      }
      setUIntArray2(BB, TB) {
        return !(!BB || TB.length % 2 !== 0) && (this._gl.uniform2uiv(BB, TB), !0)
      }
      setUIntArray3(BB, TB) {
        return !(!BB || TB.length % 3 !== 0) && (this._gl.uniform3uiv(BB, TB), !0)
      }
      setUIntArray4(BB, TB) {
        return !(!BB || TB.length % 4 !== 0) && (this._gl.uniform4uiv(BB, TB), !0)
      }
      setArray(BB, TB) {
        return !!BB && (!(TB.length < 1) && (this._gl.uniform1fv(BB, TB), !0))
      }
      setArray2(BB, TB) {
        return !(!BB || TB.length % 2 !== 0) && (this._gl.uniform2fv(BB, TB), !0)
      }
      setArray3(BB, TB) {
        return !(!BB || TB.length % 3 !== 0) && (this._gl.uniform3fv(BB, TB), !0)
      }
      setArray4(BB, TB) {
        return !(!BB || TB.length % 4 !== 0) && (this._gl.uniform4fv(BB, TB), !0)
      }
      setMatrices(BB, TB) {
        return !!BB && (this._gl.uniformMatrix4fv(BB, !1, TB), !0)
      }
      setMatrix3x3(BB, TB) {
        return !!BB && (this._gl.uniformMatrix3fv(BB, !1, TB), !0)
      }
      setMatrix2x2(BB, TB) {
        return !!BB && (this._gl.uniformMatrix2fv(BB, !1, TB), !0)
      }
      setFloat(BB, TB) {
        return !!BB && (this._gl.uniform1f(BB, TB), !0)
      }
      setFloat2(BB, TB, dB) {
        return !!BB && (this._gl.uniform2f(BB, TB, dB), !0)
      }
      setFloat3(BB, TB, dB, VB) {
        return !!BB && (this._gl.uniform3f(BB, TB, dB, VB), !0)
      }
      setFloat4(BB, TB, dB, VB, yB) {
        return !!BB && (this._gl.uniform4f(BB, TB, dB, VB, yB), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const BB = this._colorWrite;
          this._gl.colorMask(BB, BB, BB, BB)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(BB) {
        this.preventCacheWipeBetweenFrames && !BB || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), BB && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(BB, TB) {
        const dB = this._gl;
        let VB = dB.NEAREST,
          yB = dB.NEAREST,
          pB = !1;
        switch (BB) {
          case 11:
            VB = dB.LINEAR, yB = TB ? dB.LINEAR_MIPMAP_NEAREST : dB.LINEAR;
            break;
          case 3:
            VB = dB.LINEAR, pB = !0, yB = TB ? dB.LINEAR_MIPMAP_LINEAR : dB.LINEAR;
            break;
          case 8:
            pB = !0, VB = dB.NEAREST, yB = TB ? dB.NEAREST_MIPMAP_LINEAR : dB.NEAREST;
            break;
          case 4:
            VB = dB.NEAREST, yB = TB ? dB.NEAREST_MIPMAP_NEAREST : dB.NEAREST;
            break;
          case 5:
            VB = dB.NEAREST, yB = TB ? dB.LINEAR_MIPMAP_NEAREST : dB.LINEAR;
            break;
          case 6:
            pB = !0, VB = dB.NEAREST, yB = TB ? dB.LINEAR_MIPMAP_LINEAR : dB.LINEAR;
            break;
          case 7:
            VB = dB.NEAREST, yB = dB.LINEAR;
            break;
          case 1:
            VB = dB.NEAREST, yB = dB.NEAREST;
            break;
          case 9:
            VB = dB.LINEAR, yB = TB ? dB.NEAREST_MIPMAP_NEAREST : dB.NEAREST;
            break;
          case 10:
            pB = !0, VB = dB.LINEAR, yB = TB ? dB.NEAREST_MIPMAP_LINEAR : dB.NEAREST;
            break;
          case 2:
            VB = dB.LINEAR, yB = dB.LINEAR;
            break;
          case 12:
            VB = dB.LINEAR, yB = dB.NEAREST
        }
        return {
          min: yB,
          mag: VB,
          hasMipMaps: pB
        }
      }
      _createTexture() {
        const BB = this._gl.createTexture();
        if (!BB) throw new Error("Unable to create texture");
        return BB
      }
      _createHardwareTexture() {
        return new DB.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(BB, TB) {
        let dB, VB, yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pB = !1,
          lB = 0,
          YB = 3,
          gB = 5,
          oB = !1,
          kB = 1,
          LB = !1,
          OB = 0,
          DB = !1;
        void 0 !== TB && "object" === typeof TB ? (dB = !!TB.generateMipMaps, pB = !!TB.createMipMaps, lB = void 0 === TB.type ? 0 : TB.type, YB = void 0 === TB.samplingMode ? 3 : TB.samplingMode, gB = void 0 === TB.format ? 5 : TB.format, oB = void 0 !== TB.useSRGBBuffer && TB.useSRGBBuffer, kB = TB.samples ?? 1, VB = TB.label, LB = !!TB.createMSAATexture, OB = TB.comparisonFunction || 0, DB = !!TB.isCube) : dB = !!TB, oB && (oB = this._caps.supportSRGBBuffers && (this.Lu > 1 || this.isWebGPU)), (1 !== lB || this._caps.textureFloatLinearFiltering) && (2 !== lB || this._caps.textureHalfFloatLinearFiltering) || (YB = 1), 1 !== lB || this._caps.textureFloat || (lB = 0, JB.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const HB = (0, vB.f)(gB),
          EB = (0, vB.d)(gB),
          mB = this._gl,
          iB = new uB.e(this, yB),
          NB = BB.width || BB,
          tB = BB.height || BB,
          fB = BB.depth || 0,
          sB = BB.layers || 0,
          MB = this._getSamplingParameters(YB, (dB || pB) && !HB),
          zB = 0 !== sB ? mB.TEXTURE_2D_ARRAY : 0 !== fB ? mB.TEXTURE_3D : DB ? mB.TEXTURE_CUBE_MAP : mB.TEXTURE_2D,
          wB = HB ? this._getInternalFormatFromDepthTextureFormat(gB, !0, EB) : this._getRGBABufferInternalSizedFormat(lB, gB, oB),
          UB = HB ? EB ? mB.DEPTH_STENCIL : mB.DEPTH_COMPONENT : this._getInternalFormat(gB),
          FB = HB ? this._getWebGLTextureTypeFromDepthTextureFormat(gB) : this._getWebGLTextureType(lB);
        if (this._bindTextureDirectly(zB, iB), 0 !== sB) iB.is2DArray = !0, mB.texImage3D(zB, 0, wB, NB, tB, sB, 0, UB, FB, null);
        else if (0 !== fB) iB.is3D = !0, mB.texImage3D(zB, 0, wB, NB, tB, fB, 0, UB, FB, null);
        else if (DB) {
          iB.isCube = !0;
          for (let BB = 0; BB < 6; BB++) mB.texImage2D(mB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, wB, NB, tB, 0, UB, FB, null)
        } else mB.texImage2D(zB, 0, wB, NB, tB, 0, UB, FB, null);
        if (mB.texParameteri(zB, mB.TEXTURE_MAG_FILTER, MB.mag), mB.texParameteri(zB, mB.TEXTURE_MIN_FILTER, MB.min), mB.texParameteri(zB, mB.TEXTURE_WRAP_S, mB.CLAMP_TO_EDGE), mB.texParameteri(zB, mB.TEXTURE_WRAP_T, mB.CLAMP_TO_EDGE), HB && this.Lu > 1 && (0 === OB ? (mB.texParameteri(zB, mB.TEXTURE_COMPARE_FUNC, 515), mB.texParameteri(zB, mB.TEXTURE_COMPARE_MODE, mB.NONE)) : (mB.texParameteri(zB, mB.TEXTURE_COMPARE_FUNC, OB), mB.texParameteri(zB, mB.TEXTURE_COMPARE_MODE, mB.COMPARE_REF_TO_TEXTURE))), (dB || pB) && this._gl.generateMipmap(zB), this._bindTextureDirectly(zB, null), iB._useSRGBBuffer = oB, iB.baseWidth = NB, iB.baseHeight = tB, iB.width = NB, iB.height = tB, iB.depth = sB || fB, iB.isReady = !0, iB.samples = kB, iB.generateMipMaps = dB, iB.samplingMode = YB, iB.type = lB, iB.format = gB, iB.label = VB, iB.comparisonFunction = OB, this._internalTexturesCache.push(iB), LB) {
          let BB;
          if (BB = (0, vB.f)(iB.format) ? this._setupFramebufferDepthAttachments((0, vB.d)(iB.format), 19 !== iB.format, iB.width, iB.height, kB, iB.format, !0) : this._createRenderBuffer(iB.width, iB.height, kB, -1, this._getRGBABufferInternalSizedFormat(iB.type, iB.format, iB._useSRGBBuffer), -1), !BB) throw new Error("Unable to create render buffer");
          iB._autoMSAAManagement = !0;
          let TB = iB._hardwareTexture;
          TB || (TB = iB._hardwareTexture = this._createHardwareTexture()), TB.addMSAARenderBuffer(BB)
        }
        return iB
      }
      _getUseSRGBBuffer(BB, TB) {
        return BB && this._caps.supportSRGBBuffers && (this.Lu > 1 || TB)
      }
      createTexture(BB, TB, dB, VB) {
        var yB = this;
        let pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          lB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          YB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          gB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          oB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          kB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          LB = arguments.length > 11 ? arguments[11] : void 0,
          OB = arguments.length > 12 ? arguments[12] : void 0,
          DB = arguments.length > 13 ? arguments[13] : void 0,
          HB = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(BB, TB, dB, VB, pB, lB, JB, (function() {
          for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
          return yB._prepareWebGLTexture(...TB, oB)
        }), ((BB, TB, dB, yB, pB, lB) => {
          const JB = this._gl,
            YB = dB.width === BB && dB.height === TB;
          pB._creationFlags = DB ?? 0;
          const gB = this._getTexImageParametersForCreateTexture(pB.format, pB._useSRGBBuffer);
          if (YB) return JB.texImage2D(JB.TEXTURE_2D, 0, gB.internalFormat, gB.format, gB.type, dB), !1;
          const oB = this._caps.maxTextureSize;
          if (dB.width > oB || dB.height > oB || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = BB, this._workingCanvas.height = TB, this._workingContext.drawImage(dB, 0, 0, dB.width, dB.height, 0, 0, BB, TB), JB.texImage2D(JB.TEXTURE_2D, 0, gB.internalFormat, gB.format, gB.type, this._workingCanvas), pB.width = BB, pB.height = TB, !1);
          {
            const BB = new uB.e(this, 2);
            this._bindTextureDirectly(JB.TEXTURE_2D, BB, !0), JB.texImage2D(JB.TEXTURE_2D, 0, gB.internalFormat, gB.format, gB.type, dB), this._rescaleTexture(BB, pB, VB, gB.format, (() => {
              this._releaseTexture(BB), this._bindTextureDirectly(JB.TEXTURE_2D, pB, !0), lB()
            }))
          }
          return !0
        }), YB, gB, oB, kB, LB, OB, HB)
      }
      _getTexImageParametersForCreateTexture(BB, TB) {
        let dB, VB;
        return 1 === this.Lu ? (dB = this._getInternalFormat(BB, TB), VB = dB) : (dB = this._getInternalFormat(BB, !1), VB = this._getRGBABufferInternalSizedFormat(0, BB, TB)), {
          internalFormat: VB,
          format: dB,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(BB, TB, dB, VB, yB) {}
      _unpackFlipY(BB) {
        this._unpackFlipYCached !== BB && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, BB ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = BB))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(BB) {
        return BB.isCube ? this._gl.TEXTURE_CUBE_MAP : BB.is3D ? this._gl.TEXTURE_3D : BB.is2DArray || BB.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = this._getTextureTarget(TB),
          yB = this._getSamplingParameters(BB, TB.useMipMaps || dB);
        this._setTextureParameterInteger(VB, this._gl.TEXTURE_MAG_FILTER, yB.mag, TB), this._setTextureParameterInteger(VB, this._gl.TEXTURE_MIN_FILTER, yB.min), dB && yB.hasMipMaps && (TB.generateMipMaps = !0, this._gl.generateMipmap(VB)), this._bindTextureDirectly(VB, null), TB.samplingMode = BB
      }
      updateTextureDimensions(BB, TB, dB) {}
      updateTextureWrappingMode(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const yB = this._getTextureTarget(BB);
        null !== TB && (this._setTextureParameterInteger(yB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(TB), BB), BB._cachedWrapU = TB), null !== dB && (this._setTextureParameterInteger(yB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(dB), BB), BB._cachedWrapV = dB), (BB.is2DArray || BB.is3D) && null !== VB && (this._setTextureParameterInteger(yB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(VB), BB), BB._cachedWrapR = VB), this._bindTextureDirectly(yB, null)
      }
      _uploadCompressedDataToTextureDirectly(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const JB = this._gl;
        let YB = JB.TEXTURE_2D;
        if (BB.isCube && (YB = JB.TEXTURE_CUBE_MAP_POSITIVE_X + pB), BB._useSRGBBuffer) switch (TB) {
          case 37492:
          case 36196:
            this._caps.etc2 ? TB = JB.COMPRESSED_SRGB8_ETC2 : BB._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? TB = JB.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : BB._useSRGBBuffer = !1;
            break;
          case 36492:
            TB = JB.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            TB = JB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? TB = JB.COMPRESSED_SRGB_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? TB = JB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? TB = JB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : BB._useSRGBBuffer = !1;
            break;
          default:
            BB._useSRGBBuffer = !1
        }
        if (BB.generateMipMaps) {
          const pB = BB._hardwareTexture;
          pB.memoryAllocated || (JB.texStorage2D(BB.isCube ? JB.TEXTURE_CUBE_MAP : JB.TEXTURE_2D, Math.floor(Math.log2(Math.max(dB, VB))) + 1, TB, BB.width, BB.height), pB.memoryAllocated = !0), this._gl.compressedTexSubImage2D(YB, lB, 0, 0, dB, VB, TB, yB)
        } else this._gl.compressedTexImage2D(YB, lB, TB, dB, VB, 0, yB)
      }
      _uploadDataToTextureDirectly(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yB = arguments.length > 4 ? arguments[4] : void 0,
          pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const lB = this._gl,
          JB = this._getWebGLTextureType(BB.type),
          YB = this._getInternalFormat(BB.format),
          gB = void 0 === yB ? this._getRGBABufferInternalSizedFormat(BB.type, BB.format, BB._useSRGBBuffer) : this._getInternalFormat(yB, BB._useSRGBBuffer);
        this._unpackFlipY(BB.invertY);
        let oB = lB.TEXTURE_2D;
        BB.isCube && (oB = lB.TEXTURE_CUBE_MAP_POSITIVE_X + dB);
        const kB = Math.round(Math.log(BB.width) * Math.LOG2E),
          LB = Math.round(Math.log(BB.height) * Math.LOG2E),
          OB = pB ? BB.width : Math.pow(2, Math.max(kB - VB, 0)),
          DB = pB ? BB.height : Math.pow(2, Math.max(LB - VB, 0));
        lB.texImage2D(oB, VB, gB, OB, DB, 0, YB, JB, TB)
      }
      updateTextureData(BB, TB, dB, VB, yB, pB) {
        let lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const gB = this._gl,
          oB = this._getWebGLTextureType(BB.type),
          kB = this._getInternalFormat(BB.format);
        this._unpackFlipY(BB.invertY);
        let LB = gB.TEXTURE_2D,
          OB = gB.TEXTURE_2D;
        BB.isCube && (OB = gB.TEXTURE_CUBE_MAP_POSITIVE_X + lB, LB = gB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(LB, BB, !0), gB.texSubImage2D(OB, JB, dB, VB, yB, pB, kB, oB, TB), YB && this._gl.generateMipmap(OB), this._bindTextureDirectly(LB, null)
      }
      _uploadArrayBufferViewToTexture(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const yB = this._gl,
          pB = BB.isCube ? yB.TEXTURE_CUBE_MAP : yB.TEXTURE_2D;
        this._bindTextureDirectly(pB, BB, !0), this._uploadDataToTextureDirectly(BB, TB, dB, VB), this._bindTextureDirectly(pB, null, !0)
      }
      _prepareWebGLTextureContinuation(BB, TB, dB, VB, yB) {
        const pB = this._gl;
        if (!pB) return;
        const lB = this._getSamplingParameters(yB, !dB);
        pB.texParameteri(pB.TEXTURE_2D, pB.TEXTURE_MAG_FILTER, lB.mag), pB.texParameteri(pB.TEXTURE_2D, pB.TEXTURE_MIN_FILTER, lB.min), dB || VB || pB.generateMipmap(pB.TEXTURE_2D), this._bindTextureDirectly(pB.TEXTURE_2D, null), TB && TB.removePendingData(BB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
        const oB = this.getCaps().maxTextureSize,
          kB = Math.min(oB, this.needPOTTextures ? (0, OB.g)(VB.width, oB) : VB.width),
          LB = Math.min(oB, this.needPOTTextures ? (0, OB.g)(VB.height, oB) : VB.height),
          DB = this._gl;
        DB && (BB._hardwareTexture ? (this._bindTextureDirectly(DB.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === yB || !!yB), BB.baseWidth = VB.width, BB.baseHeight = VB.height, BB.width = kB, BB.height = LB, BB.isReady = !0, BB.type = -1 !== BB.type ? BB.type : 0, BB.format = -1 !== BB.format ? BB.format : gB ?? (".jpg" !== TB || BB._useSRGBBuffer ? 5 : 4), JB(kB, LB, VB, TB, BB, (() => {
          this._prepareWebGLTextureContinuation(BB, dB, pB, lB, YB)
        })) || this._prepareWebGLTextureContinuation(BB, dB, pB, lB, YB)) : dB && dB.removePendingData(BB))
      }
      _getInternalFormatFromDepthTextureFormat(BB, TB, dB) {
        const VB = this._gl;
        if (!TB) return VB.STENCIL_INDEX8;
        let yB = dB ? VB.DEPTH_STENCIL : VB.DEPTH_COMPONENT;
        return this.Lu > 1 ? 15 === BB ? yB = VB.DEPTH_COMPONENT16 : 16 === BB ? yB = VB.DEPTH_COMPONENT24 : 17 === BB || 13 === BB ? yB = dB ? VB.DEPTH24_STENCIL8 : VB.DEPTH_COMPONENT24 : 14 === BB ? yB = VB.DEPTH_COMPONENT32F : 18 === BB && (yB = dB ? VB.DEPTH32F_STENCIL8 : VB.DEPTH_COMPONENT32F) : yB = VB.DEPTH_COMPONENT16, yB
      }
      _getWebGLTextureTypeFromDepthTextureFormat(BB) {
        const TB = this._gl;
        let dB = TB.UNSIGNED_INT;
        return 15 === BB ? dB = TB.UNSIGNED_SHORT : 17 === BB || 13 === BB ? dB = TB.UNSIGNED_INT_24_8 : 14 === BB ? dB = TB.FLOAT : 18 === BB ? dB = TB.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === BB && (dB = TB.UNSIGNED_BYTE), dB
      }
      _setupFramebufferDepthAttachments(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          pB = arguments.length > 5 ? arguments[5] : void 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const JB = this._gl;
        pB = pB ?? (BB ? 13 : 14);
        const YB = this._getInternalFormatFromDepthTextureFormat(pB, TB, BB);
        return BB && TB ? this._createRenderBuffer(dB, VB, yB, JB.DEPTH_STENCIL, YB, lB ? -1 : JB.DEPTH_STENCIL_ATTACHMENT) : TB ? this._createRenderBuffer(dB, VB, yB, YB, YB, lB ? -1 : JB.DEPTH_ATTACHMENT) : BB ? this._createRenderBuffer(dB, VB, yB, YB, YB, lB ? -1 : JB.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(BB, TB, dB, VB, yB, pB) {
        let lB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const JB = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(JB, BB, TB, dB, VB, yB, pB, lB)
      }
      _updateRenderBuffer(BB, TB, dB, VB, yB, pB, lB) {
        let JB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const YB = this._gl;
        return YB.bindRenderbuffer(YB.RENDERBUFFER, BB), VB > 1 && YB.renderbufferStorageMultisample ? YB.renderbufferStorageMultisample(YB.RENDERBUFFER, VB, pB, TB, dB) : YB.renderbufferStorage(YB.RENDERBUFFER, yB, TB, dB), -1 !== lB && YB.framebufferRenderbuffer(YB.FRAMEBUFFER, lB, YB.RENDERBUFFER, BB), JB && YB.bindRenderbuffer(YB.RENDERBUFFER, null), BB
      }
      _releaseTexture(BB) {
        this._deleteTexture(BB._hardwareTexture), this.unbindAllTextures();
        const TB = this._internalTexturesCache.indexOf(BB); - 1 !== TB && this._internalTexturesCache.splice(TB, 1), BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._irradianceTexture && BB._irradianceTexture.dispose()
      }
      _deleteTexture(BB) {
        BB?.release()
      }
      _setProgram(BB) {
        this._currentProgram !== BB && ((0, yB.m)(BB, this._gl), this._currentProgram = BB)
      }
      bindSamplers(BB) {
        const TB = BB.getPipelineContext();
        this._setProgram(TB.program);
        const dB = BB.getSamplers();
        for (let VB = 0; VB < dB.length; VB++) {
          const TB = BB.getUniform(dB[VB]);
          TB && (this._boundUniforms[VB] = TB)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          yB = !1;
        const pB = TB && TB._associatedChannel > -1;
        dB && pB && (this._activeChannel = TB._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== TB || VB) {
          if (this._activateCurrentTexture(), TB && TB.isMultiview) throw JB.b.Error(["_bindTextureDirectly called with a multiview texture!", BB, TB]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(BB, TB?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = TB, TB && (TB._associatedChannel = this._activeChannel)
        } else dB && (yB = !0, this._activateCurrentTexture());
        return pB && !dB && this._bindSamplerUniformToChannel(TB._associatedChannel, this._activeChannel), yB
      }
      _bindTexture(BB, TB, dB) {
        if (void 0 === BB) return;
        TB && (TB._associatedChannel = BB), this._activeChannel = BB;
        const VB = TB ? this._getTextureTarget(TB) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(VB, TB)
      }
      unbindAllTextures() {
        for (let BB = 0; BB < this._maxSimultaneousTextures; BB++) this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Lu > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(BB, TB, dB, VB) {
        void 0 !== BB && (TB && (this._boundUniforms[BB] = TB), this._setTexture(BB, dB))
      }
      _bindSamplerUniformToChannel(BB, TB) {
        const dB = this._boundUniforms[BB];
        dB && dB._currentState !== TB && (this._gl.uniform1i(dB, TB), dB._currentState = TB)
      }
      _getTextureWrapMode(BB) {
        switch (BB) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(BB, TB) {
        let dB, VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!TB) return null != this._boundTexturesCache[BB] && (this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Lu > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (TB.video) {
          this._activeChannel = BB;
          const dB = TB.getInternalTexture();
          dB && (dB._associatedChannel = BB), TB.update()
        } else if (4 === TB.delayLoadState) return TB.delayLoad(), !1;
        dB = yB ? TB.depthStencilTexture : TB.isReady() ? TB.getInternalTexture() : TB.isCube ? this.emptyCubeTexture : TB.is3D ? this.emptyTexture3D : TB.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !VB && dB && (dB._associatedChannel = BB);
        let pB = !0;
        this._boundTexturesCache[BB] === dB && (VB || this._bindSamplerUniformToChannel(dB._associatedChannel, BB), pB = !1), this._activeChannel = BB;
        const lB = this._getTextureTarget(dB);
        if (pB && this._bindTextureDirectly(lB, dB, VB), dB && !dB.isMultiview) {
          if (dB.isCube && dB._cachedCoordinatesMode !== TB.coordinatesMode) {
            dB._cachedCoordinatesMode = TB.coordinatesMode;
            const BB = 3 !== TB.coordinatesMode && 5 !== TB.coordinatesMode ? 1 : 0;
            TB.wrapU = BB, TB.wrapV = BB
          }
          dB._cachedWrapU !== TB.wrapU && (dB._cachedWrapU = TB.wrapU, this._setTextureParameterInteger(lB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(TB.wrapU), dB)), dB._cachedWrapV !== TB.wrapV && (dB._cachedWrapV = TB.wrapV, this._setTextureParameterInteger(lB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(TB.wrapV), dB)), dB.is3D && dB._cachedWrapR !== TB.wrapR && (dB._cachedWrapR = TB.wrapR, this._setTextureParameterInteger(lB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(TB.wrapR), dB)), this._setAnisotropicLevel(lB, dB, TB.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(BB, TB, dB, VB) {
        if (void 0 !== BB && TB) {
          this._textureUnits && this._textureUnits.length === dB.length || (this._textureUnits = new Int32Array(dB.length));
          for (let TB = 0; TB < dB.length; TB++) {
            const VB = dB[TB].getInternalTexture();
            VB ? (this._textureUnits[TB] = BB + TB, VB._associatedChannel = BB + TB) : this._textureUnits[TB] = -1
          }
          this._gl.uniform1iv(TB, this._textureUnits);
          for (let BB = 0; BB < dB.length; BB++) this._setTexture(this._textureUnits[BB], dB[BB], !0)
        }
      }
      _setAnisotropicLevel(BB, TB, dB) {
        const VB = this._caps.textureAnisotropicFilterExtension;
        11 !== TB.samplingMode && 3 !== TB.samplingMode && 2 !== TB.samplingMode && (dB = 1), VB && TB._cachedAnisotropicFilteringLevel !== dB && (this._setTextureParameterFloat(BB, VB.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(dB, this._caps.maxAnisotropy), TB), TB._cachedAnisotropicFilteringLevel = dB)
      }
      _setTextureParameterFloat(BB, TB, dB, VB) {
        this._bindTextureDirectly(BB, VB, !0, !0), this._gl.texParameterf(BB, TB, dB)
      }
      _setTextureParameterInteger(BB, TB, dB, VB) {
        VB && this._bindTextureDirectly(BB, VB, !0, !0), this._gl.texParameteri(BB, TB, dB)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let BB = 0; BB < this._caps.maxVertexAttribs; BB++) this.disableAttributeByIndex(BB)
        } else
          for (let BB = 0, TB = this._vertexAttribArraysEnabled.length; BB < TB; BB++) BB >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[BB] || this.disableAttributeByIndex(BB)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, YB.h)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, yB.x)(this._gl)
      }
      attachContextLostEvent(BB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", BB, !1)
      }
      attachContextRestoredEvent(BB) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", BB, !1)
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
      _canRenderToFramebuffer(BB) {
        const TB = this._gl;
        for (; TB.getError() !== TB.NO_ERROR;);
        let dB = !0;
        const VB = TB.createTexture();
        TB.bindTexture(TB.TEXTURE_2D, VB), TB.texImage2D(TB.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(BB), 1, 1, 0, TB.RGBA, this._getWebGLTextureType(BB), null), TB.texParameteri(TB.TEXTURE_2D, TB.TEXTURE_MIN_FILTER, TB.NEAREST), TB.texParameteri(TB.TEXTURE_2D, TB.TEXTURE_MAG_FILTER, TB.NEAREST);
        const yB = TB.createFramebuffer();
        TB.bindFramebuffer(TB.FRAMEBUFFER, yB), TB.framebufferTexture2D(TB.FRAMEBUFFER, TB.COLOR_ATTACHMENT0, TB.TEXTURE_2D, VB, 0);
        const pB = TB.checkFramebufferStatus(TB.FRAMEBUFFER);
        if (dB = dB && pB === TB.FRAMEBUFFER_COMPLETE, dB = dB && TB.getError() === TB.NO_ERROR, dB && (TB.clear(TB.COLOR_BUFFER_BIT), dB = dB && TB.getError() === TB.NO_ERROR), dB) {
          TB.bindFramebuffer(TB.FRAMEBUFFER, null);
          const BB = TB.RGBA,
            VB = TB.UNSIGNED_BYTE,
            yB = new Uint8Array(4);
          TB.readPixels(0, 0, 1, 1, BB, VB, yB), dB = dB && TB.getError() === TB.NO_ERROR
        }
        for (TB.deleteTexture(VB), TB.deleteFramebuffer(yB), TB.bindFramebuffer(TB.FRAMEBUFFER, null); !dB && TB.getError() !== TB.NO_ERROR;);
        return dB
      }
      _getWebGLTextureType(BB) {
        if (1 === this._webGLVersion) {
          switch (BB) {
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
        switch (BB) {
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
      _getInternalFormat(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = TB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (BB) {
          case 0:
            dB = this._gl.ALPHA;
            break;
          case 1:
            dB = this._gl.LUMINANCE;
            break;
          case 2:
            dB = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            dB = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            dB = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            dB = TB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            dB = TB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (BB) {
          case 8:
            dB = this._gl.RED_INTEGER;
            break;
          case 9:
            dB = this._gl.RG_INTEGER;
            break;
          case 10:
            dB = this._gl.RGB_INTEGER;
            break;
          case 11:
            dB = this._gl.RGBA_INTEGER
        }
        return dB
      }
      _getRGBABufferInternalSizedFormat(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== TB) switch (TB) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return dB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (BB) {
          case 3:
            switch (TB) {
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
            switch (TB) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return dB ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return dB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (TB) {
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
            switch (TB) {
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
            switch (TB) {
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
            switch (TB) {
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
            switch (TB) {
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
            switch (TB) {
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
            switch (TB) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return dB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(BB, TB, dB, VB) {
        let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const YB = yB ? 4 : 3,
          gB = yB ? this._gl.RGBA : this._gl.RGB,
          oB = dB * VB * YB;
        if (lB) {
          if (lB.length < oB) return JB.b.Error(`Data buffer is too small to store the read pixels (${lB.length} should be more than ${oB})`), Promise.resolve(lB)
        } else lB = new Uint8Array(oB);
        return pB && this.flushFramebuffer(), this._gl.readPixels(BB, TB, dB, VB, gB, this._gl.UNSIGNED_BYTE, lB), Promise.resolve(lB)
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
          const BB = pB.c._CreateCanvas(1, 1),
            TB = BB.getContext("webgl") || BB.getContext("experimental-webgl");
          this._IsSupported = null != TB && !!globalThis.WebGLRenderingContext
        } catch (BB) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const BB = pB.c._CreateCanvas(1, 1),
            TB = BB.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || BB.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !TB
        } catch (BB) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    NB._TempClearColorUint32 = new Uint32Array(4), NB._TempClearColorInt32 = new Int32Array(4), NB._TempClearColorFloat32 = new Float32Array(4), NB.ExceptionList = [{
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
    }], NB._ConcatenateShader = HB.h, NB._IsSupported = null, NB._HasMajorPerformanceCaveat = null
  },
  38946: (BB, TB, dB) => {
    var VB;
    dB.d(TB, {
        b: () => yB
      }),
      function(BB) {
        BB[BB.PointerMove = 0] = "PointerMove", BB[BB.PointerDown = 1] = "PointerDown", BB[BB.PointerUp = 2] = "PointerUp"
      }(VB || (VB = {}));
    class yB {}
    yB.DOM_DELTA_PIXEL = 0, yB.DOM_DELTA_LINE = 1, yB.DOM_DELTA_PAGE = 2
  },
  38938: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB,
      i: () => pB,
      l: () => yB
    });
    class VB {}
    VB.KEYDOWN = 1, VB.KEYUP = 2;
    class yB {
      constructor(BB, TB) {
        this.type = BB, this.event = TB
      }
    }
    class pB extends yB {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(BB) {
        this.skipOnKeyboardObservable = BB
      }
      constructor(BB, TB) {
        super(BB, TB), this.type = BB, this.event = TB, this.skipOnKeyboardObservable = !1
      }
    }
  },
  38930: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      e: () => lB,
      f: () => JB
    });
    var VB = dB(36126);
    class yB {}
    yB.POINTERDOWN = 1, yB.POINTERUP = 2, yB.POINTERMOVE = 4, yB.POINTERWHEEL = 8, yB.POINTERPICK = 16, yB.POINTERTAP = 32, yB.POINTERDOUBLETAP = 64;
    class pB {
      constructor(BB, TB) {
        this.type = BB, this.event = TB
      }
    }
    class lB extends pB {
      constructor(BB, TB, dB, yB) {
        super(BB, TB), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new VB.l(dB, yB)
      }
    }
    class JB extends pB {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(BB, TB), this._pickInfo = dB, this._inputManager = VB
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  38960: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static CompareLightsPriority(BB, TB) {
        return BB.shadowEnabled !== TB.shadowEnabled ? (TB.shadowEnabled ? 1 : 0) - (BB.shadowEnabled ? 1 : 0) : TB.renderPriority - BB.renderPriority
      }
    }
    VB.FALLOFF_DEFAULT = 0, VB.FALLOFF_PHYSICAL = 1, VB.FALLOFF_GLTF = 2, VB.FALLOFF_STANDARD = 3, VB.LIGHTMAP_DEFAULT = 0, VB.LIGHTMAP_SPECULAR = 1, VB.LIGHTMAP_SHADOWSONLY = 2, VB.INTENSITYMODE_AUTOMATIC = 0, VB.INTENSITYMODE_LUMINOUSPOWER = 1, VB.INTENSITYMODE_LUMINOUSINTENSITY = 2, VB.INTENSITYMODE_ILLUMINANCE = 3, VB.INTENSITYMODE_LUMINANCE = 4, VB.LIGHTTYPEID_POINTLIGHT = 0, VB.LIGHTTYPEID_DIRECTIONALLIGHT = 1, VB.LIGHTTYPEID_SPOTLIGHT = 2, VB.LIGHTTYPEID_HEMISPHERICLIGHT = 3, VB.LIGHTTYPEID_RECT_AREALIGHT = 4, VB.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  38569: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    var VB, yB = dB(36150),
      pB = dB(38576);
    ! function(BB) {
      BB[BB.Unknown = 0] = "Unknown", BB[BB.Url = 1] = "Url", BB[BB.Temp = 2] = "Temp", BB[BB.Raw = 3] = "Raw", BB[BB.Dynamic = 4] = "Dynamic", BB[BB.RenderTarget = 5] = "RenderTarget", BB[BB.MultiRenderTarget = 6] = "MultiRenderTarget", BB[BB.Cube = 7] = "Cube", BB[BB.CubeRaw = 8] = "CubeRaw", BB[BB.CubePrefiltered = 9] = "CubePrefiltered", BB[BB.Raw3D = 10] = "Raw3D", BB[BB.Raw2DArray = 11] = "Raw2DArray", BB[BB.DepthStencil = 12] = "DepthStencil", BB[BB.CubeRawRGBD = 13] = "CubeRawRGBD", BB[BB.Depth = 14] = "Depth", BB[BB.External = 15] = "External"
    }(VB || (VB = {}));
    class lB extends pB.e {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(BB) {
        this._useMipMaps = BB
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(BB) {
        this._uniqueId = BB
      }
      PD() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new yB.e, this.onErrorObservable = new yB.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = BB, this._source = TB, this._uniqueId = lB._Counter++, dB || (this._hardwareTexture = BB._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, BB, TB, dB), this.width = BB, this.height = TB, this.depth = dB, this.baseWidth = BB, this.baseHeight = TB, this.baseDepth = dB, this._size = BB * TB * dB
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const BB = this.onRebuildCallback(this),
            TB = TB => {
              TB._swapAndDie(this, !1), this.isReady = BB.isReady
            };
          return void(BB.isAsync ? BB.proxy.then(TB) : TB(BB.proxy))
        }
        let BB;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(BB = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (BB => {
              BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (BB = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), BB._swapAndDie(this, !1), this._bufferViewArray)
              for (let BB = 0; BB < this._bufferViewArray.length; BB++) {
                const TB = this._bufferViewArray[BB];
                TB && this._engine.updateRawTexture(this, TB, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, BB)
              }
            this.isReady = !0;
            break;
          case 10:
            BB = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), BB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (BB = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), BB._swapAndDie(this, !1), this._bufferViewArray)
              for (let BB = 0; BB < this._bufferViewArray.length; BB++) {
                const TB = this._bufferViewArray[BB];
                TB && this._engine.updateRawTexture2DArray(this, TB, this.format, this.invertY, this._compression, this.type, BB)
              }
            this.isReady = !0;
            break;
          case 4:
            BB = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), BB._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(BB = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            BB = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), BB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return BB = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (BB => {
              BB && BB._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(BB._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(BB._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), BB._hardwareTexture = this._hardwareTexture, BB._setUniqueId(lB._Counter++), TB && (BB._isRGBD = this._isRGBD), this._lodTextureHigh && (BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (BB._irradianceTexture && BB._irradianceTexture.dispose(), BB._irradianceTexture = this._irradianceTexture);
        const dB = this._engine.getLoadedTexturesCache();
        let VB = dB.indexOf(this); - 1 !== VB && dB.splice(VB, 1), VB = dB.indexOf(BB), -1 === VB && dB.push(BB)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    lB._Counter = 0
  },
  38702: (BB, TB, dB) => {
    function VB(BB) {
      return 13 === BB || 14 === BB || 15 === BB || 16 === BB || 17 === BB || 18 === BB || 19 === BB
    }

    function yB(BB) {
      return 8 === BB || 9 === BB || 10 === BB || 11 === BB
    }

    function pB(BB) {
      return 0 === BB || 5 === BB || 7 === BB || 11 === BB
    }

    function lB(BB) {
      return 13 === BB || 17 === BB || 18 === BB || 19 === BB
    }
    dB.d(TB, {
      d: () => lB,
      f: () => VB,
      h: () => yB,
      l: () => pB
    })
  },
  38576: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(BB) {
        this._cachedWrapU = BB
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(BB) {
        this._cachedWrapV = BB
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(BB) {
        this._cachedWrapR = BB
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(BB) {
        this._cachedAnisotropicFilteringLevel = BB
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(BB) {
        this._comparisonFunction = BB
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(BB) {
        this._useMipMaps = BB
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = BB, this._cachedWrapV = TB, this._cachedWrapR = dB, this._cachedAnisotropicFilteringLevel = VB, this.samplingMode = yB, this._comparisonFunction = pB, this
      }
      compareSampler(BB) {
        return this._cachedWrapU === BB._cachedWrapU && this._cachedWrapV === BB._cachedWrapV && this._cachedWrapR === BB._cachedWrapR && this._cachedAnisotropicFilteringLevel === BB._cachedAnisotropicFilteringLevel && this.samplingMode === BB.samplingMode && this._comparisonFunction === BB._comparisonFunction && this._useMipMaps === BB._useMipMaps
      }
    }
  },
  38865: (BB, TB, dB) => {
    function VB(BB) {
      BB.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    dB.d(TB, {
      b: () => VB
    })
  },
  38671: (BB, TB, dB) => {
    function VB(BB) {
      return void 0 === BB.getPipelineContext
    }
    dB.d(TB, {
      d: () => VB
    })
  },
  39069: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(38645);
    class yB {
      static GetEffect(BB) {
        return void 0 === BB.getPipelineContext ? BB.effect : BB
      }
      constructor(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = BB.createDrawContext(), TB && (this.materialContext = BB.createMaterialContext())
      }
      setEffect(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        dB || this.effect === BB || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = BB, void 0 !== TB && (this.defines = TB), dB && this.drawContext?.reset()
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const TB = this.effect;
          BB ? TB.dispose() : VB.b.SetImmediate((() => {
            TB.PD().onEndFrameObservable.addOnce((() => {
              TB.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  38599: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => kB,
      g: () => OB,
      i: () => gB,
      k: () => oB
    });
    var VB = dB(38606),
      yB = dB(38614),
      pB = dB(38595),
      lB = dB(37651),
      JB = dB(38638),
      YB = dB(38620);

    function gB(BB, TB) {
      return (0, yB.A)(TB).cachedPipelines[BB]
    }

    function oB(BB) {
      const TB = BB._name,
        dB = BB.context;
      if (TB && dB) {
        const BB = (0, yB.A)(dB),
          VB = BB.cachedPipelines[TB];
        VB?.dispose(), delete BB.cachedPipelines[TB]
      }
    }

    function kB(BB, TB, dB, yB, pB, lB, YB) {
      let gB, oB;
      const kB = (0, VB.h)() ? lB?.getHostDocument() : null;
      gB = "string" === typeof TB ? TB : "string" === typeof TB.vertexSource ? "source:" + TB.vertexSource : "string" === typeof TB.vertexElement ? kB?.getElementById(TB.vertexElement) || TB.vertexElement : TB.vertex || TB, oB = "string" === typeof TB ? TB : "string" === typeof TB.fragmentSource ? "source:" + TB.fragmentSource : "string" === typeof TB.fragmentElement ? kB?.getElementById(TB.fragmentElement) || TB.fragmentElement : TB.fragment || TB;
      const OB = [void 0, void 0],
        DB = () => {
          if (OB[0] && OB[1]) {
            const [VB, gB] = OB;
            (0, JB.e)(BB), (0, JB.j)(VB, BB, ((VB, oB) => {
              YB && (YB._vertexSourceCodeBeforeMigration = oB), dB && (VB = dB("vertex", VB)), BB.isFragment = !0, (0, JB.j)(gB, BB, ((lB, gB) => {
                YB && (YB._fragmentSourceCodeBeforeMigration = gB), dB && (lB = dB("fragment", lB));
                const oB = (0, JB.b)(VB, lB, BB);
                BB = null;
                const kB = function(BB, TB, dB, VB) {
                  if (dB) {
                    return {
                      vertexSourceCode: (1 === VB ? "//" : "") + "#define SHADER_NAME vertex:" + (dB.vertexElement || dB.vertex || dB.spectorName || dB) + "\n" + BB,
                      fragmentSourceCode: (1 === VB ? "//" : "") + "#define SHADER_NAME fragment:" + (dB.fragmentElement || dB.fragment || dB.spectorName || dB) + "\n" + TB
                    }
                  }
                  return {
                    vertexSourceCode: BB,
                    fragmentSourceCode: TB
                  }
                }(oB.vertexCode, oB.fragmentCode, TB, pB);
                yB?.(kB.vertexSourceCode, kB.fragmentSourceCode)
              }), lB)
            }), lB)
          }
        };
      LB(gB, "Vertex", "", (BB => {
        YB && (YB._rawVertexSourceCode = BB), OB[0] = BB, DB()
      }), pB), LB(oB, "Fragment", "Pixel", (BB => {
        YB && (YB._rawFragmentSourceCode = BB), OB[1] = BB, DB()
      }), pB)
    }

    function LB(BB, TB, dB, yB, lB, JB) {
      if ("undefined" !== typeof HTMLElement && BB instanceof HTMLElement) {
        return void yB((0, VB.b)(BB))
      }
      if ("source:" === BB.substring(0, 7)) return void yB(BB.substring(7));
      if ("base64:" === BB.substring(0, 7)) {
        return void yB(window.atob(BB.substring(7)))
      }
      const gB = pB.e.GetShadersStore(lB);
      if (gB[BB + TB + "Shader"]) return void yB(gB[BB + TB + "Shader"]);
      if (dB && gB[BB + dB + "Shader"]) return void yB(gB[BB + dB + "Shader"]);
      let oB;
      if (oB = "." === BB[0] || "/" === BB[0] || BB.indexOf("http") > -1 ? BB : pB.e.GetShadersRepository(lB) + BB, !(JB = JB || YB.l)) throw new Error("loadFileInjection is not defined");
      JB(oB + "." + TB.toLowerCase() + ".fx", yB)
    }
    const OB = (BB, TB, dB, VB) => {
      try {
        const pB = BB.context ? (0, yB.A)(BB.context) : null;
        pB && (pB.disableParallelShaderCompile = BB.disableParallelCompilation);
        const lB = BB.existingPipelineContext || TB(BB.shaderProcessingContext);
        return lB._name = BB.name, BB.name && pB && (pB.cachedPipelines[BB.name] = lB), dB(lB, BB.vertex, BB.fragment, !!BB.createAsRaw, "", "", BB.rebuildRebind, BB.defines, BB.transformFeedbackVaryings, "", (() => {
          VB(lB, (() => {
            BB.onRenderingStateCompiled?.(lB)
          }))
        })), lB
      } catch (pB) {
        throw lB.b.Error("Error compiling effect"), pB
      }
    }
  },
  38591: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => YB
    });
    var VB = dB(36150),
      yB = dB(37651),
      pB = dB(38595),
      lB = dB(38599),
      JB = dB(38645);
    class YB {
      static get ShadersRepository() {
        return pB.e.ShadersRepository
      }
      static set ShadersRepository(BB) {
        pB.e.ShadersRepository = BB
      }
      get WdB() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new VB.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB, TB, dB) {
        let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pB = arguments.length > 4 ? arguments[4] : void 0,
          JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          gB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          oB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          kB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          LB = arguments.length > 9 ? arguments[9] : void 0,
          OB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          DB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          uB = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new VB.e, this.onErrorObservable = new VB.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = BB, this._key = OB;
        const HB = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let EB;
        if (TB.attributes) {
          const BB = TB;
          if (this._engine = dB, this._attributesNames = BB.attributes, this._uniformsNames = BB.uniformsNames.concat(BB.samplers), this._samplerList = BB.samplers.slice(), this.defines = BB.defines, this.onError = BB.onError, this.onCompiled = BB.onCompiled, this._fallbacks = BB.fallbacks, this._indexParameters = BB.indexParameters, this._transformFeedbackVaryings = BB.transformFeedbackVaryings || null, this._multiTarget = !!BB.multiTarget, this._shaderLanguage = BB.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!BB.disableParallelShaderCompilation, BB.uniformBuffersNames) {
            this._uniformBuffersNamesList = BB.uniformBuffersNames.slice();
            for (let TB = 0; TB < BB.uniformBuffersNames.length; TB++) this._uniformBuffersNames[BB.uniformBuffersNames[TB]] = TB
          }
          this._processFinalCode = BB.processFinalCode ?? null, this._processCodeAfterIncludes = BB.processCodeAfterIncludes ?? void 0, uB = BB.extraInitializationsAsync, EB = BB.existingPipelineContext
        } else this._engine = pB, this.defines = null == JB ? "" : JB, this._uniformsNames = dB.concat(yB), this._samplerList = yB ? yB.slice() : [], this._attributesNames = TB, this._uniformBuffersNamesList = [], this._shaderLanguage = DB, this.onError = kB, this.onCompiled = oB, this._indexParameters = LB, this._fallbacks = gB;
        "WEBGL2" === this._engine.shaderPlatformName && (EB = (0, lB.i)(HB, this._engine._gl) ?? EB), this._attributeLocationByName = {}, this.uniqueId = YB._UniqueIdSeed++, EB ? (this._pipelineContext = EB, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, uB).catch((BB => {
          const TB = BB?.message ?? String(BB),
            dB = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${TB}`);
          BB && "string" === typeof BB.stack && (dB.stack = `${dB.message}\nCaused by: ${BB.stack}`), this._processCompilationErrors(dB)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.WdB || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        VB && await VB(), this._processingContext = dB || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const yB = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: BB ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: pB.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: pB.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          fVB: this._engine.fVB,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, lB.d)(yB, this.name, this._processFinalCode, ((BB, dB) => {
          this._vertexSourceCode = BB, this._fragmentSourceCode = dB, this._prepareEffect(TB)
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
        return !!this._engine.WdB || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      PD() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(BB) {
        return this._attributes[BB]
      }
      getAttributeLocationByName(BB) {
        return this._attributeLocationByName[BB]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(BB) {
        return this._uniformsNames.indexOf(BB)
      }
      getUniform(BB) {
        return this._uniforms[BB]
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
        return await new Promise((BB => {
          this.executeWhenCompiled(BB)
        }))
      }
      executeWhenCompiled(BB) {
        this.isReady() ? BB(this) : (this.onCompileObservable.add((TB => {
          BB(TB)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(BB) {
        (0, JB.c)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (TB => {
          this._processCompilationErrors(TB, BB)
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
            fVB: this._engine.fVB,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(BB, TB, dB, VB) {
        this._isReady = !1, this._vertexSourceCodeOverride = BB, this._fragmentSourceCodeOverride = TB, this.onError = (BB, TB) => {
          VB && VB(TB)
        }, this.onCompiled = () => {
          const BB = this.PD().scenes;
          if (BB)
            for (let TB = 0; TB < BB.length; TB++) BB[TB].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(dB)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(BB) {
        if (this._pipelineContext = BB, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let TB = 0; TB < this._attributesNames.length; TB++) {
            const BB = this._attributesNames[TB];
            this._attributeLocationByName[BB] = this._attributes[TB]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), YB.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = this._pipelineContext;
        this._isReady = !1;
        try {
          const dB = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            VB = dB ? null : this.defines,
            yB = dB ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            pB = dB ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            JB = this._engine;
          this._pipelineContext = (0, lB.g)({
            existingPipelineContext: BB ? TB : null,
            vertex: yB,
            fragment: pB,
            context: "WEBGL2" === JB.shaderPlatformName || "WEBGL1" === JB.shaderPlatformName ? JB._gl : void 0,
            rebuildRebind: (BB, TB, dB, VB) => this._rebuildProgram(BB, TB, dB, VB),
            defines: VB,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: dB,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: dB => {
              TB && !BB && this._engine._deletePipelineContext(TB), dB && this._onRenderingStateCompiled(dB)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(TB)
        } catch (dB) {
          this._processCompilationErrors(dB, TB)
        }
      }
      _getShaderCodeAndErrorLine(BB, TB, dB) {
        const VB = dB ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let yB = null;
        if (TB && BB) {
          const pB = TB.match(VB);
          if (pB && 2 === pB.length) {
            const TB = parseInt(pB[1]),
              VB = BB.split("\n", -1);
            VB.length >= TB && (yB = `Offending line [${TB}] in ${dB?"fragment":"vertex"} code: ${VB[TB-1]}`)
          }
        }
        return [BB, yB]
      }
      _processCompilationErrors(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof BB?.stack ? BB.stack : BB?.message ?? String(BB);
        const dB = this._attributesNames,
          VB = this._fallbacks;
        if (yB.b.Error("Unable to compile effect:"), yB.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), yB.b.Error(`Attributes: ${dB.join(" ")}`), yB.b.Error("Defines:\n" + this.defines), YB.LogShaderCodeOnCompilationError) {
          let BB, TB = null,
            dB = null;
          this._pipelineContext?._getVertexShaderCode() && ([BB, TB] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), BB && (yB.b.Error("Vertex code:"), yB.b.Error(BB))), this._pipelineContext?._getFragmentShaderCode() && ([BB, dB] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), BB && (yB.b.Error("Fragment code:"), yB.b.Error(BB))), TB && yB.b.Error(TB), dB && yB.b.Error(dB)
        }
        yB.b.Error("Error: " + this._compilationError);
        const pB = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        TB && (this._pipelineContext = TB, this._isReady = !0, pB()), VB ? (this._pipelineContext = null, VB.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, yB.b.Error("Trying next fallback."), this.defines = VB.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, pB(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, TB || pB())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(BB, TB) {
        this._engine._bindTexture(this._samplers[BB], TB, BB)
      }
      setTexture(BB, TB) {
        this._engine.setTexture(this._samplers[BB], this._uniforms[BB], TB, BB)
      }
      setTextureArray(BB, TB) {
        const dB = BB + "Ex";
        if (-1 === this._samplerList.indexOf(dB + "0")) {
          const VB = this._samplerList.indexOf(BB);
          for (let BB = 1; BB < TB.length; BB++) {
            const TB = dB + (BB - 1).toString();
            this._samplerList.splice(VB + BB, 0, TB)
          }
          let yB = 0;
          for (const BB of this._samplerList) this._samplers[BB] = yB, yB += 1
        }
        this._engine.setTextureArray(this._samplers[BB], this._uniforms[BB], TB, BB)
      }
      bindUniformBuffer(BB, TB) {
        const dB = this._uniformBuffersNames[TB];
        void 0 === dB || YB._BaseCache[dB] === BB && this._engine._features.useUBOBindingCache || (YB._BaseCache[dB] = BB, this._engine.bindUniformBufferBase(BB, dB, TB))
      }
      bindUniformBlock(BB, TB) {
        this._engine.bindUniformBlock(this._pipelineContext, BB, TB)
      }
      setInt(BB, TB) {
        return this._pipelineContext.setInt(BB, TB), this
      }
      setInt2(BB, TB, dB) {
        return this._pipelineContext.setInt2(BB, TB, dB), this
      }
      setInt3(BB, TB, dB, VB) {
        return this._pipelineContext.setInt3(BB, TB, dB, VB), this
      }
      setInt4(BB, TB, dB, VB, yB) {
        return this._pipelineContext.setInt4(BB, TB, dB, VB, yB), this
      }
      setIntArray(BB, TB) {
        return this._pipelineContext.setIntArray(BB, TB), this
      }
      setIntArray2(BB, TB) {
        return this._pipelineContext.setIntArray2(BB, TB), this
      }
      setIntArray3(BB, TB) {
        return this._pipelineContext.setIntArray3(BB, TB), this
      }
      setIntArray4(BB, TB) {
        return this._pipelineContext.setIntArray4(BB, TB), this
      }
      setUInt(BB, TB) {
        return this._pipelineContext.setUInt(BB, TB), this
      }
      setUInt2(BB, TB, dB) {
        return this._pipelineContext.setUInt2(BB, TB, dB), this
      }
      setUInt3(BB, TB, dB, VB) {
        return this._pipelineContext.setUInt3(BB, TB, dB, VB), this
      }
      setUInt4(BB, TB, dB, VB, yB) {
        return this._pipelineContext.setUInt4(BB, TB, dB, VB, yB), this
      }
      setUIntArray(BB, TB) {
        return this._pipelineContext.setUIntArray(BB, TB), this
      }
      setUIntArray2(BB, TB) {
        return this._pipelineContext.setUIntArray2(BB, TB), this
      }
      setUIntArray3(BB, TB) {
        return this._pipelineContext.setUIntArray3(BB, TB), this
      }
      setUIntArray4(BB, TB) {
        return this._pipelineContext.setUIntArray4(BB, TB), this
      }
      setFloatArray(BB, TB) {
        return this._pipelineContext.setArray(BB, TB), this
      }
      setFloatArray2(BB, TB) {
        return this._pipelineContext.setArray2(BB, TB), this
      }
      setFloatArray3(BB, TB) {
        return this._pipelineContext.setArray3(BB, TB), this
      }
      setFloatArray4(BB, TB) {
        return this._pipelineContext.setArray4(BB, TB), this
      }
      setArray(BB, TB) {
        return this._pipelineContext.setArray(BB, TB), this
      }
      setArray2(BB, TB) {
        return this._pipelineContext.setArray2(BB, TB), this
      }
      setArray3(BB, TB) {
        return this._pipelineContext.setArray3(BB, TB), this
      }
      setArray4(BB, TB) {
        return this._pipelineContext.setArray4(BB, TB), this
      }
      setMatrices(BB, TB) {
        return this._pipelineContext.setMatrices(BB, TB), this
      }
      setMatrix(BB, TB) {
        return this._pipelineContext.setMatrix(BB, TB), this
      }
      setMatrix3x3(BB, TB) {
        return this._pipelineContext.setMatrix3x3(BB, TB), this
      }
      setMatrix2x2(BB, TB) {
        return this._pipelineContext.setMatrix2x2(BB, TB), this
      }
      setFloat(BB, TB) {
        return this._pipelineContext.setFloat(BB, TB), this
      }
      setBool(BB, TB) {
        return this._pipelineContext.setInt(BB, TB ? 1 : 0), this
      }
      setVector2(BB, TB) {
        return this._pipelineContext.setVector2(BB, TB), this
      }
      setFloat2(BB, TB, dB) {
        return this._pipelineContext.setFloat2(BB, TB, dB), this
      }
      setVector3(BB, TB) {
        return this._pipelineContext.setVector3(BB, TB), this
      }
      setFloat3(BB, TB, dB, VB) {
        return this._pipelineContext.setFloat3(BB, TB, dB, VB), this
      }
      setVector4(BB, TB) {
        return this._pipelineContext.setVector4(BB, TB), this
      }
      setQuaternion(BB, TB) {
        return this._pipelineContext.setQuaternion(BB, TB), this
      }
      setFloat4(BB, TB, dB, VB, yB) {
        return this._pipelineContext.setFloat4(BB, TB, dB, VB, yB), this
      }
      setColor3(BB, TB) {
        return this._pipelineContext.setColor3(BB, TB), this
      }
      setColor4(BB, TB, dB) {
        return this._pipelineContext.setColor4(BB, TB, dB), this
      }
      setDirectColor4(BB, TB) {
        return this._pipelineContext.setDirectColor4(BB, TB), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (YB.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, lB.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        TB && (pB.e.GetShadersStore(VB)[`${BB}PixelShader`] = TB), dB && (pB.e.GetShadersStore(VB)[`${BB}VertexShader`] = dB)
      }
      static ResetCache() {
        YB._BaseCache = {}
      }
    }
    YB.LogShaderCodeOnCompilationError = !0, YB.PersistentMode = !1, YB.AutomaticallyClearCodeCache = !1, YB._UniqueIdSeed = 0, YB._BaseCache = {}, YB.ShadersStore = pB.e.ShadersStore, YB.IncludesShadersStore = pB.e.IncludesShadersStore
  },
  38908: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => oB,
      f: () => fB,
      j: () => tB
    });
    var VB = dB(38591),
      yB = dB(36126),
      pB = dB(36162),
      lB = dB(38880);
    const JB = new yB.b,
      YB = new yB.b,
      gB = new yB.b,
      oB = {
        jU: () => {},
        eyeAtCamera: !0
      };

    function kB(BB, TB, dB) {
      const VB = dB.FVB(),
        yB = TB.FVB();
      for (let pB = 0; pB < 16; pB++) VB[pB] = yB[pB];
      return VB[12] -= BB.x, VB[13] -= BB.y, VB[14] -= BB.z, dB.markAsUpdated(), dB
    }

    function LB(BB, TB, dB) {
      return (0, pB.g)(TB, YB), kB(BB, YB, gB), (0, pB.g)(gB, dB), dB
    }

    function OB(BB, TB, dB) {
      if (!oB.eyeAtCamera) return LB(BB, TB, dB);
      const VB = dB.FVB(),
        yB = TB.FVB();
      for (let pB = 0; pB < 16; pB++) VB[pB] = yB[pB];
      return VB[12] = 0, VB[13] = 0, VB[14] = 0, dB.markAsUpdated(), dB
    }

    function DB(BB, TB, dB, VB) {
      return (0, pB.n)(OB(BB, TB, VB), dB, VB), VB
    }

    function uB(BB, TB, dB, VB) {
      return (0, pB.g)(dB, YB), (0, pB.n)(TB, YB, gB), kB(BB, gB, YB), OB(BB, dB, gB), (0, pB.n)(YB, gB, VB), VB
    }

    function HB(BB, TB, dB, VB, yB, lB) {
      return (0, pB.g)(dB, YB), (0, pB.n)(TB, YB, gB), kB(BB, gB, YB), DB(BB, VB, yB, gB), (0, pB.n)(YB, gB, lB), lB
    }

    function EB(BB, TB) {
      const dB = oB.jU();
      if (!dB || JB === TB) return TB;
      JB.updateFlag = TB.updateFlag;
      const VB = dB.floatingOriginOffset;
      switch (BB) {
        case "world":
          return kB(VB, TB, JB);
        case "view":
          return OB(VB, TB, JB);
        case "worldView":
          return uB(VB, TB, dB.getViewMatrix(), JB);
        case "viewProjection":
          return DB(VB, dB.getViewMatrix(), dB.getProjectionMatrix(), JB);
        case "worldViewProjection":
          return HB(VB, TB, dB.getTransformMatrix(), dB.getViewMatrix(), dB.getProjectionMatrix(), JB);
        default:
          if (BB.startsWith("u_")) {
            const yB = BB.toLowerCase();
            if (yB.startsWith("u_worldviewprojection")) return HB(VB, TB, dB.getTransformMatrix(), dB.getViewMatrix(), dB.getProjectionMatrix(), JB);
            if (yB.startsWith("u_viewprojection")) return DB(VB, dB.getViewMatrix(), dB.getProjectionMatrix(), JB);
            if (yB.startsWith("u_worldview")) return uB(VB, TB, dB.getViewMatrix(), JB);
            if (yB.startsWith("u_world")) return kB(VB, TB, JB);
            if (yB.startsWith("u_view")) return OB(VB, TB, JB)
          }
          return TB
      }
    }
    const vB = lB.c,
      mB = VB.e,
      iB = vB.prototype._updateMatrixForUniform,
      NB = VB.e.prototype.setMatrix;

    function tB() {
      VB.e.prototype.setMatrix = NB, mB._setMatrixOverride = void 0, vB.prototype._updateMatrixForUniform = iB, vB.prototype._updateMatrixForUniformOverride = void 0
    }

    function fB() {
      mB.prototype._setMatrixOverride = NB, mB.prototype.setMatrix = function(BB, TB) {
        return this._setMatrixOverride(BB, EB(BB, TB)), this
      }, vB.prototype._updateMatrixForUniformOverride = iB, vB.prototype._updateMatrixForUniform = function(BB, TB) {
        this._updateMatrixForUniformOverride(BB, EB(BB, TB))
      }
    }
  },
  38871: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      d: () => yB
    });
    var VB = dB(38865);

    function yB(BB, TB) {
      TB.WHITEBALANCE && BB.push("whiteBalanceMatrix"), TB.EXPOSURE && BB.push("exposureLinear"), TB.CONTRAST && BB.push("contrast"), TB.COLORGRADING && BB.push("colorTransformSettings"), (TB.VIGNETTE || TB.DITHER) && BB.push("vInverseScreenSize"), TB.VIGNETTE && (BB.push("vignetteSettings1"), BB.push("vignetteSettings2")), TB.COLORCURVES && (0, VB.b)(BB), TB.DITHER && BB.push("ditherIntensity")
    }

    function pB(BB, TB) {
      TB.COLORGRADING && BB.push("txColorTransform")
    }
  },
  38863: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => UB,
      f: () => rB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(36150),
      lB = dB(36183),
      JB = dB(36157),
      YB = dB(36126);
    const gB = [
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
      oB = 1e6 / gB[gB.length - 1][0],
      kB = 150;

    function LB(BB, TB) {
      const dB = Number.isNaN(BB) ? oB : Math.max(BB, oB),
        VB = (0, JB.Clamp)(1e6 / dB, gB[0][0], gB[gB.length - 1][0]);
      let yB = 0,
        pB = gB.length - 1;
      for (; pB - yB > 1;) {
        const BB = yB + pB >> 1;
        gB[BB][0] <= VB ? yB = BB : pB = BB
      }
      const lB = yB,
        [LB, OB, DB, uB] = gB[lB],
        [HB, EB, vB, mB] = gB[lB + 1],
        iB = (VB - LB) / (HB - LB),
        NB = YB.l.Lerp(new YB.l(OB, DB), new YB.l(EB, vB), iB),
        tB = YB.l.Normalize(new YB.l(1, uB)),
        fB = YB.l.Normalize(new YB.l(1, mB)),
        sB = YB.l.Normalize(YB.l.Lerp(tB, fB, iB)),
        MB = (0, JB.Clamp)(TB, -150, kB);
      NB.qVB(sB.scale(MB / 3e3));
      const zB = 2 * NB.x - 8 * NB.y + 4,
        wB = 3 * NB.x / zB,
        UB = 2 * NB.y / zB;
      return new YB.p(wB / UB, 1, (1 - wB - UB) / UB)
    }
    const OB = YB.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      DB = YB.b.Invert(OB);

    function uB(BB, TB) {
      const dB = TB > 0 ? BB / TB : 10;
      return (0, JB.Clamp)(dB, .1, 10)
    }

    function HB(BB, TB) {
      const dB = YB.p.TransformNormal(BB, OB),
        VB = YB.p.TransformNormal(TB, OB),
        yB = YB.b.FromArray([uB(VB.x, dB.x), 0, 0, 0, 0, uB(VB.y, dB.y), 0, 0, 0, 0, uB(VB.z, dB.z), 0, 0, 0, 0, 1]);
      return OB.multiply(yB).multiply(DB)
    }
    const EB = new YB.p(.95047, 1, 1.08883),
      vB = YB.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(HB(EB, LB(6500, 0))),
      mB = YB.b.Invert(vB),
      iB = YB.p.TransformNormal(new YB.p(1, 1, 1), vB);
    var NB = dB(38772),
      tB = dB(38865);
    let fB = (() => {
      var BB;
      let TB, dB, pB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB = [],
        EB = [],
        vB = [],
        mB = [],
        iB = [],
        fB = [],
        sB = [],
        MB = [],
        zB = [],
        wB = [],
        UB = [],
        FB = [],
        KB = [],
        rB = [],
        IB = [],
        cB = [],
        SB = [],
        PB = [],
        QB = [],
        RB = [],
        aB = [],
        ZB = [],
        XB = [],
        WB = [];
      return BB = class {
        constructor() {
          this._dirty = !0, this._tempColor = new lB.d(0, 0, 0, 0), this._globalCurve = new lB.d(0, 0, 0, 0), this._highlightsCurve = new lB.d(0, 0, 0, 0), this._midtonesCurve = new lB.d(0, 0, 0, 0), this._shadowsCurve = new lB.d(0, 0, 0, 0), this._positiveCurve = new lB.d(0, 0, 0, 0), this._negativeCurve = new lB.d(0, 0, 0, 0), this._globalHue = (0, VB.h)(this, HB, 30), this._globalDensity = ((0, VB.h)(this, EB), (0, VB.h)(this, vB, 0)), this._globalSaturation = ((0, VB.h)(this, mB), (0, VB.h)(this, iB, 0)), this._globalExposure = ((0, VB.h)(this, fB), (0, VB.h)(this, sB, 0)), this._highlightsHue = ((0, VB.h)(this, MB), (0, VB.h)(this, zB, 30)), this._highlightsDensity = ((0, VB.h)(this, wB), (0, VB.h)(this, UB, 0)), this._highlightsSaturation = ((0, VB.h)(this, FB), (0, VB.h)(this, KB, 0)), this._highlightsExposure = ((0, VB.h)(this, rB), (0, VB.h)(this, IB, 0)), this._midtonesHue = ((0, VB.h)(this, cB), (0, VB.h)(this, SB, 30)), this._midtonesDensity = ((0, VB.h)(this, PB), (0, VB.h)(this, QB, 0)), this._midtonesSaturation = ((0, VB.h)(this, RB), (0, VB.h)(this, aB, 0)), this._midtonesExposure = ((0, VB.h)(this, ZB), (0, VB.h)(this, XB, 0)), this._shadowsHue = ((0, VB.h)(this, WB), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(BB) {
          this._globalHue = BB, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(BB) {
          this._globalDensity = BB, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(BB) {
          this._globalSaturation = BB, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(BB) {
          this._globalExposure = BB, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(BB) {
          this._highlightsHue = BB, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(BB) {
          this._highlightsDensity = BB, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(BB) {
          this._highlightsSaturation = BB, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(BB) {
          this._highlightsExposure = BB, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(BB) {
          this._midtonesHue = BB, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(BB) {
          this._midtonesDensity = BB, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(BB) {
          this._midtonesSaturation = BB, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(BB) {
          this._midtonesExposure = BB, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(BB) {
          this._shadowsHue = BB, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(BB) {
          this._shadowsDensity = BB, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(BB) {
          this._shadowsSaturation = BB, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(BB) {
          this._shadowsExposure = BB, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(TB, dB, VB, yB, pB) {
          null != TB && (TB = BB._Clamp(TB, 0, 360), dB = BB._Clamp(dB, -100, 100), VB = BB._Clamp(VB, -100, 100), yB = BB._Clamp(yB, -100, 100), dB = BB._ApplyColorGradingSliderNonlinear(dB), dB *= .5, yB = BB._ApplyColorGradingSliderNonlinear(yB), dB < 0 && (dB *= -1, TB = (TB + 180) % 360), BB._FromHSBToRef(TB, dB, 50 + .25 * yB, pB), pB.scaleToRef(2, pB), pB.a = 1 + .01 * VB)
        }
        static _ApplyColorGradingSliderNonlinear(BB) {
          BB /= 100;
          let TB = Math.abs(BB);
          return TB = Math.pow(TB, 2), BB < 0 && (TB *= -1), TB *= 100, TB
        }
        static _FromHSBToRef(TB, dB, VB, yB) {
          let pB = BB._Clamp(TB, 0, 360);
          const lB = BB._Clamp(dB / 100, 0, 1),
            JB = BB._Clamp(VB / 100, 0, 1);
          if (0 === lB) yB.r = JB, yB.g = JB, yB.b = JB;
          else {
            pB /= 60;
            const BB = Math.floor(pB),
              TB = pB - BB,
              dB = JB * (1 - lB),
              VB = JB * (1 - lB * TB),
              YB = JB * (1 - lB * (1 - TB));
            switch (BB) {
              case 0:
                yB.r = JB, yB.g = YB, yB.b = dB;
                break;
              case 1:
                yB.r = VB, yB.g = JB, yB.b = dB;
                break;
              case 2:
                yB.r = dB, yB.g = JB, yB.b = YB;
                break;
              case 3:
                yB.r = dB, yB.g = VB, yB.b = JB;
                break;
              case 4:
                yB.r = YB, yB.g = dB, yB.b = JB;
                break;
              default:
                yB.r = JB, yB.g = dB, yB.b = VB
            }
          }
          yB.a = 1
        }
        static _Clamp(BB, TB, dB) {
          return Math.min(Math.max(BB, TB), dB)
        }
        clone() {
          return NB.c.Clone((() => new BB), this)
        }
        serialize() {
          return NB.c.Serialize(this)
        }
        _bind(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), BB && (BB.setFloat4(TB, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), BB.setFloat4(dB, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), BB.setFloat4(VB, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const lB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], JB = [(0, yB.W)()], YB = [(0, yB.W)()], gB = [(0, yB.W)()], oB = [(0, yB.W)()], kB = [(0, yB.W)()], LB = [(0, yB.W)()], OB = [(0, yB.W)()], DB = [(0, yB.W)()], uB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalHue" in BB,
            get: BB => BB._globalHue,
            set: (BB, TB) => {
              BB._globalHue = TB
            }
          },
          metadata: lB
        }, HB, EB), (0, VB.g)(null, null, dB, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalDensity" in BB,
            get: BB => BB._globalDensity,
            set: (BB, TB) => {
              BB._globalDensity = TB
            }
          },
          metadata: lB
        }, vB, mB), (0, VB.g)(null, null, pB, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalSaturation" in BB,
            get: BB => BB._globalSaturation,
            set: (BB, TB) => {
              BB._globalSaturation = TB
            }
          },
          metadata: lB
        }, iB, fB), (0, VB.g)(null, null, JB, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalExposure" in BB,
            get: BB => BB._globalExposure,
            set: (BB, TB) => {
              BB._globalExposure = TB
            }
          },
          metadata: lB
        }, sB, MB), (0, VB.g)(null, null, YB, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsHue" in BB,
            get: BB => BB._highlightsHue,
            set: (BB, TB) => {
              BB._highlightsHue = TB
            }
          },
          metadata: lB
        }, zB, wB), (0, VB.g)(null, null, gB, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsDensity" in BB,
            get: BB => BB._highlightsDensity,
            set: (BB, TB) => {
              BB._highlightsDensity = TB
            }
          },
          metadata: lB
        }, UB, FB), (0, VB.g)(null, null, oB, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsSaturation" in BB,
            get: BB => BB._highlightsSaturation,
            set: (BB, TB) => {
              BB._highlightsSaturation = TB
            }
          },
          metadata: lB
        }, KB, rB), (0, VB.g)(null, null, kB, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsExposure" in BB,
            get: BB => BB._highlightsExposure,
            set: (BB, TB) => {
              BB._highlightsExposure = TB
            }
          },
          metadata: lB
        }, IB, cB), (0, VB.g)(null, null, LB, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesHue" in BB,
            get: BB => BB._midtonesHue,
            set: (BB, TB) => {
              BB._midtonesHue = TB
            }
          },
          metadata: lB
        }, SB, PB), (0, VB.g)(null, null, OB, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesDensity" in BB,
            get: BB => BB._midtonesDensity,
            set: (BB, TB) => {
              BB._midtonesDensity = TB
            }
          },
          metadata: lB
        }, QB, RB), (0, VB.g)(null, null, DB, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesSaturation" in BB,
            get: BB => BB._midtonesSaturation,
            set: (BB, TB) => {
              BB._midtonesSaturation = TB
            }
          },
          metadata: lB
        }, aB, ZB), (0, VB.g)(null, null, uB, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesExposure" in BB,
            get: BB => BB._midtonesExposure,
            set: (BB, TB) => {
              BB._midtonesExposure = TB
            }
          },
          metadata: lB
        }, XB, WB), lB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lB
        })
      })(), BB.PrepareUniforms = tB.b, BB
    })();

    function sB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      BB._bind(TB, dB, VB, yB)
    }
    var MB = dB(38689),
      zB = dB(38871),
      wB = dB(36166);
    let UB = (() => {
        var BB;
        let TB, dB, gB, OB, DB, uB, EB, tB, wB, UB, FB, KB, rB, IB, cB, SB, PB, QB, RB, aB, ZB, XB, WB, hB, CB, GB, qB, xB, jB = [],
          AB = [],
          bB = [],
          nB = [],
          eB = [],
          BT = [],
          TT = [],
          dT = [],
          VT = [],
          yT = [],
          pT = [],
          lT = [],
          JT = [],
          YT = [],
          gT = [],
          oT = [],
          kT = [],
          LT = [],
          OT = [],
          DT = [],
          uT = [],
          HT = [],
          ET = [],
          vT = [],
          mT = [],
          iT = [],
          NT = [],
          tT = [],
          fT = [],
          sT = [],
          MT = [],
          zT = [],
          wT = [],
          UT = [],
          FT = [],
          KT = [],
          rT = [],
          IT = [],
          cT = [],
          ST = [],
          PT = [],
          QT = [],
          RT = [],
          aT = [],
          ZT = [],
          XT = [],
          WT = [],
          hT = [],
          CT = [],
          GT = [],
          qT = [],
          xT = [],
          jT = [],
          AT = [],
          bT = [],
          nT = [];
        return BB = class {
          constructor() {
            this.colorCurves = (0, VB.h)(this, jB, new fB), this._colorCurvesEnabled = ((0, VB.h)(this, AB), (0, VB.h)(this, bB, !1)), this._colorGradingTexture = ((0, VB.h)(this, nB), (0, VB.h)(this, eB, void 0)), this._colorGradingEnabled = ((0, VB.h)(this, BT), (0, VB.h)(this, TT, !1)), this._colorGradingWithGreenDepth = ((0, VB.h)(this, dT), (0, VB.h)(this, VT, !0)), this._colorGradingBGR = ((0, VB.h)(this, yT), (0, VB.h)(this, pT, !0)), this._exposure = ((0, VB.h)(this, lT), (0, VB.h)(this, JT, 1)), this._toneMappingEnabled = ((0, VB.h)(this, YT), (0, VB.h)(this, gT, !1)), this._toneMappingType = ((0, VB.h)(this, oT), (0, VB.h)(this, kT, BB.TONEMAPPING_STANDARD)), this._contrast = ((0, VB.h)(this, LT), (0, VB.h)(this, OT, 1)), this._whiteBalanceEnabled = ((0, VB.h)(this, DT), (0, VB.h)(this, uT, !1)), this._temperature = ((0, VB.h)(this, HT), (0, VB.h)(this, ET, 6500)), this._tint = ((0, VB.h)(this, vT), (0, VB.h)(this, mT, 0)), this._whiteBalanceMatrix = ((0, VB.h)(this, iT), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, VB.h)(this, NT, 0), this.vignetteCenterX = ((0, VB.h)(this, tT), (0, VB.h)(this, fT, 0)), this.vignetteCenterY = ((0, VB.h)(this, sT), (0, VB.h)(this, MT, 0)), this.vignetteWeight = ((0, VB.h)(this, zT), (0, VB.h)(this, wT, 1.5)), this.vignetteColor = ((0, VB.h)(this, UT), (0, VB.h)(this, FT, new lB.d(0, 0, 0, 0))), this.vignetteCameraFov = ((0, VB.h)(this, KT), (0, VB.h)(this, rT, .5)), this._vignetteBlendMode = ((0, VB.h)(this, IT), (0, VB.h)(this, cT, BB.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, VB.h)(this, ST), (0, VB.h)(this, PT, !1)), this._ditheringEnabled = ((0, VB.h)(this, QT), (0, VB.h)(this, RT, !1)), this._ditheringIntensity = ((0, VB.h)(this, aT), (0, VB.h)(this, ZT, 1 / 255)), this._skipFinalColorClamp = ((0, VB.h)(this, XT), (0, VB.h)(this, WT, !1)), this._applyByPostProcess = ((0, VB.h)(this, hT), (0, VB.h)(this, CT, !1)), this._isEnabled = ((0, VB.h)(this, GT), (0, VB.h)(this, qT, !0)), this.outputTextureWidth = ((0, VB.h)(this, xT), (0, VB.h)(this, jT, 0)), this.outputTextureHeight = ((0, VB.h)(this, AT), (0, VB.h)(this, bT, 0)), this.onUpdateParameters = ((0, VB.h)(this, nT), new pB.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(BB) {
            this._colorCurvesEnabled !== BB && (this._colorCurvesEnabled = BB, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(BB) {
            this._colorGradingTexture !== BB && (this._colorGradingTexture = BB, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(BB) {
            this._colorGradingEnabled !== BB && (this._colorGradingEnabled = BB, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(BB) {
            this._colorGradingWithGreenDepth !== BB && (this._colorGradingWithGreenDepth = BB, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(BB) {
            this._colorGradingBGR !== BB && (this._colorGradingBGR = BB, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(BB) {
            this._exposure !== BB && (this._exposure = BB, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(BB) {
            this._toneMappingEnabled !== BB && (this._toneMappingEnabled = BB, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(BB) {
            this._toneMappingType !== BB && (this._toneMappingType = BB, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(BB) {
            this._contrast !== BB && (this._contrast = BB, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(BB) {
            this._whiteBalanceEnabled !== BB && (this._whiteBalanceEnabled = BB, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(BB) {
            BB = Number.isNaN(BB) ? oB : Math.max(BB, oB), this._temperature !== BB && (this._temperature = BB, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(BB) {
            BB = (0, JB.Clamp)(BB, -150, kB), this._tint !== BB && (this._tint = BB, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(BB, TB) {
              const dB = HB(LB(BB, TB), iB),
                VB = vB.multiply(dB).multiply(mB);
              return YB.b.GetAsMatrix3x3(VB)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(BB) {
            this.vignetteCenterY = BB
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(BB) {
            this.vignetteCenterX = BB
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(BB) {
            this._vignetteBlendMode !== BB && (this._vignetteBlendMode = BB, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(BB) {
            this._vignetteEnabled !== BB && (this._vignetteEnabled = BB, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(BB) {
            this._ditheringEnabled !== BB && (this._ditheringEnabled = BB, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(BB) {
            this._ditheringIntensity !== BB && (this._ditheringIntensity = BB, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(BB) {
            this._skipFinalColorClamp !== BB && (this._skipFinalColorClamp = BB, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(BB) {
            this._applyByPostProcess !== BB && (this._applyByPostProcess = BB, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(BB) {
            this._isEnabled !== BB && (this._isEnabled = BB, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(TB) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return TB.WHITEBALANCE = !1, TB.VIGNETTE = !1, TB.TONEMAPPING = 0, TB.CONTRAST = !1, TB.EXPOSURE = !1, TB.COLORCURVES = !1, TB.COLORGRADING = !1, TB.COLORGRADING3D = !1, TB.DITHER = !1, TB.IMAGEPROCESSING = !1, TB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(TB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (TB.WHITEBALANCE = this._whiteBalanceEnabled, TB.VIGNETTE = this.vignetteEnabled, TB.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === BB._VIGNETTEMODE_MULTIPLY, TB.VIGNETTEBLENDMODEOPAQUE = !TB.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case BB.TONEMAPPING_KHR_PBR_NEUTRAL:
                TB.TONEMAPPING = 3;
                break;
              case BB.TONEMAPPING_ACES:
                TB.TONEMAPPING = 2;
                break;
              default:
                TB.TONEMAPPING = 1
            } else TB.TONEMAPPING = 0;
            TB.CONTRAST = 1 !== this.contrast, TB.EXPOSURE = 1 !== this.exposure, TB.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, TB.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, TB.COLORGRADING ? TB.COLORGRADING3D = this.colorGradingTexture.is3D : TB.COLORGRADING3D = !1, TB.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, TB.SAMPLER3DBGRMAP = this.colorGradingBGR, TB.DITHER = this._ditheringEnabled, TB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, TB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, TB.IMAGEPROCESSING = TB.WHITEBALANCE || TB.VIGNETTE || !!TB.TONEMAPPING || TB.CONTRAST || TB.EXPOSURE || TB.COLORCURVES || TB.COLORGRADING || TB.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(BB, TB) {
            if (this._whiteBalanceEnabled && BB.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && sB(this.colorCurves, BB), this._vignetteEnabled || this._ditheringEnabled) {
              const dB = 1 / (this.outputTextureWidth || BB.PD().getRenderWidth()),
                VB = 1 / (this.outputTextureHeight || BB.PD().getRenderHeight());
              if (BB.setFloat2("vInverseScreenSize", dB, VB), this._ditheringEnabled && BB.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const yB = null != TB ? TB : VB / dB;
                let pB = Math.tan(.5 * this.vignetteCameraFov),
                  lB = pB * yB;
                const JB = Math.sqrt(lB * pB);
                lB = (0, MB.m)(lB, JB, this.vignetteStretch), pB = (0, MB.m)(pB, JB, this.vignetteStretch), BB.setFloat4("vignetteSettings1", lB, pB, -lB * this.vignetteCenterX, -pB * this.vignetteCenterY);
                const YB = -2 * this.vignetteWeight;
                BB.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, YB)
              }
            }
            if (BB.setFloat("exposureLinear", this.exposure), BB.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              BB.setTexture("txColorTransform", this.colorGradingTexture);
              const TB = this.colorGradingTexture.getSize().height;
              BB.setFloat4("colorTransformSettings", (TB - 1) / TB, .5 / TB, TB, this.colorGradingTexture.level)
            }
          }
          clone() {
            return NB.c.Clone((() => new BB), this)
          }
          serialize() {
            return NB.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const pB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          TB = [(0, yB.p)()], dB = [(0, yB.W)()], gB = [(0, yB.M)("colorGradingTexture")], OB = [(0, yB.W)()], DB = [(0, yB.W)()], uB = [(0, yB.W)()], EB = [(0, yB.W)()], tB = [(0, yB.W)()], wB = [(0, yB.W)()], UB = [(0, yB.W)()], FB = [(0, yB.W)()], KB = [(0, yB.W)()], rB = [(0, yB.W)()], IB = [(0, yB.W)()], cB = [(0, yB.W)()], SB = [(0, yB.W)()], PB = [(0, yB.W)()], QB = [(0, yB.v)()], RB = [(0, yB.W)()], aB = [(0, yB.W)()], ZB = [(0, yB.W)()], XB = [(0, yB.W)()], WB = [(0, yB.W)()], hB = [(0, yB.W)()], CB = [(0, yB.W)()], GB = [(0, yB.W)()], qB = [(0, yB.W)()], xB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: BB => "colorCurves" in BB,
              get: BB => BB.colorCurves,
              set: (BB, TB) => {
                BB.colorCurves = TB
              }
            },
            metadata: pB
          }, jB, AB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorCurvesEnabled" in BB,
              get: BB => BB._colorCurvesEnabled,
              set: (BB, TB) => {
                BB._colorCurvesEnabled = TB
              }
            },
            metadata: pB
          }, bB, nB), (0, VB.g)(null, null, gB, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingTexture" in BB,
              get: BB => BB._colorGradingTexture,
              set: (BB, TB) => {
                BB._colorGradingTexture = TB
              }
            },
            metadata: pB
          }, eB, BT), (0, VB.g)(null, null, OB, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingEnabled" in BB,
              get: BB => BB._colorGradingEnabled,
              set: (BB, TB) => {
                BB._colorGradingEnabled = TB
              }
            },
            metadata: pB
          }, TT, dT), (0, VB.g)(null, null, DB, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingWithGreenDepth" in BB,
              get: BB => BB._colorGradingWithGreenDepth,
              set: (BB, TB) => {
                BB._colorGradingWithGreenDepth = TB
              }
            },
            metadata: pB
          }, VT, yT), (0, VB.g)(null, null, uB, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingBGR" in BB,
              get: BB => BB._colorGradingBGR,
              set: (BB, TB) => {
                BB._colorGradingBGR = TB
              }
            },
            metadata: pB
          }, pT, lT), (0, VB.g)(null, null, EB, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: BB => "_exposure" in BB,
              get: BB => BB._exposure,
              set: (BB, TB) => {
                BB._exposure = TB
              }
            },
            metadata: pB
          }, JT, YT), (0, VB.g)(null, null, tB, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingEnabled" in BB,
              get: BB => BB._toneMappingEnabled,
              set: (BB, TB) => {
                BB._toneMappingEnabled = TB
              }
            },
            metadata: pB
          }, gT, oT), (0, VB.g)(null, null, wB, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingType" in BB,
              get: BB => BB._toneMappingType,
              set: (BB, TB) => {
                BB._toneMappingType = TB
              }
            },
            metadata: pB
          }, kT, LT), (0, VB.g)(null, null, UB, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: BB => "_contrast" in BB,
              get: BB => BB._contrast,
              set: (BB, TB) => {
                BB._contrast = TB
              }
            },
            metadata: pB
          }, OT, DT), (0, VB.g)(null, null, FB, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_whiteBalanceEnabled" in BB,
              get: BB => BB._whiteBalanceEnabled,
              set: (BB, TB) => {
                BB._whiteBalanceEnabled = TB
              }
            },
            metadata: pB
          }, uT, HT), (0, VB.g)(null, null, KB, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: BB => "_temperature" in BB,
              get: BB => BB._temperature,
              set: (BB, TB) => {
                BB._temperature = TB
              }
            },
            metadata: pB
          }, ET, vT), (0, VB.g)(null, null, rB, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: BB => "_tint" in BB,
              get: BB => BB._tint,
              set: (BB, TB) => {
                BB._tint = TB
              }
            },
            metadata: pB
          }, mT, iT), (0, VB.g)(null, null, IB, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteStretch" in BB,
              get: BB => BB.vignetteStretch,
              set: (BB, TB) => {
                BB.vignetteStretch = TB
              }
            },
            metadata: pB
          }, NT, tT), (0, VB.g)(null, null, cB, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterX" in BB,
              get: BB => BB.vignetteCenterX,
              set: (BB, TB) => {
                BB.vignetteCenterX = TB
              }
            },
            metadata: pB
          }, fT, sT), (0, VB.g)(null, null, SB, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterY" in BB,
              get: BB => BB.vignetteCenterY,
              set: (BB, TB) => {
                BB.vignetteCenterY = TB
              }
            },
            metadata: pB
          }, MT, zT), (0, VB.g)(null, null, PB, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteWeight" in BB,
              get: BB => BB.vignetteWeight,
              set: (BB, TB) => {
                BB.vignetteWeight = TB
              }
            },
            metadata: pB
          }, wT, UT), (0, VB.g)(null, null, QB, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteColor" in BB,
              get: BB => BB.vignetteColor,
              set: (BB, TB) => {
                BB.vignetteColor = TB
              }
            },
            metadata: pB
          }, FT, KT), (0, VB.g)(null, null, RB, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCameraFov" in BB,
              get: BB => BB.vignetteCameraFov,
              set: (BB, TB) => {
                BB.vignetteCameraFov = TB
              }
            },
            metadata: pB
          }, rT, IT), (0, VB.g)(null, null, aB, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteBlendMode" in BB,
              get: BB => BB._vignetteBlendMode,
              set: (BB, TB) => {
                BB._vignetteBlendMode = TB
              }
            },
            metadata: pB
          }, cT, ST), (0, VB.g)(null, null, ZB, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteEnabled" in BB,
              get: BB => BB._vignetteEnabled,
              set: (BB, TB) => {
                BB._vignetteEnabled = TB
              }
            },
            metadata: pB
          }, PT, QT), (0, VB.g)(null, null, XB, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringEnabled" in BB,
              get: BB => BB._ditheringEnabled,
              set: (BB, TB) => {
                BB._ditheringEnabled = TB
              }
            },
            metadata: pB
          }, RT, aT), (0, VB.g)(null, null, WB, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringIntensity" in BB,
              get: BB => BB._ditheringIntensity,
              set: (BB, TB) => {
                BB._ditheringIntensity = TB
              }
            },
            metadata: pB
          }, ZT, XT), (0, VB.g)(null, null, hB, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: BB => "_skipFinalColorClamp" in BB,
              get: BB => BB._skipFinalColorClamp,
              set: (BB, TB) => {
                BB._skipFinalColorClamp = TB
              }
            },
            metadata: pB
          }, WT, hT), (0, VB.g)(null, null, CB, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyByPostProcess" in BB,
              get: BB => BB._applyByPostProcess,
              set: (BB, TB) => {
                BB._applyByPostProcess = TB
              }
            },
            metadata: pB
          }, CT, GT), (0, VB.g)(null, null, GB, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_isEnabled" in BB,
              get: BB => BB._isEnabled,
              set: (BB, TB) => {
                BB._isEnabled = TB
              }
            },
            metadata: pB
          }, qT, xT), (0, VB.g)(null, null, qB, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureWidth" in BB,
              get: BB => BB.outputTextureWidth,
              set: (BB, TB) => {
                BB.outputTextureWidth = TB
              }
            },
            metadata: pB
          }, jT, AT), (0, VB.g)(null, null, xB, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureHeight" in BB,
              get: BB => BB.outputTextureHeight,
              set: (BB, TB) => {
                BB.outputTextureHeight = TB
              }
            },
            metadata: pB
          }, bT, nT), pB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pB
          })
        })(), BB.TONEMAPPING_STANDARD = 0, BB.TONEMAPPING_ACES = 1, BB.TONEMAPPING_KHR_PBR_NEUTRAL = 2, BB.PrepareUniforms = zB.d, BB.PrepareSamplers = zB.b, BB._VIGNETTEMODE_MULTIPLY = 0, BB._VIGNETTEMODE_OPAQUE = 1, BB
      })(),
      FB = !1;

    function KB(BB) {
      const TB = NB.c.Parse((() => new UB), BB, null, null);
      return void 0 !== BB.vignetteCentreX && (TB.vignetteCenterX = BB.vignetteCentreX), void 0 !== BB.vignetteCentreY && (TB.vignetteCenterY = BB.vignetteCentreY), TB
    }

    function rB() {
      FB || (FB = !0, UB.Parse = KB, NB.c._ImageProcessingConfigurationParser = KB, (0, wB.g)("BABYLON.ImageProcessingConfiguration", UB))
    }
  },
  38880: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(37651),
      yB = dB(38848);
    class pB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          pB = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = BB, this._noUBO = !BB.supportsUniformBuffers || yB, this._dynamic = dB, this._name = VB ?? "no-name", this._data = TB || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === pB && this._engine._features.trackUbosInFrame || !0 === pB) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.i6 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.i6 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(BB) {
        let TB;
        if (TB = BB <= 2 ? BB : 4, this._uniformLocationPointer % TB !== 0) {
          const BB = this._uniformLocationPointer;
          this._uniformLocationPointer += TB - this._uniformLocationPointer % TB;
          const dB = this._uniformLocationPointer - BB;
          for (let TB = 0; TB < dB; TB++) this._data.push(0)
        }
      }
      addUniform(BB, TB) {
        let dB, VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (VB > 0 && "number" === typeof TB && (this._uniformArraySizes[BB] = {
            strideSize: TB,
            arraySize: VB
          }), void 0 === this._uniformLocations[BB] && (this._uniformNames.push(BB), !this._noUBO)) {
          if (VB > 0) {
            if (TB instanceof Array) throw "addUniform should not be use with Array in UBO: " + BB;
            if (this._fillAlignment(4), 16 == TB) TB *= VB;
            else {
              TB = TB * VB + (4 - TB) * VB
            }
            dB = [];
            for (let BB = 0; BB < TB; BB++) dB.push(0)
          } else {
            if (TB instanceof Array) dB = TB, TB = dB.length;
            else {
              dB = [];
              for (let BB = 0; BB < TB; BB++) dB.push(0)
            }
            this._fillAlignment(TB)
          }
          this._uniformSizes[BB] = TB, this._uniformLocations[BB] = this._uniformLocationPointer, this._uniformLocationPointer += TB;
          for (let BB = 0; BB < TB; BB++) this._data.push(dB[BB]);
          this._needSync = !0
        }
      }
      addMatrix(BB, TB) {
        this.addUniform(BB, Array.prototype.slice.call(TB.FVB()))
      }
      addFloat2(BB, TB, dB) {
        const VB = [TB, dB];
        this.addUniform(BB, VB)
      }
      addFloat3(BB, TB, dB, VB) {
        const yB = [TB, dB, VB];
        this.addUniform(BB, yB)
      }
      addColor3(BB, TB) {
        const dB = [TB.r, TB.g, TB.b];
        this.addUniform(BB, dB)
      }
      addColor4(BB, TB, dB) {
        const VB = [TB.r, TB.g, TB.b, dB];
        this.addUniform(BB, VB)
      }
      addVector3(BB, TB) {
        const dB = [TB.x, TB.y, TB.z];
        this.addUniform(BB, dB)
      }
      addMatrix3x3(BB) {
        this.addUniform(BB, 12)
      }
      addMatrix2x2(BB) {
        this.addUniform(BB, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const BB = [];
        let TB = 0;
        for (const dB in this._uniformLocations)
          if (BB.push(dB), 10 === ++TB) break;
        return BB.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const BB of this._ownerListsBySlot.values()) this._removeOwnerBacklink(BB);
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
      set name(BB) {
        this._name = BB
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(BB, TB) {
        for (let dB = 0; dB < BB.length; ++dB)
          if (BB[dB] !== TB[dB]) return !1;
        return !0
      }
      _copyBuffer(BB, TB) {
        for (let dB = 0; dB < BB.length; ++dB) TB[dB] = BB[dB]
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
      _updateOwnerKeyed(BB) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let TB = this._slotByOwner.get(BB);
        if (void 0 === TB && (TB = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(BB, TB), this._ownerCount++, BB._uniformBuffersWithOwnedSlot || (BB._uniformBuffersWithOwnedSlot = []), BB._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(TB, BB._uniformBuffersWithOwnedSlot)), this._slotGeneration[TB] === this._dataGeneration) return this._bufferIndex = TB, this._buffer = this._buffers[TB][0], this.bindUniformBuffer(), this._slotFrameId[TB] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const dB = this._buffers[TB][1];
        this._slotFrameId[TB] === this._currentFrameId && dB && !this._buffersEqual(this._bufferData, dB) && (TB = this._takeFreeSlot(!1)), this._bufferIndex = TB, this._buffer = this._buffers[TB][0], this.bindUniformBuffer();
        const VB = this._buffers[TB][1];
        VB && this._buffersEqual(this._bufferData, VB) || (VB && this._copyBuffer(this._bufferData, VB), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[TB] = this._currentFrameId, this._slotGeneration[TB] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(BB) {
        for (let dB = 0; dB < this._freeSlots.length; ++dB) {
          const TB = this._freeSlots[dB];
          if (this._slotFrameId[TB] !== this._currentFrameId) return BB && (this._freeSlots[dB] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), TB
        }
        this._rebuild();
        const TB = this._buffers.length - 1;
        return BB || this._freeSlots.push(TB), TB
      }
      _releaseOwnerSlot(BB) {
        const TB = this._slotByOwner?.get(BB);
        if (void 0 === TB) return;
        this._slotByOwner.delete(BB);
        const dB = this._ownerListsBySlot.get(TB);
        dB && (this._removeOwnerBacklink(dB), this._ownerListsBySlot.delete(TB)), this._ownerCount--, this._freeSlots.push(TB)
      }
      _removeOwnerBacklink(BB) {
        const TB = BB.indexOf(this); - 1 !== TB && (BB[TB] = BB[BB.length - 1], BB.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(BB, TB, dB) {
        this._checkNewFrame();
        let yB = this._uniformLocations[BB];
        if (void 0 === yB) {
          if (this._buffer) return void VB.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + BB);
          this.addUniform(BB, dB), yB = this._uniformLocations[BB]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let BB = 0; BB < dB; BB++) this._bufferData[yB + BB] = TB[BB];
          this._dataGeneration++
        } else {
          let BB = !1;
          for (let VB = 0; VB < dB; VB++)(16 === dB && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[yB + VB] !== Math.fround(TB[VB])) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[yB + VB] = TB[VB]);
          this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      updateUniformArray(BB, TB, dB) {
        this._checkNewFrame();
        const pB = this._uniformLocations[BB];
        if (void 0 === pB) return void VB.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const lB = this._uniformArraySizes[BB];
        if (this._dynamic) {
          for (let BB = 0; BB < dB; BB++) this._bufferData[pB + BB] = TB[BB];
          this._dataGeneration++
        } else {
          let BB = !1,
            VB = 0,
            JB = 0;
          for (let YB = 0; YB < dB; YB++)
            if (this._bufferData[pB + 4 * JB + VB] !== yB.h.FloatRound(TB[YB]) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[pB + 4 * JB + VB] = TB[YB]), VB++, VB === lB.strideSize) {
              for (; VB < 4; VB++) this._bufferData[pB + 4 * JB + VB] = 0;
              VB = 0, JB++
            } this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      _cacheMatrix(BB, TB) {
        this._checkNewFrame();
        const dB = this._valueCache[BB],
          VB = TB.updateFlag;
        return (void 0 === dB || dB !== VB) && (this._valueCache[BB] = VB, !0)
      }
      _updateMatrix3x3ForUniform(BB, TB) {
        for (let dB = 0; dB < 3; dB++) pB._TempBuffer[4 * dB] = TB[3 * dB], pB._TempBuffer[4 * dB + 1] = TB[3 * dB + 1], pB._TempBuffer[4 * dB + 2] = TB[3 * dB + 2], pB._TempBuffer[4 * dB + 3] = 0;
        this.updateUniform(BB, pB._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(BB, TB) {
        this._currentEffect.setMatrix3x3(BB, TB)
      }
      _updateMatrix2x2ForEffect(BB, TB) {
        this._currentEffect.setMatrix2x2(BB, TB)
      }
      _updateMatrix2x2ForUniform(BB, TB) {
        for (let dB = 0; dB < 2; dB++) pB._TempBuffer[4 * dB] = TB[2 * dB], pB._TempBuffer[4 * dB + 1] = TB[2 * dB + 1], pB._TempBuffer[4 * dB + 2] = 0, pB._TempBuffer[4 * dB + 3] = 0;
        this.updateUniform(BB, pB._TempBuffer, 8)
      }
      _updateFloatForEffect(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(BB + dB, TB)
      }
      _updateFloatForUniform(BB, TB) {
        pB._TempBuffer[0] = TB, this.updateUniform(BB, pB._TempBuffer, 1)
      }
      _updateFloat2ForEffect(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(BB + VB, TB, dB)
      }
      _updateFloat2ForUniform(BB, TB, dB) {
        pB._TempBuffer[0] = TB, pB._TempBuffer[1] = dB, this.updateUniform(BB, pB._TempBuffer, 2)
      }
      _updateFloat3ForEffect(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(BB + yB, TB, dB, VB)
      }
      _updateFloat3ForUniform(BB, TB, dB, VB) {
        pB._TempBuffer[0] = TB, pB._TempBuffer[1] = dB, pB._TempBuffer[2] = VB, this.updateUniform(BB, pB._TempBuffer, 3)
      }
      _updateFloat4ForEffect(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(BB + pB, TB, dB, VB, yB)
      }
      _updateFloat4ForUniform(BB, TB, dB, VB, yB) {
        pB._TempBuffer[0] = TB, pB._TempBuffer[1] = dB, pB._TempBuffer[2] = VB, pB._TempBuffer[3] = yB, this.updateUniform(BB, pB._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[BB]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(BB + dB, TB);
            break;
          case 3:
            this._currentEffect.setFloatArray3(BB + dB, TB);
            break;
          case 4:
            this._currentEffect.setFloatArray4(BB + dB, TB);
            break;
          default:
            this._currentEffect.setFloatArray(BB + dB, TB)
        }
      }
      _updateFloatArrayForUniform(BB, TB) {
        this.updateUniformArray(BB, TB, TB.length)
      }
      _updateArrayForEffect(BB, TB) {
        this._currentEffect.setArray(BB, TB)
      }
      _updateArrayForUniform(BB, TB) {
        this.updateUniformArray(BB, TB, TB.length)
      }
      _updateIntArrayForEffect(BB, TB) {
        this._currentEffect.setIntArray(BB, TB)
      }
      _updateIntArrayForUniform(BB, TB) {
        pB._TempBufferInt32View.set(TB), this.updateUniformArray(BB, pB._TempBuffer, TB.length)
      }
      _updateUIntArrayForEffect(BB, TB) {
        this._currentEffect.setUIntArray(BB, TB)
      }
      _updateUIntArrayForUniform(BB, TB) {
        pB._TempBufferUInt32View.set(TB), this.updateUniformArray(BB, pB._TempBuffer, TB.length)
      }
      _updateMatrixForEffect(BB, TB) {
        this._currentEffect.setMatrix(BB, TB)
      }
      _updateMatrixForUniform(BB, TB) {
        this._cacheMatrix(BB, TB) && this.updateUniform(BB, TB.FVB(), 16)
      }
      _updateMatricesForEffect(BB, TB) {
        this._currentEffect.setMatrices(BB, TB)
      }
      _updateMatricesForUniform(BB, TB) {
        this.updateUniform(BB, TB, TB.length)
      }
      _updateVector3ForEffect(BB, TB) {
        this._currentEffect.setVector3(BB, TB)
      }
      _updateVector3ForUniform(BB, TB) {
        pB._TempBuffer[0] = TB.x, pB._TempBuffer[1] = TB.y, pB._TempBuffer[2] = TB.z, this.updateUniform(BB, pB._TempBuffer, 3)
      }
      _updateVector4ForEffect(BB, TB) {
        this._currentEffect.setVector4(BB, TB)
      }
      _updateVector4ForUniform(BB, TB) {
        pB._TempBuffer[0] = TB.x, pB._TempBuffer[1] = TB.y, pB._TempBuffer[2] = TB.z, pB._TempBuffer[3] = TB.w, this.updateUniform(BB, pB._TempBuffer, 4)
      }
      _updateColor3ForEffect(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(BB + dB, TB)
      }
      _updateColor3ForUniform(BB, TB) {
        pB._TempBuffer[0] = TB.r, pB._TempBuffer[1] = TB.g, pB._TempBuffer[2] = TB.b, this.updateUniform(BB, pB._TempBuffer, 3)
      }
      _updateColor4ForEffect(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(BB + VB, TB, dB)
      }
      _updateDirectColor4ForEffect(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(BB + dB, TB)
      }
      _updateColor4ForUniform(BB, TB, dB) {
        pB._TempBuffer[0] = TB.r, pB._TempBuffer[1] = TB.g, pB._TempBuffer[2] = TB.b, pB._TempBuffer[3] = dB, this.updateUniform(BB, pB._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(BB, TB) {
        pB._TempBuffer[0] = TB.r, pB._TempBuffer[1] = TB.g, pB._TempBuffer[2] = TB.b, pB._TempBuffer[3] = TB.a, this.updateUniform(BB, pB._TempBuffer, 4)
      }
      _updateIntForEffect(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(BB + dB, TB)
      }
      _updateIntForUniform(BB, TB) {
        pB._TempBufferInt32View[0] = TB, this.updateUniform(BB, pB._TempBuffer, 1)
      }
      _updateInt2ForEffect(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(BB + VB, TB, dB)
      }
      _updateInt2ForUniform(BB, TB, dB) {
        pB._TempBufferInt32View[0] = TB, pB._TempBufferInt32View[1] = dB, this.updateUniform(BB, pB._TempBuffer, 2)
      }
      _updateInt3ForEffect(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(BB + yB, TB, dB, VB)
      }
      _updateInt3ForUniform(BB, TB, dB, VB) {
        pB._TempBufferInt32View[0] = TB, pB._TempBufferInt32View[1] = dB, pB._TempBufferInt32View[2] = VB, this.updateUniform(BB, pB._TempBuffer, 3)
      }
      _updateInt4ForEffect(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(BB + pB, TB, dB, VB, yB)
      }
      _updateInt4ForUniform(BB, TB, dB, VB, yB) {
        pB._TempBufferInt32View[0] = TB, pB._TempBufferInt32View[1] = dB, pB._TempBufferInt32View[2] = VB, pB._TempBufferInt32View[3] = yB, this.updateUniform(BB, pB._TempBuffer, 4)
      }
      _updateUIntForEffect(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(BB + dB, TB)
      }
      _updateUIntForUniform(BB, TB) {
        pB._TempBufferUInt32View[0] = TB, this.updateUniform(BB, pB._TempBuffer, 1)
      }
      _updateUInt2ForEffect(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(BB + VB, TB, dB)
      }
      _updateUInt2ForUniform(BB, TB, dB) {
        pB._TempBufferUInt32View[0] = TB, pB._TempBufferUInt32View[1] = dB, this.updateUniform(BB, pB._TempBuffer, 2)
      }
      _updateUInt3ForEffect(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(BB + yB, TB, dB, VB)
      }
      _updateUInt3ForUniform(BB, TB, dB, VB) {
        pB._TempBufferUInt32View[0] = TB, pB._TempBufferUInt32View[1] = dB, pB._TempBufferUInt32View[2] = VB, this.updateUniform(BB, pB._TempBuffer, 3)
      }
      _updateUInt4ForEffect(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(BB + pB, TB, dB, VB, yB)
      }
      _updateUInt4ForUniform(BB, TB, dB, VB, yB) {
        pB._TempBufferUInt32View[0] = TB, pB._TempBufferUInt32View[1] = dB, pB._TempBufferUInt32View[2] = VB, pB._TempBufferUInt32View[3] = yB, this.updateUniform(BB, pB._TempBuffer, 4)
      }
      setTexture(BB, TB) {
        this._currentEffect.setTexture(BB, TB)
      }
      setTextureArray(BB, TB) {
        this._currentEffect.setTextureArray(BB, TB)
      }
      bindTexture(BB, TB) {
        this._currentEffect._bindTexture(BB, TB)
      }
      updateUniformDirectly(BB, TB) {
        this.updateUniform(BB, TB, TB.length), this.update()
      }
      bindToEffect(BB, TB) {
        this._currentEffect = BB, this._currentEffectName = TB
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(BB) {
        if (!this._buffers) return this._buffer === BB;
        for (let TB = 0; TB < this._buffers.length; ++TB) {
          if (this._buffers[TB][0] === BB) return this._bufferIndex = TB, this._buffer = BB, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[TB][1] && (this._bufferData.set(this._buffers[TB][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(BB) {
        return void 0 !== this._uniformLocations[BB]
      }
      dispose() {
        if (this._noUBO) return;
        const BB = this._engine._uniformBuffers,
          TB = BB.indexOf(this);
        if (-1 !== TB && (BB[TB] = BB[BB.length - 1], BB.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let BB = 0; BB < this._buffers.length; ++BB) {
            const TB = this._buffers[BB][0];
            this._engine._releaseBuffer(TB)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    pB._MAX_UNIFORM_SIZE = 256, pB._TempBuffer = new Float32Array(pB._MAX_UNIFORM_SIZE), pB._TempBufferInt32View = new Int32Array(pB._TempBuffer.buffer), pB._TempBufferUInt32View = new Uint32Array(pB._TempBuffer.buffer)
  },
  38680: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(38684);
    class yB extends VB.b {
      constructor(BB) {
        super(), this._buffer = BB
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  38759: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB,
      f: () => gB
    });
    const VB = "__bjs_serializable__",
      yB = new WeakMap;

    function pB(BB, TB) {
      return Object.prototype.hasOwnProperty.call(BB, TB)
    }
    const lB = function() {
      let BB = Symbol.metadata;
      return BB || (BB = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: BB
      })), BB
    }();

    function JB(BB) {
      return "function" === typeof BB ? BB : BB?.constructor
    }

    function YB(BB) {
      if (!BB) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(lB)}) polyfill must run before decorated classes are evaluated.`);
      return pB(BB, VB) || (BB[VB] = {}), BB[VB]
    }

    function gB(BB) {
      const TB = JB(BB),
        dB = TB ? TB[lB] : void 0;
      if (!dB) return {};
      const YB = yB.get(dB);
      if (YB) return YB;
      const gB = {},
        oB = [];
      let kB = dB;
      for (; kB;) oB.push(kB), kB = Object.getPrototypeOf(kB);
      for (const yB of oB)
        if (pB(yB, VB)) {
          const BB = yB[VB];
          for (const TB in BB) gB[TB] = BB[TB]
        } return yB.set(dB, gB), gB
    }
  },
  38750: (BB, TB, dB) => {
    dB.d(TB, {
      C: () => HB,
      G: () => LB,
      J: () => uB,
      M: () => JB,
      Q: () => oB,
      T: () => kB,
      W: () => lB,
      e: () => mB,
      i: () => pB,
      m: () => vB,
      p: () => OB,
      s: () => YB,
      v: () => DB,
      z: () => gB
    });
    var VB = dB(38759);

    function yB(BB, TB) {
      return (dB, yB) => {
        if (!yB.metadata) return;
        const pB = String(yB.name),
          lB = (0, VB.c)(yB.metadata);
        lB[pB] || (lB[pB] = {
          type: BB,
          sourceName: TB
        })
      }
    }

    function pB(BB) {
      return function(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (dB, VB) => {
          const yB = TB || "_" + String(VB.name);
          return {
            init(BB) {
              return void 0 === BB && yB in this || (this[yB] = BB), BB
            },
            get() {
              return this[yB]
            },
            set(TB) {
              "function" === typeof this[yB]?.equals && this[yB].equals(TB) || this[yB] !== TB && (this[yB] = TB, this[BB]())
            }
          }
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function lB(BB) {
      return yB(0, BB)
    }

    function JB(BB) {
      return yB(1, BB)
    }

    function YB(BB) {
      return yB(2, BB)
    }

    function gB(BB) {
      return yB(3, BB)
    }

    function oB(BB) {
      return yB(4, BB)
    }

    function kB(BB) {
      return yB(5, BB)
    }

    function LB(BB) {
      return yB(6, BB)
    }

    function OB(BB) {
      return yB(7, BB)
    }

    function DB(BB) {
      return yB(8, BB)
    }

    function uB(BB) {
      return yB(10, BB)
    }

    function HB(BB) {
      return yB(12, BB)
    }

    function EB(BB, TB, dB) {
      const VB = String(TB.name);
      let yB = null;
      const pB = function() {
        if (null === yB) {
          yB = BB, "undefined" !== typeof _native && _native[VB] && (yB = dB(_native[VB], BB));
          const lB = this && (TB.static ? this : Object.getPrototypeOf(this));
          lB?.[VB] === pB && (lB[VB] = yB)
        }
        for (var lB = arguments.length, JB = new Array(lB), YB = 0; YB < lB; YB++) JB[YB] = arguments[YB];
        return yB.apply(this, JB)
      };
      return pB
    }

    function vB(BB, TB) {
      return EB(BB, TB, (BB => BB))
    }

    function mB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (dB, VB) => {
        const yB = TB || "_" + String(VB.name);
        return {
          get() {
            return this[yB]?.value
          },
          set(TB) {
            "function" === typeof this[yB]?.value?.equals && this[yB].value.equals(TB) || this[yB].value !== TB && (this[yB].value = TB, this[BB]())
          }
        }
      }
    }
    vB.filter = function(BB) {
      return (TB, dB) => EB(TB, dB, ((TB, dB) => function() {
        for (var VB = arguments.length, yB = new Array(VB), pB = 0; pB < VB; pB++) yB[pB] = arguments[pB];
        return BB(...yB) ? TB(...yB) : dB.apply(this, yB)
      }))
    }
  },
  38772: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB
    });
    var VB = dB(38629),
      yB = dB(38775),
      pB = dB(36183),
      lB = dB(36126),
      JB = dB(38759);
    const YB = function(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const pB = BB();
      yB.c && yB.c.HasTags(TB) && yB.c.AddTagsTo(pB, yB.c.GetTags(TB, !0));
      const lB = (0, JB.f)(pB),
        YB = {};
      for (const yB in lB) {
        const BB = lB[yB],
          JB = TB[yB],
          oB = BB.type;
        if (void 0 !== JB && null !== JB && ("uniqueId" !== yB || gB.AllowLoadingUniqueId)) switch (oB) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof JB.slice ? pB[yB] = JB.slice() : pB[yB] = JB;
            break;
          case 1:
            VB.cloneTexturesOnlyOnce && YB[JB.uniqueId] ? pB[yB] = YB[JB.uniqueId] : (pB[yB] = dB || JB.isRenderTarget ? JB : JB.clone(), YB[JB.uniqueId] = pB[yB]);
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
            pB[yB] = dB ? JB : JB.clone()
        }
      }
      return pB
    };
    class gB {
      static AppendSerializedAnimations(BB, TB) {
        if (BB.animations) {
          TB.animations = [];
          for (let dB = 0; dB < BB.animations.length; dB++) {
            const VB = BB.animations[dB];
            TB.animations.push(VB.serialize())
          }
        }
      }
      static Serialize(BB, TB) {
        TB || (TB = {}), yB.c && (TB.tags = yB.c.GetTags(BB));
        const dB = (0, JB.f)(BB);
        for (const VB in dB) {
          const yB = dB[VB],
            pB = yB.sourceName || VB,
            lB = yB.type,
            JB = BB[VB];
          if (void 0 !== JB && null !== JB && ("uniqueId" !== VB || gB.AllowLoadingUniqueId)) switch (lB) {
            case 0:
              Array.isArray(JB) ? TB[pB] = JB.slice() : TB[pB] = JB;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              TB[pB] = JB.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              TB[pB] = JB.FVB();
              break;
            case 6:
            case 11:
              TB[pB] = JB.id
          }
        }
        return TB
      }
      static ParseProperties(BB, TB, dB, VB) {
        VB || (VB = "");
        const yB = (0, JB.f)(TB);
        for (const JB in yB) {
          const YB = yB[JB],
            oB = BB[YB.sourceName || JB],
            kB = YB.type;
          if (void 0 !== oB && null !== oB && ("uniqueId" !== JB || gB.AllowLoadingUniqueId)) {
            const BB = TB;
            switch (kB) {
              case 0:
                BB[JB] = oB;
                break;
              case 1:
                dB && (BB[JB] = gB._TextureParser(oB, dB, VB));
                break;
              case 2:
                BB[JB] = pB.c.FromArray(oB);
                break;
              case 3:
                BB[JB] = gB._FresnelParametersParser(oB);
                break;
              case 4:
                BB[JB] = lB.l.FromArray(oB);
                break;
              case 5:
                BB[JB] = lB.p.FromArray(oB);
                break;
              case 6:
                dB && (BB[JB] = dB.getLastMeshById(oB));
                break;
              case 7:
                BB[JB] = gB._ColorCurvesParser(oB);
                break;
              case 8:
                BB[JB] = pB.d.FromArray(oB);
                break;
              case 9:
                BB[JB] = gB._ImageProcessingConfigurationParser(oB);
                break;
              case 10:
                BB[JB] = lB.f.FromArray(oB);
                break;
              case 11:
                dB && (BB[JB] = dB.getCameraById(oB));
                break;
              case 12:
                BB[JB] = lB.b.FromArray(oB);
                break;
              case 13:
                BB[JB] = lB.r.FromArray(oB)
            }
          }
        }
      }
      static Parse(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pB = BB();
        return yB.c && yB.c.AddTagsTo(pB, TB.tags), gB.ParseProperties(TB, pB, dB, VB), pB
      }
      static Clone(BB, TB) {
        return YB(BB, TB, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(BB, TB) {
        return YB(BB, TB, !0)
      }
    }
    gB.AllowLoadingUniqueId = !1, gB._ImageProcessingConfigurationParser = BB => {
      throw (0, VB.i)("ImageProcessingConfiguration")
    }, gB._FresnelParametersParser = BB => {
      throw (0, VB.i)("FresnelParameters")
    }, gB._ColorCurvesParser = BB => {
      throw (0, VB.i)("ColorCurves")
    }, gB._TextureParser = (BB, TB, dB) => {
      throw (0, VB.i)("Texture")
    }
  },
  38708: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => yB
    });
    var VB = dB(38657);
    class yB {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = yB.Enabled, this._lastSecValueCount++
      }
      addCount(BB, TB) {
        yB.Enabled && (this._current += BB, this._hasCurrentValue = !0, TB && this._fetchResult())
      }
      beginMonitoring() {
        yB.Enabled && (this._startMonitoringTime = VB.d.Now)
      }
      endMonitoring() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!yB.Enabled) return;
        BB && this.fetchNewFrame();
        const TB = VB.d.Now;
        this._current = TB - this._startMonitoringTime, this._hasCurrentValue = !0, BB && this._fetchResult()
      }
      Zm() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const BB = VB.d.Now;
        BB - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = BB, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    yB.Enabled = !0
  },
  38861: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      g: () => VB
    });
    class VB {
      constructor(BB) {
        this.length = 0, this.data = new Array(BB), this._id = VB._GlobalId++
      }
      push(BB) {
        this.data[this.length++] = BB, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(BB) {
        for (let TB = 0; TB < this.length; TB++) BB(this.data[TB])
      }
      sort(BB) {
        this.data.sort(BB)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(BB) {
        if (0 !== BB.length) {
          this.length + BB.length > this.data.length && (this.data.length = 2 * (this.length + BB.length));
          for (let TB = 0; TB < BB.length; TB++) this.data[this.length++] = (BB.data || BB)[TB]
        }
      }
      indexOf(BB) {
        const TB = this.data.indexOf(BB);
        return TB >= this.length ? -1 : TB
      }
      contains(BB) {
        return -1 !== this.indexOf(BB)
      }
    }
    VB._GlobalId = 0;
    class yB extends VB {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(BB) {
        super.push(BB), BB.__smartArrayFlags || (BB.__smartArrayFlags = {}), BB.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(BB) {
        return (!BB.__smartArrayFlags || BB.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(BB), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(BB) {
        if (0 !== BB.length) {
          this.length + BB.length > this.data.length && (this.data.length = 2 * (this.length + BB.length));
          for (let TB = 0; TB < BB.length; TB++) {
            const dB = (BB.data || BB)[TB];
            this.pushNoDuplicate(dB)
          }
        }
      }
    }
  },
  38775: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    class VB {
      static Eval(BB, TB) {
        return "true" === (BB = BB.match(/\([^()]*\)/g) ? BB.replace(/\([^()]*\)/g, (BB => (BB = BB.slice(1, BB.length - 1), VB._HandleParenthesisContent(BB, TB)))) : VB._HandleParenthesisContent(BB, TB)) || "false" !== BB && VB.Eval(BB, TB)
      }
      static _HandleParenthesisContent(BB, TB) {
        let dB;
        TB = TB || (BB => "true" === BB);
        const yB = BB.split("||");
        for (const pB in yB)
          if (Object.prototype.hasOwnProperty.call(yB, pB)) {
            let BB = VB._SimplifyNegation(yB[pB].trim());
            const lB = BB.split("&&");
            if (lB.length > 1)
              for (let yB = 0; yB < lB.length; ++yB) {
                const pB = VB._SimplifyNegation(lB[yB].trim());
                if (dB = "true" !== pB && "false" !== pB ? "!" === pB[0] ? !TB(pB.substring(1)) : TB(pB) : "true" === pB, !dB) {
                  BB = "false";
                  break
                }
              }
            if (dB || "true" === BB) {
              dB = !0;
              break
            }
            dB = "true" !== BB && "false" !== BB ? "!" === BB[0] ? !TB(BB.substring(1)) : TB(BB) : "true" === BB
          } return dB ? "true" : "false"
      }
      static _SimplifyNegation(BB) {
        return "!true" === (BB = (BB = BB.replace(/^[\s!]+/, (BB => (BB = BB.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? BB = "false" : "!false" === BB && (BB = "true"), BB
      }
    }
    class yB {
      static EnableFor(BB) {
        BB._tags = BB._tags || {}, BB.hasTags = () => yB.HasTags(BB), BB.addTags = TB => yB.AddTagsTo(BB, TB), BB.removeTags = TB => yB.RemoveTagsFrom(BB, TB), BB.matchesTagsQuery = TB => yB.MatchesQuery(BB, TB)
      }
      static DisableFor(BB) {
        delete BB._tags, delete BB.hasTags, delete BB.addTags, delete BB.removeTags, delete BB.matchesTagsQuery
      }
      static HasTags(BB) {
        if (!BB._tags) return !1;
        const TB = BB._tags;
        for (const dB in TB)
          if (Object.prototype.hasOwnProperty.call(TB, dB)) return !0;
        return !1
      }
      static GetTags(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB._tags) return null;
        if (TB) {
          const TB = [];
          for (const dB in BB._tags) Object.prototype.hasOwnProperty.call(BB._tags, dB) && !0 === BB._tags[dB] && TB.push(dB);
          return TB.join(" ")
        }
        return BB._tags
      }
      static AddTagsTo(BB, TB) {
        if (!TB) return;
        if ("string" !== typeof TB) return;
        const dB = TB.split(" ");
        for (const VB of dB) yB._AddTagTo(BB, VB)
      }
      static _AddTagTo(BB, TB) {
        "" !== (TB = TB.trim()) && "true" !== TB && "false" !== TB && (TB.match(/[\s]/) || TB.match(/^([!]|([|]|[&]){2})/) || (yB.EnableFor(BB), BB._tags[TB] = !0))
      }
      static RemoveTagsFrom(BB, TB) {
        if (!yB.HasTags(BB)) return;
        const dB = TB.split(" ");
        for (const VB in dB) yB._RemoveTagFrom(BB, dB[VB])
      }
      static _RemoveTagFrom(BB, TB) {
        delete BB._tags[TB]
      }
      static MatchesQuery(BB, TB) {
        return void 0 === TB || ("" === TB ? yB.HasTags(BB) : VB.Eval(TB, (TB => yB.HasTags(BB) && BB._tags[TB])))
      }
    }
  },
  38902: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(38897),
      yB = dB(36150);
    class pB {
      constructor(BB) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new yB.e, this._scene = BB
      }
      _prepareBuffers() {
        if (this._vertexBuffers[VB.m.PositionKind]) return;
        const BB = [];
        BB.push(1, 1), BB.push(-1, 1), BB.push(-1, -1), BB.push(1, -1), this._vertexBuffers[VB.m.PositionKind] = new VB.m(this._scene.PD(), BB, VB.m.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const BB = [];
        BB.push(0), BB.push(1), BB.push(2), BB.push(0), BB.push(2), BB.push(3), this._indexBuffer = this._scene.PD().createIndexBuffer(BB)
      }
      _getActivePostProcesses(BB) {
        const TB = this._activePostProcesses;
        TB.length = 0;
        for (let dB = 0; dB < BB.length; dB++) {
          const VB = BB[dB];
          VB && TB.push(VB)
        }
        return TB
      }
      _rebuild() {
        const BB = this._vertexBuffers[VB.m.PositionKind];
        BB && (BB._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const dB = this._scene.activeCamera;
        return !!dB && (TB = TB || this._getActivePostProcesses(dB._postProcesses), !(!TB || 0 === TB.length || !this._scene.postProcessesEnabled) && (TB[0].activate(dB, BB, null !== TB && void 0 !== TB), !0))
      }
      directRender(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          pB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.length;
        const JB = this._scene.PD();
        for (let YB = 0; YB < lB; YB++) {
          YB < BB.length - 1 ? BB[YB + 1].activate(this._scene.activeCamera || this._scene, TB?.texture) : (TB ? JB.bindFramebuffer(TB, VB, void 0, void 0, dB, yB) : pB || JB.restoreDefaultFramebuffer(), JB._debugInsertMarker?.(`post process ${BB[YB].name} output`));
          const lB = BB[YB],
            gB = lB.apply();
          gB && (lB.onBeforeRenderObservable.notifyObservers(gB), this._prepareBuffers(), JB.bindBuffers(this._vertexBuffers, this._indexBuffer, gB), JB.drawElementsType(0, 0, 6), lB.onAfterRenderObservable.notifyObservers(gB))
        }
        JB.setDepthBuffer(!0), JB.setDepthWrite(!0)
      }
      _finalizeFrame(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pB = this._scene.activeCamera;
        if (!pB) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (VB = VB || this._getActivePostProcesses(pB._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const lB = this._scene.PD();
        for (let JB = 0, YB = VB.length; JB < YB; JB++) {
          const gB = VB[JB];
          if (JB < YB - 1 ? gB._outputTexture = VB[JB + 1].activate(pB, TB?.texture) : (TB ? (lB.bindFramebuffer(TB, dB, void 0, void 0, yB), gB._outputTexture = TB) : (lB.restoreDefaultFramebuffer(), gB._outputTexture = null), lB._debugInsertMarker?.(`post process ${VB[JB].name} output`)), BB) break;
          const oB = gB.apply();
          oB && (gB.onBeforeRenderObservable.notifyObservers(oB), this._prepareBuffers(), lB.bindBuffers(this._vertexBuffers, this._indexBuffer, oB), lB.drawElementsType(0, 0, 6), gB.onAfterRenderObservable.notifyObservers(oB))
        }
        lB.setDepthBuffer(!0), lB.setDepthWrite(!0), lB.setAlphaMode(0)
      }
      dispose() {
        const BB = this._vertexBuffers[VB.m.PositionKind];
        BB && (BB.dispose(), this._vertexBuffers[VB.m.PositionKind] = null), this._indexBuffer && (this._scene.PD()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  38923: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB
    });
    var VB = dB(38861),
      yB = dB(36126);
    class pB {
      set opaqueSortCompareFn(BB) {
        this._opaqueSortCompareFn = BB || pB.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(BB) {
        this._alphaTestSortCompareFn = BB || pB.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(BB) {
        this._transparentSortCompareFn = BB || pB.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          pB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = BB, this._opaqueSubMeshes = new VB.g(256), this._transparentSubMeshes = new VB.g(256), this._alphaTestSubMeshes = new VB.g(256), this._depthOnlySubMeshes = new VB.g(256), this._particleSystems = new VB.g(256), this._spriteManagers = new VB.g(256), this._empty = !0, this._edgesRenderers = new VB.d(16), this.disableDepthPrePass = !1, this._scene = TB, this.opaqueSortCompareFn = dB, this.alphaTestSortCompareFn = yB, this.transparentSortCompareFn = pB
      }
      render(BB, TB, dB, VB) {
        let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          JB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          YB = arguments.length > 8 ? arguments[8] : void 0;
        if (BB) return void BB(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const gB = this._scene.PD();
        yB && 0 !== this._depthOnlySubMeshes.length && (gB.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), gB.setColorWrite(!0)), pB && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), lB && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const oB = gB.getStencilBuffer();
        if (gB.setStencilBuffer(!1), TB && this._renderSprites(), dB && this._renderParticles(VB), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), JB && (YB || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (gB.setStencilBuffer(oB), YB) YB(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const BB = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            BB.length && this._renderTransparent(BB)
          } else this._renderTransparent(this._transparentSubMeshes);
          gB.setAlphaMode(0)
        }
        if (gB.setStencilBuffer(!1), pB && this._edgesRenderers.length) {
          for (let BB = 0; BB < this._edgesRenderers.length; BB++) this._edgesRenderers.data[BB].render();
          gB.setAlphaMode(0)
        }
        gB.setStencilBuffer(oB)
      }
      _renderOpaqueSorted(BB) {
        pB._RenderSorted(BB, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(BB) {
        pB._RenderSorted(BB, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(BB) {
        pB._RenderSorted(BB, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(BB, TB, dB, VB, lB) {
        let JB, YB = 0;
        const gB = dB ? dB.globalPosition : pB._ZeroVector;
        if (VB && TB !== pB.PainterSortCompare)
          for (; YB < BB.length; YB++) JB = BB.data[YB], JB._alphaIndex = JB.getMesh().alphaIndex, JB._distanceToCamera = yB.p.Distance(JB.IK().bVB.centerWorld, gB);
        const oB = BB.length === BB.data.length ? BB.data : BB.data.slice(0, BB.length);
        TB && oB.sort(TB);
        const kB = oB[0].getMesh().jU();
        for (YB = 0; YB < oB.length; YB++) {
          if (JB = oB[YB], kB._activeMeshesFrozenButKeepClipping && !JB.isInFrustum(kB._frustumPlanes)) continue;
          let BB = !1;
          if (VB) {
            const TB = JB.XD();
            if (TB && TB.needDepthPrePass && !lB) {
              BB = !0;
              const dB = TB.jU().PD();
              dB.setColorWrite(!1), dB.setAlphaMode(0), JB.render(!1), dB.setColorWrite(!0)
            }
          }
          const TB = JB._renderingMesh;
          !BB && TB._renderRunFollower(JB, VB) || JB.render(VB)
        }
      }
      static defaultTransparentSortCompare(BB, TB) {
        return BB._alphaIndex > TB._alphaIndex ? 1 : BB._alphaIndex < TB._alphaIndex ? -1 : pB.backToFrontSortCompare(BB, TB)
      }
      static backToFrontSortCompare(BB, TB) {
        return BB._distanceToCamera < TB._distanceToCamera ? 1 : BB._distanceToCamera > TB._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(BB, TB) {
        return BB._distanceToCamera < TB._distanceToCamera ? -1 : BB._distanceToCamera > TB._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(BB, TB) {
        const dB = BB.getMesh(),
          VB = TB.getMesh();
        return dB.material && VB.material ? dB.material.uniqueId - VB.material.uniqueId : dB.uniqueId - VB.uniqueId
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
      dispatch(BB, TB, dB) {
        void 0 === TB && (TB = BB.getMesh()), void 0 === dB && (dB = BB.XD()), null !== dB && void 0 !== dB && (dB.needAlphaBlendingForMesh(TB) ? this._transparentSubMeshes.push(BB) : dB.needAlphaTestingForMesh(TB) ? (dB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._alphaTestSubMeshes.push(BB)) : (dB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._opaqueSubMeshes.push(BB)), TB._renderingGroup = this, TB._edgesRenderer && TB.isEnabled() && TB.isVisible && TB._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(TB._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(BB) {
        this._spriteManagers.push(BB), this._empty = !1
      }
      dispatchParticles(BB) {
        this._particleSystems.push(BB), this._empty = !1
      }
      _renderParticles(BB) {
        if (0 === this._particleSystems.length) return;
        const TB = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let dB = 0; dB < this._particleSystems.length; dB++) {
          const VB = this._particleSystems.data[dB];
          if (0 === (TB && TB.layerMask & VB.layerMask)) continue;
          const yB = VB.emitter;
          yB.position && BB && -1 === BB.indexOf(yB) || this._scene._activeParticles.addCount(VB.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const BB = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let TB = 0; TB < this._spriteManagers.length; TB++) {
          const dB = this._spriteManagers.data[TB];
          0 !== (BB && BB.layerMask & dB.layerMask) && dB.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    pB._ZeroVector = yB.p.Zero()
  },
  38916: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(38923);
    class yB {}
    class pB {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(BB) {
        this._disableDepthPrePass = BB;
        for (const TB of this._renderingGroups) TB.disableDepthPrePass = BB
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(BB) {
        BB !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = BB, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const BB of this._scene.meshes)
          if (BB.oN)
            for (const TB of BB.oN) TB._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const BB of this._scene.spriteManagers) BB._wasDispatched = !1;
        for (const BB of this._scene.kN) BB._wasDispatched = !1
      }
      constructor(BB) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new yB, this._maintainStateBetweenFrames = !1, this._scene = BB;
        for (let TB = pB.MIN_RENDERINGGROUPS; TB < pB.MAX_RENDERINGGROUPS; TB++) this._autoClearDepthStencil[TB] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(BB) {
        const TB = BB || 0;
        return this._prepareRenderingGroup(TB), this._renderingGroups[TB]
      }
      _clearDepthStencilBuffer() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.PD().clear(null, !1, BB, TB), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(BB, TB, dB, VB) {
        let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          lB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          JB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          YB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          gB = arguments.length > 8 ? arguments[8] : void 0,
          oB = arguments.length > 9 ? arguments[9] : void 0;
        const kB = this._renderingGroupInfo;
        kB.Gu = this._scene, kB.camera = this._scene.activeCamera, kB.renderingManager = this;
        const LB = oB ?? this._scene.spriteManagers;
        if (LB && VB)
          for (let pB = 0; pB < LB.length; pB++) {
            const BB = LB[pB];
            this.dispatchSprites(BB)
          }
        for (let OB = pB.MIN_RENDERINGGROUPS; OB < pB.MAX_RENDERINGGROUPS; OB++) {
          this._depthStencilBufferAlreadyCleaned = OB === pB.MIN_RENDERINGGROUPS;
          const oB = this._renderingGroups[OB];
          if (!oB || oB._empty) continue;
          const LB = 1 << OB;
          if (kB.renderingGroupId = OB, this._scene.onBeforeRenderingGroupObservable.notifyObservers(kB, LB), pB.AUTOCLEAR) {
            const BB = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(OB) : this._autoClearDepthStencil[OB];
            BB && BB.autoClear && this._clearDepthStencilBuffer(BB.depth, BB.stencil)
          }
          for (let BB = 0, TB = this._scene._beforeRenderingGroupDrawStage; BB < TB.length; BB++) {
            TB[BB].action(OB)
          }
          oB.render(BB, VB, dB, TB, yB, lB, JB, YB, gB);
          for (let BB = 0, TB = this._scene._afterRenderingGroupDrawStage; BB < TB.length; BB++) {
            TB[BB].action(OB)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(kB, LB)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = pB.MIN_RENDERINGGROUPS; BB < pB.MAX_RENDERINGGROUPS; BB++) {
            const TB = this._renderingGroups[BB];
            TB && TB.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = pB.MIN_RENDERINGGROUPS; BB < pB.MAX_RENDERINGGROUPS; BB++) {
            const TB = this._renderingGroups[BB];
            TB && TB.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let BB = pB.MIN_RENDERINGGROUPS; BB < pB.MAX_RENDERINGGROUPS; BB++) {
          const TB = this._renderingGroups[BB];
          TB && TB.dispose()
        }
      }
      _prepareRenderingGroup(BB) {
        void 0 === this._renderingGroups[BB] && (this._renderingGroups[BB] = new VB.c(BB, this._scene, this._customOpaqueSortCompareFn[BB], this._customAlphaTestSortCompareFn[BB], this._customTransparentSortCompareFn[BB]), this._renderingGroups[BB].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchSprites(BB))
      }
      dispatchParticles(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchParticles(BB))
      }
      dispatch(BB, TB, dB) {
        void 0 === TB && (TB = BB.getMesh()), this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(TB.renderingGroupId).dispatch(BB, TB, dB))
      }
      setRenderingOrder(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[BB] = TB, this._customAlphaTestSortCompareFn[BB] = dB, this._customTransparentSortCompareFn[BB] = VB, this._renderingGroups[BB]) {
          const TB = this._renderingGroups[BB];
          TB.opaqueSortCompareFn = this._customOpaqueSortCompareFn[BB], TB.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[BB], TB.transparentSortCompareFn = this._customTransparentSortCompareFn[BB]
        }
      }
      setRenderingAutoClearDepthStencil(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[BB] = {
          autoClear: TB,
          depth: dB,
          stencil: VB
        }
      }
      getAutoClearDepthStencilSetup(BB) {
        return this._autoClearDepthStencil[BB]
      }
    }
    pB.MAX_RENDERINGGROUPS = 4, pB.MIN_RENDERINGGROUPS = 0, pB.AUTOCLEAR = !0
  },
  38665: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      constructor(BB) {
        this._supportBlendParametersPerTarget = BB, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(BB) {
        this.setAlphaBlend(BB)
      }
      setAlphaBlend(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[TB] !== BB && (BB ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[TB] = BB, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(BB, TB, dB, VB) {
        this._blendConstants[0] === BB && this._blendConstants[1] === TB && this._blendConstants[2] === dB && this._blendConstants[3] === VB || (this._blendConstants[0] = BB, this._blendConstants[1] = TB, this._blendConstants[2] = dB, this._blendConstants[3] = VB, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(BB, TB, dB, VB) {
        const yB = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[yB + 0] === BB && this._blendFunctionParameters[yB + 1] === TB && this._blendFunctionParameters[yB + 2] === dB && this._blendFunctionParameters[yB + 3] === VB || (this._blendFunctionParameters[yB + 0] = BB, this._blendFunctionParameters[yB + 1] = TB, this._blendFunctionParameters[yB + 2] = dB, this._blendFunctionParameters[yB + 3] = VB, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(BB, TB) {
        const dB = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[dB + 0] === BB && this._blendEquationParameters[dB + 1] === TB || (this._blendEquationParameters[dB + 0] = BB, this._blendEquationParameters[dB + 1] = TB, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== TB && (this._numTargets = TB, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== dB && (this._blendDisabledTargetsMask = dB, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (BB.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === TB || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (TB > 1 && 0 !== dB && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & dB) ? BB.enable(BB.BLEND) : BB.disable(BB.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (BB.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (BB.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const VB = BB;
        if (this._isAlphaBlendDirty) {
          for (let yB = 0; yB < TB; yB++) {
            const TB = yB < this._numTargetEnabled ? yB : 0;
            this._alphaBlend[TB] && 0 === (dB & 1 << yB) ? VB.enableIndexed(BB.BLEND, yB) : VB.disableIndexed(BB.BLEND, yB)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let BB = 0; BB < TB; BB++) {
            const TB = BB < this._numTargetEnabled ? 4 * BB : 0;
            VB.blendFuncSeparateIndexed(BB, this._blendFunctionParameters[TB + 0], this._blendFunctionParameters[TB + 1], this._blendFunctionParameters[TB + 2], this._blendFunctionParameters[TB + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let BB = 0; BB < TB; BB++) {
            const TB = BB < this._numTargetEnabled ? 2 * BB : 0;
            VB.blendEquationSeparateIndexed(BB, this._blendEquationParameters[TB + 0], this._blendEquationParameters[TB + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(BB, TB) {
        let dB = 32774;
        switch (BB) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, TB);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, TB);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, TB);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, TB);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, TB);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, TB);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, TB);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, TB);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, TB);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, TB);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, TB);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, TB);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, TB);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, TB);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, TB);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, TB);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, TB), dB = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, TB), dB = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, TB);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, TB)
        }
        this.setAlphaEquationParameters(dB, dB, TB)
      }
    }
  },
  38955: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {}
    VB._IsPickingAvailable = !1
  },
  38843: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => Jd,
      g: () => pd
    });
    var VB = dB(38848),
      yB = dB(38645),
      pB = dB(38657),
      lB = dB(36150),
      JB = dB(38861);
    class YB {
      constructor() {
        this._count = 0, this._data = {}
      }
      bdB(BB) {
        this.clear(), BB.forEach(((BB, TB) => this.add(BB, TB)))
      }
      get(BB) {
        const TB = this._data[BB];
        if (void 0 !== TB) return TB
      }
      getOrAddWithFactory(BB, TB) {
        let dB = this.get(BB);
        return void 0 !== dB || (dB = TB(BB), dB && this.add(BB, dB)), dB
      }
      getOrAdd(BB, TB) {
        const dB = this.get(BB);
        return void 0 !== dB ? dB : (this.add(BB, TB), TB)
      }
      contains(BB) {
        return void 0 !== this._data[BB]
      }
      add(BB, TB) {
        return void 0 === this._data[BB] && (this._data[BB] = TB, ++this._count, !0)
      }
      set(BB, TB) {
        return void 0 !== this._data[BB] && (this._data[BB] = TB, !0)
      }
      getAndRemove(BB) {
        const TB = this.get(BB);
        return void 0 !== TB ? (delete this._data[BB], --this._count, TB) : null
      }
      remove(BB) {
        return !!this.contains(BB) && (delete this._data[BB], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(BB) {
        for (const TB in this._data) {
          BB(TB, this._data[TB])
        }
      }
      first(BB) {
        for (const TB in this._data) {
          const dB = BB(TB, this._data[TB]);
          if (dB) return dB
        }
        return null
      }
    }
    var gB = dB(38775),
      oB = dB(36126),
      kB = dB(38863),
      LB = dB(38880),
      OB = dB(38889);
    class DB {
      constructor(BB, TB, dB, VB, yB, pB) {
        this.source = BB, this.pointerX = TB, this.pointerY = dB, this.meshUnderPointer = VB, this.sourceEvent = yB, this.additionalData = pB
      }
      static CreateNew(BB, TB, dB) {
        const VB = BB.jU();
        return new DB(BB, VB.pointerX, VB.pointerY, VB.meshUnderPointer || BB, TB, dB)
      }
      static CreateNewFromSprite(BB, TB, dB, VB) {
        return new DB(BB, TB.pointerX, TB.pointerY, TB.meshUnderPointer, dB, VB)
      }
      static CreateNewFromScene(BB, TB) {
        return new DB(null, BB.pointerX, BB.pointerY, BB.meshUnderPointer, TB)
      }
      static CreateNewFromPrimitive(BB, TB, dB, VB) {
        return new DB(BB, TB.x, TB.y, null, dB, VB)
      }
    }
    var uB = dB(38902),
      HB = dB(38908),
      EB = dB(38916),
      vB = dB(38927),
      mB = dB(38606),
      iB = dB(36148),
      NB = dB(38629),
      tB = dB(38930);
    class fB {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const BB in fB.Triggers)
          if (Object.prototype.hasOwnProperty.call(fB.Triggers, BB)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const BB in fB.Triggers)
          if (Object.prototype.hasOwnProperty.call(fB.Triggers, BB)) {
            const TB = parseInt(BB);
            if (TB >= 1 && TB <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(BB) {
        for (const TB in fB.Triggers)
          if (Object.prototype.hasOwnProperty.call(fB.Triggers, TB)) {
            if (parseInt(TB) === BB) return !0
          } return !1
      }
    }
    fB.Triggers = {};
    var sB, MB, zB, wB, UB, FB, KB, rB = dB(38938);
    ! function(BB) {
      BB[BB.Generic = 0] = "Generic", BB[BB.Keyboard = 1] = "Keyboard", BB[BB.Mouse = 2] = "Mouse", BB[BB.Touch = 3] = "Touch", BB[BB.DualShock = 4] = "DualShock", BB[BB.Xbox = 5] = "Xbox", BB[BB.Switch = 6] = "Switch", BB[BB.DualSense = 7] = "DualSense"
    }(sB || (sB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.Move = 12] = "Move"
    }(MB || (MB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.DeltaHorizontal = 10] = "DeltaHorizontal", BB[BB.DeltaVertical = 11] = "DeltaVertical"
    }(zB || (zB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Share = 8] = "Share", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(wB || (wB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Create = 8] = "Create", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(UB || (UB = {})),
    function(BB) {
      BB[BB.A = 0] = "A", BB[BB.B = 1] = "B", BB[BB.X = 2] = "X", BB[BB.Y = 3] = "Y", BB[BB.LB = 4] = "LB", BB[BB.RB = 5] = "RB", BB[BB.LT = 6] = "LT", BB[BB.RT = 7] = "RT", BB[BB.Back = 8] = "Back", BB[BB.Start = 9] = "Start", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.LStickXAxis = 17] = "LStickXAxis", BB[BB.LStickYAxis = 18] = "LStickYAxis", BB[BB.RStickXAxis = 19] = "RStickXAxis", BB[BB.RStickYAxis = 20] = "RStickYAxis"
    }(FB || (FB = {})),
    function(BB) {
      BB[BB.B = 0] = "B", BB[BB.A = 1] = "A", BB[BB.Y = 2] = "Y", BB[BB.X = 3] = "X", BB[BB.L = 4] = "L", BB[BB.R = 5] = "R", BB[BB.ZL = 6] = "ZL", BB[BB.ZR = 7] = "ZR", BB[BB.Minus = 8] = "Minus", BB[BB.Plus = 9] = "Plus", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.Capture = 17] = "Capture", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(KB || (KB = {}));
    var IB = dB(38946);
    class cB {
      static CreateDeviceEvent(BB, TB, dB, VB, yB, pB, lB) {
        switch (BB) {
          case sB.Keyboard:
            return this._CreateKeyboardEvent(dB, VB, yB, pB);
          case sB.Mouse:
            if (dB === MB.MouseWheelX || dB === MB.MouseWheelY || dB === MB.MouseWheelZ) return this._CreateWheelEvent(BB, TB, dB, VB, yB, pB);
          case sB.Touch:
            return this._CreatePointerEvent(BB, TB, dB, VB, yB, pB, lB);
          default:
            throw `Unable to generate event for device ${sB[BB]}`
        }
      }
      static _CreatePointerEvent(BB, TB, dB, VB, yB, pB, lB) {
        const JB = this._CreateMouseEvent(BB, TB, dB, VB, yB, pB);
        BB === sB.Mouse ? (JB.deviceType = sB.Mouse, JB.pointerId = 1, JB.pointerType = "mouse") : (JB.deviceType = sB.Touch, JB.pointerId = lB ?? TB, JB.pointerType = "touch");
        let YB = 0;
        return YB += yB.pollInput(BB, TB, MB.LeftClick), YB += 2 * yB.pollInput(BB, TB, MB.RightClick), YB += 4 * yB.pollInput(BB, TB, MB.MiddleClick), JB.buttons = YB, dB === MB.Move ? JB.type = "pointermove" : dB >= MB.LeftClick && dB <= MB.RightClick && (JB.type = 1 === VB ? "pointerdown" : "pointerup", JB.button = dB - 2), JB
      }
      static _CreateWheelEvent(BB, TB, dB, VB, yB, pB) {
        const lB = this._CreateMouseEvent(BB, TB, dB, VB, yB, pB);
        switch (lB.pointerId = 1, lB.type = "wheel", lB.deltaMode = IB.b.DOM_DELTA_PIXEL, lB.deltaX = 0, lB.deltaY = 0, lB.deltaZ = 0, dB) {
          case MB.MouseWheelX:
            lB.deltaX = VB;
            break;
          case MB.MouseWheelY:
            lB.deltaY = VB;
            break;
          case MB.MouseWheelZ:
            lB.deltaZ = VB
        }
        return lB
      }
      static _CreateMouseEvent(BB, TB, dB, VB, yB, pB) {
        const lB = this._CreateEvent(pB),
          JB = yB.pollInput(BB, TB, MB.Horizontal),
          YB = yB.pollInput(BB, TB, MB.Vertical);
        return pB ? (lB.movementX = 0, lB.movementY = 0, lB.offsetX = lB.movementX - pB.getBoundingClientRect().x, lB.offsetY = lB.movementY - pB.getBoundingClientRect().y) : (lB.movementX = yB.pollInput(BB, TB, 10), lB.movementY = yB.pollInput(BB, TB, 11), lB.offsetX = 0, lB.offsetY = 0), this._CheckNonCharacterKeys(lB, yB), lB.clientX = JB, lB.clientY = YB, lB.x = JB, lB.y = YB, lB.deviceType = BB, lB.deviceSlot = TB, lB.inputIndex = dB, lB
      }
      static _CreateKeyboardEvent(BB, TB, dB, VB) {
        const yB = this._CreateEvent(VB);
        return this._CheckNonCharacterKeys(yB, dB), yB.deviceType = sB.Keyboard, yB.deviceSlot = 0, yB.inputIndex = BB, yB.type = 1 === TB ? "keydown" : "keyup", yB.key = String.fromCharCode(BB), yB.keyCode = BB, yB
      }
      static _CheckNonCharacterKeys(BB, TB) {
        const dB = TB.isDeviceAvailable(sB.Keyboard),
          VB = dB && 1 === TB.pollInput(sB.Keyboard, 0, 18),
          yB = dB && 1 === TB.pollInput(sB.Keyboard, 0, 17),
          pB = dB && (1 === TB.pollInput(sB.Keyboard, 0, 91) || 1 === TB.pollInput(sB.Keyboard, 0, 92) || 1 === TB.pollInput(sB.Keyboard, 0, 93)),
          lB = dB && 1 === TB.pollInput(sB.Keyboard, 0, 16);
        BB.altKey = VB, BB.ctrlKey = yB, BB.metaKey = pB, BB.shiftKey = lB
      }
      static _CreateEvent(BB) {
        const TB = {
          preventDefault: () => {}
        };
        return TB.target = BB, TB
      }
    }
    class SB {
      constructor(BB, TB, dB) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(BB, TB, ((BB, TB, VB, yB) => {
          const pB = cB.CreateDeviceEvent(BB, TB, VB, yB, this);
          dB(BB, TB, pB)
        })) : this._createDummyNativeInput()
      }
      pollInput(BB, TB, dB) {
        return this._nativeInput.pollInput(BB, TB, dB)
      }
      isDeviceAvailable(BB) {
        return BB === sB.Mouse || BB === sB.Touch
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
    const PB = Object.keys(MB).length / 2;
    class QB {
      constructor(BB, TB, dB, yB) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = VB.h.IsSafari(), this._usingMacOs = (0, mB.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = BB => {}, this._keyboardUpEvent = BB => {}, this._keyboardBlurEvent = BB => {}, this._pointerMoveEvent = BB => {}, this._pointerDownEvent = BB => {}, this._pointerUpEvent = BB => {}, this._pointerCancelEvent = BB => {}, this._pointerCancelTouch = BB => {}, this._pointerLeaveEvent = BB => {}, this._pointerWheelEvent = BB => {}, this._pointerBlurEvent = BB => {}, this._pointerMacOsChromeOutEvent = BB => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, mB.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, mB.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = BB => {}, this._gamepadDisconnectedEvent = BB => {}, this._eventPrefix = VB.h.GetPointerPrefix(BB), this._engine = BB, this._onDeviceConnected = TB, this._onDeviceDisconnected = dB, this._onInputChanged = yB, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(BB, TB, dB) {
        const yB = this._inputs[BB][TB];
        if (!yB) throw `Unable to find device ${sB[BB]}`;
        BB >= sB.DualShock && BB <= sB.DualSense && this._updateDevice(BB, TB, dB);
        const pB = yB[dB];
        if (void 0 === pB) throw `Unable to find input ${dB} for device ${sB[BB]} in slot ${TB}`;
        return dB === MB.Move && VB.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), pB
      }
      isDeviceAvailable(BB) {
        return void 0 !== this._inputs[BB]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const BB = this?._engine.getInputElement();
        if (BB && (!this._eventsAttached || this._elementToAttachTo !== BB)) {
          if (this._disableEvents(), this._inputs)
            for (const BB of this._inputs)
              if (BB)
                for (const TB in BB) {
                  const dB = BB[+TB];
                  if (dB)
                    for (let BB = 0; BB < dB.length; BB++) dB[BB] = 0
                }
          this._elementToAttachTo = BB, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "lD", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const BB = navigator.getGamepads();
          for (const TB of BB) TB && this._addGamePad(TB)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(sB.Mouse, 0, 0, 0)
      }
      _addGamePad(BB) {
        const TB = this._getGamepadDeviceType(BB.id),
          dB = BB.index;
        this._gamepads = this._gamepads || new Array(BB.index + 1), this._registerDevice(TB, dB, BB.buttons.length + BB.axes.length), this._gamepads[dB] = TB
      }
      _addPointerDevice(BB, TB, dB, VB) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(BB, TB, PB);
        const yB = this._inputs[BB][TB];
        yB[0] = dB, yB[1] = VB
      }
      _registerDevice(BB, TB, dB) {
        if (void 0 === TB) throw `Unable to register device ${sB[BB]} to undefined slot.`;
        if (this._inputs[BB] || (this._inputs[BB] = {}), !this._inputs[BB][TB]) {
          const VB = new Array(dB);
          VB.fill(0), this._inputs[BB][TB] = VB, this._onDeviceConnected(BB, TB)
        }
      }
      _unregisterDevice(BB, TB) {
        this._inputs[BB][TB] && (delete this._inputs[BB][TB], this._onDeviceDisconnected(BB, TB))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(sB.Keyboard, 0, 255));
          const TB = this._inputs[sB.Keyboard][0];
          if (TB) {
            TB[BB.keyCode] = 1;
            const dB = BB;
            dB.inputIndex = BB.keyCode, this._usingMacOs && BB.metaKey && "Meta" !== BB.key && (this._metaKeys.includes(BB.keyCode) || this._metaKeys.push(BB.keyCode)), this._onInputChanged(sB.Keyboard, 0, dB)
          }
        }, this._keyboardUpEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(sB.Keyboard, 0, 255));
          const TB = this._inputs[sB.Keyboard][0];
          if (TB) {
            TB[BB.keyCode] = 0;
            const dB = BB;
            if (dB.inputIndex = BB.keyCode, this._usingMacOs && "Meta" === BB.key && this._metaKeys.length > 0) {
              for (const BB of this._metaKeys) {
                const dB = cB.CreateDeviceEvent(sB.Keyboard, 0, BB, 0, this, this._elementToAttachTo);
                TB[BB] = 0, this._onInputChanged(sB.Keyboard, 0, dB)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(sB.Keyboard, 0, dB)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const BB = this._inputs[sB.Keyboard][0];
            for (let TB = 0; TB < BB.length; TB++)
              if (0 !== BB[TB]) {
                BB[TB] = 0;
                const dB = cB.CreateDeviceEvent(sB.Keyboard, 0, TB, 0, this, this._elementToAttachTo);
                this._onInputChanged(sB.Keyboard, 0, dB)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, mB.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let VB = 0; VB < this._maxTouchPoints; VB++) this._activeTouchIds[VB] = -1;
        this._pointerMoveEvent = BB => {
          const TB = this._getPointerType(BB);
          let dB = TB === sB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (TB === sB.Touch && -1 === dB) {
            if (0 === BB.buttons) return;
            const yB = this._activeTouchIds.indexOf(-1);
            if (!(yB >= 0)) return void VB.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            dB = yB, this._activeTouchIds[yB] = BB.pointerId, this._onDeviceConnected(TB, dB)
          }
          this._inputs[TB] || (this._inputs[TB] = {}), this._inputs[TB][dB] || this._addPointerDevice(TB, dB, BB.clientX, BB.clientY);
          const yB = this._inputs[TB][dB];
          if (yB) {
            const VB = BB;
            VB.inputIndex = MB.Move, yB[MB.Horizontal] = BB.clientX, yB[MB.Vertical] = BB.clientY, TB === sB.Touch && 0 === yB[MB.LeftClick] && (yB[MB.LeftClick] = 1), void 0 === BB.pointerId && (BB.pointerId = this._mouseId), this._onInputChanged(TB, dB, VB), this._usingSafari || -1 === BB.button || (VB.inputIndex = BB.button + 2, yB[BB.button + 2] = yB[BB.button + 2] ? 0 : 1, this._onInputChanged(TB, dB, VB))
          }
        }, this._pointerDownEvent = BB => {
          const TB = this._getPointerType(BB);
          let dB = TB === sB.Mouse ? 0 : BB.pointerId;
          if (TB === sB.Touch) {
            let TB = this._activeTouchIds.indexOf(BB.pointerId);
            if (-1 === TB && (TB = this._activeTouchIds.indexOf(-1)), !(TB >= 0)) return void VB.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            dB = TB, this._activeTouchIds[TB] = BB.pointerId
          }
          this._inputs[TB] || (this._inputs[TB] = {}), this._inputs[TB][dB] ? TB === sB.Touch && this._onDeviceConnected(TB, dB) : this._addPointerDevice(TB, dB, BB.clientX, BB.clientY);
          const yB = this._inputs[TB][dB];
          if (yB) {
            const VB = yB[MB.Horizontal],
              lB = yB[MB.Vertical];
            if (TB === sB.Mouse) {
              if (void 0 === BB.pointerId && (BB.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (pB) {}
            } else if (BB.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(BB.pointerId)
            } catch (pB) {}
            yB[MB.Horizontal] = BB.clientX, yB[MB.Vertical] = BB.clientY, yB[BB.button + 2] = 1;
            const JB = BB;
            JB.inputIndex = BB.button + 2, this._onInputChanged(TB, dB, JB), VB === BB.clientX && lB === BB.clientY || (JB.inputIndex = MB.Move, this._onInputChanged(TB, dB, JB))
          }
        }, this._pointerUpEvent = BB => {
          const TB = this._getPointerType(BB),
            dB = TB === sB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (TB === sB.Touch) {
            if (-1 === dB) return;
            this._activeTouchIds[dB] = -1
          }
          const VB = this._inputs[TB]?.[dB];
          let yB = BB.button,
            pB = VB && 0 !== VB[yB + 2];
          if (!pB && this._isUsingFirefox && this._usingMacOs && VB && (yB = 2 === yB ? 0 : 2, pB = 0 !== VB[yB + 2]), pB) {
            const pB = VB[MB.Horizontal],
              lB = VB[MB.Vertical];
            VB[MB.Horizontal] = BB.clientX, VB[MB.Vertical] = BB.clientY, VB[yB + 2] = 0;
            const JB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), pB === BB.clientX && lB === BB.clientY || (JB.inputIndex = MB.Move, this._onInputChanged(TB, dB, JB)), JB.inputIndex = yB + 2, TB === sB.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : BB.pointerId && this._elementToAttachTo.hasPointerCapture?.(BB.pointerId) && this._elementToAttachTo.releasePointerCapture(BB.pointerId), this._onInputChanged(TB, dB, JB), TB === sB.Touch && this._onDeviceDisconnected(TB, dB)
          }
        }, this._pointerCancelTouch = BB => {
          const TB = this._activeTouchIds.indexOf(BB);
          if (-1 === TB) return;
          this._elementToAttachTo.hasPointerCapture?.(BB) && this._elementToAttachTo.releasePointerCapture(BB), this._inputs[sB.Touch][TB][MB.LeftClick] = 0;
          const dB = cB.CreateDeviceEvent(sB.Touch, TB, MB.LeftClick, 0, this, this._elementToAttachTo, BB);
          this._onInputChanged(sB.Touch, TB, dB), this._activeTouchIds[TB] = -1, this._onDeviceDisconnected(sB.Touch, TB)
        }, this._pointerCancelEvent = BB => {
          if ("mouse" === BB.pointerType) {
            const BB = this._inputs[sB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let TB = MB.LeftClick; TB <= MB.BrowserForward; TB++)
              if (1 === BB[TB]) {
                BB[TB] = 0;
                const dB = cB.CreateDeviceEvent(sB.Mouse, 0, TB, 0, this, this._elementToAttachTo);
                this._onInputChanged(sB.Mouse, 0, dB)
              }
          } else this._pointerCancelTouch(BB.pointerId)
        }, this._pointerLeaveEvent = BB => {
          "pen" === BB.pointerType && this._pointerCancelTouch(BB.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let BB = !1;
        const TB = function() {};
        try {
          const dB = Object.defineProperty({}, "passive", {
            get: function() {
              BB = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", TB, dB), this._elementToAttachTo.removeEventListener("test", TB, dB)
        } catch (dB) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(sB.Mouse)) {
            const BB = this._inputs[sB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let TB = MB.LeftClick; TB <= MB.BrowserForward; TB++)
              if (1 === BB[TB]) {
                BB[TB] = 0;
                const dB = cB.CreateDeviceEvent(sB.Mouse, 0, TB, 0, this, this._elementToAttachTo);
                this._onInputChanged(sB.Mouse, 0, dB)
              }
          }
          if (this.isDeviceAvailable(sB.Touch)) {
            const BB = this._inputs[sB.Touch];
            for (let TB = 0; TB < this._activeTouchIds.length; TB++) {
              const dB = this._activeTouchIds[TB];
              if (this._elementToAttachTo.hasPointerCapture?.(dB) && this._elementToAttachTo.releasePointerCapture(dB), -1 !== dB && 1 === BB[TB]?.[MB.LeftClick]) {
                BB[TB][MB.LeftClick] = 0;
                const VB = cB.CreateDeviceEvent(sB.Touch, TB, MB.LeftClick, 0, this, this._elementToAttachTo, dB);
                this._onInputChanged(sB.Touch, TB, VB), this._activeTouchIds[TB] = -1, this._onDeviceDisconnected(sB.Touch, TB)
              }
            }
          }
        }, this._pointerWheelEvent = BB => {
          const TB = sB.Mouse;
          this._inputs[TB] || (this._inputs[TB] = []), this._inputs[TB][0] || (this._pointerActive = !0, this._registerDevice(TB, 0, PB));
          const dB = this._inputs[TB][0];
          if (dB) {
            dB[MB.MouseWheelX] = BB.deltaX || 0, dB[MB.MouseWheelY] = BB.deltaY || BB.wheelDelta || 0, dB[MB.MouseWheelZ] = BB.deltaZ || 0;
            const VB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), 0 !== dB[MB.MouseWheelX] && (VB.inputIndex = MB.MouseWheelX, this._onInputChanged(TB, 0, VB)), 0 !== dB[MB.MouseWheelY] && (VB.inputIndex = MB.MouseWheelY, this._onInputChanged(TB, 0, VB)), 0 !== dB[MB.MouseWheelZ] && (VB.inputIndex = MB.MouseWheelZ, this._onInputChanged(TB, 0, VB))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = BB => {
          BB.buttons > 1 && this._pointerCancelEvent(BB)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "lD", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!BB && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(sB.Mouse)) {
            const BB = this._inputs[sB.Mouse][0];
            BB[MB.MouseWheelX] = 0, BB[MB.MouseWheelY] = 0, BB[MB.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = BB => {
          this._addGamePad(BB.gamepad)
        }, this._gamepadDisconnectedEvent = BB => {
          if (this._gamepads) {
            const TB = this._getGamepadDeviceType(BB.gamepad.id),
              dB = BB.gamepad.index;
            this._unregisterDevice(TB, dB), delete this._gamepads[dB]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(BB, TB, dB) {
        const VB = navigator.getGamepads()[TB];
        if (VB && BB === this._gamepads[TB]) {
          const yB = this._inputs[BB][TB];
          dB >= VB.buttons.length ? yB[dB] = VB.axes[dB - VB.buttons.length].valueOf() : yB[dB] = VB.buttons[dB].value
        }
      }
      _getGamepadDeviceType(BB) {
        return -1 !== BB.indexOf("054c") ? -1 !== BB.indexOf("0ce6") ? sB.DualSense : sB.DualShock : -1 !== BB.indexOf("Xbox One") || -1 !== BB.search("Xbox 360") || -1 !== BB.search("xinput") || -1 !== BB.indexOf("045e") && -1 === BB.indexOf("Surface Dock") ? sB.Xbox : -1 !== BB.indexOf("057e") ? sB.Switch : sB.Generic
      }
      _getPointerType(BB) {
        let TB = sB.Mouse;
        return ("touch" === BB.pointerType || "pen" === BB.pointerType || BB.touches) && (TB = sB.Touch), TB
      }
    }
    class RB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = TB, this.deviceSlot = dB, this.onInputChangedObservable = new lB.e, this._deviceInputSystem = BB
      }
      getInput(BB) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, BB)
      }
    }
    class aB {
      constructor(BB) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = BB => {
          for (let TB = 0; TB < this._devices.length; TB++) {
            const dB = this._devices[TB];
            for (const VB in dB) {
              const dB = +VB;
              BB._addDevice(new RB(this._deviceInputSystem, TB, dB))
            }
          }
          this._registeredManagers.push(BB)
        }, this.unregisterManager = BB => {
          const TB = this._registeredManagers.indexOf(BB);
          TB > -1 && this._registeredManagers.splice(TB, 1)
        };
        const TB = Object.keys(sB).length / 2;
        this._devices = new Array(TB);
        const dB = (BB, TB) => {
            this._devices[BB] || (this._devices[BB] = new Array), this._devices[BB][TB] || (this._devices[BB][TB] = TB);
            for (const dB of this._registeredManagers) {
              const VB = new RB(this._deviceInputSystem, BB, TB);
              dB._addDevice(VB)
            }
          },
          VB = (BB, TB) => {
            this._devices[BB]?.[TB] && delete this._devices[BB][TB];
            for (const dB of this._registeredManagers) dB._removeDevice(BB, TB)
          },
          yB = (BB, TB, dB) => {
            if (dB)
              for (const VB of this._registeredManagers) VB._onInputChanged(BB, TB, dB)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new SB(dB, VB, yB) : this._deviceInputSystem = new QB(BB, dB, VB, yB)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class ZB {
      getDeviceSource(BB, TB) {
        if (void 0 === TB) {
          if (void 0 === this._firstDevice[BB]) return null;
          TB = this._firstDevice[BB]
        }
        return this._devices[BB] && void 0 !== this._devices[BB][TB] ? this._devices[BB][TB] : null
      }
      getDeviceSources(BB) {
        return this._devices[BB] ? this._devices[BB].filter((BB => !!BB)) : []
      }
      constructor(BB) {
        const TB = Object.keys(sB).length / 2;
        this._devices = new Array(TB), this._firstDevice = new Array(TB), this._engine = BB, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new aB(BB)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new lB.e((BB => {
          for (const TB of this._devices)
            if (TB)
              for (const dB of TB) dB && this.onDeviceConnectedObservable.notifyObserver(BB, dB)
        })), this.onDeviceDisconnectedObservable = new lB.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = BB.lF.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.lF.remove(this._onDisposeObserver)
      }
      _addDevice(BB) {
        this._devices[BB.deviceType] || (this._devices[BB.deviceType] = []), this._devices[BB.deviceType][BB.deviceSlot] || (this._devices[BB.deviceType][BB.deviceSlot] = BB, this._updateFirstDevices(BB.deviceType)), this.onDeviceConnectedObservable.notifyObservers(BB)
      }
      _removeDevice(BB, TB) {
        const dB = this._devices[BB]?.[TB];
        this.onDeviceDisconnectedObservable.notifyObservers(dB), this._devices[BB]?.[TB] && delete this._devices[BB][TB], this._updateFirstDevices(BB)
      }
      _onInputChanged(BB, TB, dB) {
        this._devices[BB]?.[TB]?.onInputChangedObservable.notifyObservers(dB)
      }
      _updateFirstDevices(BB) {
        switch (BB) {
          case sB.Keyboard:
          case sB.Mouse:
            this._firstDevice[BB] = 0;
            break;
          case sB.Touch:
          case sB.DualSense:
          case sB.DualShock:
          case sB.Xbox:
          case sB.Switch:
          case sB.Generic: {
            delete this._firstDevice[BB];
            const TB = this._devices[BB];
            if (TB)
              for (let dB = 0; dB < TB.length; dB++)
                if (TB[dB]) {
                  this._firstDevice[BB] = dB;
                  break
                } break
          }
        }
      }
    }
    var XB = dB(38955);
    class WB {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Bo() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(BB) {
        this._singleClick = BB
      }
      set Bo(BB) {
        this._doubleClick = BB
      }
      set hasSwiped(BB) {
        this._hasSwiped = BB
      }
      set ignore(BB) {
        this._ignore = BB
      }
    }
    class hB {
      constructor(BB) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new oB.l(0, 0), this._previousStartingPointerPosition = new oB.l(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = BB || iB.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(BB) {
        return this._meshUnderPointerId[BB] || null
      }
      get unTranslatedPointer() {
        return new oB.l(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(BB) {
        this._pointerX = BB
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(BB) {
        this._pointerY = BB
      }
      _updatePointerPosition(BB) {
        const TB = this._scene.PD().getInputElementClientRect();
        TB && (this._pointerX = BB.clientX - TB.left, this._pointerY = BB.clientY - TB.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(BB, TB) {
        const dB = this._scene,
          VB = dB.PD(),
          yB = VB.getInputElement();
        yB && (yB.tabIndex = VB.canvasTabIndex, dB.doNotHandleCursors || (yB.style.cursor = dB.defaultCursor)), this._setCursorAndPointerOverMesh(BB, TB, dB);
        for (const JB of dB._pointerMoveStage) {
          BB = BB || this._pickMove(TB);
          const dB = !!BB?.pickedMesh;
          BB = JB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, dB, yB)
        }
        const pB = TB.inputIndex >= MB.MouseWheelX && TB.inputIndex <= MB.MouseWheelZ ? tB.d.POINTERWHEEL : tB.d.POINTERMOVE;
        let lB;
        dB.onPointerMove && (BB = BB || this._pickMove(TB), dB.onPointerMove(TB, BB, pB)), BB ? (lB = new tB.f(pB, TB, BB), this._setRayOnPointerInfo(BB, TB)) : (lB = new tB.f(pB, TB, null, this), this._movePointerInfo = lB), dB.onPointerObservable.hasObservers() && dB.onPointerObservable.notifyObservers(lB, pB)
      }
      _setRayOnPointerInfo(BB, TB) {
        const dB = this._scene;
        BB && XB.c._IsPickingAvailable && (BB.ray || (BB.ray = dB.createPickingRay(TB.offsetX, TB.offsetY, oB.b.Identity(), dB.activeCamera)))
      }
      _addCameraPointerObserver(BB, TB) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(BB, TB)
      }
      _removeCameraPointerObserver(BB) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(BB)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(BB, TB, dB) {
        const VB = this._scene,
          yB = new tB.e(dB, TB, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return BB && (yB.originalPickingInfo = BB, yB.ray = BB.ray, "xr-near" === TB.pointerType && BB.originMesh && (yB.nearInteractionPickingInfo = BB)), VB.onPrePointerObservable.notifyObservers(yB, dB), !!yB.skipOnPointerObservable
      }
      _pickMove(BB) {
        const TB = this._scene,
          dB = TB.dO(this._unTranslatedPointerX, this._unTranslatedPointerY, TB.pointerMovePredicate, TB.pointerMoveFastCheck, TB.cameraToUseForPointers, TB.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(dB, BB, TB), dB
      }
      _updateMeshUnderPointer() {
        const BB = this._scene;
        if (!BB.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || BB.skipPointerMovePicking || !BB.cameraToUseForPointers && !BB.activeCamera) return;
        this._ensurePointerMovePredicate();
        const TB = this._pointerX,
          dB = this._pointerY,
          VB = this._unTranslatedPointerX,
          yB = this._unTranslatedPointerY;
        for (const pB of this._latestPointerMoveEvents.values()) this._pointerX = pB.pointerX, this._pointerY = pB.pointerY, this._unTranslatedPointerX = pB.unTranslatedPointerX, this._unTranslatedPointerY = pB.unTranslatedPointerY, this._pickMove(pB.event);
        this._pointerX = TB, this._pointerY = dB, this._unTranslatedPointerX = VB, this._unTranslatedPointerY = yB
      }
      _ensurePointerMovePredicate() {
        const BB = this._scene;
        BB.pointerMovePredicate || (BB.pointerMovePredicate = TB => (TB._isPointerMovePickable ?? TB.xu) && TB.isVisible && TB.isReady() && TB.isEnabled() && (TB.enablePointerMoveEvents || BB.constantlyUpdateMeshUnderPointer || null !== TB._getActionManagerForTrigger()) && (!BB.cameraToUseForPointers || 0 !== (BB.cameraToUseForPointers.layerMask & TB.layerMask)))
      }
      _setCursorAndPointerOverMesh(BB, TB, dB) {
        const VB = dB.PD().getInputElement();
        if (BB?.pickedMesh) {
          if (this.setPointerOverMesh(BB.pickedMesh, TB.pointerId, BB, TB), !dB.doNotHandleCursors && VB && this._pointerOverMesh) {
            const BB = this._pointerOverMesh._getActionManagerForTrigger();
            BB && BB.hasPointerTriggers && (VB.style.cursor = BB.hoverCursor || dB.hoverCursor)
          }
        } else this.setPointerOverMesh(null, TB.pointerId, BB, TB)
      }
      simulatePointerMove(BB, TB) {
        const dB = new PointerEvent("pointermove", TB);
        dB.inputIndex = MB.Move, this._checkPrePointerObservable(BB, dB, tB.d.POINTERMOVE) || this._processPointerMove(BB, dB)
      }
      simulatePointerDown(BB, TB) {
        const dB = new PointerEvent("pointerdown", TB);
        dB.inputIndex = dB.button + 2, this._checkPrePointerObservable(BB, dB, tB.d.POINTERDOWN) || this._processPointerDown(BB, dB)
      }
      _processPointerDown(BB, TB) {
        const dB = this._scene;
        if (BB?.pickedMesh) {
          this._pickedDownMesh = BB.pickedMesh;
          const VB = BB.pickedMesh._getActionManagerForTrigger();
          if (VB) {
            if (VB.hasPickTriggers) switch (VB.processTrigger(5, new DB(BB.pickedMesh, dB.pointerX, dB.pointerY, BB.pickedMesh, TB, BB)), TB.button) {
              case 0:
                VB.processTrigger(2, new DB(BB.pickedMesh, dB.pointerX, dB.pointerY, BB.pickedMesh, TB, BB));
                break;
              case 1:
                VB.processTrigger(4, new DB(BB.pickedMesh, dB.pointerX, dB.pointerY, BB.pickedMesh, TB, BB));
                break;
              case 2:
                VB.processTrigger(3, new DB(BB.pickedMesh, dB.pointerX, dB.pointerY, BB.pickedMesh, TB, BB))
            }
            VB.hasSpecificTrigger(8) && window.setTimeout((() => {
              const BB = dB.dO(this._unTranslatedPointerX, this._unTranslatedPointerY, (BB => BB.xu && BB.isVisible && BB.isReady() && BB.actionManager && BB.actionManager.hasSpecificTrigger(8) && BB === this._pickedDownMesh), !1, dB.cameraToUseForPointers);
              BB?.pickedMesh && VB && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > hB.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, VB.processTrigger(8, DB.CreateNew(BB.pickedMesh, TB)))
            }), hB.LongPressDelay)
          }
        } else
          for (const pB of dB._pointerDownStage) BB = pB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, TB, !1);
        let VB;
        const yB = tB.d.POINTERDOWN;
        BB ? (dB.onPointerDown && dB.onPointerDown(TB, BB, yB), VB = new tB.f(yB, TB, BB), this._setRayOnPointerInfo(BB, TB)) : VB = new tB.f(yB, TB, null, this), dB.onPointerObservable.hasObservers() && dB.onPointerObservable.notifyObservers(VB, yB)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(BB, TB, dB) {
        const VB = new PointerEvent("pointerup", TB);
        VB.inputIndex = MB.Move;
        const yB = new WB;
        dB ? yB.Bo = !0 : yB.singleClick = !0, this._checkPrePointerObservable(BB, VB, tB.d.POINTERUP) || this._processPointerUp(BB, VB, yB)
      }
      _processPointerUp(BB, TB, dB) {
        const VB = this._scene;
        if (BB?.pickedMesh) {
          if (this._pickedUpMesh = BB.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (VB.onPointerPick && VB.onPointerPick(TB, BB), dB.singleClick && !dB.ignore && VB.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const dB = tB.d.POINTERPICK,
              yB = new tB.f(dB, TB, BB);
            this._setRayOnPointerInfo(BB, TB), VB.onPointerObservable.notifyObservers(yB, dB)
          }
          const yB = BB.pickedMesh._getActionManagerForTrigger();
          if (yB && !dB.ignore) {
            yB.processTrigger(7, DB.CreateNew(BB.pickedMesh, TB, BB)), !dB.hasSwiped && dB.singleClick && yB.processTrigger(1, DB.CreateNew(BB.pickedMesh, TB, BB));
            const VB = BB.pickedMesh._getActionManagerForTrigger(6);
            dB.Bo && VB && VB.processTrigger(6, DB.CreateNew(BB.pickedMesh, TB, BB))
          }
        } else if (!dB.ignore)
          for (const yB of VB._pointerUpStage) BB = yB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, TB, dB.Bo);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const BB = this._pickedDownMesh._getActionManagerForTrigger(16);
          BB && BB.processTrigger(16, DB.CreateNew(this._pickedDownMesh, TB))
        }
        if (!dB.ignore) {
          const yB = new tB.f(tB.d.POINTERUP, TB, BB);
          if (this._setRayOnPointerInfo(BB, TB), VB.onPointerObservable.notifyObservers(yB, tB.d.POINTERUP), VB.onPointerUp && VB.onPointerUp(TB, BB, tB.d.POINTERUP), !dB.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let yB = 0;
            if (dB.singleClick ? yB = tB.d.POINTERTAP : dB.Bo && (yB = tB.d.POINTERDOUBLETAP), yB) {
              const dB = new tB.f(yB, TB, BB);
              VB.onPointerObservable.hasObservers() && VB.onPointerObservable.hasSpecificMask(yB) && VB.onPointerObservable.notifyObservers(dB, yB)
            }
          }
        }
      }
      isPointerCaptured() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[BB]
      }
      attachControl() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const yB = this._scene,
          pB = yB.PD();
        VB || (VB = pB.getInputElement()), this._alreadyAttached && this.detachControl(), VB && (this._alreadyAttachedTo = VB), this._deviceSourceManager = new ZB(pB), this._initActionManager = BB => {
          if (!this._meshPickProceed) {
            const TB = yB.skipPointerUpPicking || 0 === yB._registeredActions && !this._checkForPicking() && !yB.onPointerUp ? null : yB.dO(this._unTranslatedPointerX, this._unTranslatedPointerY, yB.pointerUpPredicate, yB.pointerUpFastCheck, yB.cameraToUseForPointers, yB.pointerUpTrianglePredicate);
            this._currentPickResult = TB, TB && (BB = TB.hit && TB.pickedMesh ? TB.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return BB
        }, this._delayedSimpleClick = (BB, TB, dB) => {
          if ((Date.now() - this._previousStartingPointerTime > hB.DoubleClickDelay && !this._doubleClickOccured || BB !== this._previousButtonPressed) && (this._doubleClickOccured = !1, TB.singleClick = !0, TB.ignore = !1, this._delayedClicks[BB])) {
            const TB = this._delayedClicks[BB].evt,
              dB = tB.d.POINTERTAP,
              VB = new tB.f(dB, TB, this._currentPickResult);
            yB.onPointerObservable.hasObservers() && yB.onPointerObservable.hasSpecificMask(dB) && yB.onPointerObservable.notifyObservers(VB, dB), this._delayedClicks[BB] = null
          }
        }, this._initClickEvent = (BB, TB, dB, VB) => {
          const yB = new WB;
          this._currentPickResult = null;
          let pB = null,
            lB = BB.hasSpecificMask(tB.d.POINTERPICK) || TB.hasSpecificMask(tB.d.POINTERPICK) || BB.hasSpecificMask(tB.d.POINTERTAP) || TB.hasSpecificMask(tB.d.POINTERTAP) || BB.hasSpecificMask(tB.d.POINTERDOUBLETAP) || TB.hasSpecificMask(tB.d.POINTERDOUBLETAP);
          !lB && fB && (pB = this._initActionManager(pB, yB), pB && (lB = pB.hasPickTriggers));
          let JB = !1;
          if (lB = lB && !this._isMultiTouchGesture, lB) {
            const lB = dB.button;
            if (yB.hasSwiped = this._isPointerSwiping(), !yB.hasSwiped) {
              let YB = !hB.ExclusiveDoubleClickMode;
              if (YB || (YB = !BB.hasSpecificMask(tB.d.POINTERDOUBLETAP) && !TB.hasSpecificMask(tB.d.POINTERDOUBLETAP), YB && !fB.HasSpecificTrigger(6) && (pB = this._initActionManager(pB, yB), pB && (YB = !pB.hasSpecificTrigger(6)))), YB)(Date.now() - this._previousStartingPointerTime > hB.DoubleClickDelay || lB !== this._previousButtonPressed) && (yB.singleClick = !0, VB(yB, this._currentPickResult), JB = !0);
              else {
                const BB = {
                  evt: dB,
                  clickInfo: yB,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, lB, yB, VB), hB.DoubleClickDelay)
                };
                this._delayedClicks[lB] = BB
              }
              let gB = BB.hasSpecificMask(tB.d.POINTERDOUBLETAP) || TB.hasSpecificMask(tB.d.POINTERDOUBLETAP);
              !gB && fB.HasSpecificTrigger(6) && (pB = this._initActionManager(pB, yB), pB && (gB = pB.hasSpecificTrigger(6))), gB && (lB === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < hB.DoubleClickDelay && !this._doubleClickOccured ? (yB.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = lB, hB.ExclusiveDoubleClickMode ? (this._delayedClicks[lB] && (clearTimeout(this._delayedClicks[lB]?.timeoutId), this._delayedClicks[lB] = null), VB(yB, this._previousPickResult)) : VB(yB, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, yB.Bo = !0, yB.ignore = !1, hB.ExclusiveDoubleClickMode && this._delayedClicks[lB] && (clearTimeout(this._delayedClicks[lB]?.timeoutId), this._delayedClicks[lB] = null), VB(yB, this._currentPickResult)), JB = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = lB))
            }
          }
          JB || VB(yB, this._currentPickResult)
        }, this._onPointerMove = BB => {
          if (this._updatePointerPosition(BB), this._latestPointerMoveEvents.set(BB.pointerId, {
              event: BB,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > hB.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > hB.DragMovementThreshold), pB.isPointerLock && pB._verifyPointerLock(), this._checkPrePointerObservable(null, BB, BB.inputIndex >= MB.MouseWheelX && BB.inputIndex <= MB.MouseWheelZ ? tB.d.POINTERWHEEL : tB.d.POINTERMOVE)) return;
          if (!yB.cameraToUseForPointers && !yB.activeCamera) return;
          if (yB.skipPointerMovePicking) return void this._processPointerMove(new OB.b, BB);
          this._ensurePointerMovePredicate();
          const TB = yB._registeredActions > 0 || yB.constantlyUpdateMeshUnderPointer ? this._pickMove(BB) : null;
          this._processPointerMove(TB, BB)
        }, this._onPointerDown = BB => {
          const TB = this._activePointerIds.indexOf(-1);
          if (-1 === TB ? this._activePointerIds.push(BB.pointerId) : this._activePointerIds[TB] = BB.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, hB.ExclusiveDoubleClickMode)
            for (let VB = 0; VB < this._delayedClicks.length; VB++)
              if (this._delayedClicks[VB])
                if (BB.button === VB) clearTimeout(this._delayedClicks[VB]?.timeoutId);
                else {
                  const BB = this._delayedClicks[VB].clickInfo;
                  this._doubleClickOccured = !1, BB.singleClick = !0, BB.ignore = !1;
                  const TB = this._delayedClicks[VB].evt,
                    dB = tB.d.POINTERTAP,
                    pB = new tB.f(dB, TB, this._currentPickResult);
                  yB.onPointerObservable.hasObservers() && yB.onPointerObservable.hasSpecificMask(dB) && yB.onPointerObservable.notifyObservers(pB, dB), this._delayedClicks[VB] = null
                } if (this._updatePointerPosition(BB), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = BB.button), yB.preventDefaultOnPointerDown && VB && (BB.preventDefault(), VB.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, BB, tB.d.POINTERDOWN)) return;
          if (!yB.cameraToUseForPointers && !yB.activeCamera) return;
          let dB;
          this._pointerCaptures[BB.pointerId] = !0, yB.pointerDownPredicate || (yB.pointerDownPredicate = BB => BB.xu && BB.isVisible && BB.isReady() && BB.isEnabled() && (!yB.cameraToUseForPointers || 0 !== (yB.cameraToUseForPointers.layerMask & BB.layerMask))), this._pickedDownMesh = null, dB = yB.skipPointerDownPicking || 0 === yB._registeredActions && !this._checkForPicking() && !yB.onPointerDown ? new OB.b : yB.dO(this._unTranslatedPointerX, this._unTranslatedPointerY, yB.pointerDownPredicate, yB.pointerDownFastCheck, yB.cameraToUseForPointers, yB.pointerDownTrianglePredicate), this._processPointerDown(dB, BB)
        }, this._onPointerUp = BB => {
          const TB = this._activePointerIds.indexOf(BB.pointerId); - 1 !== TB && (this._activePointerIds[TB] = -1, this._activePointerIdsCount--, "touch" === BB.pointerType && this._latestPointerMoveEvents.delete(BB.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(BB), yB.preventDefaultOnPointerUp && VB && (BB.preventDefault(), VB.focus()), this._initClickEvent(yB.onPrePointerObservable, yB.onPointerObservable, BB, ((TB, dB) => {
            if (yB.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !TB.ignore)) {
              if (this._checkPrePointerObservable(null, BB, tB.d.POINTERUP)) return this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1));
              TB.hasSwiped || (TB.singleClick && yB.onPrePointerObservable.hasSpecificMask(tB.d.POINTERTAP) && this._checkPrePointerObservable(null, BB, tB.d.POINTERTAP) && (this._skipPointerTap = !0), TB.Bo && yB.onPrePointerObservable.hasSpecificMask(tB.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, BB, tB.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[BB.pointerId] ? (0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1), (yB.cameraToUseForPointers || yB.activeCamera) && (yB.pointerUpPredicate || (yB.pointerUpPredicate = BB => BB.xu && BB.isVisible && BB.isReady() && BB.isEnabled() && (!yB.cameraToUseForPointers || 0 !== (yB.cameraToUseForPointers.layerMask & BB.layerMask))), !this._meshPickProceed && (fB && fB.HasTriggers || this._checkForPicking() || yB.onPointerUp) && this._initActionManager(null, TB), dB || (dB = this._currentPickResult), this._processPointerUp(dB, BB, TB), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = BB => {
          const TB = rB.e.KEYDOWN;
          if (yB.onPreKeyboardObservable.hasObservers()) {
            const dB = new rB.i(TB, BB);
            if (yB.onPreKeyboardObservable.notifyObservers(dB, TB), dB.skipOnKeyboardObservable) return
          }
          if (yB.onKeyboardObservable.hasObservers()) {
            const dB = new rB.l(TB, BB);
            yB.onKeyboardObservable.notifyObservers(dB, TB)
          }
          yB.actionManager && yB.actionManager.processTrigger(14, DB.CreateNewFromScene(yB, BB))
        }, this._onKeyUp = BB => {
          const TB = rB.e.KEYUP;
          if (yB.onPreKeyboardObservable.hasObservers()) {
            const dB = new rB.i(TB, BB);
            if (yB.onPreKeyboardObservable.notifyObservers(dB, TB), dB.skipOnKeyboardObservable) return
          }
          if (yB.onKeyboardObservable.hasObservers()) {
            const dB = new rB.l(TB, BB);
            yB.onKeyboardObservable.notifyObservers(dB, TB)
          }
          yB.actionManager && yB.actionManager.processTrigger(15, DB.CreateNewFromScene(yB, BB))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((VB => {
          VB.deviceType === sB.Mouse ? VB.onInputChangedObservable.add((yB => {
            this._originMouseEvent = yB, yB.inputIndex === MB.LeftClick || yB.inputIndex === MB.MiddleClick || yB.inputIndex === MB.RightClick || yB.inputIndex === MB.BrowserBack || yB.inputIndex === MB.BrowserForward ? TB && 1 === VB.getInput(yB.inputIndex) ? this._onPointerDown(yB) : BB && 0 === VB.getInput(yB.inputIndex) && this._onPointerUp(yB) : dB && (yB.inputIndex === MB.Move ? this._onPointerMove(yB) : yB.inputIndex !== MB.MouseWheelX && yB.inputIndex !== MB.MouseWheelY && yB.inputIndex !== MB.MouseWheelZ || this._onPointerMove(yB))
          })) : VB.deviceType === sB.Touch ? VB.onInputChangedObservable.add((yB => {
            yB.inputIndex === MB.LeftClick && (TB && 1 === VB.getInput(yB.inputIndex) ? (this._onPointerDown(yB), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : BB && 0 === VB.getInput(yB.inputIndex) && (this._onPointerUp(yB), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), dB && yB.inputIndex === MB.Move && this._onPointerMove(yB)
          })) : VB.deviceType === sB.Keyboard && VB.onInputChangedObservable.add((BB => {
            "keydown" === BB.type ? this._onKeyDown(BB) : "keyup" === BB.type && this._onKeyUp(BB)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[TB] === BB && (!BB || !BB._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const yB = this._meshUnderPointerId[TB];
        let pB;
        yB && (pB = yB._getActionManagerForTrigger(10), pB && pB.processTrigger(10, new DB(yB, this._pointerX, this._pointerY, BB, VB, {
          pointerId: TB
        }))), BB ? (this._meshUnderPointerId[TB] = BB, this._pointerOverMesh = BB, pB = BB._getActionManagerForTrigger(9), pB && pB.processTrigger(9, new DB(BB, this._pointerX, this._pointerY, BB, VB, {
          pointerId: TB,
          pickResult: dB
        }))) : (delete this._meshUnderPointerId[TB], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: BB,
          pointerId: TB
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(BB) {
        this._pointerOverMesh === BB && (this._pointerOverMesh = null), this._pickedDownMesh === BB && (this._pickedDownMesh = null), this._pickedUpMesh === BB && (this._pickedUpMesh = null);
        for (const TB in this._meshUnderPointerId) this._meshUnderPointerId[TB] === BB && delete this._meshUnderPointerId[TB]
      }
    }
    hB.DragMovementThreshold = 10, hB.LongPressDelay = 500, hB.DoubleClickDelay = 300, hB.ExclusiveDoubleClickMode = !1;
    var CB = dB(38708),
      GB = dB(36183),
      qB = dB(36688);
    class xB {
      static get UniqueId() {
        const BB = this._UniqueIdCounter;
        return this._UniqueIdCounter++, BB
      }
    }
    xB._UniqueIdCounter = 1;
    var jB = dB(38790),
      AB = dB(38960),
      bB = dB(36137);
    class nB {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var eB, BT, TT, dT, VT, yT, pT, lT, JT, YT, gT, oT, kT, LT, OT, DT, uT, HT, ET, vT, mT, iT, NT, tT, fT, sT, MT, zT, wT, UT, FT, KT, rT, IT, cT, ST, PT, QT, RT, aT, ZT, XT, WT, hT, CT, GT, qT, xT, jT, AT, bT, nT, eT, Bd = dB(37651),
      Td = dB(36166);
    const dd = new oB.r,
      Vd = new oB.r;
    var yd;
    ! function(BB) {
      BB[BB.BackwardCompatible = 0] = "BackwardCompatible", BB[BB.Intermediate = 1] = "Intermediate", BB[BB.Aggressive = 2] = "Aggressive"
    }(yd || (yd = {}));
    class pd {
      static DefaultMaterialFactory(BB) {
        throw (0, NB.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, NB.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(BB) {
        BB !== this._clearColor && (this._clearColor = BB, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(BB) {
        if (BB !== this._performancePriority) {
          switch (this._performancePriority = BB, BB) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(BB)
        }
      }
      set forceWireframe(BB) {
        this._forceWireframe !== BB && (this._forceWireframe = BB, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(BB) {
        this._skipFrustumClipping !== BB && (this._skipFrustumClipping = BB)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(BB) {
        this._forcePointsCloud !== BB && (this._forcePointsCloud = BB, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(BB) {
        this._environmentTexture !== BB && (this._environmentTexture = BB, this.onEnvironmentTextureChangedObservable.notifyObservers(BB), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let BB = [];
        BB = BB.concat(this.meshes), BB = BB.concat(this.lights), BB = BB.concat(this.cameras), BB = BB.concat(this.transformNodes);
        for (const TB of this.skeletons) BB = BB.concat(TB.bones);
        return BB
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(BB) {
        this._animationPropertiesOverride = BB
      }
      set onDispose(BB) {
        this._onDisposeObserver && this.lF.remove(this._onDisposeObserver), this._onDisposeObserver = this.lF.add(BB)
      }
      set beforeRender(BB) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), BB && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(BB))
      }
      set afterRender(BB) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), BB && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(BB))
      }
      set beforeCameraRender(BB) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(BB)
      }
      set afterCameraRender(BB) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(BB)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(BB) {
        this._pointerPickingConfiguration.pointerDownPredicate = BB
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(BB) {
        this._pointerPickingConfiguration.pointerUpPredicate = BB
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(BB) {
        this._pointerPickingConfiguration.pointerMovePredicate = BB
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(BB) {
        this._pointerPickingConfiguration.pointerDownFastCheck = BB
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(BB) {
        this._pointerPickingConfiguration.pointerUpFastCheck = BB
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(BB) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = BB
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(BB) {
        this._pointerPickingConfiguration.skipPointerMovePicking = BB
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(BB) {
        this._pointerPickingConfiguration.skipPointerDownPicking = BB
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(BB) {
        this._pointerPickingConfiguration.skipPointerUpPicking = BB
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return hB.DragMovementThreshold
      }
      static set DragMovementThreshold(BB) {
        hB.DragMovementThreshold = BB
      }
      static get LongPressDelay() {
        return hB.LongPressDelay
      }
      static set LongPressDelay(BB) {
        hB.LongPressDelay = BB
      }
      static get DoubleClickDelay() {
        return hB.DoubleClickDelay
      }
      static set DoubleClickDelay(BB) {
        hB.DoubleClickDelay = BB
      }
      static get ExclusiveDoubleClickMode() {
        return hB.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(BB) {
        hB.ExclusiveDoubleClickMode = BB
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? oB.p.ZeroReadOnly
      }
      bindEyePosition(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const VB = this._eyePosition,
          yB = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          pB = this.floatingOriginOffset,
          lB = dd.set(VB.x, VB.y, VB.z, yB ? -1 : 1),
          JB = lB.subtractFromFloatsToRef(pB.x, pB.y, pB.z, 0, Vd);
        return BB && (dB ? BB.setFloat3(TB, JB.x, JB.y, JB.z) : BB.setVector4(TB, JB)), lB
      }
      finalizeSceneUbo() {
        const BB = this.getSceneUniformBuffer(),
          TB = this.bindEyePosition(null),
          dB = this.floatingOriginOffset;
        return BB.updateFloat4("vEyePosition", TB.x - dB.x, TB.y - dB.y, TB.z - dB.z, TB.w), BB.update(), BB
      }
      set useRightHandedSystem(BB) {
        this._useRightHandedSystem !== BB && (this._useRightHandedSystem = BB, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(BB) {
        this._currentStepId = BB
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(BB) {
        this._fogEnabled !== BB && (this._fogEnabled = BB, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(BB) {
        this._fogMode !== BB && (this._fogMode = BB, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(BB) {
        this._shadowsEnabled !== BB && (this._shadowsEnabled = BB, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(BB) {
        this._lightsEnabled !== BB && (this._lightsEnabled = BB, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(BB) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), BB && (this._unObserveActiveCameras = (0, bB.e)(BB, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = BB
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(BB) {
        BB !== this._activeCamera && (this._activeCamera = BB, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return pd.DefaultMaterialFactory !== pd._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = pd.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(BB) {
        this._defaultMaterial = BB
      }
      set texturesEnabled(BB) {
        this._texturesEnabled !== BB && (this._texturesEnabled = BB, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(BB) {
        if (this._frameGraph) return this._frameGraph = BB, void(BB || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = BB, BB && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(BB) {
        this._skeletonsEnabled !== BB && (this._skeletonsEnabled = BB, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = pd.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const BB of this._transientComponents) BB.register();
          this._transientComponents.length = 0
        }
      }
      OVB(BB) {
        this._components.push(BB), this._transientComponents.push(BB);
        const TB = BB;
        TB.addFromContainer && TB.serialize && this._serializableComponents.push(TB)
      }
      _getComponent(BB) {
        for (const TB of this._components)
          if (TB.name === BB) return TB;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(BB, TB) {
        this._inputManager = new hB(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new GB.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new lB.e, this.ambientColor = new GB.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new lB.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.kN = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.lF = new lB.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new lB.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new lB.e, this.onAfterRenderCameraObservable = new lB.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new lB.e, this.onAfterAnimationsObservable = new lB.e, this.onBeforeDrawPhaseObservable = new lB.e, this.onAfterDrawPhaseObservable = new lB.e, this.onReadyObservable = new lB.e, this.onBeforeCameraRenderObservable = new lB.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new lB.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new lB.e, this.onAfterActiveMeshesEvaluationObservable = new lB.e, this.onBeforeParticlesRenderingObservable = new lB.e, this.onAfterParticlesRenderingObservable = new lB.e, this.onDataLoadedObservable = new lB.e, this.onNewCameraAddedObservable = new lB.e, this.onCameraRemovedObservable = new lB.e, this.onNewLightAddedObservable = new lB.e, this.onLightRemovedObservable = new lB.e, this.onNewGeometryAddedObservable = new lB.e, this.onGeometryRemovedObservable = new lB.e, this.onNewTransformNodeAddedObservable = new lB.e, this.onTransformNodeRemovedObservable = new lB.e, this.onNewMeshAddedObservable = new lB.e, this.onMeshRemovedObservable = new lB.e, this.onNewSkeletonAddedObservable = new lB.e, this.onSkeletonRemovedObservable = new lB.e, this.onNewParticleSystemAddedObservable = new lB.e, this.onParticleSystemRemovedObservable = new lB.e, this.onNewAnimationGroupAddedObservable = new lB.e, this.onAnimationGroupRemovedObservable = new lB.e, this.onNewMaterialAddedObservable = new lB.e, this.onNewMultiMaterialAddedObservable = new lB.e, this.onMaterialRemovedObservable = new lB.e, this.onMultiMaterialRemovedObservable = new lB.e, this.onNewTextureAddedObservable = new lB.e, this.onTextureRemovedObservable = new lB.e, this.onNewFrameGraphAddedObservable = new lB.e, this.onFrameGraphRemovedObservable = new lB.e, this.onNewObjectRendererAddedObservable = new lB.e, this.onObjectRendererRemovedObservable = new lB.e, this.onNewPostProcessAddedObservable = new lB.e, this.onPostProcessRemovedObservable = new lB.e, this.onNewEffectLayerAddedObservable = new lB.e, this.onEffectLayerRemovedObservable = new lB.e, this.onBeforeRenderTargetsRenderObservable = new lB.e, this.onAfterRenderTargetsRenderObservable = new lB.e, this.onBeforeStepObservable = new lB.e, this.onAfterStepObservable = new lB.e, this.onActiveCameraChanged = new lB.e, this.onActiveCamerasChanged = new lB.e, this.onBeforeRenderingGroupObservable = new lB.e, this.onAfterRenderingGroupObservable = new lB.e, this.onMeshImportedObservable = new lB.e, this.onAnimationFileImportedObservable = new lB.e, this.onEnvironmentTextureChangedObservable = new lB.e, this.onMeshUnderPointerUpdatedObservable = new lB.e, this._registeredForLateAnimationBindings = new JB.d(256), this._pointerPickingConfiguration = new nB, this.onPrePointerObservable = new lB.e, this.onPointerObservable = new lB.e, this.onPreKeyboardObservable = new lB.e, this.onKeyboardObservable = new lB.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = pd.FOGMODE_NONE, this.fogColor = new GB.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.JR = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new oB.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new JB.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new CB.e, this._activeIndices = new CB.e, this._activeParticles = new CB.e, this._activeBones = new CB.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new JB.g(256), this._processedMaterials = new JB.g(256), this._renderTargets = new JB.d(256), this._materialsRenderTargets = new JB.d(256), this._activeParticleSystems = new JB.g(256), this._activeSkeletons = new JB.d(32), this._softwareSkinnedMeshes = new JB.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = oB.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = vB.f.Create(), this._beforeClearStage = vB.f.Create(), this._beforeRenderTargetClearStage = vB.f.Create(), this._gatherRenderTargetsStage = vB.f.Create(), this._gatherActiveCameraRenderTargetsStage = vB.f.Create(), this._isReadyForMeshStage = vB.f.Create(), this._beforeEvaluateActiveMeshStage = vB.f.Create(), this._evaluateSubMeshStage = vB.f.Create(), this._preActiveMeshStage = vB.f.Create(), this._cameraDrawRenderTargetStage = vB.f.Create(), this._beforeCameraDrawStage = vB.f.Create(), this._beforeRenderTargetDrawStage = vB.f.Create(), this._beforeRenderingGroupDrawStage = vB.f.Create(), this._beforeRenderingMeshStage = vB.f.Create(), this._afterRenderingMeshStage = vB.f.Create(), this._afterRenderingGroupDrawStage = vB.f.Create(), this._afterCameraDrawStage = vB.f.Create(), this._afterCameraPostProcessStage = vB.f.Create(), this._afterRenderTargetDrawStage = vB.f.Create(), this._afterRenderTargetPostProcessStage = vB.f.Create(), this._afterRenderStage = vB.f.Create(), this._pointerMoveStage = vB.f.Create(), this._pointerDownStage = vB.f.Create(), this._pointerUpStage = vB.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new lB.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const dB = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...TB
        };
        this.defaultCameraLayerMask = dB.defaultCameraLayerMask, this.defaultRenderableLayerMask = dB.defaultRenderableLayerMask, BB = this._engine = BB || iB.c.LastCreatedEngine, dB.virtual ? BB._virtualScenes.push(this) : (iB.c._LastCreatedScene = this, BB.scenes.push(this)), (BB.getCreationOptions().useLargeWorldRendering || TB?.useFloatingOrigin) && ((0, HB.f)(), this._floatingOriginScene = this, HB.c.jU = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new EB.d(this), uB.c && (this.postProcessManager = new uB.c(this)), (0, mB.h)() && this.attachControl(), this._createUbo(), kB.b && (this._imageProcessingConfiguration = new kB.b), this.setDefaultCandidateProviders(), dB.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = dB.useMaterialMeshMap, this.useClonedMeshMap = dB.useClonedMeshMap, TB && TB.virtual || BB.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(BB) {
        return this._defaultSubMeshCandidates.data = BB.oN, this._defaultSubMeshCandidates.length = BB.oN.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = BB => this._getDefaultSubMeshCandidates(BB), this.getIntersectingSubMeshCandidates = (BB, TB) => this._getDefaultSubMeshCandidates(BB), this.getCollidingSubMeshCandidates = (BB, TB) => this._getDefaultSubMeshCandidates(BB)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(BB) {
        this._inputManager.pointerX = BB
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(BB) {
        this._inputManager.pointerY = BB
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
      isCachedMaterialInvalid(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== TB || this._cachedMaterial !== BB || this._cachedVisibility !== dB
      }
      PD() {
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
      simulatePointerMove(BB, TB) {
        return this._inputManager.simulatePointerMove(BB, TB), this
      }
      simulatePointerDown(BB, TB) {
        return this._inputManager.simulatePointerDown(BB, TB), this
      }
      simulatePointerUp(BB, TB, dB) {
        return this._inputManager.simulatePointerUp(BB, TB, dB), this
      }
      isPointerCaptured() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(BB)
      }
      attachControl() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(BB, TB, dB)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let BB, TB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const dB = this.PD(),
          VB = dB.currentRenderPassId;
        dB.currentRenderPassId = this.activeCamera?.renderPassId ?? VB;
        let yB = !0;
        for (this._pendingData.length > 0 && (yB = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && yB && (yB = this.depthPeelingRenderer.isReady()), TB && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), BB = 0; BB < this.meshes.length; BB++) {
          const VB = this.meshes[BB];
          if (!VB.oN || 0 === VB.oN.length) continue;
          if (!VB.isReady(!0)) {
            yB = !1;
            continue
          }
          const pB = VB.hasThinInstances || "InstancedMesh" === VB.getClassName() || "InstancedLinesMesh" === VB.getClassName() || dB.getCaps().instancedArrays && VB.instances.length > 0;
          for (let BB = 0, TB = this._isReadyForMeshStage; BB < TB.length; BB++) {
            TB[BB].action(VB, pB) || (yB = !1)
          }
          if (!TB) continue;
          const lB = VB.material || this.defaultMaterial;
          if (lB)
            if (lB._storeEffectOnSubMeshes)
              for (const BB of VB.oN) {
                const TB = BB.XD();
                TB && TB.hasRenderTargetTextures && null != TB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(TB) && (this._processedMaterials.push(TB), this._materialsRenderTargets.concatWithNoDuplicate(TB.getRenderTargetTextures()))
              } else lB.hasRenderTargetTextures && null != lB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(lB) && (this._processedMaterials.push(lB), this._materialsRenderTargets.concatWithNoDuplicate(lB.getRenderTargetTextures()))
        }
        if (TB) {
          for (BB = 0; BB < this._materialsRenderTargets.length; ++BB) {
            this._materialsRenderTargets.data[BB].isReadyForRendering() || (yB = !1)
          }
          for (BB = 0; BB < this.customRenderTargets.length; ++BB) {
            this.customRenderTargets[BB].isReadyForRendering() || (yB = !1)
          }
        }
        for (BB = 0; BB < this.geometries.length; BB++) {
          2 === this.geometries[BB].delayLoadState && (yB = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const pB of this.activeCameras) pB.isReady(!0) || (yB = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (yB = !1));
        for (const pB of this.kN) pB.isReady() || (yB = !1);
        if (this.proceduralTexturesEnabled)
          for (const pB of this.proceduralTextures) pB.isReady() || (yB = !1);
        if (this.layers)
          for (const pB of this.layers) pB.isReady() || (yB = !1);
        if (this.effectLayers)
          for (const pB of this.effectLayers) pB.isLayerReady() || (yB = !1);
        for (const pB of this._isReadyChecks) pB.isReady() || (yB = !1);
        return dB.areAllEffectsReady() || (yB = !1), dB.currentRenderPassId = VB, yB
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(BB) {
        this.onBeforeRenderObservable.add(BB)
      }
      unregisterBeforeRender(BB) {
        this.onBeforeRenderObservable.removeCallback(BB)
      }
      registerAfterRender(BB) {
        this.onAfterRenderObservable.add(BB)
      }
      unregisterAfterRender(BB) {
        this.onAfterRenderObservable.removeCallback(BB)
      }
      _executeOnceBeforeRender(BB) {
        const TB = () => {
          BB(), setTimeout((() => {
            this.unregisterBeforeRender(TB)
          }))
        };
        this.registerBeforeRender(TB)
      }
      executeOnceBeforeRender(BB, TB) {
        void 0 !== TB ? setTimeout((() => {
          this._executeOnceBeforeRender(BB)
        }), TB) : this._executeOnceBeforeRender(BB)
      }
      addPendingData(BB) {
        this._pendingData.push(BB)
      }
      removePendingData(BB) {
        const TB = this.isLoading,
          dB = this._pendingData.indexOf(BB); - 1 !== dB && this._pendingData.splice(dB, 1), TB && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(BB) {
        -1 === this._isReadyChecks.indexOf(BB) && this._isReadyChecks.push(BB)
      }
      removeIsReadyCheck(BB) {
        const TB = this._isReadyChecks.indexOf(BB); - 1 !== TB && this._isReadyChecks.splice(TB, 1)
      }
      executeWhenReady(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(BB), null === this._executeWhenReadyTimeoutId && this._checkIsReady(TB)
      }
      async whenReadyAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((TB => {
          this.executeWhenReady((() => {
            TB()
          }), BB)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = pB.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && pB.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(BB)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(BB)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = pB.d.Now
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
      setTransformMatrix(BB, TB, dB, VB) {
        this._multiviewSceneUboIsActive = !!(dB && VB && this._multiviewSceneUbo), this._viewUpdateFlag === BB.updateFlag && this._projectionUpdateFlag === TB.updateFlag || (this._viewUpdateFlag = BB.updateFlag, this._projectionUpdateFlag = TB.updateFlag, this._viewMatrix = BB, this._projectionMatrix = TB, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new oB.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? qB.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = qB.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(dB, VB) : this._sceneUbo.useUbo && (this._sceneUbo.i6("viewProjection", this._transformMatrix), this._sceneUbo.i6("view", this._viewMatrix), this._sceneUbo.i6("projection", this._projectionMatrix), this._sceneUbo.i6("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(BB, TB) {
        const dB = "boolean" === typeof TB ? TB : TB?.trackUBOsInFrame,
          VB = new LB.c(this._engine, void 0, !1, BB ?? "Gu", void 0, dB);
        return VB.addUniform("viewProjection", 16), VB.addUniform("view", 16), VB.addUniform("projection", 16), VB.addUniform("vEyePosition", 4), VB.addUniform("inverseProjection", 16), VB
      }
      setSceneUniformBuffer(BB) {
        this._sceneUbo = BB, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : oB.p.ZeroReadOnly
      }
      getUniqueId() {
        return xB.UniqueId
      }
      MVB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(BB), BB._resyncLightSources(), BB.parent || BB._addToSceneRootNodes(), yB.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(BB)
          })), TB)) {
          const TB = BB.getChildMeshes();
          for (const BB of TB) this.MVB(BB)
        }
      }
      mF(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const dB = this.meshes.indexOf(BB);
        if (-1 !== dB && (this.meshes.splice(dB, 1), BB.parent || BB._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(BB), this.onMeshRemovedObservable.notifyObservers(BB), TB) {
          const TB = BB.getChildMeshes();
          for (const BB of TB) this.mF(BB)
        }
        return dB
      }
      addTransformNode(BB) {
        this._blockEntityCollection || BB.jU() === this && -1 !== BB._indexInSceneTransformNodesArray || (BB._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(BB), BB.parent || BB._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(BB))
      }
      removeTransformNode(BB) {
        const TB = BB._indexInSceneTransformNodesArray;
        if (-1 !== TB) {
          if (TB !== this.transformNodes.length - 1) {
            const BB = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[TB] = BB, BB._indexInSceneTransformNodesArray = TB
          }
          BB._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), BB.parent || BB._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(BB), TB
      }
      removeSkeleton(BB) {
        const TB = this.skeletons.indexOf(BB);
        return -1 !== TB && (this.skeletons.splice(TB, 1), this.onSkeletonRemovedObservable.notifyObservers(BB), this._executeActiveContainerCleanup(this._activeSkeletons)), TB
      }
      removeMorphTargetManager(BB) {
        const TB = this.morphTargetManagers.indexOf(BB);
        return -1 !== TB && this.morphTargetManagers.splice(TB, 1), TB
      }
      removeLight(BB) {
        const TB = this.lights.indexOf(BB);
        if (-1 !== TB) {
          for (const TB of this.meshes) TB._removeLightSource(BB, !1);
          this.lights.splice(TB, 1), this.sortLightsByPriority(), BB.parent || BB._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(BB)
        }
        return TB
      }
      removeCamera(BB) {
        const TB = this.cameras.indexOf(BB);
        if (-1 !== TB && (this.cameras.splice(TB, 1), BB.parent || BB._removeFromSceneRootNodes()), this.activeCameras) {
          const TB = this.activeCameras.indexOf(BB); - 1 !== TB && this.activeCameras.splice(TB, 1)
        }
        return this.activeCamera === BB && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(BB), TB
      }
      removeParticleSystem(BB) {
        const TB = this.kN.indexOf(BB);
        return -1 !== TB && (this.kN.splice(TB, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(BB), TB
      }
      removeAnimation(BB) {
        const TB = this.animations.indexOf(BB);
        return -1 !== TB && this.animations.splice(TB, 1), TB
      }
      stopAnimation(BB, TB, dB) {}
      removeAnimationGroup(BB) {
        const TB = this.animationGroups.indexOf(BB);
        return -1 !== TB && this.animationGroups.splice(TB, 1), this.onAnimationGroupRemovedObservable.notifyObservers(BB), TB
      }
      removeMultiMaterial(BB) {
        const TB = this.multiMaterials.indexOf(BB);
        return -1 !== TB && this.multiMaterials.splice(TB, 1), this.onMultiMaterialRemovedObservable.notifyObservers(BB), TB
      }
      removeMaterial(BB) {
        const TB = BB._indexInSceneMaterialArray;
        if (-1 !== TB && TB < this.materials.length) {
          if (TB !== this.materials.length - 1) {
            const BB = this.materials[this.materials.length - 1];
            this.materials[TB] = BB, BB._indexInSceneMaterialArray = TB
          }
          BB._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(BB), TB
      }
      removeActionManager(BB) {
        const TB = this.actionManagers.indexOf(BB);
        return -1 !== TB && this.actionManagers.splice(TB, 1), TB
      }
      removeTexture(BB) {
        const TB = this.textures.indexOf(BB);
        return -1 !== TB && this.textures.splice(TB, 1), this.onTextureRemovedObservable.notifyObservers(BB), TB
      }
      removeFrameGraph(BB) {
        const TB = this.frameGraphs.indexOf(BB);
        return -1 !== TB && this.frameGraphs.splice(TB, 1), this.onFrameGraphRemovedObservable.notifyObservers(BB), TB
      }
      removeObjectRenderer(BB) {
        const TB = this.objectRenderers.indexOf(BB);
        return -1 !== TB && this.objectRenderers.splice(TB, 1), this.onObjectRendererRemovedObservable.notifyObservers(BB), TB
      }
      removePostProcess(BB) {
        const TB = this.postProcesses.indexOf(BB);
        return -1 !== TB && this.postProcesses.splice(TB, 1), this.onPostProcessRemovedObservable.notifyObservers(BB), TB
      }
      removeEffectLayer(BB) {
        const TB = this.effectLayers.indexOf(BB);
        return -1 !== TB && this.effectLayers.splice(TB, 1), this.onEffectLayerRemovedObservable.notifyObservers(BB), TB
      }
      addLight(BB) {
        if (!this._blockEntityCollection) {
          this.lights.push(BB), this.sortLightsByPriority(), BB.parent || BB._addToSceneRootNodes();
          for (const TB of this.meshes) - 1 === TB.lightSources.indexOf(BB) && (TB.lightSources.push(BB), TB._resyncLightSources());
          yB.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(BB)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(AB.b.CompareLightsPriority)
      }
      addCamera(BB) {
        this._blockEntityCollection || (this.cameras.push(BB), yB.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(BB)
        })), BB.parent || BB._addToSceneRootNodes())
      }
      addSkeleton(BB) {
        this._blockEntityCollection || (this.skeletons.push(BB), yB.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(BB)
        })))
      }
      addParticleSystem(BB) {
        this._blockEntityCollection || (this.kN.push(BB), yB.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(BB)
        })))
      }
      addAnimation(BB) {
        this._blockEntityCollection || this.animations.push(BB)
      }
      addAnimationGroup(BB) {
        this._blockEntityCollection || (this.animationGroups.push(BB), yB.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(BB)
        })))
      }
      addMultiMaterial(BB) {
        this._blockEntityCollection || (this.multiMaterials.push(BB), yB.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(BB)
        })))
      }
      addMaterial(BB) {
        this._blockEntityCollection || BB.jU() === this && -1 !== BB._indexInSceneMaterialArray || (BB._indexInSceneMaterialArray = this.materials.length, this.materials.push(BB), yB.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(BB)
        })))
      }
      addMorphTargetManager(BB) {
        this._blockEntityCollection || this.morphTargetManagers.push(BB)
      }
      addGeometry(BB) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = this.geometries.length), this.geometries.push(BB))
      }
      addActionManager(BB) {
        this.actionManagers.push(BB)
      }
      addTexture(BB) {
        this._blockEntityCollection || (this.textures.push(BB), this.onNewTextureAddedObservable.notifyObservers(BB))
      }
      addFrameGraph(BB) {
        this.frameGraphs.push(BB), yB.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(BB)
        }))
      }
      addObjectRenderer(BB) {
        this.objectRenderers.push(BB), yB.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(BB)
        }))
      }
      addPostProcess(BB) {
        this._blockEntityCollection || (this.postProcesses.push(BB), yB.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(BB)
        })))
      }
      addEffectLayer(BB) {
        this._blockEntityCollection || (this.effectLayers.push(BB), yB.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(BB)
        })))
      }
      switchActiveCamera(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = BB, TB && BB.attachControl())
      }
      setActiveCameraById(BB) {
        const TB = this.getCameraById(BB);
        return TB ? (this.activeCamera = TB, TB) : null
      }
      setActiveCameraByName(BB) {
        const TB = this.getCameraByName(BB);
        return TB ? (this.activeCamera = TB, TB) : null
      }
      getAnimationGroupByName(BB) {
        for (let TB = 0; TB < this.animationGroups.length; TB++)
          if (this.animationGroups[TB].name === BB) return this.animationGroups[TB];
        return null
      }
      _getMaterial(BB, TB) {
        for (let dB = 0; dB < this.materials.length; dB++) {
          const BB = this.materials[dB];
          if (TB(BB)) return BB
        }
        if (BB)
          for (let dB = 0; dB < this.multiMaterials.length; dB++) {
            const BB = this.multiMaterials[dB];
            if (TB(BB)) return BB
          }
        return null
      }
      getMaterialByUniqueID(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(BB, TB)
      }
      getMaterialByUniqueId(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(TB, (TB => TB.uniqueId === BB))
      }
      getMaterialById(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(TB, (TB => TB.id === BB))
      }
      getMaterialByName(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(TB, (TB => TB.name === BB))
      }
      getLastMaterialById(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let dB = this.materials.length - 1; dB >= 0; dB--)
          if (this.materials[dB].id === BB) return this.materials[dB];
        if (TB)
          for (let dB = this.multiMaterials.length - 1; dB >= 0; dB--)
            if (this.multiMaterials[dB].id === BB) return this.multiMaterials[dB];
        return null
      }
      getTextureByUniqueId(BB) {
        for (let TB = 0; TB < this.textures.length; TB++)
          if (this.textures[TB].uniqueId === BB) return this.textures[TB];
        return null
      }
      getTextureByName(BB) {
        for (let TB = 0; TB < this.textures.length; TB++)
          if (this.textures[TB].name === BB) return this.textures[TB];
        return null
      }
      getCameraById(BB) {
        for (let TB = 0; TB < this.cameras.length; TB++)
          if (this.cameras[TB].id === BB) return this.cameras[TB];
        return null
      }
      getCameraByUniqueId(BB) {
        for (let TB = 0; TB < this.cameras.length; TB++)
          if (this.cameras[TB].uniqueId === BB) return this.cameras[TB];
        return null
      }
      getCameraByName(BB) {
        for (let TB = 0; TB < this.cameras.length; TB++)
          if (this.cameras[TB].name === BB) return this.cameras[TB];
        return null
      }
      getBoneById(BB) {
        for (let TB = 0; TB < this.skeletons.length; TB++) {
          const dB = this.skeletons[TB];
          for (let TB = 0; TB < dB.bones.length; TB++)
            if (dB.bones[TB].id === BB) return dB.bones[TB]
        }
        return null
      }
      getBoneByName(BB) {
        for (let TB = 0; TB < this.skeletons.length; TB++) {
          const dB = this.skeletons[TB];
          for (let TB = 0; TB < dB.bones.length; TB++)
            if (dB.bones[TB].name === BB) return dB.bones[TB]
        }
        return null
      }
      getLightByName(BB) {
        for (let TB = 0; TB < this.lights.length; TB++)
          if (this.lights[TB].name === BB) return this.lights[TB];
        return null
      }
      getLightById(BB) {
        for (let TB = 0; TB < this.lights.length; TB++)
          if (this.lights[TB].id === BB) return this.lights[TB];
        return null
      }
      getLightByUniqueId(BB) {
        for (let TB = 0; TB < this.lights.length; TB++)
          if (this.lights[TB].uniqueId === BB) return this.lights[TB];
        return null
      }
      getParticleSystemById(BB) {
        for (let TB = 0; TB < this.kN.length; TB++)
          if (this.kN[TB].id === BB) return this.kN[TB];
        return null
      }
      getGeometryById(BB) {
        for (let TB = 0; TB < this.geometries.length; TB++)
          if (this.geometries[TB].id === BB) return this.geometries[TB];
        return null
      }
      _getGeometryByUniqueId(BB) {
        if (this._geometriesByUniqueId) {
          const TB = this._geometriesByUniqueId[BB];
          if (void 0 !== TB) return this.geometries[TB]
        } else
          for (let TB = 0; TB < this.geometries.length; TB++)
            if (this.geometries[TB].uniqueId === BB) return this.geometries[TB];
        return null
      }
      getFrameGraphByName(BB) {
        for (let TB = 0; TB < this.frameGraphs.length; TB++)
          if (this.frameGraphs[TB].name === BB) return this.frameGraphs[TB];
        return null
      }
      pushGeometry(BB, TB) {
        return !(!TB && this._getGeometryByUniqueId(BB.uniqueId)) && (this.addGeometry(BB), yB.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(BB)
        })), !0)
      }
      removeGeometry(BB) {
        let TB;
        if (this._geometriesByUniqueId) {
          if (TB = this._geometriesByUniqueId[BB.uniqueId], void 0 === TB) return !1
        } else if (TB = this.geometries.indexOf(BB), TB < 0) return !1;
        if (TB !== this.geometries.length - 1) {
          const BB = this.geometries[this.geometries.length - 1];
          BB && (this.geometries[TB] = BB, this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = TB))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(BB), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(BB) {
        for (let TB = 0; TB < this.meshes.length; TB++)
          if (this.meshes[TB].id === BB) return this.meshes[TB];
        return null
      }
      getMeshesById(BB) {
        return this.meshes.filter((function(TB) {
          return TB.id === BB
        }))
      }
      getTransformNodeById(BB) {
        for (let TB = 0; TB < this.transformNodes.length; TB++)
          if (this.transformNodes[TB].id === BB) return this.transformNodes[TB];
        return null
      }
      getTransformNodeByUniqueId(BB) {
        for (let TB = 0; TB < this.transformNodes.length; TB++)
          if (this.transformNodes[TB].uniqueId === BB) return this.transformNodes[TB];
        return null
      }
      getTransformNodesById(BB) {
        return this.transformNodes.filter((function(TB) {
          return TB.id === BB
        }))
      }
      getMeshByUniqueId(BB) {
        for (let TB = 0; TB < this.meshes.length; TB++)
          if (this.meshes[TB].uniqueId === BB) return this.meshes[TB];
        return null
      }
      getLastMeshById(BB) {
        for (let TB = this.meshes.length - 1; TB >= 0; TB--)
          if (this.meshes[TB].id === BB) return this.meshes[TB];
        return null
      }
      getLastTransformNodeById(BB) {
        for (let TB = this.transformNodes.length - 1; TB >= 0; TB--)
          if (this.transformNodes[TB].id === BB) return this.transformNodes[TB];
        return null
      }
      getLastEntryById(BB) {
        let TB;
        for (TB = this.meshes.length - 1; TB >= 0; TB--)
          if (this.meshes[TB].id === BB) return this.meshes[TB];
        for (TB = this.transformNodes.length - 1; TB >= 0; TB--)
          if (this.transformNodes[TB].id === BB) return this.transformNodes[TB];
        for (TB = this.cameras.length - 1; TB >= 0; TB--)
          if (this.cameras[TB].id === BB) return this.cameras[TB];
        for (TB = this.lights.length - 1; TB >= 0; TB--)
          if (this.lights[TB].id === BB) return this.lights[TB];
        for (TB = this.skeletons.length - 1; TB >= 0; TB--) {
          const dB = this.skeletons[TB];
          for (let TB = dB.bones.length - 1; TB >= 0; TB--)
            if (dB.bones[TB].id === BB) return dB.bones[TB]
        }
        return null
      }
      getNodeById(BB) {
        const TB = this.getMeshById(BB);
        if (TB) return TB;
        const dB = this.getTransformNodeById(BB);
        if (dB) return dB;
        const VB = this.getLightById(BB);
        if (VB) return VB;
        const yB = this.getCameraById(BB);
        if (yB) return yB;
        const pB = this.getBoneById(BB);
        return pB || null
      }
      getNodeByName(BB) {
        const TB = this.getMeshByName(BB);
        if (TB) return TB;
        const dB = this.getTransformNodeByName(BB);
        if (dB) return dB;
        const VB = this.getLightByName(BB);
        if (VB) return VB;
        const yB = this.getCameraByName(BB);
        if (yB) return yB;
        const pB = this.getBoneByName(BB);
        return pB || null
      }
      getMeshByName(BB) {
        for (let TB = 0; TB < this.meshes.length; TB++)
          if (this.meshes[TB].name === BB) return this.meshes[TB];
        return null
      }
      getTransformNodeByName(BB) {
        for (let TB = 0; TB < this.transformNodes.length; TB++)
          if (this.transformNodes[TB].name === BB) return this.transformNodes[TB];
        return null
      }
      getLastSkeletonById(BB) {
        for (let TB = this.skeletons.length - 1; TB >= 0; TB--)
          if (this.skeletons[TB].id === BB) return this.skeletons[TB];
        return null
      }
      getSkeletonByUniqueId(BB) {
        for (let TB = 0; TB < this.skeletons.length; TB++)
          if (this.skeletons[TB].uniqueId === BB) return this.skeletons[TB];
        return null
      }
      getSkeletonById(BB) {
        for (let TB = 0; TB < this.skeletons.length; TB++)
          if (this.skeletons[TB].id === BB) return this.skeletons[TB];
        return null
      }
      getSkeletonByName(BB) {
        for (let TB = 0; TB < this.skeletons.length; TB++)
          if (this.skeletons[TB].name === BB) return this.skeletons[TB];
        return null
      }
      getMorphTargetManagerById(BB) {
        for (let TB = 0; TB < this.morphTargetManagers.length; TB++)
          if (this.morphTargetManagers[TB].uniqueId === BB) return this.morphTargetManagers[TB];
        return null
      }
      getMorphTargetById(BB) {
        for (let TB = 0; TB < this.morphTargetManagers.length; ++TB) {
          const dB = this.morphTargetManagers[TB];
          for (let TB = 0; TB < dB.numTargets; ++TB) {
            const VB = dB.getTarget(TB);
            if (VB.id === BB) return VB
          }
        }
        return null
      }
      getMorphTargetByName(BB) {
        for (let TB = 0; TB < this.morphTargetManagers.length; ++TB) {
          const dB = this.morphTargetManagers[TB];
          for (let TB = 0; TB < dB.numTargets; ++TB) {
            const VB = dB.getTarget(TB);
            if (VB.name === BB) return VB
          }
        }
        return null
      }
      getPostProcessByName(BB) {
        for (let TB = 0; TB < this.postProcesses.length; ++TB) {
          const dB = this.postProcesses[TB];
          if (dB.name === BB) return dB
        }
        return null
      }
      isActiveMesh(BB) {
        return -1 !== this._activeMeshes.indexOf(BB)
      }
      get uid() {
        return this._uid || (this._uid = VB.h.RandomId()), this._uid
      }
      addExternalData(BB, TB) {
        return this._externalData || (this._externalData = new YB), this._externalData.add(BB, TB)
      }
      getExternalData(BB) {
        return this._externalData ? this._externalData.get(BB) : null
      }
      getOrAddExternalDataWithFactory(BB, TB) {
        return this._externalData || (this._externalData = new YB), this._externalData.getOrAddWithFactory(BB, TB)
      }
      removeExternalData(BB) {
        return this._externalData.remove(BB)
      }
      _evaluateSubMesh(BB, TB, dB, VB) {
        if (VB || BB.isInFrustum(this._frustumPlanes)) {
          for (let VB = 0, yB = this._evaluateSubMeshStage; VB < yB.length; VB++) {
            yB[VB].action(TB, BB)
          }
          const dB = BB.XD();
          null !== dB && void 0 !== dB && (dB.hasRenderTargetTextures && null != dB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(dB) && (this._processedMaterials.push(dB), this._materialsRenderTargets.concatWithNoDuplicate(dB.getRenderTargetTextures())), this._renderingManager.dispatch(BB, TB, dB))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(BB) {
        this._preventFreeActiveMeshesAndRenderingGroups !== BB && (BB && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = BB)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let BB = 0; BB < this.activeCameras.length; BB++) {
            const TB = this.activeCameras[BB];
            TB && TB._activeMeshes && TB._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let BB = 0; BB < this.textures.length; BB++) {
            const TB = this.textures[BB];
            TB && TB.renderList && TB.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          pB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const lB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const BB of lB) BB.objectRenderer._freezeActiveMeshes(VB);
          return this._freezeActiveMeshesCancel = (0, yB.c)((() => {
            let BB = !0,
              TB = !0;
            for (const dB of lB) BB && (BB = dB.objectRenderer._isFrozen), TB && (TB = null !== dB.objectRenderer._freezeActiveMeshesCancel);
            if (BB) return !0;
            if (!TB) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = pB, this._skipEvaluateActiveMeshesCompletely = BB, TB?.()
          }), ((BB, TB) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), TB) {
              const TB = "Scene: Timeout while waiting for meshes to be frozen.";
              dB ? dB(TB) : (Bd.b.Error(TB), BB && Bd.b.Error(BB))
            } else {
              const TB = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              dB ? dB(TB) : (Bd.b.Error(TB), BB && (Bd.b.Error(BB), BB.stack && Bd.b.Error(BB.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = pB, this._skipEvaluateActiveMeshesCompletely = BB, VB)
              for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
            TB && TB()
          } else dB && dB("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const TB = this.meshes[BB];
          TB._internalAbstractMeshDataInfo && (TB._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const BB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const TB of BB) TB.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(BB) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => BB.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const BB = this._activeMeshes.length;
            for (let TB = 0; TB < BB; TB++) {
              this._activeMeshes.data[TB].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const BB = this._activeParticleSystems.length;
            for (let TB = 0; TB < BB; TB++) this._activeParticleSystems.data[TB].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let yB = 0, pB = this._beforeEvaluateActiveMeshStage; yB < pB.length; yB++) {
          pB[yB].action()
        }
        const BB = this.getActiveMeshCandidates(),
          TB = BB.length,
          dB = CB.e.Enabled,
          VB = this.customLODSelector;
        for (let yB = 0; yB < TB; yB++) {
          const TB = BB.data[yB],
            pB = !VB && !TB.JF && !TB._internalMeshDataInfo?._LODLevels.length;
          let lB, JB;
          if ((pB || (lB = TB._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), lB ? lB[1] = -1 : (lB = [TB, -1], TB._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, lB))), !TB.isBlocked) && (dB && this._totalVertices.addCount(TB.getTotalVertices(), !1), TB.isReady() && TB.isEnabled() && !TB.al.hasAZeroComponent)) {
            if (TB.computeWorldMatrix(), TB.actionManager && TB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(TB), pB) JB = TB;
            else if (JB = VB ? VB(TB, this.activeCamera) : TB.getLOD(this.activeCamera), lB[0] = JB, lB[1] = this._frameId, void 0 === JB || null === JB) continue;
            if (JB !== TB && 0 !== JB.billboardMode && JB.computeWorldMatrix(), TB._preActivate(), TB.isVisible && TB.visibility > 0 && 0 !== (TB.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || TB.QD || TB.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(TB), this.activeCamera._activeMeshes.push(TB), JB !== TB && JB._activate(this._renderId, !1);
              for (let BB = 0, dB = this._preActiveMeshStage; BB < dB.length; BB++) {
                dB[BB].action(TB)
              }
              TB._activate(this._renderId, !1) && (TB.JF ? TB._internalAbstractMeshDataInfo._actAsRegularMesh && (JB = TB) : JB._internalAbstractMeshDataInfo._onlyForInstances = !1, JB._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(TB, JB)), TB._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let BB = 0; BB < this.kN.length; BB++) {
            const TB = this.kN[BB];
            if (!TB.isStarted() || !TB.emitter) continue;
            const dB = TB.emitter;
            dB.position && !dB.isEnabled() || (this._activeParticleSystems.push(TB), TB.animate(), this._renderingManager.dispatchParticles(TB))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(BB) {
        this._skeletonsEnabled && BB.skeleton && (this._activeSkeletons.pushNoDuplicate(BB.skeleton) && (BB.skeleton.prepare(), this._activeBones.addCount(BB.skeleton.bones.length, !1)), BB.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(BB) && this.frameGraph && BB.applySkeleton(BB.skeleton))
      }
      _activeMesh(BB, TB) {
        this._prepareSkeleton(TB);
        let dB = BB.vyB || BB.JF || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || TB.QD;
        if (TB && TB.oN && TB.oN.length > 0) {
          const VB = this.getActiveSubMeshCandidates(TB),
            yB = VB.length;
          dB = dB || 1 === yB;
          for (let pB = 0; pB < yB; pB++) {
            const yB = VB.data[pB];
            this._evaluateSubMesh(yB, TB, BB, dB)
          }
        }
      }
      updateTransformMatrix(BB) {
        const TB = this.activeCamera;
        if (TB)
          if (TB._renderingMultiview) {
            const dB = TB._rigCameras[0],
              VB = TB._rigCameras[1];
            this.setTransformMatrix(dB.getViewMatrix(), dB.getProjectionMatrix(BB), VB.getViewMatrix(), VB.getProjectionMatrix(BB))
          } else this.setTransformMatrix(TB.getViewMatrix(), TB.getProjectionMatrix(BB))
      }
      _bindFrameBuffer(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (BB && BB._multiviewTexture ? BB._multiviewTexture._bindFrameBuffer() : BB && BB.outputRenderTarget ? BB.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), TB && this._clearFrameBuffer(BB)
      }
      _clearFrameBuffer(BB) {
        if (BB && BB._multiviewTexture);
        else if (BB && BB.outputRenderTarget && !BB._renderingMultiview) {
          const TB = BB.outputRenderTarget;
          TB.onClearObservable.hasObservers() ? TB.onClearObservable.notifyObservers(this._engine) : TB.skipInitialClear || BB.isRightCamera || (this.autoClear && this._engine.clear(TB.clearColor || this._clearColor, !TB._cleared, !0, !0), TB._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (BB && BB._skipRendering) return;
        const yB = this._engine;
        if (this._activeCamera = BB, !this.activeCamera) throw new Error("Active camera not set");
        if (yB.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && dB) {
          let TB = !0;
          BB._renderingMultiview && BB.outputRenderTarget && (TB = BB.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, BB.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), BB._renderingMultiview && BB.outputRenderTarget && (BB.outputRenderTarget.skipInitialClear = TB)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = BB.outputRenderTarget?.renderPassId ?? BB.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let VB = 0; VB < this._softwareSkinnedMeshes.length; VB++) {
          const BB = this._softwareSkinnedMeshes.data[VB];
          BB.applySkeleton(BB.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), BB.customRenderTargets && BB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(BB.customRenderTargets), TB && TB.customRenderTargets && TB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(TB.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let VB = 0, JB = this._gatherActiveCameraRenderTargetsStage; VB < JB.length; VB++) {
          JB[VB].action(this._renderTargets)
        }
        let pB = !1;
        if (this.renderTargetsEnabled) {
          let BB;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            VB.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const TB = this.getBoundingBoxRenderer?.();
            for (let dB = 0; dB < this._renderTargets.length; dB++) {
              const VB = this._renderTargets.data[dB];
              if (VB._shouldRender()) {
                this._renderId++;
                const dB = VB.activeCamera && VB.activeCamera !== this.activeCamera;
                TB && !BB && (BB = TB.renderList.length > 0 ? TB.renderList.data.slice() : [], BB.length = TB.renderList.length), VB.render(dB, this.dumpNextRenderTargets), pB = !0
              }
            }
            TB && BB && (TB.renderList.data = BB, TB.renderList.length = BB.length), VB.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const TB = this.getBoundingBoxRenderer?.();
            TB && !BB && (BB = TB.renderList.length > 0 ? TB.renderList.data.slice() : [], BB.length = TB.renderList.length);
            for (let BB = 0, dB = this._cameraDrawRenderTargetStage; BB < dB.length; BB++) {
              pB = dB[BB].action(this.activeCamera) || pB
            }
            TB && BB && (TB.renderList.data = BB, TB.renderList.length = BB.length)
          }
          this._intermediateRendering = !1
        }
        pB && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || BB._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let VB = 0, JB = this._beforeCameraDrawStage; VB < JB.length; VB++) {
          JB[VB].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const lB = yB.snapshotRendering && 1 === yB.snapshotRenderingMode;
        lB && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !lB), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let VB = 0, JB = this._afterCameraDrawStage; VB < JB.length; VB++) {
          JB[VB].action(this.activeCamera)
        }
        if (this.postProcessManager && !BB._multiviewTexture) {
          const TB = BB.outputRenderTarget ? BB.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(BB.isIntermediate, TB)
        }
        for (let VB = 0, JB = this._afterCameraPostProcessStage; VB < JB.length; VB++) {
          JB[VB].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === BB.cameraRigMode || BB._renderingMultiview) return BB._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(BB, void 0, TB), void this.onAfterRenderCameraObservable.notifyObservers(BB);
        if (BB._useMultiviewToSingleView) this._renderMultiviewToSingleView(BB);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(BB);
          for (let TB = 0; TB < BB._rigCameras.length; TB++) this._renderForCamera(BB._rigCameras[TB], BB)
        }
        this._activeCamera = BB, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(BB)
      }
      _checkIntersections() {
        for (let BB = 0; BB < this._meshesForIntersections.length; BB++) {
          const TB = this._meshesForIntersections.data[BB];
          if (TB.actionManager)
            for (let BB = 0; TB.actionManager && BB < TB.actionManager.actions.length; BB++) {
              const dB = TB.actionManager.actions[BB];
              if (12 === dB.trigger || 13 === dB.trigger) {
                const BB = dB.getTriggerParameter(),
                  VB = BB.mesh ? BB.mesh : BB,
                  yB = VB.LyB(TB, BB.usePreciseIntersection),
                  pB = TB._intersectionsInProgress.indexOf(VB);
                yB && -1 === pB ? 12 === dB.trigger ? (dB._executeCurrent(DB.CreateNew(TB, void 0, VB)), TB._intersectionsInProgress.push(VB)) : 13 === dB.trigger && TB._intersectionsInProgress.push(VB) : !yB && pB > -1 && (13 === dB.trigger && dB._executeCurrent(DB.CreateNew(TB, void 0, VB)), TB.actionManager.hasSpecificTrigger(13, (BB => {
                  const TB = BB.mesh ? BB.mesh : BB;
                  return VB === TB
                })) && 13 !== dB.trigger || TB._intersectionsInProgress.splice(pB, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(BB) {}
      _animate(BB) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let BB = Math.max(pd.MinDeltaTime, Math.min(this._engine.getDeltaTime(), pd.MaxDeltaTime)) + this._timeAccumulator;
          const TB = this._engine.getTimeStep(),
            dB = 1e3 / TB / 1e3;
          let VB = 0;
          const yB = this._engine.getLockstepMaxSteps();
          let pB = Math.floor(BB / TB);
          for (pB = Math.min(pB, yB); BB > 0 && VB < pB;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = TB * dB, this._animate(TB), this.onAfterAnimationsObservable.notifyObservers(this), this.JR && this._advancePhysicsEngineStep(TB), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, VB++, BB -= TB;
          this._timeAccumulator = BB < 0 ? 0 : BB
        } else {
          const BB = this.useConstantAnimationDeltaTime ? 16 : Math.max(pd.MinDeltaTime, Math.min(this._engine.getDeltaTime(), pd.MaxDeltaTime));
          this._animationRatio = .06 * BB, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.JR && this._advancePhysicsEngineStep(BB)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(BB) {
        if (BB?.outputRenderTarget && !BB?.isRigCamera && (BB.outputRenderTarget._cleared = !1), BB?.rigCameras?.length)
          for (let TB = 0; TB < BB.rigCameras.length; ++TB) {
            const dB = BB.rigCameras[TB].outputRenderTarget;
            dB && (dB._cleared = !1)
          }
      }
      resetDrawCache(BB) {
        if (this.meshes)
          for (const TB of this.meshes) TB.resetDrawCache(BB)
      }
      _renderWithFrameGraph() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, BB)
          for (const dB of this.cameras)
            if (dB.update(), 0 !== dB.cameraRigMode)
              for (let BB = 0; BB < dB._rigCameras.length; BB++) dB._rigCameras[BB].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(TB)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(BB) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const TB = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), VB.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let BB = 0; BB < this._renderTargets.length; BB++) {
            const dB = this._renderTargets.data[BB],
              VB = dB.activeCamera || TB;
            this._renderRenderTarget(dB, VB, !0, this.dumpNextRenderTargets)
          }
          VB.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let dB = 0, VB = this._beforeClearStage; dB < VB.length; dB++) {
          VB[dB].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const TB = this.getActiveMeshCandidates(),
            dB = TB.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let BB = 0; BB < dB; BB++) {
                const dB = TB.data[BB];
                dB._internalAbstractMeshDataInfo._wasActiveLastFrame && dB.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const BB = this._activeParticleSystems.length;
              for (let TB = 0; TB < BB; TB++) this._activeParticleSystems.data[TB].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let VB = 0; VB < dB; VB++) {
              const dB = TB.data[VB];
              dB._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, dB.isBlocked || (this._totalVertices.addCount(dB.getTotalVertices(), !1), dB.isReady() && dB.isEnabled() && !dB.al.hasAZeroComponent && (dB.computeWorldMatrix(BB), dB.actionManager && dB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(dB)))
            }
            if (this.particlesEnabled)
              for (let BB = 0; BB < this.kN.length; BB++) {
                const TB = this.kN[BB];
                if (!TB.isStarted() || !TB.emitter) continue;
                const dB = TB.emitter;
                dB.position && !dB.isEnabled() || (this._activeParticleSystems.push(TB), TB.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, BB._shouldRender()) {
          if (this._renderId++, this.activeCamera = TB, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), BB.render(dB, VB)
        }
        this._intermediateRendering = !1
      }
      render() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.WdB) return;
        const dB = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(BB, TB)
        } finally {
          this._renderingMeshEvaluationDepth = dB
        }
      }
      _renderFrame(BB, TB) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), HB.c.jU = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const dB of this.activeCameras) this._checkCameraRenderTarget(dB);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), TB || this.animate();
        for (let dB = 0, VB = this._beforeCameraUpdateStage; dB < VB.length; dB++) {
          VB[dB].action()
        }
        if (BB)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let dB = 0; dB < this.activeCameras.length; dB++) {
              const BB = this.activeCameras[dB];
              if (BB.update(), 0 !== BB.cameraRigMode)
                for (let TB = 0; TB < BB._rigCameras.length; TB++) BB._rigCameras[TB].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let dB = 0; dB < this.activeCamera._rigCameras.length; dB++) this.activeCamera._rigCameras[dB].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(BB, TB);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const BB = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            VB.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let TB = 0; TB < this.customRenderTargets.length; TB++) {
              const dB = this.customRenderTargets[TB],
                VB = dB.activeCamera || this.activeCamera;
              this._renderRenderTarget(dB, VB, BB !== VB, this.dumpNextRenderTargets)
            }
            VB.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = BB?.renderPassId ?? 0, this.activeCamera = BB, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let TB = 0, dB = this._beforeClearStage; TB < dB.length; TB++) {
            dB[TB].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let TB = 0, dB = this._gatherRenderTargetsStage; TB < dB.length; TB++) {
            dB[TB].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let TB = 0; TB < this.activeCameras.length; TB++) this._processSubCameras(this.activeCameras[TB], TB > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let dB = 0, VB = this._afterRenderStage; dB < VB.length; dB++) {
          VB[dB].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let BB = 0; BB < this._toBeDisposed.length; BB++) {
            const TB = this._toBeDisposed[BB];
            TB && TB.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let BB = 0; BB < this.materials.length; BB++) this.materials[BB].freeze()
      }
      unfreezeMaterials() {
        for (let BB = 0; BB < this.materials.length; BB++) this.materials[BB].unfreeze()
      }
      dispose() {
        if (this.WdB) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, NB.b)(this.stopAllAnimations)) {
          for (const BB of this._activeAnimatables) BB.onAnimationEndObservable.clear(), BB.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const BB = this._activeRequests.slice();
        for (const pB of BB) pB.abort();
        this._activeRequests.length = 0;
        try {
          this.lF.notifyObservers(this)
        } catch (yB) {
          Bd.b.Error("An error occurred while calling onDisposeObservable!", yB)
        }
        this.detachControl();
        const TB = this._engine.getInputElement?.();
        if (TB)
          for (let pB = 0; pB < this.cameras.length; pB++) this.cameras[pB].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (BB => BB.dispose(!0))), this._disposeList(this.transformNodes, (BB => BB.dispose(!0)));
        const dB = this.cameras;
        this._disposeList(dB), this._disposeList(this.kN), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let VB = this._engine.scenes.indexOf(this);
        if (VB > -1 && this._engine.scenes.splice(VB, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, HB.j)(), iB.c._LastCreatedScene === this) {
          iB.c._LastCreatedScene = null;
          let BB = iB.c.Instances.length - 1;
          for (; BB >= 0;) {
            const TB = iB.c.Instances[BB];
            if (TB.scenes.length > 0) {
              iB.c._LastCreatedScene = TB.scenes[this._engine.scenes.length - 1];
              break
            }
            BB--
          }
        }
        VB = this._engine._virtualScenes.indexOf(this), VB > -1 && this._engine._virtualScenes.splice(VB, 1), this._engine.wipeCaches(!0), this.lF.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(BB, TB) {
        const dB = BB.slice(0);
        TB = TB ?? (BB => BB.dispose());
        for (const VB of dB) TB(VB);
        BB.length = 0
      }
      get WdB() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const TB = this.meshes[BB].geometry;
          TB && TB.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const BB of this.textures) {
          BB._buffer && (BB._buffer = null)
        }
      }
      getWorldExtends(BB) {
        const TB = new oB.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          dB = new oB.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        BB = BB || (() => !0);
        const VB = this.meshes.filter(BB);
        for (const yB of VB) {
          if (yB.computeWorldMatrix(!0), !yB.oN || 0 === yB.oN.length || yB.infiniteDistance) continue;
          const BB = yB.IK(),
            VB = BB.boundingBox.minimumWorld,
            pB = BB.boundingBox.maximumWorld;
          oB.p.CheckExtends(VB, TB, dB), oB.p.CheckExtends(pB, TB, dB)
        }
        return TB.x === Number.MAX_VALUE ? {
          min: oB.p.Zero(),
          max: oB.p.Zero()
        } : {
          min: TB,
          max: dB
        }
      }
      createPickingRay(BB, TB, dB, VB) {
        throw (0, NB.i)("Ray")
      }
      createPickingRayToRef(BB, TB, dB, VB, yB) {
        throw (0, NB.i)("Ray")
      }
      createPickingRayInCameraSpace(BB, TB, dB) {
        throw (0, NB.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(BB, TB, dB, VB) {
        throw (0, NB.i)("Ray")
      }
      dO(BB, TB, dB, VB, yB, pB) {
        const lB = (0, NB.i)("Ray", !0);
        return lB && Bd.b.Warn(lB), new OB.b
      }
      pickWithBoundingInfo(BB, TB, dB, VB, yB) {
        const pB = (0, NB.i)("Ray", !0);
        return pB && Bd.b.Warn(pB), new OB.b
      }
      pickWithRay(BB, TB, dB, VB) {
        throw (0, NB.i)("Ray")
      }
      multiPick(BB, TB, dB, VB, yB) {
        throw (0, NB.i)("Ray")
      }
      multiPickWithRay(BB, TB, dB) {
        throw (0, NB.i)("Ray")
      }
      setPointerOverMesh(BB, TB, dB) {
        this._inputManager.setPointerOverMesh(BB, TB, dB)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const BB of this.geometries) BB._rebuild();
        for (const BB of this.meshes) BB._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const BB of this._components) BB.rebuild();
        for (const BB of this.kN) BB.rebuild();
        if (this.spriteManagers)
          for (const BB of this.spriteManagers) BB.rebuild()
      }
      _rebuildTextures() {
        for (const BB of this.textures) BB._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(BB, TB, dB) {
        if (void 0 === TB) return BB;
        const VB = [];
        for (const yB in BB) {
          const pB = BB[yB];
          gB.c && gB.c.MatchesQuery(pB, TB) && (!dB || dB(pB)) && VB.push(pB)
        }
        return VB
      }
      getMeshesByTags(BB, TB) {
        return this._getByTags(this.meshes, BB, TB)
      }
      getCamerasByTags(BB, TB) {
        return this._getByTags(this.cameras, BB, TB)
      }
      getLightsByTags(BB, TB) {
        return this._getByTags(this.lights, BB, TB)
      }
      getMaterialByTags(BB, TB) {
        return this._getByTags(this.materials, BB, TB).concat(this._getByTags(this.multiMaterials, BB, TB))
      }
      getTransformNodesByTags(BB, TB) {
        return this._getByTags(this.transformNodes, BB, TB)
      }
      setRenderingOrder(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, TB, dB, VB)
      }
      setRenderingAutoClearDepthStencil(BB, TB) {
        let dB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, TB, dB, VB)
      }
      getAutoClearDepthStencilSetup(BB) {
        return this._renderingManager.getAutoClearDepthStencilSetup(BB)
      }
      _forceBlockMaterialDirtyMechanism(BB) {
        this._blockMaterialDirtyMechanism = BB
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(BB) {
        this._blockMaterialDirtyMechanism !== BB && (this._blockMaterialDirtyMechanism = BB, BB || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(BB, TB) {
        if (!this._blockMaterialDirtyMechanism)
          for (const dB of this.materials) TB && !TB(dB) || dB.VdB(BB)
      }
      _loadFile(BB, TB, dB, VB, yB, pB, lB) {
        const JB = (0, jB.q)(BB, TB, dB, VB ? this.offlineProvider : void 0, yB, pB, lB);
        return this._activeRequests.push(JB), JB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), JB
      }
      async _loadFileAsync(BB, TB, dB, VB, yB) {
        return await new Promise(((pB, lB) => {
          this._loadFile(BB, (BB => {
            pB(BB)
          }), TB, dB, VB, ((BB, TB) => {
            lB(TB)
          }), yB)
        }))
      }
      async _loadDelayedFileAsync(BB, TB, dB) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const VB = `${BB}|${TB?"binary":"string"}`;
        let yB = this._delayedFileRequests.get(VB);
        if (!yB) {
          yB = TB ? this._loadFileAsync(BB, void 0, dB, !0) : this._loadFileAsync(BB, void 0, dB, !1);
          const pB = yB;
          (async () => {
            try {
              await pB
            } catch {}
            this._delayedFileRequests?.delete(VB)
          })(), this._delayedFileRequests.set(VB, yB)
        }
        return await yB
      }
      _requestFile(BB, TB, dB, VB, yB, pB, lB) {
        const JB = (0, jB.A)(BB, TB, dB, VB ? this.offlineProvider : void 0, yB, pB, lB);
        return this._activeRequests.push(JB), JB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), JB
      }
      async _requestFileAsync(BB, TB, dB, VB, yB) {
        return await new Promise(((pB, lB) => {
          this._requestFile(BB, (BB => {
            pB(BB)
          }), TB, dB, VB, (BB => {
            lB(BB)
          }), yB)
        }))
      }
      _readFile(BB, TB, dB, VB, yB) {
        const pB = (0, jB.t)(BB, TB, dB, VB, yB);
        return this._activeRequests.push(pB), pB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), pB
      }
      async _readFileAsync(BB, TB, dB) {
        return await new Promise(((VB, yB) => {
          this._readFile(BB, (BB => {
            VB(BB)
          }), TB, dB, (BB => {
            yB(BB)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, NB.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(BB) {
        return this.setActiveCameraById(BB)
      }
      getMaterialByID(BB) {
        return this.getMaterialById(BB)
      }
      getLastMaterialByID(BB) {
        return this.getLastMaterialById(BB)
      }
      getTextureByUniqueID(BB) {
        return this.getTextureByUniqueId(BB)
      }
      getCameraByID(BB) {
        return this.getCameraById(BB)
      }
      getCameraByUniqueID(BB) {
        return this.getCameraByUniqueId(BB)
      }
      getBoneByID(BB) {
        return this.getBoneById(BB)
      }
      getLightByID(BB) {
        return this.getLightById(BB)
      }
      getLightByUniqueID(BB) {
        return this.getLightByUniqueId(BB)
      }
      getParticleSystemByID(BB) {
        return this.getParticleSystemById(BB)
      }
      getGeometryByID(BB) {
        return this.getGeometryById(BB)
      }
      getMeshByID(BB) {
        return this.getMeshById(BB)
      }
      getMeshByUniqueID(BB) {
        return this.getMeshByUniqueId(BB)
      }
      getLastMeshByID(BB) {
        return this.getLastMeshById(BB)
      }
      getMeshesByID(BB) {
        return this.getMeshesById(BB)
      }
      getTransformNodeByID(BB) {
        return this.getTransformNodeById(BB)
      }
      getTransformNodeByUniqueID(BB) {
        return this.getTransformNodeByUniqueId(BB)
      }
      getTransformNodesByID(BB) {
        return this.getTransformNodesById(BB)
      }
      getNodeByID(BB) {
        return this.getNodeById(BB)
      }
      getLastEntryByID(BB) {
        return this.getLastEntryById(BB)
      }
      getLastSkeletonByID(BB) {
        return this.getLastSkeletonById(BB)
      }
    }
    pd.FOGMODE_NONE = 0, pd.FOGMODE_EXP = 1, pd.FOGMODE_EXP2 = 2, pd.FOGMODE_LINEAR = 3, pd.MinDeltaTime = 1, pd.MaxDeltaTime = 1e3, pd._OriginalDefaultMaterialFactory = pd.DefaultMaterialFactory;
    let ld = !1;

    function Jd() {
      ld || (ld = !0, (0, Td.g)("BABYLON.Scene", pd))
    }(eB = pd.prototype).sortActiveAnimatables ?? (eB.sortActiveAnimatables = (0, NB.h)("Scene", "sortActiveAnimatables")), (BT = pd.prototype).beginWeightedAnimation ?? (BT.beginWeightedAnimation = (0, NB.h)("Scene", "beginWeightedAnimation")), (TT = pd.prototype).beginAnimation ?? (TT.beginAnimation = (0, NB.h)("Scene", "beginAnimation")), (dT = pd.prototype).beginHierarchyAnimation ?? (dT.beginHierarchyAnimation = (0, NB.h)("Scene", "beginHierarchyAnimation")), (VT = pd.prototype).beginDirectAnimation ?? (VT.beginDirectAnimation = (0, NB.h)("Scene", "beginDirectAnimation")), (yT = pd.prototype).beginDirectHierarchyAnimation ?? (yT.beginDirectHierarchyAnimation = (0, NB.h)("Scene", "beginDirectHierarchyAnimation")), (pT = pd.prototype).getAnimatableByTarget ?? (pT.getAnimatableByTarget = (0, NB.h)("Scene", "getAnimatableByTarget")), (lT = pd.prototype).getAllAnimatablesByTarget ?? (lT.getAllAnimatablesByTarget = (0, NB.h)("Scene", "getAllAnimatablesByTarget")), (JT = pd.prototype).stopAllAnimations ?? (JT.stopAllAnimations = (0, NB.h)("Scene", "stopAllAnimations")), (YT = pd.prototype).getSoundByName ?? (YT.getSoundByName = (0, NB.h)("Scene", "getSoundByName")), (gT = pd.prototype).createOrUpdateSelectionOctree ?? (gT.createOrUpdateSelectionOctree = (0, NB.h)("Scene", "createOrUpdateSelectionOctree")), (oT = pd.prototype).createDefaultLight ?? (oT.createDefaultLight = (0, NB.h)("Scene", "createDefaultLight")), (kT = pd.prototype).createDefaultCamera ?? (kT.createDefaultCamera = (0, NB.h)("Scene", "createDefaultCamera")), (LT = pd.prototype).createDefaultCameraOrLight ?? (LT.createDefaultCameraOrLight = (0, NB.h)("Scene", "createDefaultCameraOrLight")), (OT = pd.prototype).createDefaultSkybox ?? (OT.createDefaultSkybox = (0, NB.h)("Scene", "createDefaultSkybox")), (DT = pd.prototype).createDefaultEnvironment ?? (DT.createDefaultEnvironment = (0, NB.h)("Scene", "createDefaultEnvironment")), (uT = pd.prototype).createDefaultVRExperience ?? (uT.createDefaultVRExperience = (0, NB.h)("Scene", "createDefaultVRExperience")), (HT = pd.prototype).createDefaultXRExperienceAsync ?? (HT.createDefaultXRExperienceAsync = (0, NB.h)("Scene", "createDefaultXRExperienceAsync")), (ET = pd.prototype).getGlowLayerByName ?? (ET.getGlowLayerByName = (0, NB.h)("Scene", "getGlowLayerByName")), (vT = pd.prototype).getHighlightLayerByName ?? (vT.getHighlightLayerByName = (0, NB.h)("Scene", "getHighlightLayerByName")), (mT = pd.prototype).getSelectionOutlineLayerByName ?? (mT.getSelectionOutlineLayerByName = (0, NB.h)("Scene", "getSelectionOutlineLayerByName")), (iT = pd.prototype).removeLensFlareSystem ?? (iT.removeLensFlareSystem = (0, NB.h)("Scene", "removeLensFlareSystem")), (NT = pd.prototype).addLensFlareSystem ?? (NT.addLensFlareSystem = (0, NB.h)("Scene", "addLensFlareSystem")), (tT = pd.prototype).getLensFlareSystemByName ?? (tT.getLensFlareSystemByName = (0, NB.h)("Scene", "getLensFlareSystemByName")), (fT = pd.prototype).getLensFlareSystemByID ?? (fT.getLensFlareSystemByID = (0, NB.h)("Scene", "getLensFlareSystemByID")), (sT = pd.prototype).getLensFlareSystemById ?? (sT.getLensFlareSystemById = (0, NB.h)("Scene", "getLensFlareSystemById")), (MT = pd.prototype).getPhysicsEngine ?? (MT.getPhysicsEngine = (0, NB.h)("Scene", "getPhysicsEngine")), (zT = pd.prototype).enablePhysics ?? (zT.enablePhysics = (0, NB.h)("Scene", "enablePhysics")), (wT = pd.prototype).disablePhysicsEngine ?? (wT.disablePhysicsEngine = (0, NB.h)("Scene", "disablePhysicsEngine")), (UT = pd.prototype).isPhysicsEnabled ?? (UT.isPhysicsEnabled = (0, NB.h)("Scene", "isPhysicsEnabled")), (FT = pd.prototype).deleteCompoundImpostor ?? (FT.deleteCompoundImpostor = (0, NB.h)("Scene", "deleteCompoundImpostor")), (KT = pd.prototype).removeReflectionProbe ?? (KT.removeReflectionProbe = (0, NB.h)("Scene", "removeReflectionProbe")), (rT = pd.prototype).addReflectionProbe ?? (rT.addReflectionProbe = (0, NB.h)("Scene", "addReflectionProbe")), (IT = pd.prototype).getBoundingBoxRenderer ?? (IT.getBoundingBoxRenderer = (0, NB.h)("Scene", "getBoundingBoxRenderer")), (cT = pd.prototype).enableDepthRenderer ?? (cT.enableDepthRenderer = (0, NB.h)("Scene", "enableDepthRenderer")), (ST = pd.prototype).disableDepthRenderer ?? (ST.disableDepthRenderer = (0, NB.h)("Scene", "disableDepthRenderer")), (PT = pd.prototype).enableFluidRenderer ?? (PT.enableFluidRenderer = (0, NB.h)("Scene", "enableFluidRenderer")), (QT = pd.prototype).disableFluidRenderer ?? (QT.disableFluidRenderer = (0, NB.h)("Scene", "disableFluidRenderer")), (RT = pd.prototype).enableGeometryBufferRenderer ?? (RT.enableGeometryBufferRenderer = (0, NB.h)("Scene", "enableGeometryBufferRenderer")), (aT = pd.prototype).disableGeometryBufferRenderer ?? (aT.disableGeometryBufferRenderer = (0, NB.h)("Scene", "disableGeometryBufferRenderer")), (ZT = pd.prototype).enableIblCdfGenerator ?? (ZT.enableIblCdfGenerator = (0, NB.h)("Scene", "enableIblCdfGenerator")), (XT = pd.prototype).disableIblCdfGenerator ?? (XT.disableIblCdfGenerator = (0, NB.h)("Scene", "disableIblCdfGenerator")), (WT = pd.prototype).getOutlineRenderer ?? (WT.getOutlineRenderer = (0, NB.h)("Scene", "getOutlineRenderer")), (hT = pd.prototype).enablePrePassRenderer ?? (hT.enablePrePassRenderer = (0, NB.h)("Scene", "enablePrePassRenderer")), (CT = pd.prototype).disablePrePassRenderer ?? (CT.disablePrePassRenderer = (0, NB.h)("Scene", "disablePrePassRenderer")), (GT = pd.prototype).enableSubSurfaceForPrePass ?? (GT.enableSubSurfaceForPrePass = (0, NB.h)("Scene", "enableSubSurfaceForPrePass")), (qT = pd.prototype).disableSubSurfaceForPrePass ?? (qT.disableSubSurfaceForPrePass = (0, NB.h)("Scene", "disableSubSurfaceForPrePass")), (xT = pd.prototype).pickSprite ?? (xT.pickSprite = (0, NB.h)("Scene", "pickSprite")), (jT = pd.prototype).pickSpriteWithRay ?? (jT.pickSpriteWithRay = (0, NB.h)("Scene", "pickSpriteWithRay")), (AT = pd.prototype).multiPickSprite ?? (AT.multiPickSprite = (0, NB.h)("Scene", "multiPickSprite")), (bT = pd.prototype).multiPickSpriteWithRay ?? (bT.multiPickSpriteWithRay = (0, NB.h)("Scene", "multiPickSpriteWithRay")), (nT = pd.prototype).setPointerOverSprite ?? (nT.setPointerOverSprite = (0, NB.h)("Scene", "setPointerOverSprite")), (eT = pd.prototype).getPointerOverSprite ?? (eT.getPointerOverSprite = (0, NB.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(pd.prototype, "mainSoundTrack") || Object.defineProperty(pd.prototype, "mainSoundTrack", (0, NB.d)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(pd.prototype, "soundTracks") || Object.defineProperty(pd.prototype, "soundTracks", (0, NB.d)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(pd.prototype, "audioEnabled") || Object.defineProperty(pd.prototype, "audioEnabled", (0, NB.d)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(pd.prototype, "headphone") || Object.defineProperty(pd.prototype, "headphone", (0, NB.d)("Scene", "headphone")), Object.getOwnPropertyDescriptor(pd.prototype, "audioListenerPositionProvider") || Object.defineProperty(pd.prototype, "audioListenerPositionProvider", (0, NB.d)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(pd.prototype, "audioListenerRotationProvider") || Object.defineProperty(pd.prototype, "audioListenerRotationProvider", (0, NB.d)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(pd.prototype, "audioPositioningRefreshRate") || Object.defineProperty(pd.prototype, "audioPositioningRefreshRate", (0, NB.d)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(pd.prototype, "selectionOctree") || Object.defineProperty(pd.prototype, "selectionOctree", (0, NB.d)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(pd.prototype, "debugLayer") || Object.defineProperty(pd.prototype, "debugLayer", (0, NB.d)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(pd.prototype, "gamepadManager") || Object.defineProperty(pd.prototype, "gamepadManager", (0, NB.d)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(pd.prototype, "simplificationQueue") || Object.defineProperty(pd.prototype, "simplificationQueue", (0, NB.d)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(pd.prototype, "onBeforePhysicsObservable") || Object.defineProperty(pd.prototype, "onBeforePhysicsObservable", (0, NB.d)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(pd.prototype, "onAfterPhysicsObservable") || Object.defineProperty(pd.prototype, "onAfterPhysicsObservable", (0, NB.d)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(pd.prototype, "reflectionProbes") || Object.defineProperty(pd.prototype, "reflectionProbes", (0, NB.d)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(pd.prototype, "forceShowBoundingBoxes") || Object.defineProperty(pd.prototype, "forceShowBoundingBoxes", (0, NB.d)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(pd.prototype, "depthPeelingRenderer") || Object.defineProperty(pd.prototype, "depthPeelingRenderer", (0, NB.d)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(pd.prototype, "useOrderIndependentTransparency") || Object.defineProperty(pd.prototype, "useOrderIndependentTransparency", (0, NB.d)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(pd.prototype, "fluidRenderer") || Object.defineProperty(pd.prototype, "fluidRenderer", (0, NB.d)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(pd.prototype, "geometryBufferRenderer") || Object.defineProperty(pd.prototype, "geometryBufferRenderer", (0, NB.d)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(pd.prototype, "iblCdfGenerator") || Object.defineProperty(pd.prototype, "iblCdfGenerator", (0, NB.d)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(pd.prototype, "prePassRenderer") || Object.defineProperty(pd.prototype, "prePassRenderer", (0, NB.d)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(pd.prototype, "subSurfaceConfiguration") || Object.defineProperty(pd.prototype, "subSurfaceConfiguration", (0, NB.d)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(pd.prototype, "spriteManagers") || Object.defineProperty(pd.prototype, "spriteManagers", (0, NB.d)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(pd.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(pd.prototype, "onBeforeSpritesRenderingObservable", (0, NB.d)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(pd.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(pd.prototype, "onAfterSpritesRenderingObservable", (0, NB.d)("Scene", "onAfterSpritesRenderingObservable"))
  },
  38927: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      f: () => yB
    });
    class VB {}
    VB.NAME_EFFECTLAYER = "EffectLayer", VB.NAME_LAYER = "Layer", VB.NAME_LENSFLARESYSTEM = "LensFlareSystem", VB.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", VB.NAME_PARTICLESYSTEM = "ParticleSystem", VB.NAME_GAMEPAD = "Gamepad", VB.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", VB.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", VB.NAME_PREPASSRENDERER = "PrePassRenderer", VB.NAME_DEPTHRENDERER = "DepthRenderer", VB.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", VB.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", VB.NAME_SPRITE = "Sprite", VB.NAME_SUBSURFACE = "SubSurface", VB.NAME_OUTLINERENDERER = "Outline", VB.NAME_PROCEDURALTEXTURE = "ProceduralTexture", VB.NAME_SHADOWGENERATOR = "ShadowGenerator", VB.NAME_OCTREE = "PVB", VB.NAME_PHYSICSENGINE = "PhysicsEngine", VB.NAME_AUDIO = "Audio", VB.NAME_FLUIDRENDERER = "FluidRenderer", VB.NAME_IBLCDFGENERATOR = "iblCDFGenerator", VB.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", VB.STEP_ISREADYFORMESH_EFFECTLAYER = 0, VB.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, VB.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, VB.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, VB.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, VB.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, VB.STEP_BEFORECAMERADRAW_PREPASS = 0, VB.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, VB.STEP_BEFORECAMERADRAW_LAYER = 2, VB.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, VB.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, VB.STEP_BEFORERENDERINGMESH_PREPASS = 0, VB.STEP_BEFORERENDERINGMESH_OUTLINE = 1, VB.STEP_AFTERRENDERINGMESH_PREPASS = 0, VB.STEP_AFTERRENDERINGMESH_OUTLINE = 1, VB.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, VB.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, VB.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, VB.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, VB.STEP_BEFORECLEAR_PREPASS = 1, VB.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, VB.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, VB.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, VB.STEP_AFTERCAMERADRAW_PREPASS = 0, VB.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, VB.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, VB.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, VB.STEP_AFTERCAMERADRAW_LAYER = 4, VB.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, VB.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, VB.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, VB.STEP_AFTERRENDER_AUDIO = 0, VB.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, VB.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, VB.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, VB.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, VB.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, VB.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, VB.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, VB.STEP_POINTERMOVE_SPRITE = 0, VB.STEP_POINTERDOWN_SPRITE = 0, VB.STEP_POINTERUP_SPRITE = 0;
    class yB extends Array {
      constructor(BB) {
        super(...BB)
      }
      static Create() {
        return Object.create(yB.prototype)
      }
      registerStep(BB, TB, dB) {
        let VB, yB = 0;
        for (; yB < this.length; yB++) {
          if (VB = this[yB].index, BB < VB) break
        }
        this.splice(yB, 0, {
          index: BB,
          component: TB,
          action: dB.bind(TB)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  38745: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => lB,
      f: () => JB,
      g: () => VB,
      h: () => yB,
      i: () => pB
    });

    function VB(BB, TB, dB, VB, yB, pB) {
      function lB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var JB, YB = VB.kind, gB = "getter" === YB ? "get" : "setter" === YB ? "set" : "value", oB = !TB && BB ? VB.static ? BB : BB.prototype : null, kB = TB || (oB ? Object.getOwnPropertyDescriptor(oB, VB.name) : {}), LB = !1, OB = dB.length - 1; OB >= 0; OB--) {
        var DB = {};
        for (var uB in VB) DB[uB] = "access" === uB ? {} : VB[uB];
        for (var uB in VB.access) DB.access[uB] = VB.access[uB];
        DB.addInitializer = function(BB) {
          if (LB) throw new TypeError("Cannot add initializers after decoration has completed");
          pB.push(lB(BB || null))
        };
        var HB = (0, dB[OB])("accessor" === YB ? {
          get: kB.get,
          set: kB.set
        } : kB[gB], DB);
        if ("accessor" === YB) {
          if (void 0 === HB) continue;
          if (null === HB || "object" !== typeof HB) throw new TypeError("Object expected");
          (JB = lB(HB.get)) && (kB.get = JB), (JB = lB(HB.set)) && (kB.set = JB), (JB = lB(HB.init)) && yB.unshift(JB)
        } else(JB = lB(HB)) && ("field" === YB ? yB.unshift(JB) : kB[gB] = JB)
      }
      oB && Object.defineProperty(oB, VB.name, kB), LB = !0
    }

    function yB(BB, TB, dB) {
      for (var VB = arguments.length > 2, yB = 0; yB < TB.length; yB++) dB = VB ? TB[yB].call(BB, dB) : TB[yB].call(BB);
      return VB ? dB : void 0
    }

    function pB(BB, TB, dB) {
      return "symbol" === typeof TB && (TB = TB.description ? "[".concat(TB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: dB ? "".concat(dB, " ", TB) : TB
      })
    }
    Object.create;
    Object.create;

    function lB(BB, TB, dB, VB) {
      if ("a" === dB && !VB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof TB ? BB !== TB || !VB : !TB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === dB ? VB : "a" === dB ? VB.call(BB) : VB ? VB.value : TB.get(BB)
    }

    function JB(BB, TB, dB, VB, yB) {
      if ("m" === VB) throw new TypeError("Private method is not writable");
      if ("a" === VB && !yB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof TB ? BB !== TB || !yB : !TB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === VB ? yB.call(BB, dB) : yB ? yB.value = dB : TB.set(BB, dB), dB
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);