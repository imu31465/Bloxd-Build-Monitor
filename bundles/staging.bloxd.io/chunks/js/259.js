export const id = 259;
export const ids = [259];
export const modules = {
  39680: (DD, CD, cD) => {
    cD.d(CD, {
      $d: () => SD,
      $e: () => ac,
      Ab: () => Ic,
      Ac: () => ND,
      Ae: () => Qc,
      Af: () => qc,
      Ag: () => sc,
      Bb: () => pc,
      Be: () => cI,
      Bf: () => Hc,
      Cd: () => ZD,
      D: () => yD,
      Dd: () => tD,
      Df: () => Jc,
      Dg: () => Nc,
      Eb: () => GD,
      Ec: () => gD,
      F: () => pC,
      Fd: () => ic,
      Fe: () => vc,
      Gc: () => SC,
      Gd: () => fc,
      Gf: () => xc,
      Hb: () => cc,
      He: () => mc,
      Hg: () => Yc,
      Ic: () => wD,
      Id: () => nD,
      J: () => xD,
      Jb: () => Cc,
      Je: () => Mc,
      K: () => JD,
      Kd: () => zD,
      Kf: () => Uc,
      Kg: () => yc,
      Lb: () => MC,
      Lc: () => WC,
      Le: () => Ec,
      Lf: () => II,
      Lg: () => tc,
      Md: () => VD,
      Me: () => Wc,
      Mf: () => Ac,
      Nf: () => DI,
      O: () => qD,
      Oc: () => kD,
      Od: () => lD,
      Pb: () => bC,
      Pe: () => Vc,
      Pf: () => rc,
      R: () => dC,
      Rb: () => pD,
      Sc: () => sD,
      Sd: () => jD,
      Se: () => jc,
      Sf: () => Fc,
      Uc: () => eC,
      V: () => MD,
      Vb: () => vD,
      Vf: () => CI,
      Wb: () => NC,
      Wd: () => tC,
      We: () => zc,
      Yc: () => IC,
      Z: () => YD,
      Zd: () => QD,
      Zf: () => ec,
      _b: () => hD,
      _e: () => hc,
      _f: () => nc,
      ad: () => BC,
      af: () => Gc,
      bb: () => iI,
      bc: () => Dc,
      bd: () => UD,
      bg: () => oc,
      cb: () => FC,
      ce: () => oC,
      cg: () => uc,
      d: () => iD,
      ec: () => KD,
      ef: () => Kc,
      fb: () => uD,
      fd: () => wC,
      fe: () => sC,
      g: () => fD,
      ge: () => RD,
      gg: () => Lc,
      hc: () => AD,
      hd: () => QC,
      he: () => yC,
      ic: () => rD,
      if: () => dc,
      j: () => OD,
      jb: () => rC,
      jc: () => CC,
      jd: () => cC,
      je: () => uC,
      kg: () => Tc,
      l: () => LD,
      ld: () => HD,
      lg: () => gc,
      m: () => wc,
      md: () => XD,
      mf: () => kc,
      mg: () => Zc,
      n: () => bc,
      nb: () => AC,
      nc: () => ZC,
      nd: () => ID,
      ne: () => RC,
      o: () => bD,
      pe: () => DC,
      pf: () => Rc,
      qd: () => PD,
      qg: () => lc,
      rb: () => eD,
      rc: () => ED,
      re: () => FD,
      s: () => kC,
      sb: () => hC,
      sf: () => pI,
      tg: () => Oc,
      uc: () => aD,
      ud: () => fC,
      v: () => YC,
      ve: () => dD,
      wb: () => TD,
      wf: () => Pc,
      xc: () => iC,
      xe: () => mD,
      xg: () => Xc,
      y: () => WD,
      yd: () => oD,
      ye: () => BD,
      z: () => EC
    });
    const ID = -2147483648,
      pD = 12,
      iD = 12,
      fD = 4095,
      bD = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      QD = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      wD = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      SD = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      BD = {
        Alive: 16
      },
      yD = 32,
      MD = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      tD = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      ZD = 4294967295,
      oD = 0,
      vD = 4294967295,
      ND = 4,
      gD = 123,
      XD = -2147483648,
      mD = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      nD = 51,
      OD = 5,
      PD = 4294967295,
      HD = 4294967295,
      UD = 128,
      xD = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      qD = 16,
      JD = 255,
      KD = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      aD = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      VD = {
        Hotbar: 256,
        Drop: 257
      },
      zD = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      jD = {
        Rate: 0,
        Gyro: 1
      },
      lD = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      LD = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      TD = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      GD = {
        LookPointed: 1,
        Held: 2
      },
      RD = 3,
      kD = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      dD = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      YD = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      WD = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      sD = {
        Stackable: 1
      },
      ED = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      eD = {
        Detail: 1,
        RoomForOne: 2
      },
      uD = {
        HaveIngredients: 1,
        Listed: 2
      },
      hD = {
        HasOpts: 1
      },
      rD = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      AD = {
        Up: 1,
        Down: 2
      },
      FD = {
        TwoD: 1,
        Loop: 2
      },
      DC = {
        StopAfter: 1
      },
      CC = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      cC = {
        Pose: 1,
        Visible: 2
      },
      IC = 255,
      pC = 65535,
      iC = 255,
      fC = 65535,
      bC = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      QC = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      wC = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      SC = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      BC = 4294967295,
      yC = 4294967295,
      MC = 255,
      tC = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      ZC = {
        critical: 123
      },
      oC = 4294967295,
      vC = {
        BYTES: 4,
        wy: (DD, CD) => DD.getUint32(CD + 0, !0)
      },
      NC = {
        BYTES: 12,
        serverId: (DD, CD) => DD.getInt32(CD + 0, !0),
        index: (DD, CD) => DD.getUint32(CD + 4, !0),
        kind: (DD, CD) => DD.getUint16(CD + 8, !0)
      },
      gC = {
        BYTES: 20,
        pos: (DD, CD, cD) => DD.getInt32(CD + 0 + 4 * cD, !0),
        actual: (DD, CD) => DD.getUint32(CD + 12, !0),
        dataLen: (DD, CD) => DD.getUint32(CD + 16, !0)
      },
      XC = {
        BYTES: 20,
        what: (DD, CD) => DD.getUint8(CD + 0),
        value: (DD, CD) => DD.getInt16(CD + 2, !0),
        pos: (DD, CD, cD) => DD.getInt32(CD + 4 + 4 * cD, !0),
        block: (DD, CD) => DD.getUint32(CD + 16, !0)
      },
      mC = {
        BYTES: 4,
        item: (DD, CD) => DD.getUint16(CD + 0, !0),
        slot: (DD, CD) => DD.getUint8(CD + 2)
      },
      nC = {
        BYTES: 16,
        target: (DD, CD) => DD.getInt32(CD + 0, !0),
        damage: (DD, CD) => DD.getFloat32(CD + 4, !0),
        distance: (DD, CD) => DD.getFloat32(CD + 8, !0),
        crit: (DD, CD) => DD.getUint8(CD + 12)
      },
      OC = {
        BYTES: 4,
        slot: (DD, CD) => DD.getUint16(CD + 0, !0)
      },
      PC = {
        BYTES: 20,
        what: (DD, CD) => DD.getUint8(CD + 0),
        value: (DD, CD) => DD.getInt16(CD + 2, !0),
        pos: (DD, CD, cD) => DD.getInt32(CD + 4 + 4 * cD, !0),
        block: (DD, CD) => DD.getUint32(CD + 16, !0)
      },
      HC = {
        BYTES: 12,
        serverId: (DD, CD) => DD.getInt32(CD + 0, !0),
        index: (DD, CD) => DD.getUint32(CD + 4, !0),
        what: (DD, CD) => DD.getUint16(CD + 8, !0)
      },
      UC = {
        BYTES: 24,
        cx: (DD, CD) => DD.getInt32(CD + 0, !0),
        cy: (DD, CD) => DD.getInt32(CD + 4, !0),
        cz: (DD, CD) => DD.getInt32(CD + 8, !0),
        slot: (DD, CD) => DD.getUint32(CD + 12, !0),
        generation: (DD, CD) => DD.getUint32(CD + 16, !0),
        flags: (DD, CD) => DD.getUint32(CD + 20, !0)
      },
      xC = {
        BYTES: 44,
        pos: (DD, CD, cD) => DD.getFloat64(CD + 0 + 8 * cD, !0),
        sound: (DD, CD) => DD.getUint16(CD + 24, !0),
        flags: (DD, CD) => DD.getUint16(CD + 26, !0),
        handle: (DD, CD) => DD.getUint32(CD + 28, !0),
        volume: (DD, CD) => DD.getFloat32(CD + 32, !0),
        rate: (DD, CD) => DD.getFloat32(CD + 36, !0),
        refDist: (DD, CD) => DD.getFloat32(CD + 40, !0)
      },
      qC = {
        BYTES: 28,
        pos: (DD, CD, cD) => DD.getFloat64(CD + 0 + 8 * cD, !0),
        handle: (DD, CD) => DD.getUint32(CD + 24, !0)
      },
      JC = {
        BYTES: 16,
        handle: (DD, CD) => DD.getUint32(CD + 0, !0),
        volume: (DD, CD) => DD.getFloat32(CD + 4, !0),
        rate: (DD, CD) => DD.getFloat32(CD + 8, !0),
        refDist: (DD, CD) => DD.getFloat32(CD + 12, !0)
      },
      KC = {
        BYTES: 12,
        handle: (DD, CD) => DD.getUint32(CD + 0, !0),
        to: (DD, CD) => DD.getFloat32(CD + 4, !0),
        ms: (DD, CD) => DD.getUint16(CD + 8, !0),
        flags: (DD, CD) => DD.getUint16(CD + 10, !0)
      },
      aC = {
        BYTES: 4,
        handle: (DD, CD) => DD.getUint32(CD + 0, !0)
      },
      VC = {
        BYTES: 4,
        reason: (DD, CD) => DD.getUint8(CD + 0),
        code: (DD, CD) => DD.getUint8(CD + 1)
      },
      zC = {
        BYTES: 4,
        key: (DD, CD) => DD.getUint8(CD + 0),
        tag: (DD, CD) => DD.getUint8(CD + 1)
      },
      jC = {
        BYTES: 16,
        save: (DD, CD) => DD.getUint32(CD + 0, !0),
        index: (DD, CD) => DD.getUint32(CD + 4, !0),
        ptr: (DD, CD) => DD.getUint32(CD + 8, !0),
        len: (DD, CD) => DD.getUint32(CD + 12, !0)
      },
      lC = {
        BYTES: 16,
        save: (DD, CD) => DD.getUint32(CD + 0, !0),
        kind: (DD, CD) => DD.getUint8(CD + 4),
        parts: (DD, CD) => DD.getUint32(CD + 8, !0),
        bytes: (DD, CD) => DD.getUint32(CD + 12, !0)
      },
      LC = {
        BYTES: 4,
        totalTicks: (DD, CD) => DD.getUint32(CD + 0, !0)
      },
      TC = {
        BYTES: 24,
        what: (DD, CD) => DD.getUint8(CD + 0),
        int: (DD, CD) => DD.getInt32(CD + 4, !0),
        x: (DD, CD) => DD.getFloat64(CD + 8, !0),
        y: (DD, CD) => DD.getFloat64(CD + 16, !0)
      },
      GC = {
        BYTES: 8,
        what: (DD, CD) => DD.getUint8(CD + 0),
        kind: (DD, CD) => DD.getUint8(CD + 1),
        save: (DD, CD) => DD.getUint32(CD + 4, !0)
      },
      RC = {
        BYTES: 4,
        Rf: (DD, CD) => DD.getUint16(CD + 0, !0)
      },
      kC = {
        BYTES: 360,
        eye: (DD, CD, cD) => DD.getFloat64(CD + 0 + 8 * cD, !0),
        localPos: (DD, CD, cD) => DD.getFloat64(CD + 24 + 8 * cD, !0),
        N9: (DD, CD, cD) => DD.getFloat64(CD + 48 + 8 * cD, !0),
        viewProj: (DD, CD, cD) => DD.getFloat32(CD + 72 + 4 * cD, !0),
        origin: (DD, CD, cD) => DD.getInt32(CD + 136 + 4 * cD, !0),
        heading: (DD, CD) => DD.getFloat32(CD + 148, !0),
        pitch: (DD, CD) => DD.getFloat32(CD + 152, !0),
        tanHalfFovX: (DD, CD) => DD.getFloat32(CD + 156, !0),
        tanHalfFovY: (DD, CD) => DD.getFloat32(CD + 160, !0),
        viewportCss: (DD, CD, cD) => DD.getFloat32(CD + 164 + 4 * cD, !0),
        localVel: (DD, CD, cD) => DD.getFloat32(CD + 172 + 4 * cD, !0),
        actionDir: (DD, CD, cD) => DD.getFloat32(CD + 184 + 4 * cD, !0),
        localId: (DD, CD) => DD.getInt32(CD + 196, !0),
        playerFlags: (DD, CD) => DD.getUint32(CD + 200, !0),
        targetBlock: (DD, CD, cD) => DD.getInt32(CD + 204 + 4 * cD, !0),
        targetAdjacent: (DD, CD, cD) => DD.getInt32(CD + 216 + 4 * cD, !0),
        targetBlockId: (DD, CD) => DD.getUint32(CD + 228, !0),
        targetNormal: (DD, CD, cD) => DD.getInt8(CD + 232 + 1 * cD),
        targetFlags: (DD, CD) => DD.getUint8(CD + 235),
        pickedEntity: (DD, CD) => DD.getInt32(CD + 236, !0),
        breakingPos: (DD, CD, cD) => DD.getInt32(CD + 240 + 4 * cD, !0),
        breakingProgress: (DD, CD) => DD.getFloat32(CD + 252, !0),
        gH: (DD, CD) => DD.getUint16(CD + 256, !0),
        selectedSlot: (DD, CD) => DD.getUint8(CD + 258),
        heldFlags: (DD, CD) => DD.getUint8(CD + 259),
        heldAttrVersion: (DD, CD) => DD.getUint32(CD + 260, !0),
        inventoryVersion: (DD, CD) => DD.getUint32(CD + 264, !0),
        effectsVersion: (DD, CD) => DD.getUint32(CD + 268, !0),
        entitiesVersion: (DD, CD) => DD.getUint32(CD + 272, !0),
        entRenderPtr: (DD, CD) => DD.getUint32(CD + 276, !0),
        entCapacity: (DD, CD) => DD.getUint32(CD + 280, !0),
        frameMs: (DD, CD) => DD.getFloat32(CD + 284, !0),
        fps: (DD, CD) => DD.getFloat32(CD + 288, !0),
        entVisPtr: (DD, CD) => DD.getUint32(CD + 292, !0),
        momentumFrac: (DD, CD) => DD.getFloat32(CD + 296, !0),
        chunkSlotsPtr: (DD, CD) => DD.getUint32(CD + 300, !0),
        chunkSlotsLen: (DD, CD) => DD.getUint32(CD + 304, !0),
        walkThroughPtr: (DD, CD) => DD.getUint32(CD + 308, !0),
        walkThroughLen: (DD, CD) => DD.getUint32(CD + 312, !0),
        audioViewPtr: (DD, CD) => DD.getUint32(CD + 316, !0),
        inventoryViewPtr: (DD, CD) => DD.getUint32(CD + 320, !0),
        eventOverflowGen: (DD, CD) => DD.getUint32(CD + 324, !0),
        eventOverflowMask: (DD, CD) => DD.getUint32(CD + 328, !0),
        promptEntity: (DD, CD) => DD.getInt32(CD + 332, !0),
        replayViewPtr: (DD, CD) => DD.getUint32(CD + 336, !0),
        slotIcon: (DD, CD) => DD.getUint32(CD + 340, !0),
        localDeaths: (DD, CD) => DD.getUint32(CD + 344, !0),
        cameraFar: (DD, CD) => DD.getFloat32(CD + 348, !0),
        gliderBoostFuel: (DD, CD) => DD.getUint32(CD + 352, !0),
        interactLabel: (DD, CD) => DD.getUint16(CD + 356, !0),
        interactIcon: (DD, CD) => DD.getUint16(CD + 358, !0)
      },
      dC = {
        BYTES: 16,
        voxelsPtr: (DD, CD) => DD.getUint32(CD + 0, !0),
        version: (DD, CD) => DD.getUint32(CD + 4, !0),
        generation: (DD, CD) => DD.getUint32(CD + 8, !0),
        Lb: (DD, CD) => DD.getUint32(CD + 12, !0)
      },
      YC = {
        BYTES: 56,
        listener: (DD, CD, cD) => DD.getFloat64(CD + 0 + 8 * cD, !0),
        forward: (DD, CD, cD) => DD.getFloat32(CD + 24 + 4 * cD, !0),
        up: (DD, CD, cD) => DD.getFloat32(CD + 36 + 4 * cD, !0),
        dropped: (DD, CD) => DD.getUint32(CD + 48, !0),
        unfollowed: (DD, CD) => DD.getUint32(CD + 52, !0)
      },
      WC = {
        BYTES: 8,
        item: (DD, CD) => DD.getUint16(CD + 0, !0),
        amount: (DD, CD) => DD.getUint16(CD + 2, !0),
        attrVersion: (DD, CD) => DD.getUint32(CD + 4, !0)
      },
      sC = {
        BYTES: 76,
        version: (DD, CD) => DD.getUint32(CD + 0, !0),
        state: (DD, CD) => DD.getUint8(CD + 4),
        cameraMode: (DD, CD) => DD.getUint8(CD + 5),
        wy: (DD, CD) => DD.getUint32(CD + 8, !0),
        totalTicks: (DD, CD) => DD.getUint32(CD + 12, !0),
        speed: (DD, CD) => DD.getFloat32(CD + 16, !0),
        markIn: (DD, CD) => DD.getUint32(CD + 20, !0),
        markOut: (DD, CD) => DD.getUint32(CD + 24, !0),
        editVersion: (DD, CD) => DD.getUint32(CD + 28, !0),
        drops: (DD, CD, cD) => DD.getUint32(CD + 32 + 4 * cD, !0)
      },
      EC = {
        BYTES: 6,
        flags: (DD, CD) => DD.getUint8(CD + 0),
        harvestType: (DD, CD) => DD.getUint8(CD + 1),
        harvestLevel: (DD, CD) => DD.getUint8(CD + 2),
        attachedTop: (DD, CD) => DD.getUint16(CD + 4, !0)
      },
      eC = {
        BYTES: 3,
        flags: (DD, CD) => DD.getUint8(CD + 0),
        harvests: (DD, CD) => DD.getUint8(CD + 1),
        level: (DD, CD) => DD.getUint8(CD + 2)
      },
      uC = {
        BYTES: 12,
        item: (DD, CD) => DD.getUint32(CD + 0, !0),
        amount: (DD, CD) => DD.getFloat64(CD + 4, !0)
      },
      hC = {
        BYTES: 16,
        recipes: (DD, CD) => DD.getUint32(CD + 0, !0),
        ingredients: (DD, CD) => DD.getUint32(CD + 4, !0),
        craftAllTimes: (DD, CD) => DD.getUint32(CD + 8, !0),
        flags: (DD, CD) => DD.getUint32(CD + 12, !0)
      },
      rC = {
        BYTES: 10,
        item: (DD, CD) => DD.getUint16(CD + 0, !0),
        recipe: (DD, CD) => DD.getUint16(CD + 2, !0),
        produces: (DD, CD) => DD.getUint16(CD + 4, !0),
        requires: (DD, CD) => DD.getUint16(CD + 6, !0),
        flags: (DD, CD) => DD.getUint8(CD + 8)
      },
      AC = {
        BYTES: 4,
        amount: (DD, CD) => DD.getUint16(CD + 0, !0),
        items: (DD, CD) => DD.getUint16(CD + 2, !0)
      },
      FC = {
        BYTES: 8,
        amount: (DD, CD) => DD.getUint32(CD + 0, !0),
        item: (DD, CD) => DD.getUint16(CD + 4, !0),
        from: (DD, CD) => DD.getUint16(CD + 6, !0)
      },
      Dc = {
        BYTES: 16,
        serverId: (DD, CD) => DD.getInt32(CD + 0, !0),
        len: (DD, CD) => DD.getUint32(CD + 4, !0),
        kind: (DD, CD) => DD.getUint16(CD + 8, !0),
        variation: (DD, CD) => DD.getUint16(CD + 10, !0),
        pose: (DD, CD) => DD.getUint8(CD + 12),
        meta: (DD, CD) => DD.getUint8(CD + 13),
        mesh: (DD, CD) => DD.getUint8(CD + 14),
        flags: (DD, CD) => DD.getUint8(CD + 15)
      },
      Cc = {
        BYTES: 40,
        terrainOpaque: (DD, CD) => DD.getUint32(CD + 0, !0),
        terrainTransparent: (DD, CD) => DD.getUint32(CD + 4, !0),
        terrainPack: (DD, CD) => DD.getUint32(CD + 8, !0),
        earthSky: (DD, CD) => DD.getUint32(CD + 12, !0),
        skyMeshes: (DD, CD) => DD.getUint32(CD + 16, !0),
        regular: (DD, CD) => DD.getUint32(CD + 20, !0),
        thin: (DD, CD) => DD.getUint32(CD + 24, !0),
        line: (DD, CD) => DD.getUint32(CD + 28, !0),
        text: (DD, CD) => DD.getUint32(CD + 32, !0),
        particles: (DD, CD) => DD.getUint32(CD + 36, !0)
      },
      cc = {
        BYTES: 16,
        fov: (DD, CD) => DD.getFloat32(CD + 0, !0),
        baseFov: (DD, CD) => DD.getFloat32(CD + 4, !0),
        aspect: (DD, CD) => DD.getFloat32(CD + 8, !0),
        bodyHeading: (DD, CD) => DD.getFloat32(CD + 12, !0)
      },
      Ic = {
        BYTES: 32,
        eye: (DD, CD, cD) => DD.getFloat64(CD + 0 + 8 * cD, !0),
        heading: (DD, CD) => DD.getFloat32(CD + 24, !0),
        pitch: (DD, CD) => DD.getFloat32(CD + 28, !0)
      },
      pc = {
        BYTES: 40,
        feet: (DD, CD, cD) => DD.getFloat64(CD + 0 + 8 * cD, !0),
        eyeHeight: (DD, CD) => DD.getFloat32(CD + 24, !0),
        heading: (DD, CD) => DD.getFloat32(CD + 28, !0),
        headingIsDrawn: (DD, CD) => DD.getUint32(CD + 32, !0)
      },
      ic = 32,
      fc = 63,
      bc = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function Qc(DD, CD, cD, ID, pD) {
      var iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD, HD, UD, xD, qD, JD;
      switch (DD) {
        case 32:
          return 4 === ID && (null === (iD = pD.tickEnd) || void 0 === iD || iD.call(pD, vC.wy(CD, cD)), !0);
        case 33:
          return 12 === ID && (null === (fD = pD.entitySpawned) || void 0 === fD || fD.call(pD, NC.serverId(CD, cD), NC.index(CD, cD), NC.kind(CD, cD)), !0);
        case 34:
          return 12 === ID && (null === (bD = pD.entityDespawned) || void 0 === bD || bD.call(pD, NC.serverId(CD, cD), NC.index(CD, cD), NC.kind(CD, cD)), !0);
        case 39:
          return !(ID < 20) && (null === (QD = pD.changeBlockFail) || void 0 === QD || QD.call(pD, gC.pos(CD, cD, 0), gC.pos(CD, cD, 1), gC.pos(CD, cD, 2), gC.actual(CD, cD), gC.dataLen(CD, cD), cD + 20, ID - 20), !0);
        case 46:
          return 0 === ID && (null === (wD = pD.changeBlockFailEnd) || void 0 === wD || wD.call(pD), !0);
        case 48:
          return 20 === ID && (null === (SD = pD.inventoryEvent) || void 0 === SD || SD.call(pD, XC.what(CD, cD), XC.value(CD, cD), XC.pos(CD, cD, 0), XC.pos(CD, cD, 1), XC.pos(CD, cD, 2), XC.block(CD, cD)), !0);
        case 49:
          return 4 === ID && (null === (BD = pD.heldItemChanged) || void 0 === BD || BD.call(pD, mC.item(CD, cD), mC.slot(CD, cD)), !0);
        case 50:
          return 16 === ID && (null === (yD = pD.shotDamage) || void 0 === yD || yD.call(pD, nC.target(CD, cD), nC.damage(CD, cD), nC.distance(CD, cD), nC.crit(CD, cD)), !0);
        case 51:
          return !(ID < 4) && (null === (MD = pD.enchantOffer) || void 0 === MD || MD.call(pD, OC.slot(CD, cD), cD + 4, ID - 4), !0);
        case 52:
          return !(ID < 20) && (null === (tD = pD.uiEvent) || void 0 === tD || tD.call(pD, PC.what(CD, cD), PC.value(CD, cD), PC.pos(CD, cD, 0), PC.pos(CD, cD, 1), PC.pos(CD, cD, 2), PC.block(CD, cD), cD + 20, ID - 20), !0);
        case 53:
          return 12 === ID && (null === (ZD = pD.entityInfoChanged) || void 0 === ZD || ZD.call(pD, HC.serverId(CD, cD), HC.index(CD, cD), HC.what(CD, cD)), !0);
        case 55:
          return 24 === ID && (null === (oD = pD.chunkSlot) || void 0 === oD || oD.call(pD, UC.cx(CD, cD), UC.cy(CD, cD), UC.cz(CD, cD), UC.slot(CD, cD), UC.generation(CD, cD), UC.flags(CD, cD)), !0);
        case 40:
          return 44 === ID && (null === (vD = pD.playSound) || void 0 === vD || vD.call(pD, xC.pos(CD, cD, 0), xC.pos(CD, cD, 1), xC.pos(CD, cD, 2), xC.sound(CD, cD), xC.flags(CD, cD), xC.handle(CD, cD), xC.volume(CD, cD), xC.rate(CD, cD), xC.refDist(CD, cD)), !0);
        case 41:
          return 28 === ID && (null === (ND = pD.soundPos) || void 0 === ND || ND.call(pD, qC.pos(CD, cD, 0), qC.pos(CD, cD, 1), qC.pos(CD, cD, 2), qC.handle(CD, cD)), !0);
        case 42:
          return 16 === ID && (null === (gD = pD.soundSet) || void 0 === gD || gD.call(pD, JC.handle(CD, cD), JC.volume(CD, cD), JC.rate(CD, cD), JC.refDist(CD, cD)), !0);
        case 43:
          return 12 === ID && (null === (XD = pD.soundFade) || void 0 === XD || XD.call(pD, KC.handle(CD, cD), KC.to(CD, cD), KC.ms(CD, cD), KC.flags(CD, cD)), !0);
        case 44:
          return 4 === ID && (null === (mD = pD.soundStop) || void 0 === mD || mD.call(pD, aC.handle(CD, cD)), !0);
        case 45:
          return 0 === ID && (null === (nD = pD.soundReset) || void 0 === nD || nD.call(pD), !0);
        case 56:
          return 4 === ID && (null === (OD = pD.replayFailed) || void 0 === OD || OD.call(pD, VC.reason(CD, cD), VC.code(CD, cD)), !0);
        case 57:
          return !(ID < 4) && (null === (PD = pD.replayOption) || void 0 === PD || PD.call(pD, zC.key(CD, cD), zC.tag(CD, cD), cD + 4, ID - 4), !0);
        case 58:
          return 16 === ID && (null === (HD = pD.replayFilePart) || void 0 === HD || HD.call(pD, jC.save(CD, cD), jC.index(CD, cD), jC.ptr(CD, cD), jC.len(CD, cD)), !0);
        case 59:
          return 16 === ID && (null === (UD = pD.replayFileReady) || void 0 === UD || UD.call(pD, lC.save(CD, cD), lC.kind(CD, cD), lC.parts(CD, cD), lC.bytes(CD, cD)), !0);
        case 60:
          return !(ID < 4) && (null === (xD = pD.replayOpened) || void 0 === xD || xD.call(pD, LC.totalTicks(CD, cD), cD + 4, ID - 4), !0);
        case 61:
          return !(ID < 24) && (null === (qD = pD.replayUiEvent) || void 0 === qD || qD.call(pD, TC.what(CD, cD), TC.int(CD, cD), TC.x(CD, cD), TC.y(CD, cD), cD + 24, ID - 24), !0);
        case 62:
          return 8 === ID && (null === (JD = pD.recorderEvent) || void 0 === JD || JD.call(pD, GC.what(CD, cD), GC.kind(CD, cD), GC.save(CD, cD)), !0);
        default:
          return !1
      }
    }
    const wc = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let Sc = new Uint8Array(0);

    function Bc(DD) {
      return Sc.buffer !== DD.buffer && (Sc = new Uint8Array(DD.buffer)), Sc
    }

    function yc(DD, CD, cD) {
      const ID = DD.VM(66, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint8(ID + 0, cD), !0
    }

    function Mc(DD, CD, cD) {
      const ID = DD.VM(67, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint32(ID + 0, cD, !0), !0
    }

    function tc(DD, CD, cD) {
      const ID = DD.VM(68, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint8(ID + 0, cD), !0
    }

    function Zc(DD, CD, cD, ID) {
      const pD = DD.VM(69, CD, 4 + ID.length);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setUint8(pD + 0, cD), Bc(iD).set(ID, iD.byteOffset + pD + 4), !0
    }

    function oc(DD, CD, cD, ID, pD) {
      const iD = DD.VM(128, CD, 4 + pD.length);
      if (iD < 0) return !1;
      const fD = DD.view;
      return fD.setUint8(iD + 0, cD), fD.setUint16(iD + 2, ID, !0), Bc(fD).set(pD, fD.byteOffset + iD + 4), !0
    }

    function vc(DD, CD, cD) {
      const ID = DD.VM(131, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setInt32(ID + 0, cD, !0), !0
    }

    function Nc(DD, CD, cD) {
      const ID = DD.VM(132, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint32(ID + 0, cD, !0), !0
    }

    function gc(DD, CD, cD) {
      const ID = DD.VM(133, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint32(ID + 0, cD, !0), !0
    }

    function Xc(DD, CD, cD) {
      const ID = DD.VM(144, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint8(ID + 0, cD), !0
    }

    function mc(DD, CD, cD, ID, pD) {
      const iD = DD.VM(145, CD, 12);
      if (iD < 0) return !1;
      const fD = DD.view;
      return fD.setInt32(iD + 0, cD, !0), fD.setInt32(iD + 4, ID, !0), fD.setInt32(iD + 8, pD, !0), !0
    }

    function nc(DD, CD, cD, ID) {
      const pD = DD.VM(256, CD, 4 + ID.length);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setUint16(pD + 0, cD, !0), Bc(iD).set(ID, iD.byteOffset + pD + 4), !0
    }

    function Oc(DD, CD, cD) {
      const ID = DD.VM(258, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint8(ID + 0, cD), !0
    }

    function Pc(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
      const wD = DD.VM(320, CD, 48 + QD.length);
      if (wD < 0) return !1;
      const SD = DD.view;
      SD.setUint32(wD + 0, cD, !0), SD.setUint16(wD + 4, ID, !0), SD.setUint16(wD + 6, pD, !0), SD.setUint32(wD + 8, iD, !0);
      for (let BD = 0; BD < 3; BD++) SD.setFloat64(wD + 12 + 8 * BD, fD[BD], !0);
      for (let BD = 0; BD < 3; BD++) SD.setFloat32(wD + 36 + 4 * BD, bD[BD], !0);
      return Bc(SD).set(QD, SD.byteOffset + wD + 48), !0
    }

    function Hc(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
      const wD = DD.VM(321, CD, 48 + QD.length);
      if (wD < 0) return !1;
      const SD = DD.view;
      SD.setUint32(wD + 0, cD, !0), SD.setInt32(wD + 4, ID, !0), SD.setUint16(wD + 8, pD, !0), SD.setUint16(wD + 10, iD, !0);
      for (let BD = 0; BD < 3; BD++) SD.setFloat64(wD + 12 + 8 * BD, fD[BD], !0);
      for (let BD = 0; BD < 3; BD++) SD.setFloat32(wD + 36 + 4 * BD, bD[BD], !0);
      return Bc(SD).set(QD, SD.byteOffset + wD + 48), !0
    }

    function Uc(DD, CD, cD, ID, pD, iD, fD) {
      const bD = DD.VM(322, CD, 44 + fD.length);
      if (bD < 0) return !1;
      const QD = DD.view;
      QD.setUint32(bD + 0, cD, !0), QD.setUint32(bD + 4, ID, !0);
      for (let wD = 0; wD < 3; wD++) QD.setFloat64(bD + 8 + 8 * wD, pD[wD], !0);
      for (let wD = 0; wD < 3; wD++) QD.setFloat32(bD + 32 + 4 * wD, iD[wD], !0);
      return Bc(QD).set(fD, QD.byteOffset + bD + 44), !0
    }

    function xc(DD, CD, cD) {
      const ID = DD.VM(323, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint32(ID + 0, cD, !0), !0
    }

    function qc(DD, CD, cD, ID, pD, iD) {
      const fD = DD.VM(324, CD, 32 + iD.length);
      if (fD < 0) return !1;
      const bD = DD.view;
      bD.setUint32(fD + 0, cD, !0), bD.setUint32(fD + 4, ID, !0);
      for (let QD = 0; QD < 3; QD++) bD.setFloat64(fD + 8 + 8 * QD, pD[QD], !0);
      return Bc(bD).set(iD, bD.byteOffset + fD + 32), !0
    }

    function Jc(DD, CD) {
      return !(DD.VM(325, CD, 0) < 0)
    }

    function Kc(DD, CD, cD, ID, pD, iD) {
      const fD = DD.VM(384, CD, 16);
      if (fD < 0) return !1;
      const bD = DD.view;
      return bD.setUint32(fD + 0, cD, !0), bD.setUint32(fD + 4, ID, !0), bD.setFloat32(fD + 8, pD, !0), bD.setFloat32(fD + 12, iD, !0), !0
    }

    function ac(DD, CD, cD, ID, pD, iD, fD) {
      const bD = DD.VM(385, CD, 36 + fD.length);
      if (bD < 0) return !1;
      const QD = DD.view;
      QD.setUint32(bD + 0, cD, !0), QD.setUint32(bD + 4, ID, !0);
      for (let wD = 0; wD < 3; wD++) QD.setFloat64(bD + 8 + 8 * wD, pD[wD], !0);
      return QD.setUint32(bD + 32, iD, !0), Bc(QD).set(fD, QD.byteOffset + bD + 36), !0
    }

    function Vc(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
      const wD = DD.VM(386, CD, 56 + QD.length);
      if (wD < 0) return !1;
      const SD = DD.view;
      SD.setUint32(wD + 0, cD, !0), SD.setUint8(wD + 4, ID);
      for (let BD = 0; BD < 4; BD++) SD.setFloat32(wD + 8 + 4 * BD, pD[BD], !0);
      for (let BD = 0; BD < 3; BD++) SD.setFloat64(wD + 24 + 8 * BD, iD[BD], !0);
      return SD.setUint32(wD + 48, fD, !0), SD.setUint32(wD + 52, bD, !0), Bc(SD).set(QD, SD.byteOffset + wD + 56), !0
    }

    function zc(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
      const wD = DD.VM(387, CD, 56);
      if (wD < 0) return !1;
      const SD = DD.view;
      SD.setUint32(wD + 0, cD, !0), SD.setUint16(wD + 4, ID, !0), SD.setUint8(wD + 6, pD);
      for (let BD = 0; BD < 3; BD++) SD.setFloat64(wD + 8 + 8 * BD, iD[BD], !0);
      for (let BD = 0; BD < 2; BD++) SD.setFloat32(wD + 32 + 4 * BD, fD[BD], !0);
      SD.setFloat32(wD + 40, bD, !0);
      for (let BD = 0; BD < 3; BD++) SD.setFloat32(wD + 44 + 4 * BD, QD[BD], !0);
      return !0
    }

    function jc(DD, CD, cD) {
      const ID = DD.VM(388, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint32(ID + 0, cD, !0), !0
    }

    function lc(DD, CD, cD, ID) {
      const pD = DD.VM(389, CD, 8);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setInt32(pD + 0, cD, !0), iD.setFloat32(pD + 4, ID, !0), !0
    }

    function Lc(DD, CD, cD, ID) {
      const pD = DD.VM(390, CD, 8);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setInt32(pD + 0, cD, !0), iD.setFloat32(pD + 4, ID, !0), !0
    }

    function Tc(DD, CD, cD, ID, pD, iD) {
      const fD = DD.VM(391, CD, 12);
      if (fD < 0) return !1;
      const bD = DD.view;
      return bD.setFloat32(fD + 0, cD, !0), bD.setFloat32(fD + 4, ID, !0), bD.setUint8(fD + 8, pD), bD.setUint8(fD + 9, iD), !0
    }

    function Gc(DD, CD, cD) {
      const ID = DD.VM(392, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint32(ID + 0, cD, !0), !0
    }

    function Rc(DD, CD, cD, ID, pD) {
      const iD = DD.VM(393, CD, 12);
      if (iD < 0) return !1;
      const fD = DD.view;
      return fD.setUint32(iD + 0, cD, !0), fD.setUint16(iD + 4, ID, !0), fD.setFloat32(iD + 8, pD, !0), !0
    }

    function kc(DD, CD, cD, ID, pD, iD, fD) {
      const bD = DD.VM(394, CD, 36);
      if (bD < 0) return !1;
      const QD = DD.view;
      QD.setUint32(bD + 0, cD, !0), QD.setUint16(bD + 4, ID, !0), QD.setUint8(bD + 6, pD);
      for (let wD = 0; wD < 3; wD++) QD.setFloat64(bD + 8 + 8 * wD, iD[wD], !0);
      return QD.setFloat32(bD + 32, fD, !0), !0
    }

    function dc(DD, CD, cD) {
      const ID = DD.VM(398, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setUint32(ID + 0, cD, !0), !0
    }

    function Yc(DD, CD, cD) {
      const ID = DD.VM(448, CD, 4);
      if (ID < 0) return !1;
      return DD.view.setFloat32(ID + 0, cD, !0), !0
    }

    function Wc(DD, CD, cD, ID) {
      const pD = DD.VM(450, CD, 12);
      if (pD < 0) return !1;
      const iD = DD.view;
      for (let fD = 0; fD < 2; fD++) iD.setFloat32(pD + 0 + 4 * fD, cD[fD], !0);
      return iD.setUint8(pD + 8, ID), !0
    }

    function sc(DD, CD, cD, ID) {
      const pD = DD.VM(452, CD, 8);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setFloat32(pD + 0, cD, !0), iD.setUint8(pD + 4, ID), !0
    }

    function Ec(DD, CD, cD, ID, pD) {
      const iD = DD.VM(454, CD, 4);
      if (iD < 0) return !1;
      const fD = DD.view;
      return fD.setUint8(iD + 0, cD), fD.setUint8(iD + 1, ID), fD.setUint8(iD + 2, pD), !0
    }

    function ec(DD, CD, cD, ID) {
      const pD = DD.VM(455, CD, 40);
      if (pD < 0) return !1;
      const iD = DD.view;
      for (let fD = 0; fD < 9; fD++) iD.setInt32(pD + 0 + 4 * fD, cD[fD], !0);
      return iD.setUint32(pD + 36, ID, !0), !0
    }

    function uc(DD, CD, cD, ID) {
      const pD = DD.VM(456, CD, 8);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setFloat32(pD + 0, cD, !0), iD.setUint8(pD + 4, ID), !0
    }

    function hc(DD, CD, cD, ID, pD) {
      const iD = DD.VM(457, CD, 16);
      if (iD < 0) return !1;
      const fD = DD.view;
      for (let bD = 0; bD < 3; bD++) fD.setInt32(iD + 0 + 4 * bD, cD[bD], !0);
      for (let bD = 0; bD < 3; bD++) fD.setInt8(iD + 12 + 1 * bD, ID[bD]);
      return fD.setUint8(iD + 15, pD), !0
    }

    function rc(DD, CD, cD, ID) {
      const pD = DD.VM(530, CD, 4 + ID.length);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setUint8(pD + 0, cD), Bc(iD).set(ID, iD.byteOffset + pD + 4), !0
    }

    function Ac(DD, CD, cD, ID, pD, iD) {
      const fD = DD.VM(531, CD, 12 + iD.length);
      if (fD < 0) return !1;
      const bD = DD.view;
      return bD.setFloat32(fD + 0, cD, !0), bD.setFloat32(fD + 4, ID, !0), bD.setUint32(fD + 8, pD, !0), Bc(bD).set(iD, bD.byteOffset + fD + 12), !0
    }

    function Fc(DD, CD, cD, ID, pD, iD) {
      const fD = DD.VM(532, CD, 12 + iD.length);
      if (fD < 0) return !1;
      const bD = DD.view;
      return bD.setInt32(fD + 0, cD, !0), bD.setInt32(fD + 4, ID, !0), bD.setUint32(fD + 8, pD, !0), Bc(bD).set(iD, bD.byteOffset + fD + 12), !0
    }

    function DI(DD, CD, cD, ID, pD) {
      const iD = DD.VM(533, CD, 8 + pD.length);
      if (iD < 0) return !1;
      const fD = DD.view;
      return fD.setInt32(iD + 0, cD, !0), fD.setInt32(iD + 4, ID, !0), Bc(fD).set(pD, fD.byteOffset + iD + 8), !0
    }

    function CI(DD, CD) {
      return !(DD.VM(576, CD, 0) < 0)
    }

    function cI(DD, CD, cD, ID, pD, iD) {
      const fD = DD.VM(577, CD, 36 + iD.length);
      if (fD < 0) return !1;
      const bD = DD.view;
      bD.setUint8(fD + 0, cD);
      for (let QD = 0; QD < 16; QD++) bD.setUint8(fD + 4 + 1 * QD, ID[QD]);
      for (let QD = 0; QD < 16; QD++) bD.setUint8(fD + 20 + 1 * QD, pD[QD]);
      return Bc(bD).set(iD, bD.byteOffset + fD + 36), !0
    }

    function II(DD, CD, cD, ID) {
      const pD = DD.VM(578, CD, 4 + ID.length);
      if (pD < 0) return !1;
      const iD = DD.view;
      return iD.setUint8(pD + 0, cD), Bc(iD).set(ID, iD.byteOffset + pD + 4), !0
    }

    function pI(DD, CD, cD, ID, pD, iD, fD, bD) {
      const QD = DD.VM(579, CD, 36);
      if (QD < 0) return !1;
      const wD = DD.view;
      return wD.setFloat64(QD + 0, cD, !0), wD.setFloat64(QD + 8, ID, !0), wD.setFloat64(QD + 16, pD, !0), wD.setFloat64(QD + 24, iD, !0), wD.setUint16(QD + 32, fD, !0), wD.setUint8(QD + 34, bD), !0
    }
    class iI {
      constructor(DD, CD) {
        this.core = DD, this.afterCall = CD
      }
      canModify(DD, CD, cD) {
        const ID = this.core.EpD(DD, CD, cD);
        return this.afterCall(), ID
      }
      terrainBlocked(DD, CD, cD, ID, pD) {
        const iD = this.core.RiD(DD, CD, cD, ID, pD);
        return this.afterCall(), iD
      }
      Hx(DD, CD, cD, ID) {
        const pD = this.core.NM(DD, CD, cD, ID);
        return this.afterCall(), pD
      }
      blockData(DD, CD, cD) {
        const ID = this.core.WpD(DD, CD, cD);
        return this.afterCall(), ID
      }
      cameraSweep(DD, CD, cD, ID, pD, iD, fD) {
        const bD = this.core.kID(DD, CD, cD, ID, pD, iD, fD);
        return this.afterCall(), bD
      }
      hasServerTarget(DD) {
        const CD = this.core.iiD(DD);
        return this.afterCall(), CD
      }
      entityInteractable(DD) {
        const CD = this.core.DiD(DD);
        return this.afterCall(), CD
      }
      entityCrouching(DD) {
        const CD = this.core.FpD(DD);
        return this.afterCall(), CD
      }
      predictServerPosition(DD, CD, cD, ID) {
        const pD = this.core.viD(DD, CD, cD, ID);
        return this.afterCall(), pD
      }
      setOtherEntitySetting(DD, CD, cD) {
        const ID = this.core.EID(DD, CD, cD);
        return this.afterCall(), ID
      }
      entityInfoBatch(DD) {
        const CD = this.core.hID(DD);
        return this.afterCall(), CD
      }
      entityName(DD) {
        const CD = this.core.CiD(DD);
        return this.afterCall(), CD
      }
      hasEffect(DD, CD) {
        const cD = this.core.piD(DD, CD);
        return this.afterCall(), cD
      }
      scratchPtr() {
        const DD = this.core.TID();
        return this.afterCall(), DD
      }
      invSwap(DD, CD) {
        const cD = this.core.yiD(DD, CD);
        return this.afterCall(), cD
      }
      invMove(DD, CD, cD) {
        const ID = this.core.wiD(DD, CD, cD);
        return this.afterCall(), ID
      }
      invQuickMove(DD, CD, cD, ID) {
        const pD = this.core.SiD(DD, CD, cD, ID);
        return this.afterCall(), pD
      }
      invRemove(DD, CD, cD) {
        const ID = this.core.BiD(DD, CD, cD);
        return this.afterCall(), ID
      }
      invEnchant(DD, CD, cD, ID, pD) {
        const iD = this.core.biD(DD, CD, cD, ID, pD);
        return this.afterCall(), iD
      }
      craft(DD, CD, cD) {
        const ID = this.core.craft(DD, CD, cD);
        return this.afterCall(), ID
      }
      salvage(DD, CD, cD) {
        const ID = this.core.salvage(DD, CD, cD);
        return this.afterCall(), ID
      }
      selectSlot(DD) {
        const CD = this.core.niD(DD);
        return this.afterCall(), CD
      }
      closeChest() {
        const DD = this.core.epD();
        return this.afterCall(), DD
      }
      itemAttributesBatch(DD) {
        const CD = this.core.uID(DD);
        return this.afterCall(), CD
      }
      itemNames() {
        const DD = this.core.UH();
        return this.afterCall(), DD
      }
      blockProps() {
        const DD = this.core.spD();
        return this.afterCall(), DD
      }
      itemProps() {
        const DD = this.core.MiD();
        return this.afterCall(), DD
      }
      salvageRecipe(DD) {
        const CD = this.core.DpD(DD);
        return this.afterCall(), CD
      }
      craftingView(DD, CD, cD) {
        const ID = this.core.eID(DD, CD, cD);
        return this.afterCall(), ID
      }
      directorView() {
        const DD = this.core.RID();
        return this.afterCall(), DD
      }
      directorDefaultPose() {
        const DD = this.core.dID();
        return this.afterCall(), DD
      }
      directorEntity(DD) {
        const CD = this.core.YID(DD);
        return this.afterCall(), CD
      }
      directorPose(DD, CD, cD, ID, pD, iD) {
        const fD = this.core.WID(DD, CD, cD, ID, pD, iD);
        return this.afterCall(), fD
      }
      passTimings(DD) {
        const CD = this.core.oiD(DD);
        return this.afterCall(), CD
      }
      drawCensus() {
        const DD = this.core.ApD();
        return this.afterCall(), DD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);