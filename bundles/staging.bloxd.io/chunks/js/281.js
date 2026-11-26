export const id = 281;
export const ids = [281];
export const modules = {
  41150: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => jB,
      d: () => qB,
      e: () => JB,
      h: () => yB
    });
    var YB = GB(40929),
      DB = GB(39366),
      QB = GB(41067),
      oB = GB(40972);
    class jB {
      get lV() {
        return this._isDisposed
      }
      constructor(BB, OB, GB) {
        let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          jB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          yB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          JB = arguments.length > 7 ? arguments[7] : void 0,
          MB = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, oB.c)(), BB && BB.JF ? this._engine = BB.JF().Lp() : this._engine = BB, this._updatable = GB, this._instanced = jB, this._divisor = JB || 1, this._label = MB, OB instanceof YB.b ? (this._data = null, this._buffer = OB) : (this._data = OB, this._buffer = null), this.byteStride = yB ? DB : DB * Float32Array.BYTES_PER_ELEMENT, QB || this.create()
      }
      createVertexBuffer(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oB = arguments.length > 6 ? arguments[6] : void 0;
        const jB = QB ? OB : OB * Float32Array.BYTES_PER_ELEMENT,
          JB = YB ? QB ? YB : YB * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new yB(this._engine, this, BB, this._updatable, !0, JB, void 0 === DB ? this._instanced : DB, jB, GB, void 0, void 0, !0, this._divisor || oB)
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
          if (this._buffer.CP > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.CP, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.CP, void 0, this._label));
          DB.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(BB) {
        this.create(BB)
      }
      updateDirectly(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, BB, YB ? OB : OB * Float32Array.BYTES_PER_ELEMENT, GB ? GB * this.byteStride : void 0), this._data = 0 === OB && void 0 === GB ? BB : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class yB {
      get lV() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(BB) {
        const OB = 0 != BB;
        this._instanceDivisor = BB, OB !== this._instanced && (this._instanced = OB, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const BB = this.getData();
        return BB ? Array.isArray(BB) ? BB.length / (this.byteStride / 4) - this.byteOffset / 4 : (BB.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(BB, OB, GB, YB, DB, oB, PB, zB, lB, pB) {
        let qB, ZB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          NB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          RB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          WB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = BB, "object" === typeof YB && null !== YB ? (qB = YB.updatable ?? !1, DB = YB.postponeInternalCreation, oB = YB.stride, PB = YB.instanced, zB = YB.offset, lB = YB.size, pB = YB.type, ZB = YB.normalized ?? !1, NB = YB.useBytes ?? !1, RB = YB.divisor ?? 1, WB = YB.takeBufferOwnership ?? !1, this._label = YB.label) : qB = !!YB, OB instanceof jB ? (this._buffer = OB, this._ownsBuffer = WB) : (this._buffer = new jB(BB, OB, qB, oB, DB, PB, NB, RB, this._label), this._ownsBuffer = !0), this.uniqueId = yB._Counter++, this._kind = GB, void 0 === pB) {
          const BB = this.getData();
          this.type = BB ? MB(BB) : yB.FLOAT
        } else this.type = pB;
        const AB = (0, QB.s)(this.type);
        NB ? (this._size = lB || (oB ? oB / AB : JB(GB)), this.byteStride = oB || this._buffer.byteStride || this._size * AB, this.byteOffset = zB || 0) : (this._size = lB || oB || JB(GB), this.byteStride = oB ? oB * AB : this._buffer.byteStride || this._size * AB, this.byteOffset = (zB || 0) * AB), this.normalized = ZB, this._instanced = void 0 !== PB && PB, this._instanceDivisor = PB ? RB : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(BB) {
        switch (BB) {
          case yB.BYTE:
            return 0;
          case yB.UNSIGNED_BYTE:
            return 1;
          case yB.SHORT:
            return 2;
          case yB.UNSIGNED_SHORT:
            return 3;
          case yB.INT:
            return 4;
          case yB.UNSIGNED_INT:
            return 5;
          case yB.FLOAT:
            return 6;
          case yB.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${BB}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (yB._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(BB, OB) {
        const GB = this.getData();
        return GB ? (0, QB.r)(GB, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, BB, OB) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, QB.s)(this.type)
      }
      uYB() {
        return this.byteOffset / (0, QB.s)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, QB.s)(this.type) : this._size
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
      updateDirectly(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(BB, OB, void 0, GB), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(BB, OB) {
        (0, QB.k)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, BB, this.normalized, ((BB, GB) => {
          for (let YB = 0; YB < this._size; YB++) OB(BB[YB], GB + YB)
        }))
      }
      _alignBuffer() {}
    }

    function JB(BB) {
      switch (BB) {
        case yB.UVKind:
        case yB.UV2Kind:
        case yB.UV3Kind:
        case yB.UV4Kind:
        case yB.UV5Kind:
        case yB.UV6Kind:
          return 2;
        case yB.NormalKind:
        case yB.PositionKind:
          return 3;
        case yB.ColorKind:
        case yB.ColorInstanceKind:
        case yB.MatricesIndicesKind:
        case yB.MatricesIndicesExtraKind:
        case yB.MatricesWeightsKind:
        case yB.MatricesWeightsExtraKind:
        case yB.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + BB + "'")
      }
    }

    function MB(BB) {
      return BB instanceof Int8Array ? yB.BYTE : BB instanceof Uint8Array ? yB.UNSIGNED_BYTE : BB instanceof Int16Array ? yB.SHORT : BB instanceof Uint16Array ? yB.UNSIGNED_SHORT : BB instanceof Int32Array ? yB.INT : BB instanceof Uint32Array ? yB.UNSIGNED_INT : yB.FLOAT
    }

    function PB(BB) {
      return (0, QB.s)(BB)
    }

    function zB(BB, OB, GB, YB, DB, oB, jB, yB) {
      (0, QB.k)(BB, OB, GB, YB, DB, oB, jB, ((BB, OB) => {
        for (let GB = 0; GB < YB; GB++) yB(BB[GB], OB + GB)
      }))
    }

    function lB(BB, OB, GB, YB, DB, oB, jB, yB) {
      return (0, QB.r)(BB, OB, GB, YB, DB, oB, jB, yB)
    }
    yB._Counter = 0, yB.BYTE = 5120, yB.UNSIGNED_BYTE = 5121, yB.SHORT = 5122, yB.UNSIGNED_SHORT = 5123, yB.INT = 5124, yB.UNSIGNED_INT = 5125, yB.FLOAT = 5126, yB.HALF_FLOAT = 5131, yB.PositionKind = "position", yB.NormalKind = "normal", yB.TangentKind = "tangent", yB.UVKind = "uv", yB.UV2Kind = "uv2", yB.UV3Kind = "uv3", yB.UV4Kind = "uv4", yB.UV5Kind = "uv5", yB.UV6Kind = "uv6", yB.ColorKind = "color", yB.ColorInstanceKind = "instanceColor", yB.MatricesIndicesKind = "matricesIndices", yB.MatricesWeightsKind = "matricesWeights", yB.MatricesIndicesExtraKind = "matricesIndicesExtra", yB.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let pB = !1;

    function qB() {
      pB || (pB = !0, yB.DeduceStride = JB, yB.GetDataType = MB, yB.GetTypeByteLength = PB, yB.ForEach = zB, yB.GetFloatData = lB)
    }
  },
  40929: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.CP = 0, this.is32Bits = !1, this.uniqueId = YB._Counter++
      }
    }
    YB._Counter = 0
  },
  41145: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB
    });
    var YB = GB(37778),
      DB = GB(41150);
    class QB {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || OB && !this.pickedMesh.isVerticesDataPresent(DB.h.NormalKind)) return null;
        let GB, QB = this.pickedMesh.KDB();
        0 === QB?.length && (QB = null);
        const oB = YB.k.Xp[0],
          jB = YB.k.Xp[1],
          yB = YB.k.Xp[2];
        if (OB) {
          const BB = this.pickedMesh.getVerticesData(DB.h.NormalKind);
          let OB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId], oB) : oB.zOB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            JB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 1], jB) : jB.zOB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            MB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 2], yB) : yB.zOB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]);
          OB = OB.scale(this.bu), JB = JB.scale(this.bv), MB = MB.scale(1 - this.bu - this.bv), GB = new YB.r(OB.x + JB.x + MB.x, OB.y + JB.y + MB.y, OB.z + JB.z + MB.z)
        } else {
          const BB = this.pickedMesh.getVerticesData(DB.h.PositionKind),
            OB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId], oB) : oB.zOB(BB[3 * this.faceId * 3], BB[3 * this.faceId * 3 + 1], BB[3 * this.faceId * 3 + 2]),
            JB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 1], jB) : jB.zOB(BB[3 * (3 * this.faceId + 1)], BB[3 * (3 * this.faceId + 1) + 1], BB[3 * (3 * this.faceId + 1) + 2]),
            MB = QB ? YB.r.FromArrayToRef(BB, 3 * QB[3 * this.faceId + 2], yB) : yB.zOB(BB[3 * (3 * this.faceId + 2)], BB[3 * (3 * this.faceId + 2) + 1], BB[3 * (3 * this.faceId + 2) + 2]),
            PB = OB.subtract(JB),
            zB = MB.subtract(JB);
          GB = YB.r.Cross(PB, zB)
        }
        const JB = (BB, OB) => {
          if (-1 !== this.thinInstanceIndex) {
            const GB = BB._thinInstanceDataStorage.matrixData,
              DB = this.thinInstanceIndex << 4;
            if (GB && GB.length > DB) {
              const BB = YB.k.Matrix[0];
              YB.d.FromArrayToRef(GB, DB, BB), YB.r.TransformNormalToRef(OB, BB, OB)
            }
          }
          let GB = BB.getWorldMatrix();
          BB.nonUniformScaling && (YB.k.Matrix[0].IU(GB), GB = YB.k.Matrix[0], GB.setTranslationFromFloats(0, 0, 0), GB.invert(), GB.transposeToRef(YB.k.Matrix[1]), GB = YB.k.Matrix[1]), YB.r.TransformNormalToRef(OB, GB, OB)
        };
        if (BB && JB(this.pickedMesh, GB), this.ray) {
          const OB = YB.k.Xp[0].IU(GB);
          BB || JB(this.pickedMesh, OB), YB.r.Dot(OB, this.ray.direction) > 0 && GB.negateInPlace()
        }
        return GB.normalize(), GB
      }
      getTextureCoordinates() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DB.h.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(BB)) return null;
        const OB = this.pickedMesh.KDB();
        if (!OB) return null;
        const GB = this.pickedMesh.getVerticesData(BB);
        if (!GB) return null;
        let QB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId]),
          oB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId + 1]),
          jB = YB.o.FromArray(GB, 2 * OB[3 * this.faceId + 2]);
        return QB = QB.scale(this.bu), oB = oB.scale(this.bv), jB = jB.scale(1 - this.bu - this.bv), new YB.o(QB.x + oB.x + jB.x, QB.y + oB.y + jB.y)
      }
    }
  },
  40972: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = GB(40849);
    let DB = !1;

    function QB() {
      DB || (DB = !0, YB.ThinEngine.prototype.updateDynamicIndexBuffer = function(BB, OB) {
        let GB;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(BB), GB = BB.is32Bits ? OB instanceof Uint32Array ? OB : new Uint32Array(OB) : OB instanceof Uint16Array ? OB : new Uint16Array(OB), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, GB, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, YB.ThinEngine.prototype.updateDynamicVertexBuffer = function(BB, OB, GB, YB) {
        this.bindArrayBuffer(BB), void 0 === GB && (GB = 0);
        const DB = OB.byteLength || OB.length;
        void 0 === YB || YB >= DB && 0 === GB ? OB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GB, new Float32Array(OB)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GB, OB) : OB instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GB, new Float32Array(OB).subarray(0, YB / 4)) : (OB = ArrayBuffer.isView(OB) ? new Uint8Array(OB.buffer, OB.byteOffset, YB) : new Uint8Array(OB, 0, YB), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GB, OB)), this._resetVertexBufferBinding()
      })
    }
  },
  40938: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = OB, !BB && (BB = OB.createTexture(), !BB)) throw new Error("Unable to create webGL texture");
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
  40905: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => RB
    });
    var YB = GB(37802),
      DB = GB(40857),
      QB = GB(37796),
      oB = GB(39366),
      jB = GB(37793),
      yB = GB(40911);
    class JB {
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
    class MB {
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
        const OB = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = OB ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = OB ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = OB ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = OB ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = OB ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = OB ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = OB ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = OB ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = OB ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = OB ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = OB ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = OB ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? BB.enable(BB.STENCIL_TEST) : BB.disable(BB.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (BB.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (BB.stencilFuncSeparate(BB.FRONT, this.func, this.funcRef, this.funcMask), BB.stencilFuncSeparate(BB.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (BB.stencilOpSeparate(BB.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), BB.stencilOpSeparate(BB.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class PB {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = PB.ALWAYS, this.opStencilFail = PB.KEEP, this.opDepthFail = PB.KEEP, this.opStencilDepthPass = PB.REPLACE, this.backFunc = PB.ALWAYS, this.backOpStencilFail = PB.KEEP, this.backOpDepthFail = PB.KEEP, this.backOpStencilDepthPass = PB.REPLACE
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
    PB.ALWAYS = 519, PB.KEEP = 7680, PB.REPLACE = 7681;
    var zB = GB(40914),
      lB = GB(40890),
      pB = GB(40837),
      qB = GB(40870),
      ZB = GB(40883);

    function NB(BB, OB) {
      if (OB) {
        const {
          requestAnimationFrame: GB
        } = OB;
        if ("function" === typeof GB) return GB(BB)
      }
      if ((0, qB.j)()) {
        const {
          requestAnimationFrame: GB
        } = OB || window;
        if ("function" === typeof GB) return GB(BB)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(BB);
      return setTimeout(BB, 16)
    }
    class RB {
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
      get fDB() {
        return this._useReverseDepthBuffer
      }
      set fDB(BB) {
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
        if (BB) return this.isNDCHalfZRange ? BB.IS_NDC_HALF_ZRANGE = "" : delete BB.IS_NDC_HALF_ZRANGE, this.fDB ? BB.USE_REVERSE_DEPTHBUFFER = "" : delete BB.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? BB.USE_EXACT_SRGB_CONVERSIONS = "" : delete BB.USE_EXACT_SRGB_CONVERSIONS);
        {
          let BB = "";
          return this.isNDCHalfZRange && (BB += "#define IS_NDC_HALF_ZRANGE"), this.fDB && (BB && (BB += "\n"), BB += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (BB && (BB += "\n"), BB += "#define USE_EXACT_SRGB_CONVERSIONS"), BB
        }
      }
      _rebuildInternalTextures() {
        const BB = this._internalTexturesCache.slice();
        for (const OB of BB) OB._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const BB = this._renderTargetWrapperCache.slice();
        for (const OB of BB) OB.textures?.some((BB => 15 === BB.source)) || OB._rebuild()
      }
      _rebuildEffects() {
        for (const BB in this._compiledEffects) {
          const OB = this._compiledEffects[BB];
          OB._pipelineContext = null, OB._prepareEffect()
        }
        DB.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        oB.b.Warn(this.name + " context successfully restored."), this.ip.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(BB) {
        setTimeout((() => {
          this._clearEmptyResources();
          const OB = this._depthCullingState.depthTest,
            GB = this._depthCullingState.depthFunc,
            YB = this._depthCullingState.depthMask,
            DB = this._stencilState.stencilTest;
          BB(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = OB, this._depthCullingState.depthFunc = GB, this._depthCullingState.depthMask = YB, this._stencilState.stencilTest = DB, this._flagContextRestored()
        }), 0)
      }
      get lV() {
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
            OB = [BB, BB, BB, BB, BB, BB];
          this._emptyCubeTexture = this.createRawCubeTexture(OB, 1, 5, 0, !1, !1, 1)
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
        const OB = this._activeRenderLoops.indexOf(BB);
        OB >= 0 && (this._activeRenderLoops.splice(OB, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: BB
            } = this.customAnimationFrameRequester;
            BB && BB(this.customAnimationFrameRequester.wp), delete this.customAnimationFrameRequester.wp
          }
        } else if (0 !== this._frameHandler) {
          const BB = this._frameHandler;
          if (this._frameHandler = 0, (0, qB.j)()) {
            const {
              cancelAnimationFrame: OB
            } = this.getHostWindow() || window;
            if ("function" === typeof OB) return OB(BB)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(BB);
          return clearTimeout(BB)
        }
      }
      zW() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      AP() {
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
        const OB = BB - this._lastFrameTime;
        return this._lastFrameTime = BB, this._renderAccumulator += OB, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(BB) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(BB)) {
          let BB = !0;
          (this.lV || !this.renderEvenInBackground && this._windowIsBackground) && (BB = !1), BB && (this.zW(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.AP())
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
      _queueNewFrame(BB, OB) {
        return NB(BB, OB)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.wp = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.wp) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.fDB ? -BB : BB
      }
      getZOffset() {
        const BB = this._depthCullingState.zOffset;
        return this.fDB ? -BB : BB
      }
      setZOffsetUnits(BB) {
        this._depthCullingState.zOffsetUnits = this.fDB ? -BB : BB
      }
      getZOffsetUnits() {
        const BB = this._depthCullingState.zOffsetUnits;
        return this.fDB ? -BB : BB
      }
      getHostWindow() {
        return (0, qB.j)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const OB = this._renderTargetWrapperCache.indexOf(BB); - 1 !== OB && this._renderTargetWrapperCache.splice(OB, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(BB, OB, GB) {
        const YB = OB || this.getRenderWidth(),
          DB = GB || this.getRenderHeight(),
          QB = BB.x || 0,
          oB = BB.y || 0;
        this._cachedViewport = BB, this._viewport(QB * YB, oB * DB, YB * BB.width, DB * BB.height)
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
      _createTextureBase(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          jB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          yB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          JB = arguments.length > 7 ? arguments[7] : void 0,
          MB = arguments.length > 8 ? arguments[8] : void 0,
          PB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          zB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          lB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          qB = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          ZB = arguments.length > 13 ? arguments[13] : void 0,
          NB = arguments.length > 14 ? arguments[14] : void 0,
          WB = arguments.length > 15 ? arguments[15] : void 0;
        const AB = "data:" === (BB = BB || "").substring(0, 5),
          VB = "blob:" === BB.substring(0, 5),
          SB = AB && -1 !== BB.indexOf(";base64,"),
          nB = zB || new pB.b(this, 1);
        nB !== zB && (nB.label = BB.substring(0, 60));
        const UB = BB;
        !this._transformTextureUrl || SB || zB || PB || (BB = this._transformTextureUrl(BB)), UB !== BB && (nB._originalUrl = UB);
        const fB = BB.lastIndexOf(".");
        let kB = qB || (fB > -1 ? BB.substring(fB).toLowerCase() : "");
        kB.indexOf("?") > -1 && (kB = kB.split("?")[0]);
        const dB = RB.GetCompatibleTextureLoader(kB, ZB);
        YB && YB.addPendingData(nB), nB.url = BB, nB.generateMipMaps = !OB, nB.samplingMode = DB, nB.invertY = GB, nB._useSRGBBuffer = this._getUseSRGBBuffer(!!WB, OB), this._doNotHandleContextLost || (nB._buffer = PB);
        let KB = null;
        jB && !zB && (KB = nB.onLoadedObservable.add(jB)), zB || this._internalTexturesCache.push(nB);
        const uB = (GB, zB) => {
          YB && YB.removePendingData(nB), BB === UB ? (KB && nB.onLoadedObservable.remove(KB), QB.b.UseFallbackTexture && BB !== QB.b.FallbackTexture && this._createTextureBase(QB.b.FallbackTexture, OB, nB.invertY, YB, DB, null, yB, JB, MB, PB, nB), GB = (GB || "Unknown error") + (QB.b.UseFallbackTexture ? " - Fallback texture was used" : ""), nB.onErrorObservable.notifyObservers({
            message: GB,
            exception: zB
          }), yB && yB(GB, zB)) : (oB.b.Warn(`Failed to load ${BB}, falling back to ${UB}`), this._createTextureBase(UB, OB, nB.invertY, YB, DB, jB, yB, JB, MB, PB, nB, lB, qB, ZB, NB, WB))
        };
        if (dB) {
          const OB = async BB => {
            (await dB).loadData(BB, nB, ((BB, OB, GB, QB, oB, jB) => {
              jB ? uB("TextureLoader failed to load data") : JB(nB, kB, YB, {
                width: BB,
                height: OB
              }, nB.invertY, !GB, QB, (() => (oB(), !1)), DB)
            }), NB)
          };
          if (PB) {
            const BB = async BB => {
              try {
                await OB(BB)
              } catch (GB) {
                uB("Failed to parse texture data", GB)
              }
            };
            PB instanceof ArrayBuffer ? BB(new Uint8Array(PB)) : ArrayBuffer.isView(PB) ? BB(PB) : yB && yB("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(BB, (async BB => {
            try {
              await OB(new Uint8Array(BB))
            } catch (GB) {
              uB("Failed to parse texture data", GB)
            }
          }), void 0, YB ? YB.offlineProvider : void 0, !0, ((BB, OB) => {
            uB("Unable to load " + (BB && BB.responseURL, OB))
          }))
        } else {
          const GB = BB => {
            VB && !this._doNotHandleContextLost && (nB._buffer = BB), JB(nB, kB, YB, BB, nB.invertY, OB, !1, MB, DB)
          };
          !AB || SB ? PB && ("string" === typeof PB.decoding || PB.close) ? GB(PB) : RB._FileToolsLoadImage(BB || "", GB, uB, YB ? YB.offlineProvider : null, ZB, nB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof PB || PB instanceof ArrayBuffer || ArrayBuffer.isView(PB) || PB instanceof Blob ? RB._FileToolsLoadImage(PB, GB, uB, YB ? YB.offlineProvider : null, ZB, nB.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : PB && GB(PB)
        }
        return nB
      }
      _rebuildBuffers() {
        for (const BB of this._uniformBuffers) BB._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, qB.c)() ? document : null
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
      constructor(BB, OB, GB) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new JB, this._stencilStateComposer = new MB, this._stencilState = new PB, this._alphaState = new zB.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new YB.b, this.onCanvasFocusObservable = new YB.b, this.onNewSceneAddedObservable = new YB.b, this.onResizeObservable = new YB.b, this.onCanvasPointerOutObservable = new YB.b, this.onEffectErrorObservable = new YB.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new YB.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = BB => this._renderLoop(BB), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new YB.b, this.onAfterShaderCompilationObservable = new YB.b, this.onBeginFrameObservable = new YB.b, this.onEndFrameObservable = new YB.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new YB.b, this.ip = new YB.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.lF = new YB.b, this.onReleaseEffectsObservable = new YB.b, QB.b.Instances.push(this), this.startTime = yB.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, jB.c.SetMatrixPrecision(!!OB.useLargeWorldRendering || !!OB.useHighPrecisionMatrix), (0, qB.g)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), OB.antialias = BB ?? OB.antialias, OB.deterministicLockstep = OB.deterministicLockstep ?? !1, OB.lockstepMaxSteps = OB.lockstepMaxSteps ?? 4, OB.timeStep = OB.timeStep ?? 1 / 60, OB.stencil = OB.stencil ?? !0, this._audioContext = OB.audioEngineOptions?.audioContext ?? null, this._audioDestination = OB.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = OB.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!OB.doNotHandleContextLost, this._isStencilEnable = !!OB.stencil, this.useExactSrgbConversions = OB.useExactSrgbConversions ?? !1, this.canvasTabIndex = OB.canvasTabIndex ?? this.canvasTabIndex;
        const DB = (0, qB.j)() && window.devicePixelRatio || 1,
          oB = OB.limitDeviceRatio || DB;
        GB = GB || OB.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = GB, this._hardwareScalingLevel = GB ? 1 / Math.min(oB, DB) : 1, this._lastDevicePixelRatio = DB, this._creationOptions = OB
      }
      resize() {
        let BB, OB, GB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const BB = (0, qB.j)() && window.devicePixelRatio || 1,
            OB = this._lastDevicePixelRatio / BB;
          this._lastDevicePixelRatio = BB, this._hardwareScalingLevel *= OB
        }
        if ((0, qB.j)() && (0, qB.c)())
          if (this._renderingCanvas) {
            const GB = this._renderingCanvas.getBoundingClientRect?.();
            BB = this._renderingCanvas.clientWidth || GB?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, OB = this._renderingCanvas.clientHeight || GB?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else BB = window.innerWidth, OB = window.innerHeight;
        else BB = this._renderingCanvas ? this._renderingCanvas.width : 100, OB = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(BB / this._hardwareScalingLevel, OB / this._hardwareScalingLevel, GB)
      }
      setSize(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (BB |= 0, OB |= 0, !GB && this._renderingCanvas.width === BB && this._renderingCanvas.height === OB) return !1;
        if (this._renderingCanvas.width = BB, this._renderingCanvas.height = OB, this.scenes) {
          for (let BB = 0; BB < this.scenes.length; BB++) {
            const OB = this.scenes[BB];
            for (let BB = 0; BB < OB.cameras.length; BB++) {
              OB.cameras[BB]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB) {
        throw (0, lB.j)("engine.rawTexture")
      }
      createRawCubeTexture(BB, OB, GB, YB, DB, QB, oB, jB) {
        throw (0, lB.j)("engine.rawTexture")
      }
      createRawTexture3D(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        throw (0, lB.j)("engine.rawTexture")
      }
      createRawTexture2DArray(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB) {
        throw (0, lB.j)("engine.rawTexture")
      }
      _sharedInit(BB) {
        this._renderingCanvas = BB
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const BB = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== BB.indexOf("Mobile") || -1 !== BB.indexOf("Mac") && (0, qB.c)() && "ontouchend" in document
        }, this._checkForMobile(), (0, qB.j)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(BB, OB) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(BB, OB) {
        return createImageBitmap(BB, OB)
      }
      resizeImageBitmap(BB, OB, GB) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(BB) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(BB, OB) {
        if ("undefined" === typeof document) return new OffscreenCanvas(BB, OB);
        const GB = document.createElement("canvas");
        return GB.width = BB, GB.height = OB, GB
      }
      createCanvas(BB, OB) {
        return RB._CreateCanvas(BB, OB)
      }
      static _FileToolsLoadImage(BB, OB, GB, YB, DB, QB, oB) {
        if (!ZB.b.loadImage) throw (0, lB.j)("FileTools");
        return ZB.b.loadImage(BB, OB, GB, YB, DB, QB, oB)
      }
      _loadFile(BB, OB, GB, YB, DB, QB) {
        const oB = (0, ZB.i)(BB, OB, GB, YB, DB, QB);
        return this._activeRequests.push(oB), oB.onCompleteObservable.add((() => {
          const BB = this._activeRequests.indexOf(oB); - 1 !== BB && this._activeRequests.splice(BB, 1)
        })), oB
      }
      static _FileToolsLoadFile(BB, OB, GB, YB, DB, QB) {
        if (ZB.b.loadFile) return ZB.b.loadFile(BB, OB, GB, YB, DB, QB);
        throw (0, lB.j)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), DB.c.ResetCache();
        for (const OB of this._activeRequests) OB.abort();
        this._boundRenderFunction = null, this.lF.notifyObservers(this), this.lF.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, qB.j)() && window.removeEventListener("resize", this._checkForMobile);
        const BB = QB.b.Instances.indexOf(this);
        BB >= 0 && QB.b.Instances.splice(BB, 1), QB.b.Instances.length || (QB.b.OnEnginesDisposedObservable.notifyObservers(this), QB.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(BB) {
        throw (0, lB.j)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(BB, OB) {
        for (let GB = 0; GB < QB.b.Instances.length; GB++) {
          const YB = QB.b.Instances[GB];
          for (let GB = 0; GB < YB.scenes.length; GB++) YB.scenes[GB].markAllMaterialsAsDirty(BB, OB)
        }
      }
      static GetCompatibleTextureLoader(BB, OB) {
        return null
      }
    }
    RB._RenderPassIdCounter = 0, RB._RescalePostProcessFactory = null, RB.CollisionsEpsilon = .001, RB.QueueNewFrame = NB
  },
  40864: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersRepository : YB.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.ShadersStore : YB.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? YB.IncludesShadersStore : YB.IncludesShadersStoreWGSL
      }
    }
    YB.ShadersRepository = "src/Shaders/", YB.ShadersStore = {}, YB.IncludesShadersStore = {}, YB.ShadersRepositoryWGSL = "src/ShadersWGSL/", YB.ShadersStoreWGSL = {}, YB.IncludesShadersStoreWGSL = {}
  },
  40878: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      d: () => WB,
      f: () => pB,
      j: () => lB,
      k: () => qB,
      o: () => RB,
      p: () => PB,
      q: () => JB,
      r: () => MB,
      s: () => yB,
      u: () => jB
    });
    class YB {
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
      _fillEffectInformation(BB, OB, GB, YB, DB, QB, oB, jB) {
        const yB = this.engine;
        if (yB.supportsUniformBuffers)
          for (const MB in OB) BB.bindUniformBlock(MB, OB[MB]);
        let JB;
        for (this.engine.getUniforms(this, GB).forEach(((BB, OB) => {
            YB[GB[OB]] = BB
          })), this._uniforms = YB, JB = 0; JB < DB.length; JB++) {
          null == BB.getUniform(DB[JB]) && (DB.splice(JB, 1), JB--)
        }
        DB.forEach(((BB, OB) => {
          QB[BB] = OB
        }));
        for (const MB of yB.getAttributes(this, oB)) jB.push(MB)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(BB, OB) {
        const GB = this._valueCache[BB],
          YB = OB.updateFlag;
        if (void 0 !== GB && GB === YB) return !1;
        const DB = OB.dDB();
        let QB = this._matrixValueCache[BB];
        if (void 0 !== GB && null !== GB && void 0 !== QB) {
          let OB = !0;
          for (let BB = 15; BB >= 0; BB--)
            if (QB[BB] !== DB[BB]) {
              OB = !1;
              break
            } if (OB) return this._valueCache[BB] = YB, !1
        }
        return void 0 === QB && (QB = this._matrixValueCache[BB] = new Float32Array(16)), QB.set(DB), this._valueCache[BB] = YB, !0
      }
      _cacheFloat2(BB, OB, GB) {
        let YB = this._valueCache[BB];
        if (!YB || 2 !== YB.length) return YB = [OB, GB], this._valueCache[BB] = YB, !0;
        let DB = !1;
        return YB[0] !== OB && (YB[0] = OB, DB = !0), YB[1] !== GB && (YB[1] = GB, DB = !0), DB
      }
      _cacheFloat3(BB, OB, GB, YB) {
        let DB = this._valueCache[BB];
        if (!DB || 3 !== DB.length) return DB = [OB, GB, YB], this._valueCache[BB] = DB, !0;
        let QB = !1;
        return DB[0] !== OB && (DB[0] = OB, QB = !0), DB[1] !== GB && (DB[1] = GB, QB = !0), DB[2] !== YB && (DB[2] = YB, QB = !0), QB
      }
      _cacheFloat4(BB, OB, GB, YB, DB) {
        let QB = this._valueCache[BB];
        if (!QB || 4 !== QB.length) return QB = [OB, GB, YB, DB], this._valueCache[BB] = QB, !0;
        let oB = !1;
        return QB[0] !== OB && (QB[0] = OB, oB = !0), QB[1] !== GB && (QB[1] = GB, oB = !0), QB[2] !== YB && (QB[2] = YB, oB = !0), QB[3] !== DB && (QB[3] = DB, oB = !0), oB
      }
      setInt(BB, OB) {
        const GB = this._valueCache[BB];
        void 0 !== GB && GB === OB || this.engine.setInt(this._uniforms[BB], OB) && (this._valueCache[BB] = OB)
      }
      setInt2(BB, OB, GB) {
        this._cacheFloat2(BB, OB, GB) && (this.engine.setInt2(this._uniforms[BB], OB, GB) || (this._valueCache[BB] = null))
      }
      setInt3(BB, OB, GB, YB) {
        this._cacheFloat3(BB, OB, GB, YB) && (this.engine.setInt3(this._uniforms[BB], OB, GB, YB) || (this._valueCache[BB] = null))
      }
      setInt4(BB, OB, GB, YB, DB) {
        this._cacheFloat4(BB, OB, GB, YB, DB) && (this.engine.setInt4(this._uniforms[BB], OB, GB, YB, DB) || (this._valueCache[BB] = null))
      }
      setIntArray(BB, OB) {
        this._valueCache[BB] = null, this.engine.setIntArray(this._uniforms[BB], OB)
      }
      setIntArray2(BB, OB) {
        this._valueCache[BB] = null, this.engine.setIntArray2(this._uniforms[BB], OB)
      }
      setIntArray3(BB, OB) {
        this._valueCache[BB] = null, this.engine.setIntArray3(this._uniforms[BB], OB)
      }
      setIntArray4(BB, OB) {
        this._valueCache[BB] = null, this.engine.setIntArray4(this._uniforms[BB], OB)
      }
      setUInt(BB, OB) {
        const GB = this._valueCache[BB];
        void 0 !== GB && GB === OB || this.engine.setUInt(this._uniforms[BB], OB) && (this._valueCache[BB] = OB)
      }
      setUInt2(BB, OB, GB) {
        this._cacheFloat2(BB, OB, GB) && (this.engine.setUInt2(this._uniforms[BB], OB, GB) || (this._valueCache[BB] = null))
      }
      setUInt3(BB, OB, GB, YB) {
        this._cacheFloat3(BB, OB, GB, YB) && (this.engine.setUInt3(this._uniforms[BB], OB, GB, YB) || (this._valueCache[BB] = null))
      }
      setUInt4(BB, OB, GB, YB, DB) {
        this._cacheFloat4(BB, OB, GB, YB, DB) && (this.engine.setUInt4(this._uniforms[BB], OB, GB, YB, DB) || (this._valueCache[BB] = null))
      }
      setUIntArray(BB, OB) {
        this._valueCache[BB] = null, this.engine.setUIntArray(this._uniforms[BB], OB)
      }
      setUIntArray2(BB, OB) {
        this._valueCache[BB] = null, this.engine.setUIntArray2(this._uniforms[BB], OB)
      }
      setUIntArray3(BB, OB) {
        this._valueCache[BB] = null, this.engine.setUIntArray3(this._uniforms[BB], OB)
      }
      setUIntArray4(BB, OB) {
        this._valueCache[BB] = null, this.engine.setUIntArray4(this._uniforms[BB], OB)
      }
      setArray(BB, OB) {
        this._valueCache[BB] = null, this.engine.setArray(this._uniforms[BB], OB)
      }
      setArray2(BB, OB) {
        this._valueCache[BB] = null, this.engine.setArray2(this._uniforms[BB], OB)
      }
      setArray3(BB, OB) {
        this._valueCache[BB] = null, this.engine.setArray3(this._uniforms[BB], OB)
      }
      setArray4(BB, OB) {
        this._valueCache[BB] = null, this.engine.setArray4(this._uniforms[BB], OB)
      }
      setMatrices(BB, OB) {
        OB && (this._valueCache[BB] = null, this.engine.setMatrices(this._uniforms[BB], OB))
      }
      setMatrix(BB, OB) {
        this._cacheMatrix(BB, OB) && (this.engine.setMatrices(this._uniforms[BB], OB.dDB()) || (this._valueCache[BB] = null))
      }
      setMatrix3x3(BB, OB) {
        this._valueCache[BB] = null, this.engine.setMatrix3x3(this._uniforms[BB], OB)
      }
      setMatrix2x2(BB, OB) {
        this._valueCache[BB] = null, this.engine.setMatrix2x2(this._uniforms[BB], OB)
      }
      setFloat(BB, OB) {
        const GB = this._valueCache[BB];
        void 0 !== GB && GB === OB || this.engine.setFloat(this._uniforms[BB], OB) && (this._valueCache[BB] = OB)
      }
      setVector2(BB, OB) {
        this._cacheFloat2(BB, OB.x, OB.y) && (this.engine.setFloat2(this._uniforms[BB], OB.x, OB.y) || (this._valueCache[BB] = null))
      }
      setFloat2(BB, OB, GB) {
        this._cacheFloat2(BB, OB, GB) && (this.engine.setFloat2(this._uniforms[BB], OB, GB) || (this._valueCache[BB] = null))
      }
      setVector3(BB, OB) {
        this._cacheFloat3(BB, OB.x, OB.y, OB.z) && (this.engine.setFloat3(this._uniforms[BB], OB.x, OB.y, OB.z) || (this._valueCache[BB] = null))
      }
      setFloat3(BB, OB, GB, YB) {
        this._cacheFloat3(BB, OB, GB, YB) && (this.engine.setFloat3(this._uniforms[BB], OB, GB, YB) || (this._valueCache[BB] = null))
      }
      setVector4(BB, OB) {
        this._cacheFloat4(BB, OB.x, OB.y, OB.z, OB.w) && (this.engine.setFloat4(this._uniforms[BB], OB.x, OB.y, OB.z, OB.w) || (this._valueCache[BB] = null))
      }
      setQuaternion(BB, OB) {
        this._cacheFloat4(BB, OB.x, OB.y, OB.z, OB.w) && (this.engine.setFloat4(this._uniforms[BB], OB.x, OB.y, OB.z, OB.w) || (this._valueCache[BB] = null))
      }
      setFloat4(BB, OB, GB, YB, DB) {
        this._cacheFloat4(BB, OB, GB, YB, DB) && (this.engine.setFloat4(this._uniforms[BB], OB, GB, YB, DB) || (this._valueCache[BB] = null))
      }
      setColor3(BB, OB) {
        this._cacheFloat3(BB, OB.r, OB.g, OB.b) && (this.engine.setFloat3(this._uniforms[BB], OB.r, OB.g, OB.b) || (this._valueCache[BB] = null))
      }
      setColor4(BB, OB, GB) {
        this._cacheFloat4(BB, OB.r, OB.g, OB.b, GB) && (this.engine.setFloat4(this._uniforms[BB], OB.r, OB.g, OB.b, GB) || (this._valueCache[BB] = null))
      }
      setDirectColor4(BB, OB) {
        this._cacheFloat4(BB, OB.r, OB.g, OB.b, OB.a) && (this.engine.setFloat4(this._uniforms[BB], OB.r, OB.g, OB.b, OB.a) || (this._valueCache[BB] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var DB = GB(40883);
    const QB = new WeakMap,
      oB = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function jB(BB) {
      let OB = QB.get(BB);
      if (!OB) {
        if (!BB) return oB;
        OB = {
          _webGLVersion: BB.TEXTURE_BINDING_3D ? 2 : 1,
          _context: BB,
          parallelShaderCompile: BB.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, QB.set(BB, OB)
      }
      return OB
    }

    function yB(BB) {
      QB.delete(BB)
    }

    function JB(BB, OB, GB, YB, DB, QB) {
      const oB = jB(YB);
      QB || (QB = oB._createShaderProgramInjection ?? zB);
      return QB(BB, NB(OB, "vertex", YB, oB._contextWasLost), NB(GB, "fragment", YB, oB._contextWasLost), YB, DB, oB.validateShaderPrograms)
    }

    function MB(BB, OB, GB, YB, DB) {
      let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        oB = arguments.length > 6 ? arguments[6] : void 0;
      const yB = jB(DB);
      oB || (oB = yB._createShaderProgramInjection ?? zB);
      const JB = yB._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return oB(BB, ZB(OB, "vertex", YB, JB, DB, yB._contextWasLost), ZB(GB, "fragment", YB, JB, DB, yB._contextWasLost), DB, QB, yB.validateShaderPrograms)
    }

    function PB(BB, OB) {
      const GB = new YB,
        DB = jB(BB);
      return DB.parallelShaderCompile && !DB.disableParallelShaderCompile && (GB.isParallelCompiled = !0), GB.context = DB._context, GB
    }

    function zB(BB, OB, GB, YB) {
      let DB = arguments.length > 5 ? arguments[5] : void 0;
      const QB = YB.createProgram();
      if (BB.program = QB, !QB) throw new Error("Unable to create program");
      return YB.attachShader(QB, OB), YB.attachShader(QB, GB), YB.linkProgram(QB), BB.context = YB, BB.vertexShader = OB, BB.fragmentShader = GB, BB.isParallelCompiled || pB(BB, YB, DB), QB
    }

    function lB(BB, OB, GB) {
      const YB = BB;
      if (YB._isDisposed) return !1;
      const DB = jB(OB);
      return !!(DB && DB.parallelShaderCompile && DB.parallelShaderCompile.COMPLETION_STATUS_KHR && YB.program && OB.getProgramParameter(YB.program, DB.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (pB(YB, OB, GB), !0)
    }

    function pB(BB, OB, GB) {
      const YB = BB.context,
        DB = BB.vertexShader,
        QB = BB.fragmentShader,
        oB = BB.program;
      if (!YB.getProgramParameter(oB, YB.LINK_STATUS)) {
        if (!OB.getShaderParameter(DB, OB.COMPILE_STATUS)) {
          const GB = OB.getShaderInfoLog(DB);
          if (GB) throw BB.vertexCompilationError = GB, new Error("VERTEX SHADER " + GB)
        }
        if (!OB.getShaderParameter(QB, OB.COMPILE_STATUS)) {
          const GB = OB.getShaderInfoLog(QB);
          if (GB) throw BB.fragmentCompilationError = GB, new Error("FRAGMENT SHADER " + GB)
        }
        const GB = YB.getProgramInfoLog(oB);
        if (GB) throw BB.programLinkError = GB, new Error(GB)
      }
      if (GB) {
        YB.validateProgram(oB);
        if (!YB.getProgramParameter(oB, YB.VALIDATE_STATUS)) {
          const OB = YB.getProgramInfoLog(oB);
          if (OB) throw BB.programValidationError = OB, new Error(OB)
        }
      }
      YB.deleteShader(DB), YB.deleteShader(QB), BB.vertexShader = void 0, BB.fragmentShader = void 0, BB.onCompiled && (BB.onCompiled(), BB.onCompiled = void 0)
    }

    function qB(BB, OB, GB, YB, DB, QB, oB, yB, PB) {
      let zB = arguments.length > 10 ? arguments[10] : void 0,
        lB = arguments.length > 11 ? arguments[11] : void 0,
        pB = arguments.length > 12 ? arguments[12] : void 0;
      const qB = jB(BB.context);
      lB || (lB = qB.createRawShaderProgramInjection ?? JB), pB || (pB = qB.createShaderProgramInjection ?? MB);
      const ZB = BB;
      ZB.program = YB ? lB(ZB, OB, GB, ZB.context, PB) : pB(ZB, OB, GB, yB, ZB.context, PB), ZB.program.__SPECTOR_rebuildProgram = oB, zB()
    }

    function ZB(BB, OB, GB, YB, QB, oB) {
      return NB((0, DB.d)(BB, GB, YB), OB, QB, oB)
    }

    function NB(BB, OB, GB, YB) {
      const DB = GB.createShader("vertex" === OB ? GB.VERTEX_SHADER : GB.FRAGMENT_SHADER);
      if (!DB) {
        let BB, DB = GB.NO_ERROR;
        for (;
          (BB = GB.getError()) !== GB.NO_ERROR;) DB = BB;
        throw new Error(`Something went wrong while creating a gl ${OB} shader object. gl error=${DB}, gl isContextLost=${GB.isContextLost()}, _contextWasLost=${YB}`)
      }
      return GB.shaderSource(DB, BB), GB.compileShader(DB), DB
    }

    function RB(BB, OB) {
      OB.useProgram(BB)
    }

    function WB(BB, OB) {
      const GB = BB;
      if (!GB.isParallelCompiled) return void OB(BB);
      const YB = GB.onCompiled;
      GB.onCompiled = () => {
        YB?.(), OB(BB)
      }
    }
  },
  40849: (BB, OB, GB) => {
    GB.d(OB, {
      ThinEngine: () => VB
    });
    var YB = GB(40857),
      DB = GB(40878),
      QB = GB(40905),
      oB = GB(40918),
      jB = GB(39366),
      yB = GB(40870);
    class JB {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(BB, OB, GB, YB, DB) {
        if (DB.drawBuffersExtensionDisabled) {
          const OB = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          BB = BB.replace(OB, "")
        }
        return BB
      }
    }
    const MB = /(flat\s)?\s*varying\s*.*/;
    class PB {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(BB) {
        return BB.replace("attribute", "in")
      }
      varyingCheck(BB, OB) {
        return MB.test(BB)
      }
      varyingProcessor(BB, OB) {
        return BB.replace("varying", OB ? "in" : "out")
      }
      postProcessor(BB, OB, GB) {
        const YB = -1 !== BB.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (BB = (BB = BB.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), GB) {
          const GB = -1 !== BB.search(/layout *\(location *= *0\) *out/g),
            DB = -1 !== OB.indexOf("#define DUAL_SOURCE_BLENDING"),
            QB = DB ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          DB && (BB = "#extension GL_EXT_blend_func_extended : require\n" + BB), BB = (BB = (BB = (BB = (BB = (BB = (BB = BB.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (YB || GB ? "" : QB) + "void main(")
        } else {
          OB.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (BB = "invariant gl_Position;\n" + BB);
          if (-1 !== OB.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + BB
        }
        return BB
      }
    }
    var zB = GB(40920),
      lB = GB(40932),
      pB = GB(40938),
      qB = GB(40837),
      ZB = GB(40883),
      NB = GB(40868),
      RB = GB(40947),
      WB = GB(40914);
    class AB {}
    class VB extends QB.d {
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
        return YB.c.ShadersRepository
      }
      static set ShadersRepository(BB) {
        YB.c.ShadersRepository = BB
      }
      get supportsUniformBuffers() {
        return this.Pq > 1 && !this.disableUniformBuffers
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
      constructor(BB, OB, GB, YB) {
        if (GB = GB || {}, super(OB ?? GB.antialias, GB, YB), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !BB) return;
        let QB;
        if (BB.getContext) {
          if (QB = BB, void 0 === GB.preserveDrawingBuffer && (GB.preserveDrawingBuffer = !1), void 0 === GB.xrCompatible && (GB.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const BB = navigator.userAgent;
            for (const OB of VB.ExceptionList) {
              const YB = OB.key,
                DB = OB.targets;
              if (new RegExp(YB).test(BB)) {
                if (OB.capture && OB.captureConstraint) {
                  const GB = OB.capture,
                    YB = OB.captureConstraint,
                    DB = new RegExp(GB).exec(BB);
                  if (DB && DB.length > 0) {
                    if (parseInt(DB[DB.length - 1]) >= YB) continue
                  }
                }
                for (const BB of DB) switch (BB) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    GB.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, DB.s)(this._gl)
            } : (this._onContextLost = BB => {
              BB.preventDefault(), this._contextWasLost = !0, (0, DB.s)(this._gl), jB.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, QB.addEventListener("webglcontextrestored", this._onContextRestored, !1), GB.powerPreference = GB.powerPreference || "high-performance"), QB.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (GB.xrCompatible = !1), !GB.disableWebGL2Support) try {
            this._gl = QB.getContext("webgl2", GB) || QB.getContext("experimental-webgl2", GB), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (MB) {}
          if (!this._gl) {
            if (!QB) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = QB.getContext("webgl", GB) || QB.getContext("experimental-webgl", GB)
            } catch (MB) {
              throw new Error("WebGL not supported", {
                cause: MB
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = BB, QB = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const OB = this._gl.getContextAttributes();
          OB && (GB.stencil = OB.stencil)
        }
        this._sharedInit(QB), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== GB.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = GB.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let DB = 0; DB < this._caps.maxVertexAttribs; DB++) this._currentBufferPointers[DB] = new AB;
        this._shaderProcessor = this.Pq > 1 ? new PB : new JB;
        const oB = `Babylon.js v${VB.Version}`;
        jB.b.Log(oB + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", oB);
        const yB = (0, DB.u)(this._gl);
        yB.validateShaderPrograms = this.validateShaderPrograms, yB.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const OB = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!OB, this._alphaState = new WB.e(this._caps.blendParametersPerTarget), OB && (this._gl.blendEquationSeparateIndexed = OB.blendEquationSeparateiOES.bind(OB), this._gl.blendEquationIndexed = OB.blendEquationiOES.bind(OB), this._gl.blendFuncSeparateIndexed = OB.blendFuncSeparateiOES.bind(OB), this._gl.blendFuncIndexed = OB.blendFunciOES.bind(OB), this._gl.colorMaskIndexed = OB.colorMaskiOES.bind(OB), this._gl.disableIndexed = OB.disableiOES.bind(OB), this._gl.enableIndexed = OB.enableiOES.bind(OB)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const BB = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== BB) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = BB.drawBuffersWEBGL.bind(BB), this._caps.maxDrawBuffers = this._gl.getParameter(BB.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let OB = 0; OB < 16; OB++) this._gl["COLOR_ATTACHMENT" + OB + "_WEBGL"] = BB["COLOR_ATTACHMENT" + OB + "_WEBGL"]
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
            OB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (BB && OB && (this._caps.highPrecisionShaderSupported = 0 !== BB.precision && 0 !== OB.precision, this._caps.shaderFloatPrecision = Math.min(BB.precision, OB.precision)), !this._shouldUseHighPrecisionShader) {
            const BB = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              OB = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            BB && OB && (this._caps.shaderFloatPrecision = Math.min(BB.precision, OB.precision))
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
        for (let GB = 0; GB < this._maxSimultaneousTextures; GB++) this._nextFreeTextureSlots.push(GB);
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
      get Pq() {
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
      clear(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const QB = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = QB;
        let oB = 0;
        if (OB && BB) {
          let OB = !0;
          if (this._currentRenderTarget) {
            const GB = this._currentRenderTarget.texture?.format;
            if (void 0 !== GB && (0, RB.j)(GB)) {
              const GB = this._currentRenderTarget.texture?.type;
              void 0 !== GB && (0, RB.m)(GB) ? (VB._TempClearColorUint32[0] = 255 * BB.r, VB._TempClearColorUint32[1] = 255 * BB.g, VB._TempClearColorUint32[2] = 255 * BB.b, VB._TempClearColorUint32[3] = 255 * BB.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, VB._TempClearColorUint32), OB = !1) : (VB._TempClearColorInt32[0] = 255 * BB.r, VB._TempClearColorInt32[1] = 255 * BB.g, VB._TempClearColorInt32[2] = 255 * BB.b, VB._TempClearColorInt32[3] = 255 * BB.a, this._gl.clearBufferiv(this._gl.COLOR, 0, VB._TempClearColorInt32), OB = !1)
            }
          }
          OB && (this._gl.clearColor(BB.r, BB.g, BB.b, void 0 !== BB.a ? BB.a : 1), oB |= this._gl.COLOR_BUFFER_BIT)
        }
        GB && (this.fDB ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), oB |= this._gl.DEPTH_BUFFER_BIT), YB && (this._gl.clearStencil(DB), oB |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(oB)
      }
      _clearColorAttachment(BB, OB, GB, YB) {
        if ((0, RB.j)(GB)) {
          const GB = (0, RB.m)(YB),
            DB = GB ? VB._TempClearColorUint32 : VB._TempClearColorInt32;
          return DB[0] = OB.r, DB[1] = OB.g, DB[2] = OB.b, DB[3] = OB.a, void(GB ? this._gl.clearBufferuiv(this._gl.COLOR, BB, DB) : this._gl.clearBufferiv(this._gl.COLOR, BB, DB))
        }
        VB._TempClearColorFloat32[0] = OB.r, VB._TempClearColorFloat32[1] = OB.g, VB._TempClearColorFloat32[2] = OB.b, VB._TempClearColorFloat32[3] = OB.a, this._gl.clearBufferfv(this._gl.COLOR, BB, VB._TempClearColorFloat32)
      }
      _viewport(BB, OB, GB, YB) {
        BB === this._viewportCached.x && OB === this._viewportCached.y && GB === this._viewportCached.z && YB === this._viewportCached.w || (this._viewportCached.x = BB, this._viewportCached.y = OB, this._viewportCached.z = GB, this._viewportCached.w = YB, this._gl.viewport(BB, OB, GB, YB))
      }
      AP() {
        super.AP(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const yB = BB;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = BB, this._integerMRTAttachmentsMask = !BB.isMulti && BB.texture && (0, RB.j)(BB.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(yB._framebuffer);
        const JB = this._gl;
        BB.isMulti || (BB.is2DArray || BB.is3D ? (JB.framebufferTextureLayer(JB.FRAMEBUFFER, JB.COLOR_ATTACHMENT0, BB.texture._hardwareTexture?.underlyingResource, QB, oB), yB._currentLOD = QB) : BB.isCube ? JB.framebufferTexture2D(JB.FRAMEBUFFER, JB.COLOR_ATTACHMENT0, JB.TEXTURE_CUBE_MAP_POSITIVE_X + OB, BB.texture._hardwareTexture?.underlyingResource, QB) : yB._currentLOD !== QB && (JB.framebufferTexture2D(JB.FRAMEBUFFER, JB.COLOR_ATTACHMENT0, JB.TEXTURE_2D, BB.texture._hardwareTexture?.underlyingResource, QB), yB._currentLOD = QB));
        const MB = BB._depthStencilTexture;
        if (MB) {
          BB.is3D && (BB.texture.width === MB.width && BB.texture.height === MB.height && BB.texture.depth === MB.depth || jB.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const GB = BB._depthStencilTextureWithStencil ? JB.DEPTH_STENCIL_ATTACHMENT : JB.DEPTH_ATTACHMENT;
          BB.is2DArray || BB.is3D ? JB.framebufferTextureLayer(JB.FRAMEBUFFER, GB, MB._hardwareTexture?.underlyingResource, QB, oB) : BB.isCube ? JB.framebufferTexture2D(JB.FRAMEBUFFER, GB, JB.TEXTURE_CUBE_MAP_POSITIVE_X + OB, MB._hardwareTexture?.underlyingResource, QB) : JB.framebufferTexture2D(JB.FRAMEBUFFER, GB, JB.TEXTURE_2D, MB._hardwareTexture?.underlyingResource, QB)
        }
        yB._MSAAFramebuffer && this._bindUnboundFramebuffer(yB._MSAAFramebuffer), this._cachedViewport && !DB ? this.setViewport(this._cachedViewport, GB, YB) : (GB || (GB = BB.width, QB && (GB /= Math.pow(2, QB))), YB || (YB = BB.height, QB && (YB /= Math.pow(2, QB))), this._viewport(0, 0, GB, YB)), this.wipeCaches()
      }
      setStateCullFaceType(BB, OB) {
        const GB = this.cullBackFaces ?? BB ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== GB || OB) && (this._depthCullingState.cullFace = GB)
      }
      setState(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 ? arguments[5] : void 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== BB || GB) && (this._depthCullingState.cull = BB), this.setStateCullFaceType(DB, GB), this.setZOffset(OB), this.setZOffsetUnits(oB);
        const jB = YB ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== jB || GB) && (this._depthCullingState.frontFace = jB), this._stencilStateComposer.stencilMaterial = QB
      }
      _resolveAndGenerateMipMapsFramebuffer(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB.disableAutomaticMSAAResolve || (BB.isMulti ? this.resolveMultiFramebuffer(BB) : this.resolveFramebuffer(BB)), OB || (BB.isMulti ? this.generateMipMapsMultiFramebuffer(BB) : this.generateMipMapsFramebuffer(BB))
      }
      _bindUnboundFramebuffer(BB) {
        this._currentFramebuffer !== BB && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, BB), this._currentFramebuffer = BB)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(BB) {
        const OB = this._getTextureTarget(BB);
        this._bindTextureDirectly(OB, BB, !0), this._gl.generateMipmap(OB), this._bindTextureDirectly(OB, null)
      }
      unBindFramebuffer(BB, OB, GB) {
        const YB = BB;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(BB, OB), GB && (YB._MSAAFramebuffer && this._bindUnboundFramebuffer(YB._framebuffer), GB()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(BB) {
        BB.isMulti || !BB.texture?.generateMipMaps || BB.isCube || this.generateMipmaps(BB.texture)
      }
      resolveFramebuffer(BB) {
        const OB = BB,
          GB = this._gl;
        if (!OB._MSAAFramebuffer || OB.isMulti) return;
        let YB = OB.resolveMSAAColors ? GB.COLOR_BUFFER_BIT : 0;
        YB |= OB._generateDepthBuffer && OB.resolveMSAADepth ? GB.DEPTH_BUFFER_BIT : 0, YB |= OB._generateStencilBuffer && OB.resolveMSAAStencil ? GB.STENCIL_BUFFER_BIT : 0, GB.bindFramebuffer(GB.READ_FRAMEBUFFER, OB._MSAAFramebuffer), GB.bindFramebuffer(GB.DRAW_FRAMEBUFFER, OB._framebuffer), GB.blitFramebuffer(0, 0, BB.width, BB.height, 0, 0, BB.width, BB.height, YB, GB.NEAREST)
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
      createVertexBuffer(BB, OB, GB) {
        return this._createVertexBuffer(BB, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(BB, OB) {
        const GB = this._gl.createBuffer();
        if (!GB) throw new Error("Unable to create vertex buffer");
        const YB = new zB.b(GB);
        return this.bindArrayBuffer(YB), "number" !== typeof BB ? BB instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(BB), OB), YB.CP = 4 * BB.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, OB), YB.CP = BB.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(BB), OB), YB.CP = BB), this._resetVertexBufferBinding(), YB.references = 1, YB
      }
      createDynamicVertexBuffer(BB, OB) {
        return this._createVertexBuffer(BB, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(BB, OB, GB) {
        const YB = this._gl.createBuffer(),
          DB = new zB.b(YB);
        if (!YB) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(DB);
        const QB = this._normalizeIndexData(BB);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, QB, OB ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), DB.references = 1, DB.is32Bits = 4 === QB.BYTES_PER_ELEMENT, DB
      }
      _normalizeIndexData(BB) {
        if (2 === BB.BYTES_PER_ELEMENT) return BB;
        if (this._caps.uintIndices) {
          if (BB instanceof Uint32Array) return BB;
          for (let OB = 0; OB < BB.length; OB++)
            if (BB[OB] >= 65535) return new Uint32Array(BB);
          return new Uint16Array(BB)
        }
        return new Uint16Array(BB)
      }
      bindArrayBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(BB, OB, GB) {
        const YB = BB.program,
          DB = this._gl.getUniformBlockIndex(YB, OB);
        this._gl.uniformBlockBinding(YB, DB, GB)
      }
      bindIndexBuffer(BB) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(BB, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(BB, OB) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[OB] !== BB) && (this._gl.bindBuffer(OB, BB ? BB.underlyingResource : null), this._currentBoundBuffer[OB] = BB)
      }
      updateArrayBuffer(BB) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, BB)
      }
      _vertexAttribPointer(BB, OB, GB, YB, DB, QB, oB) {
        const jB = this._currentBufferPointers[OB];
        if (!jB) return;
        let yB = !1;
        jB.active ? (jB.buffer !== BB && (jB.buffer = BB, yB = !0), jB.size !== GB && (jB.size = GB, yB = !0), jB.type !== YB && (jB.type = YB, yB = !0), jB.normalized !== DB && (jB.normalized = DB, yB = !0), jB.stride !== QB && (jB.stride = QB, yB = !0), jB.offset !== oB && (jB.offset = oB, yB = !0)) : (yB = !0, jB.active = !0, jB.index = OB, jB.size = GB, jB.type = YB, jB.normalized = DB, jB.stride = QB, jB.offset = oB, jB.buffer = BB), (yB || this._vaoRecordInProgress) && (this.bindArrayBuffer(BB), YB === this._gl.UNSIGNED_INT || YB === this._gl.INT ? this._gl.vertexAttribIPointer(OB, GB, YB, QB, oB) : this._gl.vertexAttribPointer(OB, GB, YB, DB, QB, oB))
      }
      _bindIndexBufferWithCache(BB) {
        null != BB && this._cachedIndexBuffer !== BB && (this._cachedIndexBuffer = BB, this.bindIndexBuffer(BB), this._uintIndicesCurrentlySet = BB.is32Bits)
      }
      _bindVertexBuffersAttributes(BB, OB, GB) {
        const YB = OB.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let DB = 0; DB < YB.length; DB++) {
          const QB = OB.getAttributeLocation(DB);
          if (QB >= 0) {
            const OB = YB[DB];
            let oB = null;
            if (GB && (oB = GB[OB]), oB || (oB = BB[OB]), !oB) continue;
            this._gl.enableVertexAttribArray(QB), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[QB] = !0);
            const jB = oB.getBuffer();
            jB && (this._vertexAttribPointer(jB, QB, oB.getSize(), oB.type, oB.normalized, oB.byteStride, oB.byteOffset), oB.getIsInstanced() && (this._gl.vertexAttribDivisor(QB, oB.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(QB), this._currentInstanceBuffers.push(jB))))
          }
        }
      }
      recordVertexArrayObject(BB, OB, GB, YB) {
        const DB = this._gl.createVertexArray();
        if (!DB) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(DB), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(BB, GB, YB), this.bindIndexBuffer(OB), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), DB
      }
      bindVertexArrayObject(BB, OB) {
        this._cachedVertexArrayObject !== BB && (this._cachedVertexArrayObject = BB, this._gl.bindVertexArray(BB), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != OB && OB.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(BB, OB, GB, YB, DB) {
        if (this._cachedVertexBuffers !== BB || this._cachedEffectForVertexBuffers !== DB) {
          this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = DB;
          const OB = DB.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let QB = 0;
          for (let oB = 0; oB < OB; oB++)
            if (oB < GB.length) {
              const OB = DB.getAttributeLocation(oB);
              OB >= 0 && (this._gl.enableVertexAttribArray(OB), this._vertexAttribArraysEnabled[OB] = !0, this._vertexAttribPointer(BB, OB, GB[oB], this._gl.FLOAT, !1, YB, QB)), QB += 4 * GB[oB]
            }
        }
        this._bindIndexBufferWithCache(OB)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(BB, OB, GB, YB) {
        this._cachedVertexBuffers === BB && this._cachedEffectForVertexBuffers === GB || (this._cachedVertexBuffers = BB, this._cachedEffectForVertexBuffers = GB, this._bindVertexBuffersAttributes(BB, GB, YB)), this._bindIndexBufferWithCache(OB)
      }
      unbindInstanceAttributes() {
        let BB;
        for (let OB = 0, GB = this._currentInstanceLocations.length; OB < GB; OB++) {
          const GB = this._currentInstanceBuffers[OB];
          BB != GB && GB.references && (BB = GB, this.bindArrayBuffer(GB));
          const YB = this._currentInstanceLocations[OB];
          this._gl.vertexAttribDivisor(YB, 0)
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
      updateAndBindInstancesBuffer(BB, OB, GB) {
        if (this.bindArrayBuffer(BB), OB && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, OB), void 0 !== GB[0].index) this.bindInstancesBuffer(BB, GB, !0);
        else
          for (let YB = 0; YB < 4; YB++) {
            const OB = GB[YB];
            this._vertexAttribArraysEnabled[OB] || (this._gl.enableVertexAttribArray(OB), this._vertexAttribArraysEnabled[OB] = !0), this._vertexAttribPointer(BB, OB, 4, this._gl.FLOAT, !1, 64, 16 * YB), this._gl.vertexAttribDivisor(OB, 1), this._currentInstanceLocations.push(OB), this._currentInstanceBuffers.push(BB)
          }
      }
      bindInstancesBuffer(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(BB);
        let YB = 0;
        if (GB)
          for (let DB = 0; DB < OB.length; DB++) {
            YB += 4 * OB[DB].attributeSize
          }
        for (let DB = 0; DB < OB.length; DB++) {
          const GB = OB[DB];
          void 0 === GB.index && (GB.index = this._currentEffect.getAttributeLocationByName(GB.attributeName)), GB.index < 0 || (this._vertexAttribArraysEnabled[GB.index] || (this._gl.enableVertexAttribArray(GB.index), this._vertexAttribArraysEnabled[GB.index] = !0), this._vertexAttribPointer(BB, GB.index, GB.attributeSize, GB.attributeType || this._gl.FLOAT, GB.normalized || !1, YB, GB.offset), this._gl.vertexAttribDivisor(GB.index, void 0 === GB.divisor ? 1 : GB.divisor), this._currentInstanceLocations.push(GB.index), this._currentInstanceBuffers.push(BB))
        }
      }
      disableInstanceAttributeByName(BB) {
        if (!this._currentEffect) return;
        const OB = this._currentEffect.getAttributeLocationByName(BB);
        this.disableInstanceAttribute(OB)
      }
      disableInstanceAttribute(BB) {
        let OB, GB = !1;
        for (; - 1 !== (OB = this._currentInstanceLocations.indexOf(BB));) this._currentInstanceLocations.splice(OB, 1), this._currentInstanceBuffers.splice(OB, 1), GB = !0;
        GB && (this._gl.vertexAttribDivisor(BB, 0), this.disableAttributeByIndex(BB))
      }
      disableAttributeByIndex(BB) {
        this._gl.disableVertexAttribArray(BB), this._vertexAttribArraysEnabled[BB] = !1, this._currentBufferPointers[BB].active = !1
      }
      draw(BB, OB, GB, YB) {
        this.drawElementsType(BB ? 0 : 1, OB, GB, YB)
      }
      drawPointClouds(BB, OB, GB) {
        this.drawArraysType(2, BB, OB, GB)
      }
      drawUnIndexed(BB, OB, GB, YB) {
        this.drawArraysType(BB ? 0 : 1, OB, GB, YB)
      }
      drawElementsType(BB, OB, GB, YB) {
        this.applyStates(), this._reportDrawCall();
        const DB = this._drawMode(BB),
          QB = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          oB = this._uintIndicesCurrentlySet ? 4 : 2;
        YB ? this._gl.drawElementsInstanced(DB, GB, QB, OB * oB, YB) : this._gl.drawElements(DB, GB, QB, OB * oB)
      }
      drawArraysType(BB, OB, GB, YB) {
        this.applyStates(), this._reportDrawCall();
        const DB = this._drawMode(BB);
        YB ? this._gl.drawArraysInstanced(DB, OB, GB, YB) : this._gl.drawArrays(DB, OB, GB)
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
        const OB = BB.getPipelineContext();
        OB && this._deletePipelineContext(OB)
      }
      _deletePipelineContext(BB) {
        const OB = BB;
        OB && OB.program && (OB.program.__SPECTOR_rebuildProgram = null, (0, NB.k)(OB), this._gl && (this._currentProgram === OB.program && this._setProgram(null), this._gl.deleteProgram(OB.program)))
      }
      _getGlobalDefines(BB) {
        return (0, ZB.h)(BB, this.isNDCHalfZRange, this.fDB, this.useExactSrgbConversions)
      }
      createEffect(BB, OB, GB, QB, oB, jB, yB, JB, MB) {
        let PB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          zB = arguments.length > 10 ? arguments[10] : void 0;
        const lB = "string" === typeof BB ? BB : BB.vertexToken || BB.vertexSource || BB.vertexElement || BB.vertex,
          pB = "string" === typeof BB ? BB : BB.fragmentToken || BB.fragmentSource || BB.fragmentElement || BB.fragment,
          qB = this._getGlobalDefines(),
          ZB = void 0 !== OB.attributes;
        let NB = oB ?? OB.defines ?? "";
        qB && (NB += qB);
        const RB = lB + "+" + pB + "@" + NB;
        if (this._compiledEffects[RB]) {
          const BB = this._compiledEffects[RB];
          return yB && BB.isReady() && yB(BB), BB._refCount++, BB
        }
        this._gl && (0, DB.u)(this._gl);
        const WB = new YB.c(BB, OB, ZB ? this : GB, QB, this, oB, jB, yB, JB, MB, RB, OB.shaderLanguage ?? PB, OB.extraInitializationsAsync ?? zB);
        return this._compiledEffects[RB] = WB, WB
      }
      _getShaderSource(BB) {
        return this._gl.getShaderSource(BB)
      }
      createRawShaderProgram(BB, OB, GB, YB) {
        let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const oB = (0, DB.u)(this._gl);
        return oB._contextWasLost = this._contextWasLost, oB.validateShaderPrograms = this.validateShaderPrograms, (0, DB.q)(BB, OB, GB, YB || this._gl, QB)
      }
      createShaderProgram(BB, OB, GB, YB, QB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const jB = (0, DB.u)(this._gl);
        return jB._contextWasLost = this._contextWasLost, jB.validateShaderPrograms = this.validateShaderPrograms, (0, DB.r)(BB, OB, GB, YB, QB || this._gl, oB)
      }
      inlineShaderCode(BB) {
        return BB
      }
      createPipelineContext(BB) {
        if (this._gl) {
          (0, DB.u)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const OB = (0, DB.p)(this._gl, BB);
        return OB.engine = this, OB
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(BB) {
        return (0, DB.f)(BB, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(BB, OB, GB, YB, QB, oB, jB, yB, JB, MB, PB) {
        const zB = (0, DB.u)(this._gl);
        return zB._contextWasLost = this._contextWasLost, zB.validateShaderPrograms = this.validateShaderPrograms, zB._createShaderProgramInjection = this._createShaderProgram.bind(this), zB.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), zB.createShaderProgramInjection = this.createShaderProgram.bind(this), zB.loadFileInjection = this._loadFile.bind(this), (0, DB.k)(BB, OB, GB, YB, QB, oB, jB, yB, JB, MB, PB)
      }
      _createShaderProgram(BB, OB, GB, YB) {
        let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, DB.c)(BB, OB, GB, YB, QB)
      }
      _isRenderingStateCompiled(BB) {
        return !this._isDisposed && (0, DB.j)(BB, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(BB, OB) {
        (0, DB.d)(BB, OB)
      }
      getUniforms(BB, OB) {
        const GB = new Array,
          YB = BB;
        for (let DB = 0; DB < OB.length; DB++) GB.push(this._gl.getUniformLocation(YB.program, OB[DB]));
        return GB
      }
      getAttributes(BB, OB) {
        const GB = [],
          YB = BB;
        for (let QB = 0; QB < OB.length; QB++) try {
          GB.push(this._gl.getAttribLocation(YB.program, OB[QB]))
        } catch (DB) {
          GB.push(-1)
        }
        return GB
      }
      enableEffect(BB) {
        (BB = null !== BB && (0, oB.b)(BB) ? BB.effect : BB) && BB !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(BB), this._currentEffect = BB, BB.onBind && BB.onBind(BB), BB._onBindObservable && BB._onBindObservable.notifyObservers(BB))
      }
      setInt(BB, OB) {
        return !!BB && (this._gl.uniform1i(BB, OB), !0)
      }
      setInt2(BB, OB, GB) {
        return !!BB && (this._gl.uniform2i(BB, OB, GB), !0)
      }
      setInt3(BB, OB, GB, YB) {
        return !!BB && (this._gl.uniform3i(BB, OB, GB, YB), !0)
      }
      setInt4(BB, OB, GB, YB, DB) {
        return !!BB && (this._gl.uniform4i(BB, OB, GB, YB, DB), !0)
      }
      setIntArray(BB, OB) {
        return !!BB && (this._gl.uniform1iv(BB, OB), !0)
      }
      setIntArray2(BB, OB) {
        return !(!BB || OB.length % 2 !== 0) && (this._gl.uniform2iv(BB, OB), !0)
      }
      setIntArray3(BB, OB) {
        return !(!BB || OB.length % 3 !== 0) && (this._gl.uniform3iv(BB, OB), !0)
      }
      setIntArray4(BB, OB) {
        return !(!BB || OB.length % 4 !== 0) && (this._gl.uniform4iv(BB, OB), !0)
      }
      setUInt(BB, OB) {
        return !!BB && (this._gl.uniform1ui(BB, OB), !0)
      }
      setUInt2(BB, OB, GB) {
        return !!BB && (this._gl.uniform2ui(BB, OB, GB), !0)
      }
      setUInt3(BB, OB, GB, YB) {
        return !!BB && (this._gl.uniform3ui(BB, OB, GB, YB), !0)
      }
      setUInt4(BB, OB, GB, YB, DB) {
        return !!BB && (this._gl.uniform4ui(BB, OB, GB, YB, DB), !0)
      }
      setUIntArray(BB, OB) {
        return !!BB && (this._gl.uniform1uiv(BB, OB), !0)
      }
      setUIntArray2(BB, OB) {
        return !(!BB || OB.length % 2 !== 0) && (this._gl.uniform2uiv(BB, OB), !0)
      }
      setUIntArray3(BB, OB) {
        return !(!BB || OB.length % 3 !== 0) && (this._gl.uniform3uiv(BB, OB), !0)
      }
      setUIntArray4(BB, OB) {
        return !(!BB || OB.length % 4 !== 0) && (this._gl.uniform4uiv(BB, OB), !0)
      }
      setArray(BB, OB) {
        return !!BB && (!(OB.length < 1) && (this._gl.uniform1fv(BB, OB), !0))
      }
      setArray2(BB, OB) {
        return !(!BB || OB.length % 2 !== 0) && (this._gl.uniform2fv(BB, OB), !0)
      }
      setArray3(BB, OB) {
        return !(!BB || OB.length % 3 !== 0) && (this._gl.uniform3fv(BB, OB), !0)
      }
      setArray4(BB, OB) {
        return !(!BB || OB.length % 4 !== 0) && (this._gl.uniform4fv(BB, OB), !0)
      }
      setMatrices(BB, OB) {
        return !!BB && (this._gl.uniformMatrix4fv(BB, !1, OB), !0)
      }
      setMatrix3x3(BB, OB) {
        return !!BB && (this._gl.uniformMatrix3fv(BB, !1, OB), !0)
      }
      setMatrix2x2(BB, OB) {
        return !!BB && (this._gl.uniformMatrix2fv(BB, !1, OB), !0)
      }
      setFloat(BB, OB) {
        return !!BB && (this._gl.uniform1f(BB, OB), !0)
      }
      setFloat2(BB, OB, GB) {
        return !!BB && (this._gl.uniform2f(BB, OB, GB), !0)
      }
      setFloat3(BB, OB, GB, YB) {
        return !!BB && (this._gl.uniform3f(BB, OB, GB, YB), !0)
      }
      setFloat4(BB, OB, GB, YB, DB) {
        return !!BB && (this._gl.uniform4f(BB, OB, GB, YB, DB), !0)
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
      _getSamplingParameters(BB, OB) {
        const GB = this._gl;
        let YB = GB.NEAREST,
          DB = GB.NEAREST,
          QB = !1;
        switch (BB) {
          case 11:
            YB = GB.LINEAR, DB = OB ? GB.LINEAR_MIPMAP_NEAREST : GB.LINEAR;
            break;
          case 3:
            YB = GB.LINEAR, QB = !0, DB = OB ? GB.LINEAR_MIPMAP_LINEAR : GB.LINEAR;
            break;
          case 8:
            QB = !0, YB = GB.NEAREST, DB = OB ? GB.NEAREST_MIPMAP_LINEAR : GB.NEAREST;
            break;
          case 4:
            YB = GB.NEAREST, DB = OB ? GB.NEAREST_MIPMAP_NEAREST : GB.NEAREST;
            break;
          case 5:
            YB = GB.NEAREST, DB = OB ? GB.LINEAR_MIPMAP_NEAREST : GB.LINEAR;
            break;
          case 6:
            QB = !0, YB = GB.NEAREST, DB = OB ? GB.LINEAR_MIPMAP_LINEAR : GB.LINEAR;
            break;
          case 7:
            YB = GB.NEAREST, DB = GB.LINEAR;
            break;
          case 1:
            YB = GB.NEAREST, DB = GB.NEAREST;
            break;
          case 9:
            YB = GB.LINEAR, DB = OB ? GB.NEAREST_MIPMAP_NEAREST : GB.NEAREST;
            break;
          case 10:
            QB = !0, YB = GB.LINEAR, DB = OB ? GB.NEAREST_MIPMAP_LINEAR : GB.NEAREST;
            break;
          case 2:
            YB = GB.LINEAR, DB = GB.LINEAR;
            break;
          case 12:
            YB = GB.LINEAR, DB = GB.NEAREST
        }
        return {
          min: DB,
          mag: YB,
          hasMipMaps: QB
        }
      }
      _createTexture() {
        const BB = this._gl.createTexture();
        if (!BB) throw new Error("Unable to create texture");
        return BB
      }
      _createHardwareTexture() {
        return new pB.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(BB, OB) {
        let GB, YB, DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          QB = !1,
          oB = 0,
          yB = 3,
          JB = 5,
          MB = !1,
          PB = 1,
          zB = !1,
          lB = 0,
          pB = !1;
        void 0 !== OB && "object" === typeof OB ? (GB = !!OB.generateMipMaps, QB = !!OB.createMipMaps, oB = void 0 === OB.type ? 0 : OB.type, yB = void 0 === OB.samplingMode ? 3 : OB.samplingMode, JB = void 0 === OB.format ? 5 : OB.format, MB = void 0 !== OB.useSRGBBuffer && OB.useSRGBBuffer, PB = OB.samples ?? 1, YB = OB.label, zB = !!OB.createMSAATexture, lB = OB.comparisonFunction || 0, pB = !!OB.isCube) : GB = !!OB, MB && (MB = this._caps.supportSRGBBuffers && (this.Pq > 1 || this.isWebGPU)), (1 !== oB || this._caps.textureFloatLinearFiltering) && (2 !== oB || this._caps.textureHalfFloatLinearFiltering) || (yB = 1), 1 !== oB || this._caps.textureFloat || (oB = 0, jB.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const ZB = (0, RB.f)(JB),
          NB = (0, RB.b)(JB),
          WB = this._gl,
          AB = new qB.b(this, DB),
          VB = BB.width || BB,
          SB = BB.height || BB,
          nB = BB.depth || 0,
          UB = BB.layers || 0,
          fB = this._getSamplingParameters(yB, (GB || QB) && !ZB),
          kB = 0 !== UB ? WB.TEXTURE_2D_ARRAY : 0 !== nB ? WB.TEXTURE_3D : pB ? WB.TEXTURE_CUBE_MAP : WB.TEXTURE_2D,
          dB = ZB ? this._getInternalFormatFromDepthTextureFormat(JB, !0, NB) : this._getRGBABufferInternalSizedFormat(oB, JB, MB),
          KB = ZB ? NB ? WB.DEPTH_STENCIL : WB.DEPTH_COMPONENT : this._getInternalFormat(JB),
          uB = ZB ? this._getWebGLTextureTypeFromDepthTextureFormat(JB) : this._getWebGLTextureType(oB);
        if (this._bindTextureDirectly(kB, AB), 0 !== UB) AB.is2DArray = !0, WB.texImage3D(kB, 0, dB, VB, SB, UB, 0, KB, uB, null);
        else if (0 !== nB) AB.is3D = !0, WB.texImage3D(kB, 0, dB, VB, SB, nB, 0, KB, uB, null);
        else if (pB) {
          AB.isCube = !0;
          for (let BB = 0; BB < 6; BB++) WB.texImage2D(WB.TEXTURE_CUBE_MAP_POSITIVE_X + BB, 0, dB, VB, SB, 0, KB, uB, null)
        } else WB.texImage2D(kB, 0, dB, VB, SB, 0, KB, uB, null);
        if (WB.texParameteri(kB, WB.TEXTURE_MAG_FILTER, fB.mag), WB.texParameteri(kB, WB.TEXTURE_MIN_FILTER, fB.min), WB.texParameteri(kB, WB.TEXTURE_WRAP_S, WB.CLAMP_TO_EDGE), WB.texParameteri(kB, WB.TEXTURE_WRAP_T, WB.CLAMP_TO_EDGE), ZB && this.Pq > 1 && (0 === lB ? (WB.texParameteri(kB, WB.TEXTURE_COMPARE_FUNC, 515), WB.texParameteri(kB, WB.TEXTURE_COMPARE_MODE, WB.NONE)) : (WB.texParameteri(kB, WB.TEXTURE_COMPARE_FUNC, lB), WB.texParameteri(kB, WB.TEXTURE_COMPARE_MODE, WB.COMPARE_REF_TO_TEXTURE))), (GB || QB) && this._gl.generateMipmap(kB), this._bindTextureDirectly(kB, null), AB._useSRGBBuffer = MB, AB.baseWidth = VB, AB.baseHeight = SB, AB.width = VB, AB.height = SB, AB.depth = UB || nB, AB.isReady = !0, AB.samples = PB, AB.generateMipMaps = GB, AB.samplingMode = yB, AB.type = oB, AB.format = JB, AB.label = YB, AB.comparisonFunction = lB, this._internalTexturesCache.push(AB), zB) {
          let BB;
          if (BB = (0, RB.f)(AB.format) ? this._setupFramebufferDepthAttachments((0, RB.b)(AB.format), 19 !== AB.format, AB.width, AB.height, PB, AB.format, !0) : this._createRenderBuffer(AB.width, AB.height, PB, -1, this._getRGBABufferInternalSizedFormat(AB.type, AB.format, AB._useSRGBBuffer), -1), !BB) throw new Error("Unable to create render buffer");
          AB._autoMSAAManagement = !0;
          let OB = AB._hardwareTexture;
          OB || (OB = AB._hardwareTexture = this._createHardwareTexture()), OB.addMSAARenderBuffer(BB)
        }
        return AB
      }
      _getUseSRGBBuffer(BB, OB) {
        return BB && this._caps.supportSRGBBuffers && (this.Pq > 1 || OB)
      }
      createTexture(BB, OB, GB, YB) {
        var DB = this;
        let QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          jB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          yB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          JB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          MB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          PB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          zB = arguments.length > 11 ? arguments[11] : void 0,
          lB = arguments.length > 12 ? arguments[12] : void 0,
          pB = arguments.length > 13 ? arguments[13] : void 0,
          ZB = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(BB, OB, GB, YB, QB, oB, jB, (function() {
          for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
          return DB._prepareWebGLTexture(...OB, MB)
        }), ((BB, OB, GB, DB, QB, oB) => {
          const jB = this._gl,
            yB = GB.width === BB && GB.height === OB;
          QB._creationFlags = pB ?? 0;
          const JB = this._getTexImageParametersForCreateTexture(QB.format, QB._useSRGBBuffer);
          if (yB) return jB.texImage2D(jB.TEXTURE_2D, 0, JB.internalFormat, JB.format, JB.type, GB), !1;
          const MB = this._caps.maxTextureSize;
          if (GB.width > MB || GB.height > MB || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = BB, this._workingCanvas.height = OB, this._workingContext.drawImage(GB, 0, 0, GB.width, GB.height, 0, 0, BB, OB), jB.texImage2D(jB.TEXTURE_2D, 0, JB.internalFormat, JB.format, JB.type, this._workingCanvas), QB.width = BB, QB.height = OB, !1);
          {
            const BB = new qB.b(this, 2);
            this._bindTextureDirectly(jB.TEXTURE_2D, BB, !0), jB.texImage2D(jB.TEXTURE_2D, 0, JB.internalFormat, JB.format, JB.type, GB), this._rescaleTexture(BB, QB, YB, JB.format, (() => {
              this._releaseTexture(BB), this._bindTextureDirectly(jB.TEXTURE_2D, QB, !0), oB()
            }))
          }
          return !0
        }), yB, JB, MB, PB, zB, lB, ZB)
      }
      _getTexImageParametersForCreateTexture(BB, OB) {
        let GB, YB;
        return 1 === this.Pq ? (GB = this._getInternalFormat(BB, OB), YB = GB) : (GB = this._getInternalFormat(BB, !1), YB = this._getRGBABufferInternalSizedFormat(0, BB, OB)), {
          internalFormat: YB,
          format: GB,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(BB, OB, GB, YB, DB) {}
      _unpackFlipY(BB) {
        this._unpackFlipYCached !== BB && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, BB ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = BB))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(BB) {
        return BB.isCube ? this._gl.TEXTURE_CUBE_MAP : BB.is3D ? this._gl.TEXTURE_3D : BB.is2DArray || BB.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = this._getTextureTarget(OB),
          DB = this._getSamplingParameters(BB, OB.useMipMaps || GB);
        this._setTextureParameterInteger(YB, this._gl.TEXTURE_MAG_FILTER, DB.mag, OB), this._setTextureParameterInteger(YB, this._gl.TEXTURE_MIN_FILTER, DB.min), GB && DB.hasMipMaps && (OB.generateMipMaps = !0, this._gl.generateMipmap(YB)), this._bindTextureDirectly(YB, null), OB.samplingMode = BB
      }
      updateTextureDimensions(BB, OB, GB) {}
      updateTextureWrappingMode(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const DB = this._getTextureTarget(BB);
        null !== OB && (this._setTextureParameterInteger(DB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(OB), BB), BB._cachedWrapU = OB), null !== GB && (this._setTextureParameterInteger(DB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(GB), BB), BB._cachedWrapV = GB), (BB.is2DArray || BB.is3D) && null !== YB && (this._setTextureParameterInteger(DB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(YB), BB), BB._cachedWrapR = YB), this._bindTextureDirectly(DB, null)
      }
      _uploadCompressedDataToTextureDirectly(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const jB = this._gl;
        let yB = jB.TEXTURE_2D;
        if (BB.isCube && (yB = jB.TEXTURE_CUBE_MAP_POSITIVE_X + QB), BB._useSRGBBuffer) switch (OB) {
          case 37492:
          case 36196:
            this._caps.etc2 ? OB = jB.COMPRESSED_SRGB8_ETC2 : BB._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? OB = jB.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : BB._useSRGBBuffer = !1;
            break;
          case 36492:
            OB = jB.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            OB = jB.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? OB = jB.COMPRESSED_SRGB_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? OB = jB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : BB._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? OB = jB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : BB._useSRGBBuffer = !1;
            break;
          default:
            BB._useSRGBBuffer = !1
        }
        if (BB.generateMipMaps) {
          const QB = BB._hardwareTexture;
          QB.memoryAllocated || (jB.texStorage2D(BB.isCube ? jB.TEXTURE_CUBE_MAP : jB.TEXTURE_2D, Math.floor(Math.log2(Math.max(GB, YB))) + 1, OB, BB.width, BB.height), QB.memoryAllocated = !0), this._gl.compressedTexSubImage2D(yB, oB, 0, 0, GB, YB, OB, DB)
        } else this._gl.compressedTexImage2D(yB, oB, OB, GB, YB, 0, DB)
      }
      _uploadDataToTextureDirectly(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          DB = arguments.length > 4 ? arguments[4] : void 0,
          QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const oB = this._gl,
          jB = this._getWebGLTextureType(BB.type),
          yB = this._getInternalFormat(BB.format),
          JB = void 0 === DB ? this._getRGBABufferInternalSizedFormat(BB.type, BB.format, BB._useSRGBBuffer) : this._getInternalFormat(DB, BB._useSRGBBuffer);
        this._unpackFlipY(BB.invertY);
        let MB = oB.TEXTURE_2D;
        BB.isCube && (MB = oB.TEXTURE_CUBE_MAP_POSITIVE_X + GB);
        const PB = Math.round(Math.log(BB.width) * Math.LOG2E),
          zB = Math.round(Math.log(BB.height) * Math.LOG2E),
          lB = QB ? BB.width : Math.pow(2, Math.max(PB - YB, 0)),
          pB = QB ? BB.height : Math.pow(2, Math.max(zB - YB, 0));
        oB.texImage2D(MB, YB, JB, lB, pB, 0, yB, jB, OB)
      }
      updateTextureData(BB, OB, GB, YB, DB, QB) {
        let oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const JB = this._gl,
          MB = this._getWebGLTextureType(BB.type),
          PB = this._getInternalFormat(BB.format);
        this._unpackFlipY(BB.invertY);
        let zB = JB.TEXTURE_2D,
          lB = JB.TEXTURE_2D;
        BB.isCube && (lB = JB.TEXTURE_CUBE_MAP_POSITIVE_X + oB, zB = JB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(zB, BB, !0), JB.texSubImage2D(lB, jB, GB, YB, DB, QB, PB, MB, OB), yB && this._gl.generateMipmap(lB), this._bindTextureDirectly(zB, null)
      }
      _uploadArrayBufferViewToTexture(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const DB = this._gl,
          QB = BB.isCube ? DB.TEXTURE_CUBE_MAP : DB.TEXTURE_2D;
        this._bindTextureDirectly(QB, BB, !0), this._uploadDataToTextureDirectly(BB, OB, GB, YB), this._bindTextureDirectly(QB, null, !0)
      }
      _prepareWebGLTextureContinuation(BB, OB, GB, YB, DB) {
        const QB = this._gl;
        if (!QB) return;
        const oB = this._getSamplingParameters(DB, !GB);
        QB.texParameteri(QB.TEXTURE_2D, QB.TEXTURE_MAG_FILTER, oB.mag), QB.texParameteri(QB.TEXTURE_2D, QB.TEXTURE_MIN_FILTER, oB.min), GB || YB || QB.generateMipmap(QB.TEXTURE_2D), this._bindTextureDirectly(QB.TEXTURE_2D, null), OB && OB.removePendingData(BB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB) {
        const MB = this.getCaps().maxTextureSize,
          PB = Math.min(MB, this.needPOTTextures ? (0, lB.f)(YB.width, MB) : YB.width),
          zB = Math.min(MB, this.needPOTTextures ? (0, lB.f)(YB.height, MB) : YB.height),
          pB = this._gl;
        pB && (BB._hardwareTexture ? (this._bindTextureDirectly(pB.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === DB || !!DB), BB.baseWidth = YB.width, BB.baseHeight = YB.height, BB.width = PB, BB.height = zB, BB.isReady = !0, BB.type = -1 !== BB.type ? BB.type : 0, BB.format = -1 !== BB.format ? BB.format : JB ?? (".jpg" !== OB || BB._useSRGBBuffer ? 5 : 4), jB(PB, zB, YB, OB, BB, (() => {
          this._prepareWebGLTextureContinuation(BB, GB, QB, oB, yB)
        })) || this._prepareWebGLTextureContinuation(BB, GB, QB, oB, yB)) : GB && GB.removePendingData(BB))
      }
      _getInternalFormatFromDepthTextureFormat(BB, OB, GB) {
        const YB = this._gl;
        if (!OB) return YB.STENCIL_INDEX8;
        let DB = GB ? YB.DEPTH_STENCIL : YB.DEPTH_COMPONENT;
        return this.Pq > 1 ? 15 === BB ? DB = YB.DEPTH_COMPONENT16 : 16 === BB ? DB = YB.DEPTH_COMPONENT24 : 17 === BB || 13 === BB ? DB = GB ? YB.DEPTH24_STENCIL8 : YB.DEPTH_COMPONENT24 : 14 === BB ? DB = YB.DEPTH_COMPONENT32F : 18 === BB && (DB = GB ? YB.DEPTH32F_STENCIL8 : YB.DEPTH_COMPONENT32F) : DB = YB.DEPTH_COMPONENT16, DB
      }
      _getWebGLTextureTypeFromDepthTextureFormat(BB) {
        const OB = this._gl;
        let GB = OB.UNSIGNED_INT;
        return 15 === BB ? GB = OB.UNSIGNED_SHORT : 17 === BB || 13 === BB ? GB = OB.UNSIGNED_INT_24_8 : 14 === BB ? GB = OB.FLOAT : 18 === BB ? GB = OB.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === BB && (GB = OB.UNSIGNED_BYTE), GB
      }
      _setupFramebufferDepthAttachments(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          QB = arguments.length > 5 ? arguments[5] : void 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const jB = this._gl;
        QB = QB ?? (BB ? 13 : 14);
        const yB = this._getInternalFormatFromDepthTextureFormat(QB, OB, BB);
        return BB && OB ? this._createRenderBuffer(GB, YB, DB, jB.DEPTH_STENCIL, yB, oB ? -1 : jB.DEPTH_STENCIL_ATTACHMENT) : OB ? this._createRenderBuffer(GB, YB, DB, yB, yB, oB ? -1 : jB.DEPTH_ATTACHMENT) : BB ? this._createRenderBuffer(GB, YB, DB, yB, yB, oB ? -1 : jB.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(BB, OB, GB, YB, DB, QB) {
        let oB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const jB = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(jB, BB, OB, GB, YB, DB, QB, oB)
      }
      _updateRenderBuffer(BB, OB, GB, YB, DB, QB, oB) {
        let jB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const yB = this._gl;
        return yB.bindRenderbuffer(yB.RENDERBUFFER, BB), YB > 1 && yB.renderbufferStorageMultisample ? yB.renderbufferStorageMultisample(yB.RENDERBUFFER, YB, QB, OB, GB) : yB.renderbufferStorage(yB.RENDERBUFFER, DB, OB, GB), -1 !== oB && yB.framebufferRenderbuffer(yB.FRAMEBUFFER, oB, yB.RENDERBUFFER, BB), jB && yB.bindRenderbuffer(yB.RENDERBUFFER, null), BB
      }
      _releaseTexture(BB) {
        this._deleteTexture(BB._hardwareTexture), this.unbindAllTextures();
        const OB = this._internalTexturesCache.indexOf(BB); - 1 !== OB && this._internalTexturesCache.splice(OB, 1), BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._irradianceTexture && BB._irradianceTexture.dispose()
      }
      _deleteTexture(BB) {
        BB?.release()
      }
      _setProgram(BB) {
        this._currentProgram !== BB && ((0, DB.o)(BB, this._gl), this._currentProgram = BB)
      }
      bindSamplers(BB) {
        const OB = BB.getPipelineContext();
        this._setProgram(OB.program);
        const GB = BB.getSamplers();
        for (let YB = 0; YB < GB.length; YB++) {
          const OB = BB.getUniform(GB[YB]);
          OB && (this._boundUniforms[YB] = OB)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          DB = !1;
        const QB = OB && OB._associatedChannel > -1;
        GB && QB && (this._activeChannel = OB._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== OB || YB) {
          if (this._activateCurrentTexture(), OB && OB.isMultiview) throw jB.b.Error(["_bindTextureDirectly called with a multiview texture!", BB, OB]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(BB, OB?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = OB, OB && (OB._associatedChannel = this._activeChannel)
        } else GB && (DB = !0, this._activateCurrentTexture());
        return QB && !GB && this._bindSamplerUniformToChannel(OB._associatedChannel, this._activeChannel), DB
      }
      _bindTexture(BB, OB, GB) {
        if (void 0 === BB) return;
        OB && (OB._associatedChannel = BB), this._activeChannel = BB;
        const YB = OB ? this._getTextureTarget(OB) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(YB, OB)
      }
      unbindAllTextures() {
        for (let BB = 0; BB < this._maxSimultaneousTextures; BB++) this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Pq > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(BB, OB, GB, YB) {
        void 0 !== BB && (OB && (this._boundUniforms[BB] = OB), this._setTexture(BB, GB))
      }
      _bindSamplerUniformToChannel(BB, OB) {
        const GB = this._boundUniforms[BB];
        GB && GB._currentState !== OB && (this._gl.uniform1i(GB, OB), GB._currentState = OB)
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
      _setTexture(BB, OB) {
        let GB, YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!OB) return null != this._boundTexturesCache[BB] && (this._activeChannel = BB, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Pq > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (OB.video) {
          this._activeChannel = BB;
          const GB = OB.getInternalTexture();
          GB && (GB._associatedChannel = BB), OB.update()
        } else if (4 === OB.delayLoadState) return OB.delayLoad(), !1;
        GB = DB ? OB.depthStencilTexture : OB.isReady() ? OB.getInternalTexture() : OB.isCube ? this.emptyCubeTexture : OB.is3D ? this.emptyTexture3D : OB.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !YB && GB && (GB._associatedChannel = BB);
        let QB = !0;
        this._boundTexturesCache[BB] === GB && (YB || this._bindSamplerUniformToChannel(GB._associatedChannel, BB), QB = !1), this._activeChannel = BB;
        const oB = this._getTextureTarget(GB);
        if (QB && this._bindTextureDirectly(oB, GB, YB), GB && !GB.isMultiview) {
          if (GB.isCube && GB._cachedCoordinatesMode !== OB.coordinatesMode) {
            GB._cachedCoordinatesMode = OB.coordinatesMode;
            const BB = 3 !== OB.coordinatesMode && 5 !== OB.coordinatesMode ? 1 : 0;
            OB.wrapU = BB, OB.wrapV = BB
          }
          GB._cachedWrapU !== OB.wrapU && (GB._cachedWrapU = OB.wrapU, this._setTextureParameterInteger(oB, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(OB.wrapU), GB)), GB._cachedWrapV !== OB.wrapV && (GB._cachedWrapV = OB.wrapV, this._setTextureParameterInteger(oB, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(OB.wrapV), GB)), GB.is3D && GB._cachedWrapR !== OB.wrapR && (GB._cachedWrapR = OB.wrapR, this._setTextureParameterInteger(oB, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(OB.wrapR), GB)), this._setAnisotropicLevel(oB, GB, OB.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(BB, OB, GB, YB) {
        if (void 0 !== BB && OB) {
          this._textureUnits && this._textureUnits.length === GB.length || (this._textureUnits = new Int32Array(GB.length));
          for (let OB = 0; OB < GB.length; OB++) {
            const YB = GB[OB].getInternalTexture();
            YB ? (this._textureUnits[OB] = BB + OB, YB._associatedChannel = BB + OB) : this._textureUnits[OB] = -1
          }
          this._gl.uniform1iv(OB, this._textureUnits);
          for (let BB = 0; BB < GB.length; BB++) this._setTexture(this._textureUnits[BB], GB[BB], !0)
        }
      }
      _setAnisotropicLevel(BB, OB, GB) {
        const YB = this._caps.textureAnisotropicFilterExtension;
        11 !== OB.samplingMode && 3 !== OB.samplingMode && 2 !== OB.samplingMode && (GB = 1), YB && OB._cachedAnisotropicFilteringLevel !== GB && (this._setTextureParameterFloat(BB, YB.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(GB, this._caps.maxAnisotropy), OB), OB._cachedAnisotropicFilteringLevel = GB)
      }
      _setTextureParameterFloat(BB, OB, GB, YB) {
        this._bindTextureDirectly(BB, YB, !0, !0), this._gl.texParameterf(BB, OB, GB)
      }
      _setTextureParameterInteger(BB, OB, GB, YB) {
        YB && this._bindTextureDirectly(BB, YB, !0, !0), this._gl.texParameteri(BB, OB, GB)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let BB = 0; BB < this._caps.maxVertexAttribs; BB++) this.disableAttributeByIndex(BB)
        } else
          for (let BB = 0, OB = this._vertexAttribArraysEnabled.length; BB < OB; BB++) BB >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[BB] || this.disableAttributeByIndex(BB)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, yB.j)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, DB.s)(this._gl)
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
        const OB = this._gl;
        for (; OB.getError() !== OB.NO_ERROR;);
        let GB = !0;
        const YB = OB.createTexture();
        OB.bindTexture(OB.TEXTURE_2D, YB), OB.texImage2D(OB.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(BB), 1, 1, 0, OB.RGBA, this._getWebGLTextureType(BB), null), OB.texParameteri(OB.TEXTURE_2D, OB.TEXTURE_MIN_FILTER, OB.NEAREST), OB.texParameteri(OB.TEXTURE_2D, OB.TEXTURE_MAG_FILTER, OB.NEAREST);
        const DB = OB.createFramebuffer();
        OB.bindFramebuffer(OB.FRAMEBUFFER, DB), OB.framebufferTexture2D(OB.FRAMEBUFFER, OB.COLOR_ATTACHMENT0, OB.TEXTURE_2D, YB, 0);
        const QB = OB.checkFramebufferStatus(OB.FRAMEBUFFER);
        if (GB = GB && QB === OB.FRAMEBUFFER_COMPLETE, GB = GB && OB.getError() === OB.NO_ERROR, GB && (OB.clear(OB.COLOR_BUFFER_BIT), GB = GB && OB.getError() === OB.NO_ERROR), GB) {
          OB.bindFramebuffer(OB.FRAMEBUFFER, null);
          const BB = OB.RGBA,
            YB = OB.UNSIGNED_BYTE,
            DB = new Uint8Array(4);
          OB.readPixels(0, 0, 1, 1, BB, YB, DB), GB = GB && OB.getError() === OB.NO_ERROR
        }
        for (OB.deleteTexture(YB), OB.deleteFramebuffer(DB), OB.bindFramebuffer(OB.FRAMEBUFFER, null); !GB && OB.getError() !== OB.NO_ERROR;);
        return GB
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = OB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (BB) {
          case 0:
            GB = this._gl.ALPHA;
            break;
          case 1:
            GB = this._gl.LUMINANCE;
            break;
          case 2:
            GB = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            GB = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            GB = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            GB = OB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            GB = OB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (BB) {
          case 8:
            GB = this._gl.RED_INTEGER;
            break;
          case 9:
            GB = this._gl.RG_INTEGER;
            break;
          case 10:
            GB = this._gl.RGB_INTEGER;
            break;
          case 11:
            GB = this._gl.RGBA_INTEGER
        }
        return GB
      }
      _getRGBABufferInternalSizedFormat(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== OB) switch (OB) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return GB ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (BB) {
          case 3:
            switch (OB) {
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
            switch (OB) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return GB ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return GB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (OB) {
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
            switch (OB) {
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
            switch (OB) {
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
            switch (OB) {
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
            switch (OB) {
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
            switch (OB) {
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
            switch (OB) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return GB ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(BB, OB, GB, YB) {
        let DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const yB = DB ? 4 : 3,
          JB = DB ? this._gl.RGBA : this._gl.RGB,
          MB = GB * YB * yB;
        if (oB) {
          if (oB.length < MB) return jB.b.Error(`Data buffer is too small to store the read pixels (${oB.length} should be more than ${MB})`), Promise.resolve(oB)
        } else oB = new Uint8Array(MB);
        return QB && this.flushFramebuffer(), this._gl.readPixels(BB, OB, GB, YB, JB, this._gl.UNSIGNED_BYTE, oB), Promise.resolve(oB)
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
          const BB = QB.d._CreateCanvas(1, 1),
            OB = BB.getContext("webgl") || BB.getContext("experimental-webgl");
          this._IsSupported = null != OB && !!globalThis.WebGLRenderingContext
        } catch (BB) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const BB = QB.d._CreateCanvas(1, 1),
            OB = BB.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || BB.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !OB
        } catch (BB) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    VB._TempClearColorUint32 = new Uint32Array(4), VB._TempClearColorInt32 = new Int32Array(4), VB._TempClearColorFloat32 = new Float32Array(4), VB.ExceptionList = [{
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
    }], VB._ConcatenateShader = ZB.d, VB._IsSupported = null, VB._HasMajorPerformanceCaveat = null
  },
  41201: (BB, OB, GB) => {
    var YB;
    GB.d(OB, {
        c: () => DB
      }),
      function(BB) {
        BB[BB.PointerMove = 0] = "PointerMove", BB[BB.PointerDown = 1] = "PointerDown", BB[BB.PointerUp = 2] = "PointerUp"
      }(YB || (YB = {}));
    class DB {}
    DB.DOM_DELTA_PIXEL = 0, DB.DOM_DELTA_LINE = 1, DB.DOM_DELTA_PAGE = 2
  },
  41197: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB,
      h: () => QB,
      l: () => DB
    });
    class YB {}
    YB.KEYDOWN = 1, YB.KEYUP = 2;
    class DB {
      constructor(BB, OB) {
        this.type = BB, this.event = OB
      }
    }
    class QB extends DB {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(BB) {
        this.skipOnKeyboardObservable = BB
      }
      constructor(BB, OB) {
        super(BB, OB), this.type = BB, this.event = OB, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41190: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB,
      d: () => oB,
      f: () => jB
    });
    var YB = GB(37778);
    class DB {}
    DB.POINTERDOWN = 1, DB.POINTERUP = 2, DB.POINTERMOVE = 4, DB.POINTERWHEEL = 8, DB.POINTERPICK = 16, DB.POINTERTAP = 32, DB.POINTERDOUBLETAP = 64;
    class QB {
      constructor(BB, OB) {
        this.type = BB, this.event = OB
      }
    }
    class oB extends QB {
      constructor(BB, OB, GB, DB) {
        super(BB, OB), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new YB.o(GB, DB)
      }
    }
    class jB extends QB {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(BB, OB), this._pickInfo = GB, this._inputManager = YB
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41211: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      static CompareLightsPriority(BB, OB) {
        return BB.shadowEnabled !== OB.shadowEnabled ? (OB.shadowEnabled ? 1 : 0) - (BB.shadowEnabled ? 1 : 0) : OB.renderPriority - BB.renderPriority
      }
    }
    YB.FALLOFF_DEFAULT = 0, YB.FALLOFF_PHYSICAL = 1, YB.FALLOFF_GLTF = 2, YB.FALLOFF_STANDARD = 3, YB.LIGHTMAP_DEFAULT = 0, YB.LIGHTMAP_SPECULAR = 1, YB.LIGHTMAP_SHADOWSONLY = 2, YB.INTENSITYMODE_AUTOMATIC = 0, YB.INTENSITYMODE_LUMINOUSPOWER = 1, YB.INTENSITYMODE_LUMINOUSINTENSITY = 2, YB.INTENSITYMODE_ILLUMINANCE = 3, YB.INTENSITYMODE_LUMINANCE = 4, YB.LIGHTTYPEID_POINTLIGHT = 0, YB.LIGHTTYPEID_DIRECTIONALLIGHT = 1, YB.LIGHTTYPEID_SPOTLIGHT = 2, YB.LIGHTTYPEID_HEMISPHERICLIGHT = 3, YB.LIGHTTYPEID_RECT_AREALIGHT = 4, YB.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40837: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    var YB, DB = GB(37802),
      QB = GB(40844);
    ! function(BB) {
      BB[BB.Unknown = 0] = "Unknown", BB[BB.Url = 1] = "Url", BB[BB.Temp = 2] = "Temp", BB[BB.Raw = 3] = "Raw", BB[BB.Dynamic = 4] = "Dynamic", BB[BB.RenderTarget = 5] = "RenderTarget", BB[BB.MultiRenderTarget = 6] = "MultiRenderTarget", BB[BB.Cube = 7] = "Cube", BB[BB.CubeRaw = 8] = "CubeRaw", BB[BB.CubePrefiltered = 9] = "CubePrefiltered", BB[BB.Raw3D = 10] = "Raw3D", BB[BB.Raw2DArray = 11] = "Raw2DArray", BB[BB.DepthStencil = 12] = "DepthStencil", BB[BB.CubeRawRGBD = 13] = "CubeRawRGBD", BB[BB.Depth = 14] = "Depth", BB[BB.External = 15] = "External"
    }(YB || (YB = {}));
    class oB extends QB.e {
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
      Lp() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new DB.b, this.onErrorObservable = new DB.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = BB, this._source = OB, this._uniqueId = oB._Counter++, GB || (this._hardwareTexture = BB._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, BB, OB, GB), this.width = BB, this.height = OB, this.depth = GB, this.baseWidth = BB, this.baseHeight = OB, this.baseDepth = GB, this._size = BB * OB * GB
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const BB = this.onRebuildCallback(this),
            OB = OB => {
              OB._swapAndDie(this, !1), this.isReady = BB.isReady
            };
          return void(BB.isAsync ? BB.proxy.then(OB) : OB(BB.proxy))
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
                const OB = this._bufferViewArray[BB];
                OB && this._engine.updateRawTexture(this, OB, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, BB)
              }
            this.isReady = !0;
            break;
          case 10:
            BB = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), BB._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (BB = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), BB._swapAndDie(this, !1), this._bufferViewArray)
              for (let BB = 0; BB < this._bufferViewArray.length; BB++) {
                const OB = this._bufferViewArray[BB];
                OB && this._engine.updateRawTexture2DArray(this, OB, this.format, this.invertY, this._compression, this.type, BB)
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
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(BB._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), BB._hardwareTexture = this._hardwareTexture, BB._setUniqueId(oB._Counter++), OB && (BB._isRGBD = this._isRGBD), this._lodTextureHigh && (BB._lodTextureHigh && BB._lodTextureHigh.dispose(), BB._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (BB._lodTextureMid && BB._lodTextureMid.dispose(), BB._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (BB._lodTextureLow && BB._lodTextureLow.dispose(), BB._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (BB._irradianceTexture && BB._irradianceTexture.dispose(), BB._irradianceTexture = this._irradianceTexture);
        const GB = this._engine.getLoadedTexturesCache();
        let YB = GB.indexOf(this); - 1 !== YB && GB.splice(YB, 1), YB = GB.indexOf(BB), -1 === YB && GB.push(BB)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    oB._Counter = 0
  },
  40947: (BB, OB, GB) => {
    function YB(BB) {
      return 13 === BB || 14 === BB || 15 === BB || 16 === BB || 17 === BB || 18 === BB || 19 === BB
    }

    function DB(BB) {
      return 8 === BB || 9 === BB || 10 === BB || 11 === BB
    }

    function QB(BB) {
      return 0 === BB || 5 === BB || 7 === BB || 11 === BB
    }

    function oB(BB) {
      return 13 === BB || 17 === BB || 18 === BB || 19 === BB
    }
    GB.d(OB, {
      b: () => oB,
      f: () => YB,
      j: () => DB,
      m: () => QB
    })
  },
  40844: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    class YB {
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
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = BB, this._cachedWrapV = OB, this._cachedWrapR = GB, this._cachedAnisotropicFilteringLevel = YB, this.samplingMode = DB, this._comparisonFunction = QB, this
      }
      compareSampler(BB) {
        return this._cachedWrapU === BB._cachedWrapU && this._cachedWrapV === BB._cachedWrapV && this._cachedWrapR === BB._cachedWrapR && this._cachedAnisotropicFilteringLevel === BB._cachedAnisotropicFilteringLevel && this.samplingMode === BB.samplingMode && this._comparisonFunction === BB._comparisonFunction && this._useMipMaps === BB._useMipMaps
      }
    }
  },
  41127: (BB, OB, GB) => {
    function YB(BB) {
      BB.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    GB.d(OB, {
      c: () => YB
    })
  },
  40918: (BB, OB, GB) => {
    function YB(BB) {
      return void 0 === BB.getPipelineContext
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  41323: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    var YB = GB(40899);
    class DB {
      static GetEffect(BB) {
        return void 0 === BB.getPipelineContext ? BB.effect : BB
      }
      constructor(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = BB.createDrawContext(), OB && (this.materialContext = BB.createMaterialContext())
      }
      setEffect(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        GB || this.effect === BB || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = BB, void 0 !== OB && (this.defines = OB), GB && this.drawContext?.reset()
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const OB = this.effect;
          BB ? OB.dispose() : YB.c.SetImmediate((() => {
            OB.Lp().onEndFrameObservable.addOnce((() => {
              OB.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40868: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => PB,
      g: () => lB,
      i: () => JB,
      k: () => MB
    });
    var YB = GB(40870),
      DB = GB(40878),
      QB = GB(40864),
      oB = GB(39366),
      jB = GB(40896),
      yB = GB(40883);

    function JB(BB, OB) {
      return (0, DB.u)(OB).cachedPipelines[BB]
    }

    function MB(BB) {
      const OB = BB._name,
        GB = BB.context;
      if (OB && GB) {
        const BB = (0, DB.u)(GB),
          YB = BB.cachedPipelines[OB];
        YB?.dispose(), delete BB.cachedPipelines[OB]
      }
    }

    function PB(BB, OB, GB, DB, QB, oB, yB) {
      let JB, MB;
      const PB = (0, YB.j)() ? oB?.getHostDocument() : null;
      JB = "string" === typeof OB ? OB : "string" === typeof OB.vertexSource ? "source:" + OB.vertexSource : "string" === typeof OB.vertexElement ? PB?.getElementById(OB.vertexElement) || OB.vertexElement : OB.vertex || OB, MB = "string" === typeof OB ? OB : "string" === typeof OB.fragmentSource ? "source:" + OB.fragmentSource : "string" === typeof OB.fragmentElement ? PB?.getElementById(OB.fragmentElement) || OB.fragmentElement : OB.fragment || OB;
      const lB = [void 0, void 0],
        pB = () => {
          if (lB[0] && lB[1]) {
            const [YB, JB] = lB;
            (0, jB.f)(BB), (0, jB.i)(YB, BB, ((YB, MB) => {
              yB && (yB._vertexSourceCodeBeforeMigration = MB), GB && (YB = GB("vertex", YB)), BB.isFragment = !0, (0, jB.i)(JB, BB, ((oB, JB) => {
                yB && (yB._fragmentSourceCodeBeforeMigration = JB), GB && (oB = GB("fragment", oB));
                const MB = (0, jB.b)(YB, oB, BB);
                BB = null;
                const PB = function(BB, OB, GB, YB) {
                  if (GB) {
                    return {
                      vertexSourceCode: (1 === YB ? "//" : "") + "#define SHADER_NAME vertex:" + (GB.vertexElement || GB.vertex || GB.spectorName || GB) + "\n" + BB,
                      fragmentSourceCode: (1 === YB ? "//" : "") + "#define SHADER_NAME fragment:" + (GB.fragmentElement || GB.fragment || GB.spectorName || GB) + "\n" + OB
                    }
                  }
                  return {
                    vertexSourceCode: BB,
                    fragmentSourceCode: OB
                  }
                }(MB.vertexCode, MB.fragmentCode, OB, QB);
                DB?.(PB.vertexSourceCode, PB.fragmentSourceCode)
              }), oB)
            }), oB)
          }
        };
      zB(JB, "Vertex", "", (BB => {
        yB && (yB._rawVertexSourceCode = BB), lB[0] = BB, pB()
      }), QB), zB(MB, "Fragment", "Pixel", (BB => {
        yB && (yB._rawFragmentSourceCode = BB), lB[1] = BB, pB()
      }), QB)
    }

    function zB(BB, OB, GB, DB, oB, jB) {
      if ("undefined" !== typeof HTMLElement && BB instanceof HTMLElement) {
        return void DB((0, YB.b)(BB))
      }
      if ("source:" === BB.substring(0, 7)) return void DB(BB.substring(7));
      if ("base64:" === BB.substring(0, 7)) {
        return void DB(window.atob(BB.substring(7)))
      }
      const JB = QB.b.GetShadersStore(oB);
      if (JB[BB + OB + "Shader"]) return void DB(JB[BB + OB + "Shader"]);
      if (GB && JB[BB + GB + "Shader"]) return void DB(JB[BB + GB + "Shader"]);
      let MB;
      if (MB = "." === BB[0] || "/" === BB[0] || BB.indexOf("http") > -1 ? BB : QB.b.GetShadersRepository(oB) + BB, !(jB = jB || yB.i)) throw new Error("loadFileInjection is not defined");
      jB(MB + "." + OB.toLowerCase() + ".fx", DB)
    }
    const lB = (BB, OB, GB, YB) => {
      try {
        const QB = BB.context ? (0, DB.u)(BB.context) : null;
        QB && (QB.disableParallelShaderCompile = BB.disableParallelCompilation);
        const oB = BB.existingPipelineContext || OB(BB.shaderProcessingContext);
        return oB._name = BB.name, BB.name && QB && (QB.cachedPipelines[BB.name] = oB), GB(oB, BB.vertex, BB.fragment, !!BB.createAsRaw, "", "", BB.rebuildRebind, BB.defines, BB.transformFeedbackVaryings, "", (() => {
          YB(oB, (() => {
            BB.onRenderingStateCompiled?.(oB)
          }))
        })), oB
      } catch (QB) {
        throw oB.b.Error("Error compiling effect"), QB
      }
    }
  },
  40857: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => yB
    });
    var YB = GB(37802),
      DB = GB(39366),
      QB = GB(40864),
      oB = GB(40868),
      jB = GB(40899);
    class yB {
      static get ShadersRepository() {
        return QB.b.ShadersRepository
      }
      static set ShadersRepository(BB) {
        QB.b.ShadersRepository = BB
      }
      get lV() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new YB.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(BB, OB, GB) {
        let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QB = arguments.length > 4 ? arguments[4] : void 0,
          jB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          JB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          MB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          PB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          zB = arguments.length > 9 ? arguments[9] : void 0,
          lB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          pB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          qB = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new YB.b, this.onErrorObservable = new YB.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = BB, this._key = lB;
        const ZB = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let NB;
        if (OB.attributes) {
          const BB = OB;
          if (this._engine = GB, this._attributesNames = BB.attributes, this._uniformsNames = BB.uniformsNames.concat(BB.samplers), this._samplerList = BB.samplers.slice(), this.defines = BB.defines, this.onError = BB.onError, this.onCompiled = BB.onCompiled, this._fallbacks = BB.fallbacks, this._indexParameters = BB.indexParameters, this._transformFeedbackVaryings = BB.transformFeedbackVaryings || null, this._multiTarget = !!BB.multiTarget, this._shaderLanguage = BB.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!BB.disableParallelShaderCompilation, BB.uniformBuffersNames) {
            this._uniformBuffersNamesList = BB.uniformBuffersNames.slice();
            for (let OB = 0; OB < BB.uniformBuffersNames.length; OB++) this._uniformBuffersNames[BB.uniformBuffersNames[OB]] = OB
          }
          this._processFinalCode = BB.processFinalCode ?? null, this._processCodeAfterIncludes = BB.processCodeAfterIncludes ?? void 0, qB = BB.extraInitializationsAsync, NB = BB.existingPipelineContext
        } else this._engine = QB, this.defines = null == jB ? "" : jB, this._uniformsNames = GB.concat(DB), this._samplerList = DB ? DB.slice() : [], this._attributesNames = OB, this._uniformBuffersNamesList = [], this._shaderLanguage = pB, this.onError = PB, this.onCompiled = MB, this._indexParameters = zB, this._fallbacks = JB;
        "WEBGL2" === this._engine.shaderPlatformName && (NB = (0, oB.i)(ZB, this._engine._gl) ?? NB), this._attributeLocationByName = {}, this.uniqueId = yB._UniqueIdSeed++, NB ? (this._pipelineContext = NB, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, qB).catch((BB => {
          const OB = BB?.message ?? String(BB),
            GB = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${OB}`);
          BB && "string" === typeof BB.stack && (GB.stack = `${GB.message}\nCaused by: ${BB.stack}`), this._processCompilationErrors(GB)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.lV || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        YB && await YB(), this._processingContext = GB || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const DB = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: BB ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: QB.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: QB.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          fDB: this._engine.fDB,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, oB.e)(DB, this.name, this._processFinalCode, ((BB, GB) => {
          this._vertexSourceCode = BB, this._fragmentSourceCode = GB, this._prepareEffect(OB)
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
        return !!this._engine.lV || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Lp() {
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
        this.isReady() ? BB(this) : (this.onCompileObservable.add((OB => {
          BB(OB)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(BB) {
        (0, jB.d)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (OB => {
          this._processCompilationErrors(OB, BB)
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
            fDB: this._engine.fDB,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(BB, OB, GB, YB) {
        this._isReady = !1, this._vertexSourceCodeOverride = BB, this._fragmentSourceCodeOverride = OB, this.onError = (BB, OB) => {
          YB && YB(OB)
        }, this.onCompiled = () => {
          const BB = this.Lp().scenes;
          if (BB)
            for (let OB = 0; OB < BB.length; OB++) BB[OB].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(GB)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(BB) {
        if (this._pipelineContext = BB, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let OB = 0; OB < this._attributesNames.length; OB++) {
            const BB = this._attributesNames[OB];
            this._attributeLocationByName[BB] = this._attributes[OB]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), yB.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = this._pipelineContext;
        this._isReady = !1;
        try {
          const GB = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            YB = GB ? null : this.defines,
            DB = GB ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            QB = GB ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            jB = this._engine;
          this._pipelineContext = (0, oB.g)({
            existingPipelineContext: BB ? OB : null,
            vertex: DB,
            fragment: QB,
            context: "WEBGL2" === jB.shaderPlatformName || "WEBGL1" === jB.shaderPlatformName ? jB._gl : void 0,
            rebuildRebind: (BB, OB, GB, YB) => this._rebuildProgram(BB, OB, GB, YB),
            defines: YB,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: GB,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: GB => {
              OB && !BB && this._engine._deletePipelineContext(OB), GB && this._onRenderingStateCompiled(GB)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(OB)
        } catch (GB) {
          this._processCompilationErrors(GB, OB)
        }
      }
      _getShaderCodeAndErrorLine(BB, OB, GB) {
        const YB = GB ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let DB = null;
        if (OB && BB) {
          const QB = OB.match(YB);
          if (QB && 2 === QB.length) {
            const OB = parseInt(QB[1]),
              YB = BB.split("\n", -1);
            YB.length >= OB && (DB = `Offending line [${OB}] in ${GB?"fragment":"vertex"} code: ${YB[OB-1]}`)
          }
        }
        return [BB, DB]
      }
      _processCompilationErrors(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof BB?.stack ? BB.stack : BB?.message ?? String(BB);
        const GB = this._attributesNames,
          YB = this._fallbacks;
        if (DB.b.Error("Unable to compile effect:"), DB.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), DB.b.Error(`Attributes: ${GB.join(" ")}`), DB.b.Error("Defines:\n" + this.defines), yB.LogShaderCodeOnCompilationError) {
          let BB, OB = null,
            GB = null;
          this._pipelineContext?._getVertexShaderCode() && ([BB, OB] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), BB && (DB.b.Error("Vertex code:"), DB.b.Error(BB))), this._pipelineContext?._getFragmentShaderCode() && ([BB, GB] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), BB && (DB.b.Error("Fragment code:"), DB.b.Error(BB))), OB && DB.b.Error(OB), GB && DB.b.Error(GB)
        }
        DB.b.Error("Error: " + this._compilationError);
        const QB = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        OB && (this._pipelineContext = OB, this._isReady = !0, QB()), YB ? (this._pipelineContext = null, YB.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, DB.b.Error("Trying next fallback."), this.defines = YB.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, QB(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, OB || QB())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(BB, OB) {
        this._engine._bindTexture(this._samplers[BB], OB, BB)
      }
      setTexture(BB, OB) {
        this._engine.setTexture(this._samplers[BB], this._uniforms[BB], OB, BB)
      }
      setTextureArray(BB, OB) {
        const GB = BB + "Ex";
        if (-1 === this._samplerList.indexOf(GB + "0")) {
          const YB = this._samplerList.indexOf(BB);
          for (let BB = 1; BB < OB.length; BB++) {
            const OB = GB + (BB - 1).toString();
            this._samplerList.splice(YB + BB, 0, OB)
          }
          let DB = 0;
          for (const BB of this._samplerList) this._samplers[BB] = DB, DB += 1
        }
        this._engine.setTextureArray(this._samplers[BB], this._uniforms[BB], OB, BB)
      }
      bindUniformBuffer(BB, OB) {
        const GB = this._uniformBuffersNames[OB];
        void 0 === GB || yB._BaseCache[GB] === BB && this._engine._features.useUBOBindingCache || (yB._BaseCache[GB] = BB, this._engine.bindUniformBufferBase(BB, GB, OB))
      }
      bindUniformBlock(BB, OB) {
        this._engine.bindUniformBlock(this._pipelineContext, BB, OB)
      }
      setInt(BB, OB) {
        return this._pipelineContext.setInt(BB, OB), this
      }
      setInt2(BB, OB, GB) {
        return this._pipelineContext.setInt2(BB, OB, GB), this
      }
      setInt3(BB, OB, GB, YB) {
        return this._pipelineContext.setInt3(BB, OB, GB, YB), this
      }
      setInt4(BB, OB, GB, YB, DB) {
        return this._pipelineContext.setInt4(BB, OB, GB, YB, DB), this
      }
      setIntArray(BB, OB) {
        return this._pipelineContext.setIntArray(BB, OB), this
      }
      setIntArray2(BB, OB) {
        return this._pipelineContext.setIntArray2(BB, OB), this
      }
      setIntArray3(BB, OB) {
        return this._pipelineContext.setIntArray3(BB, OB), this
      }
      setIntArray4(BB, OB) {
        return this._pipelineContext.setIntArray4(BB, OB), this
      }
      setUInt(BB, OB) {
        return this._pipelineContext.setUInt(BB, OB), this
      }
      setUInt2(BB, OB, GB) {
        return this._pipelineContext.setUInt2(BB, OB, GB), this
      }
      setUInt3(BB, OB, GB, YB) {
        return this._pipelineContext.setUInt3(BB, OB, GB, YB), this
      }
      setUInt4(BB, OB, GB, YB, DB) {
        return this._pipelineContext.setUInt4(BB, OB, GB, YB, DB), this
      }
      setUIntArray(BB, OB) {
        return this._pipelineContext.setUIntArray(BB, OB), this
      }
      setUIntArray2(BB, OB) {
        return this._pipelineContext.setUIntArray2(BB, OB), this
      }
      setUIntArray3(BB, OB) {
        return this._pipelineContext.setUIntArray3(BB, OB), this
      }
      setUIntArray4(BB, OB) {
        return this._pipelineContext.setUIntArray4(BB, OB), this
      }
      setFloatArray(BB, OB) {
        return this._pipelineContext.setArray(BB, OB), this
      }
      setFloatArray2(BB, OB) {
        return this._pipelineContext.setArray2(BB, OB), this
      }
      setFloatArray3(BB, OB) {
        return this._pipelineContext.setArray3(BB, OB), this
      }
      setFloatArray4(BB, OB) {
        return this._pipelineContext.setArray4(BB, OB), this
      }
      setArray(BB, OB) {
        return this._pipelineContext.setArray(BB, OB), this
      }
      setArray2(BB, OB) {
        return this._pipelineContext.setArray2(BB, OB), this
      }
      setArray3(BB, OB) {
        return this._pipelineContext.setArray3(BB, OB), this
      }
      setArray4(BB, OB) {
        return this._pipelineContext.setArray4(BB, OB), this
      }
      setMatrices(BB, OB) {
        return this._pipelineContext.setMatrices(BB, OB), this
      }
      setMatrix(BB, OB) {
        return this._pipelineContext.setMatrix(BB, OB), this
      }
      setMatrix3x3(BB, OB) {
        return this._pipelineContext.setMatrix3x3(BB, OB), this
      }
      setMatrix2x2(BB, OB) {
        return this._pipelineContext.setMatrix2x2(BB, OB), this
      }
      setFloat(BB, OB) {
        return this._pipelineContext.setFloat(BB, OB), this
      }
      setBool(BB, OB) {
        return this._pipelineContext.setInt(BB, OB ? 1 : 0), this
      }
      setVector2(BB, OB) {
        return this._pipelineContext.setVector2(BB, OB), this
      }
      setFloat2(BB, OB, GB) {
        return this._pipelineContext.setFloat2(BB, OB, GB), this
      }
      setVector3(BB, OB) {
        return this._pipelineContext.setVector3(BB, OB), this
      }
      setFloat3(BB, OB, GB, YB) {
        return this._pipelineContext.setFloat3(BB, OB, GB, YB), this
      }
      setVector4(BB, OB) {
        return this._pipelineContext.setVector4(BB, OB), this
      }
      setQuaternion(BB, OB) {
        return this._pipelineContext.setQuaternion(BB, OB), this
      }
      setFloat4(BB, OB, GB, YB, DB) {
        return this._pipelineContext.setFloat4(BB, OB, GB, YB, DB), this
      }
      setColor3(BB, OB) {
        return this._pipelineContext.setColor3(BB, OB), this
      }
      setColor4(BB, OB, GB) {
        return this._pipelineContext.setColor4(BB, OB, GB), this
      }
      setDirectColor4(BB, OB) {
        return this._pipelineContext.setDirectColor4(BB, OB), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (yB.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, oB.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        OB && (QB.b.GetShadersStore(YB)[`${BB}PixelShader`] = OB), GB && (QB.b.GetShadersStore(YB)[`${BB}VertexShader`] = GB)
      }
      static ResetCache() {
        yB._BaseCache = {}
      }
    }
    yB.LogShaderCodeOnCompilationError = !0, yB.PersistentMode = !1, yB.AutomaticallyClearCodeCache = !1, yB._UniqueIdSeed = 0, yB._BaseCache = {}, yB.ShadersStore = QB.b.ShadersStore, yB.IncludesShadersStore = QB.b.IncludesShadersStore
  },
  41164: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      f: () => nB,
      j: () => SB
    });
    var YB = GB(40857),
      DB = GB(37778),
      QB = GB(37816),
      oB = GB(41136);
    const jB = new DB.d,
      yB = new DB.d,
      JB = new DB.d,
      MB = {
        JF: () => {},
        eyeAtCamera: !0
      };

    function PB(BB, OB, GB) {
      const YB = GB.dDB(),
        DB = OB.dDB();
      for (let QB = 0; QB < 16; QB++) YB[QB] = DB[QB];
      return YB[12] -= BB.x, YB[13] -= BB.y, YB[14] -= BB.z, GB.markAsUpdated(), GB
    }

    function zB(BB, OB, GB) {
      return (0, QB.m)(OB, yB), PB(BB, yB, JB), (0, QB.m)(JB, GB), GB
    }

    function lB(BB, OB, GB) {
      if (!MB.eyeAtCamera) return zB(BB, OB, GB);
      const YB = GB.dDB(),
        DB = OB.dDB();
      for (let QB = 0; QB < 16; QB++) YB[QB] = DB[QB];
      return YB[12] = 0, YB[13] = 0, YB[14] = 0, GB.markAsUpdated(), GB
    }

    function pB(BB, OB, GB, YB) {
      return (0, QB.t)(lB(BB, OB, YB), GB, YB), YB
    }

    function qB(BB, OB, GB, YB) {
      return (0, QB.m)(GB, yB), (0, QB.t)(OB, yB, JB), PB(BB, JB, yB), lB(BB, GB, JB), (0, QB.t)(yB, JB, YB), YB
    }

    function ZB(BB, OB, GB, YB, DB, oB) {
      return (0, QB.m)(GB, yB), (0, QB.t)(OB, yB, JB), PB(BB, JB, yB), pB(BB, YB, DB, JB), (0, QB.t)(yB, JB, oB), oB
    }

    function NB(BB, OB) {
      const GB = MB.JF();
      if (!GB || jB === OB) return OB;
      jB.updateFlag = OB.updateFlag;
      const YB = GB.floatingOriginOffset;
      switch (BB) {
        case "world":
          return PB(YB, OB, jB);
        case "view":
          return lB(YB, OB, jB);
        case "worldView":
          return qB(YB, OB, GB.getViewMatrix(), jB);
        case "viewProjection":
          return pB(YB, GB.getViewMatrix(), GB.getProjectionMatrix(), jB);
        case "worldViewProjection":
          return ZB(YB, OB, GB.getTransformMatrix(), GB.getViewMatrix(), GB.getProjectionMatrix(), jB);
        default:
          if (BB.startsWith("u_")) {
            const DB = BB.toLowerCase();
            if (DB.startsWith("u_worldviewprojection")) return ZB(YB, OB, GB.getTransformMatrix(), GB.getViewMatrix(), GB.getProjectionMatrix(), jB);
            if (DB.startsWith("u_viewprojection")) return pB(YB, GB.getViewMatrix(), GB.getProjectionMatrix(), jB);
            if (DB.startsWith("u_worldview")) return qB(YB, OB, GB.getViewMatrix(), jB);
            if (DB.startsWith("u_world")) return PB(YB, OB, jB);
            if (DB.startsWith("u_view")) return lB(YB, OB, jB)
          }
          return OB
      }
    }
    const RB = oB.d,
      WB = YB.c,
      AB = RB.prototype._updateMatrixForUniform,
      VB = YB.c.prototype.setMatrix;

    function SB() {
      YB.c.prototype.setMatrix = VB, WB._setMatrixOverride = void 0, RB.prototype._updateMatrixForUniform = AB, RB.prototype._updateMatrixForUniformOverride = void 0
    }

    function nB() {
      WB.prototype._setMatrixOverride = VB, WB.prototype.setMatrix = function(BB, OB) {
        return this._setMatrixOverride(BB, NB(BB, OB)), this
      }, RB.prototype._updateMatrixForUniformOverride = AB, RB.prototype._updateMatrixForUniform = function(BB, OB) {
        this._updateMatrixForUniformOverride(BB, NB(BB, OB))
      }
    }
  },
  41129: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      f: () => DB
    });
    var YB = GB(41127);

    function DB(BB, OB) {
      OB.WHITEBALANCE && BB.push("whiteBalanceMatrix"), OB.EXPOSURE && BB.push("exposureLinear"), OB.CONTRAST && BB.push("contrast"), OB.COLORGRADING && BB.push("colorTransformSettings"), (OB.VIGNETTE || OB.DITHER) && BB.push("vInverseScreenSize"), OB.VIGNETTE && (BB.push("vignetteSettings1"), BB.push("vignetteSettings2")), OB.COLORCURVES && (0, YB.c)(BB), OB.DITHER && BB.push("ditherIntensity")
    }

    function QB(BB, OB) {
      OB.COLORGRADING && BB.push("txColorTransform")
    }
  },
  41119: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => KB,
      f: () => IB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37802),
      oB = GB(37894),
      jB = GB(37807),
      yB = GB(37778);
    const JB = [
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
      MB = 1e6 / JB[JB.length - 1][0],
      PB = 150;

    function zB(BB, OB) {
      const GB = Number.isNaN(BB) ? MB : Math.max(BB, MB),
        YB = (0, jB.Clamp)(1e6 / GB, JB[0][0], JB[JB.length - 1][0]);
      let DB = 0,
        QB = JB.length - 1;
      for (; QB - DB > 1;) {
        const BB = DB + QB >> 1;
        JB[BB][0] <= YB ? DB = BB : QB = BB
      }
      const oB = DB,
        [zB, lB, pB, qB] = JB[oB],
        [ZB, NB, RB, WB] = JB[oB + 1],
        AB = (YB - zB) / (ZB - zB),
        VB = yB.o.Lerp(new yB.o(lB, pB), new yB.o(NB, RB), AB),
        SB = yB.o.Normalize(new yB.o(1, qB)),
        nB = yB.o.Normalize(new yB.o(1, WB)),
        UB = yB.o.Normalize(yB.o.Lerp(SB, nB, AB)),
        fB = (0, jB.Clamp)(OB, -150, PB);
      VB.CDB(UB.scale(fB / 3e3));
      const kB = 2 * VB.x - 8 * VB.y + 4,
        dB = 3 * VB.x / kB,
        KB = 2 * VB.y / kB;
      return new yB.r(dB / KB, 1, (1 - dB - KB) / KB)
    }
    const lB = yB.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      pB = yB.d.Invert(lB);

    function qB(BB, OB) {
      const GB = OB > 0 ? BB / OB : 10;
      return (0, jB.Clamp)(GB, .1, 10)
    }

    function ZB(BB, OB) {
      const GB = yB.r.TransformNormal(BB, lB),
        YB = yB.r.TransformNormal(OB, lB),
        DB = yB.d.FromArray([qB(YB.x, GB.x), 0, 0, 0, 0, qB(YB.y, GB.y), 0, 0, 0, 0, qB(YB.z, GB.z), 0, 0, 0, 0, 1]);
      return lB.multiply(DB).multiply(pB)
    }
    const NB = new yB.r(.95047, 1, 1.08883),
      RB = yB.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(ZB(NB, zB(6500, 0))),
      WB = yB.d.Invert(RB),
      AB = yB.r.TransformNormal(new yB.r(1, 1, 1), RB);
    var VB = GB(41022),
      SB = GB(41127);
    let nB = (() => {
      var BB;
      let OB, GB, QB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB = [],
        NB = [],
        RB = [],
        WB = [],
        AB = [],
        nB = [],
        UB = [],
        fB = [],
        kB = [],
        dB = [],
        KB = [],
        uB = [],
        mB = [],
        IB = [],
        FB = [],
        iB = [],
        LB = [],
        gB = [],
        rB = [],
        XB = [],
        wB = [],
        EB = [],
        cB = [],
        hB = [];
      return BB = class {
        constructor() {
          this._dirty = !0, this._tempColor = new oB.g(0, 0, 0, 0), this._globalCurve = new oB.g(0, 0, 0, 0), this._highlightsCurve = new oB.g(0, 0, 0, 0), this._midtonesCurve = new oB.g(0, 0, 0, 0), this._shadowsCurve = new oB.g(0, 0, 0, 0), this._positiveCurve = new oB.g(0, 0, 0, 0), this._negativeCurve = new oB.g(0, 0, 0, 0), this._globalHue = (0, YB.j)(this, ZB, 30), this._globalDensity = ((0, YB.j)(this, NB), (0, YB.j)(this, RB, 0)), this._globalSaturation = ((0, YB.j)(this, WB), (0, YB.j)(this, AB, 0)), this._globalExposure = ((0, YB.j)(this, nB), (0, YB.j)(this, UB, 0)), this._highlightsHue = ((0, YB.j)(this, fB), (0, YB.j)(this, kB, 30)), this._highlightsDensity = ((0, YB.j)(this, dB), (0, YB.j)(this, KB, 0)), this._highlightsSaturation = ((0, YB.j)(this, uB), (0, YB.j)(this, mB, 0)), this._highlightsExposure = ((0, YB.j)(this, IB), (0, YB.j)(this, FB, 0)), this._midtonesHue = ((0, YB.j)(this, iB), (0, YB.j)(this, LB, 30)), this._midtonesDensity = ((0, YB.j)(this, gB), (0, YB.j)(this, rB, 0)), this._midtonesSaturation = ((0, YB.j)(this, XB), (0, YB.j)(this, wB, 0)), this._midtonesExposure = ((0, YB.j)(this, EB), (0, YB.j)(this, cB, 0)), this._shadowsHue = ((0, YB.j)(this, hB), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(OB, GB, YB, DB, QB) {
          null != OB && (OB = BB._Clamp(OB, 0, 360), GB = BB._Clamp(GB, -100, 100), YB = BB._Clamp(YB, -100, 100), DB = BB._Clamp(DB, -100, 100), GB = BB._ApplyColorGradingSliderNonlinear(GB), GB *= .5, DB = BB._ApplyColorGradingSliderNonlinear(DB), GB < 0 && (GB *= -1, OB = (OB + 180) % 360), BB._FromHSBToRef(OB, GB, 50 + .25 * DB, QB), QB.scaleToRef(2, QB), QB.a = 1 + .01 * YB)
        }
        static _ApplyColorGradingSliderNonlinear(BB) {
          BB /= 100;
          let OB = Math.abs(BB);
          return OB = Math.pow(OB, 2), BB < 0 && (OB *= -1), OB *= 100, OB
        }
        static _FromHSBToRef(OB, GB, YB, DB) {
          let QB = BB._Clamp(OB, 0, 360);
          const oB = BB._Clamp(GB / 100, 0, 1),
            jB = BB._Clamp(YB / 100, 0, 1);
          if (0 === oB) DB.r = jB, DB.g = jB, DB.b = jB;
          else {
            QB /= 60;
            const BB = Math.floor(QB),
              OB = QB - BB,
              GB = jB * (1 - oB),
              YB = jB * (1 - oB * OB),
              yB = jB * (1 - oB * (1 - OB));
            switch (BB) {
              case 0:
                DB.r = jB, DB.g = yB, DB.b = GB;
                break;
              case 1:
                DB.r = YB, DB.g = jB, DB.b = GB;
                break;
              case 2:
                DB.r = GB, DB.g = jB, DB.b = yB;
                break;
              case 3:
                DB.r = GB, DB.g = YB, DB.b = jB;
                break;
              case 4:
                DB.r = yB, DB.g = GB, DB.b = jB;
                break;
              default:
                DB.r = jB, DB.g = GB, DB.b = YB
            }
          }
          DB.a = 1
        }
        static _Clamp(BB, OB, GB) {
          return Math.min(Math.max(BB, OB), GB)
        }
        clone() {
          return VB.d.Clone((() => new BB), this)
        }
        serialize() {
          return VB.d.Serialize(this)
        }
        _bind(BB) {
          let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), BB && (BB.setFloat4(OB, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), BB.setFloat4(GB, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), BB.setFloat4(YB, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], jB = [(0, DB.L)()], yB = [(0, DB.L)()], JB = [(0, DB.L)()], MB = [(0, DB.L)()], PB = [(0, DB.L)()], zB = [(0, DB.L)()], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalHue" in BB,
            get: BB => BB._globalHue,
            set: (BB, OB) => {
              BB._globalHue = OB
            }
          },
          metadata: oB
        }, ZB, NB), (0, YB.h)(null, null, GB, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalDensity" in BB,
            get: BB => BB._globalDensity,
            set: (BB, OB) => {
              BB._globalDensity = OB
            }
          },
          metadata: oB
        }, RB, WB), (0, YB.h)(null, null, QB, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalSaturation" in BB,
            get: BB => BB._globalSaturation,
            set: (BB, OB) => {
              BB._globalSaturation = OB
            }
          },
          metadata: oB
        }, AB, nB), (0, YB.h)(null, null, jB, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_globalExposure" in BB,
            get: BB => BB._globalExposure,
            set: (BB, OB) => {
              BB._globalExposure = OB
            }
          },
          metadata: oB
        }, UB, fB), (0, YB.h)(null, null, yB, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsHue" in BB,
            get: BB => BB._highlightsHue,
            set: (BB, OB) => {
              BB._highlightsHue = OB
            }
          },
          metadata: oB
        }, kB, dB), (0, YB.h)(null, null, JB, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsDensity" in BB,
            get: BB => BB._highlightsDensity,
            set: (BB, OB) => {
              BB._highlightsDensity = OB
            }
          },
          metadata: oB
        }, KB, uB), (0, YB.h)(null, null, MB, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsSaturation" in BB,
            get: BB => BB._highlightsSaturation,
            set: (BB, OB) => {
              BB._highlightsSaturation = OB
            }
          },
          metadata: oB
        }, mB, IB), (0, YB.h)(null, null, PB, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_highlightsExposure" in BB,
            get: BB => BB._highlightsExposure,
            set: (BB, OB) => {
              BB._highlightsExposure = OB
            }
          },
          metadata: oB
        }, FB, iB), (0, YB.h)(null, null, zB, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesHue" in BB,
            get: BB => BB._midtonesHue,
            set: (BB, OB) => {
              BB._midtonesHue = OB
            }
          },
          metadata: oB
        }, LB, gB), (0, YB.h)(null, null, lB, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesDensity" in BB,
            get: BB => BB._midtonesDensity,
            set: (BB, OB) => {
              BB._midtonesDensity = OB
            }
          },
          metadata: oB
        }, rB, XB), (0, YB.h)(null, null, pB, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesSaturation" in BB,
            get: BB => BB._midtonesSaturation,
            set: (BB, OB) => {
              BB._midtonesSaturation = OB
            }
          },
          metadata: oB
        }, wB, EB), (0, YB.h)(null, null, qB, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: BB => "_midtonesExposure" in BB,
            get: BB => BB._midtonesExposure,
            set: (BB, OB) => {
              BB._midtonesExposure = OB
            }
          },
          metadata: oB
        }, cB, hB), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB.PrepareUniforms = SB.c, BB
    })();

    function UB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      BB._bind(OB, GB, YB, DB)
    }
    var fB = GB(40932),
      kB = GB(41129),
      dB = GB(37823);
    let KB = (() => {
        var BB;
        let OB, GB, JB, lB, pB, qB, NB, SB, dB, KB, uB, mB, IB, FB, iB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, TB, bB, CB, HB = [],
          vB = [],
          sB = [],
          xB = [],
          tB = [],
          BO = [],
          OO = [],
          GO = [],
          YO = [],
          DO = [],
          QO = [],
          oO = [],
          jO = [],
          yO = [],
          JO = [],
          MO = [],
          PO = [],
          zO = [],
          lO = [],
          pO = [],
          qO = [],
          ZO = [],
          NO = [],
          RO = [],
          WO = [],
          AO = [],
          VO = [],
          SO = [],
          nO = [],
          UO = [],
          fO = [],
          kO = [],
          dO = [],
          KO = [],
          uO = [],
          mO = [],
          IO = [],
          FO = [],
          iO = [],
          LO = [],
          gO = [],
          rO = [],
          XO = [],
          wO = [],
          EO = [],
          cO = [],
          hO = [],
          aO = [],
          eO = [],
          TO = [],
          bO = [],
          CO = [],
          HO = [],
          vO = [],
          sO = [],
          xO = [];
        return BB = class {
          constructor() {
            this.colorCurves = (0, YB.j)(this, HB, new nB), this._colorCurvesEnabled = ((0, YB.j)(this, vB), (0, YB.j)(this, sB, !1)), this._colorGradingTexture = ((0, YB.j)(this, xB), (0, YB.j)(this, tB, void 0)), this._colorGradingEnabled = ((0, YB.j)(this, BO), (0, YB.j)(this, OO, !1)), this._colorGradingWithGreenDepth = ((0, YB.j)(this, GO), (0, YB.j)(this, YO, !0)), this._colorGradingBGR = ((0, YB.j)(this, DO), (0, YB.j)(this, QO, !0)), this._exposure = ((0, YB.j)(this, oO), (0, YB.j)(this, jO, 1)), this._toneMappingEnabled = ((0, YB.j)(this, yO), (0, YB.j)(this, JO, !1)), this._toneMappingType = ((0, YB.j)(this, MO), (0, YB.j)(this, PO, BB.TONEMAPPING_STANDARD)), this._contrast = ((0, YB.j)(this, zO), (0, YB.j)(this, lO, 1)), this._whiteBalanceEnabled = ((0, YB.j)(this, pO), (0, YB.j)(this, qO, !1)), this._temperature = ((0, YB.j)(this, ZO), (0, YB.j)(this, NO, 6500)), this._tint = ((0, YB.j)(this, RO), (0, YB.j)(this, WO, 0)), this._whiteBalanceMatrix = ((0, YB.j)(this, AO), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, YB.j)(this, VO, 0), this.vignetteCenterX = ((0, YB.j)(this, SO), (0, YB.j)(this, nO, 0)), this.vignetteCenterY = ((0, YB.j)(this, UO), (0, YB.j)(this, fO, 0)), this.vignetteWeight = ((0, YB.j)(this, kO), (0, YB.j)(this, dO, 1.5)), this.vignetteColor = ((0, YB.j)(this, KO), (0, YB.j)(this, uO, new oB.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, YB.j)(this, mO), (0, YB.j)(this, IO, .5)), this._vignetteBlendMode = ((0, YB.j)(this, FO), (0, YB.j)(this, iO, BB.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, YB.j)(this, LO), (0, YB.j)(this, gO, !1)), this._ditheringEnabled = ((0, YB.j)(this, rO), (0, YB.j)(this, XO, !1)), this._ditheringIntensity = ((0, YB.j)(this, wO), (0, YB.j)(this, EO, 1 / 255)), this._skipFinalColorClamp = ((0, YB.j)(this, cO), (0, YB.j)(this, hO, !1)), this._applyByPostProcess = ((0, YB.j)(this, aO), (0, YB.j)(this, eO, !1)), this._isEnabled = ((0, YB.j)(this, TO), (0, YB.j)(this, bO, !0)), this.outputTextureWidth = ((0, YB.j)(this, CO), (0, YB.j)(this, HO, 0)), this.outputTextureHeight = ((0, YB.j)(this, vO), (0, YB.j)(this, sO, 0)), this.onUpdateParameters = ((0, YB.j)(this, xO), new QB.b)
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
            BB = Number.isNaN(BB) ? MB : Math.max(BB, MB), this._temperature !== BB && (this._temperature = BB, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(BB) {
            BB = (0, jB.Clamp)(BB, -150, PB), this._tint !== BB && (this._tint = BB, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(BB, OB) {
              const GB = ZB(zB(BB, OB), AB),
                YB = RB.multiply(GB).multiply(WB);
              return yB.d.GetAsMatrix3x3(YB)
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
          prepareDefines(OB) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return OB.WHITEBALANCE = !1, OB.VIGNETTE = !1, OB.TONEMAPPING = 0, OB.CONTRAST = !1, OB.EXPOSURE = !1, OB.COLORCURVES = !1, OB.COLORGRADING = !1, OB.COLORGRADING3D = !1, OB.DITHER = !1, OB.IMAGEPROCESSING = !1, OB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(OB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (OB.WHITEBALANCE = this._whiteBalanceEnabled, OB.VIGNETTE = this.vignetteEnabled, OB.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === BB._VIGNETTEMODE_MULTIPLY, OB.VIGNETTEBLENDMODEOPAQUE = !OB.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case BB.TONEMAPPING_KHR_PBR_NEUTRAL:
                OB.TONEMAPPING = 3;
                break;
              case BB.TONEMAPPING_ACES:
                OB.TONEMAPPING = 2;
                break;
              default:
                OB.TONEMAPPING = 1
            } else OB.TONEMAPPING = 0;
            OB.CONTRAST = 1 !== this.contrast, OB.EXPOSURE = 1 !== this.exposure, OB.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, OB.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, OB.COLORGRADING ? OB.COLORGRADING3D = this.colorGradingTexture.is3D : OB.COLORGRADING3D = !1, OB.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, OB.SAMPLER3DBGRMAP = this.colorGradingBGR, OB.DITHER = this._ditheringEnabled, OB.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, OB.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, OB.IMAGEPROCESSING = OB.WHITEBALANCE || OB.VIGNETTE || !!OB.TONEMAPPING || OB.CONTRAST || OB.EXPOSURE || OB.COLORCURVES || OB.COLORGRADING || OB.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(BB, OB) {
            if (this._whiteBalanceEnabled && BB.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && UB(this.colorCurves, BB), this._vignetteEnabled || this._ditheringEnabled) {
              const GB = 1 / (this.outputTextureWidth || BB.Lp().getRenderWidth()),
                YB = 1 / (this.outputTextureHeight || BB.Lp().getRenderHeight());
              if (BB.setFloat2("vInverseScreenSize", GB, YB), this._ditheringEnabled && BB.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const DB = null != OB ? OB : YB / GB;
                let QB = Math.tan(.5 * this.vignetteCameraFov),
                  oB = QB * DB;
                const jB = Math.sqrt(oB * QB);
                oB = (0, fB.k)(oB, jB, this.vignetteStretch), QB = (0, fB.k)(QB, jB, this.vignetteStretch), BB.setFloat4("vignetteSettings1", oB, QB, -oB * this.vignetteCenterX, -QB * this.vignetteCenterY);
                const yB = -2 * this.vignetteWeight;
                BB.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, yB)
              }
            }
            if (BB.setFloat("exposureLinear", this.exposure), BB.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              BB.setTexture("txColorTransform", this.colorGradingTexture);
              const OB = this.colorGradingTexture.getSize().height;
              BB.setFloat4("colorTransformSettings", (OB - 1) / OB, .5 / OB, OB, this.colorGradingTexture.level)
            }
          }
          clone() {
            return VB.d.Clone((() => new BB), this)
          }
          serialize() {
            return VB.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OB = [(0, DB.l)()], GB = [(0, DB.L)()], JB = [(0, DB.B)("colorGradingTexture")], lB = [(0, DB.L)()], pB = [(0, DB.L)()], qB = [(0, DB.L)()], NB = [(0, DB.L)()], SB = [(0, DB.L)()], dB = [(0, DB.L)()], KB = [(0, DB.L)()], uB = [(0, DB.L)()], mB = [(0, DB.L)()], IB = [(0, DB.L)()], FB = [(0, DB.L)()], iB = [(0, DB.L)()], LB = [(0, DB.L)()], gB = [(0, DB.L)()], rB = [(0, DB.o)()], XB = [(0, DB.L)()], wB = [(0, DB.L)()], EB = [(0, DB.L)()], cB = [(0, DB.L)()], hB = [(0, DB.L)()], aB = [(0, DB.L)()], eB = [(0, DB.L)()], TB = [(0, DB.L)()], bB = [(0, DB.L)()], CB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: BB => "colorCurves" in BB,
              get: BB => BB.colorCurves,
              set: (BB, OB) => {
                BB.colorCurves = OB
              }
            },
            metadata: QB
          }, HB, vB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorCurvesEnabled" in BB,
              get: BB => BB._colorCurvesEnabled,
              set: (BB, OB) => {
                BB._colorCurvesEnabled = OB
              }
            },
            metadata: QB
          }, sB, xB), (0, YB.h)(null, null, JB, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingTexture" in BB,
              get: BB => BB._colorGradingTexture,
              set: (BB, OB) => {
                BB._colorGradingTexture = OB
              }
            },
            metadata: QB
          }, tB, BO), (0, YB.h)(null, null, lB, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingEnabled" in BB,
              get: BB => BB._colorGradingEnabled,
              set: (BB, OB) => {
                BB._colorGradingEnabled = OB
              }
            },
            metadata: QB
          }, OO, GO), (0, YB.h)(null, null, pB, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingWithGreenDepth" in BB,
              get: BB => BB._colorGradingWithGreenDepth,
              set: (BB, OB) => {
                BB._colorGradingWithGreenDepth = OB
              }
            },
            metadata: QB
          }, YO, DO), (0, YB.h)(null, null, qB, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: BB => "_colorGradingBGR" in BB,
              get: BB => BB._colorGradingBGR,
              set: (BB, OB) => {
                BB._colorGradingBGR = OB
              }
            },
            metadata: QB
          }, QO, oO), (0, YB.h)(null, null, NB, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: BB => "_exposure" in BB,
              get: BB => BB._exposure,
              set: (BB, OB) => {
                BB._exposure = OB
              }
            },
            metadata: QB
          }, jO, yO), (0, YB.h)(null, null, SB, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingEnabled" in BB,
              get: BB => BB._toneMappingEnabled,
              set: (BB, OB) => {
                BB._toneMappingEnabled = OB
              }
            },
            metadata: QB
          }, JO, MO), (0, YB.h)(null, null, dB, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: BB => "_toneMappingType" in BB,
              get: BB => BB._toneMappingType,
              set: (BB, OB) => {
                BB._toneMappingType = OB
              }
            },
            metadata: QB
          }, PO, zO), (0, YB.h)(null, null, KB, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: BB => "_contrast" in BB,
              get: BB => BB._contrast,
              set: (BB, OB) => {
                BB._contrast = OB
              }
            },
            metadata: QB
          }, lO, pO), (0, YB.h)(null, null, uB, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_whiteBalanceEnabled" in BB,
              get: BB => BB._whiteBalanceEnabled,
              set: (BB, OB) => {
                BB._whiteBalanceEnabled = OB
              }
            },
            metadata: QB
          }, qO, ZO), (0, YB.h)(null, null, mB, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: BB => "_temperature" in BB,
              get: BB => BB._temperature,
              set: (BB, OB) => {
                BB._temperature = OB
              }
            },
            metadata: QB
          }, NO, RO), (0, YB.h)(null, null, IB, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: BB => "_tint" in BB,
              get: BB => BB._tint,
              set: (BB, OB) => {
                BB._tint = OB
              }
            },
            metadata: QB
          }, WO, AO), (0, YB.h)(null, null, FB, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteStretch" in BB,
              get: BB => BB.vignetteStretch,
              set: (BB, OB) => {
                BB.vignetteStretch = OB
              }
            },
            metadata: QB
          }, VO, SO), (0, YB.h)(null, null, iB, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterX" in BB,
              get: BB => BB.vignetteCenterX,
              set: (BB, OB) => {
                BB.vignetteCenterX = OB
              }
            },
            metadata: QB
          }, nO, UO), (0, YB.h)(null, null, LB, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCenterY" in BB,
              get: BB => BB.vignetteCenterY,
              set: (BB, OB) => {
                BB.vignetteCenterY = OB
              }
            },
            metadata: QB
          }, fO, kO), (0, YB.h)(null, null, gB, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteWeight" in BB,
              get: BB => BB.vignetteWeight,
              set: (BB, OB) => {
                BB.vignetteWeight = OB
              }
            },
            metadata: QB
          }, dO, KO), (0, YB.h)(null, null, rB, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteColor" in BB,
              get: BB => BB.vignetteColor,
              set: (BB, OB) => {
                BB.vignetteColor = OB
              }
            },
            metadata: QB
          }, uO, mO), (0, YB.h)(null, null, XB, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: BB => "vignetteCameraFov" in BB,
              get: BB => BB.vignetteCameraFov,
              set: (BB, OB) => {
                BB.vignetteCameraFov = OB
              }
            },
            metadata: QB
          }, IO, FO), (0, YB.h)(null, null, wB, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteBlendMode" in BB,
              get: BB => BB._vignetteBlendMode,
              set: (BB, OB) => {
                BB._vignetteBlendMode = OB
              }
            },
            metadata: QB
          }, iO, LO), (0, YB.h)(null, null, EB, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_vignetteEnabled" in BB,
              get: BB => BB._vignetteEnabled,
              set: (BB, OB) => {
                BB._vignetteEnabled = OB
              }
            },
            metadata: QB
          }, gO, rO), (0, YB.h)(null, null, cB, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringEnabled" in BB,
              get: BB => BB._ditheringEnabled,
              set: (BB, OB) => {
                BB._ditheringEnabled = OB
              }
            },
            metadata: QB
          }, XO, wO), (0, YB.h)(null, null, hB, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ditheringIntensity" in BB,
              get: BB => BB._ditheringIntensity,
              set: (BB, OB) => {
                BB._ditheringIntensity = OB
              }
            },
            metadata: QB
          }, EO, cO), (0, YB.h)(null, null, aB, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: BB => "_skipFinalColorClamp" in BB,
              get: BB => BB._skipFinalColorClamp,
              set: (BB, OB) => {
                BB._skipFinalColorClamp = OB
              }
            },
            metadata: QB
          }, hO, aO), (0, YB.h)(null, null, eB, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyByPostProcess" in BB,
              get: BB => BB._applyByPostProcess,
              set: (BB, OB) => {
                BB._applyByPostProcess = OB
              }
            },
            metadata: QB
          }, eO, TO), (0, YB.h)(null, null, TB, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: BB => "_isEnabled" in BB,
              get: BB => BB._isEnabled,
              set: (BB, OB) => {
                BB._isEnabled = OB
              }
            },
            metadata: QB
          }, bO, CO), (0, YB.h)(null, null, bB, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureWidth" in BB,
              get: BB => BB.outputTextureWidth,
              set: (BB, OB) => {
                BB.outputTextureWidth = OB
              }
            },
            metadata: QB
          }, HO, vO), (0, YB.h)(null, null, CB, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: BB => "outputTextureHeight" in BB,
              get: BB => BB.outputTextureHeight,
              set: (BB, OB) => {
                BB.outputTextureHeight = OB
              }
            },
            metadata: QB
          }, sO, xO), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB.TONEMAPPING_STANDARD = 0, BB.TONEMAPPING_ACES = 1, BB.TONEMAPPING_KHR_PBR_NEUTRAL = 2, BB.PrepareUniforms = kB.f, BB.PrepareSamplers = kB.b, BB._VIGNETTEMODE_MULTIPLY = 0, BB._VIGNETTEMODE_OPAQUE = 1, BB
      })(),
      uB = !1;

    function mB(BB) {
      const OB = VB.d.Parse((() => new KB), BB, null, null);
      return void 0 !== BB.vignetteCentreX && (OB.vignetteCenterX = BB.vignetteCentreX), void 0 !== BB.vignetteCentreY && (OB.vignetteCenterY = BB.vignetteCentreY), OB
    }

    function IB() {
      uB || (uB = !0, KB.Parse = mB, VB.d._ImageProcessingConfigurationParser = mB, (0, dB.f)("BABYLON.ImageProcessingConfiguration", KB))
    }
  },
  41136: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => QB
    });
    var YB = GB(39366),
      DB = GB(41097);
    class QB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          QB = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = BB, this._noUBO = !BB.supportsUniformBuffers || DB, this._dynamic = GB, this._name = YB ?? "no-name", this._data = OB || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === QB && this._engine._features.trackUbosInFrame || !0 === QB) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.TBB = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.TBB = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let OB;
        if (OB = BB <= 2 ? BB : 4, this._uniformLocationPointer % OB !== 0) {
          const BB = this._uniformLocationPointer;
          this._uniformLocationPointer += OB - this._uniformLocationPointer % OB;
          const GB = this._uniformLocationPointer - BB;
          for (let OB = 0; OB < GB; OB++) this._data.push(0)
        }
      }
      addUniform(BB, OB) {
        let GB, YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (YB > 0 && "number" === typeof OB && (this._uniformArraySizes[BB] = {
            strideSize: OB,
            arraySize: YB
          }), void 0 === this._uniformLocations[BB] && (this._uniformNames.push(BB), !this._noUBO)) {
          if (YB > 0) {
            if (OB instanceof Array) throw "addUniform should not be use with Array in UBO: " + BB;
            if (this._fillAlignment(4), 16 == OB) OB *= YB;
            else {
              OB = OB * YB + (4 - OB) * YB
            }
            GB = [];
            for (let BB = 0; BB < OB; BB++) GB.push(0)
          } else {
            if (OB instanceof Array) GB = OB, OB = GB.length;
            else {
              GB = [];
              for (let BB = 0; BB < OB; BB++) GB.push(0)
            }
            this._fillAlignment(OB)
          }
          this._uniformSizes[BB] = OB, this._uniformLocations[BB] = this._uniformLocationPointer, this._uniformLocationPointer += OB;
          for (let BB = 0; BB < OB; BB++) this._data.push(GB[BB]);
          this._needSync = !0
        }
      }
      addMatrix(BB, OB) {
        this.addUniform(BB, Array.prototype.slice.call(OB.dDB()))
      }
      addFloat2(BB, OB, GB) {
        const YB = [OB, GB];
        this.addUniform(BB, YB)
      }
      addFloat3(BB, OB, GB, YB) {
        const DB = [OB, GB, YB];
        this.addUniform(BB, DB)
      }
      addColor3(BB, OB) {
        const GB = [OB.r, OB.g, OB.b];
        this.addUniform(BB, GB)
      }
      addColor4(BB, OB, GB) {
        const YB = [OB.r, OB.g, OB.b, GB];
        this.addUniform(BB, YB)
      }
      addVector3(BB, OB) {
        const GB = [OB.x, OB.y, OB.z];
        this.addUniform(BB, GB)
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
        let OB = 0;
        for (const GB in this._uniformLocations)
          if (BB.push(GB), 10 === ++OB) break;
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
      _buffersEqual(BB, OB) {
        for (let GB = 0; GB < BB.length; ++GB)
          if (BB[GB] !== OB[GB]) return !1;
        return !0
      }
      _copyBuffer(BB, OB) {
        for (let GB = 0; GB < BB.length; ++GB) OB[GB] = BB[GB]
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
        let OB = this._slotByOwner.get(BB);
        if (void 0 === OB && (OB = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(BB, OB), this._ownerCount++, BB._uniformBuffersWithOwnedSlot || (BB._uniformBuffersWithOwnedSlot = []), BB._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(OB, BB._uniformBuffersWithOwnedSlot)), this._slotGeneration[OB] === this._dataGeneration) return this._bufferIndex = OB, this._buffer = this._buffers[OB][0], this.bindUniformBuffer(), this._slotFrameId[OB] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const GB = this._buffers[OB][1];
        this._slotFrameId[OB] === this._currentFrameId && GB && !this._buffersEqual(this._bufferData, GB) && (OB = this._takeFreeSlot(!1)), this._bufferIndex = OB, this._buffer = this._buffers[OB][0], this.bindUniformBuffer();
        const YB = this._buffers[OB][1];
        YB && this._buffersEqual(this._bufferData, YB) || (YB && this._copyBuffer(this._bufferData, YB), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[OB] = this._currentFrameId, this._slotGeneration[OB] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(BB) {
        for (let GB = 0; GB < this._freeSlots.length; ++GB) {
          const OB = this._freeSlots[GB];
          if (this._slotFrameId[OB] !== this._currentFrameId) return BB && (this._freeSlots[GB] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), OB
        }
        this._rebuild();
        const OB = this._buffers.length - 1;
        return BB || this._freeSlots.push(OB), OB
      }
      _releaseOwnerSlot(BB) {
        const OB = this._slotByOwner?.get(BB);
        if (void 0 === OB) return;
        this._slotByOwner.delete(BB);
        const GB = this._ownerListsBySlot.get(OB);
        GB && (this._removeOwnerBacklink(GB), this._ownerListsBySlot.delete(OB)), this._ownerCount--, this._freeSlots.push(OB)
      }
      _removeOwnerBacklink(BB) {
        const OB = BB.indexOf(this); - 1 !== OB && (BB[OB] = BB[BB.length - 1], BB.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(BB, OB, GB) {
        this._checkNewFrame();
        let DB = this._uniformLocations[BB];
        if (void 0 === DB) {
          if (this._buffer) return void YB.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + BB);
          this.addUniform(BB, GB), DB = this._uniformLocations[BB]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let BB = 0; BB < GB; BB++) this._bufferData[DB + BB] = OB[BB];
          this._dataGeneration++
        } else {
          let BB = !1;
          for (let YB = 0; YB < GB; YB++)(16 === GB && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[DB + YB] !== Math.fround(OB[YB])) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[DB + YB] = OB[YB]);
          this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      updateUniformArray(BB, OB, GB) {
        this._checkNewFrame();
        const QB = this._uniformLocations[BB];
        if (void 0 === QB) return void YB.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const oB = this._uniformArraySizes[BB];
        if (this._dynamic) {
          for (let BB = 0; BB < GB; BB++) this._bufferData[QB + BB] = OB[BB];
          this._dataGeneration++
        } else {
          let BB = !1,
            YB = 0,
            jB = 0;
          for (let yB = 0; yB < GB; yB++)
            if (this._bufferData[QB + 4 * jB + YB] !== DB.j.FloatRound(OB[yB]) && (BB = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[QB + 4 * jB + YB] = OB[yB]), YB++, YB === oB.strideSize) {
              for (; YB < 4; YB++) this._bufferData[QB + 4 * jB + YB] = 0;
              YB = 0, jB++
            } this._needSync = this._needSync || BB, BB && this._dataGeneration++
        }
      }
      _cacheMatrix(BB, OB) {
        this._checkNewFrame();
        const GB = this._valueCache[BB],
          YB = OB.updateFlag;
        return (void 0 === GB || GB !== YB) && (this._valueCache[BB] = YB, !0)
      }
      _updateMatrix3x3ForUniform(BB, OB) {
        for (let GB = 0; GB < 3; GB++) QB._TempBuffer[4 * GB] = OB[3 * GB], QB._TempBuffer[4 * GB + 1] = OB[3 * GB + 1], QB._TempBuffer[4 * GB + 2] = OB[3 * GB + 2], QB._TempBuffer[4 * GB + 3] = 0;
        this.updateUniform(BB, QB._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(BB, OB) {
        this._currentEffect.setMatrix3x3(BB, OB)
      }
      _updateMatrix2x2ForEffect(BB, OB) {
        this._currentEffect.setMatrix2x2(BB, OB)
      }
      _updateMatrix2x2ForUniform(BB, OB) {
        for (let GB = 0; GB < 2; GB++) QB._TempBuffer[4 * GB] = OB[2 * GB], QB._TempBuffer[4 * GB + 1] = OB[2 * GB + 1], QB._TempBuffer[4 * GB + 2] = 0, QB._TempBuffer[4 * GB + 3] = 0;
        this.updateUniform(BB, QB._TempBuffer, 8)
      }
      _updateFloatForEffect(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(BB + GB, OB)
      }
      _updateFloatForUniform(BB, OB) {
        QB._TempBuffer[0] = OB, this.updateUniform(BB, QB._TempBuffer, 1)
      }
      _updateFloat2ForEffect(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(BB + YB, OB, GB)
      }
      _updateFloat2ForUniform(BB, OB, GB) {
        QB._TempBuffer[0] = OB, QB._TempBuffer[1] = GB, this.updateUniform(BB, QB._TempBuffer, 2)
      }
      _updateFloat3ForEffect(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(BB + DB, OB, GB, YB)
      }
      _updateFloat3ForUniform(BB, OB, GB, YB) {
        QB._TempBuffer[0] = OB, QB._TempBuffer[1] = GB, QB._TempBuffer[2] = YB, this.updateUniform(BB, QB._TempBuffer, 3)
      }
      _updateFloat4ForEffect(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(BB + QB, OB, GB, YB, DB)
      }
      _updateFloat4ForUniform(BB, OB, GB, YB, DB) {
        QB._TempBuffer[0] = OB, QB._TempBuffer[1] = GB, QB._TempBuffer[2] = YB, QB._TempBuffer[3] = DB, this.updateUniform(BB, QB._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[BB]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(BB + GB, OB);
            break;
          case 3:
            this._currentEffect.setFloatArray3(BB + GB, OB);
            break;
          case 4:
            this._currentEffect.setFloatArray4(BB + GB, OB);
            break;
          default:
            this._currentEffect.setFloatArray(BB + GB, OB)
        }
      }
      _updateFloatArrayForUniform(BB, OB) {
        this.updateUniformArray(BB, OB, OB.length)
      }
      _updateArrayForEffect(BB, OB) {
        this._currentEffect.setArray(BB, OB)
      }
      _updateArrayForUniform(BB, OB) {
        this.updateUniformArray(BB, OB, OB.length)
      }
      _updateIntArrayForEffect(BB, OB) {
        this._currentEffect.setIntArray(BB, OB)
      }
      _updateIntArrayForUniform(BB, OB) {
        QB._TempBufferInt32View.set(OB), this.updateUniformArray(BB, QB._TempBuffer, OB.length)
      }
      _updateUIntArrayForEffect(BB, OB) {
        this._currentEffect.setUIntArray(BB, OB)
      }
      _updateUIntArrayForUniform(BB, OB) {
        QB._TempBufferUInt32View.set(OB), this.updateUniformArray(BB, QB._TempBuffer, OB.length)
      }
      _updateMatrixForEffect(BB, OB) {
        this._currentEffect.setMatrix(BB, OB)
      }
      _updateMatrixForUniform(BB, OB) {
        this._cacheMatrix(BB, OB) && this.updateUniform(BB, OB.dDB(), 16)
      }
      _updateMatricesForEffect(BB, OB) {
        this._currentEffect.setMatrices(BB, OB)
      }
      _updateMatricesForUniform(BB, OB) {
        this.updateUniform(BB, OB, OB.length)
      }
      _updateVector3ForEffect(BB, OB) {
        this._currentEffect.setVector3(BB, OB)
      }
      _updateVector3ForUniform(BB, OB) {
        QB._TempBuffer[0] = OB.x, QB._TempBuffer[1] = OB.y, QB._TempBuffer[2] = OB.z, this.updateUniform(BB, QB._TempBuffer, 3)
      }
      _updateVector4ForEffect(BB, OB) {
        this._currentEffect.setVector4(BB, OB)
      }
      _updateVector4ForUniform(BB, OB) {
        QB._TempBuffer[0] = OB.x, QB._TempBuffer[1] = OB.y, QB._TempBuffer[2] = OB.z, QB._TempBuffer[3] = OB.w, this.updateUniform(BB, QB._TempBuffer, 4)
      }
      _updateColor3ForEffect(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(BB + GB, OB)
      }
      _updateColor3ForUniform(BB, OB) {
        QB._TempBuffer[0] = OB.r, QB._TempBuffer[1] = OB.g, QB._TempBuffer[2] = OB.b, this.updateUniform(BB, QB._TempBuffer, 3)
      }
      _updateColor4ForEffect(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(BB + YB, OB, GB)
      }
      _updateDirectColor4ForEffect(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(BB + GB, OB)
      }
      _updateColor4ForUniform(BB, OB, GB) {
        QB._TempBuffer[0] = OB.r, QB._TempBuffer[1] = OB.g, QB._TempBuffer[2] = OB.b, QB._TempBuffer[3] = GB, this.updateUniform(BB, QB._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(BB, OB) {
        QB._TempBuffer[0] = OB.r, QB._TempBuffer[1] = OB.g, QB._TempBuffer[2] = OB.b, QB._TempBuffer[3] = OB.a, this.updateUniform(BB, QB._TempBuffer, 4)
      }
      _updateIntForEffect(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(BB + GB, OB)
      }
      _updateIntForUniform(BB, OB) {
        QB._TempBufferInt32View[0] = OB, this.updateUniform(BB, QB._TempBuffer, 1)
      }
      _updateInt2ForEffect(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(BB + YB, OB, GB)
      }
      _updateInt2ForUniform(BB, OB, GB) {
        QB._TempBufferInt32View[0] = OB, QB._TempBufferInt32View[1] = GB, this.updateUniform(BB, QB._TempBuffer, 2)
      }
      _updateInt3ForEffect(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(BB + DB, OB, GB, YB)
      }
      _updateInt3ForUniform(BB, OB, GB, YB) {
        QB._TempBufferInt32View[0] = OB, QB._TempBufferInt32View[1] = GB, QB._TempBufferInt32View[2] = YB, this.updateUniform(BB, QB._TempBuffer, 3)
      }
      _updateInt4ForEffect(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(BB + QB, OB, GB, YB, DB)
      }
      _updateInt4ForUniform(BB, OB, GB, YB, DB) {
        QB._TempBufferInt32View[0] = OB, QB._TempBufferInt32View[1] = GB, QB._TempBufferInt32View[2] = YB, QB._TempBufferInt32View[3] = DB, this.updateUniform(BB, QB._TempBuffer, 4)
      }
      _updateUIntForEffect(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(BB + GB, OB)
      }
      _updateUIntForUniform(BB, OB) {
        QB._TempBufferUInt32View[0] = OB, this.updateUniform(BB, QB._TempBuffer, 1)
      }
      _updateUInt2ForEffect(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(BB + YB, OB, GB)
      }
      _updateUInt2ForUniform(BB, OB, GB) {
        QB._TempBufferUInt32View[0] = OB, QB._TempBufferUInt32View[1] = GB, this.updateUniform(BB, QB._TempBuffer, 2)
      }
      _updateUInt3ForEffect(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(BB + DB, OB, GB, YB)
      }
      _updateUInt3ForUniform(BB, OB, GB, YB) {
        QB._TempBufferUInt32View[0] = OB, QB._TempBufferUInt32View[1] = GB, QB._TempBufferUInt32View[2] = YB, this.updateUniform(BB, QB._TempBuffer, 3)
      }
      _updateUInt4ForEffect(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(BB + QB, OB, GB, YB, DB)
      }
      _updateUInt4ForUniform(BB, OB, GB, YB, DB) {
        QB._TempBufferUInt32View[0] = OB, QB._TempBufferUInt32View[1] = GB, QB._TempBufferUInt32View[2] = YB, QB._TempBufferUInt32View[3] = DB, this.updateUniform(BB, QB._TempBuffer, 4)
      }
      setTexture(BB, OB) {
        this._currentEffect.setTexture(BB, OB)
      }
      setTextureArray(BB, OB) {
        this._currentEffect.setTextureArray(BB, OB)
      }
      bindTexture(BB, OB) {
        this._currentEffect._bindTexture(BB, OB)
      }
      updateUniformDirectly(BB, OB) {
        this.updateUniform(BB, OB, OB.length), this.update()
      }
      bindToEffect(BB, OB) {
        this._currentEffect = BB, this._currentEffectName = OB
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(BB) {
        if (!this._buffers) return this._buffer === BB;
        for (let OB = 0; OB < this._buffers.length; ++OB) {
          if (this._buffers[OB][0] === BB) return this._bufferIndex = OB, this._buffer = BB, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[OB][1] && (this._bufferData.set(this._buffers[OB][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(BB) {
        return void 0 !== this._uniformLocations[BB]
      }
      dispose() {
        if (this._noUBO) return;
        const BB = this._engine._uniformBuffers,
          OB = BB.indexOf(this);
        if (-1 !== OB && (BB[OB] = BB[BB.length - 1], BB.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let BB = 0; BB < this._buffers.length; ++BB) {
            const OB = this._buffers[BB][0];
            this._engine._releaseBuffer(OB)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    QB._MAX_UNIFORM_SIZE = 256, QB._TempBuffer = new Float32Array(QB._MAX_UNIFORM_SIZE), QB._TempBufferInt32View = new Int32Array(QB._TempBuffer.buffer), QB._TempBufferUInt32View = new Uint32Array(QB._TempBuffer.buffer)
  },
  40920: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(40929);
    class DB extends YB.b {
      constructor(BB) {
        super(), this._buffer = BB
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41012: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => yB,
      i: () => JB
    });
    const YB = "__bjs_serializable__",
      DB = new WeakMap;

    function QB(BB, OB) {
      return Object.prototype.hasOwnProperty.call(BB, OB)
    }
    const oB = function() {
      let BB = Symbol.metadata;
      return BB || (BB = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: BB
      })), BB
    }();

    function jB(BB) {
      return "function" === typeof BB ? BB : BB?.constructor
    }

    function yB(BB) {
      if (!BB) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(oB)}) polyfill must run before decorated classes are evaluated.`);
      return QB(BB, YB) || (BB[YB] = {}), BB[YB]
    }

    function JB(BB) {
      const OB = jB(BB),
        GB = OB ? OB[oB] : void 0;
      if (!GB) return {};
      const yB = DB.get(GB);
      if (yB) return yB;
      const JB = {},
        MB = [];
      let PB = GB;
      for (; PB;) MB.push(PB), PB = Object.getPrototypeOf(PB);
      for (const DB of MB)
        if (QB(DB, YB)) {
          const BB = DB[YB];
          for (const OB in BB) JB[OB] = BB[OB]
        } return DB.set(GB, JB), JB
    }
  },
  41004: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => jB,
      D: () => MB,
      H: () => PB,
      L: () => oB,
      e: () => WB,
      g: () => QB,
      j: () => RB,
      l: () => lB,
      n: () => yB,
      o: () => pB,
      r: () => JB,
      t: () => ZB,
      w: () => zB,
      z: () => qB
    });
    var YB = GB(41012);

    function DB(BB, OB) {
      return (GB, DB) => {
        if (!DB.metadata) return;
        const QB = String(DB.name),
          oB = (0, YB.e)(DB.metadata);
        oB[QB] || (oB[QB] = {
          type: BB,
          sourceName: OB
        })
      }
    }

    function QB(BB) {
      return function(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (GB, YB) => {
          const DB = OB || "_" + String(YB.name);
          return {
            init(BB) {
              return void 0 === BB && DB in this || (this[DB] = BB), BB
            },
            get() {
              return this[DB]
            },
            set(OB) {
              "function" === typeof this[DB]?.equals && this[DB].equals(OB) || this[DB] !== OB && (this[DB] = OB, this[BB]())
            }
          }
        }
      }(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function oB(BB) {
      return DB(0, BB)
    }

    function jB(BB) {
      return DB(1, BB)
    }

    function yB(BB) {
      return DB(2, BB)
    }

    function JB(BB) {
      return DB(3, BB)
    }

    function MB(BB) {
      return DB(4, BB)
    }

    function PB(BB) {
      return DB(5, BB)
    }

    function zB(BB) {
      return DB(6, BB)
    }

    function lB(BB) {
      return DB(7, BB)
    }

    function pB(BB) {
      return DB(8, BB)
    }

    function qB(BB) {
      return DB(10, BB)
    }

    function ZB(BB) {
      return DB(12, BB)
    }

    function NB(BB, OB, GB) {
      const YB = String(OB.name);
      let DB = null;
      const QB = function() {
        if (null === DB) {
          DB = BB, "undefined" !== typeof _native && _native[YB] && (DB = GB(_native[YB], BB));
          const oB = this && (OB.static ? this : Object.getPrototypeOf(this));
          oB?.[YB] === QB && (oB[YB] = DB)
        }
        for (var oB = arguments.length, jB = new Array(oB), yB = 0; yB < oB; yB++) jB[yB] = arguments[yB];
        return DB.apply(this, jB)
      };
      return QB
    }

    function RB(BB, OB) {
      return NB(BB, OB, (BB => BB))
    }

    function WB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (GB, YB) => {
        const DB = OB || "_" + String(YB.name);
        return {
          get() {
            return this[DB]?.value
          },
          set(OB) {
            "function" === typeof this[DB]?.value?.equals && this[DB].value.equals(OB) || this[DB].value !== OB && (this[DB].value = OB, this[BB]())
          }
        }
      }
    }
    RB.filter = function(BB) {
      return (OB, GB) => NB(OB, GB, ((OB, GB) => function() {
        for (var YB = arguments.length, DB = new Array(YB), QB = 0; QB < YB; QB++) DB[QB] = arguments[QB];
        return BB(...DB) ? OB(...DB) : GB.apply(this, DB)
      }))
    }
  },
  41022: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(40890),
      DB = GB(41024),
      QB = GB(37894),
      oB = GB(37778),
      jB = GB(41012);
    const yB = function(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const QB = BB();
      DB.e && DB.e.HasTags(OB) && DB.e.AddTagsTo(QB, DB.e.GetTags(OB, !0));
      const oB = (0, jB.i)(QB),
        yB = {};
      for (const DB in oB) {
        const BB = oB[DB],
          jB = OB[DB],
          MB = BB.type;
        if (void 0 !== jB && null !== jB && ("uniqueId" !== DB || JB.AllowLoadingUniqueId)) switch (MB) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof jB.slice ? QB[DB] = jB.slice() : QB[DB] = jB;
            break;
          case 1:
            YB.cloneTexturesOnlyOnce && yB[jB.uniqueId] ? QB[DB] = yB[jB.uniqueId] : (QB[DB] = GB || jB.isRenderTarget ? jB : jB.clone(), yB[jB.uniqueId] = QB[DB]);
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
            QB[DB] = GB ? jB : jB.clone()
        }
      }
      return QB
    };
    class JB {
      static AppendSerializedAnimations(BB, OB) {
        if (BB.animations) {
          OB.animations = [];
          for (let GB = 0; GB < BB.animations.length; GB++) {
            const YB = BB.animations[GB];
            OB.animations.push(YB.serialize())
          }
        }
      }
      static Serialize(BB, OB) {
        OB || (OB = {}), DB.e && (OB.tags = DB.e.GetTags(BB));
        const GB = (0, jB.i)(BB);
        for (const YB in GB) {
          const DB = GB[YB],
            QB = DB.sourceName || YB,
            oB = DB.type,
            jB = BB[YB];
          if (void 0 !== jB && null !== jB && ("uniqueId" !== YB || JB.AllowLoadingUniqueId)) switch (oB) {
            case 0:
              Array.isArray(jB) ? OB[QB] = jB.slice() : OB[QB] = jB;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              OB[QB] = jB.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              OB[QB] = jB.dDB();
              break;
            case 6:
            case 11:
              OB[QB] = jB.id
          }
        }
        return OB
      }
      static ParseProperties(BB, OB, GB, YB) {
        YB || (YB = "");
        const DB = (0, jB.i)(OB);
        for (const jB in DB) {
          const yB = DB[jB],
            MB = BB[yB.sourceName || jB],
            PB = yB.type;
          if (void 0 !== MB && null !== MB && ("uniqueId" !== jB || JB.AllowLoadingUniqueId)) {
            const BB = OB;
            switch (PB) {
              case 0:
                BB[jB] = MB;
                break;
              case 1:
                GB && (BB[jB] = JB._TextureParser(MB, GB, YB));
                break;
              case 2:
                BB[jB] = QB.c.FromArray(MB);
                break;
              case 3:
                BB[jB] = JB._FresnelParametersParser(MB);
                break;
              case 4:
                BB[jB] = oB.o.FromArray(MB);
                break;
              case 5:
                BB[jB] = oB.r.FromArray(MB);
                break;
              case 6:
                GB && (BB[jB] = GB.getLastMeshById(MB));
                break;
              case 7:
                BB[jB] = JB._ColorCurvesParser(MB);
                break;
              case 8:
                BB[jB] = QB.g.FromArray(MB);
                break;
              case 9:
                BB[jB] = JB._ImageProcessingConfigurationParser(MB);
                break;
              case 10:
                BB[jB] = oB.f.FromArray(MB);
                break;
              case 11:
                GB && (BB[jB] = GB.getCameraById(MB));
                break;
              case 12:
                BB[jB] = oB.d.FromArray(MB);
                break;
              case 13:
                BB[jB] = oB.t.FromArray(MB)
            }
          }
        }
      }
      static Parse(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const QB = BB();
        return DB.e && DB.e.AddTagsTo(QB, OB.tags), JB.ParseProperties(OB, QB, GB, YB), QB
      }
      static Clone(BB, OB) {
        return yB(BB, OB, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(BB, OB) {
        return yB(BB, OB, !0)
      }
    }
    JB.AllowLoadingUniqueId = !1, JB._ImageProcessingConfigurationParser = BB => {
      throw (0, YB.j)("ImageProcessingConfiguration")
    }, JB._FresnelParametersParser = BB => {
      throw (0, YB.j)("FresnelParameters")
    }, JB._ColorCurvesParser = BB => {
      throw (0, YB.j)("ColorCurves")
    }, JB._TextureParser = (BB, OB, GB) => {
      throw (0, YB.j)("Texture")
    }
  },
  40950: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(40911);
    class DB {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = DB.Enabled, this._lastSecValueCount++
      }
      addCount(BB, OB) {
        DB.Enabled && (this._current += BB, this._hasCurrentValue = !0, OB && this._fetchResult())
      }
      beginMonitoring() {
        DB.Enabled && (this._startMonitoringTime = YB.e.Now)
      }
      endMonitoring() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!DB.Enabled) return;
        BB && this.fetchNewFrame();
        const OB = YB.e.Now;
        this._current = OB - this._startMonitoringTime, this._hasCurrentValue = !0, BB && this._fetchResult()
      }
      AP() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const BB = YB.e.Now;
        BB - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = BB, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    DB.Enabled = !0
  },
  41112: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB,
      d: () => YB
    });
    class YB {
      constructor(BB) {
        this.length = 0, this.data = new Array(BB), this._id = YB._GlobalId++
      }
      push(BB) {
        this.data[this.length++] = BB, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(BB) {
        for (let OB = 0; OB < this.length; OB++) BB(this.data[OB])
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
          for (let OB = 0; OB < BB.length; OB++) this.data[this.length++] = (BB.data || BB)[OB]
        }
      }
      indexOf(BB) {
        const OB = this.data.indexOf(BB);
        return OB >= this.length ? -1 : OB
      }
      contains(BB) {
        return -1 !== this.indexOf(BB)
      }
    }
    YB._GlobalId = 0;
    class DB extends YB {
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
          for (let OB = 0; OB < BB.length; OB++) {
            const GB = (BB.data || BB)[OB];
            this.pushNoDuplicate(GB)
          }
        }
      }
    }
  },
  41024: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => DB
    });
    class YB {
      static Eval(BB, OB) {
        return "true" === (BB = BB.match(/\([^()]*\)/g) ? BB.replace(/\([^()]*\)/g, (BB => (BB = BB.slice(1, BB.length - 1), YB._HandleParenthesisContent(BB, OB)))) : YB._HandleParenthesisContent(BB, OB)) || "false" !== BB && YB.Eval(BB, OB)
      }
      static _HandleParenthesisContent(BB, OB) {
        let GB;
        OB = OB || (BB => "true" === BB);
        const DB = BB.split("||");
        for (const QB in DB)
          if (Object.prototype.hasOwnProperty.call(DB, QB)) {
            let BB = YB._SimplifyNegation(DB[QB].trim());
            const oB = BB.split("&&");
            if (oB.length > 1)
              for (let DB = 0; DB < oB.length; ++DB) {
                const QB = YB._SimplifyNegation(oB[DB].trim());
                if (GB = "true" !== QB && "false" !== QB ? "!" === QB[0] ? !OB(QB.substring(1)) : OB(QB) : "true" === QB, !GB) {
                  BB = "false";
                  break
                }
              }
            if (GB || "true" === BB) {
              GB = !0;
              break
            }
            GB = "true" !== BB && "false" !== BB ? "!" === BB[0] ? !OB(BB.substring(1)) : OB(BB) : "true" === BB
          } return GB ? "true" : "false"
      }
      static _SimplifyNegation(BB) {
        return "!true" === (BB = (BB = BB.replace(/^[\s!]+/, (BB => (BB = BB.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? BB = "false" : "!false" === BB && (BB = "true"), BB
      }
    }
    class DB {
      static EnableFor(BB) {
        BB._tags = BB._tags || {}, BB.hasTags = () => DB.HasTags(BB), BB.addTags = OB => DB.AddTagsTo(BB, OB), BB.removeTags = OB => DB.RemoveTagsFrom(BB, OB), BB.matchesTagsQuery = OB => DB.MatchesQuery(BB, OB)
      }
      static DisableFor(BB) {
        delete BB._tags, delete BB.hasTags, delete BB.addTags, delete BB.removeTags, delete BB.matchesTagsQuery
      }
      static HasTags(BB) {
        if (!BB._tags) return !1;
        const OB = BB._tags;
        for (const GB in OB)
          if (Object.prototype.hasOwnProperty.call(OB, GB)) return !0;
        return !1
      }
      static GetTags(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB._tags) return null;
        if (OB) {
          const OB = [];
          for (const GB in BB._tags) Object.prototype.hasOwnProperty.call(BB._tags, GB) && !0 === BB._tags[GB] && OB.push(GB);
          return OB.join(" ")
        }
        return BB._tags
      }
      static AddTagsTo(BB, OB) {
        if (!OB) return;
        if ("string" !== typeof OB) return;
        const GB = OB.split(" ");
        for (const YB of GB) DB._AddTagTo(BB, YB)
      }
      static _AddTagTo(BB, OB) {
        "" !== (OB = OB.trim()) && "true" !== OB && "false" !== OB && (OB.match(/[\s]/) || OB.match(/^([!]|([|]|[&]){2})/) || (DB.EnableFor(BB), BB._tags[OB] = !0))
      }
      static RemoveTagsFrom(BB, OB) {
        if (!DB.HasTags(BB)) return;
        const GB = OB.split(" ");
        for (const YB in GB) DB._RemoveTagFrom(BB, GB[YB])
      }
      static _RemoveTagFrom(BB, OB) {
        delete BB._tags[OB]
      }
      static MatchesQuery(BB, OB) {
        return void 0 === OB || ("" === OB ? DB.HasTags(BB) : YB.Eval(OB, (OB => DB.HasTags(BB) && BB._tags[OB])))
      }
    }
  },
  41155: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    var YB = GB(41150),
      DB = GB(37802);
    class QB {
      constructor(BB) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new DB.b, this._scene = BB
      }
      _prepareBuffers() {
        if (this._vertexBuffers[YB.h.PositionKind]) return;
        const BB = [];
        BB.push(1, 1), BB.push(-1, 1), BB.push(-1, -1), BB.push(1, -1), this._vertexBuffers[YB.h.PositionKind] = new YB.h(this._scene.Lp(), BB, YB.h.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const BB = [];
        BB.push(0), BB.push(1), BB.push(2), BB.push(0), BB.push(2), BB.push(3), this._indexBuffer = this._scene.Lp().createIndexBuffer(BB)
      }
      _getActivePostProcesses(BB) {
        const OB = this._activePostProcesses;
        OB.length = 0;
        for (let GB = 0; GB < BB.length; GB++) {
          const YB = BB[GB];
          YB && OB.push(YB)
        }
        return OB
      }
      _rebuild() {
        const BB = this._vertexBuffers[YB.h.PositionKind];
        BB && (BB._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GB = this._scene.activeCamera;
        return !!GB && (OB = OB || this._getActivePostProcesses(GB._postProcesses), !(!OB || 0 === OB.length || !this._scene.postProcessesEnabled) && (OB[0].activate(GB, BB, null !== OB && void 0 !== OB), !0))
      }
      directRender(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          QB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : BB.length;
        const jB = this._scene.Lp();
        for (let yB = 0; yB < oB; yB++) {
          yB < BB.length - 1 ? BB[yB + 1].activate(this._scene.activeCamera || this._scene, OB?.texture) : (OB ? jB.bindFramebuffer(OB, YB, void 0, void 0, GB, DB) : QB || jB.restoreDefaultFramebuffer(), jB._debugInsertMarker?.(`post process ${BB[yB].name} output`));
          const oB = BB[yB],
            JB = oB.apply();
          JB && (oB.onBeforeRenderObservable.notifyObservers(JB), this._prepareBuffers(), jB.bindBuffers(this._vertexBuffers, this._indexBuffer, JB), jB.drawElementsType(0, 0, 6), oB.onAfterRenderObservable.notifyObservers(JB))
        }
        jB.setDepthBuffer(!0), jB.setDepthWrite(!0)
      }
      _finalizeFrame(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const QB = this._scene.activeCamera;
        if (!QB) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (YB = YB || this._getActivePostProcesses(QB._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const oB = this._scene.Lp();
        for (let jB = 0, yB = YB.length; jB < yB; jB++) {
          const JB = YB[jB];
          if (jB < yB - 1 ? JB._outputTexture = YB[jB + 1].activate(QB, OB?.texture) : (OB ? (oB.bindFramebuffer(OB, GB, void 0, void 0, DB), JB._outputTexture = OB) : (oB.restoreDefaultFramebuffer(), JB._outputTexture = null), oB._debugInsertMarker?.(`post process ${YB[jB].name} output`)), BB) break;
          const MB = JB.apply();
          MB && (JB.onBeforeRenderObservable.notifyObservers(MB), this._prepareBuffers(), oB.bindBuffers(this._vertexBuffers, this._indexBuffer, MB), oB.drawElementsType(0, 0, 6), JB.onAfterRenderObservable.notifyObservers(MB))
        }
        oB.setDepthBuffer(!0), oB.setDepthWrite(!0), oB.setAlphaMode(0)
      }
      dispose() {
        const BB = this._vertexBuffers[YB.h.PositionKind];
        BB && (BB.dispose(), this._vertexBuffers[YB.h.PositionKind] = null), this._indexBuffer && (this._scene.Lp()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41180: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => JB
    });
    var YB = GB(41112),
      DB = GB(37778);
    const QB = [],
      oB = [];
    let jB = !1;

    function yB(BB, OB) {
      for (; BB.length < OB;) BB.push(void 0)
    }
    class JB {
      set opaqueSortCompareFn(BB) {
        this._opaqueSortCompareFn = BB || JB.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(BB) {
        this._alphaTestSortCompareFn = BB || JB.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(BB) {
        this._transparentSortCompareFn = BB || JB.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = BB, this._opaqueSubMeshes = new YB.d(256), this._transparentSubMeshes = new YB.d(256), this._alphaTestSubMeshes = new YB.d(256), this._depthOnlySubMeshes = new YB.d(256), this._particleSystems = new YB.d(256), this._spriteManagers = new YB.d(256), this._empty = !0, this._edgesRenderers = new YB.b(16), this.disableDepthPrePass = !1, this._scene = OB, this.opaqueSortCompareFn = GB, this.alphaTestSortCompareFn = DB, this.transparentSortCompareFn = QB
      }
      render(BB, OB, GB, YB) {
        let DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          jB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          yB = arguments.length > 8 ? arguments[8] : void 0;
        if (BB) return void BB(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const JB = this._scene.Lp();
        DB && 0 !== this._depthOnlySubMeshes.length && (JB.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), JB.setColorWrite(!0)), QB && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), oB && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const MB = JB.getStencilBuffer();
        if (JB.setStencilBuffer(!1), OB && this._renderSprites(), GB && this._renderParticles(YB), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), jB && (yB || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (JB.setStencilBuffer(MB), yB) yB(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const BB = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            BB.length && this._renderTransparent(BB)
          } else this._renderTransparent(this._transparentSubMeshes);
          JB.setAlphaMode(0)
        }
        if (JB.setStencilBuffer(!1), QB && this._edgesRenderers.length) {
          for (let BB = 0; BB < this._edgesRenderers.length; BB++) this._edgesRenderers.data[BB].render();
          JB.setAlphaMode(0)
        }
        JB.setStencilBuffer(MB)
      }
      _renderOpaqueSorted(BB) {
        JB._RenderSorted(BB, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(BB) {
        JB._RenderSorted(BB, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(BB) {
        JB._RenderSorted(BB, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(BB, OB, GB, YB, QB) {
        let MB, PB = 0;
        const zB = GB ? GB.globalPosition : JB._ZeroVector;
        if (YB && OB !== JB.PainterSortCompare)
          for (; PB < BB.length; PB++) MB = BB.data[PB], MB._alphaIndex = MB.getMesh().alphaIndex, MB._distanceToCamera = DB.r.Distance(MB.Gw().xDB.centerWorld, zB);
        const lB = BB.length;
        let pB = BB.data;
        const qB = lB !== pB.length && !jB;
        if (qB) {
          for (jB = !0, yB(oB, lB), PB = 0; PB < lB; PB++) oB[PB] = pB[PB];
          pB = oB
        } else lB !== pB.length && (pB = pB.slice(0, lB));
        try {
          OB && JB._StableSort(pB, lB, OB), JB._DrawSorted(pB, lB, YB, QB)
        } finally {
          qB && (oB.fill(void 0, 0, lB), jB = !1)
        }
      }
      static _DrawSorted(BB, OB, GB, YB) {
        let DB;
        const QB = BB[0].getMesh().JF();
        for (let oB = 0; oB < OB; oB++) {
          if (DB = BB[oB], QB._activeMeshesFrozenButKeepClipping && !DB.isInFrustum(QB._frustumPlanes)) continue;
          let OB = !1;
          if (GB) {
            const BB = DB.cp();
            if (BB && BB.needDepthPrePass && !YB) {
              OB = !0;
              const GB = BB.JF().Lp();
              GB.setColorWrite(!1), GB.setAlphaMode(0), DB.render(!1), GB.setColorWrite(!0)
            }
          }
          const jB = DB._renderingMesh;
          !OB && jB._renderRunFollower(DB, GB) || DB.render(GB)
        }
      }
      static _StableSort(BB, OB, GB) {
        for (let YB = 0; YB < OB; YB += 16) {
          const DB = Math.min(YB + 16, OB);
          for (let OB = YB + 1; OB < DB; OB++) {
            const DB = BB[OB];
            let QB = YB,
              oB = OB;
            for (; QB < oB;) {
              const OB = QB + oB >>> 1;
              GB(DB, BB[OB]) < 0 ? oB = OB : QB = OB + 1
            }
            for (let GB = OB; GB > QB; GB--) BB[GB] = BB[GB - 1];
            BB[QB] = DB
          }
        }
        if (!(OB <= 16)) {
          yB(QB, OB);
          try {
            let YB = BB,
              DB = QB;
            for (let BB = 16; BB < OB; BB *= 2) {
              for (let oB = 0; oB < OB; oB += 2 * BB) {
                const QB = Math.min(oB + BB, OB),
                  jB = Math.min(oB + 2 * BB, OB);
                let yB = oB,
                  JB = QB,
                  MB = oB;
                if (QB < jB && GB(YB[QB], YB[QB - 1]) < 0)
                  for (; yB < QB && JB < jB;) DB[MB++] = GB(YB[JB], YB[yB]) < 0 ? YB[JB++] : YB[yB++];
                for (; yB < QB;) DB[MB++] = YB[yB++];
                for (; JB < jB;) DB[MB++] = YB[JB++]
              }
              const QB = DB;
              DB = YB, YB = QB
            }
            if (YB !== BB)
              for (let GB = 0; GB < OB; GB++) BB[GB] = YB[GB]
          } finally {
            QB.fill(void 0, 0, OB)
          }
        }
      }
      static defaultTransparentSortCompare(BB, OB) {
        return BB._alphaIndex > OB._alphaIndex ? 1 : BB._alphaIndex < OB._alphaIndex ? -1 : JB.backToFrontSortCompare(BB, OB)
      }
      static backToFrontSortCompare(BB, OB) {
        return BB._distanceToCamera < OB._distanceToCamera ? 1 : BB._distanceToCamera > OB._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(BB, OB) {
        return BB._distanceToCamera < OB._distanceToCamera ? -1 : BB._distanceToCamera > OB._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(BB, OB) {
        const GB = BB.getMesh(),
          YB = OB.getMesh();
        return GB.material && YB.material ? GB.material.uniqueId - YB.material.uniqueId : GB.uniqueId - YB.uniqueId
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
      dispatch(BB, OB, GB) {
        void 0 === OB && (OB = BB.getMesh()), void 0 === GB && (GB = BB.cp()), null !== GB && void 0 !== GB && (GB.needAlphaBlendingForMesh(OB) ? this._transparentSubMeshes.push(BB) : GB.needAlphaTestingForMesh(OB) ? (GB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._alphaTestSubMeshes.push(BB)) : (GB.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(BB), this._opaqueSubMeshes.push(BB)), OB._renderingGroup = this, OB._edgesRenderer && OB.isEnabled() && OB.isVisible && OB._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(OB._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(BB) {
        this._spriteManagers.push(BB), this._empty = !1
      }
      dispatchParticles(BB) {
        this._particleSystems.push(BB), this._empty = !1
      }
      _renderParticles(BB) {
        if (0 === this._particleSystems.length) return;
        const OB = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let GB = 0; GB < this._particleSystems.length; GB++) {
          const YB = this._particleSystems.data[GB];
          if (0 === (OB && OB.layerMask & YB.layerMask)) continue;
          const DB = YB.emitter;
          DB.position && BB && -1 === BB.indexOf(DB) || this._scene._activeParticles.addCount(YB.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const BB = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let OB = 0; OB < this._spriteManagers.length; OB++) {
          const GB = this._spriteManagers.data[OB];
          0 !== (BB && BB.layerMask & GB.layerMask) && GB.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    JB._ZeroVector = DB.r.Zero()
  },
  41171: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(41180);
    class DB {}
    class QB {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(BB) {
        this._disableDepthPrePass = BB;
        for (const OB of this._renderingGroups) OB.disableDepthPrePass = BB
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(BB) {
        BB !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = BB, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const BB of this._scene.meshes)
          if (BB.iW)
            for (const OB of BB.iW) OB._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const BB of this._scene.spriteManagers) BB._wasDispatched = !1;
        for (const BB of this._scene.rW) BB._wasDispatched = !1
      }
      constructor(BB) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new DB, this._maintainStateBetweenFrames = !1, this._scene = BB;
        for (let OB = QB.MIN_RENDERINGGROUPS; OB < QB.MAX_RENDERINGGROUPS; OB++) this._autoClearDepthStencil[OB] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(BB) {
        const OB = BB || 0;
        return this._prepareRenderingGroup(OB), this._renderingGroups[OB]
      }
      _clearDepthStencilBuffer() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Lp().clear(null, !1, BB, OB), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(BB, OB, GB, YB) {
        let DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          yB = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          JB = arguments.length > 8 ? arguments[8] : void 0,
          MB = arguments.length > 9 ? arguments[9] : void 0;
        const PB = this._renderingGroupInfo;
        PB.eq = this._scene, PB.camera = this._scene.activeCamera, PB.renderingManager = this;
        const zB = MB ?? this._scene.spriteManagers;
        if (zB && YB)
          for (let QB = 0; QB < zB.length; QB++) {
            const BB = zB[QB];
            this.dispatchSprites(BB)
          }
        for (let lB = QB.MIN_RENDERINGGROUPS; lB < QB.MAX_RENDERINGGROUPS; lB++) {
          this._depthStencilBufferAlreadyCleaned = lB === QB.MIN_RENDERINGGROUPS;
          const MB = this._renderingGroups[lB];
          if (!MB || MB._empty) continue;
          const zB = 1 << lB;
          if (PB.renderingGroupId = lB, this._scene.onBeforeRenderingGroupObservable.notifyObservers(PB, zB), QB.AUTOCLEAR) {
            const BB = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(lB) : this._autoClearDepthStencil[lB];
            BB && BB.autoClear && this._clearDepthStencilBuffer(BB.depth, BB.stencil)
          }
          for (let BB = 0, OB = this._scene._beforeRenderingGroupDrawStage; BB < OB.length; BB++) {
            OB[BB].action(lB)
          }
          MB.render(BB, YB, GB, OB, DB, oB, jB, yB, JB);
          for (let BB = 0, OB = this._scene._afterRenderingGroupDrawStage; BB < OB.length; BB++) {
            OB[BB].action(lB)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(PB, zB)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = QB.MIN_RENDERINGGROUPS; BB < QB.MAX_RENDERINGGROUPS; BB++) {
            const OB = this._renderingGroups[BB];
            OB && OB.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let BB = QB.MIN_RENDERINGGROUPS; BB < QB.MAX_RENDERINGGROUPS; BB++) {
            const OB = this._renderingGroups[BB];
            OB && OB.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let BB = QB.MIN_RENDERINGGROUPS; BB < QB.MAX_RENDERINGGROUPS; BB++) {
          const OB = this._renderingGroups[BB];
          OB && OB.dispose()
        }
      }
      _prepareRenderingGroup(BB) {
        void 0 === this._renderingGroups[BB] && (this._renderingGroups[BB] = new YB.e(BB, this._scene, this._customOpaqueSortCompareFn[BB], this._customAlphaTestSortCompareFn[BB], this._customTransparentSortCompareFn[BB]), this._renderingGroups[BB].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchSprites(BB))
      }
      dispatchParticles(BB) {
        this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(BB.renderingGroupId).dispatchParticles(BB))
      }
      dispatch(BB, OB, GB) {
        void 0 === OB && (OB = BB.getMesh()), this.maintainStateBetweenFrames && BB._wasDispatched || (BB._wasDispatched = !0, this.getRenderingGroup(OB.renderingGroupId).dispatch(BB, OB, GB))
      }
      setRenderingOrder(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[BB] = OB, this._customAlphaTestSortCompareFn[BB] = GB, this._customTransparentSortCompareFn[BB] = YB, this._renderingGroups[BB]) {
          const OB = this._renderingGroups[BB];
          OB.opaqueSortCompareFn = this._customOpaqueSortCompareFn[BB], OB.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[BB], OB.transparentSortCompareFn = this._customTransparentSortCompareFn[BB]
        }
      }
      setRenderingAutoClearDepthStencil(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[BB] = {
          autoClear: OB,
          depth: GB,
          stencil: YB
        }
      }
      getAutoClearDepthStencilSetup(BB) {
        return this._autoClearDepthStencil[BB]
      }
    }
    QB.MAX_RENDERINGGROUPS = 4, QB.MIN_RENDERINGGROUPS = 0, QB.AUTOCLEAR = !0
  },
  40914: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => YB
    });
    class YB {
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
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[OB] !== BB && (BB ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[OB] = BB, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(BB, OB, GB, YB) {
        this._blendConstants[0] === BB && this._blendConstants[1] === OB && this._blendConstants[2] === GB && this._blendConstants[3] === YB || (this._blendConstants[0] = BB, this._blendConstants[1] = OB, this._blendConstants[2] = GB, this._blendConstants[3] = YB, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(BB, OB, GB, YB) {
        const DB = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[DB + 0] === BB && this._blendFunctionParameters[DB + 1] === OB && this._blendFunctionParameters[DB + 2] === GB && this._blendFunctionParameters[DB + 3] === YB || (this._blendFunctionParameters[DB + 0] = BB, this._blendFunctionParameters[DB + 1] = OB, this._blendFunctionParameters[DB + 2] = GB, this._blendFunctionParameters[DB + 3] = YB, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(BB, OB) {
        const GB = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[GB + 0] === BB && this._blendEquationParameters[GB + 1] === OB || (this._blendEquationParameters[GB + 0] = BB, this._blendEquationParameters[GB + 1] = OB, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== OB && (this._numTargets = OB, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== GB && (this._blendDisabledTargetsMask = GB, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (BB.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === OB || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (OB > 1 && 0 !== GB && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & GB) ? BB.enable(BB.BLEND) : BB.disable(BB.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (BB.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (BB.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const YB = BB;
        if (this._isAlphaBlendDirty) {
          for (let DB = 0; DB < OB; DB++) {
            const OB = DB < this._numTargetEnabled ? DB : 0;
            this._alphaBlend[OB] && 0 === (GB & 1 << DB) ? YB.enableIndexed(BB.BLEND, DB) : YB.disableIndexed(BB.BLEND, DB)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let BB = 0; BB < OB; BB++) {
            const OB = BB < this._numTargetEnabled ? 4 * BB : 0;
            YB.blendFuncSeparateIndexed(BB, this._blendFunctionParameters[OB + 0], this._blendFunctionParameters[OB + 1], this._blendFunctionParameters[OB + 2], this._blendFunctionParameters[OB + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let BB = 0; BB < OB; BB++) {
            const OB = BB < this._numTargetEnabled ? 2 * BB : 0;
            YB.blendEquationSeparateIndexed(BB, this._blendEquationParameters[OB + 0], this._blendEquationParameters[OB + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(BB, OB) {
        let GB = 32774;
        switch (BB) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, OB);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, OB);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, OB);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, OB);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, OB);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, OB);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, OB);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, OB);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, OB);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, OB);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, OB);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, OB);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, OB);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, OB);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, OB);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, OB);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, OB), GB = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, OB), GB = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, OB);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, OB)
        }
        this.setAlphaEquationParameters(GB, GB, OB)
      }
    }
  },
  41205: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {}
    YB._IsPickingAvailable = !1
  },
  41091: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => jG,
      e: () => QG
    });
    var YB = GB(41097),
      DB = GB(40899),
      QB = GB(40911),
      oB = GB(37802),
      jB = GB(41112);
    class yB {
      constructor() {
        this._count = 0, this._data = {}
      }
      IU(BB) {
        this.clear(), BB.forEach(((BB, OB) => this.add(BB, OB)))
      }
      get(BB) {
        const OB = this._data[BB];
        if (void 0 !== OB) return OB
      }
      getOrAddWithFactory(BB, OB) {
        let GB = this.get(BB);
        return void 0 !== GB || (GB = OB(BB), GB && this.add(BB, GB)), GB
      }
      getOrAdd(BB, OB) {
        const GB = this.get(BB);
        return void 0 !== GB ? GB : (this.add(BB, OB), OB)
      }
      contains(BB) {
        return void 0 !== this._data[BB]
      }
      add(BB, OB) {
        return void 0 === this._data[BB] && (this._data[BB] = OB, ++this._count, !0)
      }
      set(BB, OB) {
        return void 0 !== this._data[BB] && (this._data[BB] = OB, !0)
      }
      getAndRemove(BB) {
        const OB = this.get(BB);
        return void 0 !== OB ? (delete this._data[BB], --this._count, OB) : null
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
        for (const OB in this._data) {
          BB(OB, this._data[OB])
        }
      }
      first(BB) {
        for (const OB in this._data) {
          const GB = BB(OB, this._data[OB]);
          if (GB) return GB
        }
        return null
      }
    }
    var JB = GB(41024),
      MB = GB(37778),
      PB = GB(41119),
      zB = GB(41136),
      lB = GB(41145);
    class pB {
      constructor(BB, OB, GB, YB, DB, QB) {
        this.source = BB, this.pointerX = OB, this.pointerY = GB, this.meshUnderPointer = YB, this.sourceEvent = DB, this.additionalData = QB
      }
      static CreateNew(BB, OB, GB) {
        const YB = BB.JF();
        return new pB(BB, YB.pointerX, YB.pointerY, YB.meshUnderPointer || BB, OB, GB)
      }
      static CreateNewFromSprite(BB, OB, GB, YB) {
        return new pB(BB, OB.pointerX, OB.pointerY, OB.meshUnderPointer, GB, YB)
      }
      static CreateNewFromScene(BB, OB) {
        return new pB(null, BB.pointerX, BB.pointerY, BB.meshUnderPointer, OB)
      }
      static CreateNewFromPrimitive(BB, OB, GB, YB) {
        return new pB(BB, OB.x, OB.y, null, GB, YB)
      }
    }
    var qB = GB(41155),
      ZB = GB(41164),
      NB = GB(41171),
      RB = GB(41183),
      WB = GB(40870),
      AB = GB(37796),
      VB = GB(40890),
      SB = GB(41190);
    class nB {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const BB in nB.Triggers)
          if (Object.prototype.hasOwnProperty.call(nB.Triggers, BB)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const BB in nB.Triggers)
          if (Object.prototype.hasOwnProperty.call(nB.Triggers, BB)) {
            const OB = parseInt(BB);
            if (OB >= 1 && OB <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(BB) {
        for (const OB in nB.Triggers)
          if (Object.prototype.hasOwnProperty.call(nB.Triggers, OB)) {
            if (parseInt(OB) === BB) return !0
          } return !1
      }
    }
    nB.Triggers = {};
    var UB, fB, kB, dB, KB, uB, mB, IB = GB(41197);
    ! function(BB) {
      BB[BB.Generic = 0] = "Generic", BB[BB.Keyboard = 1] = "Keyboard", BB[BB.Mouse = 2] = "Mouse", BB[BB.Touch = 3] = "Touch", BB[BB.DualShock = 4] = "DualShock", BB[BB.Xbox = 5] = "Xbox", BB[BB.Switch = 6] = "Switch", BB[BB.DualSense = 7] = "DualSense"
    }(UB || (UB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.Move = 12] = "Move"
    }(fB || (fB = {})),
    function(BB) {
      BB[BB.Horizontal = 0] = "Horizontal", BB[BB.Vertical = 1] = "Vertical", BB[BB.LeftClick = 2] = "LeftClick", BB[BB.MiddleClick = 3] = "MiddleClick", BB[BB.RightClick = 4] = "RightClick", BB[BB.BrowserBack = 5] = "BrowserBack", BB[BB.BrowserForward = 6] = "BrowserForward", BB[BB.MouseWheelX = 7] = "MouseWheelX", BB[BB.MouseWheelY = 8] = "MouseWheelY", BB[BB.MouseWheelZ = 9] = "MouseWheelZ", BB[BB.DeltaHorizontal = 10] = "DeltaHorizontal", BB[BB.DeltaVertical = 11] = "DeltaVertical"
    }(kB || (kB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Share = 8] = "Share", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(dB || (dB = {})),
    function(BB) {
      BB[BB.Cross = 0] = "Cross", BB[BB.Circle = 1] = "Circle", BB[BB.Square = 2] = "Square", BB[BB.Triangle = 3] = "Triangle", BB[BB.L1 = 4] = "L1", BB[BB.R1 = 5] = "R1", BB[BB.L2 = 6] = "L2", BB[BB.R2 = 7] = "R2", BB[BB.Create = 8] = "Create", BB[BB.Options = 9] = "Options", BB[BB.L3 = 10] = "L3", BB[BB.R3 = 11] = "R3", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.TouchPad = 17] = "TouchPad", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(KB || (KB = {})),
    function(BB) {
      BB[BB.A = 0] = "A", BB[BB.B = 1] = "B", BB[BB.X = 2] = "X", BB[BB.Y = 3] = "Y", BB[BB.LB = 4] = "LB", BB[BB.RB = 5] = "RB", BB[BB.LT = 6] = "LT", BB[BB.RT = 7] = "RT", BB[BB.Back = 8] = "Back", BB[BB.Start = 9] = "Start", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.LStickXAxis = 17] = "LStickXAxis", BB[BB.LStickYAxis = 18] = "LStickYAxis", BB[BB.RStickXAxis = 19] = "RStickXAxis", BB[BB.RStickYAxis = 20] = "RStickYAxis"
    }(uB || (uB = {})),
    function(BB) {
      BB[BB.B = 0] = "B", BB[BB.A = 1] = "A", BB[BB.Y = 2] = "Y", BB[BB.X = 3] = "X", BB[BB.L = 4] = "L", BB[BB.R = 5] = "R", BB[BB.ZL = 6] = "ZL", BB[BB.ZR = 7] = "ZR", BB[BB.Minus = 8] = "Minus", BB[BB.Plus = 9] = "Plus", BB[BB.LS = 10] = "LS", BB[BB.RS = 11] = "RS", BB[BB.DPadUp = 12] = "DPadUp", BB[BB.DPadDown = 13] = "DPadDown", BB[BB.DPadLeft = 14] = "DPadLeft", BB[BB.DPadRight = 15] = "DPadRight", BB[BB.Home = 16] = "Home", BB[BB.Capture = 17] = "Capture", BB[BB.LStickXAxis = 18] = "LStickXAxis", BB[BB.LStickYAxis = 19] = "LStickYAxis", BB[BB.RStickXAxis = 20] = "RStickXAxis", BB[BB.RStickYAxis = 21] = "RStickYAxis"
    }(mB || (mB = {}));
    var FB = GB(41201);
    class iB {
      static CreateDeviceEvent(BB, OB, GB, YB, DB, QB, oB) {
        switch (BB) {
          case UB.Keyboard:
            return this._CreateKeyboardEvent(GB, YB, DB, QB);
          case UB.Mouse:
            if (GB === fB.MouseWheelX || GB === fB.MouseWheelY || GB === fB.MouseWheelZ) return this._CreateWheelEvent(BB, OB, GB, YB, DB, QB);
          case UB.Touch:
            return this._CreatePointerEvent(BB, OB, GB, YB, DB, QB, oB);
          default:
            throw `Unable to generate event for device ${UB[BB]}`
        }
      }
      static _CreatePointerEvent(BB, OB, GB, YB, DB, QB, oB) {
        const jB = this._CreateMouseEvent(BB, OB, GB, YB, DB, QB);
        BB === UB.Mouse ? (jB.deviceType = UB.Mouse, jB.pointerId = 1, jB.pointerType = "mouse") : (jB.deviceType = UB.Touch, jB.pointerId = oB ?? OB, jB.pointerType = "touch");
        let yB = 0;
        return yB += DB.pollInput(BB, OB, fB.LeftClick), yB += 2 * DB.pollInput(BB, OB, fB.RightClick), yB += 4 * DB.pollInput(BB, OB, fB.MiddleClick), jB.buttons = yB, GB === fB.Move ? jB.type = "pointermove" : GB >= fB.LeftClick && GB <= fB.RightClick && (jB.type = 1 === YB ? "pointerdown" : "pointerup", jB.button = GB - 2), jB
      }
      static _CreateWheelEvent(BB, OB, GB, YB, DB, QB) {
        const oB = this._CreateMouseEvent(BB, OB, GB, YB, DB, QB);
        switch (oB.pointerId = 1, oB.type = "wheel", oB.deltaMode = FB.c.DOM_DELTA_PIXEL, oB.deltaX = 0, oB.deltaY = 0, oB.deltaZ = 0, GB) {
          case fB.MouseWheelX:
            oB.deltaX = YB;
            break;
          case fB.MouseWheelY:
            oB.deltaY = YB;
            break;
          case fB.MouseWheelZ:
            oB.deltaZ = YB
        }
        return oB
      }
      static _CreateMouseEvent(BB, OB, GB, YB, DB, QB) {
        const oB = this._CreateEvent(QB),
          jB = DB.pollInput(BB, OB, fB.Horizontal),
          yB = DB.pollInput(BB, OB, fB.Vertical);
        return QB ? (oB.movementX = 0, oB.movementY = 0, oB.offsetX = oB.movementX - QB.getBoundingClientRect().x, oB.offsetY = oB.movementY - QB.getBoundingClientRect().y) : (oB.movementX = DB.pollInput(BB, OB, 10), oB.movementY = DB.pollInput(BB, OB, 11), oB.offsetX = 0, oB.offsetY = 0), this._CheckNonCharacterKeys(oB, DB), oB.clientX = jB, oB.clientY = yB, oB.x = jB, oB.y = yB, oB.deviceType = BB, oB.deviceSlot = OB, oB.inputIndex = GB, oB
      }
      static _CreateKeyboardEvent(BB, OB, GB, YB) {
        const DB = this._CreateEvent(YB);
        return this._CheckNonCharacterKeys(DB, GB), DB.deviceType = UB.Keyboard, DB.deviceSlot = 0, DB.inputIndex = BB, DB.type = 1 === OB ? "keydown" : "keyup", DB.key = String.fromCharCode(BB), DB.keyCode = BB, DB
      }
      static _CheckNonCharacterKeys(BB, OB) {
        const GB = OB.isDeviceAvailable(UB.Keyboard),
          YB = GB && 1 === OB.pollInput(UB.Keyboard, 0, 18),
          DB = GB && 1 === OB.pollInput(UB.Keyboard, 0, 17),
          QB = GB && (1 === OB.pollInput(UB.Keyboard, 0, 91) || 1 === OB.pollInput(UB.Keyboard, 0, 92) || 1 === OB.pollInput(UB.Keyboard, 0, 93)),
          oB = GB && 1 === OB.pollInput(UB.Keyboard, 0, 16);
        BB.altKey = YB, BB.ctrlKey = DB, BB.metaKey = QB, BB.shiftKey = oB
      }
      static _CreateEvent(BB) {
        const OB = {
          preventDefault: () => {}
        };
        return OB.target = BB, OB
      }
    }
    class LB {
      constructor(BB, OB, GB) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(BB, OB, ((BB, OB, YB, DB) => {
          const QB = iB.CreateDeviceEvent(BB, OB, YB, DB, this);
          GB(BB, OB, QB)
        })) : this._createDummyNativeInput()
      }
      pollInput(BB, OB, GB) {
        return this._nativeInput.pollInput(BB, OB, GB)
      }
      isDeviceAvailable(BB) {
        return BB === UB.Mouse || BB === UB.Touch
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
    const gB = Object.keys(fB).length / 2;
    class rB {
      constructor(BB, OB, GB, DB) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = YB.j.IsSafari(), this._usingMacOs = (0, WB.g)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = BB => {}, this._keyboardUpEvent = BB => {}, this._keyboardBlurEvent = BB => {}, this._pointerMoveEvent = BB => {}, this._pointerDownEvent = BB => {}, this._pointerUpEvent = BB => {}, this._pointerCancelEvent = BB => {}, this._pointerCancelTouch = BB => {}, this._pointerLeaveEvent = BB => {}, this._pointerWheelEvent = BB => {}, this._pointerBlurEvent = BB => {}, this._pointerMacOsChromeOutEvent = BB => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, WB.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, WB.g)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = BB => {}, this._gamepadDisconnectedEvent = BB => {}, this._eventPrefix = YB.j.GetPointerPrefix(BB), this._engine = BB, this._onDeviceConnected = OB, this._onDeviceDisconnected = GB, this._onInputChanged = DB, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(BB, OB, GB) {
        const DB = this._inputs[BB][OB];
        if (!DB) throw `Unable to find device ${UB[BB]}`;
        BB >= UB.DualShock && BB <= UB.DualSense && this._updateDevice(BB, OB, GB);
        const QB = DB[GB];
        if (void 0 === QB) throw `Unable to find input ${GB} for device ${UB[BB]} in slot ${OB}`;
        return GB === fB.Move && YB.j.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), QB
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
                for (const OB in BB) {
                  const GB = BB[+OB];
                  if (GB)
                    for (let BB = 0; BB < GB.length; BB++) GB[BB] = 0
                }
          this._elementToAttachTo = BB, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const BB = navigator.getGamepads();
          for (const OB of BB) OB && this._addGamePad(OB)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(UB.Mouse, 0, 0, 0)
      }
      _addGamePad(BB) {
        const OB = this._getGamepadDeviceType(BB.id),
          GB = BB.index;
        this._gamepads = this._gamepads || new Array(BB.index + 1), this._registerDevice(OB, GB, BB.buttons.length + BB.axes.length), this._gamepads[GB] = OB
      }
      _addPointerDevice(BB, OB, GB, YB) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(BB, OB, gB);
        const DB = this._inputs[BB][OB];
        DB[0] = GB, DB[1] = YB
      }
      _registerDevice(BB, OB, GB) {
        if (void 0 === OB) throw `Unable to register device ${UB[BB]} to undefined slot.`;
        if (this._inputs[BB] || (this._inputs[BB] = {}), !this._inputs[BB][OB]) {
          const YB = new Array(GB);
          YB.fill(0), this._inputs[BB][OB] = YB, this._onDeviceConnected(BB, OB)
        }
      }
      _unregisterDevice(BB, OB) {
        this._inputs[BB][OB] && (delete this._inputs[BB][OB], this._onDeviceDisconnected(BB, OB))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(UB.Keyboard, 0, 255));
          const OB = this._inputs[UB.Keyboard][0];
          if (OB) {
            OB[BB.keyCode] = 1;
            const GB = BB;
            GB.inputIndex = BB.keyCode, this._usingMacOs && BB.metaKey && "Meta" !== BB.key && (this._metaKeys.includes(BB.keyCode) || this._metaKeys.push(BB.keyCode)), this._onInputChanged(UB.Keyboard, 0, GB)
          }
        }, this._keyboardUpEvent = BB => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(UB.Keyboard, 0, 255));
          const OB = this._inputs[UB.Keyboard][0];
          if (OB) {
            OB[BB.keyCode] = 0;
            const GB = BB;
            if (GB.inputIndex = BB.keyCode, this._usingMacOs && "Meta" === BB.key && this._metaKeys.length > 0) {
              for (const BB of this._metaKeys) {
                const GB = iB.CreateDeviceEvent(UB.Keyboard, 0, BB, 0, this, this._elementToAttachTo);
                OB[BB] = 0, this._onInputChanged(UB.Keyboard, 0, GB)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(UB.Keyboard, 0, GB)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const BB = this._inputs[UB.Keyboard][0];
            for (let OB = 0; OB < BB.length; OB++)
              if (0 !== BB[OB]) {
                BB[OB] = 0;
                const GB = iB.CreateDeviceEvent(UB.Keyboard, 0, OB, 0, this, this._elementToAttachTo);
                this._onInputChanged(UB.Keyboard, 0, GB)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, WB.g)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let YB = 0; YB < this._maxTouchPoints; YB++) this._activeTouchIds[YB] = -1;
        this._pointerMoveEvent = BB => {
          const OB = this._getPointerType(BB);
          let GB = OB === UB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (OB === UB.Touch && -1 === GB) {
            if (0 === BB.buttons) return;
            const DB = this._activeTouchIds.indexOf(-1);
            if (!(DB >= 0)) return void YB.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            GB = DB, this._activeTouchIds[DB] = BB.pointerId, this._onDeviceConnected(OB, GB)
          }
          this._inputs[OB] || (this._inputs[OB] = {}), this._inputs[OB][GB] || this._addPointerDevice(OB, GB, BB.clientX, BB.clientY);
          const DB = this._inputs[OB][GB];
          if (DB) {
            const YB = BB;
            YB.inputIndex = fB.Move, DB[fB.Horizontal] = BB.clientX, DB[fB.Vertical] = BB.clientY, OB === UB.Touch && 0 === DB[fB.LeftClick] && (DB[fB.LeftClick] = 1), void 0 === BB.pointerId && (BB.pointerId = this._mouseId), this._onInputChanged(OB, GB, YB), this._usingSafari || -1 === BB.button || (YB.inputIndex = BB.button + 2, DB[BB.button + 2] = DB[BB.button + 2] ? 0 : 1, this._onInputChanged(OB, GB, YB))
          }
        }, this._pointerDownEvent = BB => {
          const OB = this._getPointerType(BB);
          let GB = OB === UB.Mouse ? 0 : BB.pointerId;
          if (OB === UB.Touch) {
            let OB = this._activeTouchIds.indexOf(BB.pointerId);
            if (-1 === OB && (OB = this._activeTouchIds.indexOf(-1)), !(OB >= 0)) return void YB.j.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            GB = OB, this._activeTouchIds[OB] = BB.pointerId
          }
          this._inputs[OB] || (this._inputs[OB] = {}), this._inputs[OB][GB] ? OB === UB.Touch && this._onDeviceConnected(OB, GB) : this._addPointerDevice(OB, GB, BB.clientX, BB.clientY);
          const DB = this._inputs[OB][GB];
          if (DB) {
            const YB = DB[fB.Horizontal],
              oB = DB[fB.Vertical];
            if (OB === UB.Mouse) {
              if (void 0 === BB.pointerId && (BB.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (QB) {}
            } else if (BB.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(BB.pointerId)
            } catch (QB) {}
            DB[fB.Horizontal] = BB.clientX, DB[fB.Vertical] = BB.clientY, DB[BB.button + 2] = 1;
            const jB = BB;
            jB.inputIndex = BB.button + 2, this._onInputChanged(OB, GB, jB), YB === BB.clientX && oB === BB.clientY || (jB.inputIndex = fB.Move, this._onInputChanged(OB, GB, jB))
          }
        }, this._pointerUpEvent = BB => {
          const OB = this._getPointerType(BB),
            GB = OB === UB.Mouse ? 0 : this._activeTouchIds.indexOf(BB.pointerId);
          if (OB === UB.Touch) {
            if (-1 === GB) return;
            this._activeTouchIds[GB] = -1
          }
          const YB = this._inputs[OB]?.[GB];
          let DB = BB.button,
            QB = YB && 0 !== YB[DB + 2];
          if (!QB && this._isUsingFirefox && this._usingMacOs && YB && (DB = 2 === DB ? 0 : 2, QB = 0 !== YB[DB + 2]), QB) {
            const QB = YB[fB.Horizontal],
              oB = YB[fB.Vertical];
            YB[fB.Horizontal] = BB.clientX, YB[fB.Vertical] = BB.clientY, YB[DB + 2] = 0;
            const jB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), QB === BB.clientX && oB === BB.clientY || (jB.inputIndex = fB.Move, this._onInputChanged(OB, GB, jB)), jB.inputIndex = DB + 2, OB === UB.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : BB.pointerId && this._elementToAttachTo.hasPointerCapture?.(BB.pointerId) && this._elementToAttachTo.releasePointerCapture(BB.pointerId), this._onInputChanged(OB, GB, jB), OB === UB.Touch && this._onDeviceDisconnected(OB, GB)
          }
        }, this._pointerCancelTouch = BB => {
          const OB = this._activeTouchIds.indexOf(BB);
          if (-1 === OB) return;
          this._elementToAttachTo.hasPointerCapture?.(BB) && this._elementToAttachTo.releasePointerCapture(BB), this._inputs[UB.Touch][OB][fB.LeftClick] = 0;
          const GB = iB.CreateDeviceEvent(UB.Touch, OB, fB.LeftClick, 0, this, this._elementToAttachTo, BB);
          this._onInputChanged(UB.Touch, OB, GB), this._activeTouchIds[OB] = -1, this._onDeviceDisconnected(UB.Touch, OB)
        }, this._pointerCancelEvent = BB => {
          if ("mouse" === BB.pointerType) {
            const BB = this._inputs[UB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let OB = fB.LeftClick; OB <= fB.BrowserForward; OB++)
              if (1 === BB[OB]) {
                BB[OB] = 0;
                const GB = iB.CreateDeviceEvent(UB.Mouse, 0, OB, 0, this, this._elementToAttachTo);
                this._onInputChanged(UB.Mouse, 0, GB)
              }
          } else this._pointerCancelTouch(BB.pointerId)
        }, this._pointerLeaveEvent = BB => {
          "pen" === BB.pointerType && this._pointerCancelTouch(BB.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let BB = !1;
        const OB = function() {};
        try {
          const GB = Object.defineProperty({}, "passive", {
            get: function() {
              BB = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", OB, GB), this._elementToAttachTo.removeEventListener("test", OB, GB)
        } catch (GB) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(UB.Mouse)) {
            const BB = this._inputs[UB.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let OB = fB.LeftClick; OB <= fB.BrowserForward; OB++)
              if (1 === BB[OB]) {
                BB[OB] = 0;
                const GB = iB.CreateDeviceEvent(UB.Mouse, 0, OB, 0, this, this._elementToAttachTo);
                this._onInputChanged(UB.Mouse, 0, GB)
              }
          }
          if (this.isDeviceAvailable(UB.Touch)) {
            const BB = this._inputs[UB.Touch];
            for (let OB = 0; OB < this._activeTouchIds.length; OB++) {
              const GB = this._activeTouchIds[OB];
              if (this._elementToAttachTo.hasPointerCapture?.(GB) && this._elementToAttachTo.releasePointerCapture(GB), -1 !== GB && 1 === BB[OB]?.[fB.LeftClick]) {
                BB[OB][fB.LeftClick] = 0;
                const YB = iB.CreateDeviceEvent(UB.Touch, OB, fB.LeftClick, 0, this, this._elementToAttachTo, GB);
                this._onInputChanged(UB.Touch, OB, YB), this._activeTouchIds[OB] = -1, this._onDeviceDisconnected(UB.Touch, OB)
              }
            }
          }
        }, this._pointerWheelEvent = BB => {
          const OB = UB.Mouse;
          this._inputs[OB] || (this._inputs[OB] = []), this._inputs[OB][0] || (this._pointerActive = !0, this._registerDevice(OB, 0, gB));
          const GB = this._inputs[OB][0];
          if (GB) {
            GB[fB.MouseWheelX] = BB.deltaX || 0, GB[fB.MouseWheelY] = BB.deltaY || BB.wheelDelta || 0, GB[fB.MouseWheelZ] = BB.deltaZ || 0;
            const YB = BB;
            void 0 === BB.pointerId && (BB.pointerId = this._mouseId), 0 !== GB[fB.MouseWheelX] && (YB.inputIndex = fB.MouseWheelX, this._onInputChanged(OB, 0, YB)), 0 !== GB[fB.MouseWheelY] && (YB.inputIndex = fB.MouseWheelY, this._onInputChanged(OB, 0, YB)), 0 !== GB[fB.MouseWheelZ] && (YB.inputIndex = fB.MouseWheelZ, this._onInputChanged(OB, 0, YB))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = BB => {
          BB.buttons > 1 && this._pointerCancelEvent(BB)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!BB && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(UB.Mouse)) {
            const BB = this._inputs[UB.Mouse][0];
            BB[fB.MouseWheelX] = 0, BB[fB.MouseWheelY] = 0, BB[fB.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = BB => {
          this._addGamePad(BB.gamepad)
        }, this._gamepadDisconnectedEvent = BB => {
          if (this._gamepads) {
            const OB = this._getGamepadDeviceType(BB.gamepad.id),
              GB = BB.gamepad.index;
            this._unregisterDevice(OB, GB), delete this._gamepads[GB]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(BB, OB, GB) {
        const YB = navigator.getGamepads()[OB];
        if (YB && BB === this._gamepads[OB]) {
          const DB = this._inputs[BB][OB];
          GB >= YB.buttons.length ? DB[GB] = YB.axes[GB - YB.buttons.length].valueOf() : DB[GB] = YB.buttons[GB].value
        }
      }
      _getGamepadDeviceType(BB) {
        return -1 !== BB.indexOf("054c") ? -1 !== BB.indexOf("0ce6") ? UB.DualSense : UB.DualShock : -1 !== BB.indexOf("Xbox One") || -1 !== BB.search("Xbox 360") || -1 !== BB.search("xinput") || -1 !== BB.indexOf("045e") && -1 === BB.indexOf("Surface Dock") ? UB.Xbox : -1 !== BB.indexOf("057e") ? UB.Switch : UB.Generic
      }
      _getPointerType(BB) {
        let OB = UB.Mouse;
        return ("touch" === BB.pointerType || "pen" === BB.pointerType || BB.touches) && (OB = UB.Touch), OB
      }
    }
    class XB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = OB, this.deviceSlot = GB, this.onInputChangedObservable = new oB.b, this._deviceInputSystem = BB
      }
      getInput(BB) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, BB)
      }
    }
    class wB {
      constructor(BB) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = BB => {
          for (let OB = 0; OB < this._devices.length; OB++) {
            const GB = this._devices[OB];
            for (const YB in GB) {
              const GB = +YB;
              BB._addDevice(new XB(this._deviceInputSystem, OB, GB))
            }
          }
          this._registeredManagers.push(BB)
        }, this.unregisterManager = BB => {
          const OB = this._registeredManagers.indexOf(BB);
          OB > -1 && this._registeredManagers.splice(OB, 1)
        };
        const OB = Object.keys(UB).length / 2;
        this._devices = new Array(OB);
        const GB = (BB, OB) => {
            this._devices[BB] || (this._devices[BB] = new Array), this._devices[BB][OB] || (this._devices[BB][OB] = OB);
            for (const GB of this._registeredManagers) {
              const YB = new XB(this._deviceInputSystem, BB, OB);
              GB._addDevice(YB)
            }
          },
          YB = (BB, OB) => {
            this._devices[BB]?.[OB] && delete this._devices[BB][OB];
            for (const GB of this._registeredManagers) GB._removeDevice(BB, OB)
          },
          DB = (BB, OB, GB) => {
            if (GB)
              for (const YB of this._registeredManagers) YB._onInputChanged(BB, OB, GB)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new LB(GB, YB, DB) : this._deviceInputSystem = new rB(BB, GB, YB, DB)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class EB {
      getDeviceSource(BB, OB) {
        if (void 0 === OB) {
          if (void 0 === this._firstDevice[BB]) return null;
          OB = this._firstDevice[BB]
        }
        return this._devices[BB] && void 0 !== this._devices[BB][OB] ? this._devices[BB][OB] : null
      }
      getDeviceSources(BB) {
        return this._devices[BB] ? this._devices[BB].filter((BB => !!BB)) : []
      }
      constructor(BB) {
        const OB = Object.keys(UB).length / 2;
        this._devices = new Array(OB), this._firstDevice = new Array(OB), this._engine = BB, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new wB(BB)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new oB.b((BB => {
          for (const OB of this._devices)
            if (OB)
              for (const GB of OB) GB && this.onDeviceConnectedObservable.notifyObserver(BB, GB)
        })), this.onDeviceDisconnectedObservable = new oB.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = BB.lF.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.lF.remove(this._onDisposeObserver)
      }
      _addDevice(BB) {
        this._devices[BB.deviceType] || (this._devices[BB.deviceType] = []), this._devices[BB.deviceType][BB.deviceSlot] || (this._devices[BB.deviceType][BB.deviceSlot] = BB, this._updateFirstDevices(BB.deviceType)), this.onDeviceConnectedObservable.notifyObservers(BB)
      }
      _removeDevice(BB, OB) {
        const GB = this._devices[BB]?.[OB];
        this.onDeviceDisconnectedObservable.notifyObservers(GB), this._devices[BB]?.[OB] && delete this._devices[BB][OB], this._updateFirstDevices(BB)
      }
      _onInputChanged(BB, OB, GB) {
        this._devices[BB]?.[OB]?.onInputChangedObservable.notifyObservers(GB)
      }
      _updateFirstDevices(BB) {
        switch (BB) {
          case UB.Keyboard:
          case UB.Mouse:
            this._firstDevice[BB] = 0;
            break;
          case UB.Touch:
          case UB.DualSense:
          case UB.DualShock:
          case UB.Xbox:
          case UB.Switch:
          case UB.Generic: {
            delete this._firstDevice[BB];
            const OB = this._devices[BB];
            if (OB)
              for (let GB = 0; GB < OB.length; GB++)
                if (OB[GB]) {
                  this._firstDevice[BB] = GB;
                  break
                } break
          }
        }
      }
    }
    var cB = GB(41205);
    class hB {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get GM() {
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
      set GM(BB) {
        this._doubleClick = BB
      }
      set hasSwiped(BB) {
        this._hasSwiped = BB
      }
      set ignore(BB) {
        this._ignore = BB
      }
    }
    class aB {
      constructor(BB) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new MB.o(0, 0), this._previousStartingPointerPosition = new MB.o(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = BB || AB.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(BB) {
        return this._meshUnderPointerId[BB] || null
      }
      get unTranslatedPointer() {
        return new MB.o(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const OB = this._scene.Lp().getInputElementClientRect();
        OB && (this._pointerX = BB.clientX - OB.left, this._pointerY = BB.clientY - OB.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(BB, OB) {
        const GB = this._scene,
          YB = GB.Lp(),
          DB = YB.getInputElement();
        DB && (DB.tabIndex = YB.canvasTabIndex, GB.doNotHandleCursors || (DB.style.cursor = GB.defaultCursor)), this._setCursorAndPointerOverMesh(BB, OB, GB);
        for (const jB of GB._pointerMoveStage) {
          BB = BB || this._pickMove(OB);
          const GB = !!BB?.pickedMesh;
          BB = jB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, GB, DB)
        }
        const QB = OB.inputIndex >= fB.MouseWheelX && OB.inputIndex <= fB.MouseWheelZ ? SB.c.POINTERWHEEL : SB.c.POINTERMOVE;
        let oB;
        GB.onPointerMove && (BB = BB || this._pickMove(OB), GB.onPointerMove(OB, BB, QB)), BB ? (oB = new SB.f(QB, OB, BB), this._setRayOnPointerInfo(BB, OB)) : (oB = new SB.f(QB, OB, null, this), this._movePointerInfo = oB), GB.onPointerObservable.hasObservers() && GB.onPointerObservable.notifyObservers(oB, QB)
      }
      _setRayOnPointerInfo(BB, OB) {
        const GB = this._scene;
        BB && cB.c._IsPickingAvailable && (BB.ray || (BB.ray = GB.createPickingRay(OB.offsetX, OB.offsetY, MB.d.Identity(), GB.activeCamera)))
      }
      _addCameraPointerObserver(BB, OB) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(BB, OB)
      }
      _removeCameraPointerObserver(BB) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(BB)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(BB, OB, GB) {
        const YB = this._scene,
          DB = new SB.d(GB, OB, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return BB && (DB.originalPickingInfo = BB, DB.ray = BB.ray, "xr-near" === OB.pointerType && BB.originMesh && (DB.nearInteractionPickingInfo = BB)), YB.onPrePointerObservable.notifyObservers(DB, GB), !!DB.skipOnPointerObservable
      }
      _pickMove(BB) {
        const OB = this._scene,
          GB = OB.pl(this._unTranslatedPointerX, this._unTranslatedPointerY, OB.pointerMovePredicate, OB.pointerMoveFastCheck, OB.cameraToUseForPointers, OB.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(GB, BB, OB), GB
      }
      _updateMeshUnderPointer() {
        const BB = this._scene;
        if (!BB.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || BB.skipPointerMovePicking || !BB.cameraToUseForPointers && !BB.activeCamera) return;
        this._ensurePointerMovePredicate();
        const OB = this._pointerX,
          GB = this._pointerY,
          YB = this._unTranslatedPointerX,
          DB = this._unTranslatedPointerY;
        for (const QB of this._latestPointerMoveEvents.values()) this._pointerX = QB.pointerX, this._pointerY = QB.pointerY, this._unTranslatedPointerX = QB.unTranslatedPointerX, this._unTranslatedPointerY = QB.unTranslatedPointerY, this._pickMove(QB.event);
        this._pointerX = OB, this._pointerY = GB, this._unTranslatedPointerX = YB, this._unTranslatedPointerY = DB
      }
      _ensurePointerMovePredicate() {
        const BB = this._scene;
        BB.pointerMovePredicate || (BB.pointerMovePredicate = OB => (OB._isPointerMovePickable ?? OB.bq) && OB.isVisible && OB.isReady() && OB.isEnabled() && (OB.enablePointerMoveEvents || BB.constantlyUpdateMeshUnderPointer || null !== OB._getActionManagerForTrigger()) && (!BB.cameraToUseForPointers || 0 !== (BB.cameraToUseForPointers.layerMask & OB.layerMask)))
      }
      _setCursorAndPointerOverMesh(BB, OB, GB) {
        const YB = GB.Lp().getInputElement();
        if (BB?.pickedMesh) {
          if (this.setPointerOverMesh(BB.pickedMesh, OB.pointerId, BB, OB), !GB.doNotHandleCursors && YB && this._pointerOverMesh) {
            const BB = this._pointerOverMesh._getActionManagerForTrigger();
            BB && BB.hasPointerTriggers && (YB.style.cursor = BB.hoverCursor || GB.hoverCursor)
          }
        } else this.setPointerOverMesh(null, OB.pointerId, BB, OB)
      }
      simulatePointerMove(BB, OB) {
        const GB = new PointerEvent("pointermove", OB);
        GB.inputIndex = fB.Move, this._checkPrePointerObservable(BB, GB, SB.c.POINTERMOVE) || this._processPointerMove(BB, GB)
      }
      simulatePointerDown(BB, OB) {
        const GB = new PointerEvent("pointerdown", OB);
        GB.inputIndex = GB.button + 2, this._checkPrePointerObservable(BB, GB, SB.c.POINTERDOWN) || this._processPointerDown(BB, GB)
      }
      _processPointerDown(BB, OB) {
        const GB = this._scene;
        if (BB?.pickedMesh) {
          this._pickedDownMesh = BB.pickedMesh;
          const YB = BB.pickedMesh._getActionManagerForTrigger();
          if (YB) {
            if (YB.hasPickTriggers) switch (YB.processTrigger(5, new pB(BB.pickedMesh, GB.pointerX, GB.pointerY, BB.pickedMesh, OB, BB)), OB.button) {
              case 0:
                YB.processTrigger(2, new pB(BB.pickedMesh, GB.pointerX, GB.pointerY, BB.pickedMesh, OB, BB));
                break;
              case 1:
                YB.processTrigger(4, new pB(BB.pickedMesh, GB.pointerX, GB.pointerY, BB.pickedMesh, OB, BB));
                break;
              case 2:
                YB.processTrigger(3, new pB(BB.pickedMesh, GB.pointerX, GB.pointerY, BB.pickedMesh, OB, BB))
            }
            YB.hasSpecificTrigger(8) && window.setTimeout((() => {
              const BB = GB.pl(this._unTranslatedPointerX, this._unTranslatedPointerY, (BB => BB.bq && BB.isVisible && BB.isReady() && BB.actionManager && BB.actionManager.hasSpecificTrigger(8) && BB === this._pickedDownMesh), !1, GB.cameraToUseForPointers);
              BB?.pickedMesh && YB && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > aB.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, YB.processTrigger(8, pB.CreateNew(BB.pickedMesh, OB)))
            }), aB.LongPressDelay)
          }
        } else
          for (const QB of GB._pointerDownStage) BB = QB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, OB, !1);
        let YB;
        const DB = SB.c.POINTERDOWN;
        BB ? (GB.onPointerDown && GB.onPointerDown(OB, BB, DB), YB = new SB.f(DB, OB, BB), this._setRayOnPointerInfo(BB, OB)) : YB = new SB.f(DB, OB, null, this), GB.onPointerObservable.hasObservers() && GB.onPointerObservable.notifyObservers(YB, DB)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(BB, OB, GB) {
        const YB = new PointerEvent("pointerup", OB);
        YB.inputIndex = fB.Move;
        const DB = new hB;
        GB ? DB.GM = !0 : DB.singleClick = !0, this._checkPrePointerObservable(BB, YB, SB.c.POINTERUP) || this._processPointerUp(BB, YB, DB)
      }
      _processPointerUp(BB, OB, GB) {
        const YB = this._scene;
        if (BB?.pickedMesh) {
          if (this._pickedUpMesh = BB.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (YB.onPointerPick && YB.onPointerPick(OB, BB), GB.singleClick && !GB.ignore && YB.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const GB = SB.c.POINTERPICK,
              DB = new SB.f(GB, OB, BB);
            this._setRayOnPointerInfo(BB, OB), YB.onPointerObservable.notifyObservers(DB, GB)
          }
          const DB = BB.pickedMesh._getActionManagerForTrigger();
          if (DB && !GB.ignore) {
            DB.processTrigger(7, pB.CreateNew(BB.pickedMesh, OB, BB)), !GB.hasSwiped && GB.singleClick && DB.processTrigger(1, pB.CreateNew(BB.pickedMesh, OB, BB));
            const YB = BB.pickedMesh._getActionManagerForTrigger(6);
            GB.GM && YB && YB.processTrigger(6, pB.CreateNew(BB.pickedMesh, OB, BB))
          }
        } else if (!GB.ignore)
          for (const DB of YB._pointerUpStage) BB = DB.action(this._unTranslatedPointerX, this._unTranslatedPointerY, BB, OB, GB.GM);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const BB = this._pickedDownMesh._getActionManagerForTrigger(16);
          BB && BB.processTrigger(16, pB.CreateNew(this._pickedDownMesh, OB))
        }
        if (!GB.ignore) {
          const DB = new SB.f(SB.c.POINTERUP, OB, BB);
          if (this._setRayOnPointerInfo(BB, OB), YB.onPointerObservable.notifyObservers(DB, SB.c.POINTERUP), YB.onPointerUp && YB.onPointerUp(OB, BB, SB.c.POINTERUP), !GB.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let DB = 0;
            if (GB.singleClick ? DB = SB.c.POINTERTAP : GB.GM && (DB = SB.c.POINTERDOUBLETAP), DB) {
              const GB = new SB.f(DB, OB, BB);
              YB.onPointerObservable.hasObservers() && YB.onPointerObservable.hasSpecificMask(DB) && YB.onPointerObservable.notifyObservers(GB, DB)
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
          OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const DB = this._scene,
          QB = DB.Lp();
        YB || (YB = QB.getInputElement()), this._alreadyAttached && this.detachControl(), YB && (this._alreadyAttachedTo = YB), this._deviceSourceManager = new EB(QB), this._initActionManager = BB => {
          if (!this._meshPickProceed) {
            const OB = DB.skipPointerUpPicking || 0 === DB._registeredActions && !this._checkForPicking() && !DB.onPointerUp ? null : DB.pl(this._unTranslatedPointerX, this._unTranslatedPointerY, DB.pointerUpPredicate, DB.pointerUpFastCheck, DB.cameraToUseForPointers, DB.pointerUpTrianglePredicate);
            this._currentPickResult = OB, OB && (BB = OB.hit && OB.pickedMesh ? OB.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return BB
        }, this._delayedSimpleClick = (BB, OB, GB) => {
          if ((Date.now() - this._previousStartingPointerTime > aB.DoubleClickDelay && !this._doubleClickOccured || BB !== this._previousButtonPressed) && (this._doubleClickOccured = !1, OB.singleClick = !0, OB.ignore = !1, this._delayedClicks[BB])) {
            const OB = this._delayedClicks[BB].evt,
              GB = SB.c.POINTERTAP,
              YB = new SB.f(GB, OB, this._currentPickResult);
            DB.onPointerObservable.hasObservers() && DB.onPointerObservable.hasSpecificMask(GB) && DB.onPointerObservable.notifyObservers(YB, GB), this._delayedClicks[BB] = null
          }
        }, this._initClickEvent = (BB, OB, GB, YB) => {
          const DB = new hB;
          this._currentPickResult = null;
          let QB = null,
            oB = BB.hasSpecificMask(SB.c.POINTERPICK) || OB.hasSpecificMask(SB.c.POINTERPICK) || BB.hasSpecificMask(SB.c.POINTERTAP) || OB.hasSpecificMask(SB.c.POINTERTAP) || BB.hasSpecificMask(SB.c.POINTERDOUBLETAP) || OB.hasSpecificMask(SB.c.POINTERDOUBLETAP);
          !oB && nB && (QB = this._initActionManager(QB, DB), QB && (oB = QB.hasPickTriggers));
          let jB = !1;
          if (oB = oB && !this._isMultiTouchGesture, oB) {
            const oB = GB.button;
            if (DB.hasSwiped = this._isPointerSwiping(), !DB.hasSwiped) {
              let yB = !aB.ExclusiveDoubleClickMode;
              if (yB || (yB = !BB.hasSpecificMask(SB.c.POINTERDOUBLETAP) && !OB.hasSpecificMask(SB.c.POINTERDOUBLETAP), yB && !nB.HasSpecificTrigger(6) && (QB = this._initActionManager(QB, DB), QB && (yB = !QB.hasSpecificTrigger(6)))), yB)(Date.now() - this._previousStartingPointerTime > aB.DoubleClickDelay || oB !== this._previousButtonPressed) && (DB.singleClick = !0, YB(DB, this._currentPickResult), jB = !0);
              else {
                const BB = {
                  evt: GB,
                  clickInfo: DB,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, oB, DB, YB), aB.DoubleClickDelay)
                };
                this._delayedClicks[oB] = BB
              }
              let JB = BB.hasSpecificMask(SB.c.POINTERDOUBLETAP) || OB.hasSpecificMask(SB.c.POINTERDOUBLETAP);
              !JB && nB.HasSpecificTrigger(6) && (QB = this._initActionManager(QB, DB), QB && (JB = QB.hasSpecificTrigger(6))), JB && (oB === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < aB.DoubleClickDelay && !this._doubleClickOccured ? (DB.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = oB, aB.ExclusiveDoubleClickMode ? (this._delayedClicks[oB] && (clearTimeout(this._delayedClicks[oB]?.timeoutId), this._delayedClicks[oB] = null), YB(DB, this._previousPickResult)) : YB(DB, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, DB.GM = !0, DB.ignore = !1, aB.ExclusiveDoubleClickMode && this._delayedClicks[oB] && (clearTimeout(this._delayedClicks[oB]?.timeoutId), this._delayedClicks[oB] = null), YB(DB, this._currentPickResult)), jB = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = oB))
            }
          }
          jB || YB(DB, this._currentPickResult)
        }, this._onPointerMove = BB => {
          if (this._updatePointerPosition(BB), this._latestPointerMoveEvents.set(BB.pointerId, {
              event: BB,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > aB.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > aB.DragMovementThreshold), QB.isPointerLock && QB._verifyPointerLock(), this._checkPrePointerObservable(null, BB, BB.inputIndex >= fB.MouseWheelX && BB.inputIndex <= fB.MouseWheelZ ? SB.c.POINTERWHEEL : SB.c.POINTERMOVE)) return;
          if (!DB.cameraToUseForPointers && !DB.activeCamera) return;
          if (DB.skipPointerMovePicking) return void this._processPointerMove(new lB.e, BB);
          this._ensurePointerMovePredicate();
          const OB = DB._registeredActions > 0 || DB.constantlyUpdateMeshUnderPointer ? this._pickMove(BB) : null;
          this._processPointerMove(OB, BB)
        }, this._onPointerDown = BB => {
          const OB = this._activePointerIds.indexOf(-1);
          if (-1 === OB ? this._activePointerIds.push(BB.pointerId) : this._activePointerIds[OB] = BB.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, aB.ExclusiveDoubleClickMode)
            for (let YB = 0; YB < this._delayedClicks.length; YB++)
              if (this._delayedClicks[YB])
                if (BB.button === YB) clearTimeout(this._delayedClicks[YB]?.timeoutId);
                else {
                  const BB = this._delayedClicks[YB].clickInfo;
                  this._doubleClickOccured = !1, BB.singleClick = !0, BB.ignore = !1;
                  const OB = this._delayedClicks[YB].evt,
                    GB = SB.c.POINTERTAP,
                    QB = new SB.f(GB, OB, this._currentPickResult);
                  DB.onPointerObservable.hasObservers() && DB.onPointerObservable.hasSpecificMask(GB) && DB.onPointerObservable.notifyObservers(QB, GB), this._delayedClicks[YB] = null
                } if (this._updatePointerPosition(BB), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = BB.button), DB.preventDefaultOnPointerDown && YB && (BB.preventDefault(), YB.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, BB, SB.c.POINTERDOWN)) return;
          if (!DB.cameraToUseForPointers && !DB.activeCamera) return;
          let GB;
          this._pointerCaptures[BB.pointerId] = !0, DB.pointerDownPredicate || (DB.pointerDownPredicate = BB => BB.bq && BB.isVisible && BB.isReady() && BB.isEnabled() && (!DB.cameraToUseForPointers || 0 !== (DB.cameraToUseForPointers.layerMask & BB.layerMask))), this._pickedDownMesh = null, GB = DB.skipPointerDownPicking || 0 === DB._registeredActions && !this._checkForPicking() && !DB.onPointerDown ? new lB.e : DB.pl(this._unTranslatedPointerX, this._unTranslatedPointerY, DB.pointerDownPredicate, DB.pointerDownFastCheck, DB.cameraToUseForPointers, DB.pointerDownTrianglePredicate), this._processPointerDown(GB, BB)
        }, this._onPointerUp = BB => {
          const OB = this._activePointerIds.indexOf(BB.pointerId); - 1 !== OB && (this._activePointerIds[OB] = -1, this._activePointerIdsCount--, "touch" === BB.pointerType && this._latestPointerMoveEvents.delete(BB.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(BB), DB.preventDefaultOnPointerUp && YB && (BB.preventDefault(), YB.focus()), this._initClickEvent(DB.onPrePointerObservable, DB.onPointerObservable, BB, ((OB, GB) => {
            if (DB.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !OB.ignore)) {
              if (this._checkPrePointerObservable(null, BB, SB.c.POINTERUP)) return this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1));
              OB.hasSwiped || (OB.singleClick && DB.onPrePointerObservable.hasSpecificMask(SB.c.POINTERTAP) && this._checkPrePointerObservable(null, BB, SB.c.POINTERTAP) && (this._skipPointerTap = !0), OB.GM && DB.onPrePointerObservable.hasSpecificMask(SB.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, BB, SB.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[BB.pointerId] ? (0 === BB.buttons && (this._pointerCaptures[BB.pointerId] = !1), (DB.cameraToUseForPointers || DB.activeCamera) && (DB.pointerUpPredicate || (DB.pointerUpPredicate = BB => BB.bq && BB.isVisible && BB.isReady() && BB.isEnabled() && (!DB.cameraToUseForPointers || 0 !== (DB.cameraToUseForPointers.layerMask & BB.layerMask))), !this._meshPickProceed && (nB && nB.HasTriggers || this._checkForPicking() || DB.onPointerUp) && this._initActionManager(null, OB), GB || (GB = this._currentPickResult), this._processPointerUp(GB, BB, OB), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === BB.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = BB => {
          const OB = IB.d.KEYDOWN;
          if (DB.onPreKeyboardObservable.hasObservers()) {
            const GB = new IB.h(OB, BB);
            if (DB.onPreKeyboardObservable.notifyObservers(GB, OB), GB.skipOnKeyboardObservable) return
          }
          if (DB.onKeyboardObservable.hasObservers()) {
            const GB = new IB.l(OB, BB);
            DB.onKeyboardObservable.notifyObservers(GB, OB)
          }
          DB.actionManager && DB.actionManager.processTrigger(14, pB.CreateNewFromScene(DB, BB))
        }, this._onKeyUp = BB => {
          const OB = IB.d.KEYUP;
          if (DB.onPreKeyboardObservable.hasObservers()) {
            const GB = new IB.h(OB, BB);
            if (DB.onPreKeyboardObservable.notifyObservers(GB, OB), GB.skipOnKeyboardObservable) return
          }
          if (DB.onKeyboardObservable.hasObservers()) {
            const GB = new IB.l(OB, BB);
            DB.onKeyboardObservable.notifyObservers(GB, OB)
          }
          DB.actionManager && DB.actionManager.processTrigger(15, pB.CreateNewFromScene(DB, BB))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((YB => {
          YB.deviceType === UB.Mouse ? YB.onInputChangedObservable.add((DB => {
            this._originMouseEvent = DB, DB.inputIndex === fB.LeftClick || DB.inputIndex === fB.MiddleClick || DB.inputIndex === fB.RightClick || DB.inputIndex === fB.BrowserBack || DB.inputIndex === fB.BrowserForward ? OB && 1 === YB.getInput(DB.inputIndex) ? this._onPointerDown(DB) : BB && 0 === YB.getInput(DB.inputIndex) && this._onPointerUp(DB) : GB && (DB.inputIndex === fB.Move ? this._onPointerMove(DB) : DB.inputIndex !== fB.MouseWheelX && DB.inputIndex !== fB.MouseWheelY && DB.inputIndex !== fB.MouseWheelZ || this._onPointerMove(DB))
          })) : YB.deviceType === UB.Touch ? YB.onInputChangedObservable.add((DB => {
            DB.inputIndex === fB.LeftClick && (OB && 1 === YB.getInput(DB.inputIndex) ? (this._onPointerDown(DB), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : BB && 0 === YB.getInput(DB.inputIndex) && (this._onPointerUp(DB), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), GB && DB.inputIndex === fB.Move && this._onPointerMove(DB)
          })) : YB.deviceType === UB.Keyboard && YB.onInputChangedObservable.add((BB => {
            "keydown" === BB.type ? this._onKeyDown(BB) : "keyup" === BB.type && this._onKeyUp(BB)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[OB] === BB && (!BB || !BB._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const DB = this._meshUnderPointerId[OB];
        let QB;
        DB && (QB = DB._getActionManagerForTrigger(10), QB && QB.processTrigger(10, new pB(DB, this._pointerX, this._pointerY, BB, YB, {
          pointerId: OB
        }))), BB ? (this._meshUnderPointerId[OB] = BB, this._pointerOverMesh = BB, QB = BB._getActionManagerForTrigger(9), QB && QB.processTrigger(9, new pB(BB, this._pointerX, this._pointerY, BB, YB, {
          pointerId: OB,
          pickResult: GB
        }))) : (delete this._meshUnderPointerId[OB], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: BB,
          pointerId: OB
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(BB) {
        this._pointerOverMesh === BB && (this._pointerOverMesh = null), this._pickedDownMesh === BB && (this._pickedDownMesh = null), this._pickedUpMesh === BB && (this._pickedUpMesh = null);
        for (const OB in this._meshUnderPointerId) this._meshUnderPointerId[OB] === BB && delete this._meshUnderPointerId[OB]
      }
    }
    aB.DragMovementThreshold = 10, aB.LongPressDelay = 500, aB.DoubleClickDelay = 300, aB.ExclusiveDoubleClickMode = !1;
    var eB = GB(40950),
      TB = GB(37894),
      bB = GB(38424);
    class CB {
      static get UniqueId() {
        const BB = this._UniqueIdCounter;
        return this._UniqueIdCounter++, BB
      }
    }
    CB._UniqueIdCounter = 1;
    var HB = GB(41035),
      vB = GB(41211),
      sB = GB(37785);
    class xB {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var tB, BO, OO, GO, YO, DO, QO, oO, jO, yO, JO, MO, PO, zO, lO, pO, qO, ZO, NO, RO, WO, AO, VO, SO, nO, UO, fO, kO, dO, KO, uO, mO, IO, FO, iO, LO, gO, rO, XO, wO, EO, cO, hO, aO, eO, TO, bO, CO, HO, vO, sO, xO, tO, BG = GB(39366),
      OG = GB(37823);
    const GG = new MB.t,
      YG = new MB.t;
    var DG;
    ! function(BB) {
      BB[BB.BackwardCompatible = 0] = "BackwardCompatible", BB[BB.Intermediate = 1] = "Intermediate", BB[BB.Aggressive = 2] = "Aggressive"
    }(DG || (DG = {}));
    class QG {
      static DefaultMaterialFactory(BB) {
        throw (0, VB.j)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, VB.j)("DefaultCollisionCoordinator")
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
        for (const OB of this.skeletons) BB = BB.concat(OB.bones);
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
        return aB.DragMovementThreshold
      }
      static set DragMovementThreshold(BB) {
        aB.DragMovementThreshold = BB
      }
      static get LongPressDelay() {
        return aB.LongPressDelay
      }
      static set LongPressDelay(BB) {
        aB.LongPressDelay = BB
      }
      static get DoubleClickDelay() {
        return aB.DoubleClickDelay
      }
      static set DoubleClickDelay(BB) {
        aB.DoubleClickDelay = BB
      }
      static get ExclusiveDoubleClickMode() {
        return aB.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(BB) {
        aB.ExclusiveDoubleClickMode = BB
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? MB.r.ZeroReadOnly
      }
      bindEyePosition(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const YB = this._eyePosition,
          DB = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          QB = this.floatingOriginOffset,
          oB = GG.set(YB.x, YB.y, YB.z, DB ? -1 : 1),
          jB = oB.subtractFromFloatsToRef(QB.x, QB.y, QB.z, 0, YG);
        return BB && (GB ? BB.setFloat3(OB, jB.x, jB.y, jB.z) : BB.setVector4(OB, jB)), oB
      }
      finalizeSceneUbo() {
        const BB = this.getSceneUniformBuffer(),
          OB = this.bindEyePosition(null),
          GB = this.floatingOriginOffset;
        return BB.updateFloat4("vEyePosition", OB.x - GB.x, OB.y - GB.y, OB.z - GB.z, OB.w), BB.update(), BB
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), BB && (this._unObserveActiveCameras = (0, sB.l)(BB, (() => {
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
        return QG.DefaultMaterialFactory !== QG._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = QG.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = QG.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      pDB(BB) {
        this._components.push(BB), this._transientComponents.push(BB);
        const OB = BB;
        OB.addFromContainer && OB.serialize && this._serializableComponents.push(OB)
      }
      _getComponent(BB) {
        for (const OB of this._components)
          if (OB.name === BB) return OB;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(BB, OB) {
        this._inputManager = new aB(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new TB.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new oB.b, this.ambientColor = new TB.c(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new oB.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.rW = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.lF = new oB.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new oB.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new oB.b, this.onAfterRenderCameraObservable = new oB.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new oB.b, this.onAfterAnimationsObservable = new oB.b, this.onBeforeDrawPhaseObservable = new oB.b, this.onAfterDrawPhaseObservable = new oB.b, this.onReadyObservable = new oB.b, this.onBeforeCameraRenderObservable = new oB.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new oB.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new oB.b, this.onAfterActiveMeshesEvaluationObservable = new oB.b, this.onBeforeParticlesRenderingObservable = new oB.b, this.onAfterParticlesRenderingObservable = new oB.b, this.onDataLoadedObservable = new oB.b, this.onNewCameraAddedObservable = new oB.b, this.onCameraRemovedObservable = new oB.b, this.onNewLightAddedObservable = new oB.b, this.onLightRemovedObservable = new oB.b, this.onNewGeometryAddedObservable = new oB.b, this.onGeometryRemovedObservable = new oB.b, this.onNewTransformNodeAddedObservable = new oB.b, this.onTransformNodeRemovedObservable = new oB.b, this.onNewMeshAddedObservable = new oB.b, this.onMeshRemovedObservable = new oB.b, this.onNewSkeletonAddedObservable = new oB.b, this.onSkeletonRemovedObservable = new oB.b, this.onNewParticleSystemAddedObservable = new oB.b, this.onParticleSystemRemovedObservable = new oB.b, this.onNewAnimationGroupAddedObservable = new oB.b, this.onAnimationGroupRemovedObservable = new oB.b, this.onNewMaterialAddedObservable = new oB.b, this.onNewMultiMaterialAddedObservable = new oB.b, this.onMaterialRemovedObservable = new oB.b, this.onMultiMaterialRemovedObservable = new oB.b, this.onNewTextureAddedObservable = new oB.b, this.onTextureRemovedObservable = new oB.b, this.onNewFrameGraphAddedObservable = new oB.b, this.onFrameGraphRemovedObservable = new oB.b, this.onNewObjectRendererAddedObservable = new oB.b, this.onObjectRendererRemovedObservable = new oB.b, this.onNewPostProcessAddedObservable = new oB.b, this.onPostProcessRemovedObservable = new oB.b, this.onNewEffectLayerAddedObservable = new oB.b, this.onEffectLayerRemovedObservable = new oB.b, this.onBeforeRenderTargetsRenderObservable = new oB.b, this.onAfterRenderTargetsRenderObservable = new oB.b, this.onBeforeStepObservable = new oB.b, this.onAfterStepObservable = new oB.b, this.onActiveCameraChanged = new oB.b, this.onActiveCamerasChanged = new oB.b, this.onBeforeRenderingGroupObservable = new oB.b, this.onAfterRenderingGroupObservable = new oB.b, this.onMeshImportedObservable = new oB.b, this.onAnimationFileImportedObservable = new oB.b, this.onEnvironmentTextureChangedObservable = new oB.b, this.onMeshUnderPointerUpdatedObservable = new oB.b, this._registeredForLateAnimationBindings = new jB.b(256), this._pointerPickingConfiguration = new xB, this.onPrePointerObservable = new oB.b, this.onPointerObservable = new oB.b, this.onPreKeyboardObservable = new oB.b, this.onKeyboardObservable = new oB.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = QG.FOGMODE_NONE, this.fogColor = new TB.c(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.wT = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new MB.r(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new jB.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new eB.b, this._activeIndices = new eB.b, this._activeParticles = new eB.b, this._activeBones = new eB.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new jB.d(256), this._processedMaterials = new jB.d(256), this._renderTargets = new jB.b(256), this._materialsRenderTargets = new jB.b(256), this._activeParticleSystems = new jB.d(256), this._activeSkeletons = new jB.b(32), this._softwareSkinnedMeshes = new jB.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = MB.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = RB.c.Create(), this._beforeClearStage = RB.c.Create(), this._beforeRenderTargetClearStage = RB.c.Create(), this._gatherRenderTargetsStage = RB.c.Create(), this._gatherActiveCameraRenderTargetsStage = RB.c.Create(), this._isReadyForMeshStage = RB.c.Create(), this._beforeEvaluateActiveMeshStage = RB.c.Create(), this._evaluateSubMeshStage = RB.c.Create(), this._preActiveMeshStage = RB.c.Create(), this._cameraDrawRenderTargetStage = RB.c.Create(), this._beforeCameraDrawStage = RB.c.Create(), this._beforeRenderTargetDrawStage = RB.c.Create(), this._beforeRenderingGroupDrawStage = RB.c.Create(), this._beforeRenderingMeshStage = RB.c.Create(), this._afterRenderingMeshStage = RB.c.Create(), this._afterRenderingGroupDrawStage = RB.c.Create(), this._afterCameraDrawStage = RB.c.Create(), this._afterCameraPostProcessStage = RB.c.Create(), this._afterRenderTargetDrawStage = RB.c.Create(), this._afterRenderTargetPostProcessStage = RB.c.Create(), this._afterRenderStage = RB.c.Create(), this._pointerMoveStage = RB.c.Create(), this._pointerDownStage = RB.c.Create(), this._pointerUpStage = RB.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new oB.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const GB = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...OB
        };
        this.defaultCameraLayerMask = GB.defaultCameraLayerMask, this.defaultRenderableLayerMask = GB.defaultRenderableLayerMask, BB = this._engine = BB || AB.b.LastCreatedEngine, GB.virtual ? BB._virtualScenes.push(this) : (AB.b._LastCreatedScene = this, BB.scenes.push(this)), (BB.getCreationOptions().useLargeWorldRendering || OB?.useFloatingOrigin) && ((0, ZB.f)(), this._floatingOriginScene = this, ZB.c.JF = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new NB.b(this), qB.c && (this.postProcessManager = new qB.c(this)), (0, WB.j)() && this.attachControl(), this._createUbo(), PB.d && (this._imageProcessingConfiguration = new PB.d), this.setDefaultCandidateProviders(), GB.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = GB.useMaterialMeshMap, this.useClonedMeshMap = GB.useClonedMeshMap, OB && OB.virtual || BB.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(BB) {
        return this._defaultSubMeshCandidates.data = BB.iW, this._defaultSubMeshCandidates.length = BB.iW.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = BB => this._getDefaultSubMeshCandidates(BB), this.getIntersectingSubMeshCandidates = (BB, OB) => this._getDefaultSubMeshCandidates(BB), this.getCollidingSubMeshCandidates = (BB, OB) => this._getDefaultSubMeshCandidates(BB)
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
      isCachedMaterialInvalid(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== OB || this._cachedMaterial !== BB || this._cachedVisibility !== GB
      }
      Lp() {
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
      simulatePointerMove(BB, OB) {
        return this._inputManager.simulatePointerMove(BB, OB), this
      }
      simulatePointerDown(BB, OB) {
        return this._inputManager.simulatePointerDown(BB, OB), this
      }
      simulatePointerUp(BB, OB, GB) {
        return this._inputManager.simulatePointerUp(BB, OB, GB), this
      }
      isPointerCaptured() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(BB)
      }
      attachControl() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(BB, OB, GB)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let BB, OB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const GB = this.Lp(),
          YB = GB.currentRenderPassId;
        GB.currentRenderPassId = this.activeCamera?.renderPassId ?? YB;
        let DB = !0;
        for (this._pendingData.length > 0 && (DB = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && DB && (DB = this.depthPeelingRenderer.isReady()), OB && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), BB = 0; BB < this.meshes.length; BB++) {
          const YB = this.meshes[BB];
          if (!YB.iW || 0 === YB.iW.length) continue;
          if (!YB.isReady(!0)) {
            DB = !1;
            continue
          }
          const QB = YB.hasThinInstances || "InstancedMesh" === YB.getClassName() || "InstancedLinesMesh" === YB.getClassName() || GB.getCaps().instancedArrays && YB.instances.length > 0;
          for (let BB = 0, OB = this._isReadyForMeshStage; BB < OB.length; BB++) {
            OB[BB].action(YB, QB) || (DB = !1)
          }
          if (!OB) continue;
          const oB = YB.material || this.defaultMaterial;
          if (oB)
            if (oB._storeEffectOnSubMeshes)
              for (const BB of YB.iW) {
                const OB = BB.cp();
                OB && OB.hasRenderTargetTextures && null != OB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(OB) && (this._processedMaterials.push(OB), this._materialsRenderTargets.concatWithNoDuplicate(OB.getRenderTargetTextures()))
              } else oB.hasRenderTargetTextures && null != oB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(oB) && (this._processedMaterials.push(oB), this._materialsRenderTargets.concatWithNoDuplicate(oB.getRenderTargetTextures()))
        }
        if (OB) {
          for (BB = 0; BB < this._materialsRenderTargets.length; ++BB) {
            this._materialsRenderTargets.data[BB].isReadyForRendering() || (DB = !1)
          }
          for (BB = 0; BB < this.customRenderTargets.length; ++BB) {
            this.customRenderTargets[BB].isReadyForRendering() || (DB = !1)
          }
        }
        for (BB = 0; BB < this.geometries.length; BB++) {
          2 === this.geometries[BB].delayLoadState && (DB = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const QB of this.activeCameras) QB.isReady(!0) || (DB = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (DB = !1));
        for (const QB of this.rW) QB.isReady() || (DB = !1);
        if (this.proceduralTexturesEnabled)
          for (const QB of this.proceduralTextures) QB.isReady() || (DB = !1);
        if (this.layers)
          for (const QB of this.layers) QB.isReady() || (DB = !1);
        if (this.effectLayers)
          for (const QB of this.effectLayers) QB.isLayerReady() || (DB = !1);
        for (const QB of this._isReadyChecks) QB.isReady() || (DB = !1);
        return GB.areAllEffectsReady() || (DB = !1), GB.currentRenderPassId = YB, DB
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
        const OB = () => {
          BB(), setTimeout((() => {
            this.unregisterBeforeRender(OB)
          }))
        };
        this.registerBeforeRender(OB)
      }
      executeOnceBeforeRender(BB, OB) {
        void 0 !== OB ? setTimeout((() => {
          this._executeOnceBeforeRender(BB)
        }), OB) : this._executeOnceBeforeRender(BB)
      }
      addPendingData(BB) {
        this._pendingData.push(BB)
      }
      removePendingData(BB) {
        const OB = this.isLoading,
          GB = this._pendingData.indexOf(BB); - 1 !== GB && this._pendingData.splice(GB, 1), OB && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const OB = this._isReadyChecks.indexOf(BB); - 1 !== OB && this._isReadyChecks.splice(OB, 1)
      }
      executeWhenReady(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(BB), null === this._executeWhenReadyTimeoutId && this._checkIsReady(OB)
      }
      async whenReadyAsync() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((OB => {
          this.executeWhenReady((() => {
            OB()
          }), BB)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = QB.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && QB.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(BB)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(BB)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = QB.e.Now
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
      setTransformMatrix(BB, OB, GB, YB) {
        this._multiviewSceneUboIsActive = !!(GB && YB && this._multiviewSceneUbo), this._viewUpdateFlag === BB.updateFlag && this._projectionUpdateFlag === OB.updateFlag || (this._viewUpdateFlag = BB.updateFlag, this._projectionUpdateFlag = OB.updateFlag, this._viewMatrix = BB, this._projectionMatrix = OB, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new MB.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? bB.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = bB.b.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(GB, YB) : this._sceneUbo.useUbo && (this._sceneUbo.TBB("viewProjection", this._transformMatrix), this._sceneUbo.TBB("view", this._viewMatrix), this._sceneUbo.TBB("projection", this._projectionMatrix), this._sceneUbo.TBB("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(BB, OB) {
        const GB = "boolean" === typeof OB ? OB : OB?.trackUBOsInFrame,
          YB = new zB.d(this._engine, void 0, !1, BB ?? "eq", void 0, GB);
        return YB.addUniform("viewProjection", 16), YB.addUniform("view", 16), YB.addUniform("projection", 16), YB.addUniform("vEyePosition", 4), YB.addUniform("inverseProjection", 16), YB
      }
      setSceneUniformBuffer(BB) {
        this._sceneUbo = BB, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : MB.r.ZeroReadOnly
      }
      getUniqueId() {
        return CB.UniqueId
      }
      UDB(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(BB), BB._resyncLightSources(), BB.parent || BB._addToSceneRootNodes(), DB.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(BB)
          })), OB)) {
          const OB = BB.getChildMeshes();
          for (const BB of OB) this.UDB(BB)
        }
      }
      sF(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GB = this.meshes.indexOf(BB);
        if (-1 !== GB && (this.meshes.splice(GB, 1), BB.parent || BB._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(BB), this.onMeshRemovedObservable.notifyObservers(BB), OB) {
          const OB = BB.getChildMeshes();
          for (const BB of OB) this.sF(BB)
        }
        return GB
      }
      addTransformNode(BB) {
        this._blockEntityCollection || BB.JF() === this && -1 !== BB._indexInSceneTransformNodesArray || (BB._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(BB), BB.parent || BB._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(BB))
      }
      removeTransformNode(BB) {
        const OB = BB._indexInSceneTransformNodesArray;
        if (-1 !== OB) {
          if (OB !== this.transformNodes.length - 1) {
            const BB = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[OB] = BB, BB._indexInSceneTransformNodesArray = OB
          }
          BB._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), BB.parent || BB._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(BB), OB
      }
      removeSkeleton(BB) {
        const OB = this.skeletons.indexOf(BB);
        return -1 !== OB && (this.skeletons.splice(OB, 1), this.onSkeletonRemovedObservable.notifyObservers(BB), this._executeActiveContainerCleanup(this._activeSkeletons)), OB
      }
      removeMorphTargetManager(BB) {
        const OB = this.morphTargetManagers.indexOf(BB);
        return -1 !== OB && this.morphTargetManagers.splice(OB, 1), OB
      }
      removeLight(BB) {
        const OB = this.lights.indexOf(BB);
        if (-1 !== OB) {
          for (const OB of this.meshes) OB._removeLightSource(BB, !1);
          this.lights.splice(OB, 1), this.sortLightsByPriority(), BB.parent || BB._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(BB)
        }
        return OB
      }
      removeCamera(BB) {
        const OB = this.cameras.indexOf(BB);
        if (-1 !== OB && (this.cameras.splice(OB, 1), BB.parent || BB._removeFromSceneRootNodes()), this.activeCameras) {
          const OB = this.activeCameras.indexOf(BB); - 1 !== OB && this.activeCameras.splice(OB, 1)
        }
        return this.activeCamera === BB && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(BB), OB
      }
      removeParticleSystem(BB) {
        const OB = this.rW.indexOf(BB);
        return -1 !== OB && (this.rW.splice(OB, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(BB), OB
      }
      removeAnimation(BB) {
        const OB = this.animations.indexOf(BB);
        return -1 !== OB && this.animations.splice(OB, 1), OB
      }
      stopAnimation(BB, OB, GB) {}
      removeAnimationGroup(BB) {
        const OB = this.animationGroups.indexOf(BB);
        return -1 !== OB && this.animationGroups.splice(OB, 1), this.onAnimationGroupRemovedObservable.notifyObservers(BB), OB
      }
      removeMultiMaterial(BB) {
        const OB = this.multiMaterials.indexOf(BB);
        return -1 !== OB && this.multiMaterials.splice(OB, 1), this.onMultiMaterialRemovedObservable.notifyObservers(BB), OB
      }
      removeMaterial(BB) {
        const OB = BB._indexInSceneMaterialArray;
        if (-1 !== OB && OB < this.materials.length) {
          if (OB !== this.materials.length - 1) {
            const BB = this.materials[this.materials.length - 1];
            this.materials[OB] = BB, BB._indexInSceneMaterialArray = OB
          }
          BB._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(BB), OB
      }
      removeActionManager(BB) {
        const OB = this.actionManagers.indexOf(BB);
        return -1 !== OB && this.actionManagers.splice(OB, 1), OB
      }
      removeTexture(BB) {
        const OB = this.textures.indexOf(BB);
        return -1 !== OB && this.textures.splice(OB, 1), this.onTextureRemovedObservable.notifyObservers(BB), OB
      }
      removeFrameGraph(BB) {
        const OB = this.frameGraphs.indexOf(BB);
        return -1 !== OB && this.frameGraphs.splice(OB, 1), this.onFrameGraphRemovedObservable.notifyObservers(BB), OB
      }
      removeObjectRenderer(BB) {
        const OB = this.objectRenderers.indexOf(BB);
        return -1 !== OB && this.objectRenderers.splice(OB, 1), this.onObjectRendererRemovedObservable.notifyObservers(BB), OB
      }
      removePostProcess(BB) {
        const OB = this.postProcesses.indexOf(BB);
        return -1 !== OB && this.postProcesses.splice(OB, 1), this.onPostProcessRemovedObservable.notifyObservers(BB), OB
      }
      removeEffectLayer(BB) {
        const OB = this.effectLayers.indexOf(BB);
        return -1 !== OB && this.effectLayers.splice(OB, 1), this.onEffectLayerRemovedObservable.notifyObservers(BB), OB
      }
      addLight(BB) {
        if (!this._blockEntityCollection) {
          this.lights.push(BB), this.sortLightsByPriority(), BB.parent || BB._addToSceneRootNodes();
          for (const OB of this.meshes) - 1 === OB.lightSources.indexOf(BB) && (OB.lightSources.push(BB), OB._resyncLightSources());
          DB.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(BB)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(vB.c.CompareLightsPriority)
      }
      addCamera(BB) {
        this._blockEntityCollection || (this.cameras.push(BB), DB.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(BB)
        })), BB.parent || BB._addToSceneRootNodes())
      }
      addSkeleton(BB) {
        this._blockEntityCollection || (this.skeletons.push(BB), DB.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(BB)
        })))
      }
      addParticleSystem(BB) {
        this._blockEntityCollection || (this.rW.push(BB), DB.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(BB)
        })))
      }
      addAnimation(BB) {
        this._blockEntityCollection || this.animations.push(BB)
      }
      addAnimationGroup(BB) {
        this._blockEntityCollection || (this.animationGroups.push(BB), DB.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(BB)
        })))
      }
      addMultiMaterial(BB) {
        this._blockEntityCollection || (this.multiMaterials.push(BB), DB.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(BB)
        })))
      }
      addMaterial(BB) {
        this._blockEntityCollection || BB.JF() === this && -1 !== BB._indexInSceneMaterialArray || (BB._indexInSceneMaterialArray = this.materials.length, this.materials.push(BB), DB.c.SetImmediate((() => {
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
        this.frameGraphs.push(BB), DB.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(BB)
        }))
      }
      addObjectRenderer(BB) {
        this.objectRenderers.push(BB), DB.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(BB)
        }))
      }
      addPostProcess(BB) {
        this._blockEntityCollection || (this.postProcesses.push(BB), DB.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(BB)
        })))
      }
      addEffectLayer(BB) {
        this._blockEntityCollection || (this.effectLayers.push(BB), DB.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(BB)
        })))
      }
      switchActiveCamera(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = BB, OB && BB.attachControl())
      }
      setActiveCameraById(BB) {
        const OB = this.getCameraById(BB);
        return OB ? (this.activeCamera = OB, OB) : null
      }
      setActiveCameraByName(BB) {
        const OB = this.getCameraByName(BB);
        return OB ? (this.activeCamera = OB, OB) : null
      }
      getAnimationGroupByName(BB) {
        for (let OB = 0; OB < this.animationGroups.length; OB++)
          if (this.animationGroups[OB].name === BB) return this.animationGroups[OB];
        return null
      }
      _getMaterial(BB, OB) {
        for (let GB = 0; GB < this.materials.length; GB++) {
          const BB = this.materials[GB];
          if (OB(BB)) return BB
        }
        if (BB)
          for (let GB = 0; GB < this.multiMaterials.length; GB++) {
            const BB = this.multiMaterials[GB];
            if (OB(BB)) return BB
          }
        return null
      }
      getMaterialByUniqueID(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(BB, OB)
      }
      getMaterialByUniqueId(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(OB, (OB => OB.uniqueId === BB))
      }
      getMaterialById(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(OB, (OB => OB.id === BB))
      }
      getMaterialByName(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(OB, (OB => OB.name === BB))
      }
      getLastMaterialById(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let GB = this.materials.length - 1; GB >= 0; GB--)
          if (this.materials[GB].id === BB) return this.materials[GB];
        if (OB)
          for (let GB = this.multiMaterials.length - 1; GB >= 0; GB--)
            if (this.multiMaterials[GB].id === BB) return this.multiMaterials[GB];
        return null
      }
      getTextureByUniqueId(BB) {
        for (let OB = 0; OB < this.textures.length; OB++)
          if (this.textures[OB].uniqueId === BB) return this.textures[OB];
        return null
      }
      getTextureByName(BB) {
        for (let OB = 0; OB < this.textures.length; OB++)
          if (this.textures[OB].name === BB) return this.textures[OB];
        return null
      }
      getCameraById(BB) {
        for (let OB = 0; OB < this.cameras.length; OB++)
          if (this.cameras[OB].id === BB) return this.cameras[OB];
        return null
      }
      getCameraByUniqueId(BB) {
        for (let OB = 0; OB < this.cameras.length; OB++)
          if (this.cameras[OB].uniqueId === BB) return this.cameras[OB];
        return null
      }
      getCameraByName(BB) {
        for (let OB = 0; OB < this.cameras.length; OB++)
          if (this.cameras[OB].name === BB) return this.cameras[OB];
        return null
      }
      getBoneById(BB) {
        for (let OB = 0; OB < this.skeletons.length; OB++) {
          const GB = this.skeletons[OB];
          for (let OB = 0; OB < GB.bones.length; OB++)
            if (GB.bones[OB].id === BB) return GB.bones[OB]
        }
        return null
      }
      getBoneByName(BB) {
        for (let OB = 0; OB < this.skeletons.length; OB++) {
          const GB = this.skeletons[OB];
          for (let OB = 0; OB < GB.bones.length; OB++)
            if (GB.bones[OB].name === BB) return GB.bones[OB]
        }
        return null
      }
      getLightByName(BB) {
        for (let OB = 0; OB < this.lights.length; OB++)
          if (this.lights[OB].name === BB) return this.lights[OB];
        return null
      }
      getLightById(BB) {
        for (let OB = 0; OB < this.lights.length; OB++)
          if (this.lights[OB].id === BB) return this.lights[OB];
        return null
      }
      getLightByUniqueId(BB) {
        for (let OB = 0; OB < this.lights.length; OB++)
          if (this.lights[OB].uniqueId === BB) return this.lights[OB];
        return null
      }
      getParticleSystemById(BB) {
        for (let OB = 0; OB < this.rW.length; OB++)
          if (this.rW[OB].id === BB) return this.rW[OB];
        return null
      }
      getGeometryById(BB) {
        for (let OB = 0; OB < this.geometries.length; OB++)
          if (this.geometries[OB].id === BB) return this.geometries[OB];
        return null
      }
      _getGeometryByUniqueId(BB) {
        if (this._geometriesByUniqueId) {
          const OB = this._geometriesByUniqueId[BB];
          if (void 0 !== OB) return this.geometries[OB]
        } else
          for (let OB = 0; OB < this.geometries.length; OB++)
            if (this.geometries[OB].uniqueId === BB) return this.geometries[OB];
        return null
      }
      getFrameGraphByName(BB) {
        for (let OB = 0; OB < this.frameGraphs.length; OB++)
          if (this.frameGraphs[OB].name === BB) return this.frameGraphs[OB];
        return null
      }
      pushGeometry(BB, OB) {
        return !(!OB && this._getGeometryByUniqueId(BB.uniqueId)) && (this.addGeometry(BB), DB.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(BB)
        })), !0)
      }
      removeGeometry(BB) {
        let OB;
        if (this._geometriesByUniqueId) {
          if (OB = this._geometriesByUniqueId[BB.uniqueId], void 0 === OB) return !1
        } else if (OB = this.geometries.indexOf(BB), OB < 0) return !1;
        if (OB !== this.geometries.length - 1) {
          const BB = this.geometries[this.geometries.length - 1];
          BB && (this.geometries[OB] = BB, this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = OB))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[BB.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(BB), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(BB) {
        for (let OB = 0; OB < this.meshes.length; OB++)
          if (this.meshes[OB].id === BB) return this.meshes[OB];
        return null
      }
      getMeshesById(BB) {
        return this.meshes.filter((function(OB) {
          return OB.id === BB
        }))
      }
      getTransformNodeById(BB) {
        for (let OB = 0; OB < this.transformNodes.length; OB++)
          if (this.transformNodes[OB].id === BB) return this.transformNodes[OB];
        return null
      }
      getTransformNodeByUniqueId(BB) {
        for (let OB = 0; OB < this.transformNodes.length; OB++)
          if (this.transformNodes[OB].uniqueId === BB) return this.transformNodes[OB];
        return null
      }
      getTransformNodesById(BB) {
        return this.transformNodes.filter((function(OB) {
          return OB.id === BB
        }))
      }
      getMeshByUniqueId(BB) {
        for (let OB = 0; OB < this.meshes.length; OB++)
          if (this.meshes[OB].uniqueId === BB) return this.meshes[OB];
        return null
      }
      getLastMeshById(BB) {
        for (let OB = this.meshes.length - 1; OB >= 0; OB--)
          if (this.meshes[OB].id === BB) return this.meshes[OB];
        return null
      }
      getLastTransformNodeById(BB) {
        for (let OB = this.transformNodes.length - 1; OB >= 0; OB--)
          if (this.transformNodes[OB].id === BB) return this.transformNodes[OB];
        return null
      }
      getLastEntryById(BB) {
        let OB;
        for (OB = this.meshes.length - 1; OB >= 0; OB--)
          if (this.meshes[OB].id === BB) return this.meshes[OB];
        for (OB = this.transformNodes.length - 1; OB >= 0; OB--)
          if (this.transformNodes[OB].id === BB) return this.transformNodes[OB];
        for (OB = this.cameras.length - 1; OB >= 0; OB--)
          if (this.cameras[OB].id === BB) return this.cameras[OB];
        for (OB = this.lights.length - 1; OB >= 0; OB--)
          if (this.lights[OB].id === BB) return this.lights[OB];
        for (OB = this.skeletons.length - 1; OB >= 0; OB--) {
          const GB = this.skeletons[OB];
          for (let OB = GB.bones.length - 1; OB >= 0; OB--)
            if (GB.bones[OB].id === BB) return GB.bones[OB]
        }
        return null
      }
      getNodeById(BB) {
        const OB = this.getMeshById(BB);
        if (OB) return OB;
        const GB = this.getTransformNodeById(BB);
        if (GB) return GB;
        const YB = this.getLightById(BB);
        if (YB) return YB;
        const DB = this.getCameraById(BB);
        if (DB) return DB;
        const QB = this.getBoneById(BB);
        return QB || null
      }
      getNodeByName(BB) {
        const OB = this.getMeshByName(BB);
        if (OB) return OB;
        const GB = this.getTransformNodeByName(BB);
        if (GB) return GB;
        const YB = this.getLightByName(BB);
        if (YB) return YB;
        const DB = this.getCameraByName(BB);
        if (DB) return DB;
        const QB = this.getBoneByName(BB);
        return QB || null
      }
      getMeshByName(BB) {
        for (let OB = 0; OB < this.meshes.length; OB++)
          if (this.meshes[OB].name === BB) return this.meshes[OB];
        return null
      }
      getTransformNodeByName(BB) {
        for (let OB = 0; OB < this.transformNodes.length; OB++)
          if (this.transformNodes[OB].name === BB) return this.transformNodes[OB];
        return null
      }
      getLastSkeletonById(BB) {
        for (let OB = this.skeletons.length - 1; OB >= 0; OB--)
          if (this.skeletons[OB].id === BB) return this.skeletons[OB];
        return null
      }
      getSkeletonByUniqueId(BB) {
        for (let OB = 0; OB < this.skeletons.length; OB++)
          if (this.skeletons[OB].uniqueId === BB) return this.skeletons[OB];
        return null
      }
      getSkeletonById(BB) {
        for (let OB = 0; OB < this.skeletons.length; OB++)
          if (this.skeletons[OB].id === BB) return this.skeletons[OB];
        return null
      }
      getSkeletonByName(BB) {
        for (let OB = 0; OB < this.skeletons.length; OB++)
          if (this.skeletons[OB].name === BB) return this.skeletons[OB];
        return null
      }
      getMorphTargetManagerById(BB) {
        for (let OB = 0; OB < this.morphTargetManagers.length; OB++)
          if (this.morphTargetManagers[OB].uniqueId === BB) return this.morphTargetManagers[OB];
        return null
      }
      getMorphTargetById(BB) {
        for (let OB = 0; OB < this.morphTargetManagers.length; ++OB) {
          const GB = this.morphTargetManagers[OB];
          for (let OB = 0; OB < GB.numTargets; ++OB) {
            const YB = GB.getTarget(OB);
            if (YB.id === BB) return YB
          }
        }
        return null
      }
      getMorphTargetByName(BB) {
        for (let OB = 0; OB < this.morphTargetManagers.length; ++OB) {
          const GB = this.morphTargetManagers[OB];
          for (let OB = 0; OB < GB.numTargets; ++OB) {
            const YB = GB.getTarget(OB);
            if (YB.name === BB) return YB
          }
        }
        return null
      }
      getPostProcessByName(BB) {
        for (let OB = 0; OB < this.postProcesses.length; ++OB) {
          const GB = this.postProcesses[OB];
          if (GB.name === BB) return GB
        }
        return null
      }
      isActiveMesh(BB) {
        return -1 !== this._activeMeshes.indexOf(BB)
      }
      get uid() {
        return this._uid || (this._uid = YB.j.RandomId()), this._uid
      }
      addExternalData(BB, OB) {
        return this._externalData || (this._externalData = new yB), this._externalData.add(BB, OB)
      }
      getExternalData(BB) {
        return this._externalData ? this._externalData.get(BB) : null
      }
      getOrAddExternalDataWithFactory(BB, OB) {
        return this._externalData || (this._externalData = new yB), this._externalData.getOrAddWithFactory(BB, OB)
      }
      removeExternalData(BB) {
        return this._externalData.remove(BB)
      }
      _evaluateSubMesh(BB, OB, GB, YB) {
        if (YB || BB.isInFrustum(this._frustumPlanes)) {
          for (let YB = 0, DB = this._evaluateSubMeshStage; YB < DB.length; YB++) {
            DB[YB].action(OB, BB)
          }
          const GB = BB.cp();
          null !== GB && void 0 !== GB && (GB.hasRenderTargetTextures && null != GB.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(GB) && (this._processedMaterials.push(GB), this._materialsRenderTargets.concatWithNoDuplicate(GB.getRenderTargetTextures())), this._renderingManager.dispatch(BB, OB, GB))
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
            const OB = this.activeCameras[BB];
            OB && OB._activeMeshes && OB._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let BB = 0; BB < this.textures.length; BB++) {
            const OB = this.textures[BB];
            OB && OB.renderList && OB.freeRenderingGroups()
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
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          QB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const oB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const BB of oB) BB.objectRenderer._freezeActiveMeshes(YB);
          return this._freezeActiveMeshesCancel = (0, DB.d)((() => {
            let BB = !0,
              OB = !0;
            for (const GB of oB) BB && (BB = GB.objectRenderer._isFrozen), OB && (OB = null !== GB.objectRenderer._freezeActiveMeshesCancel);
            if (BB) return !0;
            if (!OB) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = QB, this._skipEvaluateActiveMeshesCompletely = BB, OB?.()
          }), ((BB, OB) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), OB) {
              const OB = "Scene: Timeout while waiting for meshes to be frozen.";
              GB ? GB(OB) : (BG.b.Error(OB), BB && BG.b.Error(BB))
            } else {
              const OB = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              GB ? GB(OB) : (BG.b.Error(OB), BB && (BG.b.Error(BB), BB.stack && BG.b.Error(BB.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = QB, this._skipEvaluateActiveMeshesCompletely = BB, YB)
              for (let BB = 0; BB < this._activeMeshes.length; BB++) this._activeMeshes.data[BB]._freeze();
            OB && OB()
          } else GB && GB("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const OB = this.meshes[BB];
          OB._internalAbstractMeshDataInfo && (OB._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const BB = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const OB of BB) OB.objectRenderer._unfreezeActiveMeshes()
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
            for (let OB = 0; OB < BB; OB++) {
              this._activeMeshes.data[OB].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const BB = this._activeParticleSystems.length;
            for (let OB = 0; OB < BB; OB++) this._activeParticleSystems.data[OB].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let DB = 0, QB = this._beforeEvaluateActiveMeshStage; DB < QB.length; DB++) {
          QB[DB].action()
        }
        const BB = this.getActiveMeshCandidates(),
          OB = BB.length,
          GB = eB.b.Enabled,
          YB = this.customLODSelector;
        for (let DB = 0; DB < OB; DB++) {
          const OB = BB.data[DB],
            QB = !YB && !OB.SF && !OB._internalMeshDataInfo?._LODLevels.length;
          let oB, jB;
          if ((QB || (oB = OB._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), oB ? oB[1] = -1 : (oB = [OB, -1], OB._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, oB))), !OB.isBlocked) && (GB && this._totalVertices.addCount(OB.getTotalVertices(), !1), OB.isReady() && OB.isEnabled() && !OB.SP.hasAZeroComponent)) {
            if (OB.computeWorldMatrix(), OB.actionManager && OB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(OB), QB) jB = OB;
            else if (jB = YB ? YB(OB, this.activeCamera) : OB.getLOD(this.activeCamera), oB[0] = jB, oB[1] = this._frameId, void 0 === jB || null === jB) continue;
            if (jB !== OB && 0 !== jB.billboardMode && jB.computeWorldMatrix(), OB._preActivate(), OB.isVisible && OB.visibility > 0 && 0 !== (OB.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || OB.rp || OB.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(OB), this.activeCamera._activeMeshes.push(OB), jB !== OB && jB._activate(this._renderId, !1);
              for (let BB = 0, GB = this._preActiveMeshStage; BB < GB.length; BB++) {
                GB[BB].action(OB)
              }
              OB._activate(this._renderId, !1) && (OB.SF ? OB._internalAbstractMeshDataInfo._actAsRegularMesh && (jB = OB) : jB._internalAbstractMeshDataInfo._onlyForInstances = !1, jB._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(OB, jB)), OB._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let BB = 0; BB < this.rW.length; BB++) {
            const OB = this.rW[BB];
            if (!OB.isStarted() || !OB.emitter) continue;
            const GB = OB.emitter;
            GB.position && !GB.isEnabled() || (this._activeParticleSystems.push(OB), OB.animate(), this._renderingManager.dispatchParticles(OB))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(BB) {
        this._skeletonsEnabled && BB.skeleton && (this._activeSkeletons.pushNoDuplicate(BB.skeleton) && (BB.skeleton.prepare(), this._activeBones.addCount(BB.skeleton.bones.length, !1)), BB.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(BB) && this.frameGraph && BB.applySkeleton(BB.skeleton))
      }
      _activeMesh(BB, OB) {
        this._prepareSkeleton(OB);
        let GB = BB.WQB || BB.SF || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || OB.rp;
        if (OB && OB.iW && OB.iW.length > 0) {
          const YB = this.getActiveSubMeshCandidates(OB),
            DB = YB.length;
          GB = GB || 1 === DB;
          for (let QB = 0; QB < DB; QB++) {
            const DB = YB.data[QB];
            this._evaluateSubMesh(DB, OB, BB, GB)
          }
        }
      }
      updateTransformMatrix(BB) {
        const OB = this.activeCamera;
        if (OB)
          if (OB._renderingMultiview) {
            const GB = OB._rigCameras[0],
              YB = OB._rigCameras[1];
            this.setTransformMatrix(GB.getViewMatrix(), GB.getProjectionMatrix(BB), YB.getViewMatrix(), YB.getProjectionMatrix(BB))
          } else this.setTransformMatrix(OB.getViewMatrix(), OB.getProjectionMatrix(BB))
      }
      _bindFrameBuffer(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (BB && BB._multiviewTexture ? BB._multiviewTexture._bindFrameBuffer() : BB && BB.outputRenderTarget ? BB.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), OB && this._clearFrameBuffer(BB)
      }
      _clearFrameBuffer(BB) {
        if (BB && BB._multiviewTexture);
        else if (BB && BB.outputRenderTarget && !BB._renderingMultiview) {
          const OB = BB.outputRenderTarget;
          OB.onClearObservable.hasObservers() ? OB.onClearObservable.notifyObservers(this._engine) : OB.skipInitialClear || BB.isRightCamera || (this.autoClear && this._engine.clear(OB.clearColor || this._clearColor, !OB._cleared, !0, !0), OB._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (BB && BB._skipRendering) return;
        const DB = this._engine;
        if (this._activeCamera = BB, !this.activeCamera) throw new Error("Active camera not set");
        if (DB.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && GB) {
          let OB = !0;
          BB._renderingMultiview && BB.outputRenderTarget && (OB = BB.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, BB.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), BB._renderingMultiview && BB.outputRenderTarget && (BB.outputRenderTarget.skipInitialClear = OB)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = BB.outputRenderTarget?.renderPassId ?? BB.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let YB = 0; YB < this._softwareSkinnedMeshes.length; YB++) {
          const BB = this._softwareSkinnedMeshes.data[YB];
          BB.applySkeleton(BB.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), BB.customRenderTargets && BB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(BB.customRenderTargets), OB && OB.customRenderTargets && OB.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(OB.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let YB = 0, jB = this._gatherActiveCameraRenderTargetsStage; YB < jB.length; YB++) {
          jB[YB].action(this._renderTargets)
        }
        let QB = !1;
        if (this.renderTargetsEnabled) {
          let BB;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            YB.j.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const OB = this.getBoundingBoxRenderer?.();
            for (let GB = 0; GB < this._renderTargets.length; GB++) {
              const YB = this._renderTargets.data[GB];
              if (YB._shouldRender()) {
                this._renderId++;
                const GB = YB.activeCamera && YB.activeCamera !== this.activeCamera;
                OB && !BB && (BB = OB.renderList.length > 0 ? OB.renderList.data.slice() : [], BB.length = OB.renderList.length), YB.render(GB, this.dumpNextRenderTargets), QB = !0
              }
            }
            OB && BB && (OB.renderList.data = BB, OB.renderList.length = BB.length), YB.j.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const OB = this.getBoundingBoxRenderer?.();
            OB && !BB && (BB = OB.renderList.length > 0 ? OB.renderList.data.slice() : [], BB.length = OB.renderList.length);
            for (let BB = 0, GB = this._cameraDrawRenderTargetStage; BB < GB.length; BB++) {
              QB = GB[BB].action(this.activeCamera) || QB
            }
            OB && BB && (OB.renderList.data = BB, OB.renderList.length = BB.length)
          }
          this._intermediateRendering = !1
        }
        QB && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || BB._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let YB = 0, jB = this._beforeCameraDrawStage; YB < jB.length; YB++) {
          jB[YB].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const oB = DB.snapshotRendering && 1 === DB.snapshotRenderingMode;
        oB && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !oB), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let YB = 0, jB = this._afterCameraDrawStage; YB < jB.length; YB++) {
          jB[YB].action(this.activeCamera)
        }
        if (this.postProcessManager && !BB._multiviewTexture) {
          const OB = BB.outputRenderTarget ? BB.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(BB.isIntermediate, OB)
        }
        for (let YB = 0, jB = this._afterCameraPostProcessStage; YB < jB.length; YB++) {
          jB[YB].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === BB.cameraRigMode || BB._renderingMultiview) return BB._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(BB, void 0, OB), void this.onAfterRenderCameraObservable.notifyObservers(BB);
        if (BB._useMultiviewToSingleView) this._renderMultiviewToSingleView(BB);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(BB);
          for (let OB = 0; OB < BB._rigCameras.length; OB++) this._renderForCamera(BB._rigCameras[OB], BB)
        }
        this._activeCamera = BB, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(BB)
      }
      _checkIntersections() {
        for (let BB = 0; BB < this._meshesForIntersections.length; BB++) {
          const OB = this._meshesForIntersections.data[BB];
          if (OB.actionManager)
            for (let BB = 0; OB.actionManager && BB < OB.actionManager.actions.length; BB++) {
              const GB = OB.actionManager.actions[BB];
              if (12 === GB.trigger || 13 === GB.trigger) {
                const BB = GB.getTriggerParameter(),
                  YB = BB.mesh ? BB.mesh : BB,
                  DB = YB.lQB(OB, BB.usePreciseIntersection),
                  QB = OB._intersectionsInProgress.indexOf(YB);
                DB && -1 === QB ? 12 === GB.trigger ? (GB._executeCurrent(pB.CreateNew(OB, void 0, YB)), OB._intersectionsInProgress.push(YB)) : 13 === GB.trigger && OB._intersectionsInProgress.push(YB) : !DB && QB > -1 && (13 === GB.trigger && GB._executeCurrent(pB.CreateNew(OB, void 0, YB)), OB.actionManager.hasSpecificTrigger(13, (BB => {
                  const OB = BB.mesh ? BB.mesh : BB;
                  return YB === OB
                })) && 13 !== GB.trigger || OB._intersectionsInProgress.splice(QB, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(BB) {}
      _animate(BB) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let BB = Math.max(QG.MinDeltaTime, Math.min(this._engine.getDeltaTime(), QG.MaxDeltaTime)) + this._timeAccumulator;
          const OB = this._engine.getTimeStep(),
            GB = 1e3 / OB / 1e3;
          let YB = 0;
          const DB = this._engine.getLockstepMaxSteps();
          let QB = Math.floor(BB / OB);
          for (QB = Math.min(QB, DB); BB > 0 && YB < QB;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = OB * GB, this._animate(OB), this.onAfterAnimationsObservable.notifyObservers(this), this.wT && this._advancePhysicsEngineStep(OB), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, YB++, BB -= OB;
          this._timeAccumulator = BB < 0 ? 0 : BB
        } else {
          const BB = this.useConstantAnimationDeltaTime ? 16 : Math.max(QG.MinDeltaTime, Math.min(this._engine.getDeltaTime(), QG.MaxDeltaTime));
          this._animationRatio = .06 * BB, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.wT && this._advancePhysicsEngineStep(BB)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(BB) {
        if (BB?.outputRenderTarget && !BB?.isRigCamera && (BB.outputRenderTarget._cleared = !1), BB?.rigCameras?.length)
          for (let OB = 0; OB < BB.rigCameras.length; ++OB) {
            const GB = BB.rigCameras[OB].outputRenderTarget;
            GB && (GB._cleared = !1)
          }
      }
      resetDrawCache(BB) {
        if (this.meshes)
          for (const OB of this.meshes) OB.resetDrawCache(BB)
      }
      _renderWithFrameGraph() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          OB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, BB)
          for (const GB of this.cameras)
            if (GB.update(), 0 !== GB.cameraRigMode)
              for (let BB = 0; BB < GB._rigCameras.length; BB++) GB._rigCameras[BB].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(OB)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(BB) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const OB = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), YB.j.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let BB = 0; BB < this._renderTargets.length; BB++) {
            const GB = this._renderTargets.data[BB],
              YB = GB.activeCamera || OB;
            this._renderRenderTarget(GB, YB, !0, this.dumpNextRenderTargets)
          }
          YB.j.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let GB = 0, YB = this._beforeClearStage; GB < YB.length; GB++) {
          YB[GB].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const OB = this.getActiveMeshCandidates(),
            GB = OB.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let BB = 0; BB < GB; BB++) {
                const GB = OB.data[BB];
                GB._internalAbstractMeshDataInfo._wasActiveLastFrame && GB.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const BB = this._activeParticleSystems.length;
              for (let OB = 0; OB < BB; OB++) this._activeParticleSystems.data[OB].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let YB = 0; YB < GB; YB++) {
              const GB = OB.data[YB];
              GB._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, GB.isBlocked || (this._totalVertices.addCount(GB.getTotalVertices(), !1), GB.isReady() && GB.isEnabled() && !GB.SP.hasAZeroComponent && (GB.computeWorldMatrix(BB), GB.actionManager && GB.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(GB)))
            }
            if (this.particlesEnabled)
              for (let BB = 0; BB < this.rW.length; BB++) {
                const OB = this.rW[BB];
                if (!OB.isStarted() || !OB.emitter) continue;
                const GB = OB.emitter;
                GB.position && !GB.isEnabled() || (this._activeParticleSystems.push(OB), OB.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, BB._shouldRender()) {
          if (this._renderId++, this.activeCamera = OB, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), BB.render(GB, YB)
        }
        this._intermediateRendering = !1
      }
      render() {
        let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.lV) return;
        const GB = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(BB, OB)
        } finally {
          this._renderingMeshEvaluationDepth = GB
        }
      }
      _renderFrame(BB, OB) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), ZB.c.JF = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const GB of this.activeCameras) this._checkCameraRenderTarget(GB);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), OB || this.animate();
        for (let GB = 0, YB = this._beforeCameraUpdateStage; GB < YB.length; GB++) {
          YB[GB].action()
        }
        if (BB)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let GB = 0; GB < this.activeCameras.length; GB++) {
              const BB = this.activeCameras[GB];
              if (BB.update(), 0 !== BB.cameraRigMode)
                for (let OB = 0; OB < BB._rigCameras.length; OB++) BB._rigCameras[OB].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let GB = 0; GB < this.activeCamera._rigCameras.length; GB++) this.activeCamera._rigCameras[GB].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(BB, OB);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const BB = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            YB.j.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let OB = 0; OB < this.customRenderTargets.length; OB++) {
              const GB = this.customRenderTargets[OB],
                YB = GB.activeCamera || this.activeCamera;
              this._renderRenderTarget(GB, YB, BB !== YB, this.dumpNextRenderTargets)
            }
            YB.j.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = BB?.renderPassId ?? 0, this.activeCamera = BB, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let OB = 0, GB = this._beforeClearStage; OB < GB.length; OB++) {
            GB[OB].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let OB = 0, GB = this._gatherRenderTargetsStage; OB < GB.length; OB++) {
            GB[OB].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let OB = 0; OB < this.activeCameras.length; OB++) this._processSubCameras(this.activeCameras[OB], OB > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let GB = 0, YB = this._afterRenderStage; GB < YB.length; GB++) {
          YB[GB].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let BB = 0; BB < this._toBeDisposed.length; BB++) {
            const OB = this._toBeDisposed[BB];
            OB && OB.dispose()
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
        if (this.lV) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, VB.b)(this.stopAllAnimations)) {
          for (const BB of this._activeAnimatables) BB.onAnimationEndObservable.clear(), BB.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const BB = this._activeRequests.slice();
        for (const QB of BB) QB.abort();
        this._activeRequests.length = 0;
        try {
          this.lF.notifyObservers(this)
        } catch (DB) {
          BG.b.Error("An error occurred while calling onDisposeObservable!", DB)
        }
        this.detachControl();
        const OB = this._engine.getInputElement?.();
        if (OB)
          for (let QB = 0; QB < this.cameras.length; QB++) this.cameras[QB].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (BB => BB.dispose(!0))), this._disposeList(this.transformNodes, (BB => BB.dispose(!0)));
        const GB = this.cameras;
        this._disposeList(GB), this._disposeList(this.rW), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let YB = this._engine.scenes.indexOf(this);
        if (YB > -1 && this._engine.scenes.splice(YB, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, ZB.j)(), AB.b._LastCreatedScene === this) {
          AB.b._LastCreatedScene = null;
          let BB = AB.b.Instances.length - 1;
          for (; BB >= 0;) {
            const OB = AB.b.Instances[BB];
            if (OB.scenes.length > 0) {
              AB.b._LastCreatedScene = OB.scenes[this._engine.scenes.length - 1];
              break
            }
            BB--
          }
        }
        YB = this._engine._virtualScenes.indexOf(this), YB > -1 && this._engine._virtualScenes.splice(YB, 1), this._engine.wipeCaches(!0), this.lF.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(BB, OB) {
        const GB = BB.slice(0);
        OB = OB ?? (BB => BB.dispose());
        for (const YB of GB) OB(YB);
        BB.length = 0
      }
      get lV() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let BB = 0; BB < this.meshes.length; BB++) {
          const OB = this.meshes[BB].geometry;
          OB && OB.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const BB of this.textures) {
          BB._buffer && (BB._buffer = null)
        }
      }
      getWorldExtends(BB) {
        const OB = new MB.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          GB = new MB.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        BB = BB || (() => !0);
        const YB = this.meshes.filter(BB);
        for (const DB of YB) {
          if (DB.computeWorldMatrix(!0), !DB.iW || 0 === DB.iW.length || DB.infiniteDistance) continue;
          const BB = DB.Gw(),
            YB = BB.boundingBox.minimumWorld,
            QB = BB.boundingBox.maximumWorld;
          MB.r.CheckExtends(YB, OB, GB), MB.r.CheckExtends(QB, OB, GB)
        }
        return OB.x === Number.MAX_VALUE ? {
          min: MB.r.Zero(),
          max: MB.r.Zero()
        } : {
          min: OB,
          max: GB
        }
      }
      createPickingRay(BB, OB, GB, YB) {
        throw (0, VB.j)("Ray")
      }
      createPickingRayToRef(BB, OB, GB, YB, DB) {
        throw (0, VB.j)("Ray")
      }
      createPickingRayInCameraSpace(BB, OB, GB) {
        throw (0, VB.j)("Ray")
      }
      createPickingRayInCameraSpaceToRef(BB, OB, GB, YB) {
        throw (0, VB.j)("Ray")
      }
      pl(BB, OB, GB, YB, DB, QB) {
        const oB = (0, VB.j)("Ray", !0);
        return oB && BG.b.Warn(oB), new lB.e
      }
      pickWithBoundingInfo(BB, OB, GB, YB, DB) {
        const QB = (0, VB.j)("Ray", !0);
        return QB && BG.b.Warn(QB), new lB.e
      }
      pickWithRay(BB, OB, GB, YB) {
        throw (0, VB.j)("Ray")
      }
      multiPick(BB, OB, GB, YB, DB) {
        throw (0, VB.j)("Ray")
      }
      multiPickWithRay(BB, OB, GB) {
        throw (0, VB.j)("Ray")
      }
      setPointerOverMesh(BB, OB, GB) {
        this._inputManager.setPointerOverMesh(BB, OB, GB)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const BB of this.geometries) BB._rebuild();
        for (const BB of this.meshes) BB._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const BB of this._components) BB.rebuild();
        for (const BB of this.rW) BB.rebuild();
        if (this.spriteManagers)
          for (const BB of this.spriteManagers) BB.rebuild()
      }
      _rebuildTextures() {
        for (const BB of this.textures) BB._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(BB, OB, GB) {
        if (void 0 === OB) return BB;
        const YB = [];
        for (const DB in BB) {
          const QB = BB[DB];
          JB.e && JB.e.MatchesQuery(QB, OB) && (!GB || GB(QB)) && YB.push(QB)
        }
        return YB
      }
      getMeshesByTags(BB, OB) {
        return this._getByTags(this.meshes, BB, OB)
      }
      getCamerasByTags(BB, OB) {
        return this._getByTags(this.cameras, BB, OB)
      }
      getLightsByTags(BB, OB) {
        return this._getByTags(this.lights, BB, OB)
      }
      getMaterialByTags(BB, OB) {
        return this._getByTags(this.materials, BB, OB).concat(this._getByTags(this.multiMaterials, BB, OB))
      }
      getTransformNodesByTags(BB, OB) {
        return this._getByTags(this.transformNodes, BB, OB)
      }
      setRenderingOrder(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(BB, OB, GB, YB)
      }
      setRenderingAutoClearDepthStencil(BB, OB) {
        let GB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(BB, OB, GB, YB)
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
      markAllMaterialsAsDirty(BB, OB) {
        if (!this._blockMaterialDirtyMechanism)
          for (const GB of this.materials) OB && !OB(GB) || GB.DYB(BB)
      }
      _loadFile(BB, OB, GB, YB, DB, QB, oB) {
        const jB = (0, HB.m)(BB, OB, GB, YB ? this.offlineProvider : void 0, DB, QB, oB);
        return this._activeRequests.push(jB), jB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), jB
      }
      async _loadFileAsync(BB, OB, GB, YB, DB) {
        return await new Promise(((QB, oB) => {
          this._loadFile(BB, (BB => {
            QB(BB)
          }), OB, GB, YB, ((BB, OB) => {
            oB(OB)
          }), DB)
        }))
      }
      async _loadDelayedFileAsync(BB, OB, GB) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const YB = `${BB}|${OB?"binary":"string"}`;
        let DB = this._delayedFileRequests.get(YB);
        if (!DB) {
          DB = OB ? this._loadFileAsync(BB, void 0, GB, !0) : this._loadFileAsync(BB, void 0, GB, !1);
          const QB = DB;
          (async () => {
            try {
              await QB
            } catch {}
            this._delayedFileRequests?.delete(YB)
          })(), this._delayedFileRequests.set(YB, DB)
        }
        return await DB
      }
      _requestFile(BB, OB, GB, YB, DB, QB, oB) {
        const jB = (0, HB.r)(BB, OB, GB, YB ? this.offlineProvider : void 0, DB, QB, oB);
        return this._activeRequests.push(jB), jB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), jB
      }
      async _requestFileAsync(BB, OB, GB, YB, DB) {
        return await new Promise(((QB, oB) => {
          this._requestFile(BB, (BB => {
            QB(BB)
          }), OB, GB, YB, (BB => {
            oB(BB)
          }), DB)
        }))
      }
      _readFile(BB, OB, GB, YB, DB) {
        const QB = (0, HB.o)(BB, OB, GB, YB, DB);
        return this._activeRequests.push(QB), QB.onCompleteObservable.add((BB => {
          this._activeRequests.splice(this._activeRequests.indexOf(BB), 1)
        })), QB
      }
      async _readFileAsync(BB, OB, GB) {
        return await new Promise(((YB, DB) => {
          this._readFile(BB, (BB => {
            YB(BB)
          }), OB, GB, (BB => {
            DB(BB)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, VB.j)("performanceViewerSceneExtension")
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
    QG.FOGMODE_NONE = 0, QG.FOGMODE_EXP = 1, QG.FOGMODE_EXP2 = 2, QG.FOGMODE_LINEAR = 3, QG.MinDeltaTime = 1, QG.MaxDeltaTime = 1e3, QG._OriginalDefaultMaterialFactory = QG.DefaultMaterialFactory;
    let oG = !1;

    function jG() {
      oG || (oG = !0, (0, OG.f)("BABYLON.Scene", QG))
    }(tB = QG.prototype).sortActiveAnimatables ?? (tB.sortActiveAnimatables = (0, VB.g)("Scene", "sortActiveAnimatables")), (BO = QG.prototype).beginWeightedAnimation ?? (BO.beginWeightedAnimation = (0, VB.g)("Scene", "beginWeightedAnimation")), (OO = QG.prototype).beginAnimation ?? (OO.beginAnimation = (0, VB.g)("Scene", "beginAnimation")), (GO = QG.prototype).beginHierarchyAnimation ?? (GO.beginHierarchyAnimation = (0, VB.g)("Scene", "beginHierarchyAnimation")), (YO = QG.prototype).beginDirectAnimation ?? (YO.beginDirectAnimation = (0, VB.g)("Scene", "beginDirectAnimation")), (DO = QG.prototype).beginDirectHierarchyAnimation ?? (DO.beginDirectHierarchyAnimation = (0, VB.g)("Scene", "beginDirectHierarchyAnimation")), (QO = QG.prototype).getAnimatableByTarget ?? (QO.getAnimatableByTarget = (0, VB.g)("Scene", "getAnimatableByTarget")), (oO = QG.prototype).getAllAnimatablesByTarget ?? (oO.getAllAnimatablesByTarget = (0, VB.g)("Scene", "getAllAnimatablesByTarget")), (jO = QG.prototype).stopAllAnimations ?? (jO.stopAllAnimations = (0, VB.g)("Scene", "stopAllAnimations")), (yO = QG.prototype).getSoundByName ?? (yO.getSoundByName = (0, VB.g)("Scene", "getSoundByName")), (JO = QG.prototype).createOrUpdateSelectionOctree ?? (JO.createOrUpdateSelectionOctree = (0, VB.g)("Scene", "createOrUpdateSelectionOctree")), (MO = QG.prototype).createDefaultLight ?? (MO.createDefaultLight = (0, VB.g)("Scene", "createDefaultLight")), (PO = QG.prototype).createDefaultCamera ?? (PO.createDefaultCamera = (0, VB.g)("Scene", "createDefaultCamera")), (zO = QG.prototype).createDefaultCameraOrLight ?? (zO.createDefaultCameraOrLight = (0, VB.g)("Scene", "createDefaultCameraOrLight")), (lO = QG.prototype).createDefaultSkybox ?? (lO.createDefaultSkybox = (0, VB.g)("Scene", "createDefaultSkybox")), (pO = QG.prototype).createDefaultEnvironment ?? (pO.createDefaultEnvironment = (0, VB.g)("Scene", "createDefaultEnvironment")), (qO = QG.prototype).createDefaultVRExperience ?? (qO.createDefaultVRExperience = (0, VB.g)("Scene", "createDefaultVRExperience")), (ZO = QG.prototype).createDefaultXRExperienceAsync ?? (ZO.createDefaultXRExperienceAsync = (0, VB.g)("Scene", "createDefaultXRExperienceAsync")), (NO = QG.prototype).getGlowLayerByName ?? (NO.getGlowLayerByName = (0, VB.g)("Scene", "getGlowLayerByName")), (RO = QG.prototype).getHighlightLayerByName ?? (RO.getHighlightLayerByName = (0, VB.g)("Scene", "getHighlightLayerByName")), (WO = QG.prototype).getSelectionOutlineLayerByName ?? (WO.getSelectionOutlineLayerByName = (0, VB.g)("Scene", "getSelectionOutlineLayerByName")), (AO = QG.prototype).removeLensFlareSystem ?? (AO.removeLensFlareSystem = (0, VB.g)("Scene", "removeLensFlareSystem")), (VO = QG.prototype).addLensFlareSystem ?? (VO.addLensFlareSystem = (0, VB.g)("Scene", "addLensFlareSystem")), (SO = QG.prototype).getLensFlareSystemByName ?? (SO.getLensFlareSystemByName = (0, VB.g)("Scene", "getLensFlareSystemByName")), (nO = QG.prototype).getLensFlareSystemByID ?? (nO.getLensFlareSystemByID = (0, VB.g)("Scene", "getLensFlareSystemByID")), (UO = QG.prototype).getLensFlareSystemById ?? (UO.getLensFlareSystemById = (0, VB.g)("Scene", "getLensFlareSystemById")), (fO = QG.prototype).getPhysicsEngine ?? (fO.getPhysicsEngine = (0, VB.g)("Scene", "getPhysicsEngine")), (kO = QG.prototype).enablePhysics ?? (kO.enablePhysics = (0, VB.g)("Scene", "enablePhysics")), (dO = QG.prototype).disablePhysicsEngine ?? (dO.disablePhysicsEngine = (0, VB.g)("Scene", "disablePhysicsEngine")), (KO = QG.prototype).isPhysicsEnabled ?? (KO.isPhysicsEnabled = (0, VB.g)("Scene", "isPhysicsEnabled")), (uO = QG.prototype).deleteCompoundImpostor ?? (uO.deleteCompoundImpostor = (0, VB.g)("Scene", "deleteCompoundImpostor")), (mO = QG.prototype).removeReflectionProbe ?? (mO.removeReflectionProbe = (0, VB.g)("Scene", "removeReflectionProbe")), (IO = QG.prototype).addReflectionProbe ?? (IO.addReflectionProbe = (0, VB.g)("Scene", "addReflectionProbe")), (FO = QG.prototype).getBoundingBoxRenderer ?? (FO.getBoundingBoxRenderer = (0, VB.g)("Scene", "getBoundingBoxRenderer")), (iO = QG.prototype).enableDepthRenderer ?? (iO.enableDepthRenderer = (0, VB.g)("Scene", "enableDepthRenderer")), (LO = QG.prototype).disableDepthRenderer ?? (LO.disableDepthRenderer = (0, VB.g)("Scene", "disableDepthRenderer")), (gO = QG.prototype).enableFluidRenderer ?? (gO.enableFluidRenderer = (0, VB.g)("Scene", "enableFluidRenderer")), (rO = QG.prototype).disableFluidRenderer ?? (rO.disableFluidRenderer = (0, VB.g)("Scene", "disableFluidRenderer")), (XO = QG.prototype).enableGeometryBufferRenderer ?? (XO.enableGeometryBufferRenderer = (0, VB.g)("Scene", "enableGeometryBufferRenderer")), (wO = QG.prototype).disableGeometryBufferRenderer ?? (wO.disableGeometryBufferRenderer = (0, VB.g)("Scene", "disableGeometryBufferRenderer")), (EO = QG.prototype).enableIblCdfGenerator ?? (EO.enableIblCdfGenerator = (0, VB.g)("Scene", "enableIblCdfGenerator")), (cO = QG.prototype).disableIblCdfGenerator ?? (cO.disableIblCdfGenerator = (0, VB.g)("Scene", "disableIblCdfGenerator")), (hO = QG.prototype).getOutlineRenderer ?? (hO.getOutlineRenderer = (0, VB.g)("Scene", "getOutlineRenderer")), (aO = QG.prototype).enablePrePassRenderer ?? (aO.enablePrePassRenderer = (0, VB.g)("Scene", "enablePrePassRenderer")), (eO = QG.prototype).disablePrePassRenderer ?? (eO.disablePrePassRenderer = (0, VB.g)("Scene", "disablePrePassRenderer")), (TO = QG.prototype).enableSubSurfaceForPrePass ?? (TO.enableSubSurfaceForPrePass = (0, VB.g)("Scene", "enableSubSurfaceForPrePass")), (bO = QG.prototype).disableSubSurfaceForPrePass ?? (bO.disableSubSurfaceForPrePass = (0, VB.g)("Scene", "disableSubSurfaceForPrePass")), (CO = QG.prototype).pickSprite ?? (CO.pickSprite = (0, VB.g)("Scene", "pickSprite")), (HO = QG.prototype).pickSpriteWithRay ?? (HO.pickSpriteWithRay = (0, VB.g)("Scene", "pickSpriteWithRay")), (vO = QG.prototype).multiPickSprite ?? (vO.multiPickSprite = (0, VB.g)("Scene", "multiPickSprite")), (sO = QG.prototype).multiPickSpriteWithRay ?? (sO.multiPickSpriteWithRay = (0, VB.g)("Scene", "multiPickSpriteWithRay")), (xO = QG.prototype).setPointerOverSprite ?? (xO.setPointerOverSprite = (0, VB.g)("Scene", "setPointerOverSprite")), (tO = QG.prototype).getPointerOverSprite ?? (tO.getPointerOverSprite = (0, VB.g)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(QG.prototype, "mainSoundTrack") || Object.defineProperty(QG.prototype, "mainSoundTrack", (0, VB.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(QG.prototype, "soundTracks") || Object.defineProperty(QG.prototype, "soundTracks", (0, VB.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(QG.prototype, "audioEnabled") || Object.defineProperty(QG.prototype, "audioEnabled", (0, VB.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(QG.prototype, "headphone") || Object.defineProperty(QG.prototype, "headphone", (0, VB.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(QG.prototype, "audioListenerPositionProvider") || Object.defineProperty(QG.prototype, "audioListenerPositionProvider", (0, VB.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(QG.prototype, "audioListenerRotationProvider") || Object.defineProperty(QG.prototype, "audioListenerRotationProvider", (0, VB.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(QG.prototype, "audioPositioningRefreshRate") || Object.defineProperty(QG.prototype, "audioPositioningRefreshRate", (0, VB.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(QG.prototype, "selectionOctree") || Object.defineProperty(QG.prototype, "selectionOctree", (0, VB.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(QG.prototype, "debugLayer") || Object.defineProperty(QG.prototype, "debugLayer", (0, VB.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(QG.prototype, "gamepadManager") || Object.defineProperty(QG.prototype, "gamepadManager", (0, VB.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(QG.prototype, "simplificationQueue") || Object.defineProperty(QG.prototype, "simplificationQueue", (0, VB.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(QG.prototype, "onBeforePhysicsObservable") || Object.defineProperty(QG.prototype, "onBeforePhysicsObservable", (0, VB.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(QG.prototype, "onAfterPhysicsObservable") || Object.defineProperty(QG.prototype, "onAfterPhysicsObservable", (0, VB.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(QG.prototype, "reflectionProbes") || Object.defineProperty(QG.prototype, "reflectionProbes", (0, VB.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(QG.prototype, "forceShowBoundingBoxes") || Object.defineProperty(QG.prototype, "forceShowBoundingBoxes", (0, VB.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(QG.prototype, "depthPeelingRenderer") || Object.defineProperty(QG.prototype, "depthPeelingRenderer", (0, VB.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(QG.prototype, "useOrderIndependentTransparency") || Object.defineProperty(QG.prototype, "useOrderIndependentTransparency", (0, VB.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(QG.prototype, "fluidRenderer") || Object.defineProperty(QG.prototype, "fluidRenderer", (0, VB.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(QG.prototype, "geometryBufferRenderer") || Object.defineProperty(QG.prototype, "geometryBufferRenderer", (0, VB.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(QG.prototype, "iblCdfGenerator") || Object.defineProperty(QG.prototype, "iblCdfGenerator", (0, VB.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(QG.prototype, "prePassRenderer") || Object.defineProperty(QG.prototype, "prePassRenderer", (0, VB.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(QG.prototype, "subSurfaceConfiguration") || Object.defineProperty(QG.prototype, "subSurfaceConfiguration", (0, VB.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(QG.prototype, "spriteManagers") || Object.defineProperty(QG.prototype, "spriteManagers", (0, VB.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(QG.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(QG.prototype, "onBeforeSpritesRenderingObservable", (0, VB.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(QG.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(QG.prototype, "onAfterSpritesRenderingObservable", (0, VB.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41183: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB,
      c: () => DB
    });
    class YB {}
    YB.NAME_EFFECTLAYER = "EffectLayer", YB.NAME_LAYER = "Layer", YB.NAME_LENSFLARESYSTEM = "LensFlareSystem", YB.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", YB.NAME_PARTICLESYSTEM = "ParticleSystem", YB.NAME_GAMEPAD = "Gamepad", YB.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", YB.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", YB.NAME_PREPASSRENDERER = "PrePassRenderer", YB.NAME_DEPTHRENDERER = "DepthRenderer", YB.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", YB.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", YB.NAME_SPRITE = "Sprite", YB.NAME_SUBSURFACE = "SubSurface", YB.NAME_OUTLINERENDERER = "Outline", YB.NAME_PROCEDURALTEXTURE = "ProceduralTexture", YB.NAME_SHADOWGENERATOR = "ShadowGenerator", YB.NAME_OCTREE = "XDB", YB.NAME_PHYSICSENGINE = "PhysicsEngine", YB.NAME_AUDIO = "Audio", YB.NAME_FLUIDRENDERER = "FluidRenderer", YB.NAME_IBLCDFGENERATOR = "iblCDFGenerator", YB.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", YB.STEP_ISREADYFORMESH_EFFECTLAYER = 0, YB.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, YB.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, YB.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, YB.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, YB.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, YB.STEP_BEFORECAMERADRAW_PREPASS = 0, YB.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, YB.STEP_BEFORECAMERADRAW_LAYER = 2, YB.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, YB.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, YB.STEP_BEFORERENDERINGMESH_PREPASS = 0, YB.STEP_BEFORERENDERINGMESH_OUTLINE = 1, YB.STEP_AFTERRENDERINGMESH_PREPASS = 0, YB.STEP_AFTERRENDERINGMESH_OUTLINE = 1, YB.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, YB.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, YB.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, YB.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, YB.STEP_BEFORECLEAR_PREPASS = 1, YB.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, YB.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, YB.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, YB.STEP_AFTERCAMERADRAW_PREPASS = 0, YB.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, YB.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, YB.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, YB.STEP_AFTERCAMERADRAW_LAYER = 4, YB.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, YB.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, YB.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, YB.STEP_AFTERRENDER_AUDIO = 0, YB.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, YB.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, YB.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, YB.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, YB.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, YB.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, YB.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, YB.STEP_POINTERMOVE_SPRITE = 0, YB.STEP_POINTERDOWN_SPRITE = 0, YB.STEP_POINTERUP_SPRITE = 0;
    class DB extends Array {
      constructor(BB) {
        super(...BB)
      }
      static Create() {
        return Object.create(DB.prototype)
      }
      registerStep(BB, OB, GB) {
        let YB, DB = 0;
        for (; DB < this.length; DB++) {
          if (YB = this[DB].index, BB < YB) break
        }
        this.splice(DB, 0, {
          index: BB,
          component: OB,
          action: GB.bind(OB)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40998: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      d: () => jB,
      h: () => YB,
      j: () => DB,
      l: () => QB
    });

    function YB(BB, OB, GB, YB, DB, QB) {
      function oB(BB) {
        if (void 0 !== BB && "function" !== typeof BB) throw new TypeError("Function expected");
        return BB
      }
      for (var jB, yB = YB.kind, JB = "getter" === yB ? "get" : "setter" === yB ? "set" : "value", MB = !OB && BB ? YB.static ? BB : BB.prototype : null, PB = OB || (MB ? Object.getOwnPropertyDescriptor(MB, YB.name) : {}), zB = !1, lB = GB.length - 1; lB >= 0; lB--) {
        var pB = {};
        for (var qB in YB) pB[qB] = "access" === qB ? {} : YB[qB];
        for (var qB in YB.access) pB.access[qB] = YB.access[qB];
        pB.addInitializer = function(BB) {
          if (zB) throw new TypeError("Cannot add initializers after decoration has completed");
          QB.push(oB(BB || null))
        };
        var ZB = (0, GB[lB])("accessor" === yB ? {
          get: PB.get,
          set: PB.set
        } : PB[JB], pB);
        if ("accessor" === yB) {
          if (void 0 === ZB) continue;
          if (null === ZB || "object" !== typeof ZB) throw new TypeError("Object expected");
          (jB = oB(ZB.get)) && (PB.get = jB), (jB = oB(ZB.set)) && (PB.set = jB), (jB = oB(ZB.init)) && DB.unshift(jB)
        } else(jB = oB(ZB)) && ("field" === yB ? DB.unshift(jB) : PB[JB] = jB)
      }
      MB && Object.defineProperty(MB, YB.name, PB), zB = !0
    }

    function DB(BB, OB, GB) {
      for (var YB = arguments.length > 2, DB = 0; DB < OB.length; DB++) GB = YB ? OB[DB].call(BB, GB) : OB[DB].call(BB);
      return YB ? GB : void 0
    }

    function QB(BB, OB, GB) {
      return "symbol" === typeof OB && (OB = OB.description ? "[".concat(OB.description, "]") : ""), Object.defineProperty(BB, "name", {
        configurable: !0,
        value: GB ? "".concat(GB, " ", OB) : OB
      })
    }
    Object.create;
    Object.create;

    function oB(BB, OB, GB, YB) {
      if ("a" === GB && !YB) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof OB ? BB !== OB || !YB : !OB.has(BB)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === GB ? YB : "a" === GB ? YB.call(BB) : YB ? YB.value : OB.get(BB)
    }

    function jB(BB, OB, GB, YB, DB) {
      if ("m" === YB) throw new TypeError("Private method is not writable");
      if ("a" === YB && !DB) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof OB ? BB !== OB || !DB : !OB.has(BB)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === YB ? DB.call(BB, GB) : DB ? DB.value = GB : OB.set(BB, GB), GB
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);